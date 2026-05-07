"use client";

import { ReactNode } from "react";

export function Marquee({ children }: { children: ReactNode }) {
  return (
    <div className="mask-fade-x overflow-hidden">
      <div className="flex w-max animate-marquee gap-12">
        <div className="flex shrink-0 items-center gap-12">{children}</div>
        <div className="flex shrink-0 items-center gap-12" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
