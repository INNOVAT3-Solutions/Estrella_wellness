import Image from "next/image";
import { cn } from "@/lib/cn";

const SRC = {
  gold: "/brand/estrella-star-gold.png",
  white: "/brand/estrella-star-white.png",
  navy: "/brand/estrella-star-navy.png",
};

/**
 * The Estrella star, cut from the brand mark. Decorative only: size it
 * with a width class (e.g. "w-6"); height follows the 948×756 artwork.
 * Pass `sizes` for large uses so next/image doesn't fetch a full-width file.
 */
export function EstrellaStar({
  tone = "gold",
  className,
  sizes = "48px",
}: {
  tone?: keyof typeof SRC;
  className?: string;
  sizes?: string;
}) {
  return (
    <Image
      src={SRC[tone]}
      alt=""
      aria-hidden
      width={948}
      height={756}
      sizes={sizes}
      className={cn("pointer-events-none h-auto select-none", className)}
    />
  );
}
