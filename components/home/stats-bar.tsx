import { Reveal } from "@/components/ui/reveal";
import { STATS } from "@/lib/social-proof";

export function StatsBar() {
  return (
    <section className="bg-cream-100 paper-grain paper-grain-light py-20 sm:py-28">
      <div className="container-x">
        <div className="grid grid-cols-1 divide-y divide-navy-900/15 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="px-0 py-10 sm:px-10 sm:py-2">
                <div className="font-display text-[56px] font-light leading-[0.95] text-navy-900 sm:text-[68px]">
                  {s.number}
                </div>
                <div className="mt-4 max-w-[15rem] text-[13px] leading-relaxed text-navy-900/65">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
