"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { WEIGHT_LOSS, fmtPrice, programCopy } from "@/lib/programs";
import { Reveal } from "@/components/ui/reveal";
import { useLang, pick } from "@/lib/i18n";

const COPY = {
  en: {
    eyebrow: "The program",
    title1: "One focus.",
    title2: "Weight loss, done right.",
    lead: "A single, complete wellness program built and supervised by our medical group — everything you need in one monthly price.",
    ribbon: "Limited-time offer",
    startingLabel: "Special price",
    regularLabel: "Regularly",
    perMonth: "/ month",
    cta: "Start my consultation",
    details: "Program details",
    includesLabel: "Included in your monthly price",
  },
  es: {
    eyebrow: "El programa",
    title1: "Un solo enfoque.",
    title2: "Pérdida de peso, bien hecha.",
    lead: "Un solo programa de bienestar completo, creado y supervisado por nuestro grupo médico — todo lo que necesitas en un solo precio mensual.",
    ribbon: "Oferta por tiempo limitado",
    startingLabel: "Precio especial",
    regularLabel: "Normalmente",
    perMonth: "/ mes",
    cta: "Iniciar mi consulta",
    details: "Detalles del programa",
    includesLabel: "Incluido en tu precio mensual",
  },
};

export function ProgramsGrid() {
  const { lang } = useLang();
  const t = pick(lang, COPY);
  const wl = programCopy(lang);

  return (
    <section
      id="programs"
      className="section bg-cream-100 paper-grain paper-grain-light"
    >
      <div className="container-x relative">
        <div className="grid items-end gap-10 border-b border-navy-900/15 pb-14 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="eyebrow">{t.eyebrow}</div>
            <h2 className="mt-5 font-display text-display-lg font-light text-navy-900">
              {t.title1}
              <br />
              <span className="font-normal italic">{t.title2}</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-5">
            <p className="max-w-md text-[16px] leading-[1.65] text-navy-900/65 md:ml-auto md:text-right">
              {t.lead}
            </p>
          </Reveal>
        </div>

        {/* Featured — the GLP-1 weight loss program */}
        <Reveal delay={80}>
          <div className="mt-16 grid gap-0 border border-navy-900/15 bg-cream-50 lg:grid-cols-12">
            <div className="relative aspect-[4/3] w-full lg:col-span-6 lg:aspect-auto lg:min-h-[520px]">
              <Image
                src={WEIGHT_LOSS.image}
                alt={wl.name}
                fill
                className="object-cover"
              />
              <div className="absolute left-5 top-5 bg-sun-700 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-cream-50">
                {t.ribbon}
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-12 lg:col-span-6">
              <h3 className="font-display text-[34px] font-light leading-[1.05] text-navy-900 sm:text-[42px]">
                {wl.name}
              </h3>
              <p className="mt-4 max-w-lg text-[15px] leading-[1.7] text-navy-900/70">
                {wl.description}
              </p>

              <div className="mt-7">
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-navy-900/55">
                  {t.includesLabel}
                </div>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {wl.includes.map((inc) => (
                    <li key={inc.title} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-sun-700/15 text-sun-700">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className="text-[14px] leading-snug text-navy-900/80">
                        {inc.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap items-end justify-between gap-6 border-t border-navy-900/15 pt-6">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-sun-700">
                    {t.startingLabel}
                  </div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="font-display text-[40px] font-light text-navy-900">
                      {fmtPrice(WEIGHT_LOSS.price)}
                    </span>
                    <span className="text-sm text-navy-900/55">
                      {t.perMonth}
                    </span>
                  </div>
                  <div className="text-[12px] text-navy-900/50">
                    {t.regularLabel}{" "}
                    <span className="line-through">
                      {fmtPrice(WEIGHT_LOSS.regularPrice)}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                  <Link href="/qualify" className="btn-accent">
                    {t.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/programs/weight-loss"
                    className="btn-link justify-center"
                  >
                    {t.details}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
