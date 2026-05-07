export type ProgramSlug =
  | "weight-loss"
  | "recovery"
  | "hormone-optimization"
  | "longevity"
  | "performance"
  | "sexual-health";

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

export type Pathway = {
  name: string;
  description: string;
  items: string[];
};

export type Program = {
  slug: ProgramSlug;
  name: string;
  shortName: string;
  tagline: string;
  headline: string;
  description: string;
  benefits: string[];
  compounds: Compound[];
  /** Used when a program has multiple delivery routes / product groupings (e.g. Weight Loss). */
  pathways?: Pathway[];
  /** Used when a program is a single protocol that addresses multiple patient profiles. */
  useCases?: string[];
  image: string;
  /**
   * Four images for the diced hero (2x2 warped grid).
   * Order on render is bottom-right, bottom-left, top-right, top-left.
   */
  slides: { title: string; image: string }[];
  accent: string;
  startingPrice: number;
  priceNote?: string;
  ribbon?: string;
};

export const PROGRAMS: Program[] = [
  {
    slug: "weight-loss",
    name: "Weight Loss & Metabolic Optimization",
    shortName: "Weight Loss",
    tagline: "Sustainable, clinician-guided fat loss.",
    headline: "Clinician-Guided Weight Loss Programs",
    description:
      "Personalized metabolic programs combining GLP-1 therapy, lifestyle coaching, and ongoing provider review — designed to support steady, sustainable progress.",
    benefits: [
      "Appetite and craving support",
      "Sustainable fat loss",
      "Metabolic and blood sugar support",
      "Energy support throughout the day",
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
    pathways: [
      {
        name: "Injectable",
        description:
          "Weekly subcutaneous self-injection — the established delivery route for GLP-1 and dual-agonist therapies.",
        items: ["Tirzepatide", "Semaglutide", "Retatrutide"],
      },
      {
        name: "Oral disintegrating tablet (ODT)",
        description:
          "A needle-free, fast-dissolving format. Considered for patients who prefer to avoid injection.",
        items: ["Tirzepatide ODT", "Semaglutide ODT"],
      },
      {
        name: "Enhanced metabolic combinations",
        description:
          "Compounded combinations pairing a GLP-1 agonist with a supportive co-agent. Selected by your provider only when clinically indicated.",
        items: [
          "Tirzepatide / Glycine",
          "Tirzepatide / NAD+",
          "Semaglutide / NAD+",
        ],
      },
    ],
    image: "/images/weight-loss-metabolic.png",
    slides: [
      { title: "Weight Loss · Scene 1", image: "/images/weight-loss-scene-1.png" },
      { title: "Weight Loss · Scene 2", image: "/images/weight-loss-scene-2.png" },
      { title: "Weight Loss · Scene 3", image: "/images/weight-loss-scene-3.png" },
      { title: "Weight Loss · Scene 4", image: "/images/weight-loss-scene-4.png" },
    ],
    accent: "from-sun-400/20 to-navy-400/10",
    startingPrice: 199,
    priceNote: "billed monthly · cancel anytime",
    ribbon: "Most popular",
  },
  {
    slug: "recovery",
    name: "Recovery & Repair",
    shortName: "Recovery",
    tagline: "Support how your body heals and rebuilds.",
    headline: "Clinician-Guided Recovery Programs",
    description:
      "Programs designed to support tissue repair, joint comfort, and athletic recovery — with provider oversight at every step.",
    benefits: [
      "Joint and tendon support",
      "Faster training recovery",
      "Mobility and movement support",
      "Reduced day-to-day soreness",
    ],
    compounds: [
      {
        name: "BPC-157",
        format: "Subcutaneous injection (compounded)",
        summary:
          "A synthetic peptide based on a fragment of a protein found in gastric juice. Studied in the context of tissue and joint support.",
        supports: [
          "Designed to support tissue-repair processes",
          "Studied in joint, tendon, and gastrointestinal contexts",
          "Often paired with TB-500 in recovery-focused protocols",
        ],
        consideration:
          "Compounded medication. Not FDA-approved for any indication. Requires provider review and prescription.",
      },
      {
        name: "TB-500",
        format: "Subcutaneous injection (compounded)",
        summary:
          "A synthetic peptide based on a regulatory protein (thymosin beta-4) involved in cellular repair signaling.",
        supports: [
          "Designed to support tissue-repair processes",
          "Studied for its role in cellular migration and healing pathways",
          "Considered alongside BPC-157 in athletic-recovery protocols",
        ],
        consideration:
          "Compounded medication. Not FDA-approved for any indication. Requires provider review and prescription.",
      },
    ],
    useCases: [
      "Joint or tendon discomfort affecting day-to-day movement",
      "Recovery from a recent injury or procedure (with clearance from your treating physician)",
      "Athletes pursuing faster training recovery",
      "Adults focused on mobility and movement support",
      "Tendon or ligament concerns under active provider review",
    ],
    image: "/images/recovery-repair.png",
    slides: [
      { title: "Recovery · Scene 1", image: "/images/recovery-scene-1.png" },
      { title: "Recovery · Scene 2", image: "/images/recovery-scene-2.png" },
      { title: "Recovery · Scene 3", image: "/images/recovery-scene-3.png" },
      { title: "Recovery · Scene 4", image: "/images/recovery-scene-4.png" },
    ],
    accent: "from-ocean-400/20 to-navy-400/10",
    startingPrice: 129,
    priceNote: "billed monthly · cancel anytime",
  },
  {
    slug: "hormone-optimization",
    name: "Hormone Optimization & Growth Support",
    shortName: "Hormone Optimization",
    tagline: "Support healthy hormone balance as you age.",
    headline: "Clinician-Guided Hormone Optimization",
    description:
      "Hormone-support programs guided by labs and licensed providers — designed to help you feel like yourself again.",
    benefits: [
      "Recovery and sleep support",
      "Lean body composition support",
      "Healthy aging support",
      "Hormonal balance support",
    ],
    compounds: [
      {
        name: "Sermorelin",
        format: "Subcutaneous injection",
        summary:
          "A growth-hormone-releasing hormone (GHRH) analog that prompts the body's own pituitary to release growth hormone.",
        supports: [
          "Designed to support endogenous growth-hormone signaling",
          "Often considered in sleep-quality and recovery contexts",
          "Selected by providers as part of healthy-aging protocols",
        ],
        consideration:
          "Compounded medication. Lab work and provider review typically required before initiation.",
      },
      {
        name: "Tesamorelin",
        format: "Subcutaneous injection",
        summary:
          "A synthetic GHRH analog studied in body-composition and metabolic contexts.",
        supports: [
          "Designed to support healthy body composition",
          "Studied in lipid and metabolic contexts",
          "Selected based on lab work and clinical picture",
        ],
        consideration:
          "Provider-directed therapy. Lab work and ongoing monitoring required.",
      },
    ],
    useCases: [
      "Adults reporting reduced sleep quality or recovery as they age",
      "Patients pursuing lean body-composition support under medical guidance",
      "Healthy-aging protocols where labs indicate provider-supported intervention",
      "Patients seeking provider-guided hormonal balance support",
    ],
    image: "/images/hormone-healthy-aging.png",
    slides: [
      { title: "Hormone Optimization · Scene 1", image: "/images/hormone-scene-1.png" },
      { title: "Hormone Optimization · Scene 2", image: "/images/hormone-scene-2.png" },
      { title: "Hormone Optimization · Scene 3", image: "/images/hormone-scene-3.png" },
      { title: "Hormone Optimization · Scene 4", image: "/images/hormone-scene-4.png" },
    ],
    accent: "from-navy-400/20 to-sun-400/10",
    startingPrice: 179,
    priceNote: "billed monthly · cancel anytime",
  },
  {
    slug: "longevity",
    name: "Longevity & Cellular Health",
    shortName: "Longevity",
    tagline: "Support cellular energy and healthy aging.",
    headline: "Clinician-Guided Longevity Programs",
    description:
      "Programs focused on cellular health, mitochondrial support, and graceful aging — with safe, supervised protocols.",
    benefits: [
      "Cellular energy support",
      "Cognitive support",
      "Recovery support",
      "Healthy aging",
    ],
    compounds: [
      {
        name: "NAD+",
        format: "Subcutaneous injection · IV · oral precursor",
        summary:
          "A coenzyme central to cellular energy production and redox balance, studied widely in healthy-aging contexts.",
        supports: [
          "Designed to support cellular energy metabolism",
          "Studied for its role in mitochondrial function",
          "Considered in healthy-aging and recovery protocols",
        ],
        consideration:
          "Route of administration is determined by your provider based on your intake and goals.",
      },
      {
        name: "MOTS-c",
        format: "Subcutaneous injection (compounded)",
        summary:
          "A mitochondrial-derived peptide studied in the context of metabolic regulation and exercise response.",
        supports: [
          "Designed to support mitochondrial signaling",
          "Studied in metabolic and performance contexts",
          "Considered in longevity-oriented protocols",
        ],
        consideration:
          "Compounded medication. Emerging research; not FDA-approved for any indication.",
      },
      {
        name: "GHK-Cu",
        format: "Topical · subcutaneous · IV (compounded)",
        summary:
          "A naturally occurring copper-binding tripeptide studied in tissue-health and skin contexts.",
        supports: [
          "Designed to support tissue health",
          "Studied for its role in regenerative pathways",
          "Considered in skin, recovery, and longevity protocols",
        ],
        consideration:
          "Compounded medication. Route is selected by your provider based on goals.",
      },
    ],
    useCases: [
      "Adults focused on cellular energy and mitochondrial support",
      "Patients pursuing healthy-aging protocols with provider oversight",
      "Cognitive-clarity support under provider-directed care",
      "Recovery-focused longevity protocols",
    ],
    image: "/images/longevity-cellular.png",
    slides: [
      { title: "Longevity · Scene 1", image: "/images/longevity-scene-1.png" },
      { title: "Longevity · Scene 2", image: "/images/longevity-scene-2.png" },
      { title: "Longevity · Scene 3", image: "/images/longevity-scene-3.png" },
      { title: "Longevity · Scene 4", image: "/images/longevity-scene-4.png" },
    ],
    accent: "from-ocean-400/20 to-sun-400/10",
    startingPrice: 159,
    priceNote: "billed monthly · cancel anytime",
  },
  {
    slug: "performance",
    name: "Performance & Vitality",
    shortName: "Performance",
    tagline: "Energy, focus, and recovery — supported.",
    headline: "Clinician-Guided Performance Programs",
    description:
      "For active patients seeking sustainable energy, focus, and recovery — with a personalized protocol from a licensed provider.",
    benefits: [
      "Energy optimization",
      "Endurance support",
      "Focus and clarity support",
      "Recovery and performance support",
    ],
    compounds: [
      {
        name: "NAD+",
        format: "Subcutaneous injection · IV · oral precursor",
        summary:
          "A coenzyme involved in cellular energy production. Considered in performance and recovery protocols.",
        supports: [
          "Designed to support cellular energy metabolism",
          "Studied for its role in mitochondrial function",
          "Considered in performance and recovery protocols",
        ],
        consideration:
          "Route of administration is determined by your provider based on your intake and goals.",
      },
      {
        name: "MOTS-c",
        format: "Subcutaneous injection (compounded)",
        summary:
          "A mitochondrial-derived peptide studied in the context of exercise response and metabolic regulation.",
        supports: [
          "Designed to support mitochondrial signaling",
          "Studied in performance and metabolic contexts",
          "Considered in protocols for active adults",
        ],
        consideration:
          "Compounded medication. Emerging research; not FDA-approved for any indication.",
      },
      {
        name: "GHK-Cu",
        format: "Topical · subcutaneous · IV (compounded)",
        summary:
          "A copper-binding tripeptide studied in tissue-health and recovery contexts.",
        supports: [
          "Designed to support tissue health",
          "Studied for its role in regenerative pathways",
          "Considered alongside performance protocols",
        ],
        consideration:
          "Compounded medication. Route is selected by your provider based on goals.",
      },
    ],
    useCases: [
      "Active adults pursuing sustainable energy without stimulants",
      "Patients seeking endurance support under provider direction",
      "Focus and clarity support as part of a broader protocol",
      "Recovery-focused performance protocols",
    ],
    image: "/images/performance-energy.png",
    slides: [
      { title: "Performance · Scene 1", image: "/images/performance-scene-1.png" },
      { title: "Performance · Scene 2", image: "/images/performance-scene-2.png" },
      { title: "Performance · Scene 3", image: "/images/performance-scene-3.png" },
      { title: "Performance · Scene 4", image: "/images/performance-scene-4.png" },
    ],
    accent: "from-sun-400/20 to-ocean-400/10",
    startingPrice: 149,
    priceNote: "billed monthly · cancel anytime",
  },
  {
    slug: "sexual-health",
    name: "Sexual Health",
    shortName: "Sexual Health",
    tagline: "Discreet, clinician-guided support.",
    headline: "Clinician-Guided Sexual Health Programs",
    description:
      "Confidential telehealth support for erectile concerns and intimate wellness, prescribed only after provider review.",
    benefits: [
      "Erectile support",
      "Confidence and intimacy",
      "Convenient at-home dosing",
      "Discreet provider review",
    ],
    compounds: [
      {
        name: "Sildenafil ODT",
        format: "Oral disintegrating tablet",
        summary:
          "A PDE-5 inhibitor — the same active studied for erectile concerns — in a fast-dissolving oral form.",
        supports: [
          "Designed to support erectile function in adults with erectile concerns",
          "Discreet, fast-dissolving format that does not require water",
          "Reviewed and dosed by a licensed provider",
        ],
        consideration:
          "Not appropriate for use with nitrates or in certain cardiovascular conditions. Full screening and provider prescription required.",
      },
      {
        name: "Tadalafil ODT",
        format: "Oral disintegrating tablet",
        summary:
          "A long-acting PDE-5 inhibitor in a fast-dissolving oral form.",
        supports: [
          "Designed to support erectile function in adults with erectile concerns",
          "Longer half-life than other PDE-5 options",
          "Reviewed and dosed by a licensed provider",
        ],
        consideration:
          "Not appropriate for use with nitrates or in certain cardiovascular conditions. Full screening and provider prescription required.",
      },
    ],
    useCases: [
      "Adults seeking discreet, clinician-reviewed support for erectile concerns",
      "Patients who prefer a needle-free, fast-dissolving format",
      "Patients seeking a long-acting option (with provider direction)",
      "Patients who value confidentiality and at-home dosing",
    ],
    image: "/images/sexual-health.png",
    slides: [
      { title: "Sexual Health · Scene 1", image: "/images/sexual-health-scene-1.png" },
      { title: "Sexual Health · Scene 2", image: "/images/sexual-health-scene-2.png" },
      { title: "Sexual Health · Scene 3", image: "/images/sexual-health-scene-3.png" },
      { title: "Sexual Health · Scene 4", image: "/images/sexual-health-scene-4.png" },
    ],
    accent: "from-navy-400/20 to-ocean-400/10",
    startingPrice: 39,
    priceNote: "billed monthly · cancel anytime",
  },
];

export const programBySlug = (slug: string) =>
  PROGRAMS.find((p) => p.slug === slug);
