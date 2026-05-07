import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check, Star, Truck, ShieldCheck, Clock, Heart } from "lucide-react";
import { PROGRAMS, programBySlug } from "@/lib/programs";
import { TESTIMONIALS } from "@/lib/social-proof";
import { Reveal } from "@/components/ui/reveal";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { DicedImageGrid } from "@/components/ui/diced-image-grid";

export function generateStaticParams() {
  return PROGRAMS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = programBySlug(params.slug);
  if (!p) return { title: "Program · Estrella Wellness" };
  return {
    title: `${p.name} · Estrella Wellness`,
    description: p.description,
  };
}

const faqs = [
  {
    q: "How long until I see results?",
    a: "Outcomes vary. Most patients begin to notice changes within the first 4–8 weeks of consistent treatment, though timelines depend on the program and your individual response.",
  },
  {
    q: "Are labs required?",
    a: "Some programs require recent lab work for safety and dosing. Your provider will let you know after reviewing your intake.",
  },
  {
    q: "Are your providers licensed?",
    a: "Yes. Every patient is reviewed by a clinician credentialed in the state where you live.",
  },
  {
    q: "How is medication shipped?",
    a: "Medications are dispensed by a partner pharmacy and shipped discreetly to the address on your account, usually within 3–5 business days of approval.",
  },
  {
    q: "Is this subscription-based?",
    a: "Most programs are recurring subscriptions to support continuity of care. You can pause, change, or cancel through your dashboard at any time.",
  },
];

