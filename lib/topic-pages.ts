import type { Lang } from "@/lib/lang-detect";
import { PRICING, fmtPrice } from "@/lib/programs";
import type { PageCopy } from "@/lib/seo";

/*
 * Copy for the medication and cost pages under /programs/weight-loss/*.
 *
 * Compliance (outranks SEO, see estrellawellnessplans.com-audit/briefs):
 * no outcome numbers or timelines, no brand names or equivalence claims,
 * the doctor decides any medication, the compounded-medication disclosure
 * stays word for word, approved payment wording, approved stats only.
 * Medical statements reuse wording already on the site.
 */

const PROMO = fmtPrice(PRICING.promo);
const REGULAR = fmtPrice(PRICING.regular);
const EMAIL = "info@estrellamedicalcenters.com";

export type TopicSlug = "semaglutide" | "tirzepatide" | "cost";
export const TOPIC_SLUGS: TopicSlug[] = ["semaglutide", "tirzepatide", "cost"];

export type Block =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "note"; title: string; text: string };

export type Section = { id: string; h2: string; blocks: Block[] };

export type TopicCopy = {
  crumb: string;
  eyebrow: string;
  h1: string;
  intro: string;
  priceNote: string;
  sections: Section[];
  showClinics: boolean;
  related: { href: string; label: string }[];
  updated: string;
  ctaTitle: string;
  ctaBody: string;
};

export const TOPIC_META: Record<TopicSlug, PageCopy> = {
  semaglutide: {
    en: {
      title: "Semaglutide in Miami: Doctor-Led Care",
      description:
        "Semaglutide in Miami, given weekly in person at Estrella clinics if your doctor decides it's right for you. Learn how it works, side effects and cost.",
    },
    es: {
      title: "Semaglutida en Miami con médicos",
      description:
        "Semaglutida en Miami, aplicada cada semana en las clínicas Estrella si tu médico decide que es adecuada para ti. Cómo funciona, efectos y costo.",
    },
  },
  tirzepatide: {
    en: {
      title: "Tirzepatide in Miami: Doctor-Led Care",
      description:
        "Tirzepatide in Miami, given weekly in person at Estrella clinics if your doctor decides it's right for you. Learn how it works, side effects and cost.",
    },
    es: {
      title: "Tirzepatida en Miami con médicos",
      description:
        "Tirzepatida en Miami, aplicada cada semana en las clínicas Estrella si tu médico decide que es adecuada para ti. Cómo funciona, efectos y costo.",
    },
  },
  cost: {
    en: {
      title: "GLP-1 Weight Loss Cost in Miami",
      description:
        "What GLP-1 weight loss costs at Estrella in Miami: one monthly price with the doctor visit, weekly in-clinic care and medication if prescribed.",
    },
    es: {
      title: "¿Cuánto cuesta el GLP-1 en Miami?",
      description:
        "Cuánto cuesta bajar de peso con GLP-1 en Estrella, Miami: un precio mensual con la consulta, la atención semanal y el medicamento si te lo recetan.",
    },
  },
};

const DISCLOSURE = {
  en: {
    title: "About compounded medication",
    text: "Your doctor decides whether any medication is appropriate for you. On your doctor's prescription, your medication may be prepared by a partner compounding pharmacy, Greenstone Rx in Miami. Compounded drugs are not FDA-approved and have not been reviewed by the FDA for safety, effectiveness or quality. Availability of any medication may vary. This information is educational and is not a recommendation, diagnosis or guarantee of results. Ask your doctor about benefits, risks and alternatives.",
  },
  es: {
    title: "Sobre los medicamentos compuestos",
    text: "Tu médico decide si algún medicamento es adecuado para ti. Con la receta de tu médico, tu medicamento puede prepararlo una farmacia de compuestos asociada, Greenstone Rx en Miami. Los medicamentos compuestos no están aprobados por la FDA y la FDA no ha revisado su seguridad, eficacia ni calidad. La disponibilidad de cualquier medicamento puede variar. Esta información es educativa y no es una recomendación, un diagnóstico ni una garantía de resultados. Pregúntale a tu médico sobre los beneficios, los riesgos y las alternativas.",
  },
};

