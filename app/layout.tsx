import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/nav/header";
import { Footer } from "@/components/nav/footer";
import { StickyMobileCta } from "@/components/ui/sticky-mobile-cta";

export const metadata: Metadata = {
  title: "Estrella Wellness — Treatment that actually fits your life",
  description:
    "Clinician-guided telehealth from Estrella Medical Centers. Weight loss, recovery, hormone optimization, longevity, performance, and sexual health — designed by licensed providers, delivered to your door.",
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
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
