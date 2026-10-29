"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { useLang, pick } from "@/lib/i18n";

const COPY = {
  en: {
    title: "Helping Miami families get their health back.",
    body: [
      "Estrella Medical Centers has cared for more than 8,000 patients across Miami, with doctors who bring over 20 years of experience.",
      "Our first wellness program brings that same care to weight loss, so you can enjoy more good years with the people you love.",
    ],
    stats: [
      { n: "8,000+", l: "Patients at Estrella Medical Centers" },
      { n: "20+", l: "Years of experience across our doctors" },
    ],
    mainAlt: "A mother serving Sunday lunch to three generations of her family on a Miami patio by the pool",
    insetAlt: "An Estrella Medical Centers clinic in Miami",
  },
  es: {
    title: "Ayudamos a las familias de Miami a recuperar su salud.",
    body: [
      "Estrella Medical Centers ha atendido a más de 8,000 pacientes en Miami, con médicos que tienen más de 20 años de experiencia.",
      "Nuestro primer programa de bienestar lleva ese mismo cuidado a la pérdida de peso, para que disfrutes más años buenos con los que más quieres.",
    ],
    stats: [
      { n: "8,000+", l: "Pacientes en Estrella Medical Centers" },
      { n: "20+", l: "Años de experiencia de nuestros médicos" },
    ],
    mainAlt: "Una madre sirviendo el almuerzo del domingo a tres generaciones de su familia en un patio de Miami junto a la piscina",
    insetAlt: "Un centro de Estrella Medical Centers en Miami",
  },
};

export function LandingAbout() {
  const { lang } = useLang();
  const t = pick(lang, COPY);

  return (
    <section className="bg-white pb-24 pt-20 font-heading sm:pb-32 sm:pt-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Layered photographs */}
        <Reveal className="relative pb-16 pr-10 sm:pb-20 sm:pr-16 lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="/images/about-family-lunch.jpg"
              alt={t.mainAlt}
              fill
              quality={90}
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-[58%] overflow-hidden rounded-2xl shadow-[0_24px_60px_-20px_rgba(10,23,51,.45)] ring-[6px] ring-white">
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/estrella-building.png"
                alt={t.insetAlt}
                fill
                quality={90}
                sizes="(min-width: 1024px) 26vw, 52vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-6">
          <Reveal>
            <h2 className="max-w-xl text-balance font-heading text-[clamp(2rem,3.8vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.03em] text-navy-950">
              {t.title}
            </h2>
            <div className="mt-7 max-w-[34rem] space-y-4 text-[17px] leading-relaxed text-navy-900/70">
              {t.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-navy-900/10 pt-8">
              {t.stats.map((s) => (
                <div key={s.l}>
                  <dt className="text-[clamp(1.75rem,3vw,2.6rem)] font-extrabold tabular-nums tracking-[-0.03em] text-navy-950">
                    {s.n}
                  </dt>
                  <dd className="mt-1 text-[13px] leading-snug text-navy-900/70">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
