"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { useLang, pick } from "@/lib/i18n";

const PROVIDERS = [
  {
    src: "/doctors/Aurelia_doctor.png",
    name: "Dr. Aurelia",
    role: { en: "Internal Medicine", es: "Medicina Interna" },
    bio: {
      en: "Focused on metabolic health and chronic disease management, Dr. Aurelia leads patients through evidence-based weight management protocols.",
      es: "Enfocada en la salud metabólica y el manejo de enfermedades crónicas, la Dra. Aurelia guía a los pacientes con protocolos de control de peso basados en evidencia.",
    },
  },
  {
    src: "/doctors/Carmen_doctor.png",
    name: "Dr. Carmen",
    role: { en: "Family Medicine", es: "Medicina Familiar" },
    bio: {
      en: "Long-term care, women's health, and metabolic balance. Dr. Carmen brings two decades of patient-centered experience to every weight loss plan.",
      es: "Atención a largo plazo, salud de la mujer y equilibrio metabólico. La Dra. Carmen aporta dos décadas de experiencia centrada en el paciente a cada plan de pérdida de peso.",
    },
  },
  {
    src: "/doctors/Ciro_doctor.png",
    name: "Dr. Ciro",
    role: { en: "Primary Care", es: "Atención Primaria" },
    bio: {
      en: "Bilingual primary care provider with a focus on preventative medicine, nutrition counseling, and long-term wellness.",
      es: "Proveedor bilingüe de atención primaria con enfoque en medicina preventiva, orientación nutricional y bienestar a largo plazo.",
    },
  },
  {
    src: "/doctors/Hugo_doctor.png",
    name: "Dr. Hugo",
    role: { en: "Internal Medicine", es: "Medicina Interna" },
    bio: {
      en: "Metabolic health and men's wellness. Dr. Hugo emphasizes lab-driven, conservative protocols tailored to each patient.",
      es: "Salud metabólica y bienestar masculino. El Dr. Hugo enfatiza protocolos conservadores, guiados por laboratorios y adaptados a cada paciente.",
    },
  },
  {
    src: "/doctors/Yamaris_doctor.png",
    name: "Dr. Yamaris",
    role: { en: "Family Medicine", es: "Medicina Familiar" },
    bio: {
      en: "Family medicine and metabolic care. Dr. Yamaris is known for compassionate intake reviews and clear, plain-language treatment plans.",
      es: "Medicina familiar y cuidado metabólico. La Dra. Yamaris es conocida por sus revisiones compasivas y planes de tratamiento claros, en lenguaje sencillo.",
    },
  },
  {
    src: "/doctors/Yanelis_doctor.png",
    name: "Dr. Yanelis",
    role: { en: "Primary Care", es: "Atención Primaria" },
    bio: {
      en: "Primary care and women's wellness. Dr. Yanelis champions personalized, sustainable weight loss plans for active patients.",
      es: "Atención primaria y bienestar de la mujer. La Dra. Yanelis defiende planes de pérdida de peso personalizados y sostenibles para pacientes activos.",
    },
  },
];

