import type { Metadata } from "next";
import { headers } from "next/headers";
import type { Lang } from "@/lib/lang-detect";
import { LANG_HEADER, localePath } from "@/lib/locale-path";

/** Production origin. Canonicals, OG URLs and the sitemap resolve against it. */
export const SITE_URL = "https://www.estrellawellnessplans.com";
export const SITE_NAME = "Estrella Wellness";

/** The page language, from the URL (/es/* is Spanish), as set by middleware.ts. */
export function requestLang(): Lang {
  return headers().get(LANG_HEADER) === "es" ? "es" : "en";
}

/** Share image per language: 1200x630, composed from brand assets. */
const OG_IMAGE: Record<Lang, { url: string; alt: string }> = {
  en: {
    url: "/og/estrella-wellness-glp1-weight-loss-en.jpg",
    alt: "Estrella Wellness: doctor-led GLP-1 weight loss. A grandmother running across a lawn with her two grandchildren.",
  },
  es: {
    url: "/og/estrella-wellness-glp1-weight-loss-es.jpg",
    alt: "Estrella Wellness: bajar de peso con GLP-1 y médicos. Una abuela corre por el césped con sus dos nietos.",
  },
};

export type PageCopy = Record<Lang, { title: string; description: string }>;

/**
 * Metadata for one page: its own title and description, a self-referencing
 * canonical, reciprocal hreflang (en, es, x-default) and matching Open Graph /
 * Twitter tags. `path` is the English path; the Spanish one is derived.
 */
export function pageMetadata(
  path: string,
  copy: PageCopy,
  opts: { absoluteTitle?: boolean; noindex?: boolean } = {},
): Metadata {
  const lang = requestLang();
  const { title, description } = copy[lang];
  const url = localePath(lang, path);
  return {
    title: opts.absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
      languages: { en: path, es: localePath("es", path), "x-default": path },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: lang === "es" ? "es_US" : "en_US",
      alternateLocale: lang === "es" ? "en_US" : "es_US",
      type: "website",
      images: [{ ...OG_IMAGE[lang], width: 1200, height: 630, type: "image/jpeg" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE[lang]] },
    ...(opts.noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

/** Indexable pages, in sitemap order. Keep in sync with app/ routes. */
export const INDEXABLE_PATHS = [
  "/",
  "/programs/weight-loss",
  "/programs/weight-loss/semaglutide",
  "/programs/weight-loss/tirzepatide",
  "/programs/weight-loss/cost",
  "/how-it-works",
  "/faq",
  "/refunds",
  "/terms",
  "/privacy",
  "/cookies",
  "/accessibility",
] as const;
