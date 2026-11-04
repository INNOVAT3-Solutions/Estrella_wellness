import { createHmac, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import { TAGS, addNote, addTags, ghlConfigured, moveOpportunity, upsertContact } from "@/lib/ghl";

// Stripe calls this when someone pays through the Payment Link. We tag the
// GoHighLevel contact "paid" and move their GLP-1 card to the Paid stage.
//
//   STRIPE_WEBHOOK_SECRET  signing secret of the Stripe webhook endpoint
//                          (starts with whsec_). Requests without a valid
//                          signature are rejected.
//
// Stripe sends the email the patient paid with; the payment page prefills it
// with the email from the booking form, so it matches the contact we created.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TOLERANCE_SECONDS = 300;

/** Checks the Stripe-Signature header (t=...,v1=...) against the raw body. */
function verify(raw: string, header: string | null, secret: string): boolean {
  if (!header) return false;
  const parts = header.split(",").map((p) => p.split("=") as [string, string]);
  const t = parts.find(([k]) => k === "t")?.[1];
  const sigs = parts.filter(([k]) => k === "v1").map(([, v]) => v);
  if (!t || sigs.length === 0) return false;
  if (Math.abs(Date.now() / 1000 - Number(t)) > TOLERANCE_SECONDS) return false;
  const expected = createHmac("sha256", secret).update(`${t}.${raw}`).digest();
  return sigs.some((s) => {
    const got = Buffer.from(s, "hex");
    return got.length === expected.length && timingSafeEqual(got, expected);
  });
}

type CheckoutSession = {
  id: string;
  payment_status: string;
  amount_total: number | null;
  client_reference_id: string | null;
  customer_email: string | null;
  customer_details: { email: string | null; name: string | null; phone: string | null } | null;
};

export async function POST(request: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) return NextResponse.json({ error: "not_configured" }, { status: 503 });

  const raw = await request.text();
  if (!verify(raw, request.headers.get("stripe-signature"), secret)) {
    return NextResponse.json({ error: "invalid_signature" }, { status: 400 });
  }

  const event = JSON.parse(raw) as { type: string; data: { object: CheckoutSession } };
  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true, ignored: event.type });
  }

  const session = event.data.object;
  const email = (session.customer_details?.email ?? session.customer_email ?? "").trim().toLowerCase();
  if (session.payment_status !== "paid" || !email || !ghlConfigured()) {
    return NextResponse.json({ received: true, skipped: true });
  }

  try {
    const contactId = await upsertContact({
      email,
      ...(session.customer_details?.phone ? { phone: session.customer_details.phone } : {}),
    });
    await addTags(contactId, [TAGS.paid, TAGS.program]);
    const amount = ((session.amount_total ?? 0) / 100).toFixed(2);
    await Promise.allSettled([
      addNote(
        contactId,
        [
          `GLP-1 Weight Loss: paid $${amount} online through Stripe.`,
          `Stripe checkout session: ${session.id}`,
          session.client_reference_id ? `Booking reference: ${session.client_reference_id}` : "",
        ]
          .filter(Boolean)
          .join("\n")
      ),
      moveOpportunity({
        contactId,
        stageId: process.env.GHL_STAGE_PAID_ID,
        fallbackName: `${session.customer_details?.name ?? email}: GLP-1`,
      }),
    ]);
  } catch (err) {
    // A non-2xx makes Stripe retry later, which is what we want here.
    console.error("[stripe] GoHighLevel update failed:", (err as Error).message);
    return NextResponse.json({ error: "crm_failed" }, { status: 502 });
  }

  return NextResponse.json({ received: true });
}
