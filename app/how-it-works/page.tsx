import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section-2";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    title: "The intake",
    body: "A single secure questionnaire — about ten minutes. Goals, history, medications, allergies, prior treatments, the things that matter for prescribing. Saves automatically as you go.",
    duration: "≈ 10 minutes",
  },
  {
    title: "Provider review",
    body: "An Estrella clinician licensed in your state reads your file in full and writes back. For most patients the review is asynchronous; higher-acuity cases are routed to a video visit at no extra charge.",
    duration: "Within 24 hours",
  },
  {
    title: "Follow-up, where warranted",
    body: "Sometimes the right next step is a question, a clarifying message, or a recent lab panel. Anything additional we need is coordinated through your dashboard — no phone tag.",
    duration: "Same week",
  },
  {
    title: "Treatment plan",
    body: "If treatment is appropriate, your provider writes a prescription and sets a protocol. You will see exactly what is in the plan, how it is dosed, and how it is monitored.",
    duration: "Day of approval",
  },
  {
    title: "Pharmacy fulfillment",
    body: "Compounded prescriptions are dispensed by Greenstone Rx in Miami and shipped discreetly to the address on file. Tracking lives in your dashboard.",
    duration: "3 — 5 business days",
  },
  {
    title: "Continuing care",
    body: "Refills, secure messaging, lab tracking, and provider check-ins all sit in one private dashboard. Pause, change, or cancel from the same place at any time.",
    duration: "Ongoing",
  },
];

const reviewItems = [
  {
    label: "Goals & desired outcome",
    note: "What you are trying to change, and the timeline you have in mind.",
  },
  {
    label: "Personal & family history",
    note: "Conditions, prior diagnoses, and relevant inherited risk.",
  },
  {
    label: "Current medications & supplements",
    note: "Including dosage, frequency, and how long you have been on them.",
  },
  {
    label: "Allergies & known reactions",
    note: "Cross-checked against every compound a provider may consider.",
  },
  {
    label: "Lab values, when available",
    note: "Recent panels speed approval; we can also order labs when necessary.",
  },
  {
    label: "Lifestyle context",
    note: "Sleep, stress, training load, nutrition — the variables that shape response.",
  },
];

