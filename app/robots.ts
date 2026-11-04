import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// /qualify and /dashboard are kept crawlable on purpose: they carry a noindex
// meta tag, and crawlers have to fetch a page to see it.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
