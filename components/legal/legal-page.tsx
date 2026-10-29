"use client";

import Link from "next/link";
import { Fragment, ReactNode } from "react";
import { useLang, pick } from "@/lib/i18n";

/* ------------------------------------------------------------------ */
/*  Content model                                                      */
/* ------------------------------------------------------------------ */

/**
 * A block of legal copy. Strings support a tiny inline syntax:
 *   **bold**            strong emphasis (used for conspicuous terms)
 *   [label](/path)      link (internal paths, mailto: or https:)
 *   [Placeholder]       a bracketed placeholder that still needs a real value
 * The contact email is linked automatically.
 */
export type LegalBlock =
  | string
  | { list: string[]; ordered?: boolean }
  | { callout: string[]; title?: string };

export type LegalSection = {
  id: string;
  title: string;
  blocks: LegalBlock[];
};

export type LegalDoc = {
  title: string;
  intro: string[];
  sections: LegalSection[];
};

export const CONTACT_EMAIL = "info@estrellamedicalcenters.com";

const CHROME = {
  en: {
    updated: "Last updated: October 29, 2026",
    contents: "On this page",
    backToTop: "Back to top",
  },
  es: {
    updated: "Última actualización: 29 de octubre de 2026",
    contents: "En esta página",
    backToTop: "Volver arriba",
  },
};

const LINK_CLASS =
  "rounded-sm font-medium text-navy-950 underline decoration-navy-950/40 underline-offset-[3px] transition-colors hover:decoration-navy-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun-500 focus-visible:ring-offset-2";

/* ------------------------------------------------------------------ */
/*  Inline renderer                                                    */
/* ------------------------------------------------------------------ */

const INLINE =
  /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)|\[([^\]]+)\]|(info@estrellamedicalcenters\.com)/g;

function Inline({ text }: { text: string }) {
  const out: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const m of Array.from(text.matchAll(INLINE))) {
    const start = m.index ?? 0;
    if (start > last) out.push(text.slice(last, start));
    if (m[1] !== undefined) {
      out.push(
        <strong key={key++} className="font-semibold text-navy-950">
          <Inline text={m[1]} />
        </strong>,
      );
    } else if (m[2] !== undefined && m[3] !== undefined) {
      const href = m[3];
      out.push(
        href.startsWith("/") ? (
          <Link key={key++} href={href} className={LINK_CLASS}>
            {m[2]}
          </Link>
        ) : (
          <a key={key++} href={href} className={LINK_CLASS}>
            {m[2]}
          </a>
        ),
      );
    } else if (m[4] !== undefined) {
      // Placeholder that still needs a confirmed value. Kept visible on purpose.
      out.push(
        <span
          key={key++}
          className="rounded bg-sun-100 px-1 font-medium text-navy-950"
        >
          [{m[4]}]
        </span>,
      );
    } else if (m[5] !== undefined) {
      out.push(
        <a key={key++} href={`mailto:${m[5]}`} className={LINK_CLASS}>
          {m[5]}
        </a>,
      );
    }
    last = start + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out.map((n, i) => <Fragment key={i}>{n}</Fragment>)}</>;
}

function Block({ block }: { block: LegalBlock }) {
  if (typeof block === "string") {
    return (
      <p>
        <Inline text={block} />
      </p>
    );
  }
  if ("list" in block) {
    const ListTag = block.ordered ? "ol" : "ul";
    return (
      <ListTag
        className={`space-y-2 pl-6 ${block.ordered ? "list-decimal" : "list-disc"} marker:text-navy-900/70`}
      >
        {block.list.map((item) => (
          <li key={item} className="pl-1">
            <Inline text={item} />
          </li>
        ))}
      </ListTag>
    );
  }
  return (
    <div className="rounded-3xl bg-mist-50 p-6 ring-1 ring-navy-900/10 sm:p-7">
      {block.title && (
        <p className="font-semibold text-navy-950">
          <Inline text={block.title} />
        </p>
      )}
      <div className={block.title ? "mt-3 space-y-3" : "space-y-3"}>
        {block.callout.map((para) => (
          <p key={para}>
            <Inline text={para} />
          </p>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Layout                                                             */
/* ------------------------------------------------------------------ */

export function LegalPage({ doc }: { doc: LegalDoc }) {
  const { lang } = useLang();
  const c = pick(lang, CHROME);

  return (
    <section className="bg-white font-heading">
      <div className="container-x pb-24 pt-32 sm:pb-32 sm:pt-40">
        <article className="mx-auto max-w-[70ch]">
          <header id="top" className="scroll-mt-32">
            <h1 className="text-balance font-heading text-[clamp(2.2rem,4vw,3.4rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-navy-950">
              {doc.title}
            </h1>
            <p className="mt-4 text-[14px] font-medium text-navy-900/75">
              {c.updated}
            </p>
            <div className="mt-8 space-y-4 text-[17px] leading-relaxed text-navy-900/75">
              {doc.intro.map((para) => (
                <p key={para}>
                  <Inline text={para} />
                </p>
              ))}
            </div>
          </header>

          <nav
            aria-labelledby="legal-toc-heading"
            className="mt-10 rounded-3xl bg-mist-50 p-6 ring-1 ring-navy-900/10 sm:p-8"
          >
            <h2
              id="legal-toc-heading"
              className="font-heading text-[17px] font-bold tracking-[-0.01em] text-navy-950"
            >
              {c.contents}
            </h2>
            <ol className="mt-4 grid list-decimal gap-x-8 gap-y-2 pl-6 text-[15px] marker:text-navy-900/70 sm:grid-cols-2">
              {doc.sections.map((s) => (
                <li key={s.id} className="pl-1">
                  <a href={`#${s.id}`} className={LINK_CLASS}>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-14 space-y-12 sm:mt-16 sm:space-y-14">
            {doc.sections.map((s, i) => (
              <section
                key={s.id}
                id={s.id}
                aria-labelledby={`${s.id}-heading`}
                className="scroll-mt-32"
              >
                <h2
                  id={`${s.id}-heading`}
                  className="text-balance font-heading text-[clamp(1.4rem,2.4vw,1.85rem)] font-bold leading-[1.15] tracking-[-0.025em] text-navy-950"
                >
                  {i + 1}. {s.title}
                </h2>
                <div className="mt-4 space-y-4 text-[16px] leading-relaxed text-navy-900/75">
                  {s.blocks.map((b, bi) => (
                    <Block key={bi} block={b} />
                  ))}
                </div>
              </section>
            ))}
          </div>

          <p className="mt-16 border-t border-navy-900/10 pt-8 text-[14px]">
            <a href="#top" className={LINK_CLASS}>
              {c.backToTop}
            </a>
          </p>
        </article>
      </div>
    </section>
  );
}
