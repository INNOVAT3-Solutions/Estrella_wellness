"use client";

import { Check, Minus } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { useLang, pick } from "@/lib/i18n";

const COPY = {
  en: {
    eyebrow: "A quiet distinction",
    title1: "It is the care",
    title2: "behind the care.",
    lead: "Most online weight loss clinics sell a prescription. Estrella is a medical group — the same one South Florida families have trusted for three decades — and your price includes the whole plan, not just the medication.",
    detail: "The detail",
    estrella: "Estrella",
    estrellaSub: "Wellness",
    online: "Generic clinic",
    inperson: "In-person doctor",
    rows: [
      "Consultation included in the monthly price",
      "Nutrition plan and exercise plan included",
      "Reviewed by a real medical group",
      "Bilingual provider team (EN · ES)",
      "Provider response within 24 hours",
      "Free, discreet shipping",
      "Subscription with flexible cancellation",
      "Transparent monthly pricing",
    ],
    matrix: [
      { estrella: true, online: false, inperson: false },
      { estrella: true, online: false, inperson: false },
      { estrella: true, online: false, inperson: true },
      { estrella: true, online: false, inperson: false },
      { estrella: true, online: false, inperson: false },
      { estrella: true, online: true, inperson: false },
      { estrella: true, online: true, inperson: false },
      { estrella: true, online: false, inperson: false },
    ],
  },
  es: {
    eyebrow: "Una distinción silenciosa",
    title1: "Es el cuidado",
    title2: "detrás del cuidado.",
    lead: "La mayoría de las clínicas de pérdida de peso en línea venden una receta. Estrella es un grupo médico — el mismo en el que las familias del sur de la Florida han confiado por tres décadas — y tu precio incluye el plan completo, no solo el medicamento.",
    detail: "El detalle",
    estrella: "Estrella",
    estrellaSub: "Wellness",
    online: "Clínica genérica",
    inperson: "Médico presencial",
    rows: [
      "Consulta incluida en el precio mensual",
      "Plan de nutrición y de ejercicios incluidos",
      "Revisado por un grupo médico real",
      "Equipo de proveedores bilingüe (EN · ES)",
      "Respuesta del proveedor en 24 horas",
      "Envío gratis y discreto",
      "Suscripción con cancelación flexible",
      "Precios mensuales transparentes",
    ],
    matrix: [
      { estrella: true, online: false, inperson: false },
      { estrella: true, online: false, inperson: false },
      { estrella: true, online: false, inperson: true },
      { estrella: true, online: false, inperson: false },
      { estrella: true, online: false, inperson: false },
      { estrella: true, online: true, inperson: false },
      { estrella: true, online: true, inperson: false },
      { estrella: true, online: false, inperson: false },
    ],
  },
};

const Cell = ({ value, accent = false }: { value: boolean; accent?: boolean }) =>
  value ? (
    <span
      className={`inline-flex h-7 w-7 items-center justify-center ${
        accent ? "text-sun-700" : "text-navy-900"
      }`}
    >
      <Check className="h-5 w-5" strokeWidth={1.75} />
    </span>
  ) : (
    <span className="inline-flex h-7 w-7 items-center justify-center text-navy-900/25">
      <Minus className="h-5 w-5" strokeWidth={1.5} />
    </span>
  );

export function Comparison() {
  const { lang } = useLang();
  const t = pick(lang, COPY);

  return (
    <section className="section bg-cream-50 paper-grain paper-grain-light">
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
          <Reveal delay={120} className="md:col-span-5 md:text-right">
            <p className="max-w-md text-[16px] leading-[1.65] text-navy-900/65 md:ml-auto">
              {t.lead}
            </p>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="mt-16">
            <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] items-end gap-4 border-b border-navy-900/25 pb-6">
              <div className="text-[10px] uppercase tracking-[0.22em] text-navy-900/55">
                {t.detail}
              </div>
              <div className="text-center">
                <div className="font-display text-[20px] font-light text-navy-900 sm:text-[22px]">
                  {t.estrella}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-sun-700">
                  {t.estrellaSub}
                </div>
              </div>
              <div className="text-center text-[12px] uppercase tracking-[0.18em] text-navy-900/55">
                {t.online}
              </div>
              <div className="text-center text-[12px] uppercase tracking-[0.18em] text-navy-900/55">
                {t.inperson}
              </div>
            </div>

            <div className="divide-y divide-navy-900/15">
              {t.rows.map((feature, i) => (
                <div
                  key={feature}
                  className="grid grid-cols-[1.6fr_1fr_1fr_1fr] items-center gap-4 py-5"
                >
                  <div className="font-display text-[16px] font-light text-navy-900 sm:text-[17px]">
                    {feature}
                  </div>
                  <div className="flex justify-center">
                    <Cell value={t.matrix[i].estrella} accent />
                  </div>
                  <div className="flex justify-center">
                    <Cell value={t.matrix[i].online} />
                  </div>
                  <div className="flex justify-center">
                    <Cell value={t.matrix[i].inperson} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
