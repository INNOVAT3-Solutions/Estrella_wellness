import type { Lang } from "@/lib/i18n";

/* ------------------------------------------------------------------ */
/*  Pricing: the GLP-1 weight loss program promo                      */
/* ------------------------------------------------------------------ */

export const PRICING = {
  /** Regular monthly price of the wellness (GLP-1 weight loss) program. */
  regular: 299.99,
  /** Limited-time special, consultation included. */
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
  /** 2-4 factual bullets. Never efficacy claims, brand names or "FDA-approved". */
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
/*  The program: GLP-1 weight loss / wellness                          */
/* ------------------------------------------------------------------ */

export const WEIGHT_LOSS: Program = {
  slug: "weight-loss",
  image: "/images/weight-loss-hero-1.jpg",
  slides: [
    { title: "A doctor reviewing results with a patient on a tablet", image: "/images/weight-loss-hero-1.jpg" },
    { title: "A nurse giving a patient his weekly injection", image: "/images/weight-loss-hero-2.jpg" },
    { title: "A woman plating a healthy salmon and quinoa lunch", image: "/images/weight-loss-hero-3.jpg" },
    { title: "Two people doing dumbbell curls on the Miami bayfront", image: "/images/weight-loss-hero-4.jpg" },
  ],
  accent: "from-sun-400/20 to-navy-400/10",
  price: PRICING.promo,
  regularPrice: PRICING.regular,

  en: {
    name: "GLP-1 Weight Loss Program",
    shortName: "Weight Loss",
    tagline: "Doctor-led GLP-1 weight loss, open to everyone. Consultation included, no membership needed.",
    headline: "The GLP-1 Weight Loss Program",
    description:
      "One complete program: a doctor's consultation and blood work review, the GLP-1 medication your doctor chooses if treatment is right for you, given weekly in our Miami clinics, a nutritionist meal plan and a guided exercise program, all in one monthly price. Open to everyone, no membership needed.",
    benefits: [
      "Doctor consultation and blood work review",
      "Weekly injections and check-ins in the clinic",
      "Nutritionist meal plan and guided exercise",
      "Care in English and Spanish",
    ],
    includes: [
      {
        title: "Doctor consultation",
        body: "A licensed Estrella doctor reviews your blood work and health history one-on-one, then designs your personal weight loss plan.",
      },
      {
        title: "Your GLP-1 medication",
        body: "If treatment is right for you, the GLP-1 medication your doctor chooses, given weekly by our medical team at Estrella locations in Miami, with a check-in at every visit.",
      },
      {
        title: "Nutritionist meal plan",
        body: "A nutritionist builds a plan around the foods you already enjoy and adjusts it as you go.",
      },
      {
        title: "Guided exercise program",
        body: "Guided exercises matched to your level, to help you build habits that last.",
      },
    ],
    compounds: [
      {
        name: "Tirzepatide",
        format: "Injection · weekly, in the clinic",
        summary:
          "A dual GIP/GLP-1 receptor agonist. It acts on hormone receptors involved in appetite and blood sugar signaling.",
        supports: [
          "Acts on receptors involved in appetite signaling",
          "Given once a week by our medical team",
          "Dose chosen and adjusted by your doctor",
        ],
        consideration:
          "Not right for everyone, including during pregnancy or with certain personal or family medical histories. Side effects are possible. Your doctor screens you first and explains the risks.",
      },
      {
        name: "Semaglutide",
        format: "Injection · weekly, in the clinic",
        summary:
          "A GLP-1 receptor agonist, similar to a natural gut hormone involved in appetite and blood sugar signaling.",
        supports: [
          "Acts on receptors involved in appetite signaling",
          "Given once a week by our medical team",
          "Dose chosen and adjusted by your doctor",
        ],
        consideration:
          "Stomach side effects such as nausea are common, especially when the dose goes up. Your doctor reviews your history and adjusts the dose.",
      },
    ],
  },

  es: {
    name: "Programa de Pérdida de Peso GLP-1",
    shortName: "Pérdida de Peso",
    tagline:
      "Pérdida de peso con GLP-1 dirigida por médicos, abierta a todos. Consulta incluida, sin necesidad de membresía.",
    headline: "El Programa de Pérdida de Peso GLP-1",
    description:
      "Un programa completo: la consulta con el médico y la revisión de tus análisis de sangre, el medicamento GLP-1 que tu médico elija si el tratamiento es adecuado para ti, aplicado cada semana en nuestras clínicas de Miami, un plan de comidas de una nutricionista y un programa de ejercicios guiado, todo en un solo precio mensual. Abierto a todos, sin necesidad de membresía.",
    benefits: [
      "Consulta médica y revisión de análisis de sangre",
      "Inyecciones y chequeos semanales en la clínica",
      "Plan de comidas de una nutricionista y ejercicios guiados",
      "Atención en español e inglés",
    ],
    includes: [
      {
        title: "Consulta médica",
        body: "Un médico licenciado de Estrella revisa tus análisis de sangre y tu historial contigo, en persona, y diseña tu plan personal de pérdida de peso.",
      },
      {
        title: "Tu medicamento GLP-1",
        body: "Si el tratamiento es adecuado para ti, el medicamento GLP-1 que elija tu médico, aplicado cada semana por nuestro equipo médico en los centros Estrella de Miami, con un chequeo en cada visita.",
      },
      {
        title: "Plan de comidas de tu nutricionista",
        body: "Una nutricionista crea un plan con las comidas que ya te gustan y lo ajusta a medida que avanzas.",
      },
      {
        title: "Programa de ejercicios guiado",
        body: "Ejercicios guiados según tu nivel, para ayudarte a crear hábitos que duren.",
      },
    ],
    compounds: [
      {
        name: "Tirzepatida",
        format: "Inyección · semanal, en la clínica",
        summary:
          "Un agonista dual de los receptores GIP/GLP-1. Actúa sobre receptores hormonales que intervienen en las señales del apetito y del azúcar en sangre.",
        supports: [
          "Actúa sobre receptores que intervienen en las señales del apetito",
          "Nuestro equipo médico la aplica una vez por semana",
          "Tu médico elige y ajusta la dosis",
        ],
        consideration:
          "No es adecuada para todos, por ejemplo durante el embarazo o con ciertos antecedentes médicos personales o familiares. Puede tener efectos secundarios. Tu médico te evalúa primero y te explica los riesgos.",
      },
      {
        name: "Semaglutida",
        format: "Inyección · semanal, en la clínica",
        summary:
          "Un agonista del receptor GLP-1, parecido a una hormona intestinal natural que interviene en las señales del apetito y del azúcar en sangre.",
        supports: [
          "Actúa sobre receptores que intervienen en las señales del apetito",
          "Nuestro equipo médico la aplica una vez por semana",
          "Tu médico elige y ajusta la dosis",
        ],
        consideration:
          "Los efectos estomacales, como las náuseas, son comunes, sobre todo cuando se sube la dosis. Tu médico revisa tu historial y ajusta la dosis.",
      },
    ],
  },
};

export const programCopy = (lang: Lang): ProgramCopy =>
  lang === "es" ? WEIGHT_LOSS.es : WEIGHT_LOSS.en;

/* ------------------------------------------------------------------ */
/*  Future programs: HIDDEN. Not rendered or referenced anywhere on   */
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
      tagline: "Energy, focus, and recovery, supported.",
    },
    es: {
      name: "Rendimiento y Vitalidad",
      tagline: "Energía, enfoque y recuperación, con apoyo.",
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

