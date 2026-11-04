import type { Lang } from "@/lib/lang-detect";
import { localePath } from "@/lib/locale-path";
import { LOCATIONS, type Hours, type Location } from "@/lib/booking";
import { PRICING, WEIGHT_LOSS } from "@/lib/programs";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

/*
 * JSON-LD for search engines. Built from the same data the site shows
 * (clinic hours from lib/booking.ts, price from lib/programs.ts) so the
 * markup can never disagree with the page.
 *
 * Deliberately absent: Review / AggregateRating (testimonials are
 * illustrative), Physician (no individual doctor is tied to the program),
 * FAQPage (Google retired FAQ rich results in May 2026), and HowTo.
 */

type Json = Record<string, unknown>;

// Same form as the canonical tags: the home page has no trailing slash.
const abs = (path: string) => (path === "/" ? SITE_URL : `${SITE_URL}${path}`);
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
/** One Service node per language, so EN and ES never assert different names for one @id. */
const serviceId = (lang: Lang) => `${abs(localePath(lang, `/programs/${WEIGHT_LOSS.slug}`))}#service`;
const clinicId = (id: string) => `${SITE_URL}/#clinic-${id}`;

const AREA_SERVED = [
  { "@type": "AdministrativeArea", name: "Miami-Dade County, FL" },
  { "@type": "AdministrativeArea", name: "Broward County, FL" },
];

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const hhmm = (min: number) =>
  `${String(Math.floor(min / 60)).padStart(2, "0")}:${String(min % 60).padStart(2, "0")}`;

/** Group days with identical hours into OpeningHoursSpecification entries. */
function openingHours(hours: Hours): Json[] {
  const groups = new Map<string, string[]>();
  hours.forEach((slot, day) => {
    if (!slot) return;
    const key = `${hhmm(slot[0])}-${hhmm(slot[1])}`;
    groups.set(key, [...(groups.get(key) ?? []), DAYS[day]]);
  });
  return [...groups].map(([key, days]) => {
    const [opens, closes] = key.split("-");
    return { "@type": "OpeningHoursSpecification", dayOfWeek: days, opens, closes };
  });
}

/** "10305 NW 41st St, Suite 227, Doral, FL 33178" -> PostalAddress */
function postalAddress(address: string): Json {
  const parts = address.split(",").map((p) => p.trim());
  const [region, postalCode] = parts.pop()!.split(/\s+/);
  const locality = parts.pop()!;
  return {
    "@type": "PostalAddress",
    streetAddress: parts.join(", "),
    addressLocality: locality,
    addressRegion: region,
    postalCode,
    addressCountry: "US",
  };
}

function clinic(loc: Location): Json {
  return {
    "@type": "MedicalClinic",
    "@id": clinicId(loc.id),
    name: `Estrella Medical Centers - ${loc.name}`,
    telephone: loc.phone,
    address: postalAddress(loc.address),
    openingHoursSpecification: openingHours(loc.hours),
    availableLanguage: ["English", "Spanish"],
    parentOrganization: { "@id": ORG_ID },
  };
}

/** Home page: the organization, its six clinics and the website. */
export function siteGraph(lang: Lang): Json {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalOrganization",
        "@id": ORG_ID,
        name: "Estrella Medical Centers",
        url: "https://estrellamedicalcenters.com/",
        logo: abs("/logo/logo.png"),
        email: "info@estrellamedicalcenters.com",
        telephone: "+1-305-982-8810",
        areaServed: AREA_SERVED,
        availableLanguage: ["English", "Spanish"],
        location: LOCATIONS.map((l) => ({ "@id": clinicId(l.id) })),
        brand: { "@type": "Brand", name: SITE_NAME },
      },
      ...LOCATIONS.map(clinic),
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: abs("/"),
        name: SITE_NAME,
        inLanguage: ["en", "es"],
        publisher: { "@id": ORG_ID },
      },
      {
        "@type": "WebPage",
        "@id": `${abs(localePath(lang, "/"))}#webpage`,
        url: abs(localePath(lang, "/")),
        name: SITE_NAME,
        inLanguage: lang,
        isPartOf: { "@id": WEBSITE_ID },
      },
    ],
  };
}

const HOME = { en: "Home", es: "Inicio" };

/** WebPage + BreadcrumbList for an inner page. `path` is the English path. */
export function pageGraph(
  lang: Lang,
  path: string,
  name: string,
  extra: Json[] = [],
  parents: { path: string; name: string }[] = [],
  pageExtra: Json = {},
): Json {
  const url = abs(localePath(lang, path));
  const trail = [
    { name: HOME[lang], path: "/" },
    ...parents,
    { name, path },
  ];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name,
        inLanguage: lang,
        isPartOf: { "@id": WEBSITE_ID },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        ...pageExtra,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: trail.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.name,
          item: abs(localePath(lang, c.path)),
        })),
      },
      ...extra,
    ],
  };
}

/** The program page: WebPage + breadcrumb + the Service and its monthly Offer. */
export function programGraph(lang: Lang): Json {
  const copy = WEIGHT_LOSS[lang];
  const path = `/programs/${WEIGHT_LOSS.slug}`;
  const regular = PRICING.regular.toFixed(2);
  return pageGraph(lang, path, copy.name, [
    {
      "@type": "Service",
      "@id": serviceId(lang),
      name: copy.name,
      serviceType: lang === "es" ? "Programa de pérdida de peso dirigido por médicos" : "Doctor-led weight loss program",
      description: copy.description,
      provider: { "@id": ORG_ID },
      areaServed: AREA_SERVED,
      availableChannel: LOCATIONS.map((l) => ({
        "@type": "ServiceChannel",
        serviceLocation: { "@id": clinicId(l.id) },
      })),
      offers: {
        "@type": "Offer",
        url: abs(localePath(lang, path)),
        price: PRICING.promo.toFixed(2),
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: PRICING.promo.toFixed(2),
          priceCurrency: "USD",
          unitCode: "MON",
          referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
        },
        description:
          lang === "es"
            ? `Precio mensual por tiempo limitado (regular $${regular} al mes). Se cobra cada mes; puedes cancelar en cualquier momento.`
            : `Limited-time monthly price (regular $${regular}/month). Billed monthly; cancel at any time.`,
      },
    },
  ]);
}

/**
 * Medication and cost pages: WebPage (about the drug, or the program's
 * Service for the cost page) with a Home > Program > Page trail.
 */
export function topicGraph(lang: Lang, topic: "semaglutide" | "tirzepatide" | "cost", name: string): Json {
  const program = `/programs/${WEIGHT_LOSS.slug}`;
  const parents = [{ path: program, name: WEIGHT_LOSS[lang].name }];
  const about =
    topic === "cost"
      ? { about: { "@type": "Service", "@id": serviceId(lang), name: WEIGHT_LOSS[lang].name } }
      : { about: { "@type": "Drug", name: topic === "semaglutide" ? "Semaglutide" : "Tirzepatide", nonProprietaryName: topic } };
  return pageGraph(lang, `${program}/${topic}`, name, [], parents, about);
}

/** Renders one JSON-LD block. `<` is escaped so text can't close the tag. */
export function jsonLdHtml(data: Json): { __html: string } {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
