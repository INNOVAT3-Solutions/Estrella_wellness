"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  CheckCircle2,
  AlertTriangle,
  Stethoscope,
  ArrowRight,
} from "lucide-react";
import { useIntake, computeRiskTier } from "@/lib/intake-store";
import { WEIGHT_LOSS, fmtPrice, programCopy } from "@/lib/programs";
import { useLang, pick } from "@/lib/i18n";

const COPY = {
  en: {
    submitting: "Submitting your consultation…",
    submittingBody:
      "Encrypting your information and routing it to our clinical team.",
    fileId: "File ID",
    thanks: (name: string) => `Thanks, ${name} — your consultation is in.`,
    fallbackName: "there",
    notesLabel: "Notes for your provider",
    timeline: [
      ["Provider review", "Within 24 hrs"],
      ["Possible follow-up", "Messaging / video"],
      ["Pharmacy fulfillment", "3–5 business days"],
    ] as [string, string][],
    programEyebrow: "Your program",
    programPrice: (promo: string, regular: string) =>
      `${promo}/month — limited-time special (reg. ${regular}/month). Consultation, doctor-designated peptide, guided nutrition plan, and management exercises included.`,
    seeDetails: "See program details",
    openDashboard: "Open my dashboard",
    disclaimer:
      "Final treatment is at the discretion of the licensed clinician assigned to your case. Suggestions are not a prescription.",
    editLink: "← Edit my consultation",
    editConfirm:
      "Editing your consultation will keep your responses but return you to the start. Continue?",
    resetLink: "Reset consultation",
    resetConfirm:
      "Reset your consultation? All saved responses on this device will be cleared.",
    tiers: {
      low: {
        label: "Async approval",
        headline: "You look like a great fit for async review.",
        body: "A licensed provider will review your file and respond — typically within 24 hours.",
      },
      moderate: {
        label: "Provider follow-up",
        headline: "Your provider may message you for a few clarifications.",
        body: "Based on your responses, your provider will follow up via secure messaging before approving a plan.",
      },
      high: {
        label: "Telemedicine visit required",
        headline: "Let's schedule a video visit.",
        body: "A few items in your consultation mean we'll want to speak with you directly before any prescription is written.",
      },
    },
  },
  es: {
    submitting: "Enviando tu consulta…",
    submittingBody:
      "Cifrando tu información y enviándola a nuestro equipo clínico.",
    fileId: "Expediente",
    thanks: (name: string) => `Gracias, ${name} — recibimos tu consulta.`,
    fallbackName: "hola",
    notesLabel: "Notas para tu médico",
    timeline: [
      ["Revisión médica", "En 24 hrs"],
      ["Posible seguimiento", "Mensajes / video"],
      ["Preparación en farmacia", "3–5 días hábiles"],
    ] as [string, string][],
    programEyebrow: "Tu programa",
    programPrice: (promo: string, regular: string) =>
      `${promo} al mes — especial por tiempo limitado (precio regular ${regular} al mes). Incluye la consulta, el péptido designado por tu médico, el plan de nutrición guiado y los ejercicios de manejo.`,
    seeDetails: "Ver detalles del programa",
    openDashboard: "Abrir mi panel",
    disclaimer:
      "El tratamiento final queda a discreción del médico licenciado asignado a tu caso. Las sugerencias no son una receta.",
    editLink: "← Editar mi consulta",
    editConfirm:
      "Editar tu consulta conservará tus respuestas pero te llevará de nuevo al inicio. ¿Continuar?",
    resetLink: "Reiniciar consulta",
    resetConfirm:
      "¿Reiniciar tu consulta? Se borrarán todas las respuestas guardadas en este dispositivo.",
    tiers: {
      low: {
        label: "Aprobación asíncrona",
        headline: "Pareces un gran candidato para revisión asíncrona.",
        body: "Un proveedor licenciado revisará tu expediente y responderá — normalmente en 24 horas.",
      },
      moderate: {
        label: "Seguimiento médico",
        headline: "Tu médico podría escribirte para aclarar algunos puntos.",
        body: "Según tus respuestas, tu médico dará seguimiento por mensajería segura antes de aprobar un plan.",
      },
      high: {
        label: "Se requiere visita de telemedicina",
        headline: "Agendemos una videollamada.",
        body: "Algunos puntos de tu consulta requieren que hablemos contigo directamente antes de emitir cualquier receta.",
      },
    },
  },
};

