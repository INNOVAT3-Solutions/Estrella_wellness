// Booking request: shared by the /qualify form (browser) and the
// /api/booking route (server) so both validate exactly the same way.

export type Lang = "en" | "es";

/* ------------------------------------------------------------------ */
/*  Locations and hours (America/New_York)                             */
/*  Keep each `id` stable once live; the CRM uses it to route the      */
/*  request. Hours are [open, close] in minutes after midnight, indexed */
/*  by JS weekday (0 = Sunday); null = closed. Slots are 30-minute     */
/*  start times that finish by closing.                                */
/* ------------------------------------------------------------------ */

type Hours = ([number, number] | null)[];

export type Location = {
  id: string;
  name: string;
  address: string;
  hours: Hours;
  hoursSummary: { en: string; es: string };
};

const h = (hh: number, mm = 0) => hh * 60 + mm;

// Mon-Fri 7:30 AM-5 PM, Sat 8 AM-3 PM
const WEEKDAY_EARLY_SAT: Hours = [null, ...Array(5).fill([h(7, 30), h(17)]), [h(8), h(15)]];
// Mon-Sat 8 AM-4:30 PM (Doral). Hours match each clinic page on estrellamedicalcenters.com/ubicaciones (checked 2026-11-04).
const MON_SAT: Hours = [null, ...Array(6).fill([h(8), h(16, 30)])];
// Mon-Fri 7:30 AM-5 PM
const WEEKDAYS_ONLY: Hours = [null, ...Array(5).fill([h(7, 30), h(17)]), null];

const SUMMARY = {
  earlySat: {
    en: "Monday to Friday 7:30 AM to 5:00 PM, Saturday 8:00 AM to 3:00 PM",
    es: "Lunes a viernes de 7:30 a. m. a 5:00 p. m., sábado de 8:00 a. m. a 3:00 p. m.",
  },
  monSat: {
    en: "Monday to Saturday 8:00 AM to 4:30 PM",
    es: "Lunes a sábado de 8:00 a. m. a 4:30 p. m.",
  },
  weekdays: {
    en: "Monday to Friday 7:30 AM to 5:00 PM",
    es: "Lunes a viernes de 7:30 a. m. a 5:00 p. m.",
  },
};

export const LOCATIONS: Location[] = [
  { id: "flagler", name: "Flagler", address: "4795 W Flagler St, Miami, FL 33134", hours: WEEKDAY_EARLY_SAT, hoursSummary: SUMMARY.earlySat },
  { id: "kendall", name: "Kendall", address: "13980 SW 47th St, Miami, FL 33175", hours: WEEKDAY_EARLY_SAT, hoursSummary: SUMMARY.earlySat },
  { id: "doral", name: "Doral", address: "10305 NW 41st St, Suite 227, Doral, FL 33178", hours: MON_SAT, hoursSummary: SUMMARY.monSat },
  { id: "hialeah", name: "Hialeah", address: "4305 E 8th Ave, Hialeah, FL 33013", hours: WEEKDAYS_ONLY, hoursSummary: SUMMARY.weekdays },
  { id: "plantation", name: "Plantation", address: "1860 N Pine Island Rd, Plantation, FL 33322", hours: WEEKDAYS_ONLY, hoursSummary: SUMMARY.weekdays },
  { id: "pembroke-pines", name: "Pembroke Pines", address: "1806 N Flamingo Rd, Suite 280, Pembroke Pines, FL 33028", hours: WEEKDAYS_ONLY, hoursSummary: SUMMARY.weekdays },
];

const SLOT_MINUTES = 30;

/** How far ahead a patient may request a date. */
export const BOOKING_WINDOW_DAYS = 60;

export const HOURS_VARY = {
  en: "Hours vary by clinic. Choose a location to see its hours",
  es: "El horario varía según el centro. Elige un centro para ver su horario",
};

const pad = (n: number) => String(n).padStart(2, "0");

/** Today's date in Miami as YYYY-MM-DD, regardless of the visitor's timezone. */
export function miamiToday(now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

/** Add days to a YYYY-MM-DD date (calendar math in UTC, no DST surprises). */
export function addDays(date: string, days: number): string {
  const [y, m, d] = date.split("-").map(Number);
  const t = new Date(Date.UTC(y, m - 1, d + days));
  return `${t.getUTCFullYear()}-${pad(t.getUTCMonth() + 1)}-${pad(t.getUTCDate())}`;
}

function weekday(date: string): number {
  const [y, m, d] = date.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).getUTCDay();
}

function isRealDate(date: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
  const [y, m, d] = date.split("-").map(Number);
  const t = new Date(Date.UTC(y, m - 1, d));
  return t.getUTCFullYear() === y && t.getUTCMonth() === m - 1 && t.getUTCDate() === d;
}

/** Earliest and latest requestable dates (tomorrow through the window). */
export function dateRange(now = new Date()) {
  const today = miamiToday(now);
  return { min: addDays(today, 1), max: addDays(today, BOOKING_WINDOW_DAYS) };
}

/** 24-hour "HH:MM" start times at a clinic on a date; empty when it's closed. */
export function slotsFor(date: string, locationId: string): string[] {
  const location = LOCATIONS.find((l) => l.id === locationId);
  if (!location || !isRealDate(date)) return [];
  const hours = location.hours[weekday(date)];
  if (!hours) return [];
  const [open, close] = hours;
  const out: string[] = [];
  for (let t = open; t + SLOT_MINUTES <= close; t += SLOT_MINUTES) {
    out.push(`${pad(Math.floor(t / 60))}:${pad(t % 60)}`);
  }
  return out;
}

