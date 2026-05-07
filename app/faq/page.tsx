import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const groups = [
  {
    title: "Programs & treatment",
    blurb:
      "What to expect from intake to refill — timelines, labs, shipping, and how subscriptions are managed.",
    items: [
      {
        q: "How long until I see results?",
        a: "Outcomes vary by program and individual. Most patients begin to notice changes within the first four to eight weeks of consistent treatment. Your provider sets a realistic timeline based on your goals, history, and response.",
      },
      {
        q: "Are labs required?",
        a: "Some programs require recent lab work for safety and dosing. If your provider needs labs, they will order them — many can be drawn at a partner facility near you.",
      },
      {
        q: "How is medication shipped?",
        a: "Medications are dispensed by Greenstone Rx, our partner compounding pharmacy in Miami, and shipped discreetly to the address on your account, typically within three to five business days of approval.",
      },
      {
        q: "Is this subscription-based?",
        a: "Most programs are recurring subscriptions to support continuity of care. You can pause, change, or cancel from your dashboard at any time.",
      },
    ],
  },
  {
    title: "Clinicians & safety",
    blurb:
      "How review works, when a program isn't right, and the way we handle compounded medications.",
    items: [
      {
        q: "Are your providers licensed?",
        a: "Every patient is reviewed by a clinician licensed in the state where you live. We never write a prescription without a provider review.",
      },
      {
        q: "What happens if a program isn't right for me?",
        a: "Your provider may suggest a different program, request follow-up information, recommend a video visit, or decline to prescribe — your safety always comes first.",
      },
      {
        q: "What about compounded medications?",
        a: "Some Estrella programs use compounded medications. Compounded medications are not FDA-approved in the same manner as commercially manufactured drugs. You will review and acknowledge a compounded-medication disclosure before any plan begins.",
      },
    ],
  },
  {
    title: "Privacy & billing",
    blurb:
      "How your information is held, how you are charged, and how to use HSA or FSA funds.",
    items: [
      {
        q: "Is my health information private?",
        a: "Yes. Your medical record is encrypted, stored securely, and handled in accordance with HIPAA. We never sell your health information.",
      },
      {
        q: "How does billing work?",
        a: "You will see a clear price for your program before checkout. Recurring subscriptions are charged on the cadence specified in your plan and can be managed in your dashboard.",
      },
      {
        q: "Do you take insurance?",
        a: "Estrella Wellness programs are direct-pay. Many patients use HSA or FSA funds — we will provide a receipt at your request.",
      },
    ],
  },
];

const slug = (title: string) => title.replace(/\W+/g, "-").toLowerCase();

export default function FaqPage() {
  return (
    <>
      {/* Editorial masthead */}
      <section className="bg-cream-50 paper-grain paper-grain-light">
        <div className="container-x pt-20 pb-16 lg:pt-28 lg:pb-20">
          <div className="grid items-end gap-12 border-b border-navy-900/15 pb-14 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-navy-900/40" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-navy-900/70">
                  The Journal · Vol. I
                </span>
              </div>
              <h1 className="mt-7 font-display text-display-lg font-light leading-[0.98] text-navy-900">
                What you might wonder,
                <br />
                <span className="font-normal italic">before you begin.</span>
              </h1>
            </Reveal>
            <Reveal delay={120} className="md:col-span-5 md:text-right">
              <p className="max-w-md text-[16px] leading-[1.7] text-navy-900/70 md:ml-auto">
                A reading room of common questions about treatment, our
                clinicians, and the way our practice works. If something is
                still on your mind after this, your provider will answer it
                directly once your intake is complete.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-cream-50 paper-grain paper-grain-light pb-32">
        <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left rail — table of contents */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="text-[10px] uppercase tracking-[0.24em] text-navy-900/55">
                Contents
              </div>
              <ol className="mt-7 space-y-5">
                {groups.map((g, i) => (
                  <li key={g.title}>
                    <a
                      href={`#${slug(g.title)}`}
                      className="group flex items-baseline gap-4 text-navy-900 transition-colors hover:text-sun-700"
                    >
                      <span className="font-display text-[13px] font-light text-navy-900/45 group-hover:text-sun-700">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-[20px] font-light leading-[1.2]">
                        {g.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
              <div className="mt-12 border-t border-navy-900/15 pt-8">
                <div className="text-[10px] uppercase tracking-[0.24em] text-navy-900/55">
                  Still wondering
                </div>
                <p className="mt-4 text-[14px] leading-[1.7] text-navy-900/70">
                  After your intake, your provider becomes a direct messaging
                  contact. Most replies come back within twenty-four hours.
                </p>
                <Link href="/qualify" className="btn-primary mt-7">
                  Begin intake
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Right column — Q & A */}
          <div className="lg:col-span-8">
            {groups.map((g, gi) => (
              <Reveal key={g.title} delay={gi * 60}>
                <article
                  id={slug(g.title)}
                  className="scroll-mt-32 border-t border-navy-900/25 pt-14 first:border-t-0 first:pt-0"
                >
                  <header className="grid gap-6 md:grid-cols-12">
                    <div className="md:col-span-2">
                      <div className="font-display text-[14px] font-light uppercase tracking-[0.22em] text-navy-900/55">
                        Vol. {String(gi + 1).padStart(2, "0")}
                      </div>
                    </div>
                    <div className="md:col-span-10">
                      <h2 className="font-display text-[34px] font-light leading-[1.05] text-navy-900 sm:text-[40px]">
                        {g.title}
                      </h2>
                      <p className="mt-4 max-w-lg text-[15px] leading-[1.7] text-navy-900/65">
                        {g.blurb}
                      </p>
                    </div>
                  </header>

                  <ol className="mt-12 divide-y divide-navy-900/15">
                    {g.items.map((it, qi) => (
                      <li key={it.q}>
                        <details className="group py-2 [&[open]>summary>.qa-icon]:rotate-45">
                          <summary className="flex cursor-pointer list-none items-baseline gap-6 py-7 marker:hidden">
                            <span className="font-display text-[13px] font-light text-navy-900/45 sm:w-12">
                              {String(qi + 1).padStart(2, "0")}
                            </span>
                            <span className="flex-1 font-display text-[20px] font-light leading-[1.3] text-navy-900 sm:text-[22px]">
                              {it.q}
                            </span>
                            <span
                              aria-hidden
                              className="qa-icon flex h-6 w-6 flex-shrink-0 items-center justify-center text-navy-900/55 transition-transform duration-300"
                            >
                              <Plus className="h-5 w-5" strokeWidth={1.25} />
                            </span>
                          </summary>
                          <div className="grid gap-6 pb-8 sm:pl-[4.5rem] md:grid-cols-12">
                            <p className="text-[15px] leading-[1.75] text-navy-900/70 md:col-span-10">
                              {it.a}
                            </p>
                          </div>
                        </details>
                      </li>
                    ))}
                  </ol>
                </article>
              </Reveal>
            ))}

            {/* Closing colophon */}
            <Reveal>
              <div className="mt-24 border-t border-navy-900/15 pt-10">
                <div className="text-[10px] uppercase tracking-[0.24em] text-navy-900/55">
                  Colophon
                </div>
                <p className="mt-4 max-w-xl text-[14px] leading-[1.75] text-navy-900/60">
                  Set in Fraunces and Inter. Compiled by the Estrella clinical
                  team in Miami, Florida. This page is informational and is not
                  a substitute for medical advice. Treatment is at the
                  discretion of the licensed clinician.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
