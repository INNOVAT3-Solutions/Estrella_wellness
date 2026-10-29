"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, CalendarCheck, ShieldCheck } from "lucide-react";
import { WEIGHT_LOSS, fmtPrice } from "@/lib/programs";
import { useLang, pick } from "@/lib/i18n";

const SAVINGS = fmtPrice(WEIGHT_LOSS.regularPrice - WEIGHT_LOSS.price).replace(
  ".00",
  ""
);

const COPY = {
  en: {
    badge: "New doctor-led weight loss program",
    line1: "Get your life back,",
    line2: "enjoy your family.",
    lead: "Doctor-led GLP-1 weight loss with weekly care at Estrella clinics. Open to everyone, no membership needed.",
    includes: [
      "Doctor consultation & blood work",
      "Weekly GLP-1 injections",
      "Personal nutrition plan",
      "Guided exercise program",
    ],
    offerTag: "Limited-time price",
    save: `Save ${SAVINGS}/mo`,
    perMonth: "/mo",
    regular: "reg.",
    cta: "Book consultation",
    reassure: "Billed monthly. Full refund if your doctor finds the program isn't right for you. Cancel anytime.",
    proof: [
      { n: "8,000+", l: "Estrella patients" },
      { n: "20+", l: "years of doctor experience" },
    ],
    chipTitle: "Checked every week",
    chipBody: "Weight, vitals and dose, by your doctor",
    imageAlt: "A grandmother laughing as she runs across a Coral Gables lawn with her two grandchildren",
  },
  es: {
    badge: "Nuevo programa de pérdida de peso con médicos",
    line1: "Recupera tu vida,",
    line2: "disfruta a tu familia.",
    lead: "Pérdida de peso con GLP-1 dirigida por médicos, con cuidado semanal en Estrella. Abierto para todos, sin membresía.",
    includes: [
      "Consulta médica y análisis de sangre",
      "Inyecciones semanales de GLP-1",
      "Plan de nutrición personal",
      "Programa de ejercicios guiado",
    ],
    offerTag: "Precio por tiempo limitado",
    save: `Ahorra ${SAVINGS}/mes`,
    perMonth: "/mes",
    regular: "precio reg.",
    cta: "Agenda tu consulta",
    reassure: "Facturación mensual. Reembolso total si tu médico determina que el programa no es para ti. Cancela cuando quieras.",
    proof: [
      { n: "8,000+", l: "pacientes de Estrella" },
      { n: "20+", l: "años de experiencia médica" },
    ],
    chipTitle: "Chequeo cada semana",
    chipBody: "Peso, signos vitales y dosis, con tu médico",
    imageAlt: "Una abuela riendo mientras corre por un jardín de Coral Gables con sus dos nietos",
  },
};

export function LandingHero() {
  const { lang } = useLang();
  const t = pick(lang, COPY);

  return (
    // Pulled up under the translucent header so the photo runs to the top edge.
    <section className="relative -mt-20 overflow-hidden bg-mist-50 font-heading text-navy-950">
      <div className="grid grid-cols-1 lg:min-h-[min(100svh,58rem)] lg:grid-cols-[1.08fr_1fr]">
        {/* Photo: full-bleed right side on desktop, top of the stack on mobile */}
        <div className="relative aspect-[1/1] sm:aspect-[16/11] lg:order-2 lg:aspect-auto">
          <Image
            src="/images/hero-grandkids.jpg"
            alt={t.imageAlt}
            fill
            quality={90}
            priority
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover object-[50%_30%] sm:object-[50%_35%] lg:object-[50%_20%]"
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-mist-50 to-transparent lg:hidden" />

          {/* Proof chip on the photo */}
          <div className="absolute bottom-10 left-8 hidden max-w-[17rem] items-center gap-3 rounded-3xl bg-white/85 p-4 pr-5 shadow-[0_20px_40px_-20px_rgba(6,14,34,.45)] ring-1 ring-white/60 backdrop-blur-xl lg:flex xl:left-12">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-950 text-sun-300">
              <CalendarCheck className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <span>
              <span className="block text-[15px] font-bold text-navy-950">
                {t.chipTitle}
              </span>
              <span className="block text-[13px] leading-snug text-navy-900/70">
                {t.chipBody}
              </span>
            </span>
          </div>
        </div>

        {/* Copy, value and offer */}
        <div className="flex min-w-0 items-center lg:order-1">
          <div className="w-full px-5 pb-14 pt-1 sm:px-8 lg:ml-auto lg:max-w-[46rem] lg:pb-16 lg:pl-10 lg:pr-14 lg:pt-28">
            <span className="tag-pill">
              <span className="h-1.5 w-1.5 rounded-full bg-sun-500" />
              {t.badge}
            </span>

            <h1 className="mt-5 font-heading text-[clamp(2.4rem,3.9vw,4.4rem)] font-extrabold leading-[1.03] tracking-[-0.035em] text-navy-950">
              {t.line1}
              <br />
              <span className="text-sun-600">{t.line2}</span>
            </h1>

            <p className="mt-5 max-w-lg text-pretty text-[17px] leading-relaxed text-navy-900/70">
              {t.lead}
            </p>

            <ul className="mt-6 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {t.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-[15px] font-medium text-navy-900/85"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sun-400 text-navy-950">
                    <Check aria-hidden className="h-3 w-3" strokeWidth={3.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* The offer */}
            <div className="mt-8 rounded-3xl bg-white p-6 shadow-[0_24px_60px_-28px_rgba(6,14,34,.30)] ring-1 ring-navy-900/[0.07] sm:p-7">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-[13px] font-semibold text-sun-700">
                  {t.offerTag}
                </span>
                <span className="rounded-full bg-navy-950 px-2.5 py-1 text-[12px] font-bold text-sun-300">
                  {t.save}
                </span>
              </div>

              <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                  <span className="text-[46px] font-extrabold leading-none tracking-tight text-navy-950">
                    {fmtPrice(WEIGHT_LOSS.price)}
                  </span>
                  <span className="text-[15px] text-navy-900/70">
                    {t.perMonth}
                  </span>
                  <span className="whitespace-nowrap text-[14px] text-navy-900/70 line-through">
                    {t.regular} {fmtPrice(WEIGHT_LOSS.regularPrice)}
                  </span>
                </div>
                <Link
                  href="/qualify"
                  className="btn-pill w-full shrink-0 px-8 py-4 text-[15px] shadow-[0_12px_28px_-12px_rgba(200,146,56,.8)] sm:w-auto"
                >
                  {t.cta}
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Link>
              </div>

              <p className="mt-5 flex items-start gap-2 border-t border-navy-900/[0.07] pt-4 text-[13px] leading-snug text-navy-900/70">
                <ShieldCheck aria-hidden className="mt-px h-4 w-4 shrink-0 text-sun-600" />
                {t.reassure}
              </p>
            </div>

            {/* Proof */}
            <dl className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
              {t.proof.map((p) => (
                <div key={p.l} className="flex items-baseline gap-1.5">
                  <dt className="text-[18px] font-extrabold tracking-tight text-navy-950">
                    {p.n}
                  </dt>
                  <dd className="text-[13px] text-navy-900/70">{p.l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
