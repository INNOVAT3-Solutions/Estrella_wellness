"use client";

import { useIntake } from "@/lib/intake-store";
import { Field, RadioGroup, StepHeading } from "@/components/intake/fields";
import { IntakeFooter } from "@/components/intake/progress";

export default function AllergiesPage() {
  const { data, set } = useIntake();

  const isFemale = data.biologicalSex === "female";

  const valid =
    data.hasAllergies &&
    (data.hasAllergies === "no" || data.allergyDetails.trim().length > 1) &&
    data.injectableReaction &&
    (!isFemale || data.pregnancyStatus);

  return (
    <div className="mx-auto max-w-3xl">
      <StepHeading
        eyebrow="Section 5 of 8"
        title="Allergies & safety"
        subtitle="A few extra safety checks before your provider designs a plan."
      />

      <div className="space-y-6">
        <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft sm:p-8">
          <div className="label mb-3">Do you have any medication allergies?</div>
          <RadioGroup
            options={["Yes", "No"]}
            value={
              data.hasAllergies === "yes"
                ? "Yes"
                : data.hasAllergies === "no"
                ? "No"
                : ""
            }
            onChange={(v) => set("hasAllergies", v === "Yes" ? "yes" : "no")}
          />
          {data.hasAllergies === "yes" && (
            <div className="mt-5">
              <Field label="Please describe your allergies" required>
                <textarea
                  className="input min-h-[100px]"
                  placeholder="Medication, type of reaction, severity…"
                  value={data.allergyDetails}
                  onChange={(e) => set("allergyDetails", e.target.value)}
                />
              </Field>
            </div>
          )}
        </div>

        <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft sm:p-8">
          <div className="label mb-3">
            Have you ever had a serious reaction to an injectable medication?
          </div>
          <RadioGroup
            options={["Yes", "No"]}
            value={
              data.injectableReaction === "yes"
                ? "Yes"
                : data.injectableReaction === "no"
                ? "No"
                : ""
            }
            onChange={(v) =>
              set("injectableReaction", v === "Yes" ? "yes" : "no")
            }
          />
        </div>

        {isFemale && (
          <div className="rounded-3xl border border-sun-200 bg-sun-50/40 p-6 shadow-soft sm:p-8">
            <div className="label mb-3">
              Are you pregnant or breastfeeding?
            </div>
            <RadioGroup
              options={["Yes", "No", "Not applicable"]}
              value={
                data.pregnancyStatus === "yes"
                  ? "Yes"
                  : data.pregnancyStatus === "no"
                  ? "No"
                  : data.pregnancyStatus === "na"
                  ? "Not applicable"
                  : ""
              }
              onChange={(v) =>
                set(
                  "pregnancyStatus",
                  v === "Yes" ? "yes" : v === "No" ? "no" : "na"
                )
              }
              cols={3}
            />
          </div>
        )}
      </div>

      <IntakeFooter
        back="/qualify/medications"
        next="/qualify/goal-details"
        nextDisabled={!valid}
      />
    </div>
  );
}
