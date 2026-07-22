import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/nav/header";
import { Footer } from "@/components/nav/footer";
import { StickyMobileCta } from "@/components/ui/sticky-mobile-cta";
import { LanguageProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title:
    "Estrella Wellness — GLP-1 Weight Loss Program | $199.99/mo Limited-Time Offer",
  description:
    "Doctor-guided GLP-1 weight loss from Estrella Medical Centers. Your consultation includes the peptide designated by your doctor, a guided nutrition plan, and management exercises — $199.99/month for a limited time (reg. $299.99). English y Español.",
  icons: {
    icon: "/logo/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-cream-50 text-navy-900 antialiased">
        <LanguageProvider>
          <Header />
          <main className="min-h-[60vh]">{children}</main>
          <Footer />
          <StickyMobileCta />
        </LanguageProvider>
      </body>
    </html>
  );
}
