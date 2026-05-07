"use client";

import { useIntake } from "@/lib/intake-store";
import {
  MultiSelect,
  RadioGroup,
  StepHeading,
} from "@/components/intake/fields";
import { IntakeFooter } from "@/components/intake/progress";

export default function GoalDetailsPage() {
  const { data, set, toggleArr } = useIntake();

  const wantsWeight =
    data.goals.includes("Weight loss") ||
    data.goals.includes("Appetite control");
  const wantsRecovery =
    data.goals.includes("Recovery") || data.goals.includes("Athletic recovery");
  const wantsHormone =
    data.goals.includes("Hormone optimization") ||
    data.goals.includes("Healthy aging") ||
    data.goals.includes("Muscle preservation");
  const wantsSexual =
    data.goals.includes("Sexual performance") || data.goals.includes("Libido");

  const showAny =
    wantsWeight || wantsRecovery || wantsHormone || wantsSexual;

  let valid = true;
  if (wantsWeight) {
    valid =
      valid &&
      data.weightLossGoals.length > 0 &&
      !!data.weightStruggleDuration &&
      !!data.triedWeightLossMeds &&
      data.eatingHabits.length > 0;
  }
  if (wantsRecovery) {
    valid =
      valid &&
      data.recoveryGoals.length > 0 &&
      !!data.hasActiveInjury &&
      !!data.recentSurgery;
  }
  if (wantsHormone) {
    valid = valid && data.hormoneSymptoms.length > 0 && !!data.hadRecentLabs;
  }
  if (wantsSexual) {
    valid = valid && !!data.edFrequency && !!data.takingNitrates;
  }

  return (
    <div className="mx-auto max-w-4xl">
      <StepHeading
        eyebrow="Section 6 of 8"
        title="Tell us a little more about your goals"
        subtitle="A few quick questions, tailored to what you selected. The more your provider knows, the better your plan."
      />

      {!showAny && (
        <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft sm:p-8">
          <p className="text-navy-700">
            Based on your goals, no extra questions are needed in this
            section. Continue when you're ready.
          </p>
        </div>
      )}

      {wantsWeight && (
        <Block title="Weight loss program">
          <Sub label="What are your primary goals?" required>
            <MultiSelect
              cols={3}
              options={[
                "Weight loss",
                "Appetite suppression",
                "Blood sugar support",
                "Energy improvement",
                "Reduced cravings",
                "Metabolic health",
              ]}
              values={data.weightLossGoals}
              onToggle={(v) => toggleArr("weightLossGoals", v)}
            />
          </Sub>

          <Sub
            label="How long have you struggled with weight management?"
            required
          >
            <RadioGroup
              cols={2}
              options={[
                "Less than 1 year",
                "1–5 years",
                "5–10 years",
                "More than 10 years",
              ]}
              value={data.weightStruggleDuration}
              onChange={(v) => set("weightStruggleDuration", v)}
            />
          </Sub>

          <Sub label="Have you previously tried weight loss medications?" required>
            <RadioGroup
              options={["Yes", "No"]}
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
            <Sub label="Which ones?">
              <MultiSelect
                cols={3}
                options={[
                  "Semaglutide",
                  "Tirzepatide",
                  "Phentermine",
                  "Contrave",
                  "Other",
                ]}
                values={data.previousWeightMeds}
                onToggle={(v) => toggleArr("previousWeightMeds", v)}
              />
            </Sub>
          )}

          <Sub label="What best describes your eating habits?" required>
            <MultiSelect
              cols={2}
              options={[
                "Frequent overeating",
                "Emotional eating",
                "Late-night eating",
                "Sugar cravings",
                "Portion control struggles",
                "Inconsistent eating schedule",
              ]}
              values={data.eatingHabits}
              onToggle={(v) => toggleArr("eatingHabits", v)}
            />
          </Sub>
        </Block>
      )}

      {wantsRecovery && (
        <Block title="Recovery program">
          <Sub label="What are you seeking recovery support for?" required>
            <MultiSelect
              cols={2}
              options={[
                "Workout recovery",
                "Joint discomfort",
                "Tendon / ligament recovery",
                "Injury recovery",
                "Mobility support",
                "Chronic inflammation",
              ]}
              values={data.recoveryGoals}
              onToggle={(v) => toggleArr("recoveryGoals", v)}
            />
          </Sub>
          <Sub label="Do you currently have an active injury?" required>
            <RadioGroup
              options={["Yes", "No"]}
              value={
                data.hasActiveInjury === "yes"
                  ? "Yes"
                  : data.hasActiveInjury === "no"
                  ? "No"
                  : ""
              }
              onChange={(v) =>
                set("hasActiveInjury", v === "Yes" ? "yes" : "no")
              }
            />
          </Sub>
          <Sub label="Have you undergone surgery in the last 12 months?" required>
            <RadioGroup
              options={["Yes", "No"]}
              value={
                data.recentSurgery === "yes"
                  ? "Yes"
                  : data.recentSurgery === "no"
                  ? "No"
                  : ""
              }
              onChange={(v) => set("recentSurgery", v === "Yes" ? "yes" : "no")}
            />
          </Sub>
        </Block>
      )}

      {wantsHormone && (
        <Block title="Hormone optimization">
          <Sub label="Which symptoms are you experiencing?" required>
            <MultiSelect
              cols={2}
              options={[
                "Low energy",
                "Poor recovery",
                "Reduced libido",
                "Brain fog",
                "Mood changes",
                "Muscle loss",
                "Poor sleep",
                "Increased body fat",
              ]}
              values={data.hormoneSymptoms}
              onToggle={(v) => toggleArr("hormoneSymptoms", v)}
            />
          </Sub>
          <Sub label="Have you had hormone labs completed in the last 12 months?" required>
            <RadioGroup
              options={["Yes", "No"]}
              value={
                data.hadRecentLabs === "yes"
                  ? "Yes"
                  : data.hadRecentLabs === "no"
                  ? "No"
                  : ""
              }
              onChange={(v) => set("hadRecentLabs", v === "Yes" ? "yes" : "no")}
            />
          </Sub>
          {data.hadRecentLabs === "yes" && (
            <div className="rounded-2xl border border-dashed border-navy-200 bg-sand-50 p-5 text-sm text-navy-600">
              You'll be able to upload your labs after your account is created.
              Your provider will review them with your intake.
            </div>
          )}
        </Block>
      )}

      {wantsSexual && (
        <Block title="Sexual health">
          <Sub
            label="Are you experiencing difficulty with erections?"
            required
          >
            <RadioGroup
              cols={3}
              options={["Occasionally", "Frequently", "Almost always"]}
              value={data.edFrequency}
              onChange={(v) => set("edFrequency", v)}
            />
          </Sub>
          <Sub
            label="Are you currently taking nitrates or nitroglycerin?"
            required
          >
            <RadioGroup
              options={["Yes", "No"]}
              value={
                data.takingNitrates === "yes"
                  ? "Yes"
                  : data.takingNitrates === "no"
                  ? "No"
                  : ""
              }
              onChange={(v) =>
                set("takingNitrates", v === "Yes" ? "yes" : "no")
              }
            />
            <p className="mt-2 text-xs text-rose-700">
              Important: Nitrate or nitroglycerin use is a contraindication for
              ED medications.
            </p>
          </Sub>
        </Block>
      )}

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
