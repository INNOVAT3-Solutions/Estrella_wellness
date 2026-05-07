"use client";

import { useIntake } from "@/lib/intake-store";
import { MultiSelect, StepHeading } from "@/components/intake/fields";
import { IntakeFooter } from "@/components/intake/progress";

const GOALS = [
  "Weight loss",
  "Appetite control",
  "Energy",
  "Recovery",
  "Sleep",
  "Hormone optimization",
  "Muscle preservation",
  "Longevity",
  "Libido",
  "Sexual performance",
  "Cognitive performance",
  "Athletic recovery",
  "Healthy aging",
];

export default function ProgramPage() {
  const { data, toggleArr } = useIntake();
  const valid = data.goals.length >= 1;

  return (
    <div className="mx-auto max-w-4xl">
      <StepHeading
        eyebrow="Section 2 of 8"
        title="What are you interested in improving?"
        subtitle="Pick everything that applies. Your provider will use this — along with your medical history — to suggest a program."
      />

      <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft sm:p-8">
        <MultiSelect
          options={GOALS}
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