const COPY = {
  en: {
    eyebrow: "Your care team",
    title1: "The clinicians behind",
    title2: "your consultation.",
    lead: "Estrella Wellness is staffed by the same medical group patients trust at our South Florida clinics — bilingual, board-credentialed providers who review every weight loss intake personally.",
    cta: "Start my consultation",
    meta: [
      "Bilingual EN · ES",
      "Board-credentialed providers",
      "South Florida medical group",
    ],
    groupAlt: "The six providers of the Estrella medical group, photographed in Miami",
    captionLeft: "The Estrella medical group — Miami, Florida",
    captionRight: "Six providers · One standard",
    rosterEyebrow: "The roster",
    rosterTitle1: "Six clinicians,",
    rosterTitle2: "one standard of care.",
    rosterLead:
      "Every intake at Estrella Wellness is read by one of the six providers below — the same physicians patients see in our Miami clinics. No outsourced review networks, no anonymous approvals.",
    aboutEyebrow: "About Estrella Medical Centers",
    aboutTitle1: "South Florida's medical home,",
    aboutTitle2: "now telehealth-first.",
    aboutBody:
      "Estrella Medical Centers has served families across Miami for decades. Estrella Wellness extends that same standard of care to patients across our licensed states — entirely from your phone.",
    aboutAlt: "The Estrella Medical Centers clinic in Miami, Florida",
    facts: [
      { figure: "30 yrs", label: "Serving South Florida" },
      { figure: "EN · ES", label: "Bilingual care" },
      { figure: "Miami, FL", label: "Medical group headquarters" },
    ],
  },
  es: {
    eyebrow: "Tu equipo médico",
    title1: "Los médicos detrás",
    title2: "de tu consulta.",
    lead: "Estrella Wellness cuenta con el mismo grupo médico en el que confían los pacientes de nuestras clínicas del sur de la Florida — proveedores bilingües y certificados que revisan personalmente cada cuestionario de pérdida de peso.",
    cta: "Iniciar mi consulta",
    meta: [
      "Bilingüe EN · ES",
      "Proveedores certificados",
      "Grupo médico del sur de la Florida",
    ],
    groupAlt: "Los seis proveedores del grupo médico Estrella, fotografiados en Miami",
    captionLeft: "El grupo médico Estrella — Miami, Florida",
    captionRight: "Seis proveedores · Un estándar",
    rosterEyebrow: "El equipo",
    rosterTitle1: "Seis médicos,",
    rosterTitle2: "un mismo estándar de atención.",
    rosterLead:
      "Cada cuestionario en Estrella Wellness lo lee uno de los seis proveedores a continuación — los mismos médicos que atienden en nuestras clínicas de Miami. Sin redes externas de revisión, sin aprobaciones anónimas.",
    aboutEyebrow: "Sobre Estrella Medical Centers",
    aboutTitle1: "El hogar médico del sur de la Florida,",
    aboutTitle2: "ahora por telesalud.",
    aboutBody:
      "Estrella Medical Centers ha atendido a familias de Miami por décadas. Estrella Wellness extiende ese mismo estándar de atención a pacientes en los estados donde tenemos licencia — completamente desde tu teléfono.",
    aboutAlt: "La clínica de Estrella Medical Centers en Miami, Florida",
    facts: [
      { figure: "30 años", label: "Sirviendo al sur de la Florida" },
      { figure: "EN · ES", label: "Atención bilingüe" },
      { figure: "Miami, FL", label: "Sede del grupo médico" },
    ],
  },
};

