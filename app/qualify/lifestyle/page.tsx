"use client";

import { useIntake } from "@/lib/intake-store";
import { RadioGroup, StepHeading } from "@/components/intake/fields";
import { IntakeFooter } from "@/components/intake/progress";
import { useLang, pick } from "@/lib/i18n";

const COPY = {
  en: {
    eyebrow: "Section 7 of 8",
    title: "Lifestyle",
    subtitle:
      "A snapshot of your daily routine. Your doctor uses this to build your nutrition plan and management exercises around your life.",
    exercise: "Exercise frequency",
    sleep: "Sleep quality",
    alcohol: "Alcohol consumption",
    tobacco: "Tobacco / nicotine use",
    yes: "Yes",
    no: "No",
    exerciseOpts: {
      "Never": "Never",
      "1–2x weekly": "1–2x weekly",
      "3–5x weekly": "3–5x weekly",
      "Daily": "Daily",
    } as Record<string, string>,
    sleepOpts: {
      "Poor": "Poor",
      "Fair": "Fair",
      "Good": "Good",
      "Excellent": "Excellent",
    } as Record<string, string>,
    alcoholOpts: {
      "Never": "Never",
      "Occasionally": "Occasionally",
      "Weekly": "Weekly",
      "Daily": "Daily",
    } as Record<string, string>,
  },
  es: {
    eyebrow: "Sección 7 de 8",
    title: "Estilo de vida",
    subtitle:
      "Una foto de tu rutina diaria. Tu médico usa esto para construir tu plan de nutrición y tus ejercicios de manejo alrededor de tu vida.",
    exercise: "Frecuencia de ejercicio",
    sleep: "Calidad del sueño",
    alcohol: "Consumo de alcohol",
    tobacco: "Uso de tabaco / nicotina",
    yes: "Sí",
    no: "No",
    exerciseOpts: {
      "Never": "Nunca",
      "1–2x weekly": "1–2 veces por semana",
      "3–5x weekly": "3–5 veces por semana",
      "Daily": "Todos los días",
    } as Record<string, string>,
    sleepOpts: {
      "Poor": "Mala",
      "Fair": "Regular",
      "Good": "Buena",
      "Excellent": "Excelente",
    } as Record<string, string>,
    alcoholOpts: {
      "Never": "Nunca",
      "Occasionally": "Ocasionalmente",
      "Weekly": "Semanal",
      "Daily": "Diario",
    } as Record<string, string>,
  },
};

export default function LifestylePage() {
  const { data, set } = useIntake();
  const { lang } = useLang();
  const t = pick(lang, COPY);

  const opts = (values: string[], map: Record<string, string>) =>
    values.map((v) => ({ value: v, label: map[v] ?? v }));

  const valid =
    data.exerciseFrequency &&
    data.sleepQuality &&
    data.alcohol &&
    data.tobacco;

  return (
    <div className="mx-auto max-w-3xl">
      <StepHeading
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
      />

      <div className="space-y-6">
        <Card label={t.exercise}>
          <RadioGroup
            cols={2}
            options={opts(
              ["Never", "1–2x weekly", "3–5x weekly", "Daily"],
              t.exerciseOpts
            )}
            value={data.exerciseFrequency}
            onChange={(v) => set("exerciseFrequency", v)}
          />
        </Card>

        <Card label={t.sleep}>
          <RadioGroup
            cols={2}
            options={opts(
              ["Poor", "Fair", "Good", "Excellent"],
              t.sleepOpts
            )}
            value={data.sleepQuality}
            onChange={(v) => set("sleepQuality", v)}
          />
        </Card>

        <Card label={t.alcohol}>
          <RadioGroup
            cols={2}
            options={opts(
              ["Never", "Occasionally", "Weekly", "Daily"],
              t.alcoholOpts
            )}
            value={data.alcohol}
            onChange={(v) => set("alcohol", v)}
          />
        </Card>

        <Card label={t.tobacco}>
          <RadioGroup
            options={[
              { value: "Yes", label: t.yes },
              { value: "No", label: t.no },
            ]}
            value={
              data.tobacco === "yes" ? "Yes" : data.tobacco === "no" ? "No" : ""
            }
            onChange={(v) => set("tobacco", v === "Yes" ? "yes" : "no")}
          />
        </Card>
      </div>

      <IntakeFooter
        back="/qualify/goal-details"
        next="/qualify/consent"
        nextDisabled={!valid}
      />
    </div>
  );
}

function Card({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft sm:p-8">
      <div className="label mb-3">{label}</div>
      {children}
    </div>
  );
}
