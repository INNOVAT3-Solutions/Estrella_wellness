import { pageMetadata } from "@/lib/seo";
import { PAGE_COPY } from "@/lib/page-copy";

// The page is a client component, so its metadata lives here.
export function generateMetadata() {
  return pageMetadata("/terms", PAGE_COPY.terms);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
