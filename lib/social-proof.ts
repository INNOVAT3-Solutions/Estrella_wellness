// Stories and figures shown on the site.
//
// The three stories below are ILLUSTRATIVE. They are not reviews from real
// patients and the photos are not of patients, so every place that shows
// them must carry the illustrative-story disclosure (see patient-stories.tsx).
// Never add star ratings, weight-loss numbers or other results to them.
// Replace with real patient reviews only with written consent on file.

export type Story = {
  id: string;
  name: string;
  city: string;
  quote: { en: string; es: string };
  image: string;
};

export const STORIES: Story[] = [
  {
    id: "lourdes",
    name: "Lourdes",
    city: "Kendall, FL",
    quote: {
      en: "They explained everything in Spanish when I needed it and never rushed me.",
      es: "Me explicaron todo en español cuando lo necesité y nunca me apuraron.",
    },
    image: "/patients/lourdes.jpg",
  },
  {
    id: "marisol",
    name: "Marisol",
    city: "Miami, FL",
    quote: {
      en: "A doctor finally looked at my whole picture: labs, medications and family history.",
      es: "Por fin un médico miró mi panorama completo: análisis, medicamentos e historial familiar.",
    },
    image: "/patients/marisol.jpg",
  },
  {
    id: "andre",
    name: "Andre",
    city: "Aventura, FL",
    quote: {
      en: "Real doctors and real follow-up, in person, every week.",
      es: "Médicos de verdad y seguimiento de verdad, en persona, cada semana.",
    },
    image: "/patients/andre.jpg",
  },
];

// Figures confirmed by Estrella Medical Centers (October 2026).
export const STATS: { number: string; label: { en: string; es: string } }[] = [
  {
    number: "8,000+",
    label: {
      en: "Patients at Estrella Medical Centers",
      es: "Pacientes en Estrella Medical Centers",
    },
  },
  {
    number: "20+",
    label: {
      en: "Years of experience across our doctors",
      es: "Años de experiencia de nuestros médicos",
    },
  },
];
