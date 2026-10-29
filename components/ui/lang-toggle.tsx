"use client";

import { Globe } from "lucide-react";
import { useLang, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/cn";

const LABELS: Record<Lang, { full: string; compact: string }> = {
  en: { full: "English", compact: "EN" },
  es: { full: "Español", compact: "ES" },
};

/**
 * Segmented language switch. "full" spells out English / Español for
 * clarity in the funnel; "compact" (EN / ES) fits tight bars.
 */
export function LangToggle({
  variant = "full",
  tone = "light",
  className,
}: {
  variant?: "full" | "compact";
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  const { lang, setLang } = useLang();

  return (
    <div
      role="group"
      aria-label="Language / Idioma"
      className={cn(
        "inline-flex items-center rounded-full border p-1",
        dark
          ? "border-white/15 bg-white/5"
          : "border-navy-900/20 bg-cream-50/80",
        className
      )}
    >
      <Globe
        className={cn(
          "ml-2 mr-1 h-3.5 w-3.5 shrink-0",
          dark ? "text-white/75" : "text-navy-900/70"
        )}
        strokeWidth={1.75}
        aria-hidden
      />
      {(["en", "es"] as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          aria-label={LABELS[l].full}
          lang={l}
          className={cn(
            "rounded-full font-semibold uppercase transition-all duration-200",
            variant === "full"
              ? "min-h-9 px-4 text-[12px] tracking-[0.1em]"
              : "min-h-8 min-w-10 px-3 text-[12px] tracking-[0.1em]",
            lang === l
              ? dark
                ? "bg-sun-400 text-navy-950 shadow-sm"
                : "bg-navy-900 text-cream-50 shadow-sm"
              : dark
                ? "text-white/75 hover:text-white"
                : "text-navy-900/70 hover:text-navy-900"
          )}
        >
          {LABELS[l][variant]}
        </button>
      ))}
    </div>
  );
}
