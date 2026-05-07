"use client";

import { useIntake } from "@/lib/intake-store";
import { StepHeading } from "@/components/intake/fields";
import { IntakeFooter } from "@/components/intake/progress";

const ITEMS = [
  {
    key: "consentTelehealth" as const,
    title: "Telemedicine consent",
    body: "I consent to receive telehealth services from licensed providers and understand that telemedicine has limitations compared to an in-person visit.",
  },
  {
    key: "consentHipaa" as const,
    title: "HIPAA acknowledgment",
    body: "I acknowledge receipt of Estrella's HIPAA Notice of Privacy Practices and how my health information may be used and disclosed.",
  },
  {
    key: "consentCompounded" as const,
    title: "Compounded medication disclosure",
    body: "I understand that compounded medications are not FDA-approved in the same manner as commercially manufactured drugs and that compounded products are made by a licensed pharmacy in response to a prescription.",
  },
  {
    key: "consentSubscription" as const,
    title: "Subscription authorization",
    body: "I authorize recurring billing according to my treatment plan. I understand I can pause, modify, or cancel my subscription from my dashboard.",
  },
  {
    key: "consentMedicalAccuracy" as const,
    title: "Medical accuracy statement",
    body: "I certify that the information I have provided is truthful, complete, and accurate to the best of my knowledge.",
  },
];

export default function ConsentPage() {
  const { data, set } = useIntake();
  const valid = ITEMS.every((it) => data[it.key]);

  return (
    <div className="mx-auto max-w-3xl">
      <StepHeading
        eyebrow="Section 8 of 8"
        title="Consent & disclosures"
        subtitle="Please review and acknowledge each item below before submitting your intake."
      />

      <div className="space-y-3">
        {ITEMS.map((it) => {
          const checked = !!data[it.key];
          return (
            <button
              key={it.key}
              type="button"
              onClick={() => set(it.key, !checked)}
              data-checked={checked}
              className="checkbox-card w-full text-left"
            >
              <span
                className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border transition ${
                  checked
                    ? "border-sun-500 bg-sun-500 text-white"
                    : "border-navy-200 bg-white"
                }`}
              >
                {checked && (
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </span>
              <span className="flex-1">
                <span className="block font-semibold text-navy-900">
                  {it.title}
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-navy-600">
                  {it.body}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <IntakeFooter
        back="/qualify/lifestyle"
        next="/qualify/review"
        nextDisabled={!valid}
        nextLabel="Submit for provider review"
      />
    </div>
  );
}
