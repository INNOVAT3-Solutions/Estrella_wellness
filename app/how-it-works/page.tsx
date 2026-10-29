"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section-2";
import { Reveal } from "@/components/ui/reveal";
import { WEIGHT_LOSS, fmtPrice } from "@/lib/programs";
import { useLang, pick } from "@/lib/i18n";

const EMAIL = "info@estrellamedicalcenters.com";
const PROMO = fmtPrice(WEIGHT_LOSS.price);

const COPY = {
  en: {
    slogan: "The Process",
    heroTitle1: "From consultation",
    heroTitle2: "to your plan,",
    heroTitle3: "led by doctors.",
    heroSubtitle: `Your GLP-1 weight loss plan is decided by a licensed Estrella doctor and your care happens in person, at our clinics in Miami. The ${PROMO}/month special includes the consultation and blood work review, the GLP-1 medication your doctor chooses if treatment is right for you (given weekly in the clinic), a nutritionist meal plan and a guided exercise program.`,
    heroCta: "Start my consultation",
    heroImageAlt:
      "Two Estrella doctors in white coats reviewing a patient file on a computer in a bright clinic office",
    contact: {
      website: "Bilingual EN · ES",
      phone: "Weekly visits in the clinic",
      address: "Estrella Medical Centers, Miami, FL",
    },
    stepsEyebrow: "Step by step",
    stepsTitle1: "Six clear steps,",
    stepsTitle2: "none of them rushed.",
    stepsLead:
      "In-person medicine with a doctor involved at every step. Each step exists for a clinical reason.",
    duration: "When",
    steps: [
      {
        title: "Book your consultation",
        body: "Book online with your contact details and your preferred Estrella location, date and time. There are no health questions to fill out online. Our team calls you to ask a few questions and coordinate your visit.",
        duration: "Online",
      },
      {
        title: "The consultation",
        body: `At an Estrella location in Miami, a licensed doctor meets with you and reviews your health history, current medications and blood work. You can pay online through our secure Stripe checkout when you book, or pay at your visit, with a full refund if you are not approved or the doctor decides the program is not a fit for you.`,
        duration: "In the clinic",
      },
      {
        title: "Follow-up, where needed",
        body: "Sometimes the right next step is another question or new lab work before a decision. Your doctor will tell you what is needed, and we'll contact you to schedule anything else.",
        duration: "If needed",
      },
      {
        title: "Your complete plan",
        body: "If treatment is appropriate, your doctor chooses your GLP-1 medication and pairs it with a nutritionist meal plan and a guided exercise program. Your doctor explains what is in the plan, how it is dosed and how it is monitored.",
        duration: "After your consultation",
      },
      {
        title: "Weekly care in the clinic",
        body: "On your doctor's prescription, your medication may be prepared by Greenstone Rx, our partner compounding pharmacy in Miami. Our medical team gives your injection every week at an Estrella Medical Centers location in Miami, with a check-in on your weight, vitals, how you feel and your dose.",
        duration: "Every week",
      },
      {
        title: "Continuing care",
        body: `Your doctor adjusts your dose and plan based on your check-ins. The program renews monthly until you cancel. To cancel, email ${EMAIL} or tell the clinic; cancelling stops future charges.`,
        duration: "Monthly",
      },
    ],
    reviewEyebrow: "The review",
    reviewTitle1: "Your full picture,",
    reviewTitle2: "reviewed by a licensed doctor.",
    reviewBody1:
      "Every patient is seen by a licensed Estrella doctor. Nothing is approved automatically. Your doctor considers your full picture before deciding whether treatment makes sense, which medication to choose, how to dose it and what to watch for.",
    reviewBody2:
      "It is the same care more than 8,000 patients know at Estrella Medical Centers, from doctors with 20+ years of experience: clear clinical judgment, explained plainly.",
    reviewCta: "Start my consultation",
    vol1: "What your doctor considers",
    reviewItems: [
      {
        label: "Goals",
        note: "How much weight you want to lose, and what matters most to you.",
      },
      {
        label: "Personal & family history",
        note: "Conditions, prior diagnoses and relevant family history.",
      },
      {
        label: "Current medications & supplements",
        note: "Including dose, how often you take them and for how long.",
      },
      {
        label: "Allergies & known reactions",
        note: "Checked against any medication your doctor may consider.",
      },
      {
        label: "Blood work",
        note: "Your doctor reviews your blood work and orders new labs if needed.",
      },
      {
        label: "Lifestyle",
        note: "Sleep, stress, activity and eating habits: the things that shape your plan.",
      },
    ],
    vol2: "What your doctor may decide",
    decisions: [
      {
        verdict: "Approve",
        body: "When the picture is clear, your doctor chooses your medication and writes your plan.",
      },
      {
        verdict: "Approve with monitoring",
        body: "Your plan begins, with extra lab work or closer check-ins built in.",
      },
      {
        verdict: "Ask for more information",
        body: "Your doctor may ask more questions or order lab work before deciding.",
      },
      {
        verdict: "Adjust the plan",
        body: "If a different dose or medication is a better fit, your doctor will change the plan.",
      },
      {
        verdict: "Decline",
        body: "When treatment is not right for you yet, your doctor will say so plainly and explain why. You get a full refund.",
      },
    ],
    closing:
      "In every case, a licensed doctor makes the call. When prescribed, compounded medication is prepared by Greenstone Rx in Miami on that prescription only. Compounded drugs are not FDA-approved and have not been reviewed by the FDA for safety, effectiveness or quality. Availability may vary.",
    policies: "Refund policy",
    terms: "Terms of service",
  },
  es: {
    slogan: "El Proceso",
    heroTitle1: "De la consulta",
    heroTitle2: "a tu plan,",
    heroTitle3: "de la mano de médicos.",
    heroSubtitle: `Tu plan de pérdida de peso GLP-1 lo decide un médico licenciado de Estrella y tu atención es en persona, en nuestras clínicas de Miami. El especial de ${PROMO}/mes incluye la consulta y la revisión de tus análisis de sangre, el medicamento GLP-1 que elija tu médico si el tratamiento es adecuado para ti (aplicado cada semana en la clínica), un plan de comidas de una nutricionista y un programa de ejercicios guiado.`,
    heroCta: "Iniciar mi consulta",
    heroImageAlt:
      "Dos médicos de Estrella con bata blanca revisando el expediente de un paciente en una computadora, en un consultorio luminoso",
    contact: {
      website: "Bilingüe EN · ES",
      phone: "Visitas semanales en la clínica",
      address: "Estrella Medical Centers, Miami, FL",
    },
    stepsEyebrow: "Paso a paso",
    stepsTitle1: "Seis pasos claros,",
    stepsTitle2: "ninguno apresurado.",
    stepsLead:
      "Medicina en persona, con un médico presente en cada paso. Cada paso existe por una razón clínica.",
    duration: "Cuándo",
    steps: [
      {
        title: "Agenda tu consulta",
        body: "Agenda en línea con tus datos de contacto y el centro Estrella, la fecha y la hora que prefieras. No tienes que llenar preguntas de salud en línea. Nuestro equipo te llama para hacerte algunas preguntas y coordinar tu visita.",
        duration: "En línea",
      },
      {
        title: "La consulta",
        body: "En un centro Estrella de Miami, un médico licenciado se reúne contigo y revisa tu historial, los medicamentos que tomas y tus análisis de sangre. Puedes pagar en línea con nuestro pago seguro de Stripe al agendar, o pagar en tu visita, con reembolso completo si no eres aprobado o si el médico decide que el programa no es adecuado para ti.",
        duration: "En la clínica",
      },
      {
        title: "Seguimiento, si hace falta",
        body: "A veces el siguiente paso es otra pregunta o nuevos análisis antes de decidir. Tu médico te dirá qué hace falta y te contactaremos para agendar lo que sea necesario.",
        duration: "Si hace falta",
      },
      {
        title: "Tu plan completo",
        body: "Si el tratamiento es apropiado, tu médico elige tu medicamento GLP-1 y lo acompaña con un plan de comidas de una nutricionista y un programa de ejercicios guiado. Tu médico te explica qué incluye el plan, cómo se dosifica y cómo se supervisa.",
        duration: "Después de tu consulta",
      },
      {
        title: "Atención semanal en la clínica",
        body: "Con la receta de tu médico, tu medicamento puede prepararlo Greenstone Rx, nuestra farmacia magistral asociada en Miami. Nuestro equipo médico te aplica la inyección cada semana en un centro de Estrella Medical Centers en Miami, con un chequeo de tu peso, tus signos vitales, cómo te sientes y tu dosis.",
        duration: "Cada semana",
      },
      {
        title: "Cuidado continuo",
        body: `Tu médico ajusta tu dosis y tu plan según tus chequeos. El programa se renueva cada mes hasta que lo canceles. Para cancelar, escribe a ${EMAIL} o avisa en la clínica; al cancelar se detienen los cobros futuros.`,
        duration: "Cada mes",
      },
    ],
    reviewEyebrow: "La revisión",
    reviewTitle1: "Tu panorama completo,",
    reviewTitle2: "revisado por un médico licenciado.",
    reviewBody1:
      "A cada paciente lo atiende un médico licenciado de Estrella. Nada se aprueba de forma automática. Tu médico considera tu panorama completo antes de decidir si el tratamiento tiene sentido, qué medicamento elegir, cómo dosificarlo y qué vigilar.",
    reviewBody2:
      "Es la misma atención que conocen más de 8,000 pacientes de Estrella Medical Centers, con médicos de más de 20 años de experiencia: criterio clínico claro, explicado con sencillez.",
    reviewCta: "Iniciar mi consulta",
    vol1: "Lo que tu médico considera",
    reviewItems: [
      {
        label: "Metas",
        note: "Cuánto peso quieres perder y lo que más te importa.",
      },
      {
        label: "Historial personal y familiar",
        note: "Condiciones, diagnósticos previos y antecedentes familiares relevantes.",
      },
      {
        label: "Medicamentos y suplementos actuales",
        note: "Incluida la dosis, cada cuánto los tomas y desde cuándo.",
      },
      {
        label: "Alergias y reacciones conocidas",
        note: "Se comparan con cualquier medicamento que tu médico pueda considerar.",
      },
      {
        label: "Análisis de sangre",
        note: "Tu médico revisa tus análisis y pide nuevos si hace falta.",
      },
      {
        label: "Estilo de vida",
        note: "Sueño, estrés, actividad y alimentación: lo que da forma a tu plan.",
      },
    ],
    vol2: "Lo que tu médico puede decidir",
    decisions: [
      {
        verdict: "Aprobar",
        body: "Cuando el panorama es claro, tu médico elige tu medicamento y escribe tu plan.",
      },
      {
        verdict: "Aprobar con seguimiento",
        body: "Tu plan comienza, con análisis adicionales o chequeos más cercanos.",
      },
      {
        verdict: "Pedir más información",
        body: "Tu médico puede hacerte más preguntas o pedir análisis antes de decidir.",
      },
      {
        verdict: "Ajustar el plan",
        body: "Si otra dosis u otro medicamento encaja mejor, tu médico cambiará el plan.",
      },
      {
        verdict: "Declinar",
        body: "Cuando el tratamiento aún no es adecuado para ti, tu médico te lo dirá con claridad y te explicará por qué. Te devolvemos el pago completo.",
      },
    ],
    closing:
      "En todos los casos, decide un médico licenciado. Cuando se receta, el medicamento magistral lo prepara Greenstone Rx en Miami solo para esa receta. Los medicamentos magistrales no están aprobados por la FDA y la FDA no ha revisado su seguridad, eficacia ni calidad. La disponibilidad puede variar.",
    policies: "Política de reembolsos",
    terms: "Términos del servicio",
  },
};

