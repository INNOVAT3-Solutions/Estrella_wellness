import type { MetadataRoute } from "next";
import { INDEXABLE_PATHS, SITE_URL } from "@/lib/seo";
import { localePath } from "@/lib/locale-path";

const abs = (path: string) => (path === "/" ? SITE_URL : `${SITE_URL}${path}`);

// Every page in English and Spanish, each listing both versions as alternates.
// No lastModified: Google ignores it unless it is consistently accurate.
export default function sitemap(): MetadataRoute.Sitemap {
  return INDEXABLE_PATHS.flatMap((path) => {
    const languages = { en: abs(path), es: abs(localePath("es", path)) };
    return [
      { url: languages.en, alternates: { languages } },
      { url: languages.es, alternates: { languages } },
    ];
  });
}
