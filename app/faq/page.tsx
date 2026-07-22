"use client";

import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { WEIGHT_LOSS, fmtPrice } from "@/lib/programs";
import { useLang, pick } from "@/lib/i18n";

const PROMO = fmtPrice(WEIGHT_LOSS.price);
const REGULAR = fmtPrice(WEIGHT_LOSS.regularPrice);

const COPY = {
  en: {
    masthead: "The Journal · Vol. I",
    title1: "What you might wonder,",
    title2: "before you begin.",
    lead: "A reading room of common questions about the GLP-1 Weight Loss Program, our clinicians, and the way our practice works. If something is still on your mind after this, your provider will answer it directly once your intake is complete.",
    contents: "Contents",
    still: "Still wondering",
    stillBody:
      "After your intake, your provider becomes a direct messaging contact. Most replies come back within twenty-four hours.",
    cta: "Start my consultation",
    colophon: "Colophon",
    colophonBody:
      "Set in Fraunces and Inter. Compiled by the Estrella clinical team in Miami, Florida. This page is informational and is not a substitute for medical advice. Treatment is at the discretion of the licensed clinician.",
    groups: [
      {
        title: "The offer & pricing",
        blurb: `The ${PROMO}/month limited-time special, what it includes, and how billing works.`,
        items: [
          {
            q: `What does the ${PROMO}/month special include?`,
            a: `Everything in the program: your doctor consultation, the GLP-1 peptide designated for you by your doctor after the consultation, a guided nutrition plan, and management exercises. Nothing is sold separately.`,
          },
          {
            q: "How long does the special price last?",
            a: `The regular price of the program is ${REGULAR}/month. The ${PROMO}/month special is a limited-time offer — patients who join during the offer keep their consultation included at the special price.`,
          },
          {
            q: "Is the consultation really included?",
            a: `Yes. The consultation with a licensed Estrella provider is part of the ${PROMO}/month price. There is no separate consultation fee.`,
          },
          {
            q: "How does billing work?",
            a: "You will see a clear price before checkout. The subscription is charged monthly and can be paused, changed, or canceled from your dashboard at any time.",
          },
          {
            q: "Do you take insurance?",
            a: "Estrella Wellness programs are direct-pay. Many patients use HSA or FSA funds — we will provide a receipt at your request.",
          },
        ],
      },
      {
        title: "Treatment & the program",
        blurb:
          "What to expect from intake to refill — timelines, labs, shipping, and how your plan is managed.",
        items: [
          {
            q: "How long until I see results?",
            a: "Outcomes vary by individual. Most patients begin to notice changes within the first four to eight weeks of consistent treatment. Your provider sets a realistic timeline based on your goals, history, and response.",
          },
          {
            q: "Which peptide will I receive?",
            a: "That is your doctor's call, made after your consultation. Estrella providers designate the GLP-1 peptide — such as semaglutide or tirzepatide — that fits your history, labs, and goals.",
          },
          {
            q: "Are labs required?",
            a: "Recent lab work may be required for safety and dosing. If your provider needs labs, they will order them — many can be drawn at a partner facility near you.",
          },
          {
            q: "How is medication shipped?",
            a: "Medications are dispensed by Greenstone Rx, our partner compounding pharmacy in Miami, and shipped discreetly to the address on your account, typically within three to five business days of approval.",
          },
          {
            q: "What about the nutrition and exercise plans?",
            a: "Your guided nutrition plan and management exercises are built around your consultation and delivered in your private dashboard, then adjusted by your care team as you progress.",
          },
        ],
      },
      {
        title: "Clinicians & safety",
        blurb:
          "How review works, when the program isn't right, and the way we handle compounded medications.",
        items: [
          {
            q: "Are your providers licensed?",
            a: "Every patient is reviewed by a clinician licensed in the state where you live. We never write a prescription without a provider review.",
          },
          {
            q: "What happens if the program isn't right for me?",
            a: "Your provider may request follow-up information, recommend a video visit, or decline to prescribe — your safety always comes first. There is no charge if a provider determines you are not a fit.",
          },
          {
            q: "What about compounded medications?",
            a: "Some prescriptions are compounded medications. Compounded medications are not FDA-approved in the same manner as commercially manufactured drugs. You will review and acknowledge a compounded-medication disclosure before any plan begins.",
          },
        ],
      },
      {
        title: "Privacy & language",
        blurb:
          "How your information is held, and care in English and Spanish.",
        items: [
          {
            q: "Is my health information private?",
            a: "Yes. Your medical record is encrypted, stored securely, and handled in accordance with HIPAA. We never sell your health information.",
          },
          {
            q: "Can I do everything in Spanish?",
            a: "Yes. Our provider team is bilingual, and the site, intake, and your care can all be conducted in English or Spanish — use the EN / ES toggle at the top of any page.",
          },
        ],
      },
    ],
  },
  es: {
    masthead: "El Diario · Vol. I",
    title1: "Lo que podrías preguntarte,",
    title2: "antes de empezar.",
    lead: "Una sala de lectura con las preguntas más comunes sobre el Programa de Pérdida de Peso GLP-1, nuestros médicos y la forma en que trabaja nuestra práctica. Si algo sigue en tu mente después de esto, tu proveedor te lo responderá directamente cuando completes tu cuestionario.",
    contents: "Contenido",
    still: "¿Aún con dudas?",
    stillBody:
      "Después de tu cuestionario, tu proveedor se convierte en un contacto directo de mensajería. La mayoría de las respuestas llegan en veinticuatro horas.",
    cta: "Iniciar mi consulta",
    colophon: "Colofón",
    colophonBody:
      "Compuesto en Fraunces e Inter. Compilado por el equipo clínico de Estrella en Miami, Florida. Esta página es informativa y no sustituye el consejo médico. El tratamiento queda a discreción del médico licenciado.",
    groups: [
      {
        title: "La oferta y los precios",
        blurb: `El especial por tiempo limitado de ${PROMO}/mes, qué incluye y cómo funciona la facturación.`,
        items: [
          {
            q: `¿Qué incluye el especial de ${PROMO}/mes?`,
            a: `Todo el programa: tu consulta médica, el péptido GLP-1 que tu médico designa para ti después de la consulta, un plan de nutrición guiado y ejercicios de manejo. Nada se vende por separado.`,
          },
          {
            q: "¿Cuánto dura el precio especial?",
            a: `El precio regular del programa es ${REGULAR}/mes. El especial de ${PROMO}/mes es una oferta por tiempo limitado — los pacientes que se inscriben durante la oferta conservan su consulta incluida al precio especial.`,
          },
          {
            q: "¿La consulta de verdad está incluida?",
            a: `Sí. La consulta con un proveedor licenciado de Estrella es parte del precio de ${PROMO}/mes. No hay cargo de consulta por separado.`,
          },
          {
            q: "¿Cómo funciona la facturación?",
            a: "Verás un precio claro antes de pagar. La suscripción se cobra mensualmente y puedes pausarla, cambiarla o cancelarla desde tu panel en cualquier momento.",
          },
          {
            q: "¿Aceptan seguro médico?",
            a: "Los programas de Estrella Wellness son de pago directo. Muchos pacientes usan fondos HSA o FSA — te damos un recibo si lo pides.",
          },
        ],
      },
      {
        title: "El tratamiento y el programa",
        blurb:
          "Qué esperar del cuestionario al resurtido — plazos, laboratorios, envíos y cómo se maneja tu plan.",
        items: [
          {
            q: "¿Cuánto tarda en verse el resultado?",
            a: "Los resultados varían según la persona. La mayoría de los pacientes comienza a notar cambios en las primeras cuatro a ocho semanas de tratamiento constante. Tu proveedor establece un plazo realista según tus metas, historial y respuesta.",
          },
          {
            q: "¿Qué péptido voy a recibir?",
            a: "Esa es una decisión de tu médico, tomada después de tu consulta. Los proveedores de Estrella designan el péptido GLP-1 — como semaglutida o tirzepatida — que se ajusta a tu historial, laboratorios y metas.",
          },
          {
            q: "¿Se requieren laboratorios?",
            a: "Puede requerirse laboratorio reciente por seguridad y dosificación. Si tu proveedor necesita laboratorios, los ordenará — muchos pueden tomarse en un centro asociado cerca de ti.",
          },
          {
            q: "¿Cómo se envía el medicamento?",
            a: "Los medicamentos los dispensa Greenstone Rx, nuestra farmacia magistral asociada en Miami, y se envían discretamente a la dirección de tu cuenta, normalmente en tres a cinco días hábiles tras la aprobación.",
          },
          {
            q: "¿Y los planes de nutrición y ejercicio?",
            a: "Tu plan de nutrición guiado y tus ejercicios de manejo se construyen a partir de tu consulta y se entregan en tu panel privado; tu equipo médico los ajusta a medida que progresas.",
          },
        ],
      },
      {
        title: "Médicos y seguridad",
        blurb:
          "Cómo funciona la revisión, cuándo el programa no es adecuado y cómo manejamos los medicamentos magistrales.",
        items: [
          {
            q: "¿Sus proveedores tienen licencia?",
            a: "Cada paciente es revisado por un médico con licencia en el estado donde vive. Nunca escribimos una receta sin revisión médica.",
          },
          {
            q: "¿Qué pasa si el programa no es adecuado para mí?",
            a: "Tu proveedor puede pedir información adicional, recomendar una videoconsulta o declinar la receta — tu seguridad siempre es primero. No hay cargo si el proveedor determina que no eres candidato.",
          },
          {
            q: "¿Qué hay de los medicamentos magistrales?",
            a: "Algunas recetas son medicamentos magistrales. Los medicamentos magistrales no están aprobados por la FDA de la misma manera que los medicamentos comerciales. Revisarás y aceptarás una divulgación de medicamentos magistrales antes de comenzar cualquier plan.",
          },
        ],
      },
      {
        title: "Privacidad e idioma",
        blurb: "Cómo se guarda tu información, y atención en inglés y español.",
        items: [
          {
            q: "¿Mi información de salud es privada?",
            a: "Sí. Tu expediente médico está cifrado, almacenado de forma segura y manejado conforme a HIPAA. Nunca vendemos tu información de salud.",
          },
          {
            q: "¿Puedo hacer todo en español?",
            a: "Sí. Nuestro equipo de proveedores es bilingüe, y el sitio, el cuestionario y tu atención pueden realizarse en inglés o español — usa el selector EN / ES en la parte superior de cualquier página.",
          },
        ],
      },
    ],
  },
};