export default function ProgramPage({ params }: { params: { slug: string } }) {
  const program = programBySlug(params.slug);
  if (!program) notFound();
  const others = PROGRAMS.filter((p) => p.slug !== program.slug).slice(0, 3);

  // Surface this program's reviews first; fill remaining slots from the rest
  // so the three scrolling columns always have enough content.
  const matched = TESTIMONIALS.filter(
    (t) => t.program.toLowerCase() === program.shortName.toLowerCase()
  );
  const rest = TESTIMONIALS.filter(
    (t) => t.program.toLowerCase() !== program.shortName.toLowerCase()
  );
  const ordered = [...matched, ...rest].slice(0, 9);
  const cards = ordered.map((t) => ({
    text: t.quote,
    image: t.image,
    name: t.name,
    role: `${t.program} · ${t.city}`,
  }));
  const rCol1 = cards.slice(0, 3);
  const rCol2 = cards.slice(3, 6);
  const rCol3 = cards.slice(6, 9);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream-50">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-radial opacity-90" />
        <div className="pointer-events-none absolute -right-40 top-20 -z-10 h-[420px] w-[420px] rounded-full bg-sun-300/20 blur-3xl" />
        <div className="container-x grid gap-12 pt-12 pb-20 lg:grid-cols-12 lg:gap-10 lg:pt-20 lg:pb-28">
          <div className="lg:col-span-6 xl:col-span-7">
            <Reveal>
              <Link
                href="/#programs"
                className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy-500 hover:text-sun-600"
              >
                ← All programs
              </Link>
            </Reveal>
            <Reveal delay={60}>
              <div className="mt-4 pill">
                <span className="h-1.5 w-1.5 rounded-full bg-sun-500" />
                {program.shortName}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-5 font-display text-display-lg font-semibold text-navy-900">
                {program.headline}
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-700">
                {program.description}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex items-baseline gap-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-sun-600">
                  Starting at
                </div>
                <div className="font-display text-5xl font-semibold text-navy-900">
                  ${program.startingPrice}
                </div>
                <div className="text-lg text-navy-500">/month</div>
              </div>
              {program.priceNote && (
                <div className="mt-1 text-xs text-navy-500">{program.priceNote}</div>
              )}
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/qualify" className="btn-accent">
                  Get started
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/how-it-works" className="btn-secondary">
                  How it works
                </Link>
              </div>
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {program.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-sun-100 text-sun-600">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-sm text-navy-700">{b}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="relative lg:col-span-6 xl:col-span-5">
            <Reveal delay={140}>
              <DicedImageGrid slides={program.slides} />
            </Reveal>
            {program.ribbon && (
              <Reveal delay={220}>
                <div className="absolute left-5 top-5">
                  <span className="rounded-full bg-sun-500 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-soft">
                    {program.ribbon}
                  </span>
                </div>
              </Reveal>
            )}
            <Reveal delay={300}>
              <div className="mt-6 hidden w-60 rounded-2xl border border-navy-100 bg-white p-4 shadow-card sm:block animate-floaty">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-sun-500 text-sun-500"
                    />
                  ))}
                </div>
                <div className="mt-2 font-display text-base font-semibold leading-snug text-navy-900">
                  Reviewed by Estrella clinicians
                </div>
                <div className="mt-1 text-xs text-navy-500">
                  Avg. response under 24 hrs
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Treatment options */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="grid items-end gap-10 border-b border-navy-900/15 pb-12 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <div className="eyebrow">Treatment options</div>
              <h2 className="mt-5 font-display text-display-md font-light text-navy-900">
                What your provider
                <br />
                <span className="font-normal italic">may consider.</span>
              </h2>
            </Reveal>
            <Reveal delay={120} className="md:col-span-5">
              <p className="max-w-md text-[15px] leading-[1.7] text-navy-900/70 md:ml-auto md:text-right">
                Your specific protocol is determined by a licensed clinician
                based on your intake, medical history, labs, and goals. The
                compounds and pathways below are educational —{" "}
                <span className="italic">
                  not a recommendation or guarantee of outcome.
                </span>
              </p>
            </Reveal>
          </div>

          {/* Compound cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {program.compounds.map((c, i) => (
              <Reveal key={c.name} delay={(i % 2) * 80}>
                <article className="flex h-full flex-col rounded-3xl border border-navy-100 bg-cream-50 p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl font-semibold leading-tight text-navy-900">
                      {c.name}
                    </h3>
                    {c.format && (
                      <span className="shrink-0 rounded-full border border-navy-900/15 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-navy-700">
                        {c.format}
                      </span>
                    )}
                  </div>

                  {c.summary && (
                    <p className="mt-4 text-[15px] leading-[1.65] text-navy-700">
                      {c.summary}
                    </p>
                  )}

                  {c.supports && c.supports.length > 0 && (
                    <>
                      <div className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-navy-900/60">
                        Designed to support
                      </div>
                      <ul className="mt-3 space-y-2.5">
                        {c.supports.map((s) => (
                          <li
                            key={s}
                            className="flex items-start gap-3 text-sm leading-relaxed text-navy-800"
                          >
                            <span
                              aria-hidden
                              className="mt-2 h-1 w-3 shrink-0 bg-sun-500"
                            />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {c.consideration && (
                    <div className="mt-6 border-t border-navy-900/10 pt-4 text-xs leading-relaxed text-navy-700/80">
                      <span className="font-semibold uppercase tracking-[0.16em] text-navy-900/65">
                        Considerations ·
                      </span>{" "}
                      {c.consideration}
                    </div>
                  )}
                </article>
              </Reveal>
            ))}
          </div>

          {/* Pathways — for programs with multiple delivery routes */}
          {program.pathways && program.pathways.length > 0 && (
            <div className="mt-20">
              <Reveal>
                <div className="max-w-2xl">
                  <div className="eyebrow">Pathways</div>
                  <h3 className="mt-4 font-display text-3xl font-light leading-tight text-navy-900 sm:text-4xl">
                    How your protocol
                    <br />
                    <span className="font-normal italic">is shaped.</span>
                  </h3>
                </div>
              </Reveal>
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {program.pathways.map((p, i) => (
                  <Reveal key={p.name} delay={i * 80}>
                    <div className="flex h-full flex-col rounded-3xl border border-navy-100 bg-white p-7 shadow-soft">
                      <div className="font-display text-xl font-semibold text-navy-900">
                        {p.name}
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-navy-600">
                        {p.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {p.items.map((it) => (
                          <span
                            key={it}
                            className="rounded-full border border-navy-100 bg-cream-50 px-3 py-1 text-xs font-medium text-navy-700"
                          >
                            {it}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {/* Use cases — for single-protocol programs */}
          {program.useCases && program.useCases.length > 0 && (
            <div className="mt-20">
              <Reveal>
                <div className="max-w-2xl">
                  <div className="eyebrow">Considered when</div>
                  <h3 className="mt-4 font-display text-3xl font-light leading-tight text-navy-900 sm:text-4xl">
                    Patients who
                    <br />
                    <span className="font-normal italic">
                      consider this program.
                    </span>
                  </h3>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                  {program.useCases.map((u) => (
                    <li
                      key={u}
                      className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-cream-50/60 p-5 text-[15px] leading-relaxed text-navy-800"
                    >
                      <Check
                        className="mt-1 h-4 w-4 shrink-0 text-sun-600"
                        strokeWidth={2.5}
                      />
                      <span>{u}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          )}

          {/* Compliance footer */}
          <Reveal>
            <div className="mt-16 rounded-2xl border border-navy-900/10 bg-cream-50 p-6 sm:p-8">
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-navy-900/65">
                About this program
              </div>
              <p className="mt-3 max-w-3xl text-sm leading-[1.7] text-navy-700">
                Several treatments referenced on this page may be{" "}
                <span className="font-semibold text-navy-900">
                  compounded medications
                </span>{" "}
                — preparations made by a state-licensed compounding pharmacy
                under a clinician's prescription. Compounded combinations are{" "}
                <span className="font-semibold text-navy-900">
                  not FDA-approved
                </span>
                . Treatment is determined by a licensed clinician based on your
                intake, medical history, labs, and goals. The information here
                is educational and is not a recommendation, diagnosis, or
                guarantee of outcome. Discuss benefits, risks, and alternatives
                with your provider.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Your first month — vertical timeline */}
      <section className="section bg-cream-50">
        <div className="container-x">
          <div className="grid items-end gap-10 border-b border-navy-900/15 pb-12 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <div className="eyebrow">Your first month</div>
              <h2 className="mt-5 font-display text-display-md font-light text-navy-900">
                From intake
                <br />
                <span className="font-normal italic">to ongoing care.</span>
              </h2>
            </Reveal>
            <Reveal delay={120} className="md:col-span-5">
              <p className="max-w-md text-[15px] leading-[1.7] text-navy-900/70 md:ml-auto md:text-right">
                A clear, four-step path from your first questionnaire to
                continuous care. Pause, change, or cancel from your dashboard at
                any time.
              </p>
            </Reveal>
          </div>

          <div className="mt-14">
            <ol className="relative space-y-6 md:space-y-0">
              {[
                {
                  when: "Day 0",
                  duration: "≈ 10 minutes",
                  icon: Clock,
                  title: "Complete your intake",
                  body: "A secure, online medical questionnaire covering your goals, medical history, current medications, and any prior labs. Submit photos or documents if relevant.",
                  you: "Complete the intake at your own pace. Your information is encrypted and reviewed only by your care team.",
                  provider:
                    "We match you with a clinician licensed in your state.",
                },
                {
                  when: "Within 24 hours",
                  duration: "Provider review",
                  icon: ShieldCheck,
                  title: "Clinician review & decision",
                  body: "A licensed provider reviews your intake. If the program is appropriate, your protocol is determined. If more information or recent labs are needed, your provider will message you securely.",
                  you: "Watch for a secure message. Reply with any clarifying questions.",
                  provider:
                    "Reviews your file. Confirms eligibility, dosage, and any clinically relevant adjustments. May request labs.",
                },
                {
                  when: "Days 3–5",
                  duration: "After approval",
                  icon: Truck,
                  title: "Discreet shipment",
                  body: "Your medication is dispensed by a partner state-licensed compounding pharmacy and shipped in plain packaging to the address on file. Most patients receive their kit within 3–5 business days of approval.",
                  you: "Receive your shipment. Watch the onboarding video and review dosing instructions.",
                  provider:
                    "Sends an onboarding video, dosing instructions, and answers questions over secure messaging.",
                },
                {
                  when: "Weeks 2–4 +",
                  duration: "Ongoing care",
                  icon: Heart,
                  title: "Continuous, supervised care",
                  body: "Your provider stays involved — check-ins, refills, dose adjustments, and lab follow-up if needed. Everything is tracked in your dashboard. Pause, change, or cancel any time.",
                  you: "Message your provider as questions come up. Refill on schedule.",
                  provider:
                    "Conducts check-ins, manages refills, reviews labs, and updates your protocol as needed.",
                },
              ].map((s, i, arr) => {
                const Icon = s.icon;
                const isLast = i === arr.length - 1;
                return (
                  <Reveal key={s.title} delay={i * 90}>
                    <li className="relative grid gap-6 md:grid-cols-12 md:gap-10 md:py-10">
                      {/* Spine — desktop only */}
                      <div
                        aria-hidden
                        className="hidden md:col-span-3 md:block"
                      >
                        <div className="sticky top-28">
                          <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sun-700">
                            {s.when}
                          </div>
                          <div className="mt-1 text-xs text-navy-900/55">
                            {s.duration}
                          </div>
                        </div>
                      </div>

                      <div className="relative md:col-span-9">
                        {/* Vertical connector */}
                        {!isLast && (
                          <span
                            aria-hidden
                            className="absolute -bottom-6 left-5 top-12 hidden w-px bg-navy-900/15 md:block"
                          />
                        )}

                        {/* Mobile time pill */}
                        <div className="mb-4 inline-flex items-center gap-2 md:hidden">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sun-700">
                            {s.when}
                          </span>
                          <span className="text-[11px] text-navy-900/55">
                            · {s.duration}
                          </span>
                        </div>

                        <div className="flex items-start gap-5">
                          <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-navy-900 text-sun-300 ring-8 ring-cream-50">
                            <Icon className="h-5 w-5" strokeWidth={1.75} />
                          </div>

                          <div className="min-w-0 flex-1">
                            <h3 className="font-display text-2xl font-semibold leading-tight text-navy-900 sm:text-[28px]">
                              {s.title}
                            </h3>
                            <p className="mt-3 max-w-2xl text-[15px] leading-[1.7] text-navy-700">
                              {s.body}
                            </p>

                            <div className="mt-5 grid gap-4 sm:grid-cols-2">
                              <div className="rounded-xl border border-navy-100 bg-white/70 p-4">
                                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-navy-900/55">
                                  You
                                </div>
                                <p className="mt-2 text-[13.5px] leading-relaxed text-navy-800">
                                  {s.you}
                                </p>
                              </div>
                              <div className="rounded-xl border border-navy-100 bg-white/70 p-4">
                                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-navy-900/55">
                                  Your provider
                                </div>
                                <p className="mt-2 text-[13.5px] leading-relaxed text-navy-800">
                                  {s.provider}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </Reveal>
                );
              })}
            </ol>

            {/* Inline CTA */}
            <Reveal delay={200}>
              <div className="mt-16 flex flex-col items-start gap-5 rounded-3xl border border-navy-100 bg-white p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div className="max-w-xl">
                  <div className="font-display text-xl font-semibold text-navy-900 sm:text-2xl">
                    Not sure if this program is right for you?
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-navy-700">
                    Take 10 minutes to complete the intake. A licensed provider
                    reviews your file and replies, usually within 24 hours.
                    There's no charge until a provider determines you're a fit.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Link href="/qualify" className="btn-accent">
                    Start your intake
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/how-it-works" className="btn-link">
                    How it works
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Reviews — scrolling columns */}
      <section className="section bg-cream-100 paper-grain paper-grain-light">
        <div className="container-x">
          <div className="grid items-end gap-10 border-b border-navy-900/15 pb-14 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <div className="eyebrow">In their words</div>
              <h2 className="mt-5 font-display text-display-lg font-light text-navy-900">
                Patients on
                <br />
                <span className="font-normal italic">
                  this program.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={120} className="md:col-span-5 md:text-right">
              <p className="max-w-md text-[16px] leading-[1.65] text-navy-900/65 md:ml-auto">
                Selected accounts from patients on this and adjacent Estrella
                programs — published with consent, edited only for length.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[680px] overflow-hidden">
            <TestimonialsColumn testimonials={rCol1} duration={24} />
            <TestimonialsColumn
              testimonials={rCol2}
              className="hidden md:block"
              duration={32}
            />
            <TestimonialsColumn
              testimonials={rCol3}
              className="hidden lg:block"
              duration={28}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-cream-50">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="eyebrow">Common questions</div>
            <h2 className="mt-3 font-display text-display-md font-semibold text-navy-900">
              Everything you might be wondering.
            </h2>
            <p className="mt-4 text-navy-600">
              Have something specific? You can also message your provider once
              you complete the intake.
            </p>
          </Reveal>
          <div className="lg:col-span-8">
            <Reveal delay={100}>
              <div className="divide-y divide-navy-100 overflow-hidden rounded-3xl border border-navy-100 bg-white">
                {faqs.map((f) => (
                  <details key={f.q} className="group bg-white">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-[15px] font-semibold text-navy-900">
                      {f.q}
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-navy-50 text-navy-700 transition group-open:rotate-45 group-open:bg-sun-500 group-open:text-white">
                        +
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-sm leading-relaxed text-navy-600">
                      {f.a}
                    </div>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Program-specific CTA — editorial full-bleed */}
      <section className="bg-navy-900 text-cream-50">
        <div className="container-x py-24 sm:py-32">
          <div className="grid items-end gap-12 border-b border-cream-50/15 pb-14 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <div className="eyebrow-light">Ready when you are</div>
              <h3 className="mt-6 font-display text-display-lg font-light leading-[0.98] text-cream-50">
                See if {program.shortName.toLowerCase()} is
                <br />
                <span className="font-normal italic">right for you.</span>
              </h3>
            </Reveal>
            <Reveal delay={120} className="md:col-span-5 md:text-right">
              <p className="max-w-md text-[16px] leading-[1.7] text-cream-50/70 md:ml-auto">
                Ten minutes today. A licensed Estrella provider reads your file
                in full and replies, typically within twenty-four hours — with
                a recommendation, or a clear answer that treatment is not right
                for you yet.
              </p>
            </Reveal>
          </div>

          <Reveal delay={180}>
            <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6">
              <Link
                href="/qualify"
                className="inline-flex items-center justify-center gap-2 bg-cream-50 px-8 py-4 text-[12px] font-medium uppercase tracking-[0.2em] text-navy-900 transition-colors duration-300 hover:bg-cream-100"
              >
                Begin intake
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 border-b border-cream-50/40 pb-1 text-[12px] font-medium uppercase tracking-[0.18em] text-cream-50 transition hover:border-cream-50"
              >
                How it works
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related programs — match home grid editorial style */}
      <section className="section bg-cream-50 paper-grain paper-grain-light">
        <div className="container-x">
          <div className="grid items-end gap-10 border-b border-navy-900/15 pb-14 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <div className="eyebrow">More programs</div>
              <h2 className="mt-5 font-display text-display-lg font-light leading-[0.98] text-navy-900">
                Explore other
                <br />
                <span className="font-normal italic">
                  Estrella programs.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={120} className="md:col-span-5">
              <p className="max-w-md text-[16px] leading-[1.65] text-navy-900/65 md:ml-auto md:text-right">
                Each program built around a single objective. Browse the rest
                of the practice — every plan reviewed by the same medical
                group.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
            {others.map((p, i) => {
              const idx = PROGRAMS.findIndex((x) => x.slug === p.slug);
              return (
                <Reveal key={p.slug} delay={(i % 3) * 80}>
                  <Link
                    href={`/programs/${p.slug}`}
                    className="group relative flex h-full flex-col"
                  >
                    <div className="flex items-baseline justify-between">
                      <div className="flex items-baseline gap-3">
                        <span className="font-display text-sm font-light text-navy-900/45">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        {p.ribbon && (
                          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sun-700">
                            {p.ribbon}
                          </span>
                        )}
                      </div>
                      <span className="flex h-9 w-9 items-center justify-center text-navy-900/35 transition-colors duration-300 group-hover:text-navy-900">
                        <ArrowUpRight className="h-5 w-5" strokeWidth={1.5} />
                      </span>
                    </div>

                    <div className="relative mt-5 aspect-[4/3] w-full overflow-hidden bg-navy-100">
                      <Image
                        src={p.image}
                        alt={p.shortName}
                        fill
                        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                      />
                    </div>

                    <div className="mt-7 flex flex-1 flex-col">
                      <div className="font-display text-[28px] font-light leading-[1.05] text-navy-900">
                        {p.shortName}
                      </div>
                      <p className="mt-3 text-[15px] leading-relaxed text-navy-900/65">
                        {p.tagline}
                      </p>

                      <div className="mt-8 flex items-baseline justify-between border-t border-navy-900/15 pt-5">
                        <div>
                          <div className="text-[10px] uppercase tracking-[0.2em] text-navy-900/55">
                            From
                          </div>
                          <div className="mt-1 flex items-baseline gap-1">
                            <span className="font-display text-[28px] font-light text-navy-900">
                              ${p.startingPrice}
                            </span>
                            <span className="text-sm text-navy-900/55">
                              / month
                            </span>
                          </div>
                        </div>
                        <span className="text-[11px] uppercase tracking-[0.2em] text-navy-900/55 transition-colors group-hover:text-sun-700">
                          Read on →
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
