"use client";

import { useIntake } from "@/lib/intake-store";
import { Field, RadioGroup, StepHeading } from "@/components/intake/fields";
import { IntakeFooter } from "@/components/intake/progress";
import { useLang, pick } from "@/lib/i18n";

const COPY = {
  en: {
    eyebrow: "Section 5 of 8",
    title: "Allergies & safety",
    subtitle:
      "A few extra safety checks before your doctor designs your weight loss plan.",
    allergiesLabel: "Do you have any medication allergies?",
    yes: "Yes",
    no: "No",
    notApplicable: "Not applicable",
    describeLabel: "Please describe your allergies",
    describePlaceholder: "Medication, type of reaction, severity…",
    injectableLabel:
      "Have you ever had a serious reaction to an injectable medication?",
    pregnancyLabel: "Are you pregnant or breastfeeding?",
  },
  es: {
    eyebrow: "Sección 5 de 8",
    title: "Alergias y seguridad",
    subtitle:
      "Unos controles de seguridad adicionales antes de que tu médico diseñe tu plan de pérdida de peso.",
    allergiesLabel: "¿Tienes alguna alergia a medicamentos?",
    yes: "Sí",
    no: "No",
    notApplicable: "No aplica",
    describeLabel: "Describe tus alergias",
    describePlaceholder: "Medicamento, tipo de reacción, gravedad…",
    injectableLabel:
      "¿Alguna vez has tenido una reacción seria a un medicamento inyectable?",
    pregnancyLabel: "¿Estás embarazada o amamantando?",
  },
};

export default function AllergiesPage() {
  const { data, set } = useIntake();
  const { lang } = useLang();
  const t = pick(lang, COPY);

  const isFemale = data.biologicalSex === "female";

  const valid =
    data.hasAllergies &&
    (data.hasAllergies === "no" || data.allergyDetails.trim().length > 1) &&
    data.injectableReaction &&
    (!isFemale || data.pregnancyStatus);

  const yesNo = [
    { value: "Yes", label: t.yes },
    { value: "No", label: t.no },
  ];

  return (
    <div className="mx-auto max-w-3xl">
      <StepHeading
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
      />

      <div className="space-y-6">
        <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft sm:p-8">
          <div className="label mb-3">{t.allergiesLabel}</div>
          <RadioGroup
            options={yesNo}
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
              <Field label={t.describeLabel} required>
                <textarea
                  className="input min-h-[100px]"
                  placeholder={t.describePlaceholder}
                  value={data.allergyDetails}
                  onChange={(e) => set("allergyDetails", e.target.value)}
                />
              </Field>
            </div>
          )}
        </div>

        <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft sm:p-8">
          <div className="label mb-3">{t.injectableLabel}</div>
          <RadioGroup
            options={yesNo}
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
            <div className="label mb-3">{t.pregnancyLabel}</div>
            <RadioGroup
              options={[
                { value: "Yes", label: t.yes },
                { value: "No", label: t.no },
                { value: "Not applicable", label: t.notApplicable },
              ]}
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
