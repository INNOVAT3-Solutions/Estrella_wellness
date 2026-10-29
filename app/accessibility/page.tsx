"use client";

import { LegalPage, type LegalDoc } from "@/components/legal/legal-page";
import { useLang, pick } from "@/lib/i18n";

const COPY: { en: LegalDoc; es: LegalDoc } = {
  en: {
    title: "Accessibility statement",
    intro: [
      "Estrella Medical Centers wants everyone to be able to learn about Estrella Wellness and get care, including people with disabilities. This statement explains our commitment and how to reach us if something on this website doesn't work for you.",
    ],
    sections: [
      {
        id: "our-commitment",
        title: "Our commitment",
        blocks: [
          "We are committed to making this website conform to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. These guidelines explain how to make web content easier to use for people with a wide range of disabilities, including visual, hearing, motor and cognitive disabilities.",
        ],
      },
      {
        id: "ongoing-efforts",
        title: "What we are doing",
        blocks: [
          "Accessibility is ongoing work. Our efforts include:",
          {
            list: [
              "Using clear headings, labels and page structure so the site works with screen readers and other assistive technology.",
              "Making sure the site can be used with a keyboard, with visible focus indicators.",
              "Choosing text and background colors with sufficient contrast.",
              "Writing in plain language.",
              "Reviewing new pages and features for accessibility as we build them, and fixing problems when we find them.",
            ],
          },
        ],
      },
      {
        id: "languages",
        title: "English and Spanish",
        blocks: [
          "The entire website is available in English and Spanish. Use the EN / ES toggle at the top of any page to switch. Our care team also serves patients in both languages.",
        ],
      },
      {
        id: "report-a-barrier",
        title: "Ask for help or report a barrier",
        blocks: [
          "If you have trouble using any part of this website, or need information in a different format, please email info@estrellamedicalcenters.com. It helps to include:",
          {
            list: [
              "The page address (URL) where you had the problem.",
              "A short description of the problem.",
              "The browser, device and any assistive technology you were using, if you know it.",
              "The best way to contact you.",
            ],
          },
          "We will do our best to help you get the information or service you need and to fix the problem. You can also reach us by phone at [Phone number].",
        ],
      },
      {
        id: "in-clinic",
        title: "Accommodations at our clinics",
        blocks: [
          "Accommodations are available at our clinics on request. If you need an accommodation for your visits, let us know by email at info@estrellamedicalcenters.com or tell our staff, ideally before your appointment, so we can be ready for you.",
        ],
      },
      {
        id: "known-limitations",
        title: "Known limitations",
        blocks: [
          "Despite our efforts, some parts of the site may not yet be fully accessible. We review the site regularly, and we welcome your feedback so we can keep improving.",
        ],
      },
    ],
  },
  es: {
    title: "Declaración de accesibilidad",
    intro: [
      "En Estrella Medical Centers queremos que todas las personas, incluidas las personas con discapacidad, puedan conocer Estrella Wellness y recibir atención. Esta declaración explica nuestro compromiso y cómo comunicarte con nosotros si algo en este sitio web no te funciona.",
    ],
    sections: [
      {
        id: "our-commitment",
        title: "Nuestro compromiso",
        blocks: [
          "Nos comprometemos a que este sitio web cumpla con las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1, nivel AA. Estas pautas explican cómo hacer que el contenido web sea más fácil de usar para personas con distintos tipos de discapacidad, como discapacidades visuales, auditivas, motrices y cognitivas.",
        ],
      },
      {
        id: "ongoing-efforts",
        title: "Lo que estamos haciendo",
        blocks: [
          "La accesibilidad es un trabajo continuo. Entre nuestros esfuerzos:",
          {
            list: [
              "Usamos encabezados, etiquetas y una estructura clara para que el sitio funcione con lectores de pantalla y otras tecnologías de asistencia.",
              "Nos aseguramos de que el sitio se pueda usar con el teclado, con indicadores de foco visibles.",
              "Elegimos colores de texto y fondo con suficiente contraste.",
              "Escribimos en lenguaje sencillo.",
              "Revisamos la accesibilidad de las nuevas páginas y funciones mientras las creamos, y corregimos los problemas cuando los encontramos.",
            ],
          },
        ],
      },
      {
        id: "languages",
        title: "Español e inglés",
        blocks: [
          "Todo el sitio web está disponible en español y en inglés. Usa el selector EN / ES en la parte superior de cualquier página para cambiar de idioma. Nuestro equipo de atención también atiende a los pacientes en ambos idiomas.",
        ],
      },
      {
        id: "report-a-barrier",
        title: "Pide ayuda o reporta una barrera",
        blocks: [
          "Si tienes dificultades para usar alguna parte de este sitio web, o necesitas la información en otro formato, escríbenos a info@estrellamedicalcenters.com. Nos ayuda que incluyas:",
          {
            list: [
              "La dirección (URL) de la página donde tuviste el problema.",
              "Una breve descripción del problema.",
              "El navegador, el dispositivo y la tecnología de asistencia que usabas, si lo sabes.",
              "La mejor forma de comunicarnos contigo.",
            ],
          },
          "Haremos todo lo posible para que obtengas la información o el servicio que necesitas y para corregir el problema. También puedes llamarnos al [Phone number].",
        ],
      },
      {
        id: "in-clinic",
        title: "Adaptaciones en nuestras clínicas",
        blocks: [
          "En nuestras clínicas ofrecemos adaptaciones a petición. Si necesitas alguna adaptación para tus visitas, avísanos por correo a info@estrellamedicalcenters.com o díselo a nuestro personal, de preferencia antes de tu cita, para que podamos estar listos para recibirte.",
        ],
      },
      {
        id: "known-limitations",
        title: "Limitaciones conocidas",
        blocks: [
          "A pesar de nuestros esfuerzos, es posible que algunas partes del sitio todavía no sean totalmente accesibles. Revisamos el sitio con regularidad y agradecemos tus comentarios para seguir mejorando.",
        ],
      },
    ],
  },
};

export default function AccessibilityPage() {
  const { lang } = useLang();
  const t = pick(lang, COPY);
  return <LegalPage doc={t} />;
}
