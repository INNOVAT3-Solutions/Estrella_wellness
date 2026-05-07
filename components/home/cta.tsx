import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-cream-50">
      <div className="grid lg:grid-cols-12">
        <div className="relative aspect-[4/5] w-full lg:col-span-5 lg:aspect-auto lg:min-h-[640px]">
          <Image
            src="/images/weight-transformation.png"
            alt="Estrella patient on a weight transformation journey"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-navy-900/30" />
        </div>

        <div className="relative flex items-center px-6 py-20 sm:px-10 lg:col-span-7 lg:px-20 lg:py-32">
          <Reveal>
            <div className="max-w-xl">
              <div className="eyebrow-light">An invitation</div>
              <h2 className="mt-6 font-display text-display-lg font-light leading-[1.0]">
                Ten minutes today.
                <br />
                <span className="font-normal italic">A plan tomorrow.</span>
              </h2>
              <p className="mt-7 max-w-lg text-[16px] leading-[1.75] text-cream-50/75">
                Begin the medical questionnaire. A licensed Estrella provider
                will read your file in full and reply, typically within
                twenty-four hours, with a recommendation — or a clear answer
                that treatment isn't right for you yet.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-6">
                <Link
                  href="/qualify"
                  className="inline-flex items-center justify-center gap-2 bg-cream-50 px-8 py-4 text-[13px] font-medium uppercase tracking-[0.2em] text-navy-900 transition-colors duration-300 hover:bg-cream-100"
                >
                  Begin intake
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/programs/weight-loss"
                  className="inline-flex items-center gap-2 border-b border-cream-50/40 pb-1 text-[13px] font-medium uppercase tracking-[0.18em] text-cream-50 transition hover:border-cream-50"
                >
                  Browse the programs
                </Link>
              </div>

              <ul className="mt-14 grid max-w-lg grid-cols-2 gap-x-8 gap-y-3 border-t border-cream-50/15 pt-7 text-[13px] text-cream-50/75">
                {[
                  "Free, discreet shipping",
                  "Cancel any time",
                  "A real provider review",
                  "The same Estrella doctors",
                ].map((b) => (
                  <li key={b} className="flex items-baseline gap-3">
                    <span className="h-px w-3 shrink-0 bg-sun-300" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
