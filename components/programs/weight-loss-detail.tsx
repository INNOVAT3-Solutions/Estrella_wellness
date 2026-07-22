"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  Star,
  Truck,
  ShieldCheck,
  Clock,
  Heart,
  Stethoscope,
  Syringe,
  Salad,
  Dumbbell,
} from "lucide-react";
import { WEIGHT_LOSS, fmtPrice, programCopy } from "@/lib/programs";
import { testimonialCards } from "@/lib/social-proof";
import { Reveal } from "@/components/ui/reveal";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { DicedImageGrid } from "@/components/ui/diced-image-grid";
import { useLang, pick } from "@/lib/i18n";

const INCLUDE_ICONS = [Stethoscope, Syringe, Salad, Dumbbell];

const COPY = {
  en: {
    backHome: "← Home",
    ribbon: "Limited-time offer",
    offerLabel: "Special price",
    regularly: "Regularly",
    perMonth: "/month",
    priceNote: "Consultation included · billed monthly · cancel anytime",
    getStarted: "Start my consultation",
    howItWorks: "How it works",
    reviewCard: "Reviewed by Estrella clinicians",
    reviewCardSub: "Avg. response under 24 hrs",

    includedEyebrow: "What's included",
    includedTitle1: "Everything in",
    includedTitle2: "one monthly price.",
    includedLead:
      "Your consultation is the front door to the whole program. After your doctor reviews your file, everything below is included — nothing sold separately.",

    txEyebrow: "Treatment options",
    txTitle1: "What your doctor",
    txTitle2: "may designate.",
    txLead:
      "The peptide in your plan is designated by a licensed clinician based on your intake, medical history, labs, and goals. The compounds below are educational —",
    txLeadItalic: "not a recommendation or guarantee of outcome.",
    supportsLabel: "Designed to support",
    considerationsLabel: "Considerations ·",

    aboutLabel: "About this program",
    aboutBody1: "Several treatments referenced on this page may be",
    aboutBodyBold1: "compounded medications",
    aboutBody2:
      "— preparations made by a state-licensed compounding pharmacy under a clinician's prescription. Compounded combinations are",
    aboutBodyBold2: "not FDA-approved",
    aboutBody3:
      ". Treatment is determined by a licensed clinician based on your intake, medical history, labs, and goals. The information here is educational and is not a recommendation, diagnosis, or guarantee of outcome. Discuss benefits, risks, and alternatives with your provider.",

    monthEyebrow: "Your first month",
    monthTitle1: "From consultation",
    monthTitle2: "to ongoing care.",
    monthLead:
      "A clear, four-step path from your first questionnaire to continuous care. Pause, change, or cancel from your dashboard at any time.",
    youLabel: "You",
    providerLabel: "Your doctor",
    timeline: [
      {
        when: "Day 0",
        duration: "≈ 10 minutes",
        title: "Complete your intake",
        body: "A secure, online medical questionnaire covering your weight loss goals, medical history, current medications, and any prior labs.",
        you: "Complete the intake at your own pace. Your information is encrypted and reviewed only by your care team.",
        provider: "We match you with a clinician licensed in your state.",
      },
      {
        when: "Within 24 hours",
        duration: "Doctor consultation",
        title: "Consultation & your designated peptide",
        body: "A licensed doctor reviews your intake and consults with you. If the program is appropriate, your doctor designates the GLP-1 peptide for your plan and builds your nutrition and exercise plan around it.",
        you: "Watch for a secure message. Reply with any clarifying questions.",
        provider:
          "Reviews your file, designates your peptide, and writes your guided nutrition plan and management exercises.",
      },
      {
        when: "Days 3–5",
        duration: "After approval",
        title: "Discreet shipment",
        body: "Your peptide is dispensed by a partner state-licensed compounding pharmacy and shipped in plain packaging. Your nutrition plan and exercises arrive in your dashboard right away.",
        you: "Receive your shipment. Review your nutrition plan, exercises, and dosing instructions.",
        provider:
          "Sends an onboarding video, dosing instructions, and answers questions over secure messaging.",
      },
      {
        when: "Weeks 2–4 +",
        duration: "Ongoing care",
        title: "Continuous, supervised care",
        body: "Your doctor stays involved — check-ins, refills, dose adjustments, and plan updates as your weight changes. Everything is tracked in your dashboard.",
        you: "Message your doctor as questions come up. Refill on schedule.",
        provider:
          "Conducts check-ins, manages refills, and updates your nutrition and exercise plan as you progress.",
      },
    ],
    inlineCtaTitle: "Not sure if the program is right for you?",
    inlineCtaBody: `Take 10 minutes to complete the intake. A licensed doctor reviews your file and replies, usually within 24 hours. The ${fmtPrice(WEIGHT_LOSS.price)}/month special includes your consultation.`,
    inlineCtaBtn: "Start my consultation",
    inlineCtaLink: "How it works",

    reviewsEyebrow: "In their words",
    reviewsTitle1: "Patients on",
    reviewsTitle2: "this program.",
    reviewsLead:
      "Selected accounts from Estrella weight loss patients — published with consent, edited only for length.",

    faqEyebrow: "Common questions",
    faqTitle: "Everything you might be wondering.",
    faqLead:
      "Have something specific? You can also message your doctor once you complete the intake.",
    faqs: [
      {
        q: `What does the ${fmtPrice(WEIGHT_LOSS.price)}/month special include?`,
        a: `Everything: your doctor consultation, the GLP-1 peptide designated for you by your doctor, a guided nutrition plan, and management exercises. The regular price is ${fmtPrice(WEIGHT_LOSS.regularPrice)}/month — the special is for a limited time.`,
      },
      {
        q: "How long until I see results?",
        a: "Outcomes vary. Most patients begin to notice changes within the first 4–8 weeks of consistent treatment, though timelines depend on your individual response.",
      },
      {
        q: "Are labs required?",
        a: "Recent lab work may be required for safety and dosing. Your doctor will let you know after reviewing your intake.",
      },
      {
        q: "Are your providers licensed?",
        a: "Yes. Every patient is reviewed by a clinician credentialed in the state where you live.",
      },
      {
        q: "How is medication shipped?",
        a: "Your peptide is dispensed by a partner pharmacy and shipped discreetly to the address on your account, usually within 3–5 business days of approval.",
      },
      {
        q: "Is this subscription-based?",
        a: "Yes — the program is a monthly subscription to support continuity of care. You can pause, change, or cancel through your dashboard at any time.",
      },
    ],

    finalEyebrow: "Ready when you are",
    finalTitle1: "See if the program is",
    finalTitle2: "right for you.",
    finalBody:
      "Ten minutes today. A licensed Estrella doctor reads your file in full and replies, typically within twenty-four hours — with your complete plan, or a clear answer that treatment is not right for you yet.",
    finalCta: "Start my consultation",
    finalLink: "How it works",
  },
  es: {
    backHome: "← Inicio",
    ribbon: "Oferta por tiempo limitado",
    offerLabel: "Precio especial",
    regularly: "Normalmente",
    perMonth: "/mes",
    priceNote: "Consulta incluida · facturación mensual · cancela cuando quieras",
    getStarted: "Iniciar mi consulta",
    howItWorks: "Cómo funciona",
    reviewCard: "Revisado por médicos de Estrella",
    reviewCardSub: "Respuesta promedio en menos de 24 h",

    includedEyebrow: "Qué incluye",
    includedTitle1: "Todo en",
    includedTitle2: "un solo precio mensual.",
    includedLead:
      "Tu consulta es la puerta de entrada a todo el programa. Después de que tu médico revisa tu expediente, todo lo siguiente está incluido — nada se vende por separado.",

    txEyebrow: "Opciones de tratamiento",
    txTitle1: "Lo que tu médico",
    txTitle2: "puede designar.",
    txLead:
      "El péptido de tu plan lo designa un médico licenciado según tu cuestionario, historial médico, laboratorios y metas. Los compuestos siguientes son educativos —",
    txLeadItalic: "no son una recomendación ni una garantía de resultado.",
    supportsLabel: "Diseñado para apoyar",
    considerationsLabel: "Consideraciones ·",

    aboutLabel: "Sobre este programa",
    aboutBody1: "Varios tratamientos mencionados en esta página pueden ser",
    aboutBodyBold1: "medicamentos magistrales",
    aboutBody2:
      "— preparaciones hechas por una farmacia magistral licenciada por el estado bajo receta médica. Las combinaciones magistrales",
    aboutBodyBold2: "no están aprobadas por la FDA",
    aboutBody3:
      ". El tratamiento lo determina un médico licenciado según tu cuestionario, historial médico, laboratorios y metas. Esta información es educativa y no es una recomendación, diagnóstico ni garantía de resultado. Habla con tu proveedor sobre beneficios, riesgos y alternativas.",

    monthEyebrow: "Tu primer mes",
    monthTitle1: "De la consulta",
    monthTitle2: "al cuidado continuo.",
    monthLead:
      "Un camino claro de cuatro pasos desde tu primer cuestionario hasta el cuidado continuo. Pausa, cambia o cancela desde tu panel en cualquier momento.",
    youLabel: "Tú",
    providerLabel: "Tu médico",
    timeline: [
      {
        when: "Día 0",
        duration: "≈ 10 minutos",
        title: "Completa tu cuestionario",
        body: "Un cuestionario médico seguro en línea sobre tus metas de pérdida de peso, historial médico, medicamentos actuales y laboratorios previos.",
        you: "Completa el cuestionario a tu ritmo. Tu información está cifrada y solo la revisa tu equipo médico.",
        provider: "Te asignamos un médico licenciado en tu estado.",
      },
      {
        when: "Dentro de 24 horas",
        duration: "Consulta médica",
        title: "Consulta y tu péptido designado",
        body: "Un médico licenciado revisa tu cuestionario y consulta contigo. Si el programa es apropiado, tu médico designa el péptido GLP-1 para tu plan y construye tu plan de nutrición y ejercicios alrededor de él.",
        you: "Espera un mensaje seguro. Responde con cualquier pregunta.",
        provider:
          "Revisa tu expediente, designa tu péptido y escribe tu plan de nutrición guiado y ejercicios de manejo.",
      },
      {
        when: "Días 3–5",
        duration: "Tras la aprobación",
        title: "Envío discreto",
        body: "Tu péptido lo dispensa una farmacia magistral asociada con licencia estatal y se envía en empaque sencillo. Tu plan de nutrición y ejercicios llegan a tu panel de inmediato.",
        you: "Recibe tu envío. Revisa tu plan de nutrición, ejercicios e instrucciones de dosificación.",
        provider:
          "Envía un video de bienvenida, instrucciones de dosificación y responde preguntas por mensajería segura.",
      },
      {
        when: "Semanas 2–4 +",
        duration: "Cuidado continuo",
        title: "Cuidado continuo y supervisado",
        body: "Tu médico sigue involucrado — chequeos, resurtidos, ajustes de dosis y actualizaciones del plan a medida que tu peso cambia. Todo se registra en tu panel.",
        you: "Escríbele a tu médico cuando surjan preguntas. Resurte a tiempo.",
        provider:
          "Realiza chequeos, gestiona resurtidos y actualiza tu plan de nutrición y ejercicios según tu progreso.",
      },
    ],
    inlineCtaTitle: "¿No estás seguro de que el programa sea para ti?",
    inlineCtaBody: `Toma 10 minutos para completar el cuestionario. Un médico licenciado revisa tu expediente y responde, normalmente en 24 horas. El especial de ${fmtPrice(WEIGHT_LOSS.price)}/mes incluye tu consulta.`,
    inlineCtaBtn: "Iniciar mi consulta",
    inlineCtaLink: "Cómo funciona",

    reviewsEyebrow: "En sus palabras",
    reviewsTitle1: "Pacientes de",
    reviewsTitle2: "este programa.",
    reviewsLead:
      "Testimonios seleccionados de pacientes de pérdida de peso de Estrella — publicados con consentimiento, editados solo por extensión.",

    faqEyebrow: "Preguntas frecuentes",
    faqTitle: "Todo lo que podrías estar preguntándote.",
    faqLead:
      "¿Tienes algo específico? También puedes escribirle a tu médico cuando completes el cuestionario.",
    faqs: [
      {
        q: `¿Qué incluye el especial de ${fmtPrice(WEIGHT_LOSS.price)}/mes?`,
        a: `Todo: tu consulta médica, el péptido GLP-1 que tu médico designa para ti, un plan de nutrición guiado y ejercicios de manejo. El precio regular es ${fmtPrice(WEIGHT_LOSS.regularPrice)}/mes — el especial es por tiempo limitado.`,
      },
      {
        q: "¿Cuánto tarda en verse el resultado?",
        a: "Los resultados varían. La mayoría de los pacientes comienza a notar cambios en las primeras 4–8 semanas de tratamiento constante, aunque depende de tu respuesta individual.",
      },
      {
        q: "¿Se requieren laboratorios?",
        a: "Puede requerirse laboratorio reciente por seguridad y dosificación. Tu médico te lo indicará después de revisar tu cuestionario.",
      },
      {
        q: "¿Sus médicos tienen licencia?",
        a: "Sí. Cada paciente es revisado por un médico acreditado en el estado donde vive.",
      },
      {
        q: "¿Cómo se envía el medicamento?",
        a: "Tu péptido lo dispensa una farmacia asociada y se envía discretamente a la dirección de tu cuenta, normalmente en 3–5 días hábiles tras la aprobación.",
      },
      {
        q: "¿Es una suscripción?",
        a: "Sí — el programa es una suscripción mensual para dar continuidad al cuidado. Puedes pausar, cambiar o cancelar desde tu panel en cualquier momento.",
      },
    ],

    finalEyebrow: "Cuando tú digas",
    finalTitle1: "Descubre si el programa",
    finalTitle2: "es para ti.",
    finalBody:
      "Diez minutos hoy. Un médico licenciado de Estrella lee tu expediente completo y responde, normalmente en veinticuatro horas — con tu plan completo, o una respuesta clara de que el tratamiento aún no es adecuado para ti.",
    finalCta: "Iniciar mi consulta",
    finalLink: "Cómo funciona",
  },
};

