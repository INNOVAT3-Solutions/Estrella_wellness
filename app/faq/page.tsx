"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { WEIGHT_LOSS, fmtPrice } from "@/lib/programs";
import { useLang, pick } from "@/lib/i18n";

const PROMO = fmtPrice(WEIGHT_LOSS.price);
const REGULAR = fmtPrice(WEIGHT_LOSS.regularPrice);
const EMAIL = "info@estrellamedicalcenters.com";

type QA = {
  q: string;
  a: string;
  links?: { href: string; label: string }[];
};
type Group = { title: string; blurb: string; items: QA[] };

const LINKS = {
  en: {
    refunds: { href: "/refunds", label: "Refund policy" },
    terms: { href: "/terms", label: "Terms of service" },
    privacy: { href: "/privacy", label: "Privacy policy" },
  },
  es: {
    refunds: { href: "/refunds", label: "Política de reembolsos" },
    terms: { href: "/terms", label: "Términos del servicio" },
    privacy: { href: "/privacy", label: "Política de privacidad" },
  },
};

const COPY = {
  en: {
    masthead: "Frequently asked questions",
    title1: "What you might wonder,",
    title2: "before you begin.",
    lead: `Answers to common questions about the GLP-1 Weight Loss Program, our doctors and how the program works. If something is still on your mind, email ${EMAIL} or ask your doctor at your consultation.`,
    contents: "Contents",
    still: "Still wondering",
    stillBody: `Email us at ${EMAIL}, or book online with your contact details and preferred location and time. Our team will call you to ask a few questions and coordinate your visit.`,
    cta: "Start my consultation",
    colophon: "About this page",
    colophonBody:
      "Compiled by the Estrella Medical Centers team in Miami, Florida. This page is informational and is not a substitute for medical advice. Treatment is at the discretion of the licensed doctor.",
    groups: [
      {
        title: "The offer & pricing",
        blurb: `The ${PROMO}/month limited-time special, what it includes, and how billing and cancellation work.`,
        items: [
          {
            q: `What does the ${PROMO}/month special include?`,
            a: `Everything in the program: your doctor consultation and blood work review, the GLP-1 medication your doctor chooses if treatment is right for you (given weekly in the clinic, with a check-in at every visit), a nutritionist meal plan and a guided exercise program. Nothing is sold separately.`,
          },
          {
            q: "How long does the special price last?",
            a: `The regular price of the program is ${REGULAR}/month. The ${PROMO}/month price is a limited-time offer.`,
          },
          {
            q: "Is the consultation included?",
            a: `Yes. The doctor consultation is part of the ${PROMO}/month price, with no separate consultation fee. After you book, you can pay online through our secure Stripe checkout or pay at your visit, and you get a full refund if you are not approved or the doctor decides the program is not a fit for you.`,
          },
          {
            q: "How does billing work?",
            a: `After you book, you choose to pay ${PROMO} now, online through our secure Stripe checkout, or at your visit. If you are not approved, or the doctor decides the program is not a fit for you, you get a full refund. After that, the program renews monthly until you cancel.`,
            links: [LINKS.en.refunds, LINKS.en.terms],
          },
          {
            q: "How do I cancel?",
            a: `You can cancel anytime by emailing ${EMAIL} or telling the clinic. Cancelling stops future charges. Injections already given and visits already completed are not refunded, and there are no refunds for partial months.`,
            links: [LINKS.en.refunds, LINKS.en.terms],
          },
          {
            q: "Do you take insurance?",
            a: `The program is paid directly at the monthly price. If you have questions about payment, email ${EMAIL}.`,
          },
          {
            q: "Do I need to be an Estrella patient or member to join?",
            a: "No. The program is open to everyone at the same price, whether or not you are already an Estrella patient. No membership is needed.",
          },
          {
            q: "Will there be other programs?",
            a: "Yes. More programs are coming soon, and people who join will hear about them first.",
          },
        ],
      },
      {
        title: "Treatment & the program",
        blurb:
          "What to expect from your consultation to your weekly visits: blood work, injections, and how your plan is managed.",
        items: [
          {
            q: "How do I get started?",
            a: "Book online with your name, phone, email, preferred Estrella location and preferred date and time. There are no health questions to fill out online. Our team calls you to ask a few questions and coordinate your visit, and then you meet the doctor for your consultation in the clinic.",
          },
          {
            q: "How long until I see results?",
            a: "Results vary from person to person, and no result is guaranteed. Your doctor follows your progress at your weekly check-ins and adjusts your plan.",
          },
          {
            q: "Which medication will I receive?",
            a: "That is your doctor's call, made at your consultation. Your doctor decides whether any medication is appropriate for you and, if so, chooses the GLP-1 medication (such as semaglutide or tirzepatide) that fits your history, blood work and goals. Availability may vary.",
          },
          {
            q: "Is blood work required?",
            a: "Your doctor reviews your blood work as part of the consultation. If you need new lab work, your doctor will tell you.",
          },
          {
            q: "Where do I receive my injections?",
            a: "In person. Our medical team gives your injection every week at an Estrella Medical Centers location in Miami. Every visit includes a check-in on your weight, vitals, how you feel and your dose. Medication is not shipped to your home.",
          },
          {
            q: "What about the nutrition and exercise plans?",
            a: "A nutritionist builds your meal plan around your consultation, and you follow a guided exercise program. Your care team adjusts both as you progress.",
          },
        ],
      },
      {
        title: "Doctors & safety",
        blurb:
          "How the review works, when the program isn't right, and what to know about compounded medication.",
        items: [
          {
            q: "Are your doctors licensed?",
            a: "Yes. Your care is led by licensed doctors at Estrella Medical Centers in Miami, with 20+ years of experience. Medication is prescribed only after a doctor's review.",
          },
          {
            q: "What happens if the program isn't right for me?",
            a: "Your doctor may ask for more information or lab work, or decide that the program is not right for you. Your safety comes first. If you are not approved, or the doctor decides the program is not a fit for you, you get a full refund.",
            links: [LINKS.en.refunds],
          },
          {
            q: "What about compounded medication?",
            a: "On your doctor's prescription, your medication may be prepared by Greenstone Rx, our partner compounding pharmacy in Miami. Compounded drugs are not FDA-approved and have not been reviewed by the FDA for safety, effectiveness or quality. Your doctor decides whether any medication is appropriate for you, and availability may vary.",
          },
        ],
      },
      {
        title: "Privacy & language",
        blurb: "How your information is handled, and care in English and Spanish.",
        items: [
          {
            q: "Is my health information private?",
            a: "Yes. The booking form only asks for your contact details and your preferred location, date and time. We do not collect health information on the website. Your health history is discussed by phone with our team and at your clinic visit, and we protect it as described in our Privacy Policy.",
            links: [LINKS.en.privacy],
          },
          {
            q: "Can I do everything in Spanish?",
            a: "Yes. Care is available in Spanish and English, and so is this site. Use the EN / ES toggle at the top of any page.",
          },
        ],
      },
    ] as Group[],
  },
  es: {
    masthead: "Preguntas frecuentes",
    title1: "Lo que podrías preguntarte,",
    title2: "antes de empezar.",
    lead: `Respuestas a las preguntas más comunes sobre el Programa de Pérdida de Peso GLP-1, nuestros médicos y cómo funciona el programa. Si te queda alguna duda, escríbenos a ${EMAIL} o pregúntale a tu médico en tu consulta.`,
    contents: "Contenido",
    still: "¿Aún con dudas?",
    stillBody: `Escríbenos a ${EMAIL}, o agenda en línea con tus datos de contacto y el centro, la fecha y la hora que prefieras. Nuestro equipo te llamará para hacerte algunas preguntas y coordinar tu visita.`,
    cta: "Iniciar mi consulta",
    colophon: "Sobre esta página",
    colophonBody:
      "Preparada por el equipo de Estrella Medical Centers en Miami, Florida. Esta página es informativa y no sustituye el consejo médico. El tratamiento queda a criterio del médico licenciado.",
    groups: [
      {
        title: "La oferta y los precios",
        blurb: `El especial por tiempo limitado de ${PROMO}/mes, qué incluye y cómo funcionan el cobro y la cancelación.`,
        items: [
          {
            q: `¿Qué incluye el especial de ${PROMO}/mes?`,
            a: `Todo el programa: tu consulta médica y la revisión de tus análisis de sangre, el medicamento GLP-1 que elija tu médico si el tratamiento es adecuado para ti (aplicado cada semana en la clínica, con un chequeo en cada visita), un plan de comidas de una nutricionista y un programa de ejercicios guiado. Nada se vende por separado.`,
          },
          {
            q: "¿Cuánto dura el precio especial?",
            a: `El precio regular del programa es ${REGULAR}/mes. El precio de ${PROMO}/mes es una oferta por tiempo limitado.`,
          },
          {
            q: "¿La consulta está incluida?",
            a: `Sí. La consulta con el médico es parte del precio de ${PROMO}/mes y no tiene un cargo aparte. Después de agendar, puedes pagar en línea con nuestro pago seguro de Stripe o pagar en tu visita, y te devolvemos el pago completo si no eres aprobado o si el médico decide que el programa no es adecuado para ti.`,
          },
          {
            q: "¿Cómo funciona el cobro?",
            a: `Después de agendar, eliges pagar los ${PROMO} ahora, en línea con nuestro pago seguro de Stripe, o en tu visita. Si no eres aprobado, o si el médico decide que el programa no es adecuado para ti, te devolvemos el pago completo. Después, el programa se renueva cada mes hasta que lo canceles.`,
            links: [LINKS.es.refunds, LINKS.es.terms],
          },
          {
            q: "¿Cómo cancelo?",
            a: `Puedes cancelar cuando quieras escribiendo a ${EMAIL} o avisando en la clínica. Al cancelar se detienen los cobros futuros. No se reembolsan las inyecciones ya aplicadas ni las visitas ya realizadas, y no hay reembolsos por meses parciales.`,
            links: [LINKS.es.refunds, LINKS.es.terms],
          },
          {
            q: "¿Aceptan seguro médico?",
            a: `El programa se paga directamente al precio mensual. Si tienes preguntas sobre el pago, escríbenos a ${EMAIL}.`,
          },
          {
            q: "¿Necesito ser paciente o miembro de Estrella para inscribirme?",
            a: "No. El programa está abierto a todos al mismo precio, seas o no paciente de Estrella. No necesitas membresía.",
          },
          {
            q: "¿Habrá otros programas?",
            a: "Sí. Pronto habrá más programas, y quienes se inscriban serán los primeros en saberlo.",
          },
        ],
      },
      {
        title: "El tratamiento y el programa",
        blurb:
          "Qué esperar desde tu consulta hasta tus visitas semanales: análisis, inyecciones y cómo se maneja tu plan.",
        items: [
          {
            q: "¿Cómo empiezo?",
            a: "Agenda en línea con tu nombre, teléfono, correo, el centro Estrella que prefieras y la fecha y la hora que te convengan. No tienes que llenar preguntas de salud en línea. Nuestro equipo te llama para hacerte algunas preguntas y coordinar tu visita, y luego te reúnes con el médico para tu consulta en la clínica.",
          },
          {
            q: "¿Cuánto tarda en verse el resultado?",
            a: "Los resultados varían de una persona a otra y no hay resultados garantizados. Tu médico sigue tu progreso en tus chequeos semanales y ajusta tu plan.",
          },
          {
            q: "¿Qué medicamento voy a recibir?",
            a: "Lo decide tu médico en tu consulta. Tu médico decide si algún medicamento es adecuado para ti y, si lo es, elige el medicamento GLP-1 (como semaglutida o tirzepatida) que mejor se ajusta a tu historial, tus análisis y tus metas. La disponibilidad puede variar.",
          },
          {
            q: "¿Se necesitan análisis de sangre?",
            a: "Tu médico revisa tus análisis de sangre como parte de la consulta. Si necesitas análisis nuevos, tu médico te lo dirá.",
          },
          {
            q: "¿Dónde recibo mis inyecciones?",
            a: "En persona. Nuestro equipo médico te aplica la inyección cada semana en un centro de Estrella Medical Centers en Miami. Cada visita incluye un chequeo de tu peso, tus signos vitales, cómo te sientes y tu dosis. El medicamento no se envía a tu casa.",
          },
          {
            q: "¿Y los planes de nutrición y ejercicio?",
            a: "Una nutricionista crea tu plan de comidas a partir de tu consulta y sigues un programa de ejercicios guiado. Tu equipo médico ajusta ambos a medida que avanzas.",
          },
        ],
      },
      {
        title: "Médicos y seguridad",
        blurb:
          "Cómo funciona la revisión, cuándo el programa no es adecuado y qué saber sobre los medicamentos magistrales.",
        items: [
          {
            q: "¿Sus médicos tienen licencia?",
            a: "Sí. Tu atención la dirigen médicos licenciados de Estrella Medical Centers en Miami, con más de 20 años de experiencia. Solo se receta un medicamento después de la revisión de un médico.",
          },
          {
            q: "¿Qué pasa si el programa no es adecuado para mí?",
            a: "Tu médico puede pedirte más información o análisis, o decidir que el programa no es adecuado para ti. Tu seguridad es lo primero. Si no eres aprobado, o si el médico decide que el programa no es adecuado para ti, te devolvemos el pago completo.",
            links: [LINKS.es.refunds],
          },
          {
            q: "¿Qué hay de los medicamentos magistrales?",
            a: "Con la receta de tu médico, tu medicamento puede prepararlo Greenstone Rx, nuestra farmacia magistral asociada en Miami. Los medicamentos magistrales no están aprobados por la FDA y la FDA no ha revisado su seguridad, eficacia ni calidad. Tu médico decide si algún medicamento es adecuado para ti, y la disponibilidad puede variar.",
          },
        ],
      },
      {
        title: "Privacidad e idioma",
        blurb: "Cómo se maneja tu información, y atención en español e inglés.",
        items: [
          {
            q: "¿Mi información de salud es privada?",
            a: "Sí. El formulario para agendar solo pide tus datos de contacto y el centro, la fecha y la hora que prefieres. No recopilamos información de salud en el sitio web. Tu historial de salud se habla por teléfono con nuestro equipo y en tu visita a la clínica, y lo protegemos como se describe en nuestra Política de privacidad.",
            links: [LINKS.es.privacy],
          },
          {
            q: "¿Puedo hacer todo en español?",
            a: "Sí. La atención está disponible en español e inglés, igual que este sitio. Usa el selector EN / ES en la parte superior de cualquier página.",
          },
        ],
      },
    ] as Group[],
  },
};

