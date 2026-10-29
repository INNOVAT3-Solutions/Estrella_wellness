"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, MapPin, PhoneCall, Loader2 } from "lucide-react";
import { useLang, pick } from "@/lib/i18n";
import { WEIGHT_LOSS, fmtPrice } from "@/lib/programs";
import { EstrellaStar } from "@/components/ui/estrella-star";
import {
  CONSENT_TEXT,
  HOURS_SUMMARY,
  LOCATIONS,
  dateRange,
  formatTime,
  saveSummary,
  slotsFor,
  validateBooking,
  type BookingErrors,
  type BookingField,
  type BookingInput,
} from "@/lib/booking";
import { cn } from "@/lib/cn";

const COPY = {
  en: {
    step: "Step 1 of 3",
    title: "Book your consultation",
    lead: "Tell us how to reach you and when you'd like to come in. It takes about a minute, and no health questions are asked here.",
    name: "Full name",
    phone: "Phone number",
    phoneHint: "We'll call this number to coordinate your visit.",
    email: "Email",
    location: "Choose the location closest to you",
    date: "Preferred date",
    time: "Preferred time",
    timePick: "Choose a time",
    timeFirst: "Choose a date first",
    closed: "Closed on Sundays",
    hours: "Our hours",
    consentLabel: "Consent",
    readTerms: "Terms of Service",
    readPrivacy: "Privacy Policy",
    opens: "(opens in a new tab)",
    required: "required",
    submit: "Continue to payment",
    sending: "Sending",
    fix: "Please fix the highlighted fields.",
    failTitle: "We couldn't send your request.",
    failBody: "Please try again in a moment, or email us at",
    failBody2: "and we'll book your visit.",
    sideTitle: "What happens next",
    side: [
      "Choose to pay now online or pay at your visit.",
      "Our team calls you to ask a few questions and coordinate your visit.",
      "You meet your doctor at the clinic for your consultation and blood work review.",
    ],
    sidePrice: "Limited-time price",
    perMonth: "/month",
    regular: "Regularly",
  },
  es: {
    step: "Paso 1 de 3",
    title: "Agenda tu consulta",
    lead: "Dinos cómo contactarte y cuándo te gustaría venir. Toma un minuto y aquí no te hacemos preguntas de salud.",
    name: "Nombre completo",
    phone: "Teléfono",
    phoneHint: "Te llamaremos a este número para coordinar tu visita.",
    email: "Correo electrónico",
    location: "Elige el centro más cercano a ti",
    date: "Fecha preferida",
    time: "Hora preferida",
    timePick: "Elige una hora",
    timeFirst: "Primero elige una fecha",
    closed: "Cerrado los domingos",
    hours: "Nuestro horario",
    consentLabel: "Consentimiento",
    readTerms: "Términos del Servicio",
    readPrivacy: "Política de Privacidad",
    opens: "(se abre en una pestaña nueva)",
    required: "obligatorio",
    submit: "Continuar al pago",
    sending: "Enviando",
    fix: "Corrige los campos marcados.",
    failTitle: "No pudimos enviar tu solicitud.",
    failBody: "Inténtalo de nuevo en un momento o escríbenos a",
    failBody2: "y agendamos tu visita.",
    sideTitle: "Qué sigue",
    side: [
      "Elige pagar ahora en línea o pagar en tu visita.",
      "Nuestro equipo te llama para hacerte unas preguntas y coordinar tu visita.",
      "Conoces a tu médico en la clínica para tu consulta y la revisión de tus análisis.",
    ],
    sidePrice: "Precio por tiempo limitado",
    perMonth: "/mes",
    regular: "Normalmente",
  },
};

const EMPTY: BookingInput = {
  name: "",
  phone: "",
  email: "",
  locationId: "",
  date: "",
  time: "",
  consent: false,
};

const FIELD_ORDER: BookingField[] = ["name", "phone", "email", "locationId", "date", "time", "consent"];

const inputCls = (invalid: boolean) =>
  cn(
    "input mt-2 placeholder:text-navy-900/60",
    invalid && "ring-2 ring-red-600 focus:ring-red-700"
  );

function Req({ label }: { label: string }) {
  return (
    <>
      <span aria-hidden className="text-red-700"> *</span>
      <span className="sr-only"> ({label})</span>
    </>
  );
}

function FieldError({ id, msg }: { id: string; msg?: string }) {
  if (!msg) return null;
  return (
    <p id={id} className="mt-2 text-[13px] font-medium text-red-700">
      {msg}
    </p>
  );
}

