"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { WEIGHT_LOSS, fmtPrice } from "@/lib/programs";
import { useLang, pick } from "@/lib/i18n";

const COPY = {
  en: {
    cta: "Book consultation",
    price: `${fmtPrice(WEIGHT_LOSS.price)}/mo`,
    reg: fmtPrice(WEIGHT_LOSS.regularPrice),
    label: `Book consultation, ${fmtPrice(WEIGHT_LOSS.price)} a month, regularly ${fmtPrice(WEIGHT_LOSS.regularPrice)}`,
  },
  es: {
    cta: "Agenda tu consulta",
    price: `${fmtPrice(WEIGHT_LOSS.price)}/mes`,
    reg: fmtPrice(WEIGHT_LOSS.regularPrice),
    label: `Agenda tu consulta, ${fmtPrice(WEIGHT_LOSS.price)} al mes, precio regular ${fmtPrice(WEIGHT_LOSS.regularPrice)}`,
  },
};

export function StickyMobileCta() {
  const pathname = usePathname() || "";
  const [show, setShow] = useState(false);
  const { lang } = useLang();
  const t = pick(lang, COPY);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname.startsWith("/qualify")) return null;

  return (
    <div
      // Hidden bar is removed from the tab order and screen readers too.
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-40 transition-all duration-500 md:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <div className="border-t border-navy-900/10 bg-white/85 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 font-heading backdrop-blur-md">
        <Link
          href="/qualify"
          aria-label={t.label}
          tabIndex={show ? 0 : -1}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-navy-950 px-5 py-3.5 text-[14px] font-semibold text-white active:scale-[0.98]"
        >
          {t.cta}
          <span className="text-white/75 line-through">{t.reg}</span>
          <span className="font-bold text-sun-300">{t.price}</span>
          <ArrowRight aria-hidden className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
