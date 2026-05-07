"use client";

import { useIntake } from "@/lib/intake-store";
import { RadioGroup, StepHeading } from "@/components/intake/fields";
import { IntakeFooter } from "@/components/intake/progress";

export default function LifestylePage() {
  const { data, set } = useIntake();
  const valid =
    data.exerciseFrequency &&
    data.sleepQuality &&
    data.alcohol &&
    data.tobacco;

  return (
    <div className="mx-auto max-w-3xl">
      <StepHeading
        eyebrow="Section 7 of 8"
        title="Lifestyle"
        subtitle="A snapshot of your daily routine. Your provider uses this to coach you alongside any medication."
      />

      <div className="space-y-6">
        <Card label="Exercise frequency">
          <RadioGroup
            cols={2}
            options={["Never", "1–2x weekly", "3–5x weekly", "Daily"]}
            value={data.exerciseFrequency}
            onChange={(v) => set("exerciseFrequency", v)}
          />
        </Card>

        <Card label="Sleep quality">
          <RadioGroup
            cols={2}
            options={["Poor", "Fair", "Good", "Excellent"]}
            value={data.sleepQuality}
            onChange={(v) => set("sleepQuality", v)}
          />
        </Card>

        <Card label="Alcohol consumption">
          <RadioGroup
            cols={2}
            options={["Never", "Occasionally", "Weekly", "Daily"]}
            value={data.alcohol}
            onChange={(v) => set("alcohol", v)}
          />
        </Card>

        <Card label="Tobacco / nicotine use">
          <RadioGroup
            options={["Yes", "No"]}
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
