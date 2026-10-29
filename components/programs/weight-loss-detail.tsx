"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  ClipboardList,
  Heart,
  Stethoscope,
  Syringe,
  Salad,
  Dumbbell,
} from "lucide-react";
import { WEIGHT_LOSS, fmtPrice, programCopy } from "@/lib/programs";
import { Reveal } from "@/components/ui/reveal";
import { DicedImageGrid } from "@/components/ui/diced-image-grid";
import { useLang, pick } from "@/lib/i18n";

const INCLUDE_ICONS = [Stethoscope, Syringe, Salad, Dumbbell];

type Faq = {
  q: string;
  a: string;
  links?: { href: string; label: string }[];
};

const EMAIL = "info@estrellamedicalcenters.com";

const FOCUS =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun-500 focus-visible:ring-offset-2";

const COPY = {
  en: {
    backHome: "← Home",
    ribbon: "New · Limited-time offer",
    offerLabel: "New program · Limited-time price",
    regularly: "Regularly",
    perMonth: "/month",
    priceNote:
      "Open to everyone · consultation included · renews monthly · cancel anytime · full refund if not approved or not a fit",
    refundLink: "Refund policy",
    getStarted: "Start my consultation",
    howItWorks: "How it works",
    reviewCard: "Led by Estrella doctors",
    reviewCardSub: "20+ years of experience",
    gridAlts: [
      "Two people doing dumbbell curls outdoors by the water in Miami",
      "A woman plating a healthy salmon and quinoa lunch",
      "A nurse giving a patient his weekly injection",
      "A doctor reviewing results with a patient on a tablet",
    ],

    includedEyebrow: "What's included",
    includedTitle1: "Everything in",
    includedTitle2: "one monthly price.",
    includedLead:
      "Your consultation is the front door to the whole program. If your doctor decides the program is right for you, everything below is included. Nothing sold separately.",

    txEyebrow: "Medication options",
    txTitle1: "What your doctor",
    txTitle2: "may choose.",
    txLead:
      "Your doctor decides whether any medication is appropriate for you and, if so, which one, based on your health history, blood work and goals. The information below is educational,",
    txLeadItalic: "not a recommendation or a guarantee of results.",
    supportsLabel: "Good to know",
    considerationsLabel: "Considerations ·",

    aboutLabel: "About compounded medication",
    aboutBody1:
      "Your doctor decides whether any medication is appropriate for you. On your doctor's prescription, your medication may be prepared by a partner compounding pharmacy, Greenstone Rx in Miami. Compounded drugs are",
    aboutBodyBold2: "not FDA-approved",
    aboutBody3:
      " and have not been reviewed by the FDA for safety, effectiveness or quality. Availability of any medication may vary. This information is educational and is not a recommendation, diagnosis or guarantee of results. Ask your doctor about benefits, risks and alternatives.",

    monthEyebrow: "Your first month",
    monthTitle1: "From consultation",
    monthTitle2: "to weekly care.",
    monthLead: `A clear path from booking online to weekly care in the clinic. Cancel anytime by emailing ${EMAIL} or telling the clinic.`,
    youLabel: "You",
    providerLabel: "Your care team",
    timeline: [
      {
        when: "Step 1",
        duration: "Online",
        title: "Book your consultation",
        body: "Book online with your contact details and your preferred Estrella Medical Centers location in Miami, date and time. There are no health questions to fill out online. Our team calls you to ask a few questions and coordinate your visit.",
        you: "Fill out the short booking form in English or Spanish, then pay now online or choose to pay at your visit.",
        provider: "Our team calls you to ask a few questions and confirm your visit.",
      },
      {
        when: "Step 2",
        duration: "In the clinic",
        title: "Doctor consultation and blood work review",
        body: "A licensed Estrella doctor meets with you, reviews your blood work and health history, and decides whether the program is right for you. Whether you paid online when you booked or pay at the visit, your payment is fully refunded if you are not approved or the doctor decides the program is not a fit for you.",
        you: "Bring your questions and a list of your current medications.",
        provider:
          "Reviews your history and blood work, decides if treatment is appropriate and, if so, chooses your GLP-1 medication.",
      },
      {
        when: "Every week",
        duration: "In the clinic",
        title: "Weekly injections and check-ins",
        body: "Our medical team gives your injection at an Estrella Medical Centers location in Miami. Every visit includes a check-in on your weight, vitals, how you feel and your dose.",
        you: "Come in for your weekly injection and check-in.",
        provider:
          "Gives your injection, checks your weight and vitals, and reviews your dose.",
      },
      {
        when: "Ongoing",
        duration: "Monthly program",
        title: "Nutrition, exercise and follow-up",
        body: "A nutritionist builds your meal plan and you follow a guided exercise program. Your doctor adjusts your dose and plan as needed. The program renews monthly until you cancel.",
        you: "Follow your meal plan and exercises, and bring your questions to your visits.",
        provider:
          "Adjusts your dose and plan based on your weekly check-ins.",
      },
    ],
    inlineCtaTitle: "Not sure if the program is right for you?",
    inlineCtaBody: `Book online with your contact details and preferred location and time, and our team will call you to ask a few questions and coordinate your visit. In the clinic, a licensed doctor reviews your health history and blood work with you. The ${fmtPrice(WEIGHT_LOSS.price)}/month special includes your consultation, with a full refund if you are not approved or the doctor decides the program is not a fit for you.`,
    inlineCtaBtn: "Start my consultation",
    inlineCtaLink: "How it works",

    faqEyebrow: "Common questions",
    faqTitle: "Everything you might be wondering.",
    faqLead: `Have something specific? Email ${EMAIL} or ask your doctor at your consultation.`,
    faqs: [
      {
        q: `What does the ${fmtPrice(WEIGHT_LOSS.price)}/month special include?`,
        a: `Your doctor consultation and blood work review, the GLP-1 medication your doctor chooses if treatment is right for you (given weekly in the clinic, with a check-in at every visit), a nutritionist meal plan and a guided exercise program. The regular price is ${fmtPrice(WEIGHT_LOSS.regularPrice)}/month. The special is for a limited time.`,
      },
      {
        q: "How long until I see results?",
        a: "Results vary from person to person, and no result is guaranteed. Your doctor follows your progress at your weekly check-ins and adjusts your plan.",
      },
      {
        q: "Is blood work required?",
        a: "Your doctor reviews your blood work as part of the consultation and will tell you if anything else is needed.",
      },
      {
        q: "Are your doctors licensed?",
        a: "Yes. Your care is led by licensed doctors at Estrella Medical Centers in Miami.",
      },
      {
        q: "Where do I receive my injections?",
        a: "In person. Our medical team gives your injection every week at an Estrella Medical Centers location in Miami. Medication is not shipped to your home.",
      },
      {
        q: "How do billing and cancellation work?",
        a: `After you book, you can pay online through our secure Stripe checkout or pay at your visit. If you are not approved, or the doctor decides the program is not a fit for you, you get a full refund. The program renews monthly until you cancel. You can cancel anytime by emailing ${EMAIL} or telling the clinic; cancelling stops future charges. Injections already given and visits already completed are not refunded, and there are no refunds for partial months.`,
        links: [
          { href: "/refunds", label: "Refund policy" },
          { href: "/terms", label: "Terms of service" },
        ],
      },
    ] as Faq[],

    finalEyebrow: "Ready when you are",
    finalTitle1: "See if the program is",
    finalTitle2: "right for you.",
    finalBody:
      "Book online with your contact details and preferred location and time. Our team calls you to ask a few questions and coordinate your visit, and then a licensed Estrella doctor reviews your health history and blood work with you and gives you a clear answer: a complete plan, or an honest explanation of why treatment is not right for you yet.",
    finalCta: "Start my consultation",
    finalLink: "How it works",
  },
  es: {
    backHome: "← Inicio",
    ribbon: "Nuevo · Oferta por tiempo limitado",
    offerLabel: "Programa nuevo · Precio por tiempo limitado",
    regularly: "Normalmente",
    perMonth: "/mes",
    priceNote:
      "Abierto a todos · consulta incluida · se renueva cada mes · cancela cuando quieras · reembolso completo si no eres aprobado o el programa no es adecuado para ti",
    refundLink: "Política de reembolsos",
    getStarted: "Iniciar mi consulta",
    howItWorks: "Cómo funciona",
    reviewCard: "Dirigido por médicos de Estrella",
    reviewCardSub: "Más de 20 años de experiencia",
    gridAlts: [
      "Dos personas haciendo ejercicio con mancuernas al aire libre junto al agua en Miami",
      "Una mujer sirviendo un almuerzo saludable de salmón y quinoa",
      "Una enfermera aplicándole a un paciente su inyección semanal",
      "Un médico revisando resultados con un paciente en una tableta",
    ],

    includedEyebrow: "Qué incluye",
    includedTitle1: "Todo en",
    includedTitle2: "un solo precio mensual.",
    includedLead:
      "Tu consulta es la puerta de entrada a todo el programa. Si tu médico decide que el programa es adecuado para ti, todo lo siguiente está incluido. Nada se vende por separado.",

    txEyebrow: "Opciones de medicamento",
    txTitle1: "Lo que tu médico",
    txTitle2: "puede elegir.",
    txLead:
      "Tu médico decide si algún medicamento es adecuado para ti y, si lo es, cuál, según tu historial, tus análisis de sangre y tus metas. La información siguiente es educativa,",
    txLeadItalic: "no es una recomendación ni una garantía de resultados.",
    supportsLabel: "Lo que debes saber",
    considerationsLabel: "Consideraciones ·",

    aboutLabel: "Sobre los medicamentos magistrales",
    aboutBody1:
      "Tu médico decide si algún medicamento es adecuado para ti. Con la receta de tu médico, tu medicamento puede prepararlo una farmacia magistral asociada, Greenstone Rx en Miami. Los medicamentos magistrales",
    aboutBodyBold2: "no están aprobados por la FDA",
    aboutBody3:
      " y la FDA no ha revisado su seguridad, eficacia ni calidad. La disponibilidad de cualquier medicamento puede variar. Esta información es educativa y no es una recomendación, un diagnóstico ni una garantía de resultados. Pregúntale a tu médico por los beneficios, los riesgos y las alternativas.",

    monthEyebrow: "Tu primer mes",
    monthTitle1: "De la consulta",
    monthTitle2: "al cuidado semanal.",
    monthLead: `Un camino claro desde que agendas en línea hasta el cuidado semanal en la clínica. Cancela cuando quieras escribiendo a ${EMAIL} o avisando en la clínica.`,
    youLabel: "Tú",
    providerLabel: "Tu equipo médico",
    timeline: [
      {
        when: "Paso 1",
        duration: "En línea",
        title: "Agenda tu consulta",
        body: "Agenda en línea con tus datos de contacto y el centro de Estrella Medical Centers en Miami, la fecha y la hora que prefieras. No tienes que llenar preguntas de salud en línea. Nuestro equipo te llama para hacerte algunas preguntas y coordinar tu visita.",
        you: "Llena el formulario corto en español o inglés, y luego paga en línea o elige pagar en tu visita.",
        provider: "Nuestro equipo te llama para hacerte algunas preguntas y confirmar tu visita.",
      },
      {
        when: "Paso 2",
        duration: "En la clínica",
        title: "Consulta médica y revisión de análisis",
        body: "Un médico licenciado de Estrella se reúne contigo, revisa tus análisis de sangre y tu historial, y decide si el programa es adecuado para ti. Ya sea que hayas pagado en línea al agendar o pagues en la visita, te devolvemos el pago completo si no eres aprobado o si el médico decide que el programa no es adecuado para ti.",
        you: "Trae tus preguntas y la lista de los medicamentos que tomas.",
        provider:
          "Revisa tu historial y tus análisis, decide si el tratamiento es adecuado y, si lo es, elige tu medicamento GLP-1.",
      },
      {
        when: "Cada semana",
        duration: "En la clínica",
        title: "Inyecciones y chequeos semanales",
        body: "Nuestro equipo médico te aplica la inyección en un centro de Estrella Medical Centers en Miami. Cada visita incluye un chequeo de tu peso, tus signos vitales, cómo te sientes y tu dosis.",
        you: "Ven a tu inyección y chequeo de cada semana.",
        provider:
          "Te aplica la inyección, revisa tu peso y tus signos vitales, y revisa tu dosis.",
      },
      {
        when: "Continuo",
        duration: "Programa mensual",
        title: "Nutrición, ejercicio y seguimiento",
        body: "Una nutricionista crea tu plan de comidas y sigues un programa de ejercicios guiado. Tu médico ajusta tu dosis y tu plan cuando hace falta. El programa se renueva cada mes hasta que lo canceles.",
        you: "Sigue tu plan de comidas y tus ejercicios, y trae tus preguntas a tus visitas.",
        provider:
          "Ajusta tu dosis y tu plan según tus chequeos semanales.",
      },
    ],
    inlineCtaTitle: "¿No sabes si el programa es para ti?",
    inlineCtaBody: `Agenda en línea con tus datos de contacto y el centro y la hora que prefieras, y nuestro equipo te llamará para hacerte algunas preguntas y coordinar tu visita. En la clínica, un médico licenciado revisa contigo tu historial y tus análisis de sangre. El especial de ${fmtPrice(WEIGHT_LOSS.price)}/mes incluye tu consulta, con reembolso completo si no eres aprobado o si el médico decide que el programa no es adecuado para ti.`,
    inlineCtaBtn: "Iniciar mi consulta",
    inlineCtaLink: "Cómo funciona",

    faqEyebrow: "Preguntas frecuentes",
    faqTitle: "Todo lo que podrías estar preguntándote.",
    faqLead: `¿Tienes algo específico? Escríbenos a ${EMAIL} o pregúntale a tu médico en tu consulta.`,
    faqs: [
      {
        q: `¿Qué incluye el especial de ${fmtPrice(WEIGHT_LOSS.price)}/mes?`,
        a: `Tu consulta médica y la revisión de tus análisis de sangre, el medicamento GLP-1 que elija tu médico si el tratamiento es adecuado para ti (aplicado cada semana en la clínica, con un chequeo en cada visita), un plan de comidas de una nutricionista y un programa de ejercicios guiado. El precio regular es ${fmtPrice(WEIGHT_LOSS.regularPrice)}/mes. El especial es por tiempo limitado.`,
      },
      {
        q: "¿Cuánto tarda en verse el resultado?",
        a: "Los resultados varían de una persona a otra y no hay resultados garantizados. Tu médico sigue tu progreso en tus chequeos semanales y ajusta tu plan.",
      },
      {
        q: "¿Se necesitan análisis de sangre?",
        a: "Tu médico revisa tus análisis de sangre como parte de la consulta y te dirá si hace falta algo más.",
      },
      {
        q: "¿Sus médicos tienen licencia?",
        a: "Sí. Tu atención la dirigen médicos licenciados de Estrella Medical Centers en Miami.",
      },
      {
        q: "¿Dónde recibo mis inyecciones?",
        a: "En persona. Nuestro equipo médico te aplica la inyección cada semana en un centro de Estrella Medical Centers en Miami. El medicamento no se envía a tu casa.",
      },
      {
        q: "¿Cómo funcionan el cobro y la cancelación?",
        a: `Después de agendar, puedes pagar en línea con nuestro pago seguro de Stripe o pagar en tu visita. Si no eres aprobado, o si el médico decide que el programa no es adecuado para ti, te devolvemos el pago completo. El programa se renueva cada mes hasta que lo canceles. Puedes cancelar cuando quieras escribiendo a ${EMAIL} o avisando en la clínica; al cancelar se detienen los cobros futuros. No se reembolsan las inyecciones ya aplicadas ni las visitas ya realizadas, y no hay reembolsos por meses parciales.`,
        links: [
          { href: "/refunds", label: "Política de reembolsos" },
          { href: "/terms", label: "Términos del servicio" },
        ],
      },
    ] as Faq[],

    finalEyebrow: "Cuando tú digas",
    finalTitle1: "Descubre si el programa",
    finalTitle2: "es para ti.",
    finalBody:
      "Agenda en línea con tus datos de contacto y el centro y la hora que prefieras. Nuestro equipo te llama para hacerte algunas preguntas y coordinar tu visita, y luego un médico licenciado de Estrella revisa contigo tu historial y tus análisis de sangre y te da una respuesta clara: un plan completo, o una explicación honesta de por qué el tratamiento aún no es adecuado para ti.",
    finalCta: "Iniciar mi consulta",
    finalLink: "Cómo funciona",
  },
};

