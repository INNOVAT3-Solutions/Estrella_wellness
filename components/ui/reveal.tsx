"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

export function Reveal({ children, delay = 0, as = "div", className }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setShown(true), delay);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  const Tag = as as any;
  return (
    <Tag ref={ref} className={cn("reveal", shown && "in", className)}>
      {children}
    </Tag>
  );
}
