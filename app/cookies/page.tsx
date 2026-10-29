"use client";

import { LegalPage, type LegalDoc } from "@/components/legal/legal-page";
import { useLang, pick } from "@/lib/i18n";

const COPY: { en: LegalDoc; es: LegalDoc } = {
  en: {
    title: "Cookie policy",
    intro: [
      "This policy explains what this website stores in your browser and why. The short answer: the site does not set cookies, and it uses only two small items of browser storage that it needs to work.",
    ],
    sections: [
      {
        id: "what-we-use",
        title: "What this site stores",
        blocks: [
          "Cookies, local storage and session storage are ways a website can save small pieces of information in your browser. This site does not set any cookies. It uses browser storage for only two strictly necessary, functional purposes:",
          {
            list: [
              "**estrella-lang** (local storage). Remembers whether you chose English or Spanish, so the site appears in your language the next time you visit. It stays until you clear it or switch languages.",
              "**estrella-booking** (session storage). After you submit the booking form, keeps a short summary of your booking (your name, preferred location, date and time) so the payment page can show it to you. It is kept only in that browser tab and is cleared when you close the tab. It does not contain health or payment information.",
            ],
          },
          "Both items stay in your browser on your device. The site does not read them for any other purpose, and they are not shared with anyone.",
        ],
      },
      {
        id: "stripe",
        title: "Stripe checkout pages",
        blocks: [
          "If you choose to pay in advance, you leave this site and pay on a checkout page hosted by Stripe, our payment processor. Stripe may set its own cookies and use similar technologies on its checkout pages, for example to process your payment securely and prevent fraud. Those cookies are set by Stripe, not by this website, and are governed by Stripe's own policies, available at [stripe.com/privacy](https://stripe.com/privacy) and [stripe.com/cookies-policy/legal](https://stripe.com/cookies-policy/legal).",
        ],
      },
      {
        id: "what-we-dont-use",
        title: "What this site does not use",
        blocks: [
          {
            list: [
              "No analytics or visitor tracking.",
              "No advertising pixels or retargeting.",
              "No third-party embeds, such as videos, maps or social media widgets.",
              "No third-party font services. Our web fonts are hosted on our own site.",
            ],
          },
        ],
      },
      {
        id: "consent",
        title: "Why there is no cookie banner",
        blocks: [
          "Because the site uses only storage that is strictly necessary for it to work, and sets no optional or tracking cookies, we don't show a cookie consent banner. If we ever add optional cookies or tracking tools, we will update this policy first and ask for your consent where the law requires it.",
          "Any cookies on Stripe's checkout pages are set by Stripe on its own site and are covered by Stripe's policies.",
        ],
      },
      {
        id: "clearing-storage",
        title: "How to clear browser storage",
        blocks: [
          "You can remove these items at any time:",
          {
            list: [
              "**Booking summary:** close the browser tab. Session storage is cleared automatically.",
              "**Everything:** open your browser's settings and clear site data (sometimes called \"cookies and site data\") for this website, or clear your browsing data. In most browsers you can also click the icon next to the web address to manage this site's data.",
            ],
          },
          "If you clear your language preference, the site will choose a language based on your browser's settings the next time you visit, and you can switch it again with the EN / ES toggle.",
        ],
      },
      {
        id: "more-information",
        title: "More information",
        blocks: [
          "For more about how we handle personal information, see our [Privacy policy](/privacy). Questions about this policy can be sent to info@estrellamedicalcenters.com.",
        ],
      },
    ],
  },
  es: {
    title: "Política de cookies",
    intro: [
      "Esta política explica qué guarda este sitio web en tu navegador y por qué. En pocas palabras: el sitio no usa cookies, y solo guarda dos datos pequeños en el almacenamiento del navegador que necesita para funcionar.",
    ],
    sections: [
      {
        id: "what-we-use",
        title: "Lo que guarda este sitio",
        blocks: [
          "Las cookies, el almacenamiento local y el almacenamiento de sesión son formas en que un sitio web puede guardar pequeños datos en tu navegador. Este sitio no usa cookies. Solo usa el almacenamiento del navegador para dos fines funcionales y estrictamente necesarios:",
          {
            list: [
              "**estrella-lang** (almacenamiento local). Recuerda si elegiste español o inglés, para que el sitio aparezca en tu idioma la próxima vez que nos visites. Se queda guardado hasta que lo borres o cambies de idioma.",
              "**estrella-booking** (almacenamiento de sesión). Después de que envías el formulario para agendar, guarda un resumen breve de tu cita (tu nombre, el centro, la fecha y la hora que elegiste) para que la página de pago te lo muestre. Se conserva solo en esa pestaña del navegador y se borra cuando cierras la pestaña. No contiene información de salud ni de pago.",
            ],
          },
          "Ambos datos se quedan en el navegador de tu dispositivo. El sitio no los usa para ningún otro fin y no se comparten con nadie.",
        ],
      },
      {
        id: "stripe",
        title: "Páginas de pago de Stripe",
        blocks: [
          "Si decides pagar por adelantado, sales de este sitio y pagas en una página de pago alojada por Stripe, nuestro procesador de pagos. Stripe puede usar sus propias cookies y tecnologías similares en sus páginas de pago, por ejemplo para procesar tu pago de forma segura y prevenir fraudes. Esas cookies las pone Stripe, no este sitio web, y se rigen por las políticas de Stripe, disponibles en [stripe.com/privacy](https://stripe.com/privacy) y [stripe.com/cookies-policy/legal](https://stripe.com/cookies-policy/legal).",
        ],
      },
      {
        id: "what-we-dont-use",
        title: "Lo que este sitio no usa",
        blocks: [
          {
            list: [
              "Sin analíticas ni rastreo de visitantes.",
              "Sin píxeles publicitarios ni remarketing.",
              "Sin contenido incrustado de terceros, como videos, mapas o botones de redes sociales.",
              "Sin servicios de fuentes de terceros. Nuestras fuentes tipográficas están alojadas en nuestro propio sitio.",
            ],
          },
        ],
      },
      {
        id: "consent",
        title: "Por qué no mostramos un aviso de cookies",
        blocks: [
          "Como el sitio solo usa el almacenamiento estrictamente necesario para funcionar, y no pone ninguna cookie opcional o de rastreo, no mostramos un aviso de consentimiento de cookies. Si algún día agregamos cookies opcionales o herramientas de rastreo, primero actualizaremos esta política y pediremos tu consentimiento cuando la ley lo exija.",
          "Las cookies que pueda haber en las páginas de pago de Stripe las pone Stripe en su propio sitio y se rigen por las políticas de Stripe.",
        ],
      },
      {
        id: "clearing-storage",
        title: "Cómo borrar el almacenamiento del navegador",
        blocks: [
          "Puedes eliminar estos datos en cualquier momento:",
          {
            list: [
              "**Resumen de tu cita:** cierra la pestaña del navegador. El almacenamiento de sesión se borra automáticamente.",
              "**Todo:** abre la configuración de tu navegador y borra los datos de este sitio (a veces aparece como \"cookies y datos de sitios\"), o borra tus datos de navegación. En la mayoría de los navegadores también puedes hacer clic en el ícono junto a la dirección web para administrar los datos de este sitio.",
            ],
          },
          "Si borras tu preferencia de idioma, la próxima vez que nos visites el sitio elegirá el idioma según la configuración de tu navegador, y podrás cambiarlo de nuevo con el selector EN / ES.",
        ],
      },
      {
        id: "more-information",
        title: "Más información",
        blocks: [
          "Para saber más sobre cómo manejamos la información personal, consulta nuestra [Política de privacidad](/privacy). Puedes enviar tus preguntas sobre esta política a info@estrellamedicalcenters.com.",
        ],
      },
    ],
  },
};

export default function CookiesPage() {
  const { lang } = useLang();
  const t = pick(lang, COPY);
  return <LegalPage doc={t} />;
}
