"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, CalendarDays, CreditCard, Lock, MapPin, ShieldCheck } from "lucide-react";
import { useLang, pick } from "@/lib/i18n";
import { WEIGHT_LOSS, fmtPrice } from "@/lib/programs";
import {
  LOCATIONS,
  formatDate,
  formatTime,
  loadSummary,
  type BookingSummary,
} from "@/lib/booking";
import { cn } from "@/lib/cn";

const STRIPE_LINK = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || "";
const PRICE = fmtPrice(WEIGHT_LOSS.price);

const COPY = {
  en: {
    step: "Step 2 of 3",
    title: (n: string) => `Thanks, ${n}. Your request is in.`,
    lead: "Pay now to reserve your spot, or pay at your visit. Either way, our team will call you to confirm.",
    yourRequest: "Your requested visit",
    timeNote: "This is your preferred time. We'll confirm the exact time when we call.",
    payNowTitle: "Pay now",
    payNowBody: `Pay ${PRICE} for your first month securely through Stripe.`,
    disclaimerTitle: "Paying in advance",
    disclaimer:
      "If you're not approved, or your doctor decides the program isn't a fit for you, you'll be fully refunded. You pay in advance, and someone from our team will call you to ask a few more questions and coordinate your visit.",
    renewal: `Today's charge is ${PRICE} for your first month. Your plan then renews at ${PRICE} every month until you cancel. Cancel anytime by emailing info@estrellamedicalcenters.com or telling the clinic. Injections already given and visits already completed are not refundable.`,
    agree: `I understand I'm paying ${PRICE} now and that my plan renews monthly until I cancel.`,
    agreeError: "Please check this box to pay now.",
    policies: "Refund policy",
    terms: "Terms",
    payNow: `Pay ${PRICE} with Stripe`,
    secure: "Card details are entered on Stripe's secure page. We never see or store your card number.",
    unavailable: "Online payment isn't available yet. You can pay at your visit.",
    laterTitle: "Pay at my visit",
    laterBody: "No payment today. You'll pay at the clinic.",
    later: "Pay at my visit",
    missingTitle: "We couldn't find your booking details.",
    missingBody: "This can happen if the page was opened in a new tab. Please book again, it only takes a minute.",
    missingCta: "Book a consultation",
  },
  es: {
    step: "Paso 2 de 3",
    title: (n: string) => `Gracias, ${n}. Recibimos tu solicitud.`,
    lead: "Paga ahora para reservar tu lugar o paga en tu visita. En ambos casos, nuestro equipo te llamará para confirmar.",
    yourRequest: "Tu visita solicitada",
    timeNote: "Esta es tu hora preferida. Confirmaremos la hora exacta cuando te llamemos.",
    payNowTitle: "Pagar ahora",
    payNowBody: `Paga ${PRICE} por tu primer mes de forma segura con Stripe.`,
    disclaimerTitle: "Pago por adelantado",
    disclaimer:
      "Si no eres aprobado, o tu médico decide que el programa no es adecuado para ti, se te reembolsará el total. Pagas por adelantado y una persona de nuestro equipo te llamará para hacerte unas preguntas más y coordinar tu visita.",
    renewal: `El cargo de hoy es de ${PRICE} por tu primer mes. Luego tu plan se renueva por ${PRICE} cada mes hasta que canceles. Cancela cuando quieras escribiendo a info@estrellamedicalcenters.com o avisando en la clínica. Las inyecciones ya aplicadas y las visitas ya realizadas no son reembolsables.`,
    agree: `Entiendo que pago ${PRICE} ahora y que mi plan se renueva cada mes hasta que cancele.`,
    agreeError: "Marca esta casilla para pagar ahora.",
    policies: "Política de reembolso",
    terms: "Términos",
    payNow: `Pagar ${PRICE} con Stripe`,
    secure: "Los datos de tu tarjeta se ingresan en la página segura de Stripe. Nunca vemos ni guardamos el número de tu tarjeta.",
    unavailable: "El pago en línea aún no está disponible. Puedes pagar en tu visita.",
    laterTitle: "Pagar en mi visita",
    laterBody: "Hoy no pagas nada. Pagarás en la clínica.",
    later: "Pagar en mi visita",
    missingTitle: "No encontramos los datos de tu reserva.",
    missingBody: "Puede pasar si abriste la página en otra pestaña. Vuelve a agendar, solo toma un minuto.",
    missingCta: "Agendar una consulta",
  },
};

function stripeUrl(summary: BookingSummary) {
  const url = new URL(STRIPE_LINK);
  url.searchParams.set("prefilled_email", summary.email);
  url.searchParams.set("client_reference_id", summary.bookingId);
  return url.toString();
}

