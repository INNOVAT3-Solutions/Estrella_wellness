"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { useLang, pick } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { EstrellaStar } from "@/components/ui/estrella-star";

const COPY = {
  en: {
    title: "Everything your transformation needs, under one roof.",
    labs: {
      title: "It starts with your blood work.",
      body: "Your doctor reviews your labs before choosing a medication or dose, then tracks how they change.",
      alt: "A technician drawing blood from a patient at an Estrella clinic",
    },
    clinic: {
      title: "Injections given by our medical team.",
      body: "Every week, at any Estrella location, in a controlled clinical setting.",
    },
    nutrition: {
      title: "A nutritionist in your corner.",
      alt: "A nutritionist reviewing a meal plan with a patient at the clinic",
    },
    visit: {
      title: "Checked at every visit",
      items: ["Weight", "Blood pressure", "How you feel", "Your dose"],
    },
    exercise: {
      title: "Exercise matched to your level.",
      body: "Step-by-step routines that protect muscle and help you keep the weight off.",
      alt: "A man on a morning walk along the Miami bayfront",
    },
    language: {
      title: "Se habla español.",
      body: "Bilingual doctors and staff who explain everything clearly, in the language you prefer.",
    },
  },
  es: {
    title: "Todo lo que tu transformación necesita, en un solo lugar.",
    labs: {
      title: "Todo empieza con tus análisis.",
      body: "Tu médico revisa tus laboratorios antes de elegir el medicamento o la dosis, y sigue cómo cambian.",
      alt: "Un técnico extrayendo sangre a un paciente en un centro Estrella",
    },
    clinic: {
      title: "Inyecciones aplicadas por nuestro equipo médico.",
      body: "Cada semana, en cualquier centro Estrella, en un entorno clínico controlado.",
    },
    nutrition: {
      title: "Una nutricionista de tu lado.",
      alt: "Una nutricionista revisando un plan de comidas con una paciente en la clínica",
    },
    visit: {
      title: "En cada visita revisamos",
      items: ["Tu peso", "Tu presión", "Cómo te sientes", "Tu dosis"],
    },
    exercise: {
      title: "Ejercicio a tu medida.",
      body: "Rutinas paso a paso que protegen tu músculo y te ayudan a no recuperar el peso.",
      alt: "Un hombre en una caminata matutina junto a la bahía de Miami",
    },
    language: {
      title: "Hablamos tu idioma.",
      body: "Médicos y personal bilingües que te explican todo con claridad, en el idioma que prefieras.",
    },
  },
};

const tile = "relative overflow-hidden rounded-3xl";

