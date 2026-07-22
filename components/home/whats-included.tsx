"use client";

import Link from "next/link";
import { ArrowRight, Stethoscope, Syringe, Salad, Dumbbell } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { WEIGHT_LOSS, fmtPrice, programCopy } from "@/lib/programs";
import { useLang, pick } from "@/lib/i18n";

const ICONS = [Stethoscope, Syringe, Salad, Dumbbell];

const COPY = {
  en: {
    eyebrow: "What's included",
    title1: "One consultation.",
    title2: "Everything you need.",
    lead: "Your monthly price covers the full program — nothing sold separately, no surprise add-ons.",
    priceLabel: "Limited-time offer",
    regularLabel: "Regularly",
    perMonth: "/month",
    note: "Billed monthly · consultation included · cancel anytime",
    cta: "Start my consultation",
    learnMore: "Learn about the program",
  },
  es: {
    eyebrow: "Qué incluye",
    title1: "Una consulta.",
    title2: "Todo lo que necesitas.",
    lead: "Tu precio mensual cubre el programa completo — nada se vende por separado, sin cargos sorpresa.",
    priceLabel: "Oferta por tiempo limitado",
    regularLabel: "Normalmente",
    perMonth: "/mes",
    note: "Facturación mensual · consulta incluida · cancela cuando quieras",
    cta: "Iniciar mi consulta",
    learnMore: "Conoce el programa",
  },
};

export function WhatsIncluded() {
  const { lang } = useLang();
  const t = pick(lang, COPY);
  const wl = programCopy(lang);

  return (
    <section id="included" className="section bg-cream-50 paper-grain paper-grain-light">
      <div className="container-x">
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

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          {/* The four inclusions */}
          <div className="lg:col-span-8">
            <ol className="divide-y divide-navy-900/15 border-y border-navy-900/15">
              {wl.includes.map((item, i) => {
                const Icon = ICONS[i % ICONS.length];
                return (
                  <Reveal key={item.title} delay={i * 80}>
                    <li className="grid grid-cols-12 items-start gap-6 py-8">
                      <div className="col-span-2 sm:col-span-1">
                        <span className="flex h-11 w-11 items-center justify-center bg-navy-900 text-sun-300">
                          <Icon className="h-5 w-5" strokeWidth={1.75} />
                        </span>
                      </div>
                      <div className="col-span-10 sm:col-span-11 sm:pl-4">
                        <div className="flex items-baseline gap-4">
                          <span className="font-display text-sm font-light text-navy-900/40">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <h3 className="font-display text-[24px] font-light leading-tight text-navy-900 sm:text-[28px]">
                            {item.title}
                          </h3>
                        </div>
                        <p className="mt-2 max-w-xl text-[15px] leading-[1.7] text-navy-900/65">
                          {item.body}
                        </p>
                      </div>
                    </li>
                  </Reveal>
                );
              })}
            </ol>
          </div>

          {/* Price card */}
          <Reveal delay={160} className="lg:col-span-4">
            <div className="sticky top-40 border border-navy-900/15 bg-cream-100 p-8">
              <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-sun-700">
                {t.priceLabel}
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-[52px] font-light leading-none text-navy-900">
                  {fmtPrice(WEIGHT_LOSS.price)}
                </span>
                <span className="text-[15px] text-navy-900/60">
                  {t.perMonth}
                </span>
              </div>
              <div className="mt-2 text-[13px] text-navy-900/55">
                {t.regularLabel}{" "}
                <span className="line-through">
                  {fmtPrice(WEIGHT_LOSS.regularPrice)}
                  {t.perMonth}
                </span>
              </div>
              <div className="mt-5 border-t border-navy-900/15 pt-5 text-[12px] uppercase tracking-[0.16em] leading-[2] text-navy-900/60">
                {t.note}
              </div>
              <Link href="/qualify" className="btn-accent mt-7 w-full">
                {t.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/programs/weight-loss"
                className="btn-link mt-5 justify-center w-full"
              >
                {t.learnMore}
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