const TIMELINE_ICONS = [ClipboardList, Stethoscope, Syringe, Heart];

function FaqList({ faqs, idPrefix }: { faqs: Faq[]; idPrefix: string }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y divide-navy-900/[0.07] overflow-hidden rounded-3xl bg-white ring-1 ring-navy-900/[0.07]">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        const panelId = `${idPrefix}-panel-${i}`;
        const btnId = `${idPrefix}-btn-${i}`;
        return (
          <div key={f.q}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className={`flex w-full items-center justify-between gap-4 p-6 text-left text-[16px] font-semibold text-navy-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sun-500`}
              >
                {f.q}
                <span
                  aria-hidden
                  className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-navy-950 transition ${
                    isOpen ? "rotate-45 bg-sun-400" : "bg-mist-100"
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="px-6 pb-6 text-[15px] leading-relaxed text-navy-900/75"
            >
              <p>{f.a}</p>
              {f.links && f.links.length > 0 && (
                <p className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                  {f.links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={`rounded font-semibold text-navy-950 underline decoration-sun-500 underline-offset-4 hover:decoration-navy-950 ${FOCUS}`}
                    >
                      {l.label}
                    </Link>
                  ))}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

const H2 =
  "mt-3 text-balance font-heading text-[clamp(2rem,3.8vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.03em] text-navy-950";
const LEAD = "max-w-md text-[17px] leading-relaxed text-navy-900/70 md:ml-auto";

export function WeightLossDetail() {
  const { lang } = useLang();
  const t = pick(lang, COPY);
  const wl = programCopy(lang);

  return (
    <div className="font-heading">
      {/* HERO */}
      <section className="relative -mt-20 overflow-hidden bg-mist-50 text-navy-950">
        <div className="container-x grid gap-12 pb-20 pt-28 lg:grid-cols-12 lg:gap-14 lg:pb-28 lg:pt-36">
          <div className="lg:col-span-6 xl:col-span-7">
            <Reveal>
              <Link
                href="/"
                className={`rounded text-[14px] font-medium text-navy-900/70 transition-colors hover:text-navy-950 ${FOCUS}`}
              >
                {t.backHome}
              </Link>
            </Reveal>
            <Reveal delay={60}>
              <span className="tag-pill mt-5">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-sun-500" />
                {wl.shortName}
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-5 text-balance font-heading text-[clamp(2.4rem,3.9vw,4.4rem)] font-extrabold leading-[1.03] tracking-[-0.035em] text-navy-950">
                {wl.headline}
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-5 max-w-xl text-pretty text-[17px] leading-relaxed text-navy-900/70">
                {wl.description}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <ul className="mt-6 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {wl.benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-[15px] font-medium text-navy-900/85"
                  >
                    <span aria-hidden className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sun-400 text-navy-950">
                      <Check className="h-3 w-3" strokeWidth={3.5} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* The offer */}
            <Reveal delay={300}>
              <div className="mt-8 rounded-3xl bg-white p-6 shadow-[0_24px_60px_-28px_rgba(6,14,34,.30)] ring-1 ring-navy-900/[0.07] sm:p-7">
                <div className="text-[13px] font-semibold text-sun-700">
                  {t.offerLabel}
                </div>
                <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-[46px] font-extrabold leading-none tracking-tight text-navy-950">
                      {fmtPrice(WEIGHT_LOSS.price)}
                    </span>
                    <span className="text-[15px] text-navy-900/70">
                      {t.perMonth}
                    </span>
                    <span className="whitespace-nowrap text-[14px] text-navy-900/70 line-through">
                      <span className="sr-only">{t.regularly} </span>
                      {fmtPrice(WEIGHT_LOSS.regularPrice)}
                    </span>
                  </div>
                  <Link
                    href="/qualify"
                    className={`btn-pill shrink-0 px-8 py-4 text-[15px] shadow-[0_12px_28px_-12px_rgba(200,146,56,.8)] ${FOCUS}`}
                  >
                    {t.getStarted}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <p className="mt-5 flex items-start gap-2 border-t border-navy-900/[0.07] pt-4 text-[13px] leading-snug text-navy-900/70">
                  <ShieldCheck aria-hidden className="mt-px h-4 w-4 shrink-0 text-sun-600" />
                  <span>
                    {t.priceNote}.{" "}
                    <Link
                      href="/refunds"
                      className={`rounded font-semibold text-navy-950 underline decoration-sun-500 underline-offset-4 ${FOCUS}`}
                    >
                      {t.refundLink}
                    </Link>
                  </span>
                </p>
              </div>
            </Reveal>

            <Reveal delay={360}>
              <Link href="/how-it-works" className={`btn-link mt-6 ${FOCUS}`}>
                {t.howItWorks}
              </Link>
            </Reveal>
          </div>

          <div className="relative lg:col-span-6 xl:col-span-5 lg:self-center">
            <Reveal delay={140}>
              <DicedImageGrid slides={WEIGHT_LOSS.slides} alts={t.gridAlts} />
            </Reveal>
            <Reveal delay={220}>
              <div className="absolute left-4 top-4">
                <span className="rounded-full bg-navy-950 px-3 py-1.5 text-[12px] font-bold text-sun-300 shadow-soft">
                  {t.ribbon}
                </span>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-6 hidden max-w-[17rem] items-center gap-3 rounded-3xl bg-white p-4 pr-5 shadow-[0_20px_40px_-20px_rgba(6,14,34,.45)] ring-1 ring-navy-900/[0.07] sm:flex animate-floaty">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-950 text-sun-300">
                  <Stethoscope aria-hidden className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span>
                  <span className="block text-[15px] font-bold leading-snug text-navy-950">
                    {t.reviewCard}
                  </span>
                  <span className="block text-[13px] leading-snug text-navy-900/70">
                    {t.reviewCardSub}
                  </span>
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x">
          <div className="grid items-end gap-8 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <p className="text-[13px] font-semibold text-sun-700">
                {t.includedEyebrow}
              </p>
              <h2 className={H2}>
                {t.includedTitle1}{" "}
                <span className="text-sun-600">{t.includedTitle2}</span>
              </h2>
            </Reveal>
            <Reveal delay={120} className="md:col-span-5">
              <p className={LEAD}>{t.includedLead}</p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {wl.includes.map((inc, i) => {
              const Icon = INCLUDE_ICONS[i % INCLUDE_ICONS.length];
              return (
                <Reveal key={inc.title} delay={i * 80}>
                  <div className="flex h-full flex-col rounded-3xl bg-mist-50 p-7">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-950 text-sun-300">
                      <Icon aria-hidden className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-6 text-[19px] font-bold leading-snug text-navy-950">
                      {inc.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-navy-900/75">
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
      <section className="bg-mist-50 py-20 sm:py-28">
        <div className="container-x">
          <div className="grid items-end gap-8 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <p className="text-[13px] font-semibold text-sun-700">
                {t.txEyebrow}
              </p>
              <h2 className={H2}>
                {t.txTitle1}{" "}
                <span className="text-sun-600">{t.txTitle2}</span>
              </h2>
            </Reveal>
            <Reveal delay={120} className="md:col-span-5">
              <p className={LEAD}>
                {t.txLead} {t.txLeadItalic}
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {wl.compounds.map((c, i) => (
              <Reveal key={c.name} delay={(i % 3) * 80}>
                <article className="flex h-full flex-col rounded-3xl bg-white p-7 ring-1 ring-navy-900/[0.07] sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                    <h3 className="text-[24px] font-bold leading-tight tracking-[-0.02em] text-navy-950">
                      {c.name}
                    </h3>
                    {c.format && (
                      <span className="rounded-full bg-sun-100 px-3 py-1 text-[12px] font-semibold text-sun-800">
                        {c.format}
                      </span>
                    )}
                  </div>

                  {c.summary && (
                    <p className="mt-4 text-[15px] leading-relaxed text-navy-900/70">
                      {c.summary}
                    </p>
                  )}

                  {c.supports && c.supports.length > 0 && (
                    <>
                      <h4 className="mt-6 text-[13px] font-semibold text-navy-950">
                        {t.supportsLabel}
                      </h4>
                      <ul className="mt-3 space-y-2.5">
                        {c.supports.map((s) => (
                          <li
                            key={s}
                            className="flex items-start gap-3 text-[14px] leading-relaxed text-navy-900/75"
                          >
                            <Check
                              aria-hidden
                              className="mt-1 h-3.5 w-3.5 shrink-0 text-sun-600"
                              strokeWidth={3}
                            />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {c.consideration && (
                    <div className="mt-auto pt-6">
                      <div className="border-t border-navy-900/[0.07] pt-4 text-[13px] leading-relaxed text-navy-900/75">
                        <span className="font-semibold text-navy-950">
                          {t.considerationsLabel}
                        </span>{" "}
                        {c.consideration}
                      </div>
                    </div>
                  )}
                </article>
              </Reveal>
            ))}
          </div>

          {/* Compliance footer */}
          <Reveal>
            <div className="mt-6 rounded-3xl bg-white p-6 ring-1 ring-navy-900/[0.07] sm:p-8">
              <h3 className="text-[13px] font-semibold text-navy-950">
                {t.aboutLabel}
              </h3>
              <p className="mt-2 max-w-3xl text-[14px] leading-relaxed text-navy-900/75">
                {t.aboutBody1}{" "}
                <span className="font-semibold text-navy-950">
                  {t.aboutBodyBold2}
                </span>
                {t.aboutBody3}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* First month timeline */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x">
          <div className="grid items-end gap-8 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <p className="text-[13px] font-semibold text-sun-700">
                {t.monthEyebrow}
              </p>
              <h2 className={H2}>
                {t.monthTitle1}{" "}
                <span className="text-sun-600">{t.monthTitle2}</span>
              </h2>
            </Reveal>
            <Reveal delay={120} className="md:col-span-5">
              <p className={LEAD}>{t.monthLead}</p>
            </Reveal>
          </div>

          <ol className="mt-12 space-y-4">
            {t.timeline.map((s, i) => {
              const Icon = TIMELINE_ICONS[i % TIMELINE_ICONS.length];
              return (
                <Reveal key={s.title} delay={i * 90}>
                  <li className="grid gap-6 rounded-3xl bg-mist-50 p-6 sm:p-8 md:grid-cols-12 md:gap-10">
                    <div className="flex items-center gap-4 md:col-span-3 md:block">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-950 text-sun-300">
                        <Icon aria-hidden className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <div className="md:mt-5">
                        <div className="text-[15px] font-bold text-sun-700">
                          {s.when}
                        </div>
                        <div className="mt-0.5 text-[13px] text-navy-900/70">
                          {s.duration}
                        </div>
                      </div>
                    </div>

                    <div className="min-w-0 md:col-span-9">
                      <h3 className="text-[clamp(1.4rem,2.2vw,1.75rem)] font-bold leading-tight tracking-[-0.02em] text-navy-950">
                        {s.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-navy-900/70">
                        {s.body}
                      </p>

                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-2xl bg-white p-4 ring-1 ring-navy-900/[0.07]">
                          <div className="text-[13px] font-semibold text-navy-950">
                            {t.youLabel}
                          </div>
                          <p className="mt-1.5 text-[14px] leading-relaxed text-navy-900/70">
                            {s.you}
                          </p>
                        </div>
                        <div className="rounded-2xl bg-white p-4 ring-1 ring-navy-900/[0.07]">
                          <div className="text-[13px] font-semibold text-navy-950">
                            {t.providerLabel}
                          </div>
                          <p className="mt-1.5 text-[14px] leading-relaxed text-navy-900/70">
                            {s.provider}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>

          <Reveal delay={200}>
            <div className="mt-6 flex flex-col items-start gap-5 rounded-3xl bg-sun-50 p-7 ring-1 ring-inset ring-sun-200/70 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div className="max-w-xl">
                <div className="text-[clamp(1.25rem,2vw,1.5rem)] font-bold leading-snug text-navy-950">
                  {t.inlineCtaTitle}
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-navy-900/70">
                  {t.inlineCtaBody}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link href="/qualify" className={`btn-pill ${FOCUS}`}>
                  {t.inlineCtaBtn}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/how-it-works" className={`btn-link ${FOCUS}`}>
                  {t.inlineCtaLink}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="text-[13px] font-semibold text-sun-700">
              {t.faqEyebrow}
            </p>
            <h2 className={H2}>{t.faqTitle}</h2>
            <p className="mt-4 text-[17px] leading-relaxed text-navy-900/70">
              {t.faqLead}
            </p>
          </Reveal>
          <div className="lg:col-span-8">
            <Reveal delay={100}>
              <FaqList faqs={t.faqs} idPrefix="wl-faq" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white pb-24 sm:pb-32">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-navy-950 p-8 text-white sm:p-12 lg:p-16">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(55% 70% at 0% 100%, rgba(200,146,56,.18) 0%, rgba(200,146,56,0) 70%)",
                }}
              />
              <div className="relative grid items-end gap-10 md:grid-cols-12">
                <div className="md:col-span-7">
                  <p className="text-[13px] font-semibold text-sun-300">
                    {t.finalEyebrow}
                  </p>
                  <h2 className="mt-4 max-w-lg text-balance text-[clamp(2.1rem,4.2vw,3.5rem)] font-extrabold leading-[1.04] tracking-[-0.035em] text-white">
                    {t.finalTitle1} {t.finalTitle2}
                  </h2>
                </div>
                <p className="max-w-md text-[16px] leading-relaxed text-white/75 md:col-span-5">
                  {t.finalBody}
                </p>
              </div>

              <div className="relative mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-white/10 pt-8">
                <Link href="/qualify" className={`btn-pill ${FOCUS} focus-visible:ring-offset-navy-950`}>
                  {t.finalCta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-block rounded py-1.5 text-[14px] font-medium text-white/80 underline decoration-white/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
                >
                  {t.finalLink}
                </Link>
                <div className="flex items-baseline gap-2 sm:ml-auto">
                  <span className="text-[32px] font-extrabold leading-none tracking-tight">
                    {fmtPrice(WEIGHT_LOSS.price)}
                  </span>
                  <span className="text-[14px] text-white/75">{t.perMonth}</span>
                  <span className="text-[14px] text-white/70 line-through">
                    <span className="sr-only">{t.regularly} </span>
                    {fmtPrice(WEIGHT_LOSS.regularPrice)}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
