"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { WEIGHT_LOSS, fmtPrice } from "@/lib/programs";
import { useLang, pick } from "@/lib/i18n";
import { WithLogo } from "@/components/ui/brand-mark";

const COPY = {
  en: {
    title: "You don't need to be an Estrella patient to join.",
    lead: `Same program, same care and the same ${fmtPrice(WEIGHT_LOSS.price)}/month price for everyone.`,
    paths: [
      {
        title: "Already with {logo}?",
        body: "Add the program to the care you already get. Your doctor knows your history, so getting started is simple.",
      },
      {
        title: "New to {logo}?",
        body: "Welcome. No membership needed. Book a consultation and we'll take it from there, in English or Spanish.",
      },
    ],
    cta: "Book consultation",
  },
  es: {
    title: "No necesitas ser paciente de Estrella para unirte.",
    lead: `El mismo programa, el mismo cuidado y el mismo precio de ${fmtPrice(WEIGHT_LOSS.price)}/mes para todos.`,
    paths: [
      {
        title: "¿Ya eres paciente de {logo}?",
        body: "Suma el programa a la atención que ya recibes. Tu médico conoce tu historial, así que empezar es muy sencillo.",
      },
      {
        title: "¿Nuevo en {logo}?",
        body: "Bienvenido. No necesitas membresía. Agenda tu consulta y nos encargamos del resto, en español o en inglés.",
      },
    ],
    cta: "Agenda tu consulta",
  },
};

export function OpenToAll() {
  const { lang } = useLang();
  const t = pick(lang, COPY);

  return (
    <section className="bg-mist-50 py-20 font-heading sm:py-28">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <h2 className="text-balance font-heading text-[clamp(2rem,3.8vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.03em] text-navy-950">
            {t.title}
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-navy-900/70">
            {t.lead}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 grid overflow-hidden rounded-3xl bg-white ring-1 ring-navy-900/[0.07] md:grid-cols-2">
            {t.paths.map((p, i) => (
              <div
                key={p.title}
                className={
                  i === 0
                    ? "p-8 sm:p-10"
                    : "border-t border-navy-900/[0.07] p-8 sm:p-10 md:border-l md:border-t-0"
                }
              >
                <h3 className="font-heading text-[22px] font-bold tracking-[-0.02em] text-navy-950">
                  <WithLogo text={p.title} />
                </h3>
                <p className="mt-3 max-w-md text-[16px] leading-relaxed text-navy-900/70">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={180}>
          <Link href="/qualify" className="btn-pill-dark mt-10">
            {t.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
