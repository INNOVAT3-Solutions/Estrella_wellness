"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export function StickyMobileCta() {
  const pathname = usePathname() || "";
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname.startsWith("/qualify")) return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 transition-all duration-500 md:hidden ${
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="border-t border-navy-900/15 bg-cream-50/95 px-4 py-3 backdrop-blur-md">
        <Link
          href="/qualify"
          className="flex w-full items-center justify-center gap-2 bg-navy-900 px-5 py-4 text-[12px] font-medium uppercase tracking-[0.2em] text-cream-50 active:bg-navy-800"
        >
          Begin intake
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
