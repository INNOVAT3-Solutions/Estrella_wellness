"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { PROGRAMS } from "@/lib/programs";

export function Header() {
  const [open, setOpen] = useState(false);
  const [progOpen, setProgOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() || "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname.startsWith("/qualify")) return null;

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-navy-900/15 bg-cream-50/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/logo.png"
            alt="Estrella Medical Centers"
            width={160}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setProgOpen(true)}
            onMouseLeave={() => setProgOpen(false)}
          >
            <button className="flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.18em] text-navy-900/80 transition-colors hover:text-navy-900">
              Programs
              <ChevronDown className="h-3 w-3" strokeWidth={2} />
            </button>
            {progOpen && (
              <div className="absolute left-1/2 top-full w-[720px] -translate-x-1/2 pt-3">
                <div className="border border-navy-900/15 bg-cream-50">
                  <div className="grid grid-cols-2">
                    {PROGRAMS.map((p, idx) => (
                      <Link
                        key={p.slug}
                        href={`/programs/${p.slug}`}
                        className={`group p-6 transition-colors hover:bg-cream-100 ${
                          idx % 2 === 0 ? "border-r border-navy-900/15" : ""
                        } ${idx < PROGRAMS.length - 2 ? "border-b border-navy-900/15" : ""}`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="font-display text-[18px] font-light text-navy-900">
                              {p.shortName}
                            </div>
                            <div className="mt-1 text-[12px] text-navy-900/55">
                              {p.tagline}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-[10px] uppercase tracking-[0.2em] text-navy-900/45">
                              From
                            </div>
                            <div className="font-display text-[16px] font-light text-navy-900">
                              ${p.startingPrice}/mo
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="flex items-center justify-between border-t border-navy-900/15 bg-navy-900 p-5 text-cream-50">
                    <div>
                      <div className="text-[12px] uppercase tracking-[0.18em] text-cream-50/65">
                        Not sure where to start
                      </div>
                      <div className="mt-1 font-display text-[18px] font-light">
                        Take the ten-minute intake.
                      </div>
                    </div>
                    <Link
                      href="/qualify"
                      className="inline-flex items-center gap-2 border-b border-sun-300/60 pb-0.5 text-[12px] font-medium uppercase tracking-[0.18em] text-sun-200 hover:border-sun-200"
                    >
                      Begin intake
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link href="/how-it-works" className="text-[12px] font-medium uppercase tracking-[0.18em] text-navy-900/80 hover:text-navy-900">
            Process
          </Link>
          <Link href="/providers" className="text-[12px] font-medium uppercase tracking-[0.18em] text-navy-900/80 hover:text-navy-900">
            Providers
          </Link>
          <Link href="/faq" className="text-[12px] font-medium uppercase tracking-[0.18em] text-navy-900/80 hover:text-navy-900">
            Journal
          </Link>
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <Link href="/dashboard" className="text-[12px] font-medium uppercase tracking-[0.18em] text-navy-900/70 hover:text-navy-900">
            Patient login
          </Link>
          <Link
            href="/qualify"
            className="inline-flex items-center justify-center gap-2 bg-navy-900 px-6 py-3 text-[12px] font-medium uppercase tracking-[0.18em] text-cream-50 transition-colors hover:bg-navy-800"
          >
            Begin intake
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <button
          className="md:hidden border border-navy-900/20 p-2.5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-navy-900/15 bg-cream-50 md:hidden">
          <div className="container-x flex flex-col gap-1 py-6">
            <div className="px-1 pb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-navy-900/55">
              Programs
            </div>
            {PROGRAMS.map((p) => (
              <Link
                key={p.slug}
                href={`/programs/${p.slug}`}
                className="flex items-center justify-between border-b border-navy-900/10 py-4 text-navy-900 hover:text-sun-700"
                onClick={() => setOpen(false)}
              >
                <span className="font-display text-[17px] font-light">{p.shortName}</span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-navy-900/55">
                  ${p.startingPrice}/mo
                </span>
              </Link>
            ))}
            <div className="my-4 h-px bg-navy-900/15" />
            <Link href="/how-it-works" className="py-2 text-[13px] uppercase tracking-[0.16em] text-navy-900/80" onClick={() => setOpen(false)}>
              Process
            </Link>
            <Link href="/providers" className="py-2 text-[13px] uppercase tracking-[0.16em] text-navy-900/80" onClick={() => setOpen(false)}>
              Providers
            </Link>
            <Link href="/faq" className="py-2 text-[13px] uppercase tracking-[0.16em] text-navy-900/80" onClick={() => setOpen(false)}>
              Journal
            </Link>
            <Link href="/dashboard" className="py-2 text-[13px] uppercase tracking-[0.16em] text-navy-900/80" onClick={() => setOpen(false)}>
              Patient login
            </Link>
            <Link
              href="/qualify"
              className="btn-primary mt-4 w-full"
              onClick={() => setOpen(false)}
            >
              Begin intake
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