export default function BookingPage() {
  const router = useRouter();
  const { lang } = useLang();
  const t = pick(lang, COPY);

  const [form, setForm] = useState<BookingInput>(EMPTY);
  const [errors, setErrors] = useState<BookingErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "failed">("idle");
  const [honeypot, setHoneypot] = useState("");
  const summaryRef = useRef<HTMLDivElement>(null);

  const { min, max } = useMemo(() => dateRange(), []);
  const slots = form.date ? slotsFor(form.date) : [];

  const update = <K extends BookingField>(key: K, value: BookingInput[K]) => {
    setForm((f) => {
      const next = { ...f, [key]: value };
      if (key === "date") next.time = ""; // slots differ per day
      return next;
    });
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onDateChange = (value: string) => {
    update("date", value);
    const msg = validateBooking({ ...form, date: value, time: "" }, lang).date;
    setErrors((e) => ({ ...e, date: msg, time: undefined }));
  };

  const focusFirstError = (errs: BookingErrors) => {
    const first = FIELD_ORDER.find((f) => errs[f]);
    if (!first) return;
    const el = document.getElementById(
      first === "locationId" ? `loc-${form.locationId || LOCATIONS[0].id}` : `f-${first}`
    );
    el?.focus();
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateBooking(form, lang);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      focusFirstError(errs);
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, lang, company: honeypot }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.status === 422 && data.errors) {
        setErrors(data.errors);
        setStatus("idle");
        focusFirstError(data.errors);
        return;
      }
      if (!res.ok || !data.ok) throw new Error("failed");

      saveSummary({
        bookingId: data.bookingId,
        firstName: form.name.trim().split(/\s+/)[0],
        email: form.email.trim(),
        phone: form.phone,
        locationId: form.locationId,
        date: form.date,
        time: form.time,
      });
      router.push("/qualify/payment");
    } catch {
      setStatus("failed");
      requestAnimationFrame(() => summaryRef.current?.focus());
    }
  };

  const hasErrors = Object.values(errors).some(Boolean);

  return (
    <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-12">
      <div className="lg:col-span-8">
        <p className="eyebrow">{t.step}</p>
        <h1 className="mt-2 font-heading text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.03em] text-navy-950">
          {t.title}
        </h1>
        <p className="mt-3 max-w-xl text-[16px] leading-relaxed text-navy-900/75">{t.lead}</p>

        <div ref={summaryRef} tabIndex={-1} aria-live="assertive" className="outline-none">
          {status === "failed" && (
            <div role="alert" className="mt-6 rounded-2xl bg-red-50 p-5 text-[15px] text-red-900 ring-1 ring-red-200">
              <p className="font-semibold">{t.failTitle}</p>
              <p className="mt-1">
                {t.failBody}{" "}
                <a href="mailto:info@estrellamedicalcenters.com" className="font-semibold underline">
                  info@estrellamedicalcenters.com
                </a>{" "}
                {t.failBody2}
              </p>
            </div>
          )}
          {status === "idle" && hasErrors && (
            <p role="alert" className="mt-6 text-[14px] font-semibold text-red-700">
              {t.fix}
            </p>
          )}
        </div>

        <form
          noValidate
          onSubmit={onSubmit}
          className="mt-6 space-y-6 rounded-3xl bg-white p-6 shadow-[0_24px_60px_-28px_rgba(6,14,34,.30)] ring-1 ring-navy-900/[0.07] sm:p-8"
        >
          {/* Honeypot for bots: hidden from people and assistive tech */}
          <div aria-hidden className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
            <label htmlFor="f-company">Company</label>
            <input
              id="f-company"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="f-name" className="label">
              {t.name}
              <Req label={t.required} />
            </label>
            <input
              id="f-name"
              type="text"
              autoComplete="name"
              required
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "e-name" : undefined}
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className={inputCls(!!errors.name)}
            />
            <FieldError id="e-name" msg={errors.name} />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="f-phone" className="label">
                {t.phone}
                <Req label={t.required} />
              </label>
              <input
                id="f-phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                aria-required="true"
                aria-invalid={!!errors.phone}
                aria-describedby={`h-phone${errors.phone ? " e-phone" : ""}`}
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="(305) 555-0123"
                className={inputCls(!!errors.phone)}
              />
              <p id="h-phone" className="mt-2 text-[13px] text-navy-900/75">
                {t.phoneHint}
              </p>
              <FieldError id="e-phone" msg={errors.phone} />
            </div>
            <div>
              <label htmlFor="f-email" className="label">
                {t.email}
                <Req label={t.required} />
              </label>
              <input
                id="f-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "e-email" : undefined}
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className={inputCls(!!errors.email)}
              />
              <FieldError id="e-email" msg={errors.email} />
            </div>
          </div>

          <fieldset aria-describedby={errors.locationId ? "e-location" : undefined}>
            <legend className="label">
              {t.location}
              <Req label={t.required} />
            </legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {LOCATIONS.map((loc) => {
                const checked = form.locationId === loc.id;
                return (
                  <label
                    key={loc.id}
                    data-checked={checked}
                    className={cn(
                      "checkbox-card h-full flex-col gap-2 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-sun-500",
                      errors.locationId && "ring-2 ring-red-600"
                    )}
                  >
                    <input
                      id={`loc-${loc.id}`}
                      type="radio"
                      name="location"
                      value={loc.id}
                      checked={checked}
                      onChange={() => update("locationId", loc.id)}
                      className="sr-only"
                    />
                    <MapPin aria-hidden className={cn("h-5 w-5", checked ? "text-sun-700" : "text-navy-900/70")} />
                    <span className="text-[15px] font-semibold text-navy-950">{loc.name}</span>
                    <span className="text-[13px] leading-snug text-navy-900/75">{loc.address}</span>
                  </label>
                );
              })}
            </div>
            <FieldError id="e-location" msg={errors.locationId} />
          </fieldset>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="f-date" className="label">
                {t.date}
                <Req label={t.required} />
              </label>
              <input
                id="f-date"
                type="date"
                min={min}
                max={max}
                required
                aria-required="true"
                aria-invalid={!!errors.date}
                aria-describedby={`h-hours${errors.date ? " e-date" : ""}`}
                value={form.date}
                onChange={(e) => onDateChange(e.target.value)}
                className={inputCls(!!errors.date)}
              />
              <FieldError id="e-date" msg={errors.date} />
            </div>
            <div>
              <label htmlFor="f-time" className="label">
                {t.time}
                <Req label={t.required} />
              </label>
              <select
                id="f-time"
                required
                aria-required="true"
                aria-invalid={!!errors.time}
                aria-describedby={`h-hours${errors.time ? " e-time" : ""}`}
                disabled={slots.length === 0}
                value={form.time}
                onChange={(e) => update("time", e.target.value)}
                className={cn(inputCls(!!errors.time), "disabled:cursor-not-allowed disabled:bg-mist-50")}
              >
                <option value="">
                  {!form.date ? t.timeFirst : slots.length === 0 ? t.closed : t.timePick}
                </option>
                {slots.map((s) => (
                  <option key={s} value={s}>
                    {formatTime(s, lang)}
                  </option>
                ))}
              </select>
              <FieldError id="e-time" msg={errors.time} />
            </div>
          </div>
          <p id="h-hours" className="-mt-2 text-[13px] text-navy-900/75">
            {t.hours}: {HOURS_SUMMARY[lang]}.
          </p>

          <div>
            <label
              data-checked={form.consent}
              className={cn(
                "checkbox-card has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-sun-500",
                errors.consent && "ring-2 ring-red-600"
              )}
            >
              <input
                id="f-consent"
                type="checkbox"
                required
                aria-required="true"
                aria-invalid={!!errors.consent}
                aria-describedby={errors.consent ? "e-consent" : undefined}
                checked={form.consent}
                onChange={(e) => update("consent", e.target.checked)}
                className="mt-0.5 h-5 w-5 shrink-0 accent-navy-950"
              />
              <span className="text-[14px] leading-relaxed text-navy-900/80">
                {CONSENT_TEXT[lang]}
                <Req label={t.required} />
              </span>
            </label>
            <p className="mt-2 text-[13px] text-navy-900/75">
              <Link href="/terms" target="_blank" rel="noopener noreferrer" className="font-semibold text-navy-950 underline underline-offset-2">
                {t.readTerms}
                <span className="sr-only"> {t.opens}</span>
              </Link>
              {" · "}
              <Link href="/privacy" target="_blank" rel="noopener noreferrer" className="font-semibold text-navy-950 underline underline-offset-2">
                {t.readPrivacy}
                <span className="sr-only"> {t.opens}</span>
              </Link>
            </p>
            <FieldError id="e-consent" msg={errors.consent} />
          </div>

          <button type="submit" disabled={status === "sending"} className="btn-pill w-full sm:w-auto">
            {status === "sending" ? (
              <>
                <Loader2 aria-hidden className="h-4 w-4 animate-spin" />
                {t.sending}
              </>
            ) : (
              <>
                {t.submit}
                <ArrowRight aria-hidden className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      </div>

      <aside className="lg:col-span-4">
        <div className="rounded-3xl bg-navy-950 p-7 text-white lg:sticky lg:top-24">
          <EstrellaStar className="w-8" />
          <p className="mt-4 text-[13px] font-semibold text-sun-300">{t.sidePrice}</p>
          <p className="mt-1 flex items-baseline gap-2">
            <span className="text-[36px] font-extrabold leading-none tracking-tight">
              {fmtPrice(WEIGHT_LOSS.price)}
            </span>
            <span className="text-[14px] text-white/75">{t.perMonth}</span>
          </p>
          <p className="mt-1 text-[13px] text-white/75">
            {t.regular} <span className="line-through">{fmtPrice(WEIGHT_LOSS.regularPrice)}</span>
          </p>
          <h2 className="mt-7 font-heading text-[16px] font-bold">{t.sideTitle}</h2>
          <ol className="mt-4 space-y-4">
            {t.side.map((s, i) => (
              <li key={s} className="flex gap-3 text-[14px] leading-relaxed text-white/80">
                <span
                  aria-hidden
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-[12px] font-bold text-sun-300"
                >
                  {i === 1 ? <PhoneCall className="h-3.5 w-3.5" /> : i + 1}
                </span>
                {s}
              </li>
            ))}
          </ol>
        </div>
      </aside>
    </div>
  );
}