export function WhyUs() {
  const { lang } = useLang();
  const t = pick(lang, COPY);

  return (
    <section className="bg-white py-20 font-heading sm:py-28">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <h2 className="text-balance font-heading text-[clamp(2rem,3.8vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.03em] text-navy-950">
            {t.title}
          </h2>
        </Reveal>

        {/* Phones: a two-column bento, reordered so the two text tiles pair up
            side by side and photos alternate with color (order-* below, reset
            with sm:order-none). */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:auto-rows-[16rem] lg:grid-cols-4">
          {/* Blood work: the large photographic tile */}
          <Reveal
            className={cn(
              tile,
              "order-1 col-span-2 min-h-[22rem] sm:order-none sm:min-h-[26rem] lg:row-span-2 lg:min-h-0"
            )}
          >
            <Image
              src="/images/lab-technician-drawing-blood.png"
              alt={t.labs.alt}
              fill
              quality={90}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/90 via-navy-950/50 to-transparent p-6 pt-28 sm:p-9 sm:pt-32">
              <h3 className="font-heading max-w-sm text-[clamp(1.5rem,2.4vw,2rem)] font-bold leading-tight tracking-[-0.02em] text-white">
                {t.labs.title}
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/75">
                {t.labs.body}
              </p>
            </div>
          </Reveal>

          {/* In-clinic injections: solid navy */}
          <Reveal
            delay={60}
            className={cn(
              tile,
              "order-4 col-span-2 flex flex-col justify-end bg-navy-950 p-6 pt-24 sm:order-none sm:min-h-[16rem] sm:p-9 sm:pt-24 lg:min-h-0"
            )}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(60% 90% at 100% 0%, rgba(200,146,56,.22) 0%, rgba(200,146,56,0) 70%)",
              }}
            />
            <EstrellaStar className="absolute right-6 top-6 w-16 drop-shadow-[0_10px_24px_rgba(200,146,56,.35)] sm:right-9 sm:top-8 sm:w-36" sizes="144px" />
            <h3 className="font-heading relative max-w-[16rem] text-[clamp(1.4rem,2.4vw,2rem)] font-bold leading-tight tracking-[-0.02em] text-white sm:max-w-md">
              {t.clinic.title}
            </h3>
            <p className="relative mt-3 max-w-md text-[15px] leading-relaxed text-white/70">
              {t.clinic.body}
            </p>
          </Reveal>

          {/* Nutritionist: photo */}
          <Reveal delay={120} className={cn(tile, "order-3 col-span-2 min-h-[15rem] sm:order-none sm:col-span-1 sm:min-h-[16rem] lg:min-h-0")}>
            <Image
              src="/images/nutritionist-session.jpg"
              alt={t.nutrition.alt}
              fill
              quality={90}
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/85 to-transparent p-6 pt-20">
              <h3 className="font-heading text-[19px] font-bold leading-snug text-white">
                {t.nutrition.title}
              </h3>
            </div>
          </Reveal>

          {/* Every visit: tinted checklist */}
          <Reveal
            delay={180}
            className={cn(tile, "order-2 min-h-[14rem] bg-sun-50 p-4 ring-1 ring-inset ring-sun-200/70 sm:order-none sm:min-h-[16rem] sm:p-6 lg:min-h-0")}
          >
            <h3 className="font-heading text-[16px] font-bold leading-snug text-navy-950 sm:text-[19px]">
              {t.visit.title}
            </h3>
            <ul className="mt-4 space-y-2 sm:mt-5 sm:space-y-2.5">
              {t.visit.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[14px] font-medium leading-snug text-navy-900/75 sm:gap-3 sm:text-[15px]"
                >
                  <span aria-hidden className="mt-[0.65em] h-px w-3 shrink-0 bg-sun-500 sm:w-4" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Exercise: split tile */}
          <Reveal
            delay={60}
            className={cn(
              tile,
              "order-5 col-span-2 grid min-h-[20rem] bg-mist-50 sm:order-none sm:min-h-[16rem] sm:grid-cols-2 lg:min-h-0"
            )}
          >
            {/* Phones: text over the photo. From sm: text left, photo right. */}
            <div className="relative z-10 flex flex-col justify-end bg-gradient-to-t from-navy-950/90 via-navy-950/50 to-transparent p-6 pt-28 sm:bg-none sm:p-8">
              <h3 className="font-heading text-[22px] font-bold leading-tight tracking-[-0.02em] text-white sm:text-navy-950">
                {t.exercise.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/80 sm:text-navy-900/70">
                {t.exercise.body}
              </p>
            </div>
            <div className="absolute inset-0 sm:relative sm:inset-auto">
              <Image
                src="/images/exercise-bayfront-walk.jpg"
                alt={t.exercise.alt}
                fill
                quality={90}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-[50%_12%]"
              />
            </div>
          </Reveal>

          {/* Language: gold accent */}
          <Reveal
            delay={120}
            className={cn(
              tile,
              "order-2 flex min-h-[14rem] flex-col justify-between gap-4 bg-sun-400 p-4 sm:order-none sm:col-span-2 sm:min-h-[16rem] sm:gap-6 sm:p-9 lg:min-h-0"
            )}
          >
            <EstrellaStar
              tone="white"
              className="absolute -bottom-10 -right-8 hidden w-72 opacity-30 sm:block"
              sizes="288px"
            />
            <h3 className="font-heading relative text-[clamp(1.45rem,6.4vw,1.85rem)] font-extrabold sm:text-[clamp(1.85rem,3.4vw,3rem)] leading-none tracking-[-0.035em] text-navy-950">
              {t.language.title}
            </h3>
            <p className="relative text-[14px] font-medium leading-snug text-navy-950/80 sm:max-w-sm sm:text-[15px] sm:leading-relaxed">
              {t.language.body}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
