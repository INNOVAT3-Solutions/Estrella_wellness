import type { Lang } from "@/lib/i18n";

export type Testimonial = {
  id: string;
  name: string;
  city: string;
  age: number;
  rating: number;
  program: { en: string; es: string };
  duration: { en: string; es: string };
  quote: { en: string; es: string };
  image: string;
};

// NOTE: portrait avatars are randomuser.me placeholders — swap for real
// patient photos once consent is captured.
// Weight-loss stories lead — it is the active program.
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Marisol R.",
    city: "Miami, FL",
    age: 47,
    rating: 5,
    program: { en: "Weight Loss", es: "Pérdida de Peso" },
    duration: { en: "4 months in", es: "4 meses en el programa" },
    quote: {
      en: "I've tried every diet. The difference here was actually having a doctor who looked at my whole picture — labs, meds, family history — and built me a plan I could keep up with. Down 32 lbs and my A1C is finally normal.",
      es: "He probado todas las dietas. La diferencia aquí fue tener un médico que miró mi panorama completo — laboratorios, medicamentos, historial familiar — y me armó un plan que sí pude mantener. He bajado 32 libras y mi A1C por fin está normal.",
    },
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: "t2",
    name: "Andre T.",
    city: "Aventura, FL",
    age: 36,
    rating: 4,
    program: { en: "Weight Loss", es: "Pérdida de Peso" },
    duration: { en: "2 months in", es: "2 meses en el programa" },
    quote: {
      en: "Honest review: I was skeptical of online clinics. Estrella isn't that. Real provider, real follow-up, no upsells. Down 18 lbs, sleeping better, cravings basically gone.",
      es: "Reseña honesta: yo desconfiaba de las clínicas en línea. Estrella no es eso. Un proveedor de verdad, seguimiento de verdad, sin ventas adicionales. He bajado 18 libras, duermo mejor y los antojos prácticamente desaparecieron.",
    },
    image: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    id: "t3",
    name: "Lourdes G.",
    city: "Kendall, FL",
    age: 52,
    rating: 5,
    program: { en: "Weight Loss", es: "Pérdida de Peso" },
    duration: { en: "5 months in", es: "5 meses en el programa" },
    quote: {
      en: "They explained everything in Spanish when I needed it, English when I didn't, and never rushed me. The nutrition plan was realistic — exactly what I wanted. I feel lighter and more rested than I have in years.",
      es: "Me explicaron todo en español cuando lo necesité, en inglés cuando no, y nunca me apuraron. El plan de nutrición fue realista — exactamente lo que quería. Me siento más ligera y descansada que en años.",
    },
    image: "https://randomuser.me/api/portraits/women/51.jpg",
  },
  {
    id: "t4",
    name: "Rafa M.",
    city: "Doral, FL",
    age: 41,
    rating: 5,
    program: { en: "Weight Loss", es: "Pérdida de Peso" },
    duration: { en: "3 months in", es: "3 meses en el programa" },
    quote: {
      en: "What sold me is that this is a real medical group — not some random tele-pharmacy. Same Estrella doctors my parents have seen for years. That trust matters when you're putting something in your body.",
      es: "Lo que me convenció es que es un grupo médico de verdad — no una tele-farmacia cualquiera. Los mismos médicos de Estrella que mis padres han visto por años. Esa confianza importa cuando se trata de tu cuerpo.",
    },
    image: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    id: "t5",
    name: "Patricia C.",
    city: "Pinecrest, FL",
    age: 44,
    rating: 5,
    program: { en: "Weight Loss", es: "Pérdida de Peso" },
    duration: { en: "4 months in", es: "4 meses en el programa" },
    quote: {
      en: "My old clinic handed me a prescription and a pamphlet. Estrella gave me a doctor who checks in, a nutrition plan I actually follow, and exercises that fit my knees. The whole plan works together.",
      es: "Mi clínica anterior me dio una receta y un folleto. Estrella me dio un médico que me da seguimiento, un plan de nutrición que sí sigo y ejercicios que mis rodillas aguantan. Todo el plan funciona en conjunto.",
    },
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: "t6",
    name: "Carlos D.",
    city: "Hialeah, FL",
    age: 54,
    rating: 5,
    program: { en: "Weight Loss", es: "Pérdida de Peso" },
    duration: { en: "6 months in", es: "6 meses en el programa" },
    quote: {
      en: "Energy is back. The provider sat with me on a video call for 25 minutes — no rush, all my questions answered. That's not how my old clinic worked.",
      es: "La energía volvió. El proveedor estuvo conmigo en videollamada 25 minutos — sin prisa, todas mis preguntas respondidas. Así no funcionaba mi clínica anterior.",
    },
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    id: "t7",
    name: "Jen P.",
    city: "Coral Gables, FL",
    age: 38,
    rating: 5,
    program: { en: "Weight Loss", es: "Pérdida de Peso" },
    duration: { en: "8 weeks in", es: "8 semanas en el programa" },
    quote: {
      en: "The dashboard makes it ridiculously easy — refills, messaging, everything one tap away. And my provider adjusted my dose the same week I asked about side effects.",
      es: "El panel lo hace ridículamente fácil — resurtidos, mensajes, todo a un toque. Y mi proveedor ajustó mi dosis la misma semana en que pregunté por los efectos secundarios.",
    },
    image: "https://randomuser.me/api/portraits/women/38.jpg",
  },
  {
    id: "t8",
    name: "Eduardo V.",
    city: "Miami Lakes, FL",
    age: 49,
    rating: 5,
    program: { en: "Weight Loss", es: "Pérdida de Peso" },
    duration: { en: "10 weeks in", es: "10 semanas en el programa" },
    quote: {
      en: "The first month felt incremental — by month three the difference was undeniable. My doctor built the plan around what I could realistically commit to.",
      es: "El primer mes se sintió gradual — para el tercer mes la diferencia era innegable. Mi médico armó el plan alrededor de lo que yo realmente podía cumplir.",
    },
    image: "https://randomuser.me/api/portraits/men/64.jpg",
  },
  {
    id: "t9",
    name: "Manuel S.",
    city: "Westchester, FL",
    age: 58,
    rating: 5,
    program: { en: "Weight Loss", es: "Pérdida de Peso" },
    duration: { en: "5 months in", es: "5 meses en el programa" },
    quote: {
      en: "Discreet, fast, and the provider treated my weight like the medical issue it is — not a willpower lecture. The intake felt thorough but never invasive.",
      es: "Discreto, rápido, y el proveedor trató mi peso como el tema médico que es — no como un sermón de fuerza de voluntad. El cuestionario fue completo pero nunca invasivo.",
    },
    image: "https://randomuser.me/api/portraits/men/72.jpg",
  },
];

export const testimonialCards = (lang: Lang) =>
  TESTIMONIALS.map((t) => ({
    text: t.quote[lang],
    image: t.image,
    name: t.name,
    role: `${t.program[lang]} · ${t.city}`,
  }));

export const STATS: { number: string; label: { en: string; es: string } }[] = [
  {
    number: "12,000+",
    label: {
      en: "Patients across our clinics",
      es: "Pacientes en nuestras clínicas",
    },
  },
  {
    number: "24 hr",
    label: {
      en: "Median provider response",
      es: "Respuesta médica promedio",
    },
  },
  {
    number: "98%",
    label: {
      en: "Would recommend Estrella",
      es: "Recomendarían Estrella",
    },
  },
  {
    number: "30+",
    label: {
      en: "Years of medical group history",
      es: "Años de historia del grupo médico",
    },
  },
];

export const PRESS = [
  "Univision",
  "Telemundo",
  "Miami Herald",
  "El Nuevo Herald",
  "WPLG Local 10",
  "South Florida Business Journal",
  "NBC 6 South Florida",
];
