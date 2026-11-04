import { pageMetadata, requestLang } from "@/lib/seo";
import { PAGE_COPY } from "@/lib/page-copy";
import { pageGraph } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";

const NAME = { en: "Cookie policy", es: "Política de cookies" };

// The page is a client component, so its metadata and structured data live here.
export function generateMetadata() {
  return pageMetadata("/cookies", PAGE_COPY.cookies);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const lang = requestLang();
  return (
    <>
      <JsonLd data={pageGraph(lang, "/cookies", NAME[lang])} />
      {children}
    </>
  );
}
