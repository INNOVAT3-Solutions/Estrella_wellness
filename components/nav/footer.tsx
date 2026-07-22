"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { WEIGHT_LOSS, fmtPrice } from "@/lib/programs";
import { useLang, pick } from "@/lib/i18n";

const COPY = {
  en: {
    ctaEyebrow: "Limited-time offer",
    ctaTitle1: `${fmtPrice(WEIGHT_LOSS.price)} a month.`,
    ctaTitle2: "Everything included.",
    ctaBody: `Doctor consultation, your designated GLP-1 peptide, a guided nutrition plan, and management exercises — normally ${fmtPrice(WEIGHT_LOSS.regularPrice)}/month.`,
    ctaButton: "Start my consultation",
    about:
      "Estrella Wellness is the telehealth arm of Estrella Medical Centers — extending clinician-guided weight loss care from our South Florida medical group to patients across our licensed states.",
    programs: "The Program",
    programLink: "GLP-1 Weight Loss Program",
    startLink: "Start my consultation",
    clinic: "The Clinic",
    process: "How it works",
    providers: "Providers",
    faq: "FAQ",
    login: "Patient login",
    reading: "Reading",
    readingItems: [
      "Treatment guides",
      "Clinical research",
      "Patient stories",
      "Bilingual care",
    ],
    pharmacyPartner: "Pharmacy partner",
    legal: "Legal",
    legalItems: [
      "Privacy policy",
      "Terms of service",
      "HIPAA notice",
      "Telemedicine consent",
      "Compounded med disclosure",
    ],
    rights: "All rights reserved.",
    designedBy: "Designed by",
    disclaimer:
      "Estrella Wellness offers telehealth services through licensed clinicians. Compounded medications are not FDA-approved in the same manner as commercially manufactured drugs and are dispensed by our partner compounding pharmacy,",
    disclaimer2:
      "(Miami, FL · FL DOH PH35751), in response to a prescription written by an Estrella clinician. This site is for informational purposes and is not medical advice. Treatment is at the discretion of the licensed clinician.",
  },
  es: {
    ctaEyebrow: "Oferta por tiempo limitado",
    ctaTitle1: `${fmtPrice(WEIGHT_LOSS.price)} al mes.`,
    ctaTitle2: "Todo incluido.",
    ctaBody: `Consulta médica, tu péptido GLP-1 designado, un plan de nutrición guiado y ejercicios de manejo — normalmente ${fmtPrice(WEIGHT_LOSS.regularPrice)}/mes.`,
    ctaButton: "Iniciar mi consulta",
    about:
      "Estrella Wellness es el brazo de telesalud de Estrella Medical Centers — llevando la atención médica para bajar de peso de nuestro grupo médico del sur de la Florida a pacientes en los estados donde tenemos licencia.",
    programs: "El Programa",
    programLink: "Programa de Pérdida de Peso GLP-1",
    startLink: "Iniciar mi consulta",
    clinic: "La Clínica",
    process: "Cómo funciona",
    providers: "Médicos",
    faq: "Preguntas frecuentes",
    login: "Portal del paciente",
    reading: "Lecturas",
    readingItems: [
      "Guías de tratamiento",
      "Investigación clínica",
      "Historias de pacientes",
      "Atención bilingüe",
    ],
    pharmacyPartner: "Farmacia asociada",
    legal: "Legal",
    legalItems: [
      "Política de privacidad",
      "Términos de servicio",
      "Aviso HIPAA",
      "Consentimiento de telemedicina",
      "Divulgación de medicamentos magistrales",
    ],
    rights: "Todos los derechos reservados.",
    designedBy: "Diseñado por",
    disclaimer:
      "Estrella Wellness ofrece servicios de telesalud a través de médicos licenciados. Los medicamentos magistrales no están aprobados por la FDA de la misma manera que los medicamentos comerciales y son dispensados por nuestra farmacia magistral asociada,",
    disclaimer2:
      "(Miami, FL · FL DOH PH35751), en respuesta a una receta escrita por un médico de Estrella. Este sitio es informativo y no constituye consejo médico. El tratamiento queda a discreción del médico licenciado.",
  },
};

