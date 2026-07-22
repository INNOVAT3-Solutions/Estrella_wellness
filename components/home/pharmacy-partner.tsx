"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { useLang, pick } from "@/lib/i18n";

const COPY = {
  en: {
    eyebrow: "The pharmacy partner",
    title1: "Made in Miami.",
    title2: "Compounded with care.",
    body1a: "Compounded medications in your Estrella program are dispensed by",
    body1b:
      "— a specialty compounding pharmacy headquartered, like our medical group, in Miami, Florida. They have spent a quarter century preparing medicines for clinics, hospitals, and medical practices, and are licensed across the states we are licensed to serve.",
    body2:
      "Compounded medications are not FDA-approved in the same manner as commercially manufactured drugs. They are dispensed by a licensed compounding pharmacy in response to a prescription written by an Estrella clinician.",
    visit: "Visit greenstonerx.com",
    inShort: "In short",
    facts: [
      { figure: "25 yrs", label: "Compounding practice" },
      { figure: "28 states", label: "Licensed footprint" },
      { figure: "Miami, FL", label: "FL DOH PH35751" },
    ],
    reachTitle: "How it reaches you",
    reachBody:
      "Once your doctor designates your peptide, Greenstone prepares and ships it — discreetly, typically within three to five business days.",
  },
  es: {
    eyebrow: "La farmacia asociada",
    title1: "Hecho en Miami.",
    title2: "Preparado con cuidado.",
    body1a: "Los medicamentos magistrales de tu programa Estrella son dispensados por",
    body1b:
      "— una farmacia magistral especializada con sede, como nuestro grupo médico, en Miami, Florida. Llevan un cuarto de siglo preparando medicamentos para clínicas, hospitales y consultorios, y tienen licencia en los estados donde nosotros la tenemos.",
    body2:
      "Los medicamentos magistrales no están aprobados por la FDA de la misma manera que los medicamentos comerciales. Son dispensados por una farmacia magistral licenciada en respuesta a una receta escrita por un médico de Estrella.",
    visit: "Visita greenstonerx.com",
    inShort: "En resumen",
    facts: [
      { figure: "25 años", label: "De práctica magistral" },
      { figure: "28 estados", label: "Con licencia" },
      { figure: "Miami, FL", label: "FL DOH PH35751" },
    ],
    reachTitle: "Cómo llega a ti",
    reachBody:
      "Cuando tu médico designa tu péptido, Greenstone lo prepara y lo envía — discretamente, normalmente en tres a cinco días hábiles.",
  },
};

export function PharmacyPartner() {
  const { lang } = useLang();
  const t = pick(lang, COPY);

  return (
    <section className="section bg-cream-100 paper-grain paper-grain-light">
      <div className="container-x">
        <div className="grid items-start gap-12 border-t border-navy-900/15 pt-14 md:grid-cols-12 md:gap-16 md:pt-20">
          <Reveal className="md:col-span-7">
            <div className="eyebrow">{t.eyebrow}</div>
            <h2 className="mt-6 font-display text-display-lg font-light leading-[0.98] text-navy-900">
              {t.title1}
              <br />
              <span className="font-normal italic">{t.title2}</span>
            </h2>
            <p className="mt-8 max-w-xl text-[16px] leading-[1.7] text-navy-900/70">
              {t.body1a} <span className="text-navy-900">Greenstone Rx</span>{" "}
              {t.body1b}
            </p>
            <p className="mt-5 max-w-xl text-[14px] leading-[1.7] text-navy-900/55">
              {t.body2}
            </p>
            <Link
              href="https://www.greenstonerx.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 border-b border-navy-900/30 pb-1 text-[13px] font-medium uppercase tracking-[0.2em] text-navy-900 transition-colors hover:border-navy-900"
            >
              {t.visit}
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </Reveal>

          <Reveal delay={120} className="md:col-span-5">
            <div className="md:pl-12 md:border-l md:border-navy-900/15">
              <div className="text-[10px] uppercase tracking-[0.24em] text-navy-900/55">
                {t.inShort}
              </div>
              <dl className="mt-6 divide-y divide-navy-900/15">
                {t.facts.map((f) => (
                  <div
                    key={f.label}
                    className="flex items-baseline justify-between gap-6 py-5"
                  >
                    <dt className="font-display text-[28px] font-light leading-none text-navy-900">
                      {f.figure}
                    </dt>
                    <dd className="text-right text-[12px] uppercase tracking-[0.18em] text-navy-900/60">
                      {f.label}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 rounded-none border border-navy-900/15 bg-cream-50 p-6">
                <div className="text-[10px] uppercase tracking-[0.24em] text-navy-900/55">
                  {t.reachTitle}
                </div>
                <p className="mt-3 text-[14px] leading-[1.7] text-navy-900/75">
                  {t.reachBody}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
