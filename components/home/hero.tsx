"use client";

import { useRouter } from "next/navigation";
import { PulseFitHero } from "@/components/ui/pulse-fit-hero";
import { WEIGHT_LOSS, fmtPrice } from "@/lib/programs";
import { useLang, pick } from "@/lib/i18n";

const COPY = {
  en: {
    title1: "Lose the weight.",
    title2: "Keep the doctor.",
    subtitle:
      "The Estrella GLP-1 Weight Loss Program: a doctor's consultation, the peptide designated for you, a guided nutrition plan, and management exercises — one program, one monthly price.",
    offerLabel: "Limited-time offer",
    perMonth: "/month",
    offerNote: "Consultation included · cancel anytime",
    primary: "Start my consultation",
    secondary: "See what's included",
    socialProof: "Trusted by 12,000+ patients across our clinics",
    cards: [
      "Doctor-led care",
      "Your designated peptide",
      "Guided nutrition plan",
      "Management exercises",
    ],
    cardTitles: [
      "A licensed provider reviews your full health picture.",
      "The GLP-1 your doctor designates for you.",
      "Nutrition built to accelerate your progress.",
      "Movement that fits your real life.",
    ],
  },
  es: {
    title1: "Pierde el peso.",
    title2: "Conserva a tu médico.",
    subtitle:
      "El Programa de Pérdida de Peso GLP-1 de Estrella: consulta médica, el péptido designado para ti, un plan de nutrición guiado y ejercicios de manejo — un programa, un solo precio mensual.",
    offerLabel: "Oferta por tiempo limitado",
    perMonth: "/mes",
    offerNote: "Consulta incluida · cancela cuando quieras",
    primary: "Iniciar mi consulta",
    secondary: "Ver qué incluye",
    socialProof: "Más de 12,000 pacientes confían en nuestras clínicas",
    cards: [
      "Atención dirigida por médicos",
      "Tu péptido designado",
      "Plan de nutrición guiado",
      "Ejercicios de manejo",
    ],
    cardTitles: [
      "Un proveedor licenciado revisa tu panorama completo de salud.",
      "El GLP-1 que tu médico designa para ti.",
      "Nutrición diseñada para acelerar tu progreso.",
      "Movimiento que se adapta a tu vida real.",
    ],
  },
};

export function Hero() {
  const router = useRouter();
  const { lang } = useLang();
  const t = pick(lang, COPY);

  const cards = WEIGHT_LOSS.slides.map((s, i) => ({
    image: s.image,
    category: t.cards[i % t.cards.length],
    title: t.cardTitles[i % t.cardTitles.length],
    onClick: () => router.push("/programs/weight-loss"),
  }));

  return (
    <PulseFitHero
      showHeader={false}
      title={
        <>
          {t.title1}
          <br />
          <span className="font-normal italic">{t.title2}</span>
        </>
      }
      subtitle={t.subtitle}
      offer={
        <div className="flex flex-col items-center gap-2">
          <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sun-700">
            {t.offerLabel}
          </div>
          <div className="flex items-baseline gap-3">
            <span className="font-display text-[22px] font-light text-navy-900/40 line-through">
              {fmtPrice(WEIGHT_LOSS.regularPrice)}
            </span>
            <span className="font-display text-[56px] font-light leading-none text-navy-900">
              {fmtPrice(WEIGHT_LOSS.price)}
            </span>
            <span className="text-[15px] text-navy-900/60">{t.perMonth}</span>
          </div>
          <div className="text-[12px] uppercase tracking-[0.18em] text-navy-900/55">
            {t.offerNote}
          </div>
        </div>
      }
      primaryAction={{
        label: t.primary,
        onClick: () => router.push("/qualify"),
      }}
      secondaryAction={{
        label: t.secondary,
        onClick: () => {
          document
            .getElementById("included")
            ?.scrollIntoView({ behavior: "smooth" });
        },
      }}
      socialProof={{
        avatars: [
          "/doctors/Aurelia_doctor.png",
          "/doctors/Carmen_doctor.png",
          "/doctors/Hugo_doctor.png",
          "/doctors/Yamaris_doctor.png",
        ],
        text: t.socialProof,
      }}
      programs={cards}
      carouselSecondsPerCard={12}
    />
  );
}