const EMERGENCY = {
  en: "If you have a medical emergency, call 911.",
  es: "Si tienes una emergencia médica, llama al 911.",
};

const UPDATED = { en: "Last updated: November 4, 2026", es: "Última actualización: 4 de noviembre de 2026" };

const PRICE_NOTE = {
  en: `${PROMO}/month for a limited time (regular ${REGULAR}). Doctor visit, weekly in-clinic care, nutrition and exercise plans, and medication if your doctor prescribes it.`,
  es: `${PROMO}/mes por tiempo limitado (regular ${REGULAR}). Consulta médica, atención semanal en la clínica, planes de nutrición y ejercicio, y el medicamento si tu médico lo receta.`,
};

/** Shared sections for the two medication pages. */
function medicationSections(lang: Lang, med: "semaglutide" | "tirzepatide"): Section[] {
  const es = lang === "es";
  const name = es ? (med === "semaglutide" ? "semaglutida" : "tirzepatida") : med;
  const Name = name.charAt(0).toUpperCase() + name.slice(1);
  const other = es ? (med === "semaglutide" ? "tirzepatida" : "semaglutida") : med === "semaglutide" ? "tirzepatide" : "semaglutide";

  const definition = {
    semaglutide: {
      en: "Semaglutide is a GLP-1 receptor agonist, similar to a natural gut hormone involved in appetite and blood sugar signaling. In our program it is given as an injection once a week by the Estrella medical team, at a dose your doctor chooses and adjusts.",
      es: "La semaglutida es un agonista del receptor GLP-1, parecido a una hormona intestinal natural que interviene en las señales del apetito y del azúcar en sangre. En nuestro programa se aplica como una inyección una vez por semana, a cargo del equipo médico de Estrella, en la dosis que tu médico elige y ajusta.",
    },
    tirzepatide: {
      en: "Tirzepatide is a dual GIP/GLP-1 receptor agonist. It acts on hormone receptors involved in appetite and blood sugar signaling. In our program it is given as an injection once a week by the Estrella medical team, at a dose your doctor chooses and adjusts.",
      es: "La tirzepatida es un agonista dual de los receptores GIP/GLP-1. Actúa sobre receptores hormonales que intervienen en las señales del apetito y del azúcar en sangre. En nuestro programa se aplica como una inyección una vez por semana, a cargo del equipo médico de Estrella, en la dosis que tu médico elige y ajusta.",
    },
  }[med][lang];

  const sideEffects = {
    semaglutide: {
      en: "Stomach side effects such as nausea are common, especially when the dose goes up. Your doctor reviews your history before you start and adjusts the dose with you. Tell the team at your weekly check-in how you are feeling, or contact the clinic between visits if something worries you.",
      es: "Los efectos estomacales, como las náuseas, son comunes, sobre todo cuando se sube la dosis. Tu médico revisa tu historial antes de empezar y ajusta la dosis contigo. Cuéntale al equipo en tu chequeo semanal cómo te sientes, o comunícate con la clínica entre visitas si algo te preocupa.",
    },
    tirzepatide: {
      en: "Side effects are possible, and stomach side effects such as nausea are among the most common, especially when the dose goes up. Your doctor screens you first, explains the risks and adjusts the dose with you. Tell the team at your weekly check-in how you are feeling, or contact the clinic between visits if something worries you.",
      es: "Puede tener efectos secundarios, y los estomacales, como las náuseas, están entre los más comunes, sobre todo cuando se sube la dosis. Tu médico te evalúa primero, te explica los riesgos y ajusta la dosis contigo. Cuéntale al equipo en tu chequeo semanal cómo te sientes, o comunícate con la clínica entre visitas si algo te preocupa.",
    },
  }[med][lang];

  const sections: Section[] = [
    {
      id: "what-it-is",
      h2: es ? `Qué es la ${name}` : `What ${name} is`,
      blocks: [{ type: "p", text: definition }],
    },
    {
      id: "how-its-given",
      h2: es ? `Cómo se aplica la ${name} en nuestro programa` : `How ${name} is given in our program`,
      blocks: [
        {
          type: "p",
          text: es
            ? `A diferencia de los programas por internet, la ${name} no se envía a tu casa. Si tu médico la receta, vienes una vez por semana a la clínica Estrella que elijas y nuestro equipo médico te aplica la inyección.`
            : `Unlike online programs, ${name} is not shipped to your home. If your doctor prescribes it, you come in once a week to the Estrella clinic you choose and our medical team gives you the injection.`,
        },
        {
          type: "list",
          items: es
            ? [
                "Un chequeo en cada visita: tu peso, tus signos vitales, cómo te sientes y tu dosis.",
                "Tu médico elige la dosis inicial y la ajusta según cómo respondes.",
                "Un plan de comidas de una nutricionista y un programa de ejercicios guiado, incluidos en el mismo precio.",
                "Atención en español e inglés.",
              ]
            : [
                "A check-in at every visit: your weight, vitals, how you feel and your dose.",
                "Your doctor chooses your starting dose and adjusts it as you respond.",
                "A nutritionist meal plan and a guided exercise program, included in the same price.",
                "Care in English and Spanish.",
              ],
        },
      ],
    },
    {
      id: "right-for-you",
      h2: es ? `¿La ${name} es adecuada para ti?` : `Is ${name} right for you?`,
      blocks: [
        {
          type: "p",
          text: es
            ? `Esa decisión es de tu médico. En tu consulta, un médico licenciado de Estrella revisa tu historial, los medicamentos que tomas y tus análisis de sangre. Luego decide si algún medicamento es adecuado para ti y, si lo es, cuál: puede ser la ${name}, la ${other} u otra opción. Nada se aprueba de forma automática.`
            : `That is your doctor's decision. At your consultation, a licensed Estrella doctor reviews your health history, current medications and blood work. Then they decide whether any medication is appropriate for you and, if so, which one: it may be ${name}, ${other} or another option. Nothing is approved automatically.`,
        },
        {
          type: "p",
          text: es
            ? "No es adecuada para todos, por ejemplo durante el embarazo o con ciertos antecedentes médicos personales o familiares. Si tu médico decide que el programa no es para ti, recibes un reembolso total."
            : "It is not right for everyone, including during pregnancy or with certain personal or family medical histories. If your doctor decides the program is not a fit for you, you get a full refund.",
        },
      ],
    },
    {
      id: "side-effects",
      h2: es ? "Efectos secundarios que debes conocer" : "Side effects to know about",
      blocks: [
        { type: "p", text: sideEffects },
        { type: "p", text: EMERGENCY[lang] },
      ],
    },
  ];

  if (med === "tirzepatide") {
    sections.push({
      id: "tirzepatide-or-semaglutide",
      h2: es ? "¿Tirzepatida o semaglutida?" : "Tirzepatide or semaglutide?",
      blocks: [
        {
          type: "p",
          text: es
            ? "Las dos son inyecciones semanales que actúan sobre receptores que intervienen en las señales del apetito. La semaglutida actúa sobre el receptor GLP-1; la tirzepatida actúa sobre los receptores GIP y GLP-1. Tu médico elige la que encaja con tu historial, tus análisis y tus metas, y puede cambiarla si hace falta. No tienes que decidirlo antes de tu consulta."
            : "Both are weekly injections that act on receptors involved in appetite signaling. Semaglutide acts on the GLP-1 receptor; tirzepatide acts on both the GIP and GLP-1 receptors. Your doctor chooses the one that fits your history, blood work and goals, and can change it if needed. You do not have to decide before your consultation.",
        },
      ],
    });
  }

  sections.push(
    {
      id: "compounded",
      h2: es ? `${Name} compuesta` : `Compounded ${name}`,
      blocks: [
        {
          type: "p",
          text: es
            ? "Existen versiones de marca aprobadas por la FDA. Los medicamentos que se usan en nuestro programa pueden ser compuestos, que son distintos: se preparan en una farmacia según la receta de tu médico. Lee la información completa abajo y pregúntale a tu médico por las diferencias."
            : "There are FDA-approved brand-name versions. The medication used in our program may be compounded, which is different: it is prepared by a pharmacy on your doctor's prescription. Read the full information below and ask your doctor about the differences.",
        },
        { type: "note", title: DISCLOSURE[lang].title, text: DISCLOSURE[lang].text },
      ],
    },
    {
      id: "cost",
      h2: es ? `Cuánto cuesta la ${name} en nuestro programa` : `What ${name} costs in our program`,
      blocks: [
        {
          type: "p",
          text: es
            ? `No hay un precio aparte por el medicamento. El programa cuesta ${PROMO} al mes por tiempo limitado (precio regular ${REGULAR}) e incluye la consulta, la revisión de análisis, la atención semanal en la clínica, los planes de nutrición y ejercicio, y el medicamento que tu médico elija si el tratamiento es adecuado para ti. Nada se vende por separado.`
            : `There is no separate charge for the medication. The program is ${PROMO} a month for a limited time (regular price ${REGULAR}) and includes the consultation, blood work review, weekly in-clinic care, nutrition and exercise plans, and the medication your doctor chooses if treatment is right for you. Nothing is sold separately.`,
        },
      ],
    },
  );

  return sections;
}

