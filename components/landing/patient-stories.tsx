"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { EstrellaStar } from "@/components/ui/estrella-star";
import { STORIES } from "@/lib/social-proof";
import { useLang, pick } from "@/lib/i18n";
import { cn } from "@/lib/cn";

const COPY = {
  en: {
    title: "What the program feels like",
    region: "Stories, swipe to see more",
    goTo: "Show story",
    disclosure:
      "Illustrative stories based on the program experience. They are not reviews from actual patients, and the people pictured are not patients. Individual results vary.",
  },
  es: {
    title: "Cómo se vive el programa",
    region: "Historias, desliza para ver más",
    goTo: "Ver historia",
    disclosure:
      "Historias ilustrativas basadas en la experiencia del programa. No son reseñas de pacientes reales y las personas en las fotos no son pacientes. Los resultados varían según cada persona.",
  },
};

export function PatientStories() {
  const { lang } = useLang();
  const t = pick(lang, COPY);
  const [featured, ...rest] = STORIES;
  const track = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  // Phones: the stories sit in a swipe row; keep the dots in step with it.
  const cards = () =>
    Array.from(track.current?.querySelectorAll<HTMLElement>("figure") ?? []);
  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    const offsets = cards().map((c) =>
      Math.abs(c.offsetLeft - el.offsetLeft - el.scrollLeft)
    );
    setCurrent(offsets.indexOf(Math.min(...offsets)));
  };
  const goTo = (i: number) => {
    const el = track.current;
    const card = cards()[i];
    if (el && card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  return (
    <section
      aria-labelledby="stories-title"
      className="bg-white py-20 font-heading sm:py-28"
    >
      <div className="container-x">
        <Reveal>
          <h2
            id="stories-title"
            className="text-balance font-heading text-[clamp(2rem,3.8vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.03em] text-navy-950"
          >
            {t.title}
          </h2>
          <p
            id="stories-disclosure"
            className="mt-4 max-w-2xl text-[14px] leading-relaxed text-navy-900/70"
          >
            {t.disclosure}
          </p>
        </Reveal>

        <Reveal>
          <div
            ref={track}
            onScroll={onScroll}
            role="region"
            aria-label={t.region}
            tabIndex={0}
            className="-mx-5 mt-12 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sun-500 sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:grid lg:snap-none lg:grid-cols-12 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
          >
            {/* Featured story */}
            <div className="flex w-[86%] shrink-0 snap-start sm:w-[70%] lg:col-span-7 lg:w-auto">
              <figure
                aria-describedby="stories-disclosure"
                className="relative flex w-full flex-col overflow-hidden rounded-3xl bg-navy-950 p-7 text-white sm:p-12"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(60% 80% at 100% 0%, rgba(200,146,56,.22) 0%, rgba(200,146,56,0) 70%)",
                  }}
                />
                <EstrellaStar
                  tone="gold"
                  className="absolute -right-10 -top-8 w-56 opacity-[0.08] sm:w-72"
                  sizes="288px"
                />

                <div className="relative flex-1">
                  <span
                    aria-hidden
                    className="block h-10 text-[96px] font-extrabold leading-[0.8] text-sun-400"
                  >
                    “
                  </span>
                  <blockquote className="mt-4 text-balance text-[clamp(1.5rem,2.6vw,2.25rem)] font-semibold leading-[1.25] tracking-[-0.02em]">
                    {featured.quote[lang]}
                  </blockquote>
                </div>

                <figcaption className="relative mt-10 flex items-center gap-4 border-t border-white/10 pt-6">
                  <Image
                    src={featured.image}
                    alt=""
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full object-cover ring-2 ring-sun-400/70 ring-offset-2 ring-offset-navy-950"
                  />
                  <div>
                    <div className="text-[17px] font-bold">{featured.name}</div>
                    <div className="text-[14px] text-white/75">
                      {featured.city}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>

            <div className="contents lg:col-span-5 lg:grid lg:gap-4">
              {rest.map((r) => (
                <div key={r.id} className="flex w-[86%] shrink-0 snap-start sm:w-[70%] lg:w-auto">
                  <figure
                    aria-describedby="stories-disclosure"
                    className="flex w-full flex-col rounded-3xl bg-mist-50 p-7 ring-1 ring-inset ring-navy-900/[0.05]"
                  >
                    <EstrellaStar className="w-7" />
                    <blockquote className="mt-5 text-[17px] font-medium leading-relaxed text-navy-950/85">
                      “{r.quote[lang]}”
                    </blockquote>
                    <figcaption className="mt-auto flex items-center gap-3 pt-6">
                      <Image
                        src={r.image}
                        alt=""
                        width={44}
                        height={44}
                        className="h-11 w-11 rounded-full object-cover"
                      />
                      <div className="text-[14px] leading-tight">
                        <div className="font-bold text-navy-950">{r.name}</div>
                        <div className="text-navy-900/70">{r.city}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-1 lg:hidden">
            {STORIES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`${t.goTo} ${i + 1}`}
                aria-current={current === i ? "true" : undefined}
                className="flex h-6 w-6 items-center justify-center"
              >
                <span
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    current === i ? "w-6 bg-navy-950" : "w-2 bg-navy-900/25"
                  )}
                />
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
