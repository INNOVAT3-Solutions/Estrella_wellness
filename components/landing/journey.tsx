"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { useLang, pick } from "@/lib/i18n";
import { cn } from "@/lib/cn";

const IMAGES = [
  "/images/lab-technician-drawing-blood.png",
  "/images/doctor-lab-review.jpg",
  "/images/clinic-injection.jpg",
  "/images/nutritionist-session.jpg",
  "/images/hero-couple-walk.jpg",
];

// Crop focus for landscape photos in the portrait frame, so both people stay in.
const FOCUS: Record<string, string> = {
  "/images/nutritionist-session.jpg": "object-[62%_50%]",
};

// Crop focus for the wide in-step photos on phones and tablets.
const FOCUS_WIDE: Record<string, string> = {
  "/images/lab-technician-drawing-blood.png": "object-[50%_40%]",
};

const COPY = {
  en: {
    title: "How the program works",
    lead: "Five steps, one care team, all close to home.",
    cta: "Book consultation",
    next: "Next step",
    steps: [
      {
        title: "Consultation and blood work",
        body: "Meet your doctor, share your health history and get your labs drawn, so your plan starts from real data.",
        alt: "A technician drawing blood from a patient",
      },
      {
        title: "Your personal plan",
        body: "Your doctor reviews your results and chooses the right medication and starting dose for you.",
        alt: "A doctor reviewing lab results with a patient",
      },
      {
        title: "Weekly injection and check-in",
        body: "Visit any Estrella location each week. Our medical team gives your injection and checks your progress.",
        alt: "A nurse giving a patient her weekly injection",
      },
      {
        title: "Nutrition with your nutritionist",
        body: "A nutritionist builds your meal plan and adjusts it as your body and appetite change.",
        alt: "A nutritionist reviewing a meal plan with a patient",
      },
      {
        title: "Exercise and lasting habits",
        body: "Guided routines help you keep muscle and keep the weight off for good.",
        alt: "A couple in workout clothes laughing together on a morning walk"
      },
    ],
  },
  es: {
    title: "Cómo funciona el programa",
    lead: "Cinco pasos, un mismo equipo médico, cerca de tu casa.",
    cta: "Agenda tu consulta",
    next: "Siguiente paso",
    steps: [
      {
        title: "Consulta y análisis de sangre",
        body: "Conoce a tu médico, comparte tu historial y hazte los laboratorios, para que tu plan empiece con datos reales.",
        alt: "Un técnico extrayendo sangre a un paciente",
      },
      {
        title: "Tu plan personal",
        body: "Tu médico revisa tus resultados y elige el medicamento y la dosis inicial adecuados para ti.",
        alt: "Un médico revisando resultados de laboratorio con una paciente",
      },
      {
        title: "Inyección y chequeo semanal",
        body: "Visita cualquier centro Estrella cada semana. Nuestro equipo médico aplica tu inyección y revisa tu progreso.",
        alt: "Un enfermero aplicando la inyección semanal a una paciente",
      },
      {
        title: "Nutrición con tu nutricionista",
        body: "Una nutricionista crea tu plan de comidas y lo ajusta a medida que cambian tu cuerpo y tu apetito.",
        alt: "Una nutricionista revisando un plan de comidas con una paciente",
      },
      {
        title: "Ejercicio y hábitos que duran",
        body: "Rutinas guiadas te ayudan a conservar músculo y a no recuperar el peso.",
        alt: "Una pareja con ropa deportiva riendo juntos en una caminata matutina"
      },
    ],
  },
};

export function Journey() {
  const { lang } = useLang();
  const t = pick(lang, COPY);
  const [active, setActive] = useState(0);
  const items = useRef<(HTMLLIElement | null)[]>([]);

  // Open the next step, then bring it into view once the previous panel has
  // finished collapsing (the panels animate for 500ms).
  const goNext = (i: number) => {
    setActive(i + 1);
    window.setTimeout(() => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      items.current[i + 1]?.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "nearest",
      });
    }, 520);
  };

  return (
    <section className="bg-mist-50 py-20 font-heading sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <h2 className="text-balance font-heading text-[clamp(2rem,3.8vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.03em] text-navy-950">
              {t.title}
            </h2>
            <p className="mt-4 text-[17px] text-navy-900/70">{t.lead}</p>
          </Reveal>

          <ol className="mt-10 border-t border-navy-900/10">
            {t.steps.map((step, i) => {
              const on = active === i;
              const next = t.steps[i + 1];
              return (
                <li
                  key={step.title}
                  ref={(el) => {
                    items.current[i] = el;
                  }}
                  className="scroll-mt-24 border-b border-navy-900/10"
                >
                  <button
                    type="button"
                    id={`journey-step-${i}`}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    aria-expanded={on}
                    aria-controls={`journey-panel-${i}`}
                    className="group flex w-full items-start gap-5 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sun-500"
                  >
                    <span
                      className={cn(
                        "mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[13px] font-bold tabular-nums transition-colors duration-300",
                        on
                          ? "bg-navy-950 text-sun-300"
                          : "bg-white text-navy-900/70 ring-1 ring-navy-900/10"
                      )}
                    >
                      {i + 1}
                    </span>
                    <span
                      className={cn(
                        "block flex-1 text-[clamp(1.15rem,1.8vw,1.4rem)] font-bold tracking-[-0.015em] transition-colors duration-300",
                        on
                          ? "text-navy-950"
                          : "text-navy-900/70 group-hover:text-navy-900/75"
                      )}
                    >
                      {step.title}
                    </span>
                    <Plus
                      className={cn(
                        "mt-1.5 h-5 w-5 shrink-0 transition-transform duration-300",
                        on ? "rotate-45 text-navy-950" : "text-navy-900/70"
                      )}
                    />
                  </button>

                  <div
                    id={`journey-panel-${i}`}
                    role="region"
                    aria-labelledby={`journey-step-${i}`}
                    className={cn(
                      "grid transition-all duration-500 ease-out",
                      on
                        ? "grid-rows-[1fr] opacity-100"
                        : "invisible grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-6 pl-12">
                        <p className="max-w-md text-[15px] leading-relaxed text-navy-900/70">
                          {step.body}
                        </p>

                        {/* Phones and tablets: each step carries its own photo */}
                        <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-3xl lg:hidden">
                          <Image
                            src={IMAGES[i]}
                            alt={step.alt}
                            fill
                            quality={90}
                            sizes="(min-width: 640px) 90vw, 100vw"
                            className={cn("object-cover", FOCUS_WIDE[IMAGES[i]])}
                          />
                        </div>

                        {next && (
                          <button
                            type="button"
                            onClick={() => goNext(i)}
                            className="mt-5 inline-flex items-center gap-2 rounded-full py-1.5 text-[14px] font-semibold text-navy-950 underline decoration-sun-500 decoration-2 underline-offset-[6px] transition-colors hover:text-sun-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sun-500"
                          >
                            {t.next}: {next.title}
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          <Link href="/qualify" className="btn-pill-dark mt-10">
            {t.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Desktop: one photo frame beside the list that follows the open step */}
        <Reveal delay={120} className="hidden lg:col-span-6 lg:block">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            {IMAGES.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={active === i ? t.steps[i].alt : ""}
                fill
                quality={90}
                sizes="45vw"
                className={cn(
                  "object-cover transition-opacity duration-700",
                  FOCUS[src],
                  active === i ? "opacity-100" : "opacity-0"
                )}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
