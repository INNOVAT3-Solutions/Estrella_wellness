"use client";

import { useIntake } from "@/lib/intake-store";
import {
  Field,
  MultiSelect,
  RadioGroup,
  StepHeading,
} from "@/components/intake/fields";
import { IntakeFooter } from "@/components/intake/progress";
import { useLang, pick } from "@/lib/i18n";

/** Stored values — keep byte-identical for persisted data. */
const CURRENTLY_USING = [
  "GLP-1 medications",
  "Testosterone",
  "Hormone therapy",
  "Blood pressure medication",
  "Antidepressants",
  "Anxiety medication",
  "Sleep medication",
  "Erectile dysfunction medication",
  "Weight loss medication",
  "None",
];

const COPY = {
  en: {
    eyebrow: "Section 4 of 8",
    title: "Medication review",
    subtitle:
      "Tell us what you're currently taking. Drug interactions are one of the most important things your doctor checks before designating your GLP-1 peptide.",
    takingLabel: "Are you currently taking any medications?",
    yes: "Yes",
    no: "No",
    listLabel: "Please list all medications and dosages",
    listPlaceholder:
      "e.g. Lisinopril 10mg daily, Metformin 500mg twice daily…",
    usingLabel: "Are you currently using any of the following?",
    using: {} as Record<string, string>,
  },
  es: {
    eyebrow: "Sección 4 de 8",
    title: "Revisión de medicamentos",
    subtitle:
      "Cuéntanos qué estás tomando actualmente. Las interacciones entre medicamentos son de lo más importante que tu médico revisa antes de designar tu péptido GLP-1.",
    takingLabel: "¿Estás tomando algún medicamento actualmente?",
    yes: "Sí",
    no: "No",
    listLabel: "Enumera todos tus medicamentos y sus dosis",
    listPlaceholder:
      "p. ej. Lisinopril 10mg diario, Metformina 500mg dos veces al día…",
    usingLabel: "¿Estás usando alguno de los siguientes actualmente?",
    using: {
      "GLP-1 medications": "Medicamentos GLP-1",
      "Testosterone": "Testosterona",
      "Hormone therapy": "Terapia hormonal",
      "Blood pressure medication": "Medicamento para la presión arterial",
      "Antidepressants": "Antidepresivos",
      "Anxiety medication": "Medicamento para la ansiedad",
      "Sleep medication": "Medicamento para dormir",
      "Erectile dysfunction medication":
        "Medicamento para la disfunción eréctil",
      "Weight loss medication": "Medicamento para bajar de peso",
      "None": "Ninguno",
    } as Record<string, string>,
  },
};

export default function MedicationsPage() {
  const { data, set, toggleArr } = useIntake();
  const { lang } = useLang();
  const t = pick(lang, COPY);

  const valid =
    data.takingMedications &&
    (data.takingMedications === "no" || data.medicationsList.trim().length > 1);

  return (
    <div className="mx-auto max-w-3xl">
      <StepHeading
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
      />

      <div className="space-y-6">
        <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft sm:p-8">
          <div className="label mb-3">{t.takingLabel}</div>
          <RadioGroup
            options={[
              { value: "Yes", label: t.yes },
              { value: "No", label: t.no },
            ]}
            value={
              data.takingMedications === "yes"
                ? "Yes"
                : data.takingMedications === "no"
                ? "No"
                : ""
            }
            onChange={(v) =>
              set("takingMedications", v === "Yes" ? "yes" : "no")
            }
          />

          {data.takingMedications === "yes" && (
            <div className="mt-5">
              <Field label={t.listLabel} required>
                <textarea
                  className="input min-h-[120px]"
                  placeholder={t.listPlaceholder}
                  value={data.medicationsList}
                  onChange={(e) => set("medicationsList", e.target.value)}
                />
              </Field>
            </div>
          )}
        </div>

        <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft sm:p-8">
          <div className="label mb-3">{t.usingLabel}</div>
          <MultiSelect
            options={CURRENTLY_USING.map((v) => ({
              value: v,
              label: lang === "es" ? t.using[v] ?? v : v,
            }))}
            values={data.currentlyUsing}
            onToggle={(v) => toggleArr("currentlyUsing", v)}
            cols={2}
          />
        </div>
      </div>

      <IntakeFooter
        back="/qualify/health"
        next="/qualify/allergies"
        nextDisabled={!valid}
      />
    </div>
  );
}
