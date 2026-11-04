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
    included: "What's included",
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
    included: "Qué incluye",
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
        {/* Photo: on phones it starts below the header so her face is never
            covered, and the headline overlaps its lower edge; the full right
            side on desktop */}
        <div className="relative mt-20 h-[clamp(21rem,50svh,30rem)] lg:order-2 lg:mt-0 lg:h-auto">
          <Image
            src="/images/hero-grandkids.jpg"
            alt={t.imageAlt}
            fill
            quality={90}
            priority
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover object-[50%_10%] lg:object-[50%_20%]"
          />
          {/* Phones: a soft fade that is solid behind the headline and clear
              at the sides, so the kids still show through */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-3/5 lg:hidden"
            style={{
              background:
                "radial-gradient(75% 85% at 50% 100%, rgb(244 246 250) 0%, rgb(244 246 250 / .88) 38%, rgb(244 246 250 / .45) 62%, rgb(244 246 250 / 0) 82%), linear-gradient(to top, rgb(244 246 250) 0%, rgb(244 246 250 / 0) 28%)",
            }}
          />

          {/* Proof chip on the photo */}
          <div className="absolute bottom-10 left-8 hidden max-w-[17rem] items-center gap-3 rounded-3xl bg-white/85 p-4 pr-5 shadow-[0_20px_40px_-20px_rgba(6,14,34,.45)] ring-1 ring-white/60 backdrop-blur-xl lg:flex xl:left-12">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-950 text-sun-300">
              <CalendarCheck aria-hidden className="h-5 w-5" strokeWidth={1.75} />
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

        {/* Copy, value and offer. Phones read top to bottom like a funnel:
            hook, offer, button, proof, then the details. Desktop reorders to
            hook, details, offer, proof. */}
        <div className="flex min-w-0 items-center lg:order-1">
          <div className="relative -mt-36 flex w-full flex-col items-center px-5 pb-12 text-center sm:px-8 lg:ml-auto lg:mt-0 lg:max-w-[46rem] lg:items-stretch lg:pb-16 lg:pl-10 lg:pr-14 lg:pt-28 lg:text-left">
            <span className="tag-pill order-1 lg:self-start">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-sun-500" />
              {t.badge}
            </span>

            <h1 className="order-2 mt-4 text-balance font-heading text-[clamp(2.1rem,8.8vw,3rem)] font-extrabold leading-[1.03] tracking-[-0.035em] text-navy-950 lg:mt-5 lg:text-[clamp(2.4rem,3.9vw,4.4rem)]">
              {t.line1}
              <br />
              <span className="text-sun-600">{t.line2}</span>
            </h1>

            <p className="order-3 mt-4 max-w-md text-pretty text-[16px] leading-relaxed text-navy-900/70 lg:mt-5 lg:max-w-lg lg:text-[17px]">
              {t.lead}
            </p>

            {/* The offer */}
            <div className="order-4 mt-6 w-full lg:order-5 lg:mt-8 lg:rounded-3xl lg:bg-white lg:p-7 lg:shadow-[0_24px_60px_-28px_rgba(6,14,34,.30)] lg:ring-1 lg:ring-navy-900/[0.07]">
              <div className="flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
                <span className="text-[13px] font-semibold text-sun-700">
                  {t.offerTag}
                </span>
                <span className="rounded-full bg-navy-950 px-2.5 py-1 text-[12px] font-bold text-sun-300">
                  {t.save}
                </span>
              </div>

              <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex flex-wrap items-baseline justify-center gap-x-2.5 gap-y-1 lg:justify-start">
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
                  className="btn-pill w-full shrink-0 px-8 py-4 text-[16px] shadow-[0_12px_28px_-12px_rgba(200,146,56,.8)] sm:w-auto lg:text-[15px]"
                >
                  {t.cta}
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Link>
              </div>

              <p className="mx-auto mt-4 max-w-sm text-[13px] leading-snug text-navy-900/70 lg:mx-0 lg:mt-5 lg:flex lg:max-w-none lg:items-start lg:gap-2 lg:border-t lg:border-navy-900/10 lg:pt-4">
                <ShieldCheck aria-hidden className="-mt-0.5 mr-1.5 inline h-4 w-4 shrink-0 text-sun-600 lg:mr-0 lg:mt-px" />
                {t.reassure}
              </p>
            </div>

            {/* Proof */}
            <dl className="order-5 mt-7 grid w-full grid-cols-2 divide-x divide-navy-900/10 lg:order-6 lg:flex lg:w-auto lg:flex-wrap lg:gap-x-8 lg:gap-y-3 lg:divide-x-0">
              {t.proof.map((p) => (
                <div
                  key={p.l}
                  className="flex flex-col items-center gap-0.5 px-3 lg:flex-row lg:items-baseline lg:gap-1.5 lg:px-0"
                >
                  <dt className="text-[22px] font-extrabold tracking-tight text-navy-950 lg:text-[18px]">
                    {p.n}
                  </dt>
                  <dd className="text-[13px] leading-snug text-navy-900/70">{p.l}</dd>
                </div>
              ))}
            </dl>

            {/* What's included: a card on phones, a plain checklist on desktop */}
            <div className="order-6 mt-8 w-full rounded-3xl bg-white p-6 text-left ring-1 ring-navy-900/[0.07] lg:order-4 lg:mt-6 lg:rounded-none lg:bg-transparent lg:p-0 lg:ring-0">
              <h2 className="font-heading text-[15px] font-bold text-navy-950 lg:sr-only">
                {t.included}
              </h2>
              <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:mt-0 lg:gap-y-2.5">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
