"use client";

import { LegalPage, type LegalDoc } from "@/components/legal/legal-page";
import { useLang, pick } from "@/lib/i18n";

const COPY: { en: LegalDoc; es: LegalDoc } = {
  en: {
    title: "Privacy policy",
    intro: [
      "This policy explains how Estrella Medical Centers ([Legal entity name]), a medical group in Miami, Florida, collects, uses and protects personal information through this website and in connection with Estrella Wellness, our doctor-led GLP-1 weight loss program. In this policy, \"Estrella\", \"we\" and \"us\" mean Estrella Medical Centers.",
      "Health information you share with us for your care is also protected by our HIPAA Notice of Privacy Practices, which is provided separately. If this policy and that notice differ on how your health information is handled, the Notice of Privacy Practices controls.",
    ],
    sections: [
      {
        id: "information-we-collect",
        title: "Information we collect",
        blocks: [
          "When you book a consultation on this website, our booking form asks only for:",
          {
            list: [
              "Your full name, phone number and email address.",
              "The Estrella location you prefer.",
              "The date and time you prefer for your visit.",
              "A record of your consent: that you agreed to our [Terms of service](/terms) and this Privacy policy, and that you agreed to be contacted by phone, text message or email about your booking, along with when you gave that consent.",
            ],
          },
          "**We do not collect health information on this website.** The booking form does not ask about your health, and you should not include health details when you book. Your health history, current medications, allergies and other health questions are discussed by phone with the Estrella team and in person at your clinic visit.",
          "**Payment information.** If you choose to pay in advance, you pay on a checkout page hosted by Stripe, our payment processor. Stripe collects and processes your card details under its own privacy policy. Our website never sees or stores your card number. We receive confirmation of the payment and limited details about it, such as the amount, the date and the last four digits of the card, to manage your billing, cancellations and refunds.",
          "**Health information from your care.** When you talk with our team by phone and when you visit the clinic, we collect health information, and we create medical records such as notes from your doctor consultation, blood work results, medications given and check-in results. That information is covered by our HIPAA Notice of Privacy Practices.",
          "We also keep anything else you choose to tell us when you contact us.",
          "The website itself does not use analytics, advertising pixels or cookies, and it does not include third-party embeds. It stores two small items in your own browser, explained below and in our [Cookie policy](/cookies).",
        ],
      },
      {
        id: "how-booking-works",
        title: "Where your booking information goes",
        blocks: [
          "When you submit the booking form, your information is sent over a secure, encrypted (HTTPS) connection from our website's server to our booking and patient communication system, provided by [CRM provider]. Our website does not store your booking in its own database.",
          "Our team uses that system to call you, ask a few more questions, and coordinate your visit.",
        ],
      },
      {
        id: "browser-storage",
        title: "Information stored in your browser",
        blocks: [
          "To work properly, the site saves two items in your browser's storage. They stay on your device and are not sent to anyone:",
          {
            list: [
              "**estrella-lang** (local storage): remembers whether you chose English or Spanish.",
              "**estrella-booking** (session storage): keeps a short summary of your booking (your name, preferred location, date and time) so the payment page can show it to you. It is kept only in that browser tab and is cleared when you close the tab. It does not contain health or payment information.",
            ],
          },
          "If you use a shared or public computer, we recommend closing the tab when you finish.",
        ],
      },
      {
        id: "how-we-use-information",
        title: "How we use information",
        blocks: [
          "We use personal information to:",
          {
            list: [
              "Schedule your consultation and contact you about your booking.",
              "Evaluate whether the program is safe and appropriate for you.",
              "Provide your care, including consultations, blood work review, medication, nutrition and exercise guidance, and weekly check-ins.",
              "Communicate with you about appointments, your care and your questions, in English or Spanish.",
              "Process payments, monthly billing, cancellations and refunds.",
              "Meet our legal, regulatory and professional obligations, and protect the safety of patients and staff.",
            ],
          },
          "We do not sell your personal information, and we do not share it for targeted advertising.",
        ],
      },
      {
        id: "communications",
        title: "Phone calls, text messages and email",
        blocks: [
          "When you book, you agree that Estrella may contact you by phone, text message or email at the number and address you give us, about your booking, your visit and your care. Message and data rates may apply, and message frequency varies.",
          "You can reply **STOP** to any text message to stop receiving texts, or reply **HELP** for help. You can also ask us to stop calls or emails at any time by contacting us. Agreeing to be contacted is not a condition of buying any product or service. If you prefer not to receive calls or texts, call the clinic or email info@estrellamedicalcenters.com to book.",
          "We do not use your phone number or email address for marketing unless you separately agree to it, and we do not share them with others for their marketing.",
        ],
      },
      {
        id: "how-we-share-information",
        title: "How we share information",
        blocks: [
          "We share personal information only as needed to care for you and run the program:",
          {
            list: [
              "**Your care team** at Estrella, including doctors, nurses, nutritionists and staff involved in your care.",
              "**Our partner pharmacy.** If your doctor prescribes a compounded medication, the prescription and the information needed to fill it are sent to our partner compounding pharmacy, Greenstone Rx in Miami.",
              "**Stripe**, our payment processor, to collect payments and issue refunds. Stripe handles card information under its own privacy policy, available at [stripe.com/privacy](https://stripe.com/privacy).",
              "**[CRM provider]**, which runs our booking and patient communication system and receives the information you enter in the booking form.",
              "**Other service providers** that help us operate, such as website hosting, technology and communication vendors, under contracts that require them to protect the information and use it only for the services they provide to us.",
              "**When required by law**, for example in response to a valid legal request, to report as required by public health laws, or to protect someone's health or safety.",
            ],
          },
          "Health information is shared only as permitted by HIPAA and Florida law, as described in our Notice of Privacy Practices.",
        ],
      },
      {
        id: "security",
        title: "Security",
        blocks: [
          "We use administrative, technical and physical safeguards designed to protect personal information from unauthorized access, use or disclosure. No website, network or storage system is completely secure, so we cannot guarantee absolute security. Please contact us right away if you believe your information has been put at risk.",
        ],
      },
      {
        id: "data-breach",
        title: "If a data breach happens",
        blocks: [
          "If a security breach affects your personal information, we will notify you and, where required, the Florida Department of Legal Affairs, as required by the Florida Information Protection Act (Fla. Stat. §501.171). Breaches involving health information will also be handled as required by HIPAA.",
        ],
      },
      {
        id: "retention",
        title: "How long we keep information",
        blocks: [
          "We keep medical records for as long as Florida law and professional rules require, and other information (such as billing records) for as long as needed for the purposes described here or as required by law. Booking information sent through the website is kept in our booking system, provided by [CRM provider], for as long as needed to schedule and support your care or as required by law. The booking summary stored in your browser is cleared when you close the tab.",
        ],
      },
      {
        id: "your-choices-and-rights",
        title: "Your choices and rights",
        blocks: [
          "Depending on the information and the law that applies, you can ask to:",
          {
            list: [
              "Access or get a copy of your information.",
              "Correct information that is inaccurate or incomplete.",
              "Delete information, where applicable. Some records, such as medical and billing records, must be kept by law and cannot be deleted on request.",
            ],
          },
          "Your rights over your health information, such as getting a copy of your medical record, are explained in our Notice of Privacy Practices. Florida residents, and anyone else with a question or request about their information, can contact us at info@estrellamedicalcenters.com. We may need to confirm your identity before acting on a request.",
          "You can also clear the information stored in your browser at any time. See our [Cookie policy](/cookies) for how.",
        ],
      },
      {
        id: "children",
        title: "Children",
        blocks: [
          "This website and the program are for adults 18 and older. We do not knowingly collect personal information from anyone under 18. If you believe a minor has given us information, contact us and we will delete it where the law allows.",
        ],
      },
      {
        id: "notice-of-privacy-practices",
        title: "HIPAA Notice of Privacy Practices",
        blocks: [
          "Our Notice of Privacy Practices explains how we may use and disclose your health information and your rights under HIPAA. It is available at our clinics, and we will send you a copy if you ask at info@estrellamedicalcenters.com.",
        ],
      },
      {
        id: "changes",
        title: "Changes to this policy",
        blocks: [
          "We may update this policy from time to time. When we do, we will change the date at the top of this page. If we make significant changes, we will give additional notice where appropriate.",
          "Today the site has no analytics or advertising tracking. If we add tracking tools in the future, we will update this policy first and ask for your consent where the law requires it.",
        ],
      },
      {
        id: "contact",
        title: "Contact us",
        blocks: [
          "Questions about this policy or your information can be sent to:",
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
    title: "Política de privacidad",
    intro: [
      "Esta política explica cómo Estrella Medical Centers ([Legal entity name]), un grupo médico en Miami, Florida, recopila, usa y protege la información personal a través de este sitio web y en relación con Estrella Wellness, nuestro programa de pérdida de peso con GLP-1 dirigido por médicos. En esta política, \"Estrella\" y \"nosotros\" se refieren a Estrella Medical Centers.",
      "La información de salud que nos compartes para tu atención también está protegida por nuestro Aviso de Prácticas de Privacidad de HIPAA, que se entrega por separado. Si esta política y ese aviso difieren sobre el manejo de tu información de salud, prevalece el Aviso de Prácticas de Privacidad.",
    ],
    sections: [
      {
        id: "information-we-collect",
        title: "La información que recopilamos",
        blocks: [
          "Cuando agendas una consulta en este sitio web, nuestro formulario solo te pide:",
          {
            list: [
              "Tu nombre completo, número de teléfono y correo electrónico.",
              "El centro Estrella que prefieres.",
              "La fecha y la hora que prefieres para tu visita.",
              "Un registro de tu consentimiento: que aceptaste nuestros [Términos del servicio](/terms) y esta Política de privacidad, y que aceptaste que te contactemos por teléfono, mensaje de texto o correo electrónico sobre tu cita, junto con el momento en que diste ese consentimiento.",
            ],
          },
          "**No recopilamos información de salud en este sitio web.** El formulario no pregunta sobre tu salud, y no debes incluir datos de salud al agendar. Tu historial de salud, los medicamentos que tomas, tus alergias y otras preguntas de salud se hablan por teléfono con el equipo de Estrella y en persona en tu visita a la clínica.",
          "**Datos de pago.** Si decides pagar por adelantado, pagas en una página de pago alojada por Stripe, nuestro procesador de pagos. Stripe recopila y procesa los datos de tu tarjeta según su propia política de privacidad. Nuestro sitio web nunca ve ni guarda el número de tu tarjeta. Recibimos la confirmación del pago y algunos datos limitados, como el monto, la fecha y los últimos cuatro dígitos de la tarjeta, para manejar tu facturación, cancelaciones y reembolsos.",
          "**Información de salud de tu atención.** Cuando hablas con nuestro equipo por teléfono y cuando visitas la clínica, recopilamos información de salud y creamos registros médicos, como las notas de tu consulta, los resultados de laboratorio, los medicamentos aplicados y tus chequeos. Esa información está cubierta por nuestro Aviso de Prácticas de Privacidad de HIPAA.",
          "También guardamos cualquier otra cosa que decidas contarnos cuando te comunicas con nosotros.",
          "El sitio web no usa analíticas, píxeles publicitarios ni cookies, y no incluye contenido incrustado de terceros. Solo guarda dos datos pequeños en tu propio navegador, que explicamos abajo y en nuestra [Política de cookies](/cookies).",
        ],
      },
      {
        id: "how-booking-works",
        title: "A dónde va la información de tu cita",
        blocks: [
          "Cuando envías el formulario, tu información viaja por una conexión segura y cifrada (HTTPS) desde el servidor de nuestro sitio web hasta nuestro sistema de citas y comunicación con pacientes, que ofrece [CRM provider]. Nuestro sitio web no guarda tu cita en su propia base de datos.",
          "Nuestro equipo usa ese sistema para llamarte, hacerte algunas preguntas más y coordinar tu visita.",
        ],
      },
      {
        id: "browser-storage",
        title: "Lo que se guarda en tu navegador",
        blocks: [
          "Para funcionar bien, el sitio guarda dos datos en el almacenamiento de tu navegador. Se quedan en tu dispositivo y no se envían a nadie:",
          {
            list: [
              "**estrella-lang** (almacenamiento local): recuerda si elegiste español o inglés.",
              "**estrella-booking** (almacenamiento de sesión): guarda un resumen breve de tu cita (tu nombre, el centro, la fecha y la hora que elegiste) para que la página de pago te lo muestre. Se conserva solo en esa pestaña del navegador y se borra cuando cierras la pestaña. No contiene información de salud ni de pago.",
            ],
          },
          "Si usas una computadora compartida o pública, te recomendamos cerrar la pestaña al terminar.",
        ],
      },
      {
        id: "how-we-use-information",
        title: "Cómo usamos la información",
        blocks: [
          "Usamos la información personal para:",
          {
            list: [
              "Agendar tu consulta y comunicarnos contigo sobre tu cita.",
              "Evaluar si el programa es seguro y adecuado para ti.",
              "Brindarte atención, incluidas las consultas, la revisión de laboratorios, el medicamento, la orientación de nutrición y ejercicio, y los chequeos semanales.",
              "Comunicarnos contigo sobre tus citas, tu atención y tus preguntas, en español o en inglés.",
              "Procesar pagos, la facturación mensual, las cancelaciones y los reembolsos.",
              "Cumplir con nuestras obligaciones legales, regulatorias y profesionales, y proteger la seguridad de pacientes y personal.",
            ],
          },
          "No vendemos tu información personal ni la compartimos para publicidad dirigida.",
        ],
      },
      {
        id: "communications",
        title: "Llamadas, mensajes de texto y correo electrónico",
        blocks: [
          "Al agendar, aceptas que Estrella te contacte por teléfono, mensaje de texto o correo electrónico, al número y la dirección que nos des, sobre tu cita, tu visita y tu atención. Pueden aplicarse cargos por mensajes y datos, y la frecuencia de los mensajes varía.",
          "Puedes responder **STOP** a cualquier mensaje de texto para dejar de recibirlos, o **HELP** para pedir ayuda. También puedes pedirnos en cualquier momento que dejemos de llamarte o escribirte por correo. Aceptar que te contactemos no es una condición para comprar ningún producto o servicio. Si prefieres no recibir llamadas ni mensajes, llama a la clínica o escribe a info@estrellamedicalcenters.com para agendar.",
          "No usamos tu número de teléfono ni tu correo para publicidad a menos que lo aceptes por separado, y no se los damos a otros para su publicidad.",
        ],
      },
      {
        id: "how-we-share-information",
        title: "Con quién compartimos la información",
        blocks: [
          "Solo compartimos información personal cuando hace falta para atenderte y operar el programa:",
          {
            list: [
              "**Tu equipo de atención** en Estrella, incluidos los médicos, enfermeros, nutricionistas y el personal que participa en tu cuidado.",
              "**Nuestra farmacia asociada.** Si tu médico receta un medicamento magistral, la receta y la información necesaria para prepararla se envían a nuestra farmacia magistral asociada, Greenstone Rx, en Miami.",
              "**Stripe**, nuestro procesador de pagos, para cobrar y emitir reembolsos. Stripe maneja los datos de tarjeta según su propia política de privacidad, disponible en [stripe.com/privacy](https://stripe.com/privacy).",
              "**[CRM provider]**, que opera nuestro sistema de citas y comunicación con pacientes y recibe la información que escribes en el formulario.",
              "**Otros proveedores de servicios** que nos ayudan a operar, como empresas de alojamiento web, tecnología y comunicaciones, bajo contratos que les exigen proteger la información y usarla solo para los servicios que nos prestan.",
              "**Cuando la ley lo exige**, por ejemplo ante una solicitud legal válida, para reportes de salud pública obligatorios o para proteger la salud o la seguridad de alguien.",
            ],
          },
          "La información de salud solo se comparte según lo permiten HIPAA y las leyes de Florida, como se describe en nuestro Aviso de Prácticas de Privacidad.",
        ],
      },
      {
        id: "security",
        title: "Seguridad",
        blocks: [
          "Usamos medidas administrativas, técnicas y físicas diseñadas para proteger la información personal contra el acceso, uso o divulgación no autorizados. Ningún sitio web, red o sistema de almacenamiento es completamente seguro, así que no podemos garantizar una seguridad absoluta. Si crees que tu información está en riesgo, comunícate con nosotros de inmediato.",
        ],
      },
      {
        id: "data-breach",
        title: "Si ocurre una violación de datos",
        blocks: [
          "Si una violación de seguridad afecta tu información personal, te lo notificaremos y, cuando corresponda, también al Departamento de Asuntos Legales de Florida, según lo exige la Ley de Protección de la Información de Florida (Florida Information Protection Act, Fla. Stat. §501.171). Las violaciones que involucren información de salud también se manejarán según lo exige HIPAA.",
        ],
      },
      {
        id: "retention",
        title: "Por cuánto tiempo guardamos la información",
        blocks: [
          "Guardamos los registros médicos durante el tiempo que exigen las leyes de Florida y las normas profesionales, y el resto de la información (como los registros de facturación) durante el tiempo necesario para los fines descritos aquí o el que exija la ley. La información de tu cita enviada por el sitio web se guarda en nuestro sistema de citas, que ofrece [CRM provider], durante el tiempo necesario para agendar y apoyar tu atención o el que exija la ley. El resumen de tu cita guardado en tu navegador se borra cuando cierras la pestaña.",
        ],
      },
      {
        id: "your-choices-and-rights",
        title: "Tus opciones y derechos",
        blocks: [
          "Según el tipo de información y la ley que aplique, puedes pedirnos:",
          {
            list: [
              "Acceder a tu información u obtener una copia.",
              "Corregir información que esté incorrecta o incompleta.",
              "Eliminar información, cuando corresponda. Algunos registros, como los médicos y los de facturación, deben conservarse por ley y no se pueden eliminar a petición.",
            ],
          },
          "Tus derechos sobre tu información de salud, como obtener una copia de tu expediente médico, se explican en nuestro Aviso de Prácticas de Privacidad. Los residentes de Florida, y cualquier persona con una pregunta o solicitud sobre su información, pueden escribirnos a info@estrellamedicalcenters.com. Es posible que necesitemos confirmar tu identidad antes de atender una solicitud.",
          "También puedes borrar en cualquier momento la información guardada en tu navegador. Consulta cómo hacerlo en nuestra [Política de cookies](/cookies).",
        ],
      },
      {
        id: "children",
        title: "Menores de edad",
        blocks: [
          "Este sitio web y el programa son para adultos de 18 años o más. No recopilamos a sabiendas información personal de menores de 18 años. Si crees que un menor nos dio su información, comunícate con nosotros y la eliminaremos cuando la ley lo permita.",
        ],
      },
      {
        id: "notice-of-privacy-practices",
        title: "Aviso de Prácticas de Privacidad de HIPAA",
        blocks: [
          "Nuestro Aviso de Prácticas de Privacidad explica cómo podemos usar y divulgar tu información de salud y cuáles son tus derechos bajo HIPAA. Está disponible en nuestras clínicas, y te enviamos una copia si la pides a info@estrellamedicalcenters.com.",
        ],
      },
      {
        id: "changes",
        title: "Cambios a esta política",
        blocks: [
          "Podemos actualizar esta política de vez en cuando. Si lo hacemos, cambiaremos la fecha al inicio de esta página. Si los cambios son importantes, te avisaremos de otra forma cuando corresponda.",
          "Hoy el sitio no tiene analíticas ni rastreo publicitario. Si en el futuro agregamos herramientas de rastreo, primero actualizaremos esta política y pediremos tu consentimiento cuando la ley lo exija.",
        ],
      },
      {
        id: "contact",
        title: "Contáctanos",
        blocks: [
          "Puedes enviar tus preguntas sobre esta política o tu información a:",
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

export default function PrivacyPage() {
  const { lang } = useLang();
  const t = pick(lang, COPY);
  return <LegalPage doc={t} />;
}
