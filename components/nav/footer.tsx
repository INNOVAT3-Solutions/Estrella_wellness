"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WEIGHT_LOSS, fmtPrice } from "@/lib/programs";
import { useLang, pick } from "@/lib/i18n";
import { SHOW_PATIENT_PORTAL } from "@/lib/features";

const COPY = {
  en: {
    about:
      "Estrella Wellness is the new wellness program from Estrella Medical Centers. Doctor-led weight loss with weekly visits at our Miami locations, open to everyone.",
    programs: "Program",
    programLink: "GLP-1 Weight Loss Program",
    comingSoonItems: ["Hormone Therapy", "Skin Rejuvenation"],
    comingSoon: "Coming soon",
    startLink: "Book consultation",
    clinic: "Clinic",
    process: "How it works",
    faq: "FAQ",
    login: "Patient login",
    pharmacyPartner: "Pharmacy partner",
    legal: "Legal",
    legalItems: [
      { href: "/privacy", label: "Privacy policy" },
      { href: "/terms", label: "Terms of service" },
      { href: "/refunds", label: "Refund policy" },
      { href: "/cookies", label: "Cookie policy" },
      { href: "/accessibility", label: "Accessibility" },
    ],
    contact: "Contact",
    npp: "Our HIPAA Notice of Privacy Practices is available at our clinics or by email.",
    emergency: "In a medical emergency, call 911.",
    rights: "All rights reserved.",
    designedBy: "Designed by",
    disclaimer:
      "Care in the Estrella Wellness program is provided in person by licensed clinicians at Estrella Medical Centers in Miami. Compounded medications are not FDA-approved and have not been reviewed by the FDA for safety, effectiveness or quality. When prescribed, they are prepared by our partner compounding pharmacy,",
    disclaimer2:
      "(Miami, FL, FL DOH PH35751), in response to a prescription written by an Estrella clinician. This site is for informational purposes and is not medical advice. Treatment is at the discretion of the licensed clinician, and individual results vary.",
  },
  es: {
    about:
      "Estrella Wellness es el nuevo programa de bienestar de Estrella Medical Centers. Pérdida de peso dirigida por médicos, con visitas semanales en nuestros centros de Miami y abierto para todos.",
    programs: "Programa",
    programLink: "Programa de Pérdida de Peso GLP-1",
    comingSoonItems: ["Terapia Hormonal", "Rejuvenecimiento de la Piel"],
    comingSoon: "Próximamente",
    startLink: "Agenda tu consulta",
    clinic: "Clínica",
    process: "Cómo funciona",
    faq: "Preguntas frecuentes",
    login: "Portal del paciente",
    pharmacyPartner: "Farmacia asociada",
    legal: "Legal",
    legalItems: [
      { href: "/privacy", label: "Política de privacidad" },
      { href: "/terms", label: "Términos de servicio" },
      { href: "/refunds", label: "Política de reembolso" },
      { href: "/cookies", label: "Política de cookies" },
      { href: "/accessibility", label: "Accesibilidad" },
    ],
    contact: "Contacto",
    npp: "Nuestro Aviso de Prácticas de Privacidad (HIPAA) está disponible en nuestras clínicas o por correo.",
    emergency: "En una emergencia médica, llama al 911.",
    rights: "Todos los derechos reservados.",
    designedBy: "Diseñado por",
    disclaimer:
      "La atención del programa Estrella Wellness la brindan en persona médicos licenciados en Estrella Medical Centers en Miami. Los medicamentos magistrales no están aprobados por la FDA y la FDA no ha revisado su seguridad, eficacia ni calidad. Cuando se recetan, los prepara nuestra farmacia magistral asociada,",
    disclaimer2:
      "(Miami, FL, FL DOH PH35751), en respuesta a una receta escrita por un médico de Estrella. Este sitio es informativo y no constituye consejo médico. El tratamiento queda a discreción del médico licenciado y los resultados varían según cada persona.",
  },
};

export function Footer() {
  const pathname = usePathname() || "";
  const { lang } = useLang();
  const t = pick(lang, COPY);

  if (pathname.startsWith("/qualify")) return null;

  return (
    <footer className="bg-navy-950 pb-[calc(6rem+env(safe-area-inset-bottom))] font-heading text-white/75 md:pb-0">
      {/* Main grid */}
      <div className="container-x grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <Image
            src="/logo/logo-light.png"
            alt="Estrella Medical Centers"
            width={235}
            height={110}
            className="h-12 w-auto"
          />
          <p className="mt-7 max-w-sm text-[14px] leading-[1.7] text-white/80">
            {t.about}
          </p>
          <address className="mt-8 space-y-1.5 text-[13px] not-italic text-white/75">
            <div className="font-semibold text-white">{t.contact}</div>
            <div>Estrella Medical Centers, Miami, FL</div>
            <a
              href="mailto:info@estrellamedicalcenters.com"
              className="underline-offset-2 hover:text-white hover:underline"
            >
              info@estrellamedicalcenters.com
            </a>
          </address>
          <p className="mt-6 max-w-sm text-[13px] leading-relaxed text-white/75">
            {t.emergency} {t.npp}
          </p>
        </div>

        <div className="md:col-span-2">
          <div className="text-[14px] font-semibold text-white">
            {t.programs}
          </div>
          <ul className="mt-4 space-y-1 text-[14px]">
            <li>
              <Link
                href="/programs/weight-loss"
                className="inline-block py-1.5 text-white/90 transition hover:text-white"
              >
                {t.programLink}
                <span className="ml-2 text-[13px] font-semibold text-sun-300">
                  {fmtPrice(WEIGHT_LOSS.price)}
                </span>
              </Link>
            </li>
            {t.comingSoonItems.map((item) => (
              <li key={item} className="text-white/75">
                {item}
                <span className="ml-2 text-[12px] font-semibold text-white/75">
                  {t.comingSoon}
                </span>
              </li>
            ))}
            <li>
              <Link
                href="/qualify"
                className="inline-block py-1.5 text-white/80 transition hover:text-white"
              >
                {t.startLink}
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-[14px] font-semibold text-white">
            {t.clinic}
          </div>
          <ul className="mt-4 space-y-1 text-[14px]">
            <li>
              <Link
                href="/how-it-works"
                className="inline-block py-1.5 text-white/80 hover:text-white"
              >
                {t.process}
              </Link>
            </li>
            <li>
              <Link href="/faq" className="inline-block py-1.5 text-white/80 hover:text-white">
                {t.faq}
              </Link>
            </li>
            {SHOW_PATIENT_PORTAL && (
              <li>
                <Link
                  href="/dashboard"
                  className="inline-block py-1.5 text-white/80 hover:text-white"
                >
                  {t.login}
                </Link>
              </li>
            )}
          </ul>
        </div>


        <div className="md:col-span-3">
          <div className="text-[14px] font-semibold text-white">
            {t.legal}
          </div>
          <ul className="mt-4 space-y-1 text-[14px] text-white/80">
            {t.legalItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-block py-1.5 text-white/80 underline-offset-2 hover:text-white hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom legal */}
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-4 py-8 text-[12px] leading-[1.7] text-white/75 lg:flex-row lg:items-start lg:justify-between">
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
                className="underline-offset-2 hover:text-white hover:underline"
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
              className="underline-offset-2 hover:text-white hover:underline"
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
