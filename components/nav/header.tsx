"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { WEIGHT_LOSS, fmtPrice } from "@/lib/programs";
import { useLang, pick } from "@/lib/i18n";
import { LangToggle } from "@/components/ui/lang-toggle";

const COPY = {
  en: {
    promo: "Limited-time offer — GLP-1 Weight Loss Program",
    promoPrice: `${fmtPrice(WEIGHT_LOSS.price)}/mo`,
    promoReg: `reg. ${fmtPrice(WEIGHT_LOSS.regularPrice)}`,
    promoCta: "Start today",
    program: "The program",
    process: "How it works",
    providers: "Providers",
    faq: "FAQ",
    login: "Patient login",
    cta: "Start consultation",
    menu: "Menu",
  },
  es: {
    promo: "Oferta por tiempo limitado — Programa de Pérdida de Peso GLP-1",
    promoPrice: `${fmtPrice(WEIGHT_LOSS.price)}/mes`,
    promoReg: `precio reg. ${fmtPrice(WEIGHT_LOSS.regularPrice)}`,
    promoCta: "Empieza hoy",
    program: "El programa",
    process: "Cómo funciona",
    providers: "Médicos",
    faq: "Preguntas",
    login: "Portal del paciente",
    cta: "Iniciar consulta",
    menu: "Menú",
  },
};

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() || "";
  const { lang } = useLang();
  const t = pick(lang, COPY);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname.startsWith("/qualify")) return null;

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-navy-900/15 bg-cream-50/95 backdrop-blur-md"
          : "border-b border-transparent bg-cream-50"
      }`}
    >
      {/* Promo announcement bar */}
      <Link
        href="/qualify"
        className="block bg-sun-700 text-cream-50 transition-colors hover:bg-sun-800"
      >
        <div className="container-x flex min-h-[40px] flex-wrap items-center justify-center gap-x-3 gap-y-0.5 py-1.5 text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] sm:text-[12px]">
            {t.promo}
          </span>
          <span className="text-[12px] font-bold sm:text-[13px]">
            {t.promoPrice}
          </span>
          <span className="text-[11px] line-through opacity-75">
            {t.promoReg}
          </span>
          <span className="inline-flex items-center gap-1 border-b border-cream-50/60 text-[11px] font-semibold uppercase tracking-[0.14em]">
            {t.promoCta}
            <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </Link>

      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/logo.png"
            alt="Estrella Medical Centers"
            width={160}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/programs/weight-loss"
            className="text-[12px] font-medium uppercase tracking-[0.18em] text-navy-900/80 hover:text-navy-900"
          >
            {t.program}
          </Link>
          <Link
            href="/how-it-works"
            className="text-[12px] font-medium uppercase tracking-[0.18em] text-navy-900/80 hover:text-navy-900"
          >
            {t.process}
          </Link>
          <Link
            href="/providers"
            className="text-[12px] font-medium uppercase tracking-[0.18em] text-navy-900/80 hover:text-navy-900"
          >
            {t.providers}
          </Link>
          <Link
            href="/faq"
            className="text-[12px] font-medium uppercase tracking-[0.18em] text-navy-900/80 hover:text-navy-900"
          >
            {t.faq}
          </Link>
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <LangToggle variant="full" />
          <Link
            href="/dashboard"
            className="text-[12px] font-medium uppercase tracking-[0.18em] text-navy-900/70 hover:text-navy-900"
          >
            {t.login}
          </Link>
          <Link
            href="/qualify"
            className="inline-flex items-center justify-center gap-2 bg-navy-900 px-6 py-3 text-[12px] font-medium uppercase tracking-[0.18em] text-cream-50 transition-colors hover:bg-navy-800"
          >
            {t.cta}
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LangToggle variant="compact" />
          <button
            className="border border-navy-900/20 p-2.5"
            onClick={() => setOpen((v) => !v)}
            aria-label={t.menu}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-navy-900/15 bg-cream-50 md:hidden">
          <div className="container-x flex flex-col gap-1 py-6">
            <Link
              href="/programs/weight-loss"
              className="flex items-center justify-between border-b border-navy-900/10 py-4 text-navy-900 hover:text-sun-700"
              onClick={() => setOpen(false)}
            >
              <span className="font-display text-[17px] font-light">
                {t.program}
              </span>
              <span className="text-right">
                <span className="mr-2 text-[11px] text-navy-900/40 line-through">
                  {fmtPrice(WEIGHT_LOSS.regularPrice)}
                </span>
                <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-sun-700">
                  {t.promoPrice}
                </span>
              </span>
            </Link>
            <Link
              href="/how-it-works"
              className="border-b border-navy-900/10 py-4 text-[13px] uppercase tracking-[0.16em] text-navy-900/80"
              onClick={() => setOpen(false)}
            >
              {t.process}
            </Link>
            <Link
              href="/providers"
              className="border-b border-navy-900/10 py-4 text-[13px] uppercase tracking-[0.16em] text-navy-900/80"
              onClick={() => setOpen(false)}
            >
              {t.providers}
            </Link>
            <Link
              href="/faq"
              className="border-b border-navy-900/10 py-4 text-[13px] uppercase tracking-[0.16em] text-navy-900/80"
              onClick={() => setOpen(false)}
            >
              {t.faq}
            </Link>
            <Link
              href="/dashboard"
              className="py-4 text-[13px] uppercase tracking-[0.16em] text-navy-900/80"
              onClick={() => setOpen(false)}
            >
              {t.login}
            </Link>
            <Link
              href="/qualify"
              className="btn-primary mt-4 w-full"
              onClick={() => setOpen(false)}
            >
              {t.cta}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