const MED_RELATED = (lang: Lang, med: "semaglutide" | "tirzepatide") => {
  const es = lang === "es";
  const other = med === "semaglutide" ? "tirzepatide" : "semaglutide";
  return [
    { href: "/programs/weight-loss", label: es ? "El programa completo de pérdida de peso GLP-1" : "The full GLP-1 weight loss program" },
    { href: `/programs/weight-loss/${other}`, label: es ? (other === "tirzepatide" ? "Tirzepatida en Miami" : "Semaglutida en Miami") : other === "tirzepatide" ? "Tirzepatide in Miami" : "Semaglutide in Miami" },
    { href: "/programs/weight-loss/cost", label: es ? "Cuánto cuesta bajar de peso con GLP-1" : "What GLP-1 weight loss costs" },
    { href: "/how-it-works", label: es ? "Cómo funciona, paso a paso" : "How it works, step by step" },
    { href: "/faq", label: es ? "Preguntas frecuentes" : "Frequently asked questions" },
  ];
};

function medication(lang: Lang, med: "semaglutide" | "tirzepatide"): TopicCopy {
  const es = lang === "es";
  const name = es ? (med === "semaglutide" ? "semaglutida" : "tirzepatida") : med;
  const Name = name.charAt(0).toUpperCase() + name.slice(1);
  return {
    crumb: Name,
    eyebrow: es ? "Medicamentos GLP-1" : "GLP-1 medications",
    h1: es ? `${Name} en Miami, aplicada cada semana en nuestras clínicas` : `${Name} in Miami, given weekly in our clinics`,
    intro: es
      ? `En Estrella, la ${name} forma parte de un programa de pérdida de peso dirigido por médicos. Si tu médico decide que es adecuada para ti, nuestro equipo te la aplica una vez por semana en una de nuestras seis clínicas de Miami-Dade y Broward, con un chequeo en cada visita.`
      : `At Estrella, ${name} is part of a doctor-led weight loss program. If your doctor decides it is right for you, our medical team gives it to you once a week at one of our six clinics in Miami-Dade and Broward, with a check-in at every visit.`,
    priceNote: PRICE_NOTE[lang],
    sections: medicationSections(lang, med),
    showClinics: true,
    related: MED_RELATED(lang, med),
    updated: UPDATED[lang],
    ctaTitle: es ? "Empieza con una consulta médica." : "Start with a doctor consultation.",
    ctaBody: es
      ? "Agenda en línea en un minuto. Tu médico revisa tu historial y tus análisis y decide contigo el plan."
      : "Book online in a minute. Your doctor reviews your history and blood work and decides on the plan with you.",
  };
}

