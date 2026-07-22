"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Stethoscope,
  Lock,
} from "lucide-react";
import { useLang, pick } from "@/lib/i18n";
import { WEIGHT_LOSS, fmtPrice, programCopy } from "@/lib/programs";

const COPY = {
  en: {
    eyebrow: "GLP-1 Weight Loss Consultation",
    h1a: "Your weight loss consultation",
    h1b: " — starts here.",
    intro:
      "About ten minutes. Your answers save automatically. A licensed Estrella provider reviews your file and designs your personal GLP-1 weight loss plan — usually within 24 hours. There's no charge until a provider determines you're a fit.",
    priceLine: (promo: string, regular: string) =>
      `Limited-time special: ${promo}/month (reg. ${regular}/month) — consultation included.`,
    reassurance: [
      { title: "~10 minutes", body: "Progress saves automatically" },
      { title: "Encrypted", body: "Stored securely · never sold" },
      { title: "Provider reviewed", body: "Every patient · every time" },
      { title: "No charge", body: "Until a provider approves" },
    ],
    cta: "Start my consultation",
    howItWorks: "How it works",
    imageAlt: "Patient completing the Estrella intake on a phone",

    includedEyebrow: "What's included",
    includedH2a: "One monthly price.",
    includedH2b: "Everything included.",
    includedPrice: (promo: string, regular: string) =>
      `${promo}/month — limited-time special (reg. ${regular}/month). Your consultation is included.`,

    askedEyebrow: "What you'll be asked",
    askedH2a: "Eight short",
    askedH2b: "sections.",
    askedBody:
      "Plain language, never tricky. Every answer is reviewed by a licensed clinician credentialed in the state where you live.",
    sections: [
      { title: "Account", body: "Contact and shipping details." },
      { title: "Your goals", body: "What you want to achieve with your weight." },
      { title: "Health history", body: "Conditions and safety screening." },
      { title: "Current medications", body: "Prescriptions and supplements." },
      { title: "Allergies", body: "Medication allergies and safety checks." },
      { title: "Weight loss details", body: "Your history with weight management." },
      { title: "Lifestyle", body: "Sleep, activity, and daily habits." },
      { title: "Consent", body: "Telehealth consents and disclosures." },
    ],

    nextEyebrow: "What happens next",
    nextH2a: "You submit.",
    nextH2b: "We read carefully.",
    nextSteps: [
      {
        when: "Within 24 hrs",
        title: "A doctor reviews your consultation",
        body: "If the GLP-1 program is right for you, your doctor designates your peptide and designs your guided nutrition plan and management exercises. If not, you'll hear why — clearly and respectfully. No charge if you're not a fit.",
      },
      {
        when: "Days 3–5 after approval",
        title: "Discreet shipment",
        body: "Your doctor-designated GLP-1 peptide is dispensed by a partner state-licensed compounding pharmacy and shipped in plain packaging.",
      },
      {
        when: "Ongoing",
        title: "Continuous, supervised weight loss",
        body: "Doctor check-ins, refills, your nutrition plan, and management exercises live in your dashboard. Pause, change, or cancel any time.",
      },
    ],

    readyTitle: "Ready when you are.",
    readyBody: (promo: string, regular: string) =>
      `About ten minutes. No charge until a doctor approves your file. Limited-time special: ${promo}/month (reg. ${regular}/month).`,

    importantLabel: "Important",
    compliancePre:
      "By beginning your consultation, you acknowledge that telehealth services are subject to the regulations of the state where you live. The GLP-1 medications offered by Estrella may be ",
    complianceBold: "compounded medications",
    compliancePost:
      " — preparations made by a state-licensed compounding pharmacy under a clinician's prescription. Compounded combinations are not FDA-approved. Treatment is at the discretion of a licensed clinician based on your intake, medical history, labs, and goals. The information here is educational and is not a recommendation, diagnosis, or guarantee of outcome.",
  },

  es: {
    eyebrow: "Consulta de Pérdida de Peso GLP-1",
    h1a: "Tu consulta de pérdida de peso",
    h1b: " — empieza aquí.",
    intro:
      "Unos diez minutos. Tus respuestas se guardan automáticamente. Un proveedor licenciado de Estrella revisa tu expediente y diseña tu plan personal de pérdida de peso con GLP-1 — normalmente en 24 horas. No hay ningún cargo hasta que un médico determine que eres candidato.",
    priceLine: (promo: string, regular: string) =>
      `Especial por tiempo limitado: ${promo} al mes (precio regular ${regular} al mes) — consulta incluida.`,
    reassurance: [
      { title: "~10 minutos", body: "Tu avance se guarda automáticamente" },
      { title: "Cifrado", body: "Guardado de forma segura · nunca se vende" },
      { title: "Revisión médica", body: "Cada paciente · siempre" },
      { title: "Sin cargo", body: "Hasta que un médico apruebe" },
    ],
    cta: "Iniciar mi consulta",
    howItWorks: "Cómo funciona",
    imageAlt: "Paciente completando el cuestionario de Estrella en su teléfono",

    includedEyebrow: "Qué incluye",
    includedH2a: "Un solo precio mensual.",
    includedH2b: "Todo incluido.",
    includedPrice: (promo: string, regular: string) =>
      `${promo} al mes — especial por tiempo limitado (precio regular ${regular} al mes). Tu consulta está incluida.`,

    askedEyebrow: "Qué te vamos a preguntar",
    askedH2a: "Ocho secciones",
    askedH2b: "breves.",
    askedBody:
      "Lenguaje sencillo, sin trucos. Cada respuesta la revisa un médico licenciado y acreditado en el estado donde vives.",
    sections: [
      { title: "Cuenta", body: "Datos de contacto y envío." },
      { title: "Tus metas", body: "Lo que quieres lograr con tu peso." },
      { title: "Historial de salud", body: "Condiciones y evaluación de seguridad." },
      { title: "Medicamentos actuales", body: "Recetas y suplementos." },
      { title: "Alergias", body: "Alergias a medicamentos y controles de seguridad." },
      { title: "Detalles de pérdida de peso", body: "Tu historia con el manejo del peso." },
      { title: "Estilo de vida", body: "Sueño, actividad y hábitos diarios." },
      { title: "Consentimiento", body: "Consentimientos y avisos de telesalud." },
    ],

    nextEyebrow: "Qué sigue después",
    nextH2a: "Tú envías.",
    nextH2b: "Nosotros leemos con cuidado.",
    nextSteps: [
      {
        when: "En 24 hrs",
        title: "Un médico revisa tu consulta",
        body: "Si el programa GLP-1 es adecuado para ti, tu médico designa tu péptido y diseña tu plan de nutrición guiado y tus ejercicios de manejo. Si no, sabrás por qué — con claridad y respeto. Sin cargo si no eres candidato.",
      },
      {
        when: "Días 3–5 tras la aprobación",
        title: "Envío discreto",
        body: "Tu péptido GLP-1 designado por el médico lo prepara una farmacia magistral asociada con licencia estatal y se envía en un empaque discreto.",
      },
      {
        when: "Continuo",
        title: "Pérdida de peso continua y supervisada",
        body: "Los chequeos con tu médico, los resurtidos, tu plan de nutrición y tus ejercicios de manejo viven en tu panel. Pausa, cambia o cancela cuando quieras.",
      },
    ],

    readyTitle: "Cuando tú digas.",
    readyBody: (promo: string, regular: string) =>
      `Unos diez minutos. Sin cargo hasta que un médico apruebe tu expediente. Especial por tiempo limitado: ${promo} al mes (precio regular ${regular} al mes).`,

    importantLabel: "Importante",
    compliancePre:
      "Al iniciar tu consulta, reconoces que los servicios de telesalud están sujetos a las regulaciones del estado donde vives. Los medicamentos GLP-1 que ofrece Estrella pueden ser ",
    complianceBold: "medicamentos magistrales",
    compliancePost:
      " — preparaciones hechas por una farmacia magistral con licencia estatal bajo la receta de un médico. Las combinaciones magistrales no están aprobadas por la FDA. El tratamiento queda a discreción de un médico licenciado según tu cuestionario, historial médico, laboratorios y metas. La información aquí es educativa y no constituye una recomendación, diagnóstico ni garantía de resultado.",
  },
};