export function Footer() {
  const pathname = usePathname() || "";
  const { lang } = useLang();
  const t = pick(lang, COPY);

  if (pathname.startsWith("/qualify")) return null;

  return (
    <footer className="bg-navy-900 text-cream-50/80">
      {/* Top CTA strip — the offer, one more time */}
      <div className="border-b border-cream-50/12">
        <div className="container-x grid items-end gap-10 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7">
            <div className="eyebrow-light">{t.ctaEyebrow}</div>
            <h3 className="mt-5 font-display text-[40px] font-light leading-[1.0] text-cream-50 sm:text-[56px]">
              {t.ctaTitle1}
              <br />
              <span className="font-normal italic">{t.ctaTitle2}</span>
            </h3>
            <p className="mt-6 max-w-xl text-[15px] leading-[1.7] text-cream-50/70">
              {t.ctaBody}
            </p>
          </div>
          <div className="md:col-span-5 md:flex md:justify-end">
            <Link
              href="/qualify"
              className="inline-flex items-center justify-center gap-2 bg-cream-50 px-8 py-4 text-[12px] font-medium uppercase tracking-[0.2em] text-navy-900 transition-colors hover:bg-cream-100"
            >
              {t.ctaButton}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="container-x grid gap-14 py-20 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="bg-cream-50 p-3 inline-block">
            <Image
              src="/logo/logo.png"
              alt="Estrella Medical Centers"
              width={160}
              height={42}
              className="h-9 w-auto"
            />
          </div>
          <p className="mt-7 max-w-sm text-[14px] leading-[1.7] text-cream-50/65">
            {t.about}
          </p>
          <div className="mt-8 space-y-1.5 text-[13px] text-cream-50/65">
            <div>305.217.7553</div>
            <div>innovat3solutions@gmail.com</div>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream-50/45">
            {t.programs}
          </div>
          <ul className="mt-5 space-y-3 text-[14px]">
            <li>
              <Link
                href="/programs/weight-loss"
                className="text-cream-50/90 transition hover:text-cream-50"
              >
                {t.programLink}
                <span className="ml-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-sun-300">
                  {fmtPrice(WEIGHT_LOSS.price)}
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/qualify"
                className="text-cream-50/80 transition hover:text-cream-50"
              >
                {t.startLink}
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream-50/45">
            {t.clinic}
          </div>
          <ul className="mt-5 space-y-3 text-[14px]">
            <li>
              <Link
                href="/how-it-works"
                className="text-cream-50/80 hover:text-cream-50"
              >
                {t.process}
              </Link>
            </li>
            <li>
              <Link
                href="/providers"
                className="text-cream-50/80 hover:text-cream-50"
              >
                {t.providers}
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-cream-50/80 hover:text-cream-50">
                {t.faq}
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="text-cream-50/80 hover:text-cream-50"
              >
                {t.login}
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream-50/45">
            {t.reading}
          </div>
          <ul className="mt-5 space-y-3 text-[14px] text-cream-50/80">
            {t.readingItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
            <li>
              <a
                href="https://www.greenstonerx.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream-50"
              >
                {t.pharmacyPartner}
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream-50/45">
            {t.legal}
          </div>
          <ul className="mt-5 space-y-3 text-[14px] text-cream-50/80">
            {t.legalItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom legal */}
      <div className="border-t border-cream-50/12 bg-navy-950">
        <div className="container-x flex flex-col gap-4 py-8 text-[11px] leading-[1.7] text-cream-50/50 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div>
              © {new Date().getFullYear()} Estrella Medical Centers. {t.rights}
            </div>
            <div className="mt-1.5">
              {t.designedBy}{" "}
              <a
                href="https://innovat3solutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-2 hover:text-cream-50 hover:underline"
              >
                Innovat3 Solutions
              </a>
            </div>
          </div>
          <div className="max-w-3xl">
            {t.disclaimer}{" "}
            <a
              href="https://www.greenstonerx.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:text-cream-50 hover:underline"
            >
              Greenstone Rx
            </a>{" "}
            {t.disclaimer2}
          </div>
        </div>
      </div>
    </footer>
  );
}
