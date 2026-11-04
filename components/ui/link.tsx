"use client";

import NextLink from "next/link";
import { forwardRef, type ComponentProps } from "react";
import { useLang } from "@/lib/i18n";
import { localePath } from "@/lib/locale-path";

/**
 * next/link that keeps visitors in their language: on Spanish pages an
 * internal href like "/faq" points to "/es/faq". Use it for every internal
 * link so crawlers can follow the Spanish pages too.
 */
const Link = forwardRef<HTMLAnchorElement, ComponentProps<typeof NextLink>>(function Link(
  { href, ...rest },
  ref
) {
  const { lang } = useLang();
  const to = typeof href === "string" ? localePath(lang, href) : href;
  return <NextLink ref={ref} href={to} {...rest} />;
});

export default Link;