export default function QualifyIntroPage() {
  const { lang } = useLang();
  const t = pick(lang, COPY);
  const promo = fmtPrice(WEIGHT_LOSS.price);
  const regular = fmtPrice(WEIGHT_LOSS.regularPrice);
  const includes = programCopy(lang).includes;

  return (
    <>
      {/* Editorial header */}
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <div className="eyebrow">{t.eyebrow}</div>
          <h1 className="mt-6 font-display text-display-lg font-light leading-[1.02] text-navy-900">
            {t.h1a}
            <span className="font-normal italic">{t.h1b}</span>
          </h1>
          <p className="mt-7 max-w-xl text-[17px] leading-[1.7] text-navy-900/75">
            {t.intro}
          </p>
          <p className="mt-4 max-w-xl text-[15px] font-semibold leading-[1.6] text-sun-700">
            {t.priceLine(promo, regular)}
          </p>

          {/* Reassurance strip — hairline-bordered, not boxy */}
          <div className="mt-10 grid gap-x-10 gap-y-5 border-y border-navy-900/15 py-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.reassurance.map(({ title, body }, i) => {
              const Icon = [Clock, Lock, Stethoscope, ShieldCheck][i];
              return (
                <div key={title} className="flex items-start gap-3">
                  <Icon
                    className="mt-1 h-4 w-4 shrink-0 text-sun-700"
                    strokeWidth={1.75}
                  />
                  <div>
                    <div className="text-[13px] font-semibold text-navy-900">
                      {title}
                    </div>
                    <div className="mt-0.5 text-[12px] text-navy-900/55">
                      {body}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link href="/qualify/account" className="btn-accent">
              {t.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/how-it-works" className="btn-link">
              {t.howItWorks}
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-navy-100">
            <Image
              src="/images/form-fill-scene.png"
              alt={t.imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* What's included */}
      <div className="mt-24 grid gap-14 border-t border-navy-900/15 pt-16 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <div className="eyebrow">{t.includedEyebrow}</div>
          <h2 className="mt-5 font-display text-display-md font-light leading-[1.05] text-navy-900">
            {t.includedH2a}
            <br />
            <span className="font-normal italic">{t.includedH2b}</span>
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-[1.7] text-navy-900/70">
            {t.includedPrice(promo, regular)}
          </p>
        </div>

        <ol className="lg:col-span-7 divide-y divide-navy-900/12 border-y border-navy-900/15">
          {includes.map((s, i) => (
            <li
              key={s.title}
              className="flex items-baseline gap-6 py-5 sm:gap-10 sm:py-6"
            >
              <span className="font-display text-sm font-light text-navy-900/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <div className="font-display text-lg font-medium text-navy-900 sm:text-xl">
                  {s.title}
                </div>
                <div className="mt-1 text-[13.5px] leading-relaxed text-navy-900/65 sm:text-sm">
                  {s.body}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* What you'll be asked */}
      <div className="mt-24 grid gap-14 border-t border-navy-900/15 pt-16 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <div className="eyebrow">{t.askedEyebrow}</div>
          <h2 className="mt-5 font-display text-display-md font-light leading-[1.05] text-navy-900">
            {t.askedH2a}
            <br />
            <span className="font-normal italic">{t.askedH2b}</span>
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-[1.7] text-navy-900/70">
            {t.askedBody}
          </p>
        </div>

        <ol className="lg:col-span-7 divide-y divide-navy-900/12 border-y border-navy-900/15">
          {t.sections.map((s, i) => (
            <li
              key={s.title}
              className="flex items-baseline gap-6 py-5 sm:gap-10 sm:py-6"
            >
              <span className="font-display text-sm font-light text-navy-900/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <div className="font-display text-lg font-medium text-navy-900 sm:text-xl">
                  {s.title}
                </div>
                <div className="mt-1 text-[13.5px] leading-relaxed text-navy-900/65 sm:text-sm">
                  {s.body}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* What happens next */}
      <div className="mt-24 grid gap-14 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <div className="eyebrow">{t.nextEyebrow}</div>
          <h2 className="mt-5 font-display text-display-md font-light leading-[1.05] text-navy-900">
            {t.nextH2a}
            <br />
            <span className="font-normal italic">{t.nextH2b}</span>
          </h2>
        </div>
        <div className="lg:col-span-7">
          <ol>
            {t.nextSteps.map((s, i) => (
              <li
                key={s.title}
                className={`grid grid-cols-12 gap-6 py-7 sm:gap-10 ${
                  i === 0
                    ? "border-t border-navy-900/15"
                    : "border-t border-navy-900/12"
                }`}
              >
                <div className="col-span-12 text-[10px] font-semibold uppercase tracking-[0.22em] text-sun-700 sm:col-span-3">
                  {s.when}
                </div>
                <div className="col-span-12 sm:col-span-9">
                  <div className="font-display text-lg font-medium text-navy-900 sm:text-xl">
                    {s.title}
                  </div>
                  <p className="mt-2 max-w-xl text-[14.5px] leading-[1.7] text-navy-900/70">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 flex flex-col items-start gap-5 border-t border-navy-900/15 pt-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <div className="font-display text-2xl font-medium leading-tight text-navy-900 sm:text-3xl">
            {t.readyTitle}
          </div>
          <p className="mt-2 text-[14.5px] leading-relaxed text-navy-900/70">
            {t.readyBody(promo, regular)}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <Link href="/qualify/account" className="btn-accent">
            {t.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/how-it-works" className="btn-link">
            {t.howItWorks}
          </Link>
        </div>
      </div>

      {/* Compliance footer */}
      <div className="mt-14 border-t border-navy-900/15 pt-8">
        <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-navy-900/55">
          {t.importantLabel}
        </div>
        <p className="mt-3 max-w-3xl text-[13px] leading-[1.75] text-navy-900/65">
          {t.compliancePre}
          <span className="font-semibold text-navy-900/85">
            {t.complianceBold}
          </span>
          {t.compliancePost}
        </p>
      </div>
    </>
  );
}
