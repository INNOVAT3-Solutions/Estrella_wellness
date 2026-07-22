"use client";

import { useIntake, calcBmi } from "@/lib/intake-store";
import {
  Field,
  MultiSelect,
  StepHeading,
} from "@/components/intake/fields";
import { IntakeFooter } from "@/components/intake/progress";
import { useLang, pick } from "@/lib/i18n";

/** Stored values — must stay byte-identical (risk-tier logic depends on them). */
const DIAGNOSES = [
  "High blood pressure",
  "Diabetes",
  "Prediabetes",
  "Thyroid disorder",
  "Sleep apnea",
  "Heart disease",
  "High cholesterol",
  "Anxiety",
  "Depression",
  "Hormonal imbalance",
  "Low testosterone",
  "Obesity",
  "PCOS",
  "None of the above",
];

const CONTRA = [
  "Pancreatitis",
  "Thyroid cancer",
  "MEN2 syndrome",
  "Gallbladder disease",
  "Kidney disease",
  "Liver disease",
  "Stroke",
  "Heart attack",
  "Eating disorder",
  "Seizures",
  "Cancer",
  "None of the above",
];

const COPY = {
  en: {
    eyebrow: "Section 3 of 8",
    title: "Current health status",
    subtitle:
      "Your doctor uses this to make sure the GLP-1 program is safe — and effective — for your specific situation.",
    heightFeet: "Height (feet)",
    heightInches: "Height (inches)",
    weight: "Weight (lbs)",
    bmiAuto: "auto-calculated",
    diagnosesLabel: "Have you been diagnosed with any of the following?",
    contraLabel: "Have you ever had any of the following?",
    contraHint:
      "These conditions are particularly important for GLP-1 medications.",
    diagnoses: {} as Record<string, string>,
    contra: {} as Record<string, string>,
  },
  es: {
    eyebrow: "Sección 3 de 8",
    title: "Estado de salud actual",
    subtitle:
      "Tu médico usa esto para asegurarse de que el programa GLP-1 sea seguro — y efectivo — para tu situación específica.",
    heightFeet: "Estatura (pies)",
    heightInches: "Estatura (pulgadas)",
    weight: "Peso (libras)",
    bmiAuto: "calculado automáticamente",
    diagnosesLabel: "¿Te han diagnosticado alguna de las siguientes?",
    contraLabel: "¿Alguna vez has tenido alguna de las siguientes?",
    contraHint:
      "Estas condiciones son especialmente importantes para los medicamentos GLP-1.",
    diagnoses: {
      "High blood pressure": "Presión arterial alta",
      "Diabetes": "Diabetes",
      "Prediabetes": "Prediabetes",
      "Thyroid disorder": "Trastorno de la tiroides",
      "Sleep apnea": "Apnea del sueño",
      "Heart disease": "Enfermedad cardíaca",
      "High cholesterol": "Colesterol alto",
      "Anxiety": "Ansiedad",
      "Depression": "Depresión",
      "Hormonal imbalance": "Desequilibrio hormonal",
      "Low testosterone": "Testosterona baja",
      "Obesity": "Obesidad",
      "PCOS": "SOP (ovario poliquístico)",
      "None of the above": "Ninguna de las anteriores",
    } as Record<string, string>,
    contra: {
      "Pancreatitis": "Pancreatitis",
      "Thyroid cancer": "Cáncer de tiroides",
      "MEN2 syndrome": "Síndrome MEN2",
      "Gallbladder disease": "Enfermedad de la vesícula",
      "Kidney disease": "Enfermedad renal",
      "Liver disease": "Enfermedad hepática",
      "Stroke": "Derrame cerebral",
      "Heart attack": "Infarto (ataque al corazón)",
      "Eating disorder": "Trastorno alimenticio",
      "Seizures": "Convulsiones",
      "Cancer": "Cáncer",
      "None of the above": "Ninguna de las anteriores",
    } as Record<string, string>,
  },
};

export default function HealthPage() {
  const { data, set, toggleArr } = useIntake();
  const { lang } = useLang();
  const t = pick(lang, COPY);
  const bmi = calcBmi(data.heightFeet, data.heightInches, data.weightLb);

  const valid =
    data.heightFeet &&
    data.weightLb &&
    data.diagnoses.length > 0 &&
    data.contraindications.length > 0;

  return (
    <div className="mx-auto max-w-4xl">
      <StepHeading
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
      />

      <div className="space-y-6">
        <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft sm:p-8">
          <div className="grid gap-5 sm:grid-cols-3">
            <Field label={t.heightFeet} required>
              <input
                type="number"
                min={3}
                max={8}
                className="input"
                value={data.heightFeet}
                onChange={(e) => set("heightFeet", e.target.value)}
              />
            </Field>
            <Field label={t.heightInches}>
              <input
                type="number"
                min={0}
                max={11}
                className="input"
                value={data.heightInches}
                onChange={(e) => set("heightInches", e.target.value)}
              />
            </Field>
            <Field label={t.weight} required>
              <input
                type="number"
                min={50}
                max={700}
                className="input"
                value={data.weightLb}
                onChange={(e) => set("weightLb", e.target.value)}
              />
            </Field>
          </div>
          <div className="mt-4 flex items-center gap-2 rounded-xl bg-sand-50 px-4 py-3">
            <span className="text-xs uppercase tracking-wider text-navy-500">
              BMI
            </span>
            <span className="text-lg font-semibold text-navy-900">{bmi}</span>
            <span className="ml-auto text-xs text-navy-500">
              {t.bmiAuto}
            </span>
          </div>
        </div>

        <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft sm:p-8">
          <div className="label mb-3">
            {t.diagnosesLabel} <span className="text-sun-600">*</span>
          </div>
          <MultiSelect
            options={DIAGNOSES.map((v) => ({
              value: v,
              label: lang === "es" ? t.diagnoses[v] ?? v : v,
            }))}
            values={data.diagnoses}
            onToggle={(v) => toggleArr("diagnoses", v)}
            cols={3}
          />
        </div>

        <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft sm:p-8">
          <div className="label mb-3">
            {t.contraLabel} <span className="text-sun-600">*</span>
          </div>
          <p className="mb-4 text-sm text-navy-600">{t.contraHint}</p>
          <MultiSelect
            options={CONTRA.map((v) => ({
              value: v,
              label: lang === "es" ? t.contra[v] ?? v : v,
            }))}
            values={data.contraindications}
            onToggle={(v) => toggleArr("contraindications", v)}
            cols={3}
          />
        </div>
      </div>

      <IntakeFooter
        back="/qualify/program"
        next="/qualify/medications"
        nextDisabled={!valid}
      />
    </div>
  );
}
