"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section-2";
import { Reveal } from "@/components/ui/reveal";
import { WEIGHT_LOSS, fmtPrice } from "@/lib/programs";
import { useLang, pick } from "@/lib/i18n";

const COPY = {
  en: {
    slogan: "The Process",
    heroTitle1: "From consultation",
    heroTitle2: "to your plan,",
    heroTitle3: "handled by doctors.",
    heroSubtitle: `Estrella is structured as a telehealth wellness clinic — your GLP-1 weight loss plan is read, decided, and signed by a licensed clinician. The ${fmtPrice(WEIGHT_LOSS.price)}/month special includes the consultation, your designated peptide, a guided nutrition plan, and management exercises.`,
    heroCta: "Start my consultation",
    contact: {
      website: "Bilingual EN · ES",
      phone: "Reply within 24 hrs",
      address: "South Florida medical group",
    },
    stepsEyebrow: "The choreography",
    stepsTitle1: "Six deliberate steps,",
    stepsTitle2: "none of them rushed.",
    stepsLead:
      "Telehealth at the cadence of considered medicine — neither a checkout flow nor a waiting-room wait. Each step exists for a clinical reason.",
    duration: "Duration",
    steps: [
      {
        title: "The intake",
        body: "A single secure questionnaire — about ten minutes. Weight loss goals, history, medications, allergies, prior treatments, the things that matter for prescribing. Saves automatically as you go.",
        duration: "≈ 10 minutes",
      },
      {
        title: "The consultation",
        body: "An Estrella clinician licensed in your state reads your file in full and consults with you. For most patients the review is asynchronous; higher-acuity cases are routed to a video visit at no extra charge.",
        duration: "Within 24 hours",
      },
      {
        title: "Follow-up, where warranted",
        body: "Sometimes the right next step is a question, a clarifying message, or a recent lab panel. Anything additional we need is coordinated through your dashboard — no phone tag.",
        duration: "Same week",
      },
      {
        title: "Your complete plan",
        body: "If treatment is appropriate, your doctor designates your GLP-1 peptide and pairs it with your guided nutrition plan and management exercises. You will see exactly what is in the plan, how it is dosed, and how it is monitored.",
        duration: "Day of approval",
      },
      {
        title: "Pharmacy fulfillment",
        body: "Your peptide is dispensed by Greenstone Rx in Miami and shipped discreetly to the address on file. Your nutrition plan and exercises are waiting in your dashboard.",
        duration: "3 — 5 business days",
      },
      {
        title: "Continuing care",
        body: "Refills, secure messaging, progress tracking, and provider check-ins all sit in one private dashboard. Pause, change, or cancel from the same place at any time.",
        duration: "Ongoing",
      },
    ],
    reviewEyebrow: "The review",
    reviewTitle1: "Read front to back,",
    reviewTitle2: "by a licensed clinician.",
    reviewBody1:
      "Every Estrella intake is read end to end by a clinician licensed in your state — never auto-approved, never routed through a flowchart. The provider considers the full picture before deciding whether treatment makes sense, which peptide to designate, how it should be dosed, and what to watch for.",
    reviewBody2:
      "The aim is the standard our patients have always known at our South Florida clinics: clinical judgment, written plainly, without theatre.",
    reviewCta: "Start my consultation",
    vol1: "Volume I — What a provider considers",
    reviewItems: [
      {
        label: "Goals & desired outcome",
        note: "How much weight you want to lose, and the timeline you have in mind.",
      },
      {
        label: "Personal & family history",
        note: "Conditions, prior diagnoses, and relevant inherited risk.",
      },
      {
        label: "Current medications & supplements",
        note: "Including dosage, frequency, and how long you have been on them.",
      },
      {
        label: "Allergies & known reactions",
        note: "Cross-checked against every compound a provider may consider.",
      },
      {
        label: "Lab values, when available",
        note: "Recent panels speed approval; we can also order labs when necessary.",
      },
      {
        label: "Lifestyle context",
        note: "Sleep, stress, activity, nutrition — the variables that shape your plan.",
      },
    ],
    vol2: "Volume II — What a provider may decide",
    decisions: [
      {
        verdict: "Approve",
        body: "When the picture is clear, your doctor designates your peptide and writes your plan that day.",
      },
      {
        verdict: "Approve with monitoring",
        body: "A plan begins, with periodic labs, check-ins, or follow-up messages built in.",
      },
      {
        verdict: "Request more information",
        body: "A short message thread or a video visit to clarify history before a decision.",
      },
      {
        verdict: "Adjust the plan",
        body: "If a different dose or compound is a better fit, your provider will route you there.",
      },
      {
        verdict: "Decline",
        body: "When treatment is not right for you yet, your provider will say so plainly — and explain why.",
      },
    ],
    closing:
      "In every case, a real clinician makes the call. Compounded medications, when prescribed, are dispensed by Greenstone Rx in Miami in response to that prescription — and only that prescription.",
  },
  es: {
    slogan: "El Proceso",
    heroTitle1: "De la consulta",
    heroTitle2: "a tu plan,",
    heroTitle3: "en manos de médicos.",
    heroSubtitle: `Estrella está estructurada como una clínica de bienestar por telesalud — tu plan de pérdida de peso GLP-1 lo lee, decide y firma un médico licenciado. El especial de ${fmtPrice(WEIGHT_LOSS.price)}/mes incluye la consulta, tu péptido designado, un plan de nutrición guiado y ejercicios de manejo.`,
    heroCta: "Iniciar mi consulta",
    contact: {
      website: "Bilingüe EN · ES",
      phone: "Respuesta en 24 h",
      address: "Grupo médico del sur de la Florida",
    },
    stepsEyebrow: "La coreografía",
    stepsTitle1: "Seis pasos deliberados,",
    stepsTitle2: "ninguno apresurado.",
    stepsLead:
      "Telesalud al ritmo de la medicina bien pensada — ni un carrito de compras ni una sala de espera. Cada paso existe por una razón clínica.",
    duration: "Duración",
    steps: [
      {
        title: "El cuestionario",
        body: "Un solo cuestionario seguro — unos diez minutos. Metas de pérdida de peso, historial, medicamentos, alergias, tratamientos previos: lo que importa para recetar. Se guarda automáticamente.",
        duration: "≈ 10 minutos",
      },
      {
        title: "La consulta",
        body: "Un médico de Estrella con licencia en tu estado lee tu expediente completo y consulta contigo. Para la mayoría la revisión es asincrónica; los casos de mayor complejidad pasan a videoconsulta sin costo extra.",
        duration: "Dentro de 24 horas",
      },
      {
        title: "Seguimiento, cuando corresponde",
        body: "A veces el siguiente paso correcto es una pregunta, un mensaje aclaratorio o un laboratorio reciente. Todo lo adicional se coordina desde tu panel — sin llamadas perdidas.",
        duration: "La misma semana",
      },
      {
        title: "Tu plan completo",
        body: "Si el tratamiento es apropiado, tu médico designa tu péptido GLP-1 y lo acompaña con tu plan de nutrición guiado y ejercicios de manejo. Verás exactamente qué contiene el plan, cómo se dosifica y cómo se supervisa.",
        duration: "El día de la aprobación",
      },
      {
        title: "Preparación en farmacia",
        body: "Tu péptido lo dispensa Greenstone Rx en Miami y se envía discretamente a tu dirección. Tu plan de nutrición y ejercicios te esperan en tu panel.",
        duration: "3 — 5 días hábiles",
      },
      {
        title: "Cuidado continuo",
        body: "Resurtidos, mensajería segura, seguimiento de progreso y chequeos médicos viven en un panel privado. Pausa, cambia o cancela desde el mismo lugar en cualquier momento.",
        duration: "Continuo",
      },
    ],
    reviewEyebrow: "La revisión",
    reviewTitle1: "Leído de principio a fin,",
    reviewTitle2: "por un médico licenciado.",
    reviewBody1:
      "Cada cuestionario de Estrella lo lee completo un médico con licencia en tu estado — nunca se aprueba automáticamente, nunca pasa por un diagrama. El proveedor considera el panorama completo antes de decidir si el tratamiento tiene sentido, qué péptido designar, cómo dosificarlo y qué vigilar.",
    reviewBody2:
      "La meta es el estándar que nuestros pacientes siempre han conocido en nuestras clínicas del sur de la Florida: criterio clínico, escrito con claridad, sin teatro.",
    reviewCta: "Iniciar mi consulta",
    vol1: "Volumen I — Lo que el proveedor considera",
    reviewItems: [
      {
        label: "Metas y resultado deseado",
        note: "Cuánto peso quieres perder y el plazo que tienes en mente.",
      },
      {
        label: "Historial personal y familiar",
        note: "Condiciones, diagnósticos previos y riesgo hereditario relevante.",
      },
      {
        label: "Medicamentos y suplementos actuales",
        note: "Incluyendo dosis, frecuencia y cuánto tiempo llevas con ellos.",
      },
      {
        label: "Alergias y reacciones conocidas",
        note: "Cotejadas contra cada compuesto que el proveedor pueda considerar.",
      },
      {
        label: "Laboratorios, cuando existen",
        note: "Paneles recientes agilizan la aprobación; también podemos ordenarlos si hace falta.",
      },
      {
        label: "Contexto de estilo de vida",
        note: "Sueño, estrés, actividad, nutrición — las variables que dan forma a tu plan.",
      },
    ],
    vol2: "Volumen II — Lo que el proveedor puede decidir",
    decisions: [
      {
        verdict: "Aprobar",
        body: "Cuando el panorama es claro, tu médico designa tu péptido y escribe tu plan ese mismo día.",
      },
      {
        verdict: "Aprobar con monitoreo",
        body: "El plan comienza, con laboratorios periódicos, chequeos o mensajes de seguimiento incorporados.",
      },
      {
        verdict: "Pedir más información",
        body: "Un hilo corto de mensajes o una videoconsulta para aclarar el historial antes de decidir.",
      },
      {
        verdict: "Ajustar el plan",
        body: "Si otra dosis u otro compuesto encaja mejor, tu proveedor te dirigirá allí.",
      },
      {
        verdict: "Declinar",
        body: "Cuando el tratamiento aún no es adecuado para ti, tu proveedor te lo dirá con claridad — y te explicará por qué.",
      },
    ],
    closing:
      "En todos los casos, decide un médico real. Los medicamentos magistrales, cuando se recetan, los dispensa Greenstone Rx en Miami en respuesta a esa receta — y solo a esa receta.",
  },
};

