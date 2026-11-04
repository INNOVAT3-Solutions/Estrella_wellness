import { pageMetadata, requestLang } from "@/lib/seo";
import { PAGE_COPY } from "@/lib/page-copy";
import { pageGraph } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";

const NAME = { en: "Terms of service", es: "Términos del servicio" };

// The page is a client component, so its metadata and structured data live here.
export function generateMetadata() {
  return pageMetadata("/terms", PAGE_COPY.terms);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const lang = requestLang();
  return (
    <>
      <JsonLd data={pageGraph(lang, "/terms", NAME[lang])} />
      {children}
    </>
  );
}
