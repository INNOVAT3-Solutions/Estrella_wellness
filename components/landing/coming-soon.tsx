"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { EstrellaStar } from "@/components/ui/estrella-star";
import { useLang, pick } from "@/lib/i18n";

const COPY = {
  en: {
    tag: "Coming soon",
    title: "Weight loss is just the beginning.",
    body: "This is the first of a new family of Estrella wellness programs, built to help you feel your best at every age. Join now and you'll be among the first to hear when the next one opens.",
    alt: "A couple walking hand in hand along a Miami beach at sunset",
  },
  es: {
    tag: "Muy pronto",
    title: "La pérdida de peso es solo el comienzo.",
    body: "Es el primero de una nueva familia de programas de bienestar de Estrella, creados para que te sientas bien a cualquier edad. Únete ahora y serás de los primeros en saber cuándo abre el próximo.",
    alt: "Una pareja caminando de la mano por una playa de Miami al atardecer",
  },
};

export function ComingSoon() {
  const { lang } = useLang();
  const t = pick(lang, COPY);

  return (
    <section className="bg-mist-50 py-20 font-heading sm:py-24">
      <div className="container-x">
        <Reveal>
          <div className="relative flex flex-col overflow-hidden rounded-3xl bg-mist-100 sm:block">
            {/* Phones: photo stacks under the text. Larger screens: it fills the banner. */}
            <div className="relative order-last aspect-[4/3] sm:absolute sm:inset-0 sm:aspect-auto">
              <Image
                src="/images/coming-soon-beach.jpg"
                alt={t.alt}
                fill
                quality={90}
                sizes="100vw"
                className="object-cover object-[72%_40%] sm:object-[75%_50%]"
              />
              <div className="absolute inset-0 hidden bg-gradient-to-r from-mist-100 from-25% via-mist-100/70 via-45% to-mist-100/0 to-70% sm:block" />
            </div>
            <div className="relative max-w-xl px-7 pb-8 pt-10 sm:px-12 sm:py-24">
              <div className="flex items-center gap-2 text-[13px] font-semibold text-sun-700">
                <EstrellaStar className="w-5" />
                {t.tag}
              </div>
              <h2 className="mt-4 text-balance font-heading text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em] text-navy-950">
                {t.title}
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-navy-900/70">
                {t.body}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