export default function HowItWorksPage() {
  const { lang } = useLang();
  const t = pick(lang, COPY);

  return (
    <>
      <HeroSection
        slogan={t.slogan}
        title={
          <>
            {t.heroTitle1}
            <br />
            {t.heroTitle2}
            <br />
            <span className="font-normal italic">{t.heroTitle3}</span>
          </>
        }
        subtitle={t.heroSubtitle}
        callToAction={{
          text: t.heroCta,
          href: "/qualify",
        }}
        backgroundImage="/images/how-it-works-scene.png"
        contactInfo={t.contact}
      />

      {/* Six steps — editorial long-form list */}
      <section className="bg-cream-50 paper-grain paper-grain-light">
        <div className="container-x py-24 sm:py-32">
          <div className="grid items-end gap-10 border-b border-navy-900/15 pb-14 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <div className="eyebrow">{t.stepsEyebrow}</div>
              <h2 className="mt-5 font-display text-display-lg font-light leading-[0.98] text-navy-900">
                {t.stepsTitle1}
                <br />
                <span className="font-normal italic">{t.stepsTitle2}</span>
              </h2>
            </Reveal>
            <Reveal delay={120} className="md:col-span-5 md:text-right">
              <p className="max-w-md text-[16px] leading-[1.7] text-navy-900/70 md:ml-auto">
                {t.stepsLead}
              </p>
            </Reveal>
          </div>

          <ol className="mt-4 divide-y divide-navy-900/15">
            {t.steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <li className="grid grid-cols-12 items-baseline gap-6 py-12 sm:py-16">
                  <div className="col-span-12 sm:col-span-2">
                    <div className="font-display text-[44px] font-light leading-none text-navy-900/55 sm:text-[56px]">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-7">
                    <h3 className="font-display text-[28px] font-light leading-tight text-navy-900 sm:text-[32px]">
                      {s.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-[15px] leading-[1.75] text-navy-900/70">
                      {s.body}
                    </p>
                  </div>
                  <div className="col-span-12 sm:col-span-3 sm:text-right">
                    <div className="text-[10px] uppercase tracking-[0.24em] text-navy-900/55">
                      {t.duration}
                    </div>
                    <div className="mt-2 font-display text-[18px] font-light text-navy-900">
                      {s.duration}
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* The review */}
      <section className="bg-cream-100 paper-grain paper-grain-light">
        <div className="container-x py-24 sm:py-32">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
              <div className="eyebrow">{t.reviewEyebrow}</div>
              <h2 className="mt-5 font-display text-display-lg font-light leading-[0.98] text-navy-900">
                {t.reviewTitle1}
                <br />
                <span className="font-normal italic">{t.reviewTitle2}</span>
              </h2>
              <p className="mt-7 max-w-md text-[16px] leading-[1.75] text-navy-900/70">
                {t.reviewBody1}
              </p>
              <p className="mt-5 max-w-md text-[15px] leading-[1.75] text-navy-900/60">
                {t.reviewBody2}
              </p>
              <Link
                href="/qualify"
                className="mt-9 inline-flex items-center gap-2 border-b border-navy-900/30 pb-1 text-[13px] font-medium uppercase tracking-[0.2em] text-navy-900 transition-colors hover:border-navy-900"
              >
                {t.reviewCta}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>

            <div className="lg:col-span-7">
              <div className="border-t border-navy-900/25 pt-10">
                <div className="text-[10px] uppercase tracking-[0.24em] text-navy-900/55">
                  {t.vol1}
                </div>
                <ol className="mt-2 divide-y divide-navy-900/15">
                  {t.reviewItems.map((item, i) => (
                    <Reveal key={item.label} delay={i * 50}>
                      <li className="grid grid-cols-12 items-baseline gap-4 py-7">
                        <div className="col-span-2 font-display text-[14px] font-light text-navy-900/45">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <div className="col-span-10">
                          <h4 className="font-display text-[20px] font-light leading-tight text-navy-900">
                            {item.label}
                          </h4>
                          <p className="mt-2 max-w-md text-[14px] leading-[1.7] text-navy-900/65">
                            {item.note}
                          </p>
                        </div>
                      </li>
                    </Reveal>
                  ))}
                </ol>
              </div>

              <div className="mt-16 border-t border-navy-900/25 pt-10">
                <div className="text-[10px] uppercase tracking-[0.24em] text-navy-900/55">
                  {t.vol2}
                </div>
                <dl className="mt-2 divide-y divide-navy-900/15">
                  {t.decisions.map((d, i) => (
                    <Reveal key={d.verdict} delay={i * 50}>
                      <div className="grid grid-cols-12 items-baseline gap-4 py-6">
                        <dt className="col-span-12 font-display text-[18px] font-light leading-tight text-navy-900 sm:col-span-4">
                          {d.verdict}
                        </dt>
                        <dd className="col-span-12 max-w-lg text-[14px] leading-[1.7] text-navy-900/65 sm:col-span-8">
                          {d.body}
                        </dd>
                      </div>
                    </Reveal>
                  ))}
                </dl>
              </div>

              <Reveal>
                <p className="mt-12 max-w-xl border-t border-navy-900/15 pt-8 text-[13px] leading-[1.75] text-navy-900/55">
                  {t.closing}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
