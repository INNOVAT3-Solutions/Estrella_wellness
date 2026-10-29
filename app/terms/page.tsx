"use client";

import { LegalPage, type LegalDoc } from "@/components/legal/legal-page";
import { useLang, pick } from "@/lib/i18n";
import { PRICING, fmtPrice } from "@/lib/programs";

const PROMO = fmtPrice(PRICING.promo);
const REGULAR = fmtPrice(PRICING.regular);

const COPY: { en: LegalDoc; es: LegalDoc } = {
  en: {
    title: "Terms of service",
    intro: [
      "These terms govern your use of this website and your participation in Estrella Wellness, the doctor-led GLP-1 weight loss program offered by Estrella Medical Centers ([Legal entity name]) in Miami, Florida. In these terms, \"Estrella\", \"we\" and \"us\" mean Estrella Medical Centers, and \"you\" means the person using the site or joining the program.",
      "Please read them carefully, especially the sections on payment and automatic renewal, cancellation and compounded medication.",
    ],
    sections: [
      {
        id: "acceptance",
        title: "Accepting these terms",
        blocks: [
          "By using this website, booking a consultation through our booking form or joining the program, you agree to these terms and to our [Privacy policy](/privacy). If you don't agree, please don't use the site or join the program.",
        ],
      },
      {
        id: "eligibility",
        title: "Who can join",
        blocks: [
          "To join the program you must:",
          {
            list: [
              "Be 18 years of age or older.",
              "Be able to visit an Estrella location in Miami, Florida, in person. Consultations, blood work review, weekly injections and check-ins happen at our clinics.",
              "Be found to be a suitable candidate by an Estrella doctor.",
            ],
          },
          "Care is available in English and Spanish.",
        ],
      },
      {
        id: "booking",
        title: "Booking a consultation",
        blocks: [
          "To book, you fill out a short form on this website with your full name, phone number, email address, preferred Estrella location, and preferred date and time within our operating hours (Monday to Friday, 8:00 AM to 6:00 PM, and Saturday, 9:00 AM to 1:00 PM). The form does not ask for health information.",
          "After you book, someone from the Estrella team will call you to ask a few more questions about your health and coordinate your visit. Your appointment is confirmed when our team confirms it with you. If your preferred time is not available, we will offer you another one.",
          "Submitting the form does not guarantee that you will be accepted into the program. Only an Estrella doctor can decide, at your consultation, whether the program is right for you.",
        ],
      },
      {
        id: "communications",
        title: "Calls, text messages and email",
        blocks: [
          "When you book, you agree that Estrella may contact you by phone, text message or email at the number and address you give us, about your booking, your visit and your care. Message and data rates may apply, and message frequency varies.",
          "You can reply **STOP** to any text message to stop receiving texts, or reply **HELP** for help. You can also ask us to stop calls or emails at any time by contacting us. Agreeing to be contacted is not a condition of buying any product or service. If you prefer not to be contacted this way, you can book by calling the clinic or emailing info@estrellamedicalcenters.com. See our [Privacy policy](/privacy) for more.",
        ],
      },
      {
        id: "emergencies",
        title: "Not for emergencies",
        blocks: [
          {
            callout: [
              "**This website and the program are not for medical emergencies.** If you think you are having a medical emergency, call 911 or go to the nearest emergency room right away. Do not use email or the website to report an emergency.",
            ],
          },
        ],
      },
      {
        id: "medical-services",
        title: "Medical services",
        blocks: [
          "Medical care in the program is provided by licensed clinicians who use their own independent professional judgment. Your doctor decides whether the program is right for you and, if so, which GLP-1 medication and dose are appropriate. Clinicians may decline to start or continue treatment, or change your plan, when they believe it is not safe or appropriate for you.",
          "The program includes a doctor consultation, a review of your blood work, a GLP-1 medication chosen by your doctor and given as a weekly injection by our medical team in the clinic, a meal plan from a nutritionist, guided exercise and weekly check-ins.",
          "Information on this website is general and educational. It is not medical advice and does not replace a consultation with a clinician. Using the website or booking a consultation does not by itself create a doctor-patient relationship.",
        ],
      },
      {
        id: "no-guarantee",
        title: "No guarantee of results",
        blocks: [
          "Weight loss results vary from person to person and depend on many factors, including your health, your response to medication and how closely you follow your plan. We do not guarantee any particular result. GLP-1 medications can cause side effects, which your doctor will discuss with you.",
        ],
      },
      {
        id: "your-responsibilities",
        title: "Your responsibilities",
        blocks: [
          "Your safety depends on the information you give us. You agree to:",
          {
            list: [
              "Give complete, accurate and truthful information about your health, medications, allergies, pregnancy status and history, and keep it up to date.",
              "Tell your care team promptly about any side effects, new medications, pregnancy or other changes in your health.",
              "Follow your care team's instructions and attend your scheduled visits.",
            ],
          },
        ],
      },
      {
        id: "payment-and-auto-renewal",
        title: "Payment and automatic renewal",
        blocks: [
          {
            title: "Automatic monthly renewal",
            callout: [
              `**Your Estrella Wellness program renews automatically every month until you cancel.** The current limited-time price is **${PROMO} per month** (the regular price is ${REGULAR} per month). By joining, you authorize us to charge your payment method ${PROMO} each month on your monthly billing date [Billing date], until you cancel.`,
              "**How to cancel:** email info@estrellamedicalcenters.com or tell our staff in person at any Estrella clinic. You can cancel at any time. Cancelling stops all future monthly charges.",
            ],
          },
          "After you book, you can choose to pay your first month now or pay at your visit.",
          {
            list: [
              "**Pay now:** you pay online on a secure checkout page hosted by Stripe, our payment processor. Stripe processes your card under its own terms and privacy policy, and our website never sees or stores your card number.",
              "**Pay at your visit:** you pay at the clinic at your consultation.",
            ],
          },
          "**If you are not approved, or the doctor decides at your consultation that the program is not a fit for you, your payment is refunded in full**, to the original payment method if you paid online.",
          `The ${PROMO} price is a limited-time offer. If the price you pay is going to change, we will tell you in advance, before the new price is charged, and you can cancel before it takes effect. [Price-change notice period]`,
          "We will send you a confirmation of these renewal terms and how to cancel after you join. [Confirmation method: email or printed receipt]",
          "Estrella Wellness is direct-pay. You are responsible for all charges for the program.",
        ],
      },
      {
        id: "cancellation-and-refunds",
        title: "Cancellation and refunds",
        blocks: [
          "You can cancel at any time by emailing info@estrellamedicalcenters.com or telling our staff in person at the clinic. Cancelling stops future monthly charges. You keep access to the care already paid for during your current month. [Confirm: care continues through the end of the paid month after cancelling]",
          "We do not give refunds for injections already administered or visits already completed, and we do not give partial-month refunds. The full details are in our [Refund and cancellation policy](/refunds).",
        ],
      },
      {
        id: "compounded-medication",
        title: "Compounded medication",
        blocks: [
          {
            title: "Important information about compounded medication",
            callout: [
              "Your doctor may prescribe a compounded medication. Compounded medications may be prepared and dispensed by our partner compounding pharmacy, Greenstone Rx in Miami, Florida, based on a prescription from your doctor.",
              "**Compounded drugs are not FDA-approved. The FDA has not reviewed compounded drugs for safety, effectiveness or quality.**",
              "Your doctor will talk with you about the medication chosen for you, its risks and its alternatives. Please ask any questions before you start treatment.",
            ],
          },
        ],
      },
      {
        id: "acceptable-use",
        title: "Acceptable use of the website",
        blocks: [
          "When using this website, you agree not to:",
          {
            list: [
              "Give false information, or submit information on behalf of someone else without their permission.",
              "Use the site for any unlawful purpose.",
              "Try to gain unauthorized access to the site or its systems, or interfere with how it works.",
              "Copy, scrape or collect content or data from the site by automated means.",
            ],
          },
        ],
      },
      {
        id: "intellectual-property",
        title: "Intellectual property",
        blocks: [
          "The content of this website, including text, graphics, logos and design, belongs to Estrella or its licensors and is protected by law. You may view and print it for your personal, non-commercial use. Any other use requires our written permission. Your meal plans and exercise guidance are for your personal use only.",
        ],
      },
      {
        id: "disclaimers",
        title: "Disclaimers",
        blocks: [
          "We work to keep this website accurate and available, but it is provided \"as is\" and \"as available\". To the extent the law allows, we do not make warranties about the website, including that it will always be available, error-free or free of harmful components.",
          "Nothing in these terms limits any duty of care your clinicians owe you under Florida law, or any right you have that cannot be waived by law.",
        ],
      },
      {
        id: "limitation-of-liability",
        title: "Limitation of liability",
        blocks: [
          "To the extent the law allows, Estrella is not liable for indirect, incidental, special or consequential damages arising from your use of this website. For claims about your use of this website, our total liability will not exceed the amount you paid us for the program in the three months before the claim arose.",
          "This section does not limit liability for medical negligence, gross negligence, intentional misconduct, or any other liability that cannot be limited under Florida law.",
        ],
      },
      {
        id: "governing-law",
        title: "Governing law and venue",
        blocks: [
          "These terms are governed by the laws of the State of Florida, without regard to its conflict of law rules. Any legal action relating to these terms or the program must be brought in the state or federal courts located in Miami-Dade County, Florida, and you and Estrella agree to the jurisdiction of those courts.",
        ],
      },
      {
        id: "changes",
        title: "Changes to these terms",
        blocks: [
          "We may update these terms from time to time. When we do, we will change the date at the top of this page. If a change materially affects your program, such as a change to the price or the renewal terms, we will tell you in advance and you can cancel before it takes effect. Continuing in the program after a change takes effect means you accept the updated terms.",
        ],
      },
      {
        id: "contact",
        title: "Contact us",
        blocks: [
          "Questions about these terms can be sent to:",
          {
            list: [
              "Email: info@estrellamedicalcenters.com",
              "Mail: Estrella Medical Centers, [Legal entity name], [Mailing address]",
              "Phone: [Phone number]",
            ],
          },
        ],
      },
    ],
  },
  es: {
    title: "Términos de servicio",
    intro: [
      "Estos términos rigen el uso de este sitio web y tu participación en Estrella Wellness, el programa de pérdida de peso con GLP-1 dirigido por médicos que ofrece Estrella Medical Centers ([Legal entity name]) en Miami, Florida. En estos términos, \"Estrella\" y \"nosotros\" se refieren a Estrella Medical Centers, y \"tú\" se refiere a la persona que usa el sitio o se inscribe en el programa.",
      "Léelos con atención, sobre todo las secciones de pago y renovación automática, cancelación y medicamentos magistrales.",
    ],
    sections: [
      {
        id: "acceptance",
        title: "Aceptación de estos términos",
        blocks: [
          "Al usar este sitio web, agendar una consulta con nuestro formulario o inscribirte en el programa, aceptas estos términos y nuestra [Política de privacidad](/privacy). Si no estás de acuerdo, por favor no uses el sitio ni te inscribas en el programa.",
        ],
      },
      {
        id: "eligibility",
        title: "Quién puede inscribirse",
        blocks: [
          "Para inscribirte en el programa debes:",
          {
            list: [
              "Tener 18 años o más.",
              "Poder visitar en persona un centro de Estrella en Miami, Florida. Las consultas, la revisión de laboratorios, las inyecciones semanales y los chequeos se hacen en nuestras clínicas.",
              "Ser considerado candidato adecuado por un médico de Estrella.",
            ],
          },
          "Atendemos en español y en inglés.",
        ],
      },
      {
        id: "booking",
        title: "Cómo agendar una consulta",
        blocks: [
          "Para agendar, llenas un formulario corto en este sitio web con tu nombre completo, número de teléfono, correo electrónico, el centro Estrella que prefieres, y la fecha y la hora que prefieres dentro de nuestro horario (de lunes a viernes, de 8:00 AM a 6:00 PM, y los sábados, de 9:00 AM a 1:00 PM). El formulario no pide información de salud.",
          "Después de agendar, alguien del equipo de Estrella te llamará para hacerte algunas preguntas sobre tu salud y coordinar tu visita. Tu cita queda confirmada cuando nuestro equipo la confirma contigo. Si la hora que prefieres no está disponible, te ofreceremos otra.",
          "Enviar el formulario no garantiza que seas aceptado en el programa. Solo un médico de Estrella puede decidir, en tu consulta, si el programa es adecuado para ti.",
        ],
      },
      {
        id: "communications",
        title: "Llamadas, mensajes de texto y correo electrónico",
        blocks: [
          "Al agendar, aceptas que Estrella te contacte por teléfono, mensaje de texto o correo electrónico, al número y la dirección que nos des, sobre tu cita, tu visita y tu atención. Pueden aplicarse cargos por mensajes y datos, y la frecuencia de los mensajes varía.",
          "Puedes responder **STOP** a cualquier mensaje de texto para dejar de recibirlos, o **HELP** para pedir ayuda. También puedes pedirnos en cualquier momento que dejemos de llamarte o escribirte por correo. Aceptar que te contactemos no es una condición para comprar ningún producto o servicio. Si prefieres que no te contactemos de esta forma, puedes agendar llamando a la clínica o escribiendo a info@estrellamedicalcenters.com. Consulta nuestra [Política de privacidad](/privacy) para más detalles.",
        ],
      },
      {
        id: "emergencies",
        title: "No es para emergencias",
        blocks: [
          {
            callout: [
              "**Este sitio web y el programa no son para emergencias médicas.** Si crees que tienes una emergencia médica, llama al 911 o ve de inmediato a la sala de emergencias más cercana. No uses el correo electrónico ni el sitio web para reportar una emergencia.",
            ],
          },
        ],
      },
      {
        id: "medical-services",
        title: "Servicios médicos",
        blocks: [
          "La atención médica del programa la brindan profesionales clínicos con licencia, que actúan según su propio criterio profesional e independiente. Tu médico decide si el programa es adecuado para ti y, de serlo, qué medicamento GLP-1 y qué dosis son apropiados. Los médicos pueden negarse a iniciar o continuar un tratamiento, o cambiar tu plan, cuando consideren que no es seguro o adecuado para ti.",
          "El programa incluye una consulta médica, la revisión de tus laboratorios, un medicamento GLP-1 elegido por tu médico y aplicado como inyección semanal por nuestro equipo médico en la clínica, un plan de alimentación de un nutricionista, ejercicio guiado y chequeos semanales.",
          "La información de este sitio web es general y educativa. No es consejo médico y no reemplaza una consulta con un profesional clínico. Usar el sitio o agendar una consulta no crea por sí solo una relación médico-paciente.",
        ],
      },
      {
        id: "no-guarantee",
        title: "Sin garantía de resultados",
        blocks: [
          "Los resultados de pérdida de peso varían de persona a persona y dependen de muchos factores, como tu salud, cómo respondes al medicamento y qué tanto sigues tu plan. No garantizamos ningún resultado en particular. Los medicamentos GLP-1 pueden causar efectos secundarios, que tu médico hablará contigo.",
        ],
      },
      {
        id: "your-responsibilities",
        title: "Tus responsabilidades",
        blocks: [
          "Tu seguridad depende de la información que nos das. Te comprometes a:",
          {
            list: [
              "Darnos información completa, correcta y veraz sobre tu salud, medicamentos, alergias, embarazo e historial, y mantenerla al día.",
              "Avisar pronto a tu equipo de atención si tienes efectos secundarios, empiezas otro medicamento, quedas embarazada o tu salud cambia.",
              "Seguir las indicaciones de tu equipo de atención y asistir a tus visitas programadas.",
            ],
          },
        ],
      },
      {
        id: "payment-and-auto-renewal",
        title: "Pago y renovación automática",
        blocks: [
          {
            title: "Renovación mensual automática",
            callout: [
              `**Tu programa Estrella Wellness se renueva automáticamente cada mes hasta que lo canceles.** El precio actual por tiempo limitado es de **${PROMO} al mes** (el precio regular es de ${REGULAR} al mes). Al inscribirte, nos autorizas a cobrar ${PROMO} a tu método de pago cada mes en tu fecha de cobro mensual [Billing date], hasta que canceles.`,
              "**Cómo cancelar:** escríbenos a info@estrellamedicalcenters.com o avísale en persona a nuestro personal en cualquier clínica de Estrella. Puedes cancelar cuando quieras. Al cancelar se detienen todos los cobros mensuales futuros.",
            ],
          },
          "Después de agendar, puedes elegir pagar tu primer mes ahora o pagar en tu visita.",
          {
            list: [
              "**Pagar ahora:** pagas en línea en una página de pago segura alojada por Stripe, nuestro procesador de pagos. Stripe procesa tu tarjeta según sus propios términos y política de privacidad, y nuestro sitio web nunca ve ni guarda el número de tu tarjeta.",
              "**Pagar en tu visita:** pagas en la clínica, en tu consulta.",
            ],
          },
          "**Si no eres aprobado, o si en la consulta el médico decide que el programa no es adecuado para ti, te devolvemos el pago completo**, al mismo método de pago si pagaste en línea.",
          `El precio de ${PROMO} es una oferta por tiempo limitado. Si el precio que pagas va a cambiar, te avisaremos con anticipación, antes de cobrar el nuevo precio, y podrás cancelar antes de que entre en vigor. [Price-change notice period]`,
          "Después de inscribirte te enviaremos una confirmación de estas condiciones de renovación y de cómo cancelar. [Confirmation method: email or printed receipt]",
          "Estrella Wellness es de pago directo. Eres responsable de todos los cargos del programa.",
        ],
      },
      {
        id: "cancellation-and-refunds",
        title: "Cancelación y reembolsos",
        blocks: [
          "Puedes cancelar en cualquier momento escribiendo a info@estrellamedicalcenters.com o avisándole en persona a nuestro personal en la clínica. Al cancelar se detienen los cobros mensuales futuros. Conservas la atención que ya pagaste durante tu mes en curso. [Confirm: care continues through the end of the paid month after cancelling]",
          "No hacemos reembolsos por inyecciones ya aplicadas ni por visitas ya realizadas, ni reembolsos parciales de un mes. Todos los detalles están en nuestra [Política de reembolsos y cancelación](/refunds).",
        ],
      },
      {
        id: "compounded-medication",
        title: "Medicamentos magistrales",
        blocks: [
          {
            title: "Información importante sobre los medicamentos magistrales",
            callout: [
              "Tu médico puede recetarte un medicamento magistral (compuesto). Los medicamentos magistrales pueden ser preparados y dispensados por nuestra farmacia magistral asociada, Greenstone Rx, en Miami, Florida, con base en una receta de tu médico.",
              "**Los medicamentos magistrales no están aprobados por la FDA. La FDA no ha revisado su seguridad, eficacia ni calidad.**",
              "Tu médico hablará contigo sobre el medicamento elegido para ti, sus riesgos y sus alternativas. Haz todas tus preguntas antes de empezar el tratamiento.",
            ],
          },
        ],
      },
      {
        id: "acceptable-use",
        title: "Uso aceptable del sitio web",
        blocks: [
          "Al usar este sitio web, te comprometes a no:",
          {
            list: [
              "Dar información falsa, ni enviar información en nombre de otra persona sin su permiso.",
              "Usar el sitio para fines ilegales.",
              "Intentar acceder sin autorización al sitio o a sus sistemas, ni interferir con su funcionamiento.",
              "Copiar, extraer o recopilar contenido o datos del sitio por medios automatizados.",
            ],
          },
        ],
      },
      {
        id: "intellectual-property",
        title: "Propiedad intelectual",
        blocks: [
          "El contenido de este sitio web, incluidos los textos, gráficos, logotipos y diseño, pertenece a Estrella o a sus licenciantes y está protegido por la ley. Puedes verlo e imprimirlo para tu uso personal y no comercial. Cualquier otro uso requiere nuestro permiso por escrito. Tus planes de alimentación y de ejercicio son solo para tu uso personal.",
        ],
      },
      {
        id: "disclaimers",
        title: "Exención de garantías",
        blocks: [
          "Trabajamos para que este sitio web sea correcto y esté disponible, pero se ofrece \"tal cual\" y \"según disponibilidad\". En la medida en que la ley lo permita, no damos garantías sobre el sitio web, incluida la de que siempre esté disponible, no tenga errores o esté libre de componentes dañinos.",
          "Nada en estos términos limita el deber de cuidado que tus médicos tienen contigo según las leyes de Florida, ni ningún derecho que la ley no permita renunciar.",
        ],
      },
      {
        id: "limitation-of-liability",
        title: "Limitación de responsabilidad",
        blocks: [
          "En la medida en que la ley lo permita, Estrella no es responsable por daños indirectos, incidentales, especiales o consecuentes derivados del uso de este sitio web. Para reclamos sobre el uso de este sitio web, nuestra responsabilidad total no superará lo que nos pagaste por el programa en los tres meses anteriores al reclamo.",
          "Esta sección no limita la responsabilidad por negligencia médica, negligencia grave, conducta intencional ni ninguna otra responsabilidad que no pueda limitarse según las leyes de Florida.",
        ],
      },
      {
        id: "governing-law",
        title: "Ley aplicable y jurisdicción",
        blocks: [
          "Estos términos se rigen por las leyes del Estado de Florida, sin tener en cuenta sus normas sobre conflicto de leyes. Cualquier acción legal relacionada con estos términos o con el programa debe presentarse ante los tribunales estatales o federales ubicados en el Condado de Miami-Dade, Florida, y tanto tú como Estrella aceptan la jurisdicción de esos tribunales.",
        ],
      },
      {
        id: "changes",
        title: "Cambios a estos términos",
        blocks: [
          "Podemos actualizar estos términos de vez en cuando. Si lo hacemos, cambiaremos la fecha al inicio de esta página. Si un cambio afecta de forma importante tu programa, como un cambio de precio o de las condiciones de renovación, te avisaremos con anticipación y podrás cancelar antes de que entre en vigor. Si sigues en el programa después de que un cambio entre en vigor, aceptas los términos actualizados.",
        ],
      },
      {
        id: "contact",
        title: "Contáctanos",
        blocks: [
          "Puedes enviar tus preguntas sobre estos términos a:",
          {
            list: [
              "Correo electrónico: info@estrellamedicalcenters.com",
              "Correo postal: Estrella Medical Centers, [Legal entity name], [Mailing address]",
              "Teléfono: [Phone number]",
            ],
          },
        ],
      },
    ],
  },
};

export default function TermsPage() {
  const { lang } = useLang();
  const t = pick(lang, COPY);
  return <LegalPage doc={t} />;
}
