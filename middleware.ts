import { NextResponse, type NextRequest } from "next/server";
import { LANG_HEADER, isSpanishPath, stripLocale } from "@/lib/locale-path";

/**
 * /es/* serves the Spanish version of the same route (/es/faq renders
 * app/faq in Spanish). Every other path is English. The header is always
 * overwritten, so a client can't spoof it.
 */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const headers = new Headers(req.headers);

  if (isSpanishPath(pathname)) {
    headers.set(LANG_HEADER, "es");
    const url = req.nextUrl.clone();
    url.pathname = stripLocale(pathname);
    return NextResponse.rewrite(url, { request: { headers } });
  }

  headers.set(LANG_HEADER, "en");
  return NextResponse.next({ request: { headers } });
}

export const config = {
  // Pages only: skip API routes, Next internals and files with an extension
  // (robots.txt, sitemap.xml, images).
  matcher: ["/((?!api/|_next/|.*\\..*).*)"],
};