const TIMELINE_ICONS = [Clock, ShieldCheck, Truck, Heart];

export function WeightLossDetail() {
  const { lang } = useLang();
  const t = pick(lang, COPY);
  const wl = programCopy(lang);

  const cards = testimonialCards(lang).slice(0, 9);
  const rCol1 = cards.slice(0, 3);
  const rCol2 = cards.slice(3, 6);
  const rCol3 = cards.slice(6, 9);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream-50">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-radial opacity-90" />
        <div className="pointer-events-none absolute -right-40 top-20 -z-10 h-[420px] w-[420px] rounded-full bg-sun-300/20 blur-3xl" />
        <div className="container-x grid gap-12 pt-12 pb-20 lg:grid-cols-12 lg:gap-10 lg:pt-20 lg:pb-28">
          <div className="lg:col-span-6 xl:col-span-7">
            <Reveal>
              <Link
                href="/"
                className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy-500 hover:text-sun-600"
              >
                {t.backHome}
              </Link>
            </Reveal>
            <Reveal delay={60}>
              <div className="mt-4 pill">
                <span className="h-1.5 w-1.5 rounded-full bg-sun-500" />
                {wl.shortName}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-5 font-display text-display-lg font-semibold text-navy-900">
                {wl.headline}
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-700">
                {wl.description}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8">
                <div className="text-[11px] font-bold uppercase tracking-wider text-sun-600">
                  {t.offerLabel}
                </div>
                <div className="mt-1 flex items-baseline gap-3">
                  <span className="font-display text-2xl font-light text-navy-900/40 line-through">
                    {fmtPrice(WEIGHT_LOSS.regularPrice)}
                  </span>
                  <span className="font-display text-5xl font-semibold text-navy-900">
                    {fmtPrice(WEIGHT_LOSS.price)}
                  </span>
                  <span className="text-lg text-navy-500">{t.perMonth}</span>
                </div>
                <div className="mt-1 text-xs text-navy-500">{t.priceNote}</div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/qualify" className="btn-accent">
                  {t.getStarted}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/how-it-works" className="btn-secondary">
                  {t.howItWorks}
                </Link>
              </div>
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {wl.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-sun-100 text-sun-600">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-sm text-navy-700">{b}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="relative lg:col-span-6 xl:col-span-5">
            <Reveal delay={140}>
              <DicedImageGrid slides={WEIGHT_LOSS.slides} />
            </Reveal>
            <Reveal delay={220}>
              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-sun-500 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-soft">
                  {t.ribbon}
                </span>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-6 hidden w-60 rounded-2xl border border-navy-100 bg-white p-4 shadow-card sm:block animate-floaty">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-sun-500 text-sun-500"
                    />
                  ))}
                </div>
                <div className="mt-2 font-display text-base font-semibold leading-snug text-navy-900">
                  {t.reviewCard}
                </div>
                <div className="mt-1 text-xs text-navy-500">
                  {t.reviewCardSub}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="grid items-end gap-10 border-b border-navy-900/15 pb-12 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <div className="eyebrow">{t.includedEyebrow}</div>
              <h2 className="mt-5 font-display text-display-md font-light text-navy-900">
                {t.includedTitle1}
                <br />
                <span className="font-normal italic">{t.includedTitle2}</span>
              </h2>
            </Reveal>
            <Reveal delay={120} className="md:col-span-5">
              <p className="max-w-md text-[15px] leading-[1.7] text-navy-900/70 md:ml-auto md:text-right">
                {t.includedLead}
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {wl.includes.map((inc, i) => {
              const Icon = INCLUDE_ICONS[i % INCLUDE_ICONS.length];
              return (
                <Reveal key={inc.title} delay={i * 80}>
                  <div className="flex h-full flex-col rounded-3xl border border-navy-100 bg-cream-50 p-7">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-900 text-sun-300">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-semibold leading-tight text-navy-900">
                      {inc.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-navy-700">
                      {inc.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Treatment options */}
      <section className="section bg-cream-50">
        <div className="container-x">
          <div className="grid items-end gap-10 border-b border-navy-900/15 pb-12 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <div className="eyebrow">{t.txEyebrow}</div>
              <h2 className="mt-5 font-display text-display-md font-light text-navy-900">
                {t.txTitle1}
                <br />
                <span className="font-normal italic">{t.txTitle2}</span>
              </h2>
            </Reveal>
            <Reveal delay={120} className="md:col-span-5">
              <p className="max-w-md text-[15px] leading-[1.7] text-navy-900/70 md:ml-auto md:text-right">
                {t.txLead} <span className="italic">{t.txLeadItalic}</span>
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {wl.compounds.map((c, i) => (
              <Reveal key={c.name} delay={(i % 3) * 80}>
                <article className="flex h-full flex-col rounded-3xl border border-navy-100 bg-white p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl font-semibold leading-tight text-navy-900">
                      {c.name}
                    </h3>
                    {c.format && (
                      <span className="shrink-0 rounded-full border border-navy-900/15 bg-cream-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-navy-700">
                        {c.format}
                      </span>
                    )}
                  </div>

                  {c.summary && (
                    <p className="mt-4 text-[15px] leading-[1.65] text-navy-700">
                      {c.summary}
                    </p>
                  )}

                  {c.supports && c.supports.length > 0 && (
                    <>
                      <div className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-navy-900/60">
                        {t.supportsLabel}
                      </div>
                      <ul className="mt-3 space-y-2.5">
                        {c.supports.map((s) => (
                          <li
                            key={s}
                            className="flex items-start gap-3 text-sm leading-relaxed text-navy-800"
                          >
                            <span
                              aria-hidden
                              className="mt-2 h-1 w-3 shrink-0 bg-sun-500"
                            />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {c.consideration && (
                    <div className="mt-6 border-t border-navy-900/10 pt-4 text-xs leading-relaxed text-navy-700/80">
                      <span className="font-semibold uppercase tracking-[0.16em] text-navy-900/65">
                        {t.considerationsLabel}
                      </span>{" "}
                      {c.consideration}
                    </div>
                  )}
                </article>
              </Reveal>
            ))}
          </div>

          {/* Compliance footer */}
          <Reveal>
            <div className="mt-16 rounded-2xl border border-navy-900/10 bg-white p-6 sm:p-8">
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-navy-900/65">
                {t.aboutLabel}
              </div>
              <p className="mt-3 max-w-3xl text-sm leading-[1.7] text-navy-700">
                {t.aboutBody1}{" "}
                <span className="font-semibold text-navy-900">
                  {t.aboutBodyBold1}
                </span>{" "}
                {t.aboutBody2}{" "}
                <span className="font-semibold text-navy-900">
                  {t.aboutBodyBold2}
                </span>
                {t.aboutBody3}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* First month timeline */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="grid items-end gap-10 border-b border-navy-900/15 pb-12 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <div className="eyebrow">{t.monthEyebrow}</div>
              <h2 className="mt-5 font-display text-display-md font-light text-navy-900">
                {t.monthTitle1}
                <br />
                <span className="font-normal italic">{t.monthTitle2}</span>
              </h2>
            </Reveal>
            <Reveal delay={120} className="md:col-span-5">
              <p className="max-w-md text-[15px] leading-[1.7] text-navy-900/70 md:ml-auto md:text-right">
                {t.monthLead}
              </p>
            </Reveal>
          </div>

          <div className="mt-14">
            <ol className="relative space-y-6 md:space-y-0">
              {t.timeline.map((s, i, arr) => {
                const Icon = TIMELINE_ICONS[i % TIMELINE_ICONS.length];
                const isLast = i === arr.length - 1;
                return (
                  <Reveal key={s.title} delay={i * 90}>
                    <li className="relative grid gap-6 md:grid-cols-12 md:gap-10 md:py-10">
                      <div aria-hidden className="hidden md:col-span-3 md:block">
                        <div className="sticky top-28">
                          <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sun-700">
                            {s.when}
                          </div>
                          <div className="mt-1 text-xs text-navy-900/55">
                            {s.duration}
                          </div>
                        </div>
                      </div>

                      <div className="relative md:col-span-9">
                        {!isLast && (
                          <span
                            aria-hidden
                            className="absolute -bottom-6 left-5 top-12 hidden w-px bg-navy-900/15 md:block"
                          />
                        )}

                        <div className="mb-4 inline-flex items-center gap-2 md:hidden">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sun-700">
                            {s.when}
                          </span>
                          <span className="text-[11px] text-navy-900/55">
                            · {s.duration}
                          </span>
                        </div>

                        <div className="flex items-start gap-5">
                          <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-navy-900 text-sun-300 ring-8 ring-white">
                            <Icon className="h-5 w-5" strokeWidth={1.75} />
                          </div>

                          <div className="min-w-0 flex-1">
                            <h3 className="font-display text-2xl font-semibold leading-tight text-navy-900 sm:text-[28px]">
                              {s.title}
                            </h3>
                            <p className="mt-3 max-w-2xl text-[15px] leading-[1.7] text-navy-700">
                              {s.body}
                            </p>

                            <div className="mt-5 grid gap-4 sm:grid-cols-2">
                              <div className="rounded-xl border border-navy-100 bg-cream-50/70 p-4">
                                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-navy-900/55">
                                  {t.youLabel}
                                </div>
                                <p className="mt-2 text-[13.5px] leading-relaxed text-navy-800">
                                  {s.you}
                                </p>
                              </div>
                              <div className="rounded-xl border border-navy-100 bg-cream-50/70 p-4">
                                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-navy-900/55">
                                  {t.providerLabel}
                                </div>
                                <p className="mt-2 text-[13.5px] leading-relaxed text-navy-800">
                                  {s.provider}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </Reveal>
                );
              })}
            </ol>

            <Reveal delay={200}>
              <div className="mt-16 flex flex-col items-start gap-5 rounded-3xl border border-navy-100 bg-cream-50 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div className="max-w-xl">
                  <div className="font-display text-xl font-semibold text-navy-900 sm:text-2xl">
                    {t.inlineCtaTitle}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-navy-700">
                    {t.inlineCtaBody}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Link href="/qualify" className="btn-accent">
                    {t.inlineCtaBtn}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/how-it-works" className="btn-link">
                    {t.inlineCtaLink}
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section bg-cream-100 paper-grain paper-grain-light">
        <div className="container-x">
          <div className="grid items-end gap-10 border-b border-navy-900/15 pb-14 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <div className="eyebrow">{t.reviewsEyebrow}</div>
              <h2 className="mt-5 font-display text-display-lg font-light text-navy-900">
                {t.reviewsTitle1}
                <br />
                <span className="font-normal italic">{t.reviewsTitle2}</span>
              </h2>
            </Reveal>
            <Reveal delay={120} className="md:col-span-5 md:text-right">
              <p className="max-w-md text-[16px] leading-[1.65] text-navy-900/65 md:ml-auto">
                {t.reviewsLead}
              </p>
            </Reveal>
          </div>

          <div className="mt-16 flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[680px] overflow-hidden">
            <TestimonialsColumn testimonials={rCol1} duration={24} />
            <TestimonialsColumn
              testimonials={rCol2}
              className="hidden md:block"
              duration={32}
            />
            <TestimonialsColumn
              testimonials={rCol3}
              className="hidden lg:block"
              duration={28}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-cream-50">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="eyebrow">{t.faqEyebrow}</div>
            <h2 className="mt-3 font-display text-display-md font-semibold text-navy-900">
              {t.faqTitle}
            </h2>
            <p className="mt-4 text-navy-600">{t.faqLead}</p>
          </Reveal>
          <div className="lg:col-span-8">
            <Reveal delay={100}>
              <div className="divide-y divide-navy-100 overflow-hidden rounded-3xl border border-navy-100 bg-white">
                {t.faqs.map((f) => (
                  <details key={f.q} className="group bg-white">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-[15px] font-semibold text-navy-900">
                      {f.q}
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-navy-50 text-navy-700 transition group-open:rotate-45 group-open:bg-sun-500 group-open:text-white">
                        +
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-sm leading-relaxed text-navy-600">
                      {f.a}
                    </div>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy-900 text-cream-50">
        <div className="container-x py-24 sm:py-32">
          <div className="grid items-end gap-12 border-b border-cream-50/15 pb-14 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <div className="eyebrow-light">{t.finalEyebrow}</div>
              <h3 className="mt-6 font-display text-display-lg font-light leading-[0.98] text-cream-50">
                {t.finalTitle1}
                <br />
                <span className="font-normal italic">{t.finalTitle2}</span>
              </h3>
            </Reveal>
            <Reveal delay={120} className="md:col-span-5 md:text-right">
              <p className="max-w-md text-[16px] leading-[1.7] text-cream-50/70 md:ml-auto">
                {t.finalBody}
              </p>
            </Reveal>
          </div>

          <Reveal delay={180}>
            <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6">
              <Link
                href="/qualify"
                className="inline-flex items-center justify-center gap-2 bg-cream-50 px-8 py-4 text-[12px] font-medium uppercase tracking-[0.2em] text-navy-900 transition-colors duration-300 hover:bg-cream-100"
              >
                {t.finalCta}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 border-b border-cream-50/40 pb-1 text-[12px] font-medium uppercase tracking-[0.18em] text-cream-50 transition hover:border-cream-50"
              >
                {t.finalLink}
              </Link>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-[18px] font-light text-cream-50/45 line-through">
                  {fmtPrice(WEIGHT_LOSS.regularPrice)}
                </span>
                <span className="font-display text-[28px] font-light text-cream-50">
                  {fmtPrice(WEIGHT_LOSS.price)}
                </span>
                <span className="text-[13px] text-cream-50/60">
                  {t.perMonth}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
