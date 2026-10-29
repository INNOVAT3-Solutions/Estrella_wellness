"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check } from "lucide-react";
import { useLang, pick } from "@/lib/i18n";
import { LangToggle } from "@/components/ui/lang-toggle";
import { cn } from "@/lib/cn";

const STEPS = [
  { path: "/qualify", label: { en: "Your details", es: "Tus datos" } },
  { path: "/qualify/payment", label: { en: "Payment", es: "Pago" } },
  { path: "/qualify/confirmed", label: { en: "Confirmed", es: "Confirmado" } },
];

const COPY = {
  en: {
    home: "Estrella Medical Centers, home",
    progress: "Booking steps",
    current: "current step",
    done: "completed",
    privacy: "Privacy policy",
    terms: "Terms of service",
    refunds: "Refund policy",
    help: "Questions?",
  },
  es: {
    home: "Estrella Medical Centers, inicio",
    progress: "Pasos de la reserva",
    current: "paso actual",
    done: "completado",
    privacy: "Política de privacidad",
    terms: "Términos del servicio",
    refunds: "Política de reembolso",
    help: "¿Preguntas?",
  },
};

export function BookingHeader() {
  const { lang } = useLang();
  const t = pick(lang, COPY);
  const pathname = usePathname() || "/qualify";
  const current = Math.max(0, STEPS.findIndex((s) => s.path === pathname));

  return (
    <header className="sticky top-0 z-40 border-b border-navy-900/10 bg-white/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label={t.home} className="shrink-0 rounded-md">
          <Image
            src="/logo/logo.png"
            alt=""
            width={235}
            height={110}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <nav aria-label={t.progress} className="hidden sm:block">
          <ol className="flex items-center gap-2">
            {STEPS.map((s, i) => {
              const done = i < current;
              const active = i === current;
              return (
                <li key={s.path} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden className="h-px w-6 bg-navy-900/20" />}
                  <span
                    aria-current={active ? "step" : undefined}
                    className={cn(
                      "flex items-center gap-2 rounded-full px-3 py-1.5 text-[13px] font-semibold",
                      active && "bg-navy-950 text-white",
                      done && "text-navy-950",
                      !active && !done && "text-navy-900/70"
                    )}
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "flex h-5 w-5 items-center justify-center rounded-full text-[11px]",
                        active ? "bg-sun-400 text-navy-950" : "bg-mist-100 text-navy-950"
                      )}
                    >
                      {done ? <Check className="h-3 w-3" strokeWidth={3} /> : i + 1}
                    </span>
                    {s.label[lang]}
                    {(done || active) && (
                      <span className="sr-only">({active ? t.current : t.done})</span>
                    )}
                  </span>
                </li>
              );
            })}
          </ol>
        </nav>

        <LangToggle variant="compact" />
      </div>
    </header>
  );
}

export function BookingFooter() {
  const { lang } = useLang();
  const t = pick(lang, COPY);
  return (
    <footer className="container-x flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pb-10 text-[13px] text-navy-900/75">
      <span>
        {t.help}{" "}
        <a
          href="mailto:info@estrellamedicalcenters.com"
          className="inline-block py-1.5 font-semibold text-navy-950 underline underline-offset-2"
        >
          info@estrellamedicalcenters.com
        </a>
      </span>
      <Link href="/privacy" className="inline-block py-1.5 underline underline-offset-2 hover:text-navy-950">
        {t.privacy}
      </Link>
      <Link href="/terms" className="inline-block py-1.5 underline underline-offset-2 hover:text-navy-950">
        {t.terms}
      </Link>
      <Link href="/refunds" className="inline-block py-1.5 underline underline-offset-2 hover:text-navy-950">
        {t.refunds}
      </Link>
    </footer>
  );
}
