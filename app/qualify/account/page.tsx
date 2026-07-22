"use client";

import { useIntake } from "@/lib/intake-store";
import { Field, StepHeading } from "@/components/intake/fields";
import { IntakeFooter } from "@/components/intake/progress";
import { useLang, pick } from "@/lib/i18n";

const STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY","DC",
];

const COPY = {
  en: {
    eyebrow: "Section 1 of 8",
    title: "Create your account",
    subtitle:
      "Just the basics — these match your prescription and shipment to you.",
    fullName: "Full name",
    fullNamePlaceholder: "First and last name",
    dob: "Date of birth",
    sex: "Biological sex",
    sexSelect: "Select…",
    sexMale: "Male",
    sexFemale: "Female",
    sexPreferNot: "Prefer not to say",
    phone: "Phone number",
    email: "Email",
    emailPlaceholder: "you@email.com",
    shipping: "Shipping address",
    shippingPlaceholder: "Street, apt, city, ZIP",
    state: "State of residence",
    stateSelect: "Select your state…",
  },
  es: {
    eyebrow: "Sección 1 de 8",
    title: "Crea tu cuenta",
    subtitle:
      "Solo lo básico — estos datos vinculan tu receta y tu envío contigo.",
    fullName: "Nombre completo",
    fullNamePlaceholder: "Nombre y apellido",
    dob: "Fecha de nacimiento",
    sex: "Sexo biológico",
    sexSelect: "Selecciona…",
    sexMale: "Masculino",
    sexFemale: "Femenino",
    sexPreferNot: "Prefiero no decir",
    phone: "Número de teléfono",
    email: "Correo electrónico",
    emailPlaceholder: "tu@correo.com",
    shipping: "Dirección de envío",
    shippingPlaceholder: "Calle, apto, ciudad, código postal",
    state: "Estado de residencia",
    stateSelect: "Selecciona tu estado…",
  },
};

export default function AccountPage() {
  const { data, set } = useIntake();
  const { lang } = useLang();
  const t = pick(lang, COPY);

  const valid =
    data.fullName.trim().length > 1 &&
    data.dob &&
    data.biologicalSex &&
    /\S+@\S+/.test(data.email) &&
    data.phone.replace(/\D/g, "").length >= 10 &&
    data.shippingAddress.trim().length > 5 &&
    data.state;

  return (
    <div className="mx-auto max-w-3xl">
      <StepHeading
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
      />

      <div className="grid gap-5 rounded-3xl border border-navy-100 bg-white p-6 shadow-soft sm:p-8">
        <Field label={t.fullName} required>
          <input
            className="input"
            placeholder={t.fullNamePlaceholder}
            value={data.fullName}
            onChange={(e) => set("fullName", e.target.value)}
          />
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label={t.dob} required>
            <input
              type="date"
              className="input"
              value={data.dob}
              onChange={(e) => set("dob", e.target.value)}
            />
          </Field>
          <Field label={t.sex} required>
            <select
              className="input"
              value={data.biologicalSex}
              onChange={(e) =>
                set("biologicalSex", e.target.value as any)
              }
            >
              <option value="">{t.sexSelect}</option>
              <option value="male">{t.sexMale}</option>
              <option value="female">{t.sexFemale}</option>
              <option value="prefer_not_to_say">{t.sexPreferNot}</option>
            </select>
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label={t.phone} required>
            <input
              className="input"
              placeholder="(305) 555-1234"
              value={data.phone}
              onChange={(e) => set("phone", e.target.value)}
            />
          </Field>
          <Field label={t.email} required>
            <input
              className="input"
              type="email"
              placeholder={t.emailPlaceholder}
              value={data.email}
              onChange={(e) => set("email", e.target.value)}
            />
          </Field>
        </div>

        <Field label={t.shipping} required>
          <input
            className="input"
            placeholder={t.shippingPlaceholder}
            value={data.shippingAddress}
            onChange={(e) => set("shippingAddress", e.target.value)}
          />
        </Field>

        <Field label={t.state} required>
          <select
            className="input"
            value={data.state}
            onChange={(e) => set("state", e.target.value)}
          >
            <option value="">{t.stateSelect}</option>
            {STATES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <IntakeFooter
        back="/qualify"
        next="/qualify/program"
        nextDisabled={!valid}
      />
    </div>
  );
}