const FOCUS =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun-500 focus-visible:ring-offset-2";

export default function HowItWorksPage() {
  const { lang } = useLang();
  const t = pick(lang, COPY);

  return (
    <>
      <HeroSection
        slogan={t.slogan}
        title={
          <>
            {t.heroTitle1} {t.heroTitle2}
            <br />
            <span className="text-sun-600">{t.heroTitle3}</span>
          </>
        }
        subtitle={t.heroSubtitle}
        callToAction={{
          text: t.heroCta,
          href: "/qualify",
        }}
        backgroundImage="/images/how-it-works-scene.png"
        imageAlt={t.heroImageAlt}
        contactInfo={t.contact}
      />

      {/* Six steps */}
      <section className="bg-white py-20 font-heading sm:py-28">
        <div className="container-x">
          <div className="grid items-end gap-6 md:grid-cols-12 md:gap-10">
            <Reveal className="md:col-span-7">
              <p className="text-[13px] font-semibold text-sun-700">{t.stepsEyebrow}</p>
              <h2 className="mt-3 text-balance font-heading text-[clamp(2rem,3.8vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.03em] text-navy-950">
                {t.stepsTitle1} <span className="text-sun-600">{t.stepsTitle2}</span>
              </h2>
            </Reveal>
            <Reveal delay={120} className="md:col-span-5">
              <p className="max-w-md text-[17px] leading-relaxed text-navy-900/70 md:ml-auto">
                {t.stepsLead}
              </p>
            </Reveal>
          </div>

          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 60} className="h-full">
                <li className="flex h-full flex-col rounded-3xl bg-mist-50 p-7 ring-1 ring-navy-900/[0.07] sm:p-8">
                  <span aria-hidden className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-950 text-[15px] font-bold text-sun-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 text-[22px] font-bold leading-tight tracking-[-0.02em] text-navy-950">
                    {s.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-navy-900/70">
                    {s.body}
                  </p>
                  <div className="mt-6 flex flex-wrap items-baseline justify-between gap-2 border-t border-navy-900/10 pt-4">
                    <span className="text-[13px] font-semibold text-sun-700">
                      {t.duration}
                    </span>
                    <span className="text-[15px] font-bold text-navy-950">
                      {s.duration}
                    </span>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* The review */}
      <section className="bg-mist-50 py-20 font-heading sm:py-28">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
              <p className="text-[13px] font-semibold text-sun-700">{t.reviewEyebrow}</p>
              <h2 className="mt-3 text-balance font-heading text-[clamp(2rem,3.8vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.03em] text-navy-950">
                {t.reviewTitle1} <span className="text-sun-600">{t.reviewTitle2}</span>
              </h2>
              <p className="mt-5 max-w-md text-[17px] leading-relaxed text-navy-900/70">
                {t.reviewBody1}
              </p>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-navy-900/70">
                {t.reviewBody2}
              </p>
              <Link
                href="/qualify"
                className={`btn-pill mt-8 shadow-[0_12px_28px_-12px_rgba(200,146,56,.8)] ${FOCUS}`}
              >
                {t.reviewCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>

            <div className="min-w-0 lg:col-span-7">
              <div className="rounded-3xl bg-white p-6 shadow-[0_24px_60px_-28px_rgba(6,14,34,.30)] ring-1 ring-navy-900/[0.07] sm:p-8">
                <h3 className="text-[13px] font-semibold text-sun-700">{t.vol1}</h3>
                <ol className="mt-5 grid gap-3 sm:grid-cols-2">
                  {t.reviewItems.map((item, i) => (
                    <Reveal key={item.label} delay={i * 50} className="h-full">
                      <li className="flex h-full gap-4 rounded-2xl bg-mist-50 p-5">
                        <span aria-hidden className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-950 text-[12px] font-bold text-sun-300">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="min-w-0">
                          <h4 className="text-[16px] font-bold leading-snug text-navy-950">
                            {item.label}
                          </h4>
                          <p className="mt-1.5 text-[14px] leading-relaxed text-navy-900/75">
                            {item.note}
                          </p>
                        </div>
                      </li>
                    </Reveal>
                  ))}
                </ol>
              </div>

              <div className="mt-5 rounded-3xl bg-white p-6 shadow-[0_24px_60px_-28px_rgba(6,14,34,.30)] ring-1 ring-navy-900/[0.07] sm:p-8">
                <h3 className="text-[13px] font-semibold text-sun-700">{t.vol2}</h3>
                <dl className="mt-3 divide-y divide-navy-900/10">
                  {t.decisions.map((d, i) => (
                    <Reveal key={d.verdict} delay={i * 50}>
                      <div className="grid gap-1.5 py-5 sm:grid-cols-12 sm:gap-4">
                        <dt className="flex items-center gap-2.5 text-[16px] font-bold leading-snug text-navy-950 sm:col-span-5">
                          <span aria-hidden className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sun-400 text-navy-950">
                            <Check className="h-3 w-3" strokeWidth={3.5} />
                          </span>
                          {d.verdict}
                        </dt>
                        <dd className="text-[14px] leading-relaxed text-navy-900/75 sm:col-span-7">
                          {d.body}
                        </dd>
                      </div>
                    </Reveal>
                  ))}
                </dl>
              </div>

              <Reveal>
                <p className="mt-8 max-w-xl text-[13px] leading-relaxed text-navy-900/70">
                  {t.closing}
                </p>
                <p className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[13px]">
                  <Link
                    href="/refunds"
                    className={`inline-block rounded py-1.5 font-semibold text-navy-950 underline decoration-sun-500 underline-offset-4 ${FOCUS}`}
                  >
                    {t.policies}
                  </Link>
                  <Link
                    href="/terms"
                    className={`inline-block rounded py-1.5 font-semibold text-navy-950 underline decoration-sun-500 underline-offset-4 ${FOCUS}`}
                  >
                    {t.terms}
                  </Link>
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
