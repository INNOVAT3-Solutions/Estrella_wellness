import { Marquee } from "@/components/ui/marquee";
import { PRESS } from "@/lib/social-proof";

export function PressStrip() {
  return (
    <section className="border-y border-navy-900/15 bg-cream-50 py-10">
      <div className="container-x">
        <div className="mb-7 flex items-center justify-center gap-3 text-navy-900/55">
          <span className="h-px w-10 bg-navy-900/25" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.32em]">
            As seen across South Florida
          </span>
          <span className="h-px w-10 bg-navy-900/25" />
        </div>
        <Marquee>
          {PRESS.map((p) => (
            <span
              key={p}
              className="whitespace-nowrap font-display text-2xl font-light text-navy-900/35 transition-colors hover:text-navy-900 sm:text-[28px]"
            >
              {p}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
