"use client";

import { Marquee } from "@/components/ui/marquee";
import { PRESS } from "@/lib/social-proof";
import { useLang, pick } from "@/lib/i18n";

const COPY = {
  en: { label: "As seen across South Florida" },
  es: { label: "Visto en todo el sur de la Florida" },
};

export function PressStrip() {
  const { lang } = useLang();
  const t = pick(lang, COPY);

  return (
    <section className="border-y border-navy-900/15 bg-cream-50 py-10">
      <div className="container-x">
        <div className="mb-7 flex items-center justify-center gap-3 text-navy-900/55">
          <span className="h-px w-10 bg-navy-900/25" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.32em]">
            {t.label}
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