/** "13:30" -> "1:30 PM" / "1:30 p. m." */
export function formatTime(time: string, lang: Lang): string {
  const [h, m] = time.split(":").map(Number);
  const h12 = ((h + 11) % 12) + 1;
  const suffix = lang === "es" ? (h < 12 ? "a. m." : "p. m.") : h < 12 ? "AM" : "PM";
  return `${h12}:${pad(m)} ${suffix}`;
}

/** "2026-11-03" -> "Tuesday, November 3, 2026" in the chosen language. */
export function formatDate(date: string, lang: Lang): string {
  if (!isRealDate(date)) return date;
  const [y, m, d] = date.split("-").map(Number);
  return new Intl.DateTimeFormat(lang === "es" ? "es-US" : "en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(y, m - 1, d)));
}

/* ------------------------------------------------------------------ */
/*  Validation                                                         */
/* ------------------------------------------------------------------ */

export type BookingInput = {
  name: string;
  phone: string;
  email: string;
  locationId: string;
  date: string;
  time: string;
  consent: boolean;
};

export type BookingField = keyof BookingInput;
export type BookingErrors = Partial<Record<BookingField, string>>;

const MESSAGES = {
  en: {
    name: "Please enter your full name.",
    phone: "Please enter a 10-digit US phone number.",
    email: "Please enter a valid email address.",
    locationId: "Please choose a location.",
    date: "Please choose a date from tomorrow up to 60 days ahead.",
    dateClosed: "This clinic is closed that day. Please choose another day.",
    time: "Please choose a time within our hours.",
    consent: "Please check this box to continue.",
  },
  es: {
    name: "Escribe tu nombre completo.",
    phone: "Escribe un número de teléfono de EE. UU. de 10 dígitos.",
    email: "Escribe un correo electrónico válido.",
    locationId: "Elige un centro.",
    date: "Elige una fecha desde mañana hasta 60 días después.",
    dateClosed: "Este centro está cerrado ese día. Elige otro día.",
    time: "Elige una hora dentro de nuestro horario.",
    consent: "Marca esta casilla para continuar.",
  },
};

/** Digits only, without a leading US country code. */
export function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
}

/** "3055551234" -> "(305) 555-1234" */
export function formatPhone(phone: string): string {
  const d = normalizePhone(phone);
  return d.length === 10 ? `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}` : phone;
}

export function validateBooking(
  input: BookingInput,
  lang: Lang = "en",
  now = new Date()
): BookingErrors {
  const t = MESSAGES[lang];
  const errors: BookingErrors = {};
  const name = input.name.trim();
  if (name.length < 2 || name.length > 100) errors.name = t.name;

  if (normalizePhone(input.phone).length !== 10) errors.phone = t.phone;

  const email = input.email.trim();
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    errors.email = t.email;
  }

  if (!LOCATIONS.some((l) => l.id === input.locationId)) errors.locationId = t.locationId;

  const { min, max } = dateRange(now);
  if (!isRealDate(input.date) || input.date < min || input.date > max) {
    errors.date = t.date;
  } else if (!errors.locationId && slotsFor(input.date, input.locationId).length === 0) {
    errors.date = t.dateClosed;
  } else if (!slotsFor(input.date, input.locationId).includes(input.time)) {
    errors.time = t.time;
  }

  if (input.consent !== true) errors.consent = t.consent;
  return errors;
}

/* ------------------------------------------------------------------ */
/*  Consent text (sent with each request so the CRM keeps a record of  */
/*  exactly what the patient agreed to). Bump the version on changes.  */
/* ------------------------------------------------------------------ */

export const CONSENT_VERSION = "2026-10-29";

export const CONSENT_TEXT = {
  en: "I agree to the Terms of Service and Privacy Policy, and I agree that Estrella Medical Centers may contact me by phone, text message or email about this booking. Message and data rates may apply. Reply STOP to opt out of texts. Consent is not a condition of purchase.",
  es: "Acepto los Términos del Servicio y la Política de Privacidad, y acepto que Estrella Medical Centers me contacte por teléfono, mensaje de texto o correo electrónico sobre esta reserva. Pueden aplicarse cargos por mensajes y datos. Responde STOP para dejar de recibir mensajes de texto. El consentimiento no es una condición de compra.",
};

/* ------------------------------------------------------------------ */
/*  Booking summary kept in the browser tab between steps              */
/* ------------------------------------------------------------------ */

export const BOOKING_STORAGE_KEY = "estrella-booking";

export type BookingSummary = {
  bookingId: string;
  firstName: string;
  email: string;
  phone: string;
  locationId: string;
  date: string;
  time: string;
};

export function saveSummary(summary: BookingSummary) {
  try {
    sessionStorage.setItem(BOOKING_STORAGE_KEY, JSON.stringify(summary));
  } catch {
    /* storage unavailable: the payment page falls back gracefully */
  }
}

export function loadSummary(): BookingSummary | null {
  try {
    const raw = sessionStorage.getItem(BOOKING_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as BookingSummary) : null;
  } catch {
    return null;
  }
}

export function clearSummary() {
  try {
    sessionStorage.removeItem(BOOKING_STORAGE_KEY);
  } catch {
    /* ignore */
  }
}
