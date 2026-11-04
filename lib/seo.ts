import type { Metadata } from "next";
import { headers } from "next/headers";
import { matchLang, parseAcceptLanguage, type Lang } from "@/lib/lang-detect";

/** Production origin. Canonicals, OG URLs and the sitemap resolve against it. */
export const SITE_URL = "https://www.estrellawellnessplans.com";
export const SITE_NAME = "Estrella Wellness";

/** The visitor's language, from the Accept-Language header their device sends. */
export function requestLang(): Lang {
  return matchLang(parseAcceptLanguage(headers().get("accept-language")));
}

export type PageCopy = Record<Lang, { title: string; description: string }>;

/**
 * Metadata for one page: its own title and description, a self-referencing
 * canonical and matching Open Graph / Twitter tags.
 *
 * Spanish is still served from the same URL (picked by Accept-Language), so
 * no hreflang alternates are emitted: pointing `en` and `es` at one URL is
 * invalid. Add them when Spanish gets its own URLs.
 */
export function pageMetadata(
  path: string,
  copy: PageCopy,
  opts: { absoluteTitle?: boolean; noindex?: boolean } = {},
): Metadata {
  const lang = requestLang();
  const { title, description } = copy[lang];
  return {
    title: opts.absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: lang === "es" ? "es_US" : "en_US",
      type: "website",
    },
    twitter: { card: "summary", title, description },
    ...(opts.noindex ? { robots: { index: false, follow: false } } : {}),
  };
}

/** Indexable pages, in sitemap order. Keep in sync with app/ routes. */
export const INDEXABLE_PATHS = [
  "/",
  "/programs/weight-loss",
  "/how-it-works",
  "/faq",
  "/refunds",
  "/terms",
  "/privacy",
  "/cookies",
  "/accessibility",
] as const;