export default function PaymentPage() {
  const router = useRouter();
  const { lang } = useLang();
  const t = pick(lang, COPY);
  const [summary, setSummary] = useState<BookingSummary | null | undefined>(undefined);
  const [agreed, setAgreed] = useState(false);
  const [agreeError, setAgreeError] = useState(false);

  useEffect(() => setSummary(loadSummary()), []);

  if (summary === undefined) return null; // reading the browser tab's storage

  if (summary === null) {
    return (
      <div className="mx-auto max-w-xl rounded-3xl bg-white p-8 text-center ring-1 ring-navy-900/[0.07]">
        <h1 className="font-heading text-[24px] font-bold text-navy-950">{t.missingTitle}</h1>
        <p className="mt-3 text-[15px] text-navy-900/75">{t.missingBody}</p>
        <Link href="/qualify" className="btn-pill mt-6">
          {t.missingCta}
          <ArrowRight aria-hidden className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  const location = LOCATIONS.find((l) => l.id === summary.locationId);

  const payNow = () => {
    if (!agreed) {
      setAgreeError(true);
      document.getElementById("pay-agree")?.focus();
      return;
    }
    window.location.href = stripeUrl(summary);
  };

  return (
    <div className="mx-auto max-w-5xl">
      <p className="eyebrow">{t.step}</p>
      <h1 className="mt-2 font-heading text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.03em] text-navy-950">
        {t.title(summary.firstName)}
      </h1>
      <p className="mt-3 max-w-xl text-[16px] leading-relaxed text-navy-900/75">{t.lead}</p>

      {/* Requested visit */}
      <section
        aria-labelledby="req-title"
        className="mt-8 rounded-3xl bg-white p-6 ring-1 ring-navy-900/[0.07] sm:p-7"
      >
        <h2 id="req-title" className="font-heading text-[15px] font-bold text-navy-950">
          {t.yourRequest}
        </h2>
        <dl className="mt-4 grid gap-4 text-[15px] sm:grid-cols-2">
          <div className="flex gap-3">
            <MapPin aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-sun-700" />
            <div>
              <dt className="sr-only">{lang === "es" ? "Centro" : "Location"}</dt>
              <dd className="font-semibold text-navy-950">{location?.name}</dd>
              <dd className="text-[13px] text-navy-900/75">{location?.address}</dd>
            </div>
          </div>
          <div className="flex gap-3">
            <CalendarDays aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-sun-700" />
            <div>
              <dt className="sr-only">{lang === "es" ? "Fecha y hora" : "Date and time"}</dt>
              <dd className="font-semibold text-navy-950">{formatDate(summary.date, lang)}</dd>
              <dd className="text-[13px] text-navy-900/75">{formatTime(summary.time, lang)}</dd>
            </div>
          </div>
        </dl>
        <p className="mt-4 text-[13px] text-navy-900/75">{t.timeNote}</p>
      </section>

      <div className="mt-6 grid gap-6 lg:grid-cols-12">
        {/* Pay now */}
        <section
          aria-labelledby="pay-title"
          className="rounded-3xl bg-navy-950 p-7 text-white sm:p-9 lg:col-span-8"
        >
          <div className="flex items-center gap-3">
            <CreditCard aria-hidden className="h-6 w-6 text-sun-300" />
            <h2 id="pay-title" className="font-heading text-[22px] font-bold">
              {t.payNowTitle}
            </h2>
          </div>
          <p className="mt-2 text-[15px] text-white/80">{t.payNowBody}</p>

          <div className="mt-6 rounded-2xl bg-white/[0.06] p-5 ring-1 ring-white/10">
            <div className="flex items-center gap-2">
              <ShieldCheck aria-hidden className="h-5 w-5 text-sun-300" />
              <h3 className="font-heading text-[15px] font-bold">{t.disclaimerTitle}</h3>
            </div>
            <p className="mt-2 text-[15px] leading-relaxed text-white/90">{t.disclaimer}</p>
          </div>

          <p className="mt-5 text-[14px] leading-relaxed text-white/80">
            {t.renewal}{" "}
            <Link href="/refunds" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">
              {t.policies}
            </Link>
            {" · "}
            <Link href="/terms" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">
              {t.terms}
            </Link>
          </p>

          {STRIPE_LINK ? (
            <>
              <label
                className={cn(
                  "mt-6 flex cursor-pointer items-start gap-3 rounded-2xl p-4 ring-1 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-sun-300",
                  agreeError ? "ring-2 ring-red-400" : "ring-white/15"
                )}
              >
                <input
                  id="pay-agree"
                  type="checkbox"
                  checked={agreed}
                  aria-invalid={agreeError}
                  aria-describedby={agreeError ? "pay-agree-error" : undefined}
                  onChange={(e) => {
                    setAgreed(e.target.checked);
                    if (e.target.checked) setAgreeError(false);
                  }}
                  className="mt-0.5 h-5 w-5 shrink-0 accent-sun-400"
                />
                <span className="text-[14px] leading-relaxed text-white/90">{t.agree}</span>
              </label>
              {agreeError && (
                <p id="pay-agree-error" role="alert" className="mt-2 text-[13px] font-semibold text-red-300">
                  {t.agreeError}
                </p>
              )}
              <button type="button" onClick={payNow} className="btn-pill mt-6 w-full sm:w-auto">
                <Lock aria-hidden className="h-4 w-4" />
                {t.payNow}
              </button>
              <p className="mt-3 text-[13px] text-white/75">{t.secure}</p>
            </>
          ) : (
            <p className="mt-6 rounded-2xl bg-white/[0.06] p-4 text-[14px] text-white/85 ring-1 ring-white/10">
              {t.unavailable}
            </p>
          )}
        </section>

        {/* Pay later */}
        <section
          aria-labelledby="later-title"
          className="flex flex-col rounded-3xl bg-white p-7 ring-1 ring-navy-900/[0.07] lg:col-span-4"
        >
          <h2 id="later-title" className="font-heading text-[18px] font-bold text-navy-950">
            {t.laterTitle}
          </h2>
          <p className="mt-2 text-[15px] text-navy-900/75">{t.laterBody}</p>
          <button
            type="button"
            onClick={() => router.push("/qualify/confirmed")}
            className="btn-pill-dark mt-6 w-full lg:mt-auto"
          >
            {t.later}
            <ArrowRight aria-hidden className="h-4 w-4" />
          </button>
        </section>
      </div>
    </div>
  );
}
