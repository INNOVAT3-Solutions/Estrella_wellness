"use client";

import { useIntake } from "@/lib/intake-store";
import { MultiSelect, StepHeading } from "@/components/intake/fields";
import { IntakeFooter } from "@/components/intake/progress";
import { useLang, pick } from "@/lib/i18n";

/** Stored values stay in English so persisted data keeps working. */
const GOAL_VALUES = [
  "Lose 10-20 lbs",
  "Lose 20-50 lbs",
  "Lose 50+ lbs",
  "Appetite & craving control",
  "Blood sugar / metabolic health",
  "More energy",
  "Keep muscle while losing weight",
  "Build sustainable habits",
] as const;

const COPY = {
  en: {
    eyebrow: "Section 2 of 8",
    title: "What are your weight loss goals?",
    subtitle:
      "Pick everything that applies. Your doctor will use this — along with your medical history — to design your GLP-1 plan.",
    goals: {
      "Lose 10-20 lbs": "Lose 10-20 lbs",
      "Lose 20-50 lbs": "Lose 20-50 lbs",
      "Lose 50+ lbs": "Lose 50+ lbs",
      "Appetite & craving control": "Appetite & craving control",
      "Blood sugar / metabolic health": "Blood sugar / metabolic health",
      "More energy": "More energy",
      "Keep muscle while losing weight": "Keep muscle while losing weight",
      "Build sustainable habits": "Build sustainable habits",
    } as Record<(typeof GOAL_VALUES)[number], string>,
  },
  es: {
    eyebrow: "Sección 2 de 8",
    title: "¿Cuáles son tus metas de pérdida de peso?",
    subtitle:
      "Marca todo lo que aplique. Tu médico usará esto — junto con tu historial médico — para diseñar tu plan GLP-1.",
    goals: {
      "Lose 10-20 lbs": "Bajar 10-20 libras",
      "Lose 20-50 lbs": "Bajar 20-50 libras",
      "Lose 50+ lbs": "Bajar más de 50 libras",
      "Appetite & craving control": "Control del apetito y los antojos",
      "Blood sugar / metabolic health": "Azúcar en sangre / salud metabólica",
      "More energy": "Más energía",
      "Keep muscle while losing weight": "Mantener músculo al bajar de peso",
      "Build sustainable habits": "Crear hábitos sostenibles",
    } as Record<(typeof GOAL_VALUES)[number], string>,
  },
};

export default function ProgramPage() {
  const { data, toggleArr } = useIntake();
  const { lang } = useLang();
  const t = pick(lang, COPY);
  const valid = data.goals.length >= 1;

  return (
    <div className="mx-auto max-w-4xl">
      <StepHeading
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
      />

      <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft sm:p-8">
        <MultiSelect
          options={GOAL_VALUES.map((v) => ({ value: v, label: t.goals[v] }))}
          values={data.goals}
          onToggle={(v) => toggleArr("goals", v)}
          cols={3}
        />
      </div>

      <IntakeFooter
        back="/qualify/account"
        next="/qualify/health"
        nextDisabled={!valid}
      />
    </div>
  );
}
