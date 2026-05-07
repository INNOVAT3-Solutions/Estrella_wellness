"use client";

import { useIntake } from "@/lib/intake-store";
import {
  Field,
  MultiSelect,
  RadioGroup,
  StepHeading,
} from "@/components/intake/fields";
import { IntakeFooter } from "@/components/intake/progress";

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

export default function MedicationsPage() {
  const { data, set, toggleArr } = useIntake();
  const valid =
    data.takingMedications &&
    (data.takingMedications === "no" || data.medicationsList.trim().length > 1);

  return (
    <div className="mx-auto max-w-3xl">
      <StepHeading
        eyebrow="Section 4 of 8"
        title="Medication review"
        subtitle="Tell us what you're currently taking. Drug interactions are one of the most important things your provider checks."
      />

      <div className="space-y-6">
        <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft sm:p-8">
          <div className="label mb-3">
            Are you currently taking any medications?
          </div>
          <RadioGroup
            options={["yes", "no"].map((v) =>
              v === "yes" ? "Yes" : "No"
            )}
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
              <Field label="Please list all medications and dosages" required>
                <textarea
                  className="input min-h-[120px]"
                  placeholder="e.g. Lisinopril 10mg daily, Metformin 500mg twice daily…"
                  value={data.medicationsList}
                  onChange={(e) => set("medicationsList", e.target.value)}
                />
              </Field>
            </div>
          )}
        </div>

        <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft sm:p-8">
          <div className="label mb-3">
            Are you currently using any of the following?
          </div>
          <MultiSelect
            options={CURRENTLY_USING}
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
