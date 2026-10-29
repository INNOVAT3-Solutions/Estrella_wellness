"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, CalendarDays, MapPin, PhoneCall } from "lucide-react";
import { useLang, pick } from "@/lib/i18n";
import { EstrellaStar } from "@/components/ui/estrella-star";
import {
  LOCATIONS,
  clearSummary,
  formatDate,
  formatPhone,
  formatTime,
  loadSummary,
  type BookingSummary,
} from "@/lib/booking";

const COPY = {
  en: {
    step: "Step 3 of 3",
    title: "You're all set.",
    paid: "Thank you for your payment. If it went through, Stripe will email you a receipt.",
    unpaid: "You chose to pay at your visit.",
    call: (phone: string) =>
      `Someone from our team will call you at ${phone} to ask a few more questions and confirm your visit.`,
    callGeneric:
      "Someone from our team will call you to ask a few more questions and confirm your visit.",
    requested: "Your requested visit",
    timeNote: "Your preferred time is confirmed by phone.",
    refund:
      "If you paid in advance and you're not approved, or your doctor decides the program isn't a fit, you'll be fully refunded.",
    questions: "Questions before we call?",
    home: "Back to home page",
  },
  es: {
    step: "Paso 3 de 3",
    title: "¡Todo listo!",
    paid: "Gracias por tu pago. Si se procesó, Stripe te enviará un recibo por correo.",
    unpaid: "Elegiste pagar en tu visita.",
    call: (phone: string) =>
      `Una persona de nuestro equipo te llamará al ${phone} para hacerte unas preguntas más y confirmar tu visita.`,
    callGeneric:
      "Una persona de nuestro equipo te llamará para hacerte unas preguntas más y confirmar tu visita.",
    requested: "Tu visita solicitada",
    timeNote: "Tu hora preferida se confirma por teléfono.",
    refund:
      "Si pagaste por adelantado y no eres aprobado, o tu médico decide que el programa no es adecuado para ti, se te reembolsará el total.",
    questions: "¿Preguntas antes de que te llamemos?",
    home: "Volver a la página de inicio",
  },
};

function Confirmed() {
  const router = useRouter();
  const paid = useSearchParams().get("paid") === "1";
  const { lang } = useLang();
  const t = pick(lang, COPY);
  const [summary, setSummary] = useState<BookingSummary | null>(null);

  useEffect(() => setSummary(loadSummary()), []);

  const location = summary && LOCATIONS.find((l) => l.id === summary.locationId);

  return (
    <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 text-center shadow-[0_24px_60px_-28px_rgba(6,14,34,.30)] ring-1 ring-navy-900/[0.07] sm:p-12">
      <EstrellaStar className="mx-auto w-14" />
      <p className="eyebrow mt-6">{t.step}</p>
      <h1 className="mt-2 font-heading text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.03em] text-navy-950">
        {t.title}
      </h1>
      <p className="mt-4 text-[16px] text-navy-900/80">{paid ? t.paid : t.unpaid}</p>

      <div className="mt-6 flex items-start gap-3 rounded-2xl bg-sun-50 p-5 text-left ring-1 ring-sun-200">
        <PhoneCall aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-sun-700" />
        <p className="text-[15px] leading-relaxed text-navy-950">
          {summary ? t.call(formatPhone(summary.phone)) : t.callGeneric}
        </p>
      </div>

      {summary && location && (
        <section aria-labelledby="visit-title" className="mt-6 text-left">
          <h2 id="visit-title" className="font-heading text-[15px] font-bold text-navy-950">
            {t.requested}
          </h2>
          <ul className="mt-3 space-y-3 text-[15px]">
            <li className="flex gap-3">
              <MapPin aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-sun-700" />
              <span>
                <span className="block font-semibold text-navy-950">{location.name}</span>
                <span className="text-[13px] text-navy-900/75">{location.address}</span>
              </span>
            </li>
            <li className="flex gap-3">
              <CalendarDays aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-sun-700" />
              <span>
                <span className="block font-semibold text-navy-950">
                  {formatDate(summary.date, lang)}, {formatTime(summary.time, lang)}
                </span>
                <span className="text-[13px] text-navy-900/75">{t.timeNote}</span>
              </span>
            </li>
          </ul>
        </section>
      )}

      {paid && <p className="mt-6 text-[14px] text-navy-900/75">{t.refund}</p>}

      <p className="mt-6 text-[14px] text-navy-900/75">
        {t.questions}{" "}
        <a
          href="mailto:info@estrellamedicalcenters.com"
          className="font-semibold text-navy-950 underline underline-offset-2"
        >
          info@estrellamedicalcenters.com
        </a>
      </p>

      <button
        type="button"
        onClick={() => {
          clearSummary();
          router.push("/");
        }}
        className="btn-pill-dark mt-8"
      >
        {t.home}
        <ArrowRight aria-hidden className="h-4 w-4" />
      </button>
    </div>
  );
}

export default function ConfirmedPage() {
  return (
    <Suspense fallback={null}>
      <Confirmed />
    </Suspense>
  );
}