const decisions = [
  {
    verdict: "Approve",
    body: "When the picture is clear, your provider writes the prescription that day.",
  },
  {
    verdict: "Approve with monitoring",
    body: "A plan begins, with periodic labs, check-ins, or follow-up messages built in.",
  },
  {
    verdict: "Request more information",
    body: "A short message thread or a video visit to clarify history before a decision.",
  },
  {
    verdict: "Suggest a different program",
    body: "If a related program is a better fit, your provider will route you there.",
  },
  {
    verdict: "Decline",
    body: "When treatment is not right for you yet, your provider will say so plainly — and explain why.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <HeroSection
        slogan="The Process"
        title={
          <>
            From intake
            <br />
            to delivery,
            <br />
            <span className="font-normal italic">handled by clinicians.</span>
          </>
        }
        subtitle="Estrella is structured as a telehealth wellness clinic — every plan is read, decided, and signed by a licensed clinician before any prescription is written."
        callToAction={{
          text: "Begin intake",
          href: "/qualify",
        }}
        backgroundImage="/images/how-it-works-scene.png"
        contactInfo={{
          website: "Bilingual EN · ES",
          phone: "Reply within 24 hrs",
          address: "South Florida medical group",
        }}
      />

      {/* Six steps — editorial long-form list */}
      <section className="bg-cream-50 paper-grain paper-grain-light">
        <div className="container-x py-24 sm:py-32">
          <div className="grid items-end gap-10 border-b border-navy-900/15 pb-14 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <div className="eyebrow">The choreography</div>
              <h2 className="mt-5 font-display text-display-lg font-light leading-[0.98] text-navy-900">
                Six deliberate steps,
                <br />
                <span className="font-normal italic">none of them rushed.</span>
              </h2>
            </Reveal>
            <Reveal delay={120} className="md:col-span-5 md:text-right">
              <p className="max-w-md text-[16px] leading-[1.7] text-navy-900/70 md:ml-auto">
                Telehealth at the cadence of considered medicine — neither a
                checkout flow nor a waiting-room wait. Each step exists for a
                clinical reason.
              </p>
            </Reveal>
          </div>

          <ol className="mt-4 divide-y divide-navy-900/15">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <li className="grid grid-cols-12 items-baseline gap-6 py-12 sm:py-16">
                  <div className="col-span-12 sm:col-span-2">
                    <div className="font-display text-[44px] font-light leading-none text-navy-900/55 sm:text-[56px]">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-7">
                    <h3 className="font-display text-[28px] font-light leading-tight text-navy-900 sm:text-[32px]">
                      {s.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-[15px] leading-[1.75] text-navy-900/70">
                      {s.body}
                    </p>
                  </div>
                  <div className="col-span-12 sm:col-span-3 sm:text-right">
                    <div className="text-[10px] uppercase tracking-[0.24em] text-navy-900/55">
                      Duration
                    </div>
                    <div className="mt-2 font-display text-[18px] font-light text-navy-900">
                      {s.duration}
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* The review — replaces risk-tier section */}
      <section className="bg-cream-100 paper-grain paper-grain-light">
        <div className="container-x py-24 sm:py-32">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
              <div className="eyebrow">The review</div>
              <h2 className="mt-5 font-display text-display-lg font-light leading-[0.98] text-navy-900">
                Read front to back,
                <br />
                <span className="font-normal italic">
                  by a licensed clinician.
                </span>
              </h2>
              <p className="mt-7 max-w-md text-[16px] leading-[1.75] text-navy-900/70">
                Every Estrella intake is read end to end by a clinician
                licensed in your state — never auto-approved, never routed
                through a flowchart. The provider considers the full picture
                before deciding whether treatment makes sense, what to
                prescribe, how it should be dosed, and what to watch for.
              </p>
              <p className="mt-5 max-w-md text-[15px] leading-[1.75] text-navy-900/60">
                The aim is the standard our patients have always known at our
                South Florida clinics: clinical judgment, written plainly,
                without theatre.
              </p>
              <Link
                href="/qualify"
                className="mt-9 inline-flex items-center gap-2 border-b border-navy-900/30 pb-1 text-[13px] font-medium uppercase tracking-[0.2em] text-navy-900 transition-colors hover:border-navy-900"
              >
                Begin intake
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>

            <div className="lg:col-span-7">
              <div className="border-t border-navy-900/25 pt-10">
                <div className="text-[10px] uppercase tracking-[0.24em] text-navy-900/55">
                  Volume I — What a provider considers
                </div>
                <ol className="mt-2 divide-y divide-navy-900/15">
                  {reviewItems.map((item, i) => (
                    <Reveal key={item.label} delay={i * 50}>
                      <li className="grid grid-cols-12 items-baseline gap-4 py-7">
                        <div className="col-span-2 font-display text-[14px] font-light text-navy-900/45">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <div className="col-span-10">
                          <h4 className="font-display text-[20px] font-light leading-tight text-navy-900">
                            {item.label}
                          </h4>
                          <p className="mt-2 max-w-md text-[14px] leading-[1.7] text-navy-900/65">
                            {item.note}
                          </p>
                        </div>
                      </li>
                    </Reveal>
                  ))}
                </ol>
              </div>

              <div className="mt-16 border-t border-navy-900/25 pt-10">
                <div className="text-[10px] uppercase tracking-[0.24em] text-navy-900/55">
                  Volume II — What a provider may decide
                </div>
                <dl className="mt-2 divide-y divide-navy-900/15">
                  {decisions.map((d, i) => (
                    <Reveal key={d.verdict} delay={i * 50}>
                      <div className="grid grid-cols-12 items-baseline gap-4 py-6">
                        <dt className="col-span-12 font-display text-[18px] font-light leading-tight text-navy-900 sm:col-span-4">
                          {d.verdict}
                        </dt>
                        <dd className="col-span-12 max-w-lg text-[14px] leading-[1.7] text-navy-900/65 sm:col-span-8">
                          {d.body}
                        </dd>
                      </div>
                    </Reveal>
                  ))}
                </dl>
              </div>

              <Reveal>
                <p className="mt-12 max-w-xl border-t border-navy-900/15 pt-8 text-[13px] leading-[1.75] text-navy-900/55">
                  In every case, a real clinician makes the call. Compounded
                  medications, when prescribed, are dispensed by Greenstone Rx
                  in Miami in response to that prescription — and only that
                  prescription.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
