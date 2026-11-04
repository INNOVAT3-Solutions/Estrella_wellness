import type { PageCopy } from "@/lib/seo";

/**
 * Search titles and descriptions per page, English and Spanish.
 * Titles get " | Estrella Wellness" from the root layout's template (the home
 * title is absolute). Keep titles price-free so search results never show a
 * stale promo, and keep every line within the copy compliance rules: no
 * outcome claims, approved stats only, approved payment wording.
 */
export const PAGE_COPY = {
  home: {
    en: {
      title: "Doctor-Led GLP-1 Weight Loss in Miami | Estrella Wellness",
      description:
        "Doctor-led GLP-1 weight loss at six Estrella Medical Centers clinics in Miami-Dade and Broward. Weekly in-clinic care, open to everyone, no membership.",
    },
    es: {
      title: "Bajar de peso con GLP-1 en Miami | Estrella Wellness",
      description:
        "Programa de pérdida de peso con GLP-1 dirigido por médicos en seis clínicas Estrella Medical Centers de Miami-Dade y Broward. Abierto para todos, sin membresía.",
    },
  },
  program: {
    en: {
      title: "GLP-1 Weight Loss Program and Pricing",
      description:
        "Doctor consultation, blood work review, weekly in-clinic injections, a nutritionist meal plan and guided exercise. Full refund if you're not a candidate.",
    },
    es: {
      title: "Programa GLP-1: qué incluye y precio",
      description:
        "Consulta médica, revisión de análisis, inyecciones semanales en la clínica, nutricionista y ejercicio guiado. Reembolso total si no eres candidato.",
    },
  },
  howItWorks: {
    en: {
      title: "How the GLP-1 Program Works",
      description:
        "From booking to weekly visits: what happens at your doctor consultation, how your plan is set, and what each in-clinic visit at Estrella includes.",
    },
    es: {
      title: "Cómo funciona el programa GLP-1",
      description:
        "Desde la cita hasta tus visitas semanales: qué pasa en tu consulta médica, cómo se define tu plan y qué incluye cada visita en la clínica.",
    },
  },
  faq: {
    en: {
      title: "GLP-1 Program FAQ: Cost and Safety",
      description:
        "Clear answers on price, payment and refunds, side effects, who qualifies, and what happens at your weekly visits to an Estrella clinic.",
    },
    es: {
      title: "Preguntas frecuentes: costo y seguridad",
      description:
        "Respuestas claras sobre precio, pagos y reembolsos, efectos secundarios, quién califica y qué pasa en tus visitas semanales a una clínica Estrella.",
    },
  },
  qualify: {
    en: {
      title: "Book Your Doctor Consultation",
      description:
        "Choose a clinic, date and time for your GLP-1 consultation. Payment is collected at or before your visit, with a full refund if you're not a candidate.",
    },
    es: {
      title: "Agenda tu consulta médica",
      description:
        "Elige clínica, fecha y hora para tu consulta GLP-1. El pago se cobra antes o en tu visita, con reembolso total si no eres candidato.",
    },
  },
  refunds: {
    en: {
      title: "Refund Policy",
      description:
        "When and how refunds work for the Estrella Wellness GLP-1 program, including the full refund if your doctor finds you're not a candidate.",
    },
    es: {
      title: "Política de reembolsos",
      description:
        "Cuándo y cómo funcionan los reembolsos del programa GLP-1 de Estrella Wellness, incluido el reembolso total si tu médico determina que no eres candidato.",
    },
  },
  terms: {
    en: {
      title: "Terms of Service",
      description:
        "The terms for using this website and joining Estrella Wellness, the doctor-led GLP-1 weight loss program from Estrella Medical Centers.",
    },
    es: {
      title: "Términos del servicio",
      description:
        "Los términos para usar este sitio y participar en Estrella Wellness, el programa GLP-1 dirigido por médicos de Estrella Medical Centers.",
    },
  },
  privacy: {
    en: {
      title: "Privacy Policy",
      description:
        "How Estrella Medical Centers collects, uses and protects your personal information on this website and in the Estrella Wellness program.",
    },
    es: {
      title: "Política de privacidad",
      description:
        "Cómo Estrella Medical Centers recopila, usa y protege tu información personal en este sitio y en el programa Estrella Wellness.",
    },
  },
  cookies: {
    en: {
      title: "Cookie Policy",
      description:
        "This website sets no cookies. Here are the two small browser storage items it needs to work, what each one does, and how to clear them.",
    },
    es: {
      title: "Política de cookies",
      description:
        "Este sitio no usa cookies. Aquí verás los dos pequeños datos que guarda en tu navegador para funcionar, para qué sirve cada uno y cómo borrarlos.",
    },
  },
  accessibility: {
    en: {
      title: "Accessibility Statement",
      description:
        "Our commitment to making this website usable for everyone, the standard we work toward, and how to tell us about a barrier you run into.",
    },
    es: {
      title: "Declaración de accesibilidad",
      description:
        "Nuestro compromiso de que este sitio sea fácil de usar para todos, el estándar que seguimos y cómo avisarnos si encuentras una barrera.",
    },
  },
} satisfies Record<string, PageCopy>;
