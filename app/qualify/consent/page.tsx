"use client";

import { useIntake } from "@/lib/intake-store";
import { StepHeading } from "@/components/intake/fields";
import { IntakeFooter } from "@/components/intake/progress";
import { useLang, pick } from "@/lib/i18n";

const CONSENT_KEYS = [
  "consentTelehealth",
  "consentHipaa",
  "consentCompounded",
  "consentSubscription",
  "consentMedicalAccuracy",
] as const;

type ConsentKey = (typeof CONSENT_KEYS)[number];

const COPY = {
  en: {
    eyebrow: "Section 8 of 8",
    title: "Consent & disclosures",
    subtitle:
      "Please review and acknowledge each item below before submitting your consultation.",
    submit: "Submit for provider review",
    items: {
      consentTelehealth: {
        title: "Telemedicine consent",
        body: "I consent to receive telehealth services from licensed providers and understand that telemedicine has limitations compared to an in-person visit.",
      },
      consentHipaa: {
        title: "HIPAA acknowledgment",
        body: "I acknowledge receipt of Estrella's HIPAA Notice of Privacy Practices and how my health information may be used and disclosed.",
      },
      consentCompounded: {
        title: "Compounded medication disclosure",
        body: "I understand that compounded medications are not FDA-approved in the same manner as commercially manufactured drugs and that compounded products are made by a licensed pharmacy in response to a prescription.",
      },
      consentSubscription: {
        title: "Subscription authorization",
        body: "I authorize recurring billing according to my treatment plan. I understand I can pause, modify, or cancel my subscription from my dashboard.",
      },
      consentMedicalAccuracy: {
        title: "Medical accuracy statement",
        body: "I certify that the information I have provided is truthful, complete, and accurate to the best of my knowledge.",
      },
    } as Record<ConsentKey, { title: string; body: string }>,
  },
  es: {
    eyebrow: "Sección 8 de 8",
    title: "Consentimiento y avisos",
    subtitle:
      "Revisa y acepta cada punto a continuación antes de enviar tu consulta.",
    submit: "Enviar para revisión médica",
    items: {
      consentTelehealth: {
        title: "Consentimiento de telemedicina",
        body: "Doy mi consentimiento para recibir servicios de telesalud de proveedores licenciados y entiendo que la telemedicina tiene limitaciones en comparación con una visita en persona.",
      },
      consentHipaa: {
        title: "Reconocimiento HIPAA",
        body: "Reconozco haber recibido el Aviso de Prácticas de Privacidad HIPAA de Estrella y cómo mi información de salud puede ser usada y divulgada.",
      },
      consentCompounded: {
        title: "Aviso sobre medicamentos magistrales",
        body: "Entiendo que los medicamentos magistrales no están aprobados por la FDA de la misma manera que los medicamentos fabricados comercialmente y que los productos magistrales los elabora una farmacia licenciada en respuesta a una receta.",
      },
      consentSubscription: {
        title: "Autorización de suscripción",
        body: "Autorizo el cobro recurrente según mi plan de tratamiento. Entiendo que puedo pausar, modificar o cancelar mi suscripción desde mi panel.",
      },
      consentMedicalAccuracy: {
        title: "Declaración de veracidad médica",
        body: "Certifico que la información que he proporcionado es verdadera, completa y precisa según mi leal saber y entender.",
      },
    } as Record<ConsentKey, { title: string; body: string }>,
  },
};

export default function ConsentPage() {
  const { data, set } = useIntake();
  const { lang } = useLang();
  const t = pick(lang, COPY);

  const valid = CONSENT_KEYS.every((key) => data[key]);

  return (
    <div className="mx-auto max-w-3xl">
      <StepHeading
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
      />

      <div className="space-y-3">
        {CONSENT_KEYS.map((key) => {
          const item = t.items[key];
          const checked = !!data[key];
          return (
            <button
              key={key}
              type="button"
              onClick={() => set(key, !checked)}
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
                  {item.title}
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-navy-600">
                  {item.body}
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
        nextLabel={t.submit}
      />
    </div>
  );
}
