"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { useLang, pick } from "@/lib/i18n";
import { SHOW_PATIENT_PORTAL } from "@/lib/features";
import { LangToggle } from "@/components/ui/lang-toggle";
import { cn } from "@/lib/cn";

const COPY = {
  en: {
    home: "Home",
    program: "The program",
    process: "How it works",
    faq: "FAQ",
    login: "Patient login",
    cta: "Book consultation",
    menu: "Menu",
  },
  es: {
    home: "Inicio",
    program: "El programa",
    process: "Cómo funciona",
    faq: "Preguntas",
    login: "Portal del paciente",
    cta: "Agenda tu consulta",
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

  // Close the mobile menu on navigation and with the Escape key.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (pathname.startsWith("/qualify")) return null;

  const links = [
    { href: "/", label: t.home },
    { href: "/programs/weight-loss", label: t.program },
    { href: "/how-it-works", label: t.process },
    { href: "/faq", label: t.faq },
  ];

  return (
    // Translucent glass; the homepage hero slides under it (-mt-20), so keep h-20 in sync.
    <header
      className={cn(
        "sticky top-0 z-50 font-heading backdrop-blur-xl transition-[background-color,box-shadow] duration-300",
        scrolled || open
          ? "bg-white/80 shadow-[0_1px_0_rgba(6,14,34,.06),0_8px_24px_-16px_rgba(6,14,34,.18)]"
          : "bg-white/45"
      )}
    >
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/logo.png"
            alt="Estrella Medical Centers"
            width={235}
            height={110}
            className="h-11 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative py-2 text-[14px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sun-500",
                  active
                    ? "text-navy-950 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-sun-500"
                    : "text-navy-900/70 hover:text-navy-950"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <LangToggle variant="compact" tone="light" />
          {SHOW_PATIENT_PORTAL && (
            <Link
              href="/dashboard"
              className="text-[14px] font-medium text-navy-900/70 hover:text-navy-950"
            >
              {t.login}
            </Link>
          )}
          <Link href="/qualify" className="btn-pill-dark px-5 py-2.5 text-[13px]">
            {t.cta}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LangToggle variant="compact" tone="light" />
          <button
            type="button"
            className="rounded-full bg-white/70 p-3 text-navy-950 ring-1 ring-navy-900/10"
            onClick={() => setOpen((v) => !v)}
            aria-label={t.menu}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label={t.menu} className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-navy-900/[0.07] lg:hidden">
          <div className="container-x flex flex-col gap-1 py-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="border-b border-navy-900/[0.07] py-4 text-[16px] font-medium text-navy-950 hover:text-sun-700"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            {SHOW_PATIENT_PORTAL && (
              <Link
                href="/dashboard"
                className="py-4 text-[15px] text-navy-900/70"
                onClick={() => setOpen(false)}
              >
                {t.login}
              </Link>
            )}
            <Link
              href="/qualify"
              className="btn-pill-dark mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              {t.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
