"use client";

import { LegalPage, type LegalDoc } from "@/components/legal/legal-page";
import { useLang, pick } from "@/lib/i18n";
import { PRICING, fmtPrice } from "@/lib/programs";

const PROMO = fmtPrice(PRICING.promo);
const REGULAR = fmtPrice(PRICING.regular);

const COPY: { en: LegalDoc; es: LegalDoc } = {
  en: {
    title: "Refund and cancellation policy",
    intro: [
      "This policy explains how billing, cancellation and refunds work for Estrella Wellness, the doctor-led GLP-1 weight loss program offered by Estrella Medical Centers in Miami, Florida. It is part of our [Terms of service](/terms).",
    ],
    sections: [
      {
        id: "summary",
        title: "The short version",
        blocks: [
          {
            title: "Automatic monthly renewal",
            callout: [
              `**The program renews automatically every month until you cancel.** You are charged **${PROMO} per month** (a limited-time price; the regular price is ${REGULAR} per month) on your monthly billing date [Billing date].`,
              "**Cancel anytime** by emailing info@estrellamedicalcenters.com or by telling our staff in person at any Estrella clinic. Cancelling stops all future monthly charges.",
            ],
          },
          {
            list: [
              "If you are not approved, or the doctor decides the program is not a fit for you, your payment is refunded in full, including if you paid in advance online.",
              "There are no refunds for injections already administered or visits already completed.",
              "There are no partial-month refunds.",
            ],
          },
        ],
      },
      {
        id: "billing",
        title: "How billing works",
        blocks: [
          "After you book, you can choose how to pay for your first month:",
          {
            list: [
              "**Pay now, online.** You pay in advance on a secure checkout page hosted by Stripe, our payment processor. Stripe processes your card, and our website never sees or stores your card number.",
              "**Pay at your visit.** You pay at the clinic at your consultation.",
            ],
          },
          "After that, the program is billed monthly to the same payment method until you cancel.",
          `Each monthly payment covers that month of the program: your care from the medical team, your weekly in-clinic GLP-1 injection, your nutritionist meal plan, guided exercise and weekly check-ins. The ${PROMO} price is a limited-time offer. If the price you pay is going to change, we will tell you before the new price is charged, and you can cancel before it takes effect.`,
        ],
      },
      {
        id: "not-a-candidate",
        title: "If you are not approved or the program is not a fit",
        blocks: [
          "Your doctor decides at your consultation whether the program is safe and right for you. If you are not approved, or the doctor decides the program is not a fit for you, we refund your payment in full and you will not be charged again. If you paid in advance online, the full refund goes back to the original payment method you used on the Stripe checkout page.",
        ],
      },
      {
        id: "how-to-cancel",
        title: "How to cancel",
        blocks: [
          "You can cancel at any time, for any reason, in either of these ways:",
          {
            list: [
              "Email info@estrellamedicalcenters.com from the email address you gave us, with your full name and a note that you want to cancel.",
              "Tell our staff in person at any Estrella clinic.",
            ],
            ordered: true,
          },
          "Cancelling stops all future monthly charges. To avoid the next monthly charge, cancel before your next billing date. We will confirm your cancellation. [Cancellation confirmation method]",
          "There is no online dashboard for cancelling right now, so please use email or tell us in person.",
        ],
      },
      {
        id: "what-is-not-refunded",
        title: "What is not refunded",
        blocks: [
          "Because the program is a medical service delivered in person, we cannot refund care you have already received:",
          {
            list: [
              "Injections already administered.",
              "Visits already completed, including consultations and check-ins.",
              "Part of a month. If you cancel partway through a billing month, we do not refund the rest of that month.",
            ],
          },
        ],
      },
      {
        id: "refund-processing",
        title: "How refunds are paid",
        blocks: [
          "Approved refunds are returned to the original payment method you used. Refunds are processed within [Refund processing time]. Your bank or card issuer may take additional time to post the refund to your account.",
        ],
      },
      {
        id: "questions",
        title: "Questions about a charge",
        blocks: [
          "If you have a question about a charge or think you were charged by mistake, email info@estrellamedicalcenters.com or speak with our staff at the clinic, and we will look into it.",
        ],
      },
    ],
  },
  es: {
    title: "Política de reembolsos y cancelación",
    intro: [
      "Esta política explica cómo funcionan la facturación, la cancelación y los reembolsos de Estrella Wellness, el programa de pérdida de peso con GLP-1 dirigido por médicos que ofrece Estrella Medical Centers en Miami, Florida. Forma parte de nuestros [Términos de servicio](/terms).",
    ],
    sections: [
      {
        id: "summary",
        title: "En resumen",
        blocks: [
          {
            title: "Renovación mensual automática",
            callout: [
              `**El programa se renueva automáticamente cada mes hasta que lo canceles.** Se te cobran **${PROMO} al mes** (precio por tiempo limitado; el precio regular es de ${REGULAR} al mes) en tu fecha de cobro mensual [Billing date].`,
              "**Cancela cuando quieras** escribiendo a info@estrellamedicalcenters.com o avisándole en persona a nuestro personal en cualquier clínica de Estrella. Al cancelar se detienen todos los cobros mensuales futuros.",
            ],
          },
          {
            list: [
              "Si no eres aprobado, o si el médico decide que el programa no es adecuado para ti, te devolvemos el pago completo, también si pagaste por adelantado en línea.",
              "No hay reembolsos por inyecciones ya aplicadas ni por visitas ya realizadas.",
              "No hay reembolsos parciales de un mes.",
            ],
          },
        ],
      },
      {
        id: "billing",
        title: "Cómo funciona la facturación",
        blocks: [
          "Después de agendar, puedes elegir cómo pagar tu primer mes:",
          {
            list: [
              "**Pagar ahora, en línea.** Pagas por adelantado en una página de pago segura alojada por Stripe, nuestro procesador de pagos. Stripe procesa tu tarjeta, y nuestro sitio web nunca ve ni guarda el número de tu tarjeta.",
              "**Pagar en tu visita.** Pagas en la clínica, en tu consulta.",
            ],
          },
          "Después, el programa se cobra cada mes al mismo método de pago hasta que lo canceles.",
          `Cada pago mensual cubre ese mes del programa: la atención del equipo médico, tu inyección semanal de GLP-1 en la clínica, tu plan de alimentación del nutricionista, el ejercicio guiado y los chequeos semanales. El precio de ${PROMO} es una oferta por tiempo limitado. Si el precio que pagas va a cambiar, te avisaremos antes de cobrar el nuevo precio y podrás cancelar antes de que entre en vigor.`,
        ],
      },
      {
        id: "not-a-candidate",
        title: "Si no eres aprobado o el programa no es adecuado para ti",
        blocks: [
          "En tu consulta, el médico decide si el programa es seguro y adecuado para ti. Si no eres aprobado, o si el médico decide que el programa no es adecuado para ti, te devolvemos el pago completo y no se te volverá a cobrar. Si pagaste por adelantado en línea, el reembolso completo se devuelve al mismo método de pago que usaste en la página de pago de Stripe.",
        ],
      },
      {
        id: "how-to-cancel",
        title: "Cómo cancelar",
        blocks: [
          "Puedes cancelar en cualquier momento y por cualquier motivo, de cualquiera de estas dos formas:",
          {
            list: [
              "Escribe a info@estrellamedicalcenters.com desde el correo que nos diste, con tu nombre completo y una nota diciendo que quieres cancelar.",
              "Avísale en persona a nuestro personal en cualquier clínica de Estrella.",
            ],
            ordered: true,
          },
          "Al cancelar se detienen todos los cobros mensuales futuros. Para evitar el próximo cobro, cancela antes de tu próxima fecha de cobro. Te confirmaremos la cancelación. [Cancellation confirmation method]",
          "Por ahora no hay un panel en línea para cancelar, así que escríbenos o avísanos en persona.",
        ],
      },
      {
        id: "what-is-not-refunded",
        title: "Lo que no se reembolsa",
        blocks: [
          "Como el programa es un servicio médico que se brinda en persona, no podemos reembolsar la atención que ya recibiste:",
          {
            list: [
              "Inyecciones ya aplicadas.",
              "Visitas ya realizadas, incluidas las consultas y los chequeos.",
              "Partes de un mes. Si cancelas a mitad de un mes de facturación, no reembolsamos el resto de ese mes.",
            ],
          },
        ],
      },
      {
        id: "refund-processing",
        title: "Cómo se pagan los reembolsos",
        blocks: [
          "Los reembolsos aprobados se devuelven al método de pago original que usaste. Los reembolsos se procesan en un plazo de [Refund processing time]. Tu banco o el emisor de tu tarjeta puede tardar un poco más en reflejarlo en tu cuenta.",
        ],
      },
      {
        id: "questions",
        title: "Preguntas sobre un cobro",
        blocks: [
          "Si tienes una pregunta sobre un cobro o crees que se te cobró por error, escríbenos a info@estrellamedicalcenters.com o habla con nuestro personal en la clínica, y lo revisaremos.",
        ],
      },
    ],
  },
};

export default function RefundsPage() {
  const { lang } = useLang();
  const t = pick(lang, COPY);
  return <LegalPage doc={t} />;
}