export default function ProvidersPage() {
  const { lang } = useLang();
  const t = pick(lang, COPY);

  return (
    <>
      {/* Masthead — the whole team, framed like a print photograph */}
      <section className="bg-cream-50 paper-grain paper-grain-light">
        <div className="container-x pt-20 pb-16 sm:pt-28 sm:pb-20">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <div className="eyebrow">{t.eyebrow}</div>
              <h1 className="mt-6 font-display text-display-lg font-light leading-[0.98] text-navy-900">
                {t.title1}
                <br />
                <span className="font-normal italic">{t.title2}</span>
              </h1>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5">
              <div className="max-w-md lg:ml-auto">
                <p className="text-[16px] leading-[1.75] text-navy-900/70">
                  {t.lead}
                </p>
                <Link
                  href="/qualify"
                  className="mt-8 inline-flex items-center gap-2 border-b border-navy-900/30 pb-1 text-[13px] font-medium uppercase tracking-[0.2em] text-navy-900 transition-colors hover:border-navy-900"
                >
                  {t.cta}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="mt-14 grid grid-cols-1 gap-4 border-t border-navy-900/15 pt-6 text-[11px] uppercase tracking-[0.2em] text-navy-900/60 sm:grid-cols-3 sm:gap-6">
              {t.meta.map((m) => (
                <div key={m} className="flex items-baseline gap-3">
                  <span className="h-px w-3 shrink-0 bg-navy-900/40" />
                  {m}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <figure className="mt-10 sm:mt-12">
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-navy-100 sm:aspect-[16/9] lg:aspect-[21/9]">
                <Image
                  src="/doctors/Estrella_group.png"
                  alt={t.groupAlt}
                  fill
                  priority
                  sizes="(min-width: 1408px) 1296px, 92vw"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-navy-900/15 py-4">
                <span className="text-[11px] uppercase tracking-[0.22em] text-navy-900/60">
                  {t.captionLeft}
                </span>
                <span className="text-[11px] uppercase tracking-[0.22em] text-navy-900/40">
                  {t.captionRight}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* The roster — a physician directory */}
      <section className="bg-cream-100 paper-grain paper-grain-light">
        <div className="container-x py-24 sm:py-32">
          <div className="grid items-end gap-10 border-b border-navy-900/15 pb-14 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <div className="eyebrow">{t.rosterEyebrow}</div>
              <h2 className="mt-5 font-display text-display-lg font-light leading-[0.98] text-navy-900">
                {t.rosterTitle1}
                <br />
                <span className="font-normal italic">{t.rosterTitle2}</span>
              </h2>
            </Reveal>
            <Reveal delay={120} className="md:col-span-5 md:text-right">
              <p className="max-w-md text-[16px] leading-[1.7] text-navy-900/70 md:ml-auto md:text-left">
                {t.rosterLead}
              </p>
            </Reveal>
          </div>

          <ol className="divide-y divide-navy-900/15">
            {PROVIDERS.map((p, i) => (
              <Reveal key={p.name} as="li" delay={60}>
                <div className="group grid grid-cols-12 items-start gap-x-6 gap-y-7 py-12 sm:py-16">
                  <div className="hidden lg:col-span-1 lg:block">
                    <div className="font-display text-[16px] font-light leading-none text-navy-900/45">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="col-span-9 sm:col-span-4 lg:col-span-3">
                    <div className="relative aspect-[3/4] overflow-hidden bg-navy-100">
                      <Image
                        src={p.src}
                        alt={p.name}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 75vw"
                        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                  </div>

                  <div className="col-span-12 sm:col-span-8 lg:col-span-3">
                    <div className="font-display text-[14px] font-light text-navy-900/45 lg:hidden">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-2 font-display text-[28px] font-light leading-tight text-navy-900 sm:text-[32px] lg:mt-0">
                      {p.name}
                    </h3>
                    <div className="mt-3 text-[11px] uppercase tracking-[0.2em] text-navy-900/55">
                      {p.role[lang]}
                    </div>
                  </div>

                  <div className="col-span-12 lg:col-span-5">
                    <p className="max-w-md text-[15px] leading-[1.75] text-navy-900/70">
                      {p.bio[lang]}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* The clinic — full-bleed, the building as it deserves */}
      <section className="relative overflow-hidden bg-navy-900 text-cream-50">
        <div className="grid lg:grid-cols-12">
          <div className="relative aspect-[4/3] w-full lg:col-span-6 lg:aspect-auto lg:min-h-[620px]">
            <Image
              src="/images/estrella-building.png"
              alt={t.aboutAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-navy-900/25" />
          </div>

          <div className="relative flex items-center px-6 py-20 sm:px-10 lg:col-span-6 lg:px-20 lg:py-28">
            <Reveal>
              <div className="max-w-xl">
                <div className="eyebrow-light">{t.aboutEyebrow}</div>
                <h2 className="mt-6 font-display text-display-md font-light leading-[1.02]">
                  {t.aboutTitle1}
                  <br />
                  <span className="font-normal italic">{t.aboutTitle2}</span>
                </h2>
                <p className="mt-7 max-w-lg text-[16px] leading-[1.75] text-cream-50/75">
                  {t.aboutBody}
                </p>

                <dl className="mt-10 divide-y divide-cream-50/15 border-t border-cream-50/15">
                  {t.facts.map((f) => (
                    <div
                      key={f.label}
                      className="flex items-baseline justify-between gap-6 py-4"
                    >
                      <dt className="font-display text-[26px] font-light leading-none text-cream-50">
                        {f.figure}
                      </dt>
                      <dd className="text-right text-[11px] uppercase tracking-[0.18em] text-cream-50/60">
                        {f.label}
                      </dd>
                    </div>
                  ))}
                </dl>

                <Link
                  href="/qualify"
                  className="mt-10 inline-flex items-center justify-center gap-2 bg-cream-50 px-8 py-4 text-[13px] font-medium uppercase tracking-[0.2em] text-navy-900 transition-colors duration-300 hover:bg-cream-100"
                >
                  {t.cta}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