const slugify = (title: string) => title.replace(/\W+/g, "-").toLowerCase();

export default function FaqPage() {
  const { lang } = useLang();
  const t = pick(lang, COPY);

  return (
    <>
      {/* Editorial masthead */}
      <section className="bg-cream-50 paper-grain paper-grain-light">
        <div className="container-x pt-20 pb-16 lg:pt-28 lg:pb-20">
          <div className="grid items-end gap-12 border-b border-navy-900/15 pb-14 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-navy-900/40" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-navy-900/70">
                  {t.masthead}
                </span>
              </div>
              <h1 className="mt-7 font-display text-display-lg font-light leading-[0.98] text-navy-900">
                {t.title1}
                <br />
                <span className="font-normal italic">{t.title2}</span>
              </h1>
            </Reveal>
            <Reveal delay={120} className="md:col-span-5 md:text-right">
              <p className="max-w-md text-[16px] leading-[1.7] text-navy-900/70 md:ml-auto">
                {t.lead}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-cream-50 paper-grain paper-grain-light pb-32">
        <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left rail — table of contents */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="text-[10px] uppercase tracking-[0.24em] text-navy-900/55">
                {t.contents}
              </div>
              <ol className="mt-7 space-y-5">
                {t.groups.map((g, i) => (
                  <li key={g.title}>
                    <a
                      href={`#${slugify(g.title)}`}
                      className="group flex items-baseline gap-4 text-navy-900 transition-colors hover:text-sun-700"
                    >
                      <span className="font-display text-[13px] font-light text-navy-900/45 group-hover:text-sun-700">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-[20px] font-light leading-[1.2]">
                        {g.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
              <div className="mt-12 border-t border-navy-900/15 pt-8">
                <div className="text-[10px] uppercase tracking-[0.24em] text-navy-900/55">
                  {t.still}
                </div>
                <p className="mt-4 text-[14px] leading-[1.7] text-navy-900/70">
                  {t.stillBody}
                </p>
                <Link href="/qualify" className="btn-primary mt-7">
                  {t.cta}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Right column — Q & A */}
          <div className="lg:col-span-8">
            {t.groups.map((g, gi) => (
              <Reveal key={g.title} delay={gi * 60}>
                <article
                  id={slugify(g.title)}
                  className="scroll-mt-32 border-t border-navy-900/25 pt-14 first:border-t-0 first:pt-0"
                >
                  <header className="grid gap-6 md:grid-cols-12">
                    <div className="md:col-span-2">
                      <div className="font-display text-[14px] font-light uppercase tracking-[0.22em] text-navy-900/55">
                        Vol. {String(gi + 1).padStart(2, "0")}
                      </div>
                    </div>
                    <div className="md:col-span-10">
                      <h2 className="font-display text-[34px] font-light leading-[1.05] text-navy-900 sm:text-[40px]">
                        {g.title}
                      </h2>
                      <p className="mt-4 max-w-lg text-[15px] leading-[1.7] text-navy-900/65">
                        {g.blurb}
                      </p>
                    </div>
                  </header>

                  <ol className="mt-12 divide-y divide-navy-900/15">
                    {g.items.map((it, qi) => (
                      <li key={it.q}>
                        <details className="group py-2 [&[open]>summary>.qa-icon]:rotate-45">
                          <summary className="flex cursor-pointer list-none items-baseline gap-6 py-7 marker:hidden">
                            <span className="font-display text-[13px] font-light text-navy-900/45 sm:w-12">
                              {String(qi + 1).padStart(2, "0")}
                            </span>
                            <span className="flex-1 font-display text-[20px] font-light leading-[1.3] text-navy-900 sm:text-[22px]">
                              {it.q}
                            </span>
                            <span
                              aria-hidden
                              className="qa-icon flex h-6 w-6 flex-shrink-0 items-center justify-center text-navy-900/55 transition-transform duration-300"
                            >
                              <Plus className="h-5 w-5" strokeWidth={1.25} />
                            </span>
                          </summary>
                          <div className="grid gap-6 pb-8 sm:pl-[4.5rem] md:grid-cols-12">
                            <p className="text-[15px] leading-[1.75] text-navy-900/70 md:col-span-10">
                              {it.a}
                            </p>
                          </div>
                        </details>
                      </li>
                    ))}
                  </ol>
                </article>
              </Reveal>
            ))}

            {/* Closing colophon */}
            <Reveal>
              <div className="mt-24 border-t border-navy-900/15 pt-10">
                <div className="text-[10px] uppercase tracking-[0.24em] text-navy-900/55">
                  {t.colophon}
                </div>
                <p className="mt-4 max-w-xl text-[14px] leading-[1.75] text-navy-900/60">
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
