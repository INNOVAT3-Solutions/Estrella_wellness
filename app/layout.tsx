import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/nav/header";
import { Footer } from "@/components/nav/footer";
import { StickyMobileCta } from "@/components/ui/sticky-mobile-cta";
import { LanguageProvider } from "@/lib/i18n";
import { SITE_NAME, SITE_URL, requestLang } from "@/lib/seo";

// Each page sets its own title, description and canonical (see lib/page-copy.ts).
// These are the site-wide defaults they build on.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  applicationName: SITE_NAME,
  icons: { icon: "/logo/favicon.png", apple: "/logo/favicon.png" },
};

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
