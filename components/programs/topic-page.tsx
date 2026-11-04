import Link from "@/components/ui/link";
import { ArrowRight, Check, Info } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Clinics } from "@/components/landing/clinics";
import type { Lang } from "@/lib/lang-detect";
import type { Block, TopicCopy } from "@/lib/topic-pages";

/*
 * Template for the medication and cost pages (/programs/weight-loss/*).
 * Server-rendered so every word is in the HTML. Same visual language as
 * the program page: mist hero, white reading band, navy closing CTA.
 */

const FOCUS =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun-500 focus-visible:ring-offset-2";

const UI = {
  en: { home: "Home", program: "GLP-1 program", onPage: "On this page", book: "Book a consultation", related: "Keep reading", crumbs: "Breadcrumb" },
  es: { home: "Inicio", program: "Programa GLP-1", onPage: "En esta página", book: "Agenda una consulta", related: "Sigue leyendo", crumbs: "Ruta de navegación" },
};

function BlockView({ block }: { block: Block }) {
  if (block.type === "p") {
    return <p className="text-[17px] leading-[1.7] text-navy-900/80">{block.text}</p>;
  }
  if (block.type === "list") {
    return (
      <ul className="space-y-3">
        {block.items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[17px] leading-[1.6] text-navy-900/80">
            <span aria-hidden className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sun-400 text-navy-950">
              <Check className="h-3 w-3" strokeWidth={3.5} />
            </span>
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <aside className="rounded-2xl bg-mist-50 p-6 ring-1 ring-navy-900/[0.07] sm:p-7">
      <p className="flex items-center gap-2 text-[14px] font-semibold text-navy-950">
        <Info aria-hidden className="h-4 w-4 text-sun-700" />
        {block.title}
      </p>
      <p className="mt-2 text-[15px] leading-relaxed text-navy-900/75">{block.text}</p>
    </aside>
  );
}

export function TopicPage({ copy, lang }: { copy: TopicCopy; lang: Lang }) {
  const ui = UI[lang];

  return (
    <div className="font-heading">
      {/* Hero */}
      <section className="relative -mt-20 overflow-hidden bg-mist-50 text-navy-950">
        <div className="container-x pb-16 pt-28 lg:pb-20 lg:pt-36">
          <nav aria-label={ui.crumbs}>
            <ol className="flex flex-wrap items-center gap-x-2 text-[14px] font-medium text-navy-900/70">
              <li>
                <Link href="/" className={`rounded hover:text-navy-950 ${FOCUS}`}>{ui.home}</Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/programs/weight-loss" className={`rounded hover:text-navy-950 ${FOCUS}`}>{ui.program}</Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-navy-950">{copy.crumb}</li>
            </ol>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-14">
            <div className="lg:col-span-7">
              <p className="eyebrow">{copy.eyebrow}</p>
              <h1 className="mt-3 text-balance text-[clamp(2.3rem,4.2vw,4rem)] font-extrabold leading-[1.04] tracking-[-0.035em]">
                {copy.h1}
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-[18px] leading-relaxed text-navy-900/75">{copy.intro}</p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white p-7 shadow-[0_24px_60px_-28px_rgba(6,14,34,.30)] ring-1 ring-navy-900/[0.07] sm:p-8">
                <p className="text-[15px] leading-relaxed text-navy-900/80">{copy.priceNote}</p>
                <Link href="/qualify" className={`btn-pill mt-6 w-full justify-center sm:w-auto ${FOCUS}`}>
                  {ui.book}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reading band */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <nav aria-label={ui.onPage} className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-28">
              <p className="text-[13px] font-semibold text-sun-700">{ui.onPage}</p>
              <ol className="mt-4 space-y-1 border-l border-navy-900/10">
                {copy.sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className={`-ml-px block border-l border-transparent py-1.5 pl-4 text-[14px] leading-snug text-navy-900/70 hover:border-navy-950 hover:text-navy-950 ${FOCUS}`}
                    >
                      {s.h2}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <article className="min-w-0 max-w-3xl lg:col-span-8">
            {copy.sections.map((s, i) => (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className={`scroll-mt-28 ${i > 0 ? "mt-14" : ""}`}>
                <h2 id={`${s.id}-h`} className="text-balance text-[clamp(1.6rem,2.6vw,2.15rem)] font-bold leading-[1.15] tracking-[-0.025em] text-navy-950">
                  {s.h2}
                </h2>
                <div className="mt-5 space-y-5">
                  {s.blocks.map((b, bi) => (
                    <BlockView key={bi} block={b} />
                  ))}
                </div>
              </section>
            ))}

            <div className="mt-16 border-t border-navy-900/10 pt-8">
              <h2 className="text-[13px] font-semibold text-sun-700">{ui.related}</h2>
              <ul className="mt-4 flex flex-col gap-1">
                {copy.related.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className="btn-link">
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-[13px] text-navy-900/70">{copy.updated}</p>
            </div>
          </article>
        </div>
      </section>

      {copy.showClinics && <Clinics />}

      {/* Closing CTA */}
      <section className={`${copy.showClinics ? "bg-white pt-20 sm:pt-28" : "bg-white"} pb-24 sm:pb-32`}>
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-navy-950 p-8 text-white sm:p-12 lg:p-16">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{ background: "radial-gradient(55% 70% at 0% 100%, rgba(200,146,56,.18) 0%, rgba(200,146,56,0) 70%)" }}
              />
              <div className="relative grid items-end gap-8 md:grid-cols-12">
                <h2 className="max-w-lg text-balance text-[clamp(2rem,3.8vw,3.1rem)] font-extrabold leading-[1.05] tracking-[-0.035em] md:col-span-7">
                  {copy.ctaTitle}
                </h2>
                <div className="md:col-span-5">
                  <p className="max-w-md text-[16px] leading-relaxed text-white/75">{copy.ctaBody}</p>
                  <Link href="/qualify" className={`btn-pill mt-6 ${FOCUS} focus-visible:ring-offset-navy-950`}>
                    {ui.book}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
