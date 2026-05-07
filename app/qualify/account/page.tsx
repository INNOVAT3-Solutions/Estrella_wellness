"use client";

import { useIntake } from "@/lib/intake-store";
import { Field, StepHeading } from "@/components/intake/fields";
import { IntakeFooter } from "@/components/intake/progress";

const STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY","DC",
];

export default function AccountPage() {
  const { data, set } = useIntake();

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
        eyebrow="Section 1 of 8"
        title="Create your account"
        subtitle="Just the basics — these match your prescription and shipment to you."
      />

      <div className="grid gap-5 rounded-3xl border border-navy-100 bg-white p-6 shadow-soft sm:p-8">
        <Field label="Full name" required>
          <input
            className="input"
            placeholder="First and last name"
            value={data.fullName}
            onChange={(e) => set("fullName", e.target.value)}
          />
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Date of birth" required>
            <input
              type="date"
              className="input"
              value={data.dob}
              onChange={(e) => set("dob", e.target.value)}
            />
          </Field>
          <Field label="Biological sex" required>
            <select
              className="input"
              value={data.biologicalSex}
              onChange={(e) =>
                set("biologicalSex", e.target.value as any)
              }
            >
              <option value="">Select…</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="prefer_not_to_say">Prefer not to say</option>
            </select>
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Phone number" required>
            <input
              className="input"
              placeholder="(305) 555-1234"
              value={data.phone}
              onChange={(e) => set("phone", e.target.value)}
            />
          </Field>
          <Field label="Email" required>
            <input
              className="input"
              type="email"
              placeholder="you@email.com"
              value={data.email}
              onChange={(e) => set("email", e.target.value)}
            />
          </Field>
        </div>

        <Field label="Shipping address" required>
          <input
            className="input"
            placeholder="Street, apt, city, ZIP"
            value={data.shippingAddress}
            onChange={(e) => set("shippingAddress", e.target.value)}
          />
        </Field>

        <Field label="State of residence" required>
          <select
            className="input"
            value={data.state}
            onChange={(e) => set("state", e.target.value)}
          >
            <option value="">Select your state…</option>
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
