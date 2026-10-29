"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EstrellaStar } from "@/components/ui/estrella-star";
import { Reveal } from "@/components/ui/reveal";
import { WEIGHT_LOSS, fmtPrice, programCopy } from "@/lib/programs";
import { useLang, pick } from "@/lib/i18n";

const COPY = {
  en: {
    title: "More good years start this week.",
    offer: "Limited-time price",
    perMonth: "/month",
    regular: "Regularly",
    extras: ["Blood work review", "Weekly check-ins at our clinics"],
    note: `Payment is collected at or before your consultation, then ${fmtPrice(WEIGHT_LOSS.price)} renews every month until you cancel. Full refund if your doctor finds the program isn't right for you. Cancel anytime by email or at the clinic.`,
    policies: "Refund policy",
    terms: "Terms",
    disclaimer: "Photo is an illustration. Individual results vary.",
    cta: "Book consultation",
    faq: "Questions? Read the FAQ",
    alt: "A smiling woman holding out the waistband of jeans that are now too big for her",
  },
  es: {
    title: "Más años buenos empiezan esta semana.",
    offer: "Precio por tiempo limitado",
    perMonth: "/mes",
    regular: "Normalmente",
    extras: ["Revisión de análisis de sangre", "Chequeos semanales en nuestros centros"],
    note: `El pago se cobra en tu consulta o antes, y luego ${fmtPrice(WEIGHT_LOSS.price)} se renueva cada mes hasta que canceles. Reembolso total si tu médico determina que el programa no es para ti. Cancela cuando quieras por correo o en la clínica.`,
    policies: "Política de reembolso",
    terms: "Términos",
    disclaimer: "Imagen ilustrativa. Los resultados varían según cada persona.",
    cta: "Agenda tu consulta",
    faq: "¿Preguntas? Lee las preguntas frecuentes",
    alt: "Una mujer sonriente sosteniendo la cintura de unos jeans que ahora le quedan grandes",
  },
};

export function Pricing() {
  const { lang } = useLang();
  const t = pick(lang, COPY);
  const wl = programCopy(lang);
  const items = [...wl.includes.map((i) => i.title), ...t.extras];

  return (
    <section id="included" className="bg-white py-24 font-heading sm:py-32">
      <div className="container-x">
        <Reveal>
          <div className="relative grid overflow-hidden rounded-3xl bg-navy-950 text-white lg:grid-cols-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(55% 70% at 0% 100%, rgba(200,146,56,.18) 0%, rgba(200,146,56,0) 70%)",
              }}
            />

            <div className="relative p-8 sm:p-12 lg:col-span-7 lg:p-16">
              <h2 className="max-w-lg text-balance font-heading text-[clamp(2.1rem,4.2vw,3.5rem)] font-extrabold leading-[1.04] tracking-[-0.035em]">
                {t.title}
              </h2>

              <div className="mt-10 flex flex-wrap items-end gap-x-6 gap-y-2">
                <div>
                  <div className="text-[13px] font-semibold text-sun-300">
                    {t.offer}
                  </div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-[56px] font-extrabold leading-none tabular-nums tracking-[-0.04em]">
                      {fmtPrice(WEIGHT_LOSS.price)}
                    </span>
                    <span className="text-[16px] text-white/75">
                      {t.perMonth}
                    </span>
                  </div>
                </div>
                <div className="pb-1.5 text-[14px] text-white/75">
                  {t.regular}{" "}
                  <span className="line-through">
                    {fmtPrice(WEIGHT_LOSS.regularPrice)}
                  </span>
                </div>
              </div>

              <ul className="mt-10 grid gap-x-8 gap-y-3.5 border-t border-white/10 pt-8 sm:grid-cols-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[15px] text-white/85"
                  >
                    <EstrellaStar className="w-5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link href="/qualify" className="btn-pill">
                  {t.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/faq"
                  className="inline-block py-1.5 text-[14px] font-medium text-white/75 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60"
                >
                  {t.faq}
                </Link>
              </div>
              <p className="mt-5 max-w-lg text-[13px] leading-relaxed text-white/75">
                {t.note}{" "}
                <Link href="/refunds" className="underline underline-offset-2 hover:text-white">
                  {t.policies}
                </Link>
                {" · "}
                <Link href="/terms" className="underline underline-offset-2 hover:text-white">
                  {t.terms}
                </Link>
              </p>
              <p className="mt-2 text-[12px] text-white/70">{t.disclaimer}</p>
            </div>

            <div className="relative aspect-[3/4] sm:aspect-[4/3] lg:col-span-5 lg:aspect-auto">
              <Image
                src="/images/progress-old-jeans.jpg"
                alt={t.alt}
                fill
                quality={90}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[50%_18%]"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
