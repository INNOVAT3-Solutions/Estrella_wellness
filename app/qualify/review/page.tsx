"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  CheckCircle2,
  AlertTriangle,
  Stethoscope,
  ArrowRight,
} from "lucide-react";
import { useIntake, computeRiskTier } from "@/lib/intake-store";
import { PROGRAMS, ProgramSlug } from "@/lib/programs";

function recommendProgram(goals: string[]): ProgramSlug {
  if (
    goals.includes("Weight loss") ||
    goals.includes("Appetite control") ||
    goals.includes("Energy")
  )
    return "weight-loss";
  if (goals.includes("Recovery") || goals.includes("Athletic recovery"))
    return "recovery";
  if (
    goals.includes("Hormone optimization") ||
    goals.includes("Muscle preservation")
  )
    return "hormone-optimization";
  if (goals.includes("Sexual performance") || goals.includes("Libido"))
    return "sexual-health";
  if (
    goals.includes("Cognitive performance") ||
    goals.includes("Healthy aging")
  )
    return "longevity";
  return "performance";
}

export default function ReviewPage() {
  const { data, reset } = useIntake();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // simulate submission
    const t = setTimeout(() => setSubmitted(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const { tier, reasons } = useMemo(() => computeRiskTier(data), [data]);
  const recommendedSlug = recommendProgram(data.goals);
  const recommended = PROGRAMS.find((p) => p.slug === recommendedSlug)!;

  if (!submitted) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <div className="mt-10 h-12 w-12 animate-spin rounded-full border-4 border-navy-100 border-t-sun-500" />
        <div className="mt-6 font-display text-2xl text-navy-900">
          Submitting your intake…
        </div>
        <p className="mt-2 text-sm text-navy-600">
          Encrypting your information and routing it to our clinical team.
        </p>
      </div>
    );
  }

  const tierMeta = {
    low: {
      label: "Async approval",
      color: "bg-green-100 text-green-800",
      icon: CheckCircle2,
      headline: "You look like a great fit for async review.",
      body: "A licensed provider will review your file and respond — typically within 24 hours.",
    },
    moderate: {
      label: "Provider follow-up",
      color: "bg-sun-100 text-sun-700",
      icon: Stethoscope,
      headline: "Your provider may message you for a few clarifications.",
      body: "Based on your responses, your provider will follow up via secure messaging before approving a plan.",
    },
    high: {
      label: "Telemedicine visit required",
      color: "bg-rose-100 text-rose-800",
      icon: AlertTriangle,
      headline: "Let's schedule a video visit.",
      body: "A few items in your intake mean we'll want to speak with you directly before any prescription is written.",
    },
  }[tier];

  const Icon = tierMeta.icon;

  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-[2rem] border border-navy-100 bg-white p-8 shadow-card sm:p-10">
        <div className="flex items-center gap-3">
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${tierMeta.color}`}>
            {tierMeta.label}
          </span>
          <span className="text-xs text-navy-500">
            File ID #{Math.floor(Math.random() * 9000 + 1000)}
          </span>
        </div>
        <h1 className="mt-5 font-display text-3xl text-navy-900 sm:text-4xl">
          Thanks, {data.fullName.split(" ")[0] || "there"} — your intake is in.
        </h1>
        <p className="mt-3 text-navy-600">{tierMeta.headline}</p>
        <p className="mt-1 text-sm text-navy-500">{tierMeta.body}</p>

        {reasons.length > 0 && (
          <div className="mt-6 rounded-2xl border border-navy-100 bg-sand-50 p-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-navy-500">
              Notes for your provider
            </div>
            <ul className="mt-2 space-y-1 text-sm text-navy-700">
              {reasons.map((r) => (
                <li key={r} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sun-500" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8 grid gap-4 rounded-2xl border border-navy-100 p-5 sm:grid-cols-3">
          {[
            ["Provider review", "Within 24 hrs"],
            ["Possible follow-up", "Messaging / video"],
            ["Pharmacy fulfillment", "3–5 business days"],
          ].map(([t, v]) => (
            <div key={t}>
              <div className="text-xs uppercase tracking-wider text-navy-500">
                {t}
              </div>
              <div className="mt-1 font-semibold text-navy-900">{v}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-[2rem] border border-navy-100 bg-white p-8 shadow-card sm:p-10">
        <div className="text-xs font-semibold uppercase tracking-wider text-sun-600">
          Suggested program
        </div>
        <h2 className="mt-2 font-display text-2xl text-navy-900">
          {recommended.headline}
        </h2>
        <p className="mt-2 text-navy-600">{recommended.tagline}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {recommended.compounds.slice(0, 4).map((c) => (
            <span
              key={c.name}
              className="rounded-full border border-navy-100 bg-sand-50 px-3 py-1 text-xs font-medium text-navy-700"
            >
              {c.name}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/programs/${recommended.slug}`}
            className="btn-secondary text-sm"
          >
            See program details
          </Link>
          <Link href="/dashboard" className="btn-primary text-sm">
            Open my dashboard
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <p className="mt-6 text-xs text-navy-500">
          Final treatment is at the discretion of the licensed clinician
          assigned to your case. Suggestions are not a prescription.
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between text-sm">
        <Link
          href="/qualify/account"
          className="font-medium text-navy-700 hover:text-sun-600"
          onClick={(e) => {
            if (
              !confirm(
                "Editing your intake will keep your responses but return you to the start. Continue?"
              )
            ) {
              e.preventDefault();
            }
          }}
        >
          ← Edit my intake
        </Link>
        <button
          type="button"
          onClick={() => {
            if (
              confirm(
                "Reset your intake? All saved responses on this device will be cleared."
              )
            ) {
              reset();
              window.location.href = "/qualify";
            }
          }}
          className="text-navy-500 hover:text-rose-600"
        >
          Reset intake
        </button>
      </div>
    </div>
  );
}
