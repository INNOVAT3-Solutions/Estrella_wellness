"use client";

import Link from "@/components/ui/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { useLang, pick } from "@/lib/i18n";
import { LOCATIONS, type Location } from "@/lib/booking";

/*
 * The six clinics as real page text (name, address, hours, phone), from the
 * same data as the booking calendar and the structured data. Not location
 * pages: each row books that clinic in the existing funnel.
 */

const COPY = {
  en: {
    title: "Six clinics across Miami\u2011Dade and Broward.",
    lead: "Your consultation and weekly visits happen in person at the Estrella clinic you choose. Hours vary by clinic.",
    directions: "Directions",
    call: "Call",
    book: (name: string) => `Book at ${name}`,
    hours: "Hours",
  },
  es: {
    title: "Seis clínicas en Miami\u2011Dade y Broward.",
    lead: "Tu consulta y tus visitas semanales son en persona, en la clínica Estrella que elijas. El horario varía según la clínica.",
    directions: "Cómo llegar",
    call: "Llamar",
    book: (name: string) => `Agendar en ${name}`,
    hours: "Horario",
  },
};

const COUNTIES: Location["county"][] = ["Miami-Dade", "Broward"];

/** Keep "7:30 AM" / "7:30 a. m." on one line. */
const keepTimes = (h: string) =>
  h.replace(/ (AM|PM)\b/g, "\u00a0$1").replace(/ ([ap])\. m\./g, "\u00a0$1.\u00a0m.");

const displayPhone = (p: string) => p.replace(/^\+1-(\d{3})-(\d{3})-(\d{4})$/, "($1) $2-$3");
const telHref = (p: string) => `tel:${p.replace(/-/g, "")}`;
const mapsHref = (address: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`Estrella Medical Centers, ${address}`)}`;

const ROW_LINK =
  "inline-flex min-h-11 items-center gap-1.5 font-heading text-[14px] font-medium text-navy-900/75 underline decoration-navy-900/25 underline-offset-4 transition-colors hover:text-navy-950 hover:decoration-navy-900/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun-500 rounded-sm";

export function Clinics({ tone = "mist" }: { tone?: "mist" | "white" }) {
  const { lang } = useLang();
  const t = pick(lang, COPY);

  return (
    <section
      id="clinics"
      aria-labelledby="clinics-title"
      className={`${tone === "mist" ? "bg-mist-50" : "bg-white"} py-20 font-heading sm:py-28`}
    >
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <h2
            id="clinics-title"
            className="text-balance font-heading text-[clamp(2rem,3.8vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.03em] text-navy-950"
          >
            {t.title}
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-navy-900/70">{t.lead}</p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 overflow-hidden rounded-3xl bg-white ring-1 ring-navy-900/[0.07]">
            {COUNTIES.map((county, ci) => (
              <div key={county} className={ci > 0 ? "border-t border-navy-900/[0.07]" : undefined}>
                <h3 className="px-6 pt-7 text-[13px] font-semibold text-sun-700 sm:px-10">{county}</h3>
                <ul>
                  {LOCATIONS.filter((l) => l.county === county).map((l, i) => (
                    <li
                      key={l.id}
                      className={`grid gap-x-8 gap-y-3 px-6 py-6 sm:px-10 lg:grid-cols-12 lg:items-center ${
                        i > 0 ? "border-t border-navy-900/[0.07]" : ""
                      }`}
                    >
                      <div className="lg:col-span-4">
                        <p className="text-[19px] font-bold tracking-[-0.02em] text-navy-950">{l.name}</p>
                        <address className="mt-1 text-[15px] not-italic leading-relaxed text-navy-900/75">
                          {l.address}
                        </address>
                      </div>
                      <p className="text-[15px] leading-relaxed text-navy-900/75 lg:col-span-4">
                        <span className="sr-only">{t.hours}: </span>
                        {keepTimes(l.hoursSummary[lang])}
                      </p>
                      <div className="flex flex-col items-start gap-1 lg:col-span-4 lg:items-end">
                        <div className="flex flex-wrap items-center gap-x-5">
                          <a href={telHref(l.phone)} className={ROW_LINK}>
                            <Phone aria-hidden className="h-4 w-4 text-sun-700" />
                            <span className="sr-only">{t.call} </span>
                            {displayPhone(l.phone)}
                          </a>
                          <a
                            href={mapsHref(l.address)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={ROW_LINK}
                          >
                            <MapPin aria-hidden className="h-4 w-4 text-sun-700" />
                            {t.directions}
                          </a>
                        </div>
                        <Link
                          href={`/qualify?clinic=${l.id}`}
                          className="inline-flex min-h-11 items-center gap-1.5 rounded-sm font-heading text-[14px] font-semibold text-navy-950 underline decoration-sun-500 decoration-2 underline-offset-4 transition-colors hover:decoration-navy-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun-500"
                        >
                          {t.book(l.name)}
                          <ArrowRight aria-hidden className="h-4 w-4" />
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
