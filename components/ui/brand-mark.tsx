import Image from "next/image";
import { Fragment } from "react";
import { cn } from "@/lib/cn";

/**
 * Renders copy with every "{logo}" token swapped for the Estrella logo,
 * sized relative to the surrounding font so it sits on the text line.
 */
export function WithLogo({
  text,
  tone = "dark",
  className,
}: {
  text: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  const parts = text.split("{logo}");
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {part}
          {i < parts.length - 1 && (
            <Image
              src={tone === "light" ? "/logo/logo-light.png" : "/logo/logo.png"}
              alt="Estrella"
              width={235}
              height={110}
              className={cn(
                "ml-[0.2em] mr-[0.05em] inline-block h-[2.6em] w-auto align-middle",
                className
              )}
            />
          )}
        </Fragment>
      ))}
    </>
  );
}
