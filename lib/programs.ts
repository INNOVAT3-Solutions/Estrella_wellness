import type { Lang } from "@/lib/i18n";

/* ------------------------------------------------------------------ */
/*  Pricing — the GLP-1 weight loss program promo                      */
/* ------------------------------------------------------------------ */

export const PRICING = {
  /** Regular monthly price of the wellness (GLP-1 weight loss) program. */
  regular: 299.99,
  /** Limited-time special — consultation included. */
  promo: 199.99,
};

export const fmtPrice = (n: number) =>
  `$${n.toFixed(2)}`;

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export type Compound = {
  name: string;
  /** Route / dosage form, e.g. "Subcutaneous injection", "Oral disintegrating tablet". */
  format?: string;
  /** One-line, factual description of what the active is. */
  summary?: string;
  /** 2-4 bullets, framed as "designed to support" / "studied for" — never efficacy claims. */
  supports?: string[];
  /** One-line note on regulatory status, screening, or who-it's-not-for. */
  consideration?: string;
};

export type Included = {
  title: string;
  body: string;
};

export type ProgramCopy = {
  name: string;
  shortName: string;
  tagline: string;
  headline: string;
  description: string;
  benefits: string[];
  /** Everything that comes with the consultation / monthly program. */
  includes: Included[];
  compounds: Compound[];
};

export type Program = {
  slug: "weight-loss";
  image: string;
  slides: { title: string; image: string }[];
  accent: string;
  price: number;
  regularPrice: number;
  en: ProgramCopy;
  es: ProgramCopy;
};

/* ------------------------------------------------------------------ */
/*  The program — GLP-1 weight loss / wellness                         */
/* ------------------------------------------------------------------ */

export const WEIGHT_LOSS: Program = {
  slug: "weight-loss",
  image: "/images/weight-loss-metabolic.png",
  slides: [
    { title: "Weight Loss · Scene 1", image: "/images/weight-loss-scene-1.png" },
    { title: "Weight Loss · Scene 2", image: "/images/weight-loss-scene-2.png" },
    { title: "Weight Loss · Scene 3", image: "/images/weight-loss-scene-3.png" },
    { title: "Weight Loss · Scene 4", image: "/images/weight-loss-scene-4.png" },
  ],
  accent: "from-sun-400/20 to-navy-400/10",
  price: PRICING.promo,
  regularPrice: PRICING.regular,

  en: {
    name: "GLP-1 Weight Loss Program",
    shortName: "Weight Loss",
    tagline: "Doctor-guided GLP-1 weight loss — consultation included.",
    headline: "The GLP-1 Weight Loss Program",
    description:
      "One complete wellness program: a doctor's consultation, the GLP-1 peptide your doctor designates for you, a guided nutrition plan, and management exercises — all included in one monthly price.",
    benefits: [
      "Appetite and craving support",
      "Sustainable, doctor-supervised fat loss",
      "Metabolic and blood sugar support",
      "A plan built around your life",
    ],
    includes: [
      {
        title: "Doctor consultation",
        body: "A licensed Estrella provider reviews your health history one-on-one and designs your personal weight loss plan.",
      },
      {
        title: "Your designated peptide",
        body: "The GLP-1 peptide medication designated for you by your doctor after your consultation — shipped discreetly to your door.",
      },
      {
        title: "Guided nutrition plan",
        body: "A nutrition plan built to work alongside your medication and accelerate your weight loss.",
      },
      {
        title: "Management exercises",
        body: "Simple, sustainable exercises selected to support your plan — no gym membership required.",
      },
    ],
    compounds: [
      {
        name: "Tirzepatide",
        format: "Subcutaneous injection · weekly",
        summary:
          "A dual GIP/GLP-1 receptor agonist studied for its role in appetite regulation and glucose response.",
        supports: [
          "Designed to support appetite regulation and reduced food intake",
          "Studied for its effect on post-meal blood-sugar response",
          "Often selected for patients pursuing longer-term metabolic support",
        ],
        consideration:
          "Not recommended during pregnancy or in patients with certain personal or family medical histories. Full screening required.",
      },
      {
        name: "Semaglutide",
        format: "Subcutaneous injection · weekly",
        summary:
          "A GLP-1 receptor agonist that mimics a naturally occurring gut hormone involved in appetite and glucose signaling.",
        supports: [
          "Designed to support appetite regulation",
          "Studied in the context of glycemic balance",
          "Available as a long-acting once-weekly option",
        ],
        consideration:
          "GI side effects are common, particularly during dose escalation. Provider review and dose titration required.",
      },
      {
        name: "Retatrutide",
        format: "Subcutaneous injection · weekly",
        summary:
          "An investigational triple agonist (GIP/GLP-1/glucagon) currently being studied for metabolic regulation.",
        supports: [
          "Designed to support appetite and metabolic balance",
          "Being studied for its broader metabolic profile",
          "Considered by providers for specific clinical pictures",
        ],
        consideration:
          "Investigational compound. Available only as a compounded preparation under a licensed clinician's prescription.",
      },
    ],
  },

  es: {
    name: "Programa de Pérdida de Peso GLP-1",
    shortName: "Pérdida de Peso",
    tagline:
      "Pérdida de peso con GLP-1 guiada por médicos — consulta incluida.",
    headline: "El Programa de Pérdida de Peso GLP-1",
    description:
      "Un programa de bienestar completo: la consulta con el médico, el péptido GLP-1 que tu médico designa para ti, un plan de nutrición guiado y ejercicios de manejo — todo incluido en un solo precio mensual.",
    benefits: [
      "Control del apetito y los antojos",
      "Pérdida de grasa sostenible y supervisada por médicos",
      "Apoyo metabólico y del azúcar en sangre",
      "Un plan hecho a la medida de tu vida",
    ],
    includes: [
      {
        title: "Consulta médica",
        body: "Un proveedor licenciado de Estrella revisa tu historial de salud uno a uno y diseña tu plan personal de pérdida de peso.",
      },
      {
        title: "Tu péptido designado",
        body: "El péptido GLP-1 que tu médico designa para ti después de la consulta — enviado discretamente a tu puerta.",
      },
      {
        title: "Plan de nutrición guiado",
        body: "Un plan de nutrición diseñado para trabajar junto con tu medicamento y acelerar tu pérdida de peso.",
      },
      {
        title: "Ejercicios de manejo",
        body: "Ejercicios simples y sostenibles seleccionados para apoyar tu plan — sin necesidad de gimnasio.",
      },
    ],
    compounds: [
      {
        name: "Tirzepatida",
        format: "Inyección subcutánea · semanal",
        summary:
          "Un agonista dual de los receptores GIP/GLP-1 estudiado por su papel en la regulación del apetito y la respuesta a la glucosa.",
        supports: [
          "Diseñado para apoyar la regulación del apetito y reducir la ingesta de alimentos",
          "Estudiado por su efecto en el azúcar en sangre después de las comidas",
          "A menudo seleccionado para pacientes que buscan apoyo metabólico a largo plazo",
        ],
        consideration:
          "No se recomienda durante el embarazo ni en pacientes con ciertos antecedentes médicos personales o familiares. Se requiere evaluación completa.",
      },
      {
        name: "Semaglutida",
        format: "Inyección subcutánea · semanal",
        summary:
          "Un agonista del receptor GLP-1 que imita una hormona intestinal natural involucrada en las señales de apetito y glucosa.",
        supports: [
          "Diseñado para apoyar la regulación del apetito",
          "Estudiado en el contexto del equilibrio glucémico",
          "Disponible como opción semanal de acción prolongada",
        ],
        consideration:
          "Los efectos gastrointestinales son comunes, especialmente al aumentar la dosis. Se requiere revisión médica y ajuste de dosis.",
      },
      {
        name: "Retatrutida",
        format: "Inyección subcutánea · semanal",
        summary:
          "Un triple agonista en investigación (GIP/GLP-1/glucagón) que se estudia actualmente para la regulación metabólica.",
        supports: [
          "Diseñado para apoyar el apetito y el equilibrio metabólico",
          "En estudio por su perfil metabólico más amplio",
          "Considerado por los médicos para cuadros clínicos específicos",
        ],
        consideration:
          "Compuesto en investigación. Disponible solo como preparación magistral bajo receta de un médico licenciado.",
      },
    ],
  },
};

