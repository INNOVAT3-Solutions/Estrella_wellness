import { jsonLdHtml } from "@/lib/schema";

/** One JSON-LD block. Server-rendered so crawlers see it without JavaScript. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(data)} />;
}
