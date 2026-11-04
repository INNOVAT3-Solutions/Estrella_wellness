"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { usePathname } from "next/navigation";

import { matchLang, type Lang } from "@/lib/lang-detect";
import { localePath, stripLocale } from "@/lib/locale-path";

export type { Lang };

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
});

const STORAGE_KEY = "estrella-lang";

function readSaved(): Lang | null {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "en" || saved === "es" ? saved : null;
  } catch {
    return null; // storage blocked
  }
}

function save(lang: Lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* ignore */
  }
}

/** The current page in the other language, keeping query string and hash. */
function urlIn(lang: Lang): string {
  const { pathname, search, hash } = window.location;
  return `${localePath(lang, pathname)}${search}${hash}`;
}

/**
 * The URL decides the language: /es/* is Spanish, everything else English
 * (`initialLang` comes from the server, set by middleware.ts). That way each
 * language has its own crawlable URL.
 *
 * A visitor who chose Spanish before, or whose device prefers Spanish and has
 * no saved choice, is moved once from an English URL to its Spanish twin.
 * Crawlers have neither, so they always get the URL they asked for.
 */
export function LanguageProvider({
  children,
  initialLang = "en",
}: {
  children: ReactNode;
  initialLang?: Lang;
}) {
  const [lang] = useState<Lang>(initialLang);

  useEffect(() => {
    const saved = readSaved();
    const device = matchLang(navigator.languages?.length ? navigator.languages : [navigator.language]);
    if (lang === "en" && (saved === "es" || (!saved && device === "es"))) {
      save("es");
      window.location.replace(urlIn("es"));
      return;
    }
    save(lang);
  }, [lang]);

  // A full page load, so the server renders the other language's HTML,
  // metadata and <html lang>.
  const setLang = (l: Lang) => {
    if (l === lang) return;
    save(l);
    window.location.assign(urlIn(l));
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);

/** Pick the copy for the active language: pick(lang, { en: ..., es: ... }) */
export function pick<T>(lang: Lang, copy: { en: T; es: T }): T {
  return lang === "es" ? copy.es : copy.en;
}

/** The current path without the /es prefix, for "which page am I on" checks. */
export function useBarePath(fallback = ""): string {
  return stripLocale(usePathname() || fallback);
}
