"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { matchLang, type Lang } from "@/lib/lang-detect";

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

/**
 * `initialLang` comes from the server (the device's Accept-Language
 * header), so the first render is already in the visitor's language.
 * A language the visitor picked with the toggle wins over detection.
 */
export function LanguageProvider({
  children,
  initialLang = "en",
}: {
  children: ReactNode;
  initialLang?: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      /* storage blocked: fall back to device detection */
    }
    const next: Lang =
      saved === "en" || saved === "es"
        ? saved
        : matchLang(navigator.languages?.length ? navigator.languages : [navigator.language]);
    setLangState(next);
    document.documentElement.lang = next;
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = l;
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
