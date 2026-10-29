import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/nav/header";
import { Footer } from "@/components/nav/footer";
import { StickyMobileCta } from "@/components/ui/sticky-mobile-cta";
import { LanguageProvider } from "@/lib/i18n";
import { matchLang, parseAcceptLanguage, type Lang } from "@/lib/lang-detect";

/** The visitor's language, from the Accept-Language header their device sends. */
function requestLang(): Lang {
  return matchLang(parseAcceptLanguage(headers().get("accept-language")));
}

const META = {
  en: {
    title: "Estrella Wellness | Doctor-Led GLP-1 Weight Loss in Miami, $199.99/mo",
    description:
      "New from Estrella Medical Centers: a doctor-led GLP-1 weight loss program in Miami, open to everyone with no membership needed. Doctor consultation, blood work review, weekly in-clinic injections, a nutritionist meal plan and guided exercise. $199.99/month for a limited time (reg. $299.99). English and Spanish.",
  },
  es: {
    title: "Estrella Wellness | Pérdida de peso con GLP-1 dirigida por médicos en Miami, $199.99/mes",
    description:
      "Nuevo de Estrella Medical Centers: un programa de pérdida de peso con GLP-1 dirigido por médicos en Miami, abierto para todos y sin membresía. Consulta médica, revisión de análisis, inyecciones semanales en la clínica, plan de comidas con nutricionista y ejercicios guiados. $199.99 al mes por tiempo limitado (reg. $299.99). Español e inglés.",
  },
};

export function generateMetadata(): Metadata {
  const lang = requestLang();
  return {
    ...META[lang],
    icons: { icon: "/logo/favicon.png", apple: "/logo/favicon.png" },
    alternates: { languages: { en: "/", es: "/" } },
    openGraph: { ...META[lang], locale: lang === "es" ? "es_US" : "en_US", type: "website" },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

// Fonts are downloaded at build time and served from this site, so visitors'
// browsers never contact Google.
const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});
const heading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = requestLang();
  return (
    <html lang={lang} className={`${sans.variable} ${heading.variable}`}>
      <body className="bg-white text-navy-950 antialiased">
        <LanguageProvider initialLang={lang}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-navy-950 focus:px-5 focus:py-3 focus:text-[14px] focus:font-semibold focus:text-white"
          >
            Skip to content / Ir al contenido
          </a>
          <Header />
          <main id="main" tabIndex={-1} className="min-h-[60vh] outline-none">
            {children}
          </main>
          <Footer />
          <StickyMobileCta />
        </LanguageProvider>
      </body>
    </html>
  );
}
