import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROGRAMS } from "@/lib/programs";
import { Reveal } from "@/components/ui/reveal";

export function ProgramsGrid() {
  return (
    <section
      id="programs"
      className="section bg-cream-50 paper-grain paper-grain-light"
    >
      <div className="container-x relative">
        <div className="grid items-end gap-10 border-b border-navy-900/15 pb-14 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="eyebrow">The programs</div>
            <h2 className="mt-5 font-display text-display-lg font-light text-navy-900">
              Six practices.
              <br />
              <span className="font-normal italic">One medical group.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-5">
            <p className="max-w-md text-[16px] leading-[1.65] text-navy-900/65 md:ml-auto md:text-right">
              Each program is built around a single objective — and reviewed,
              from intake to refill, by a clinician licensed in your state.
            </p>
            <div className="mt-6 flex md:justify-end">
              <Link href="/qualify" className="btn-link">
                Find your program
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 80}>
              <Link
                href={`/programs/${p.slug}`}
                className="group relative flex h-full flex-col"
              >
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-sm font-light text-navy-900/45">
                      {String(i + 1).padStart(2, "0")}
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
                  <div className="font-display text-[30px] font-light leading-[1.05] text-navy-900">
                    {p.shortName}
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-navy-900/65">
                    {p.tagline}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-navy-900/55">
                    {p.compounds.slice(0, 3).map((c, idx) => (
                      <span key={c.name} className="flex items-center gap-3">
                        {idx > 0 && (
                          <span className="h-px w-2.5 bg-navy-900/25" />
                        )}
                        {c.name}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex items-baseline justify-between border-t border-navy-900/15 pt-5">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-navy-900/55">
                        From
                      </div>
                      <div className="mt-1 flex items-baseline gap-1">
                        <span className="font-display text-[32px] font-light text-navy-900">
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
          ))}
        </div>
      </div>
    </section>
  );
}