function cost(lang: Lang): TopicCopy {
  const es = lang === "es";
  return {
    crumb: es ? "Costo" : "Cost",
    eyebrow: es ? "Precio y pagos" : "Price and payment",
    h1: es ? "Cuánto cuesta bajar de peso con GLP-1 en Miami" : "GLP-1 weight loss cost in Miami: one monthly price",
    intro: es
      ? `En Estrella, el programa de pérdida de peso con GLP-1 cuesta ${PROMO} al mes por tiempo limitado (precio regular ${REGULAR}). Ese precio incluye la consulta con el médico, la revisión de tus análisis, la atención semanal en la clínica, los planes de nutrición y ejercicio, y el medicamento GLP-1 que elija tu médico si el tratamiento es adecuado para ti. Nada se vende por separado.`
      : `At Estrella, the GLP-1 weight loss program costs ${PROMO} a month for a limited time (regular price ${REGULAR}). That price includes your doctor consultation, blood work review, weekly in-clinic care, nutrition and exercise plans, and the GLP-1 medication your doctor chooses if treatment is right for you. Nothing is sold separately.`,
    priceNote: PRICE_NOTE[lang],
    sections: [
      {
        id: "included",
        h2: es ? "Qué incluye el precio mensual" : "What the monthly price includes",
        blocks: [
          {
            type: "list",
            items: es
              ? [
                  "Tu consulta con un médico licenciado de Estrella, sin cargo aparte por la consulta.",
                  "La revisión de tus análisis de sangre. Si necesitas análisis nuevos, tu médico te lo dirá.",
                  "El medicamento GLP-1 que elija tu médico, si el tratamiento es adecuado para ti, aplicado cada semana en la clínica.",
                  "Un chequeo en cada visita semanal: peso, signos vitales, cómo te sientes y tu dosis.",
                  "Un plan de comidas de una nutricionista y un programa de ejercicios guiado.",
                  "Atención en español e inglés, sin membresía.",
                ]
              : [
                  "Your consultation with a licensed Estrella doctor, with no separate consultation fee.",
                  "A review of your blood work. If you need new lab work, your doctor will tell you.",
                  "The GLP-1 medication your doctor chooses, if treatment is right for you, given weekly in the clinic.",
                  "A check-in at every weekly visit: weight, vitals, how you feel and your dose.",
                  "A nutritionist meal plan and a guided exercise program.",
                  "Care in English and Spanish, with no membership.",
                ],
          },
        ],
      },
      {
        id: "billing",
        h2: es ? "Cómo funcionan el pago y la facturación" : "How payment and billing work",
        blocks: [
          {
            type: "list",
            items: es
              ? [
                  "El pago se cobra antes o en tu consulta: puedes pagar en línea con Stripe después de agendar, o en tu visita.",
                  "Si tu médico determina que no eres candidato, recibes un reembolso total.",
                  "Después, el programa se renueva cada mes hasta que canceles.",
                  `Puedes cancelar en cualquier momento escribiendo a ${EMAIL} o avisando en la clínica. Cancelar detiene los cobros futuros.`,
                  "Las inyecciones ya aplicadas y las visitas ya hechas no se reembolsan, y no hay reembolsos por meses parciales.",
                ]
              : [
                  "Payment is collected at or before your consultation: you can pay online through Stripe after you book, or at your visit.",
                  "If your doctor finds you are not a candidate, you get a full refund.",
                  "After that, the program renews monthly until you cancel.",
                  `You can cancel at any time by emailing ${EMAIL} or telling the clinic. Cancelling stops future charges.`,
                  "Injections already given and visits already completed are not refunded, and there are no refunds for partial months.",
                ],
          },
        ],
      },
      {
        id: "insurance",
        h2: es ? "¿Aceptan seguro médico?" : "Do you take insurance?",
        blocks: [
          {
            type: "p",
            text: es
              ? `El programa se paga directamente al precio mensual; no se factura al seguro. Si tienes preguntas sobre el pago, escribe a ${EMAIL}.`
              : `The program is paid directly at the monthly price; it is not billed to insurance. If you have questions about payment, email ${EMAIL}.`,
          },
        ],
      },
      {
        id: "compare",
        h2: es ? "Qué preguntar al comparar precios de GLP-1" : "Questions to ask when comparing GLP-1 prices",
        blocks: [
          {
            type: "p",
            text: es
              ? "Los precios de los programas de GLP-1 se presentan de formas muy distintas. Antes de comparar, pregunta a cualquier proveedor:"
              : "GLP-1 programs present their prices in very different ways. Before you compare, ask any provider:",
          },
          {
            type: "list",
            items: es
              ? [
                  "¿La consulta con el médico está incluida o se cobra aparte?",
                  "¿Los análisis de sangre están incluidos?",
                  "¿El medicamento está incluido en el precio mensual o se cobra por separado?",
                  "¿Un médico te ve en persona y alguien te revisa en cada dosis, o todo es por internet y el medicamento se envía a tu casa?",
                  "¿Hay que pagar una membresía o firmar un contrato?",
                  "¿Qué pasa si el médico decide que el tratamiento no es para ti? ¿Te devuelven el dinero?",
                ]
              : [
                  "Is the doctor consultation included, or charged separately?",
                  "Is blood work included?",
                  "Is the medication included in the monthly price, or billed separately?",
                  "Does a doctor see you in person and does someone check on you at every dose, or is it all online with medication shipped to your home?",
                  "Is there a membership fee or a contract?",
                  "What happens if the doctor decides treatment is not right for you? Do you get your money back?",
                ],
          },
        ],
      },
      {
        id: "why-prices-differ",
        h2: es ? "Por qué los precios cambian de un proveedor a otro" : "Why prices differ between providers",
        blocks: [
          {
            type: "p",
            text: es
              ? "Las diferencias suelen venir de lo que incluye cada precio: si hay atención en persona o solo por internet, si el medicamento y los análisis están incluidos, si hay seguimiento semanal, y si el medicamento es una versión de marca aprobada por la FDA o un medicamento compuesto. En nuestro programa, el medicamento puede ser compuesto; lee la información abajo."
              : "Differences usually come from what each price includes: in-person care or online only, whether medication and lab work are included, whether there is weekly follow-up, and whether the medication is an FDA-approved brand-name version or a compounded medication. In our program, the medication may be compounded; read the information below.",
          },
          { type: "note", title: DISCLOSURE[lang].title, text: DISCLOSURE[lang].text },
        ],
      },
    ],
    showClinics: false,
    related: [
      { href: "/programs/weight-loss", label: es ? "El programa completo de pérdida de peso GLP-1" : "The full GLP-1 weight loss program" },
      { href: "/programs/weight-loss/semaglutide", label: es ? "Semaglutida en Miami" : "Semaglutide in Miami" },
      { href: "/programs/weight-loss/tirzepatide", label: es ? "Tirzepatida en Miami" : "Tirzepatide in Miami" },
      { href: "/refunds", label: es ? "Política de reembolsos" : "Refund policy" },
      { href: "/faq", label: es ? "Preguntas frecuentes" : "Frequently asked questions" },
    ],
    updated: UPDATED[lang],
    ctaTitle: es ? "Un precio, todo incluido." : "One price, everything included.",
    ctaBody: es
      ? "Agenda tu consulta en línea. El pago se cobra antes o en tu consulta, con reembolso total si no eres candidato."
      : "Book your consultation online. Payment is collected at or before your consultation, with a full refund if you are not a candidate.",
  };
}

export function topicCopy(slug: TopicSlug, lang: Lang): TopicCopy {
  return slug === "cost" ? cost(lang) : medication(lang, slug);
}
