import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Stethoscope,
  Lock,
} from "lucide-react";

const SECTIONS = [
  { title: "Account", body: "Contact and shipping details." },
  { title: "Your goals", body: "What you're hoping to achieve." },
  { title: "Health history", body: "Conditions, procedures, and family history." },
  { title: "Current medications", body: "Prescriptions and supplements." },
  { title: "Allergies", body: "Medication and seasonal." },
  { title: "Program details", body: "Specifics relevant to your protocol." },
  { title: "Lifestyle", body: "Sleep, activity, and other context." },
];

const NEXT_STEPS = [
  {
    when: "Within 24 hrs",
    title: "A clinician reviews your file",
    body: "If the program is appropriate, your provider determines a protocol. If not, you'll hear why — clearly and respectfully. No charge if you're not a fit.",
  },
  {
    when: "Days 3–5 after approval",
    title: "Discreet shipment",
    body: "Medication is dispensed by a partner state-licensed compounding pharmacy and shipped in plain packaging.",
  },
  {
    when: "Ongoing",
    title: "Continuous, supervised care",
    body: "Provider check-ins, refills, and any lab follow-ups live in your dashboard. Pause, change, or cancel any time.",
  },
];

const REASSURANCE = [
  { icon: Clock, title: "~10 minutes", body: "Progress saves automatically" },
  { icon: Lock, title: "Encrypted", body: "Stored securely · never sold" },
  { icon: Stethoscope, title: "Provider reviewed", body: "Every patient · every time" },
  { icon: ShieldCheck, title: "No charge", body: "Until a provider approves" },
];

export default function QualifyIntroPage() {
  return (
    <>
      {/* Editorial header */}
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <div className="eyebrow">Medical intake</div>
          <h1 className="mt-6 font-display text-display-lg font-light leading-[1.02] text-navy-900">
            Let's see what fits
            <span className="font-normal italic"> — and what doesn't.</span>
          </h1>
          <p className="mt-7 max-w-xl text-[17px] leading-[1.7] text-navy-900/75">
            About ten minutes. Your responses save automatically. A licensed
            Estrella provider reviews your file and replies — usually within 24
            hours. There's no charge until a provider determines you're a fit.
          </p>

          {/* Reassurance strip — hairline-bordered, not boxy */}
          <div className="mt-10 grid gap-x-10 gap-y-5 border-y border-navy-900/15 py-6 sm:grid-cols-2 lg:grid-cols-4">
            {REASSURANCE.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex items-start gap-3">
                <Icon
                  className="mt-1 h-4 w-4 shrink-0 text-sun-700"
                  strokeWidth={1.75}
                />
                <div>
                  <div className="text-[13px] font-semibold text-navy-900">
                    {title}
                  </div>
                  <div className="mt-0.5 text-[12px] text-navy-900/55">
                    {body}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link href="/qualify/account" className="btn-accent">
              Begin intake
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/how-it-works" className="btn-link">
              How it works
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-navy-100">
            <Image
              src="/images/form-fill-scene.png"
              alt="Patient completing the Estrella intake on a phone"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* What you'll be asked */}
      <div className="mt-24 grid gap-14 border-t border-navy-900/15 pt-16 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <div className="eyebrow">What you'll be asked</div>
          <h2 className="mt-5 font-display text-display-md font-light leading-[1.05] text-navy-900">
            Eight short
            <br />
            <span className="font-normal italic">sections.</span>
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-[1.7] text-navy-900/70">
            Plain language, never tricky. Every answer is reviewed by a licensed
            clinician credentialed in the state where you live.
          </p>
        </div>

        <ol className="lg:col-span-7 divide-y divide-navy-900/12 border-y border-navy-900/15">
          {SECTIONS.map((s, i) => (
            <li
              key={s.title}
              className="flex items-baseline gap-6 py-5 sm:gap-10 sm:py-6"
            >
              <span className="font-display text-sm font-light text-navy-900/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <div className="font-display text-lg font-medium text-navy-900 sm:text-xl">
                  {s.title}
                </div>
                <div className="mt-1 text-[13.5px] leading-relaxed text-navy-900/65 sm:text-sm">
                  {s.body}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* What happens next */}
      <div className="mt-24 grid gap-14 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <div className="eyebrow">What happens next</div>
          <h2 className="mt-5 font-display text-display-md font-light leading-[1.05] text-navy-900">
            You submit.
            <br />
            <span className="font-normal italic">We read carefully.</span>
          </h2>
        </div>
        <div className="lg:col-span-7">
          <ol>
            {NEXT_STEPS.map((s, i) => (
              <li
                key={s.title}
                className={`grid grid-cols-12 gap-6 py-7 sm:gap-10 ${
                  i === 0
                    ? "border-t border-navy-900/15"
                    : "border-t border-navy-900/12"
                }`}
              >
                <div className="col-span-12 text-[10px] font-semibold uppercase tracking-[0.22em] text-sun-700 sm:col-span-3">
                  {s.when}
                </div>
                <div className="col-span-12 sm:col-span-9">
                  <div className="font-display text-lg font-medium text-navy-900 sm:text-xl">
                    {s.title}
                  </div>
                  <p className="mt-2 max-w-xl text-[14.5px] leading-[1.7] text-navy-900/70">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 flex flex-col items-start gap-5 border-t border-navy-900/15 pt-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <div className="font-display text-2xl font-medium leading-tight text-navy-900 sm:text-3xl">
            Ready when you are.
          </div>
          <p className="mt-2 text-[14.5px] leading-relaxed text-navy-900/70">
            About ten minutes. No charge until a provider approves your file.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <Link href="/qualify/account" className="btn-accent">
            Begin intake
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/how-it-works" className="btn-link">
            How it works
          </Link>
        </div>
      </div>

      {/* Compliance footer */}
      <div className="mt-14 border-t border-navy-900/15 pt-8">
        <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-navy-900/55">
          Important
        </div>
        <p className="mt-3 max-w-3xl text-[13px] leading-[1.75] text-navy-900/65">
          By beginning your intake, you acknowledge that telehealth services are
          subject to the regulations of the state where you live. Several
          treatments offered by Estrella may be{" "}
          <span className="font-semibold text-navy-900/85">
            compounded medications
          </span>{" "}
          — preparations made by a state-licensed compounding pharmacy under a
          clinician's prescription. Compounded combinations are not FDA-approved.
          Treatment is at the discretion of a licensed clinician based on your
          intake, medical history, labs, and goals. The information here is
          educational and is not a recommendation, diagnosis, or guarantee of
          outcome.
        </p>
      </div>
    </>
  );
}