const TIER_STYLE = {
  low: { color: "bg-green-100 text-green-800", icon: CheckCircle2 },
  moderate: { color: "bg-sun-100 text-sun-700", icon: Stethoscope },
  high: { color: "bg-rose-100 text-rose-800", icon: AlertTriangle },
};

export default function ReviewPage() {
  const { data, reset } = useIntake();
  const { lang } = useLang();
  const t = pick(lang, COPY);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // simulate submission
    const timer = setTimeout(() => setSubmitted(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const { tier, reasons } = useMemo(() => computeRiskTier(data), [data]);
  const program = programCopy(lang);
  const promo = fmtPrice(WEIGHT_LOSS.price);
  const regular = fmtPrice(WEIGHT_LOSS.regularPrice);

  if (!submitted) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <div className="mt-10 h-12 w-12 animate-spin rounded-full border-4 border-navy-100 border-t-sun-500" />
        <div className="mt-6 font-display text-2xl text-navy-900">
          {t.submitting}
        </div>
        <p className="mt-2 text-sm text-navy-600">{t.submittingBody}</p>
      </div>
    );
  }

  const tierCopy = t.tiers[tier];
  const tierStyle = TIER_STYLE[tier];

  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-[2rem] border border-navy-100 bg-white p-8 shadow-card sm:p-10">
        <div className="flex items-center gap-3">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${tierStyle.color}`}
          >
            {tierCopy.label}
          </span>
          <span className="text-xs text-navy-500">
            {t.fileId} #{Math.floor(Math.random() * 9000 + 1000)}
          </span>
        </div>
        <h1 className="mt-5 font-display text-3xl text-navy-900 sm:text-4xl">
          {t.thanks(data.fullName.split(" ")[0] || t.fallbackName)}
        </h1>
        <p className="mt-3 text-navy-600">{tierCopy.headline}</p>
        <p className="mt-1 text-sm text-navy-500">{tierCopy.body}</p>

        {reasons.length > 0 && (
          <div className="mt-6 rounded-2xl border border-navy-100 bg-sand-50 p-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-navy-500">
              {t.notesLabel}
            </div>
            <ul className="mt-2 space-y-1 text-sm text-navy-700">
              {reasons.map((r) => (
                <li key={r} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sun-500" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8 grid gap-4 rounded-2xl border border-navy-100 p-5 sm:grid-cols-3">
          {t.timeline.map(([label, value]) => (
            <div key={label}>
              <div className="text-xs uppercase tracking-wider text-navy-500">
                {label}
              </div>
              <div className="mt-1 font-semibold text-navy-900">{value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-[2rem] border border-navy-100 bg-white p-8 shadow-card sm:p-10">
        <div className="text-xs font-semibold uppercase tracking-wider text-sun-600">
          {t.programEyebrow}
        </div>
        <h2 className="mt-2 font-display text-2xl text-navy-900">
          {program.headline}
        </h2>
        <p className="mt-2 text-navy-600">{program.tagline}</p>
        <p className="mt-3 text-sm font-medium text-navy-700">
          {t.programPrice(promo, regular)}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {program.compounds.slice(0, 4).map((c) => (
            <span
              key={c.name}
              className="rounded-full border border-navy-100 bg-sand-50 px-3 py-1 text-xs font-medium text-navy-700"
            >
              {c.name}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/programs/${WEIGHT_LOSS.slug}`}
            className="btn-secondary text-sm"
          >
            {t.seeDetails}
          </Link>
          <Link href="/dashboard" className="btn-primary text-sm">
            {t.openDashboard}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <p className="mt-6 text-xs text-navy-500">{t.disclaimer}</p>
      </div>

      <div className="mt-6 flex items-center justify-between text-sm">
        <Link
          href="/qualify/account"
          className="font-medium text-navy-700 hover:text-sun-600"
          onClick={(e) => {
            if (!confirm(t.editConfirm)) {
              e.preventDefault();
            }
          }}
        >
          {t.editLink}
        </Link>
        <button
          type="button"
          onClick={() => {
            if (confirm(t.resetConfirm)) {
              reset();
              window.location.href = "/qualify";
            }
          }}
          className="text-navy-500 hover:text-rose-600"
        >
          {t.resetLink}
        </button>
      </div>
    </div>
  );
}
