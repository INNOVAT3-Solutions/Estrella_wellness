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
  className,
}: {
  variant?: "full" | "compact";
  className?: string;
}) {
  const { lang, setLang } = useLang();

  return (
    <div
      role="group"
      aria-label="Language / Idioma"
      className={cn(
        "inline-flex items-center rounded-full border border-navy-900/20 bg-cream-50/80 p-1",
        className
      )}
    >
      <Globe
        className="ml-2 mr-1 h-3.5 w-3.5 shrink-0 text-navy-900/45"
        strokeWidth={1.75}
        aria-hidden
      />
      {(["en", "es"] as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={cn(
            "rounded-full font-semibold uppercase transition-all duration-200",
            variant === "full"
              ? "px-3.5 py-1.5 text-[11px] tracking-[0.1em]"
              : "px-2.5 py-1 text-[10px] tracking-[0.12em]",
            lang === l
              ? "bg-navy-900 text-cream-50 shadow-sm"
              : "text-navy-900/55 hover:text-navy-900"
          )}
        >
          {LABELS[l][variant]}
        </button>
      ))}
    </div>
  );
}
