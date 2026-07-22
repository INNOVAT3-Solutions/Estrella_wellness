"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { useLang, pick } from "@/lib/i18n";

const COPY = {
  en: {
    eyebrow: "The process",
    title1: "Your consultation,",
    title2: "step by step.",
    lead: "From questionnaire to a complete weight loss plan — peptide, nutrition, and exercise — guided by a licensed doctor.",
    cta: "Start my consultation",
    duration: "Duration",
    steps: [
      {
        title: "The intake",
        body: "A single questionnaire — about ten minutes — covering your health history, weight loss goals, and the specifics that matter for prescribing.",
        time: "≈ 10 minutes",
      },
      {
        title: "The consultation",
        body: "A licensed Estrella doctor reviews your full file and consults with you. Not a flowchart. Not a chatbot.",
        time: "Within 24 hours",
      },
      {
        title: "Your complete plan",
        body: "Your doctor designates your GLP-1 peptide and pairs it with your guided nutrition plan and management exercises. The peptide ships discreetly to your door.",
        time: "1 — 2 days",
      },
      {
        title: "The follow-through",
        body: "Refills, messaging, progress tracking, and check-ins live in a single private dashboard. Your doctor stays your doctor.",
        time: "Ongoing",
      },
    ],
  },
  es: {
    eyebrow: "El proceso",
    title1: "Tu consulta,",
    title2: "paso a paso.",
    lead: "Del cuestionario a un plan completo de pérdida de peso — péptido, nutrición y ejercicio — guiado por un médico licenciado.",
    cta: "Iniciar mi consulta",
    duration: "Duración",
    steps: [
      {
        title: "El cuestionario",
        body: "Un solo cuestionario — unos diez minutos — sobre tu historial de salud, tus metas de pérdida de peso y los detalles que importan para recetar.",
        time: "≈ 10 minutos",
      },
      {
        title: "La consulta",
        body: "Un médico licenciado de Estrella revisa tu expediente completo y consulta contigo. No es un diagrama. No es un chatbot.",
        time: "Dentro de 24 horas",
      },
      {
        title: "Tu plan completo",
        body: "Tu médico designa tu péptido GLP-1 y lo acompaña con tu plan de nutrición guiado y ejercicios de manejo. El péptido llega discretamente a tu puerta.",
        time: "1 — 2 días",
      },
      {
        title: "El seguimiento",
        body: "Resurtidos, mensajes, seguimiento de progreso y chequeos viven en un solo panel privado. Tu médico sigue siendo tu médico.",
        time: "Continuo",
      },
    ],
  },
};

export function HowItWorks() {
  const { lang } = useLang();
  const t = pick(lang, COPY);

  return (
    <section className="section relative overflow-hidden bg-navy-900 text-cream-50">
      <div className="container-x relative">
        <div className="grid items-end gap-10 border-b border-cream-50/15 pb-14 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="eyebrow-light">{t.eyebrow}</div>
            <h2 className="mt-5 font-display text-display-lg font-light text-cream-50">
              {t.title1}
              <br />
              <span className="font-normal italic">{t.title2}</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-5">
            <p className="max-w-md text-[16px] leading-[1.65] text-cream-50/70 md:ml-auto md:text-right">
              {t.lead}
            </p>
            <div className="mt-6 flex md:justify-end">
              <Link
                href="/qualify"
                className="inline-flex items-center gap-2 border-b border-cream-50/40 pb-1 text-[13px] font-medium uppercase tracking-[0.16em] text-cream-50 hover:border-cream-50"
              >
                {t.cta}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>

        <ol className="mt-4 divide-y divide-cream-50/15">
          {t.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <li className="grid grid-cols-12 items-baseline gap-6 py-10 sm:py-14">
                <div className="col-span-12 sm:col-span-2">
                  <div className="font-display text-[44px] font-light leading-none text-cream-50/55 sm:text-[56px]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <h3 className="font-display text-[28px] font-light leading-tight text-cream-50 sm:text-[34px]">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] leading-[1.7] text-cream-50/70">
                    {s.body}
                  </p>
                </div>
                <div className="col-span-12 sm:col-span-4 sm:text-right">
                  <div className="text-[10px] uppercase tracking-[0.24em] text-cream-50/45">
                    {t.duration}
                  </div>
                  <div className="mt-2 font-display text-[18px] font-light text-cream-50/85">
                    {s.time}
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
