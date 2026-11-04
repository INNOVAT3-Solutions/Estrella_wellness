import type { Lang } from "@/lib/lang-detect";

/**
 * Spanish pages live under /es with the same slugs as English
 * (/faq -> /es/faq). middleware.ts maps /es/* onto the same route files and
 * tells them to render in Spanish.
 */
export const ES_PREFIX = "/es";

/** Request header middleware sets and server components read: "en" | "es". */
export const LANG_HEADER = "x-estrella-lang";

export function isSpanishPath(path: string): boolean {
  return path === ES_PREFIX || path.startsWith(`${ES_PREFIX}/`);
}

/** The page's path without the language prefix: "/es/faq" -> "/faq". */
export function stripLocale(path: string): string {
  if (path === ES_PREFIX) return "/";
  if (path.startsWith(`${ES_PREFIX}/`)) return path.slice(ES_PREFIX.length);
  return path;
}

/** An internal path in the given language: ("es", "/faq") -> "/es/faq". */
export function localePath(lang: Lang, path: string): string {
  // Leave external, protocol-relative and hash-only links alone.
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  const bare = stripLocale(path);
  if (lang !== "es") return bare;
  if (bare === "/") return ES_PREFIX;
  if (bare.startsWith("/?") || bare.startsWith("/#")) return `${ES_PREFIX}${bare.slice(1)}`;
  return `${ES_PREFIX}${bare}`;
}
