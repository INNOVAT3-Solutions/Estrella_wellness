import { pageMetadata } from "@/lib/seo";
import { PAGE_COPY } from "@/lib/page-copy";

// The page is a client component, so its metadata lives here.
export function generateMetadata() {
  return pageMetadata("/privacy", PAGE_COPY.privacy);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
