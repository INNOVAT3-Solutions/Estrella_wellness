"use client";

import { useIntake, calcBmi } from "@/lib/intake-store";
import {
  Field,
  MultiSelect,
  StepHeading,
} from "@/components/intake/fields";
import { IntakeFooter } from "@/components/intake/progress";

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

export default function HealthPage() {
  const { data, set, toggleArr } = useIntake();
  const bmi = calcBmi(data.heightFeet, data.heightInches, data.weightLb);

  const valid =
    data.heightFeet &&
    data.weightLb &&
    data.diagnoses.length > 0 &&
    data.contraindications.length > 0;

  return (
    <div className="mx-auto max-w-4xl">
      <StepHeading
        eyebrow="Section 3 of 8"
        title="Current health status"
        subtitle="Your provider uses this to ensure any program is safe — and effective — for your specific situation."
      />

      <div className="space-y-6">
        <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft sm:p-8">
          <div className="grid gap-5 sm:grid-cols-3">
            <Field label="Height (feet)" required>
              <input
                type="number"
                min={3}
                max={8}
                className="input"
                value={data.heightFeet}
                onChange={(e) => set("heightFeet", e.target.value)}
              />
            </Field>
            <Field label="Height (inches)">
              <input
                type="number"
                min={0}
                max={11}
                className="input"
                value={data.heightInches}
                onChange={(e) => set("heightInches", e.target.value)}
              />
            </Field>
            <Field label="Weight (lbs)" required>
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
              auto-calculated
            </span>
          </div>
        </div>

        <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft sm:p-8">
          <div className="label mb-3">
            Have you been diagnosed with any of the following?{" "}
            <span className="text-sun-600">*</span>
          </div>
          <MultiSelect
            options={DIAGNOSES}
            values={data.diagnoses}
            onToggle={(v) => toggleArr("diagnoses", v)}
            cols={3}
          />
        </div>

        <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft sm:p-8">
          <div className="label mb-3">
            Have you ever had any of the following?{" "}
            <span className="text-sun-600">*</span>
          </div>
          <p className="mb-4 text-sm text-navy-600">
            These conditions are particularly important for GLP-1 and other
            programs.
          </p>
          <MultiSelect
            options={CONTRA}
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
