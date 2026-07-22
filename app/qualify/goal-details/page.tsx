"use client";

import { useIntake } from "@/lib/intake-store";
import {
  MultiSelect,
  RadioGroup,
  StepHeading,
} from "@/components/intake/fields";
import { IntakeFooter } from "@/components/intake/progress";
import { useLang, pick } from "@/lib/i18n";

/** Stored values — keep byte-identical for persisted data. */
const WL_GOALS = [
  "Weight loss",
  "Appetite suppression",
  "Blood sugar support",
  "Energy improvement",
  "Reduced cravings",
  "Metabolic health",
];

const DURATIONS = [
  "Less than 1 year",
  "1–5 years",
  "5–10 years",
  "More than 10 years",
];

const PREVIOUS_MEDS = [
  "Semaglutide",
  "Tirzepatide",
  "Phentermine",
  "Contrave",
  "Other",
];

const EATING_HABITS = [
  "Frequent overeating",
  "Emotional eating",
  "Late-night eating",
  "Sugar cravings",
  "Portion control struggles",
  "Inconsistent eating schedule",
];

const COPY = {
  en: {
    eyebrow: "Section 6 of 8",
    title: "Tell us more about your weight loss",
    subtitle:
      "A few quick questions about your history with weight. The more your doctor knows, the better your plan.",
    blockTitle: "GLP-1 Weight Loss Program",
    goalsLabel: "What are your primary goals?",
    durationLabel: "How long have you struggled with weight management?",
    triedLabel: "Have you previously tried weight loss medications?",
    whichLabel: "Which ones?",
    habitsLabel: "What best describes your eating habits?",
    yes: "Yes",
    no: "No",
    goals: {} as Record<string, string>,
    durations: {} as Record<string, string>,
    meds: {} as Record<string, string>,
    habits: {} as Record<string, string>,
  },
  es: {
    eyebrow: "Sección 6 de 8",
    title: "Cuéntanos más sobre tu pérdida de peso",
    subtitle:
      "Unas preguntas rápidas sobre tu historia con el peso. Mientras más sepa tu médico, mejor será tu plan.",
    blockTitle: "Programa de Pérdida de Peso GLP-1",
    goalsLabel: "¿Cuáles son tus metas principales?",
    durationLabel: "¿Cuánto tiempo llevas batallando con el manejo del peso?",
    triedLabel: "¿Has probado medicamentos para bajar de peso anteriormente?",
    whichLabel: "¿Cuáles?",
    habitsLabel: "¿Qué describe mejor tus hábitos de alimentación?",
    yes: "Sí",
    no: "No",
    goals: {
      "Weight loss": "Pérdida de peso",
      "Appetite suppression": "Supresión del apetito",
      "Blood sugar support": "Apoyo del azúcar en sangre",
      "Energy improvement": "Más energía",
      "Reduced cravings": "Menos antojos",
      "Metabolic health": "Salud metabólica",
    } as Record<string, string>,
    durations: {
      "Less than 1 year": "Menos de 1 año",
      "1–5 years": "1–5 años",
      "5–10 years": "5–10 años",
      "More than 10 years": "Más de 10 años",
    } as Record<string, string>,
    meds: {
      "Semaglutide": "Semaglutida",
      "Tirzepatide": "Tirzepatida",
      "Phentermine": "Fentermina",
      "Contrave": "Contrave",
      "Other": "Otro",
    } as Record<string, string>,
    habits: {
      "Frequent overeating": "Comer en exceso con frecuencia",
      "Emotional eating": "Comer por emociones",
      "Late-night eating": "Comer tarde en la noche",
      "Sugar cravings": "Antojos de azúcar",
      "Portion control struggles": "Dificultad para controlar porciones",
      "Inconsistent eating schedule": "Horarios de comida irregulares",
    } as Record<string, string>,
  },
};

export default function GoalDetailsPage() {
  const { data, set, toggleArr } = useIntake();
  const { lang } = useLang();
  const t = pick(lang, COPY);

  const localize = (
    values: string[],
    map: Record<string, string>
  ): { value: string; label: string }[] =>
    values.map((v) => ({
      value: v,
      label: lang === "es" ? map[v] ?? v : v,
    }));

  const valid =
    data.weightLossGoals.length > 0 &&
    !!data.weightStruggleDuration &&
    !!data.triedWeightLossMeds &&
    data.eatingHabits.length > 0;

  return (
    <div className="mx-auto max-w-4xl">
      <StepHeading
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
      />

      <Block title={t.blockTitle}>
        <Sub label={t.goalsLabel} required>
          <MultiSelect
            cols={3}
            options={localize(WL_GOALS, t.goals)}
            values={data.weightLossGoals}
            onToggle={(v) => toggleArr("weightLossGoals", v)}
          />
        </Sub>

        <Sub label={t.durationLabel} required>
          <RadioGroup
            cols={2}
            options={localize(DURATIONS, t.durations)}
            value={data.weightStruggleDuration}
            onChange={(v) => set("weightStruggleDuration", v)}
          />
        </Sub>

        <Sub label={t.triedLabel} required>
          <RadioGroup
            options={[
              { value: "Yes", label: t.yes },
              { value: "No", label: t.no },
            ]}
            value={
              data.triedWeightLossMeds === "yes"
                ? "Yes"
                : data.triedWeightLossMeds === "no"
                ? "No"
                : ""
            }
            onChange={(v) =>
              set("triedWeightLossMeds", v === "Yes" ? "yes" : "no")
            }
          />
        </Sub>

        {data.triedWeightLossMeds === "yes" && (
          <Sub label={t.whichLabel}>
            <MultiSelect
              cols={3}
              options={localize(PREVIOUS_MEDS, t.meds)}
              values={data.previousWeightMeds}
              onToggle={(v) => toggleArr("previousWeightMeds", v)}
            />
          </Sub>
        )}

        <Sub label={t.habitsLabel} required>
          <MultiSelect
            cols={2}
            options={localize(EATING_HABITS, t.habits)}
            values={data.eatingHabits}
            onToggle={(v) => toggleArr("eatingHabits", v)}
          />
        </Sub>
      </Block>

      <IntakeFooter
        back="/qualify/allergies"
        next="/qualify/lifestyle"
        nextDisabled={!valid}
      />
    </div>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 rounded-3xl border border-navy-100 bg-white p-6 shadow-soft sm:p-8">
      <div className="text-xs font-semibold uppercase tracking-wider text-sun-600">
        {title}
      </div>
      <div className="mt-4 space-y-6">{children}</div>
    </div>
  );
}

function Sub({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="label mb-3">
        {label}
        {required && <span className="ml-1 text-sun-600">*</span>}
      </div>
      {children}
    </div>
  );
}