const FOCUS =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun-500 focus-visible:ring-offset-2";

function FaqItems({ items, groupId }: { items: QA[]; groupId: string }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <ol className="mt-8 divide-y divide-navy-900/10 overflow-hidden rounded-3xl bg-mist-50 ring-1 ring-navy-900/[0.07]">
      {items.map((it, qi) => {
        const isOpen = open === qi;
        const btnId = `${groupId}-q-${qi}`;
        const panelId = `${groupId}-a-${qi}`;
        return (
          <li key={it.q}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : qi)}
                className="flex w-full items-center gap-4 p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sun-500 sm:gap-5 sm:p-6"
              >
                <span
                  aria-hidden
                  className="hidden w-6 shrink-0 text-[13px] font-semibold text-sun-700 sm:block"
                >
                  {String(qi + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1 text-[16px] font-semibold leading-snug text-navy-950 sm:text-[17px]">
                  {it.q}
                </span>
                <span
                  aria-hidden
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-navy-950 transition-all duration-300 ${
                    isOpen ? "rotate-45 bg-sun-400" : "bg-mist-100"
                  }`}
                >
                  <Plus className="h-4 w-4" strokeWidth={2.5} />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="px-5 pb-6 sm:pl-[4.25rem] sm:pr-16"
            >
              <p className="text-[15px] leading-relaxed text-navy-900/75">{it.a}</p>
              {it.links && it.links.length > 0 && (
                <p className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[15px]">
                  {it.links.map((l) => (
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
          </li>
        );
      })}
    </ol>
  );
}

const slugify = (title: string) => title.replace(/\W+/g, "-").toLowerCase();

export default function FaqPage() {
  const { lang } = useLang();
  const t = pick(lang, COPY);

  return (
    <>
      {/* Hero */}
      <section className="bg-mist-50 font-heading">
        <div className="container-x py-20 sm:py-28">
          <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
            <Reveal className="md:col-span-7">
              <span className="tag-pill">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-sun-500" />
                {t.masthead}
              </span>
              <h1 className="mt-5 text-balance font-heading text-[clamp(2.4rem,3.9vw,4.4rem)] font-extrabold leading-[1.03] tracking-[-0.035em] text-navy-950">
                {t.title1}{" "}
                <span className="text-sun-600">{t.title2}</span>
              </h1>
            </Reveal>
            <Reveal delay={120} className="md:col-span-5">
              <p className="max-w-lg text-pretty text-[17px] leading-relaxed text-navy-900/70">
                {t.lead}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white font-heading">
        <div className="container-x grid gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:gap-16">
          {/* Left rail: table of contents */}
          <aside className="lg:col-span-4">
            <div className="space-y-5 lg:sticky lg:top-32">
              <div className="rounded-3xl bg-mist-50 p-6 ring-1 ring-navy-900/[0.07] sm:p-7">
                <h2 className="text-[13px] font-semibold text-sun-700">{t.contents}</h2>
                <ol className="mt-5 space-y-1">
                  {t.groups.map((g, i) => (
                    <li key={g.title}>
                      <a
                        href={`#${slugify(g.title)}`}
                        className={`group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-navy-950 transition-colors hover:bg-white ${FOCUS}`}
                      >
                        <span aria-hidden className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[12px] font-bold text-navy-900/70 ring-1 ring-navy-900/[0.07] transition-colors group-hover:bg-sun-400 group-hover:text-navy-950 group-hover:ring-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[15px] font-semibold leading-snug">
                          {g.title}
                        </span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>

              <div
                className="relative overflow-hidden rounded-3xl bg-navy-950 p-6 text-white sm:p-7"
                style={{
                  backgroundImage:
                    "radial-gradient(55% 70% at 0% 100%, rgba(200,146,56,.18) 0%, rgba(200,146,56,0) 70%)",
                }}
              >
                <h2 className="text-[13px] font-semibold text-sun-300">{t.still}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-white/80">
                  {t.stillBody}
                </p>
                <Link
                  href="/qualify"
                  className={`btn-pill mt-6 ${FOCUS} focus-visible:ring-offset-navy-950`}
                >
                  {t.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Right column: Q & A */}
          <div className="min-w-0 space-y-16 lg:col-span-8 sm:space-y-20">
            {t.groups.map((g, gi) => (
              <Reveal key={g.title} delay={gi * 60}>
                <article id={slugify(g.title)} className="scroll-mt-32">
                  <header>
                    <p aria-hidden className="text-[13px] font-semibold text-sun-700">
                      {String(gi + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-3 text-balance font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-navy-950">
                      {g.title}
                    </h2>
                    <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-navy-900/70">
                      {g.blurb}
                    </p>
                  </header>

                  <FaqItems items={g.items} groupId={slugify(g.title)} />
                </article>
              </Reveal>
            ))}

            {/* Closing colophon */}
            <Reveal>
              <div className="border-t border-navy-900/10 pt-8">
                <p className="text-[13px] font-semibold text-sun-700">{t.colophon}</p>
                <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-navy-900/70">
                  {t.colophonBody}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
