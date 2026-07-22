"use client";

import { Reveal } from "@/components/ui/reveal";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { testimonialCards } from "@/lib/social-proof";
import { useLang, pick } from "@/lib/i18n";

const COPY = {
  en: {
    eyebrow: "In their words",
    title1: "Patients on",
    title2: "the program.",
    lead: "Selected accounts from weight loss patients across our clinics — published with consent, edited only for length.",
  },
  es: {
    eyebrow: "En sus palabras",
    title1: "Pacientes del",
    title2: "programa.",
    lead: "Testimonios seleccionados de pacientes de pérdida de peso de nuestras clínicas — publicados con consentimiento, editados solo por extensión.",
  },
};

export function Testimonials() {
  const { lang } = useLang();
  const t = pick(lang, COPY);
  const cards = testimonialCards(lang);

  const col1 = cards.slice(0, 3);
  const col2 = cards.slice(3, 6);
  const col3 = cards.slice(6, 9);

  return (
    <section className="section bg-cream-100 paper-grain paper-grain-light">
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

        <div className="mt-16 flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[680px] overflow-hidden">
          <TestimonialsColumn testimonials={col1} duration={24} />
          <TestimonialsColumn
            testimonials={col2}
            className="hidden md:block"
            duration={32}
          />
          <TestimonialsColumn
            testimonials={col3}
            className="hidden lg:block"
            duration={28}
          />
        </div>
      </div>
    </section>
  );
}
