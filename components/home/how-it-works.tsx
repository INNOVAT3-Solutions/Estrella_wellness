import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    title: "The intake",
    body: "A single questionnaire — about ten minutes — covering history, goals, and the specifics that matter for prescribing.",
    time: "≈ 10 minutes",
  },
  {
    title: "The review",
    body: "An Estrella clinician licensed in your state reads your file and writes back. Not a flowchart. Not a chatbot.",
    time: "Within 24 hours",
  },
  {
    title: "The plan",
    body: "If treatment makes sense, your provider prescribes it. Compounded medications are dispensed by a partner pharmacy.",
    time: "1 — 2 days",
  },
  {
    title: "The follow-through",
    body: "Refills, messaging, lab tracking, and check-ins live in a single private dashboard. Your provider stays your provider.",
    time: "Ongoing",
  },
];

export function HowItWorks() {
  return (
    <section className="section relative overflow-hidden bg-navy-900 text-cream-50">
      <div className="container-x relative">
        <div className="grid items-end gap-10 border-b border-cream-50/15 pb-14 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="eyebrow-light">The process</div>
            <h2 className="mt-5 font-display text-display-lg font-light text-cream-50">
              A clinic visit,
              <br />
              <span className="font-normal italic">unhurried.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-5">
            <p className="max-w-md text-[16px] leading-[1.65] text-cream-50/70 md:ml-auto md:text-right">
              Four deliberate steps, conducted at the pace of considered
              medicine — not the speed of a checkout flow.
            </p>
            <div className="mt-6 flex md:justify-end">
              <Link
                href="/qualify"
                className="inline-flex items-center gap-2 border-b border-cream-50/40 pb-1 text-[13px] font-medium uppercase tracking-[0.16em] text-cream-50 hover:border-cream-50"
              >
                Begin intake
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>

        <ol className="mt-4 divide-y divide-cream-50/15">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <li className="grid grid-cols-12 items-baseline gap-6 py-10 sm:py-14">
                <div className="col-span-12 sm:col-span-2">
                  <div className="font-display text-[44px] font-light leading-none text-cream-50/55 sm:text-[56px]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <h3 className="font-display text-[28px] font-light leading-tight text-cream-50 sm:text-[34px]">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] leading-[1.7] text-cream-50/70">
                    {s.body}
                  </p>
                </div>
                <div className="col-span-12 sm:col-span-4 sm:text-right">
                  <div className="text-[10px] uppercase tracking-[0.24em] text-cream-50/45">
                    Duration
                  </div>
                  <div className="mt-2 font-display text-[18px] font-light text-cream-50/85">
                    {s.time}
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