export const programCopy = (lang: Lang): ProgramCopy =>
  lang === "es" ? WEIGHT_LOSS.es : WEIGHT_LOSS.en;

/* ------------------------------------------------------------------ */
/*  Future programs — HIDDEN. Not rendered or referenced anywhere on   */
/*  the site by request. Kept here only so the bilingual copy is ready */
/*  if/when these programs launch.                                     */
/* ------------------------------------------------------------------ */

export type ComingSoonProgram = {
  slug: string;
  image: string;
  en: { name: string; tagline: string };
  es: { name: string; tagline: string };
};

export const COMING_SOON: ComingSoonProgram[] = [
  {
    slug: "recovery",
    image: "/images/recovery-repair.png",
    en: {
      name: "Recovery & Repair",
      tagline: "Support how your body heals and rebuilds.",
    },
    es: {
      name: "Recuperación y Reparación",
      tagline: "Apoya cómo tu cuerpo sana y se reconstruye.",
    },
  },
  {
    slug: "hormone-optimization",
    image: "/images/hormone-healthy-aging.png",
    en: {
      name: "Hormone Optimization",
      tagline: "Support healthy hormone balance as you age.",
    },
    es: {
      name: "Optimización Hormonal",
      tagline: "Apoya un equilibrio hormonal saludable con los años.",
    },
  },
  {
    slug: "longevity",
    image: "/images/longevity-cellular.png",
    en: {
      name: "Longevity & Cellular Health",
      tagline: "Support cellular energy and healthy aging.",
    },
    es: {
      name: "Longevidad y Salud Celular",
      tagline: "Apoya la energía celular y un envejecimiento saludable.",
    },
  },
  {
    slug: "performance",
    image: "/images/performance-energy.png",
    en: {
      name: "Performance & Vitality",
      tagline: "Energy, focus, and recovery — supported.",
    },
    es: {
      name: "Rendimiento y Vitalidad",
      tagline: "Energía, enfoque y recuperación — con apoyo.",
    },
  },
  {
    slug: "sexual-health",
    image: "/images/sexual-health.png",
    en: {
      name: "Sexual Health",
      tagline: "Discreet, clinician-guided support.",
    },
    es: {
      name: "Salud Sexual",
      tagline: "Apoyo discreto guiado por médicos.",
    },
  },
];

