import { NextResponse } from "next/server";
import {
  CONSENT_TEXT,
  CONSENT_VERSION,
  LOCATIONS,
  formatPhone,
  normalizePhone,
  validateBooking,
  type BookingInput,
  type Lang,
} from "@/lib/booking";

// Booking requests are forwarded to Estrella's CRM / booking system.
//
//   BOOKING_WEBHOOK_URL     required in production. The CRM's inbound
//                           webhook URL (HTTPS).
//   BOOKING_WEBHOOK_SECRET  optional. Sent as "Authorization: Bearer ..."
//                           so the CRM can reject requests from anyone else.
//
// Nothing is stored on this server, and personal details are never logged.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const str = (v: unknown, max = 300) =>
  typeof v === "string" ? v.slice(0, max) : "";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: real people never see or fill this field.
  if (str(body.company)) {
    return NextResponse.json({ ok: true, bookingId: crypto.randomUUID() });
  }

  const lang: Lang = body.lang === "es" ? "es" : "en";
  const input: BookingInput = {
    name: str(body.name, 100),
    phone: str(body.phone, 30),
    email: str(body.email, 254),
    locationId: str(body.locationId, 50),
    date: str(body.date, 10),
    time: str(body.time, 5),
    consent: body.consent === true,
  };

  const errors = validateBooking(input, lang);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, error: "invalid", errors }, { status: 422 });
  }

  const bookingId = crypto.randomUUID();
  const location = LOCATIONS.find((l) => l.id === input.locationId)!;
  const payload = {
    bookingId,
    source: "estrella-wellness-website",
    program: "GLP-1 Weight Loss Program",
    submittedAt: new Date().toISOString(),
    language: lang,
    name: input.name.trim(),
    phone: formatPhone(input.phone),
    phoneDigits: normalizePhone(input.phone),
    email: input.email.trim().toLowerCase(),
    location: { id: location.id, name: location.name, address: location.address },
    preferredDate: input.date,
    preferredTime: input.time,
    timezone: "America/New_York",
    consent: {
      agreed: true,
      version: CONSENT_VERSION,
      text: CONSENT_TEXT[lang],
    },
  };

  const url = process.env.BOOKING_WEBHOOK_URL;
  if (!url) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[booking] BOOKING_WEBHOOK_URL is not set; request accepted but not delivered (dev only).");
      return NextResponse.json({ ok: true, bookingId, delivered: false });
    }
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.BOOKING_WEBHOOK_SECRET
          ? { Authorization: `Bearer ${process.env.BOOKING_WEBHOOK_SECRET}` }
          : {}),
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      console.error(`[booking] CRM webhook responded ${res.status}`);
      return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
    }
  } catch {
    console.error("[booking] CRM webhook request failed");
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, bookingId, delivered: true });
}
