import { NextResponse } from "next/server";
import {
  CONSENT_TEXT,
  CONSENT_VERSION,
  LOCATIONS,
  formatDate,
  formatPhone,
  formatTime,
  normalizePhone,
  validateBooking,
  type BookingInput,
  type Lang,
} from "@/lib/booking";
import {
  TAGS,
  addNote,
  addTags,
  e164,
  ghlConfigured,
  upsertContact,
  upsertOpportunity,
} from "@/lib/ghl";
import { WEIGHT_LOSS } from "@/lib/programs";

// Booking requests go to GoHighLevel (see lib/ghl.ts): the contact is created
// or updated, tagged with the program and the chosen clinic, given a note with
// the requested (not yet confirmed) day and time, and placed in the GLP-1
// pipeline. Staff call the patient to confirm availability.
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
  const name = input.name.trim().replace(/\s+/g, " ");
  const [firstName, ...rest] = name.split(" ");
  const digits = normalizePhone(input.phone);

  if (!ghlConfigured()) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[booking] GoHighLevel is not configured; request accepted but not delivered (dev only).");
      return NextResponse.json({ ok: true, bookingId, delivered: false });
    }
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  // Staff read this note before calling. Always in English for the team.
  const note = [
    "GLP-1 Weight Loss: website booking request (NOT a confirmed appointment)",
    `Requested clinic: ${location.name}, ${location.address}`,
    `Requested time: ${formatDate(input.date, "en")} at ${formatTime(input.time, "en")} (Miami time)`,
    `Phone: ${formatPhone(input.phone)}`,
    `Preferred language: ${lang === "es" ? "Spanish" : "English"}`,
    `Booking reference: ${bookingId}`,
    `Consent (${CONSENT_VERSION}, ${lang}): ${CONSENT_TEXT[lang]}`,
    "Next step: call the patient to confirm availability with our doctors. Payment status is tagged \"paid\" when Stripe confirms it.",
  ].join("\n");

  let contactId: string;
  try {
    contactId = await upsertContact({
      firstName,
      lastName: rest.join(" ") || undefined,
      name,
      email: input.email.trim().toLowerCase(),
      phone: e164(digits),
    });
    await addTags(contactId, [TAGS.program, TAGS.source, TAGS.location(location.name)]);
  } catch (err) {
    console.error("[booking] GoHighLevel contact failed:", (err as Error).message);
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }

  // The contact and tags are what staff work from; a failed note or pipeline
  // card shouldn't turn away a patient whose request already landed.
  const extras = await Promise.allSettled([
    addNote(contactId, note),
    upsertOpportunity({
      contactId,
      name: `${name}: GLP-1 (${location.name})`,
      stageId: process.env.GHL_STAGE_NEW_ID,
      monetaryValue: WEIGHT_LOSS.price,
    }),
  ]);
  extras.forEach((r) => {
    if (r.status === "rejected") console.error("[booking] GoHighLevel follow-up failed:", (r.reason as Error).message);
  });

  return NextResponse.json({ ok: true, bookingId, delivered: true });
}
