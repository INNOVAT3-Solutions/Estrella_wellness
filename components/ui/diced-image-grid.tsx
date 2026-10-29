"use client";
import React from "react";

type Slide = { title: string; image: string };

interface DicedImageGridProps {
  slides: Slide[];
  className?: string;
  /**
   * Alt text in the active language, in on-screen order (index 0 is
   * slides[3], index 3 is slides[0]). Falls back to each slide's title.
   * Render order on screen is bottom-right, bottom-left, top-right, top-left.
   */
  alts?: string[];
}

export function DicedImageGrid({ slides, className, alts }: DicedImageGridProps) {
  return (
    <div
      className={className}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "20px",
        width: "100%",
        aspectRatio: "1 / 1",
      }}
    >
      {[slides[3], slides[2], slides[1], slides[0]].map((slide, index) => (
        <div
          key={index}
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "100%",
            overflow: "hidden",
            borderRadius: "20px",
          }}
        >
          <img
            src={slide?.image}
            alt={alts?.[index] ?? slide?.title ?? ""}
            className={`warped-image ${
              ["bottom-right", "bottom-left", "top-right", "top-left"][index]
            }`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      ))}
      <style jsx>{`
        .warped-image {
          --r: 20px;
          --s: 40px;
          --x: 25px;
          --y: 5px;
        }
        .top-right {
          --_m: /calc(2 * var(--r)) calc(2 * var(--r))
            radial-gradient(#000 70%, #0000 72%);
          --_g: conic-gradient(
            at calc(100% - var(--r)) var(--r),
            #0000 25%,
            #000 0
          );
          --_d: (var(--s) + var(--r));
          mask: calc(100% - var(--_d) - var(--x)) 0 var(--_m),
            100% calc(var(--_d) + var(--y)) var(--_m),
            radial-gradient(
                var(--s) at 100% 0,
                #0000 99%,
                #000 calc(100% + 1px)
              )
              calc(-1 * var(--r) - var(--x)) calc(var(--r) + var(--y)),
            var(--_g) calc(-1 * var(--_d) - var(--x)) 0,
            var(--_g) 0 calc(var(--_d) + var(--y));
          mask-repeat: no-repeat;
        }
        .top-left {
          --_m: /calc(2 * var(--r)) calc(2 * var(--r))
            radial-gradient(#000 70%, #0000 72%);
          --_g: conic-gradient(at var(--r) var(--r), #000 75%, #0000 0);
          --_d: (var(--s) + var(--r));
          mask: calc(var(--_d) + var(--x)) 0 var(--_m),
            0 calc(var(--_d) + var(--y)) var(--_m),
            radial-gradient(
                var(--s) at 0 0,
                #0000 99%,
                #000 calc(100% + 1px)
              )
              calc(var(--r) + var(--x)) calc(var(--r) + var(--y)),
            var(--_g) calc(var(--_d) + var(--x)) 0,
            var(--_g) 0 calc(var(--_d) + var(--y));
          mask-repeat: no-repeat;
        }
        .bottom-left {
          --_m: /calc(2 * var(--r)) calc(2 * var(--r))
            radial-gradient(#000 70%, #0000 72%);
          --_g: conic-gradient(
            from 180deg at var(--r) calc(100% - var(--r)),
            #0000 25%,
            #000 0
          );
          --_d: (var(--s) + var(--r));
          mask: calc(var(--_d) + var(--x)) 100% var(--_m),
            0 calc(100% - var(--_d) - var(--y)) var(--_m),
            radial-gradient(
                var(--s) at 0 100%,
                #0000 99%,
                #000 calc(100% + 1px)
              )
              calc(var(--r) + var(--x)) calc(-1 * var(--r) - var(--y)),
            var(--_g) calc(var(--_d) + var(--x)) 0,
            var(--_g) 0 calc(-1 * var(--_d) - var(--y));
          mask-repeat: no-repeat;
        }
        .bottom-right {
          --_m: /calc(2 * var(--r)) calc(2 * var(--r))
            radial-gradient(#000 70%, #0000 72%);
          --_g: conic-gradient(
            from 90deg at calc(100% - var(--r)) calc(100% - var(--r)),
            #0000 25%,
            #000 0
          );
          --_d: (var(--s) + var(--r));
          mask: calc(100% - var(--_d) - var(--x)) 100% var(--_m),
            100% calc(100% - var(--_d) - var(--y)) var(--_m),
            radial-gradient(
                var(--s) at 100% 100%,
                #0000 99%,
                #000 calc(100% + 1px)
              )
              calc(-1 * var(--r) - var(--x)) calc(-1 * var(--r) - var(--y)),
            var(--_g) calc(-1 * var(--_d) - var(--x)) 0,
            var(--_g) 0 calc(-1 * var(--_d) - var(--y));
          mask-repeat: no-repeat;
        }
      `}</style>
    </div>
  );
}
