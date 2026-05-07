"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const STEPS = [
  { slug: "account", label: "Account" },
  { slug: "program", label: "Goals" },
  { slug: "health", label: "Health" },
  { slug: "medications", label: "Medications" },
  { slug: "allergies", label: "Allergies" },
  { slug: "goal-details", label: "Details" },
  { slug: "lifestyle", label: "Lifestyle" },
  { slug: "consent", label: "Consent" },
  { slug: "review", label: "Review" },
];

export function IntakeProgress() {
  const pathname = usePathname() || "";
  const currentSlug = pathname.split("/").pop() || "";
  const currentIndex = STEPS.findIndex((s) => s.slug === currentSlug);
  const safeIdx = currentIndex < 0 ? 0 : currentIndex;
  const pct = ((safeIdx + 1) / STEPS.length) * 100;

  return (
    <div className="sticky top-0 z-40 border-b border-navy-100 bg-white/90 backdrop-blur">
      <div className="container-x flex h-16 items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo/logo.png"
            alt="Estrella Medical Centers"
            width={140}
            height={36}
            className="h-9 w-auto"
          />
        </Link>
        <div className="ml-auto hidden flex-1 items-center gap-4 md:flex">
          <div className="flex items-center gap-2 overflow-x-auto">
            {STEPS.map((s, i) => {
              const active = i === safeIdx;
              const done = i < safeIdx;
              return (
                <div
                  key={s.slug}
                  className={`flex items-center gap-2 whitespace-nowrap text-xs ${
                    active
                      ? "font-semibold text-navy-900"
                      : done
                      ? "text-navy-500"
                      : "text-navy-300"
                  }`}
                >
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] ${
                      active
                        ? "bg-sun-500 text-white"
                        : done
                        ? "bg-navy-200 text-navy-700"
                        : "bg-navy-50 text-navy-400"
                    }`}
                  >
                    {i + 1}
                  </span>
                  {s.label}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-3 text-xs text-navy-500">
          Step {safeIdx + 1} of {STEPS.length}
        </div>
      </div>
      <div className="h-1 w-full bg-navy-50">
        <div
          className="h-full bg-sun-gradient transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export function IntakeFooter({
  back,
  next,
  onNext,
  nextDisabled,
  nextLabel = "Continue",
}: {
  back?: string;
  next?: string;
  onNext?: () => void;
  nextDisabled?: boolean;
  nextLabel?: string;
}) {
  return (
    <div className="sticky bottom-0 z-30 mt-10 border-t border-navy-100 bg-white/95 backdrop-blur">
      <div className="container-x flex h-20 items-center justify-between gap-4">
        {back ? (
          <Link href={back} className="btn-secondary text-sm">
            Back
          </Link>
        ) : (
          <span />
        )}

        {next ? (
          <Link
            href={nextDisabled ? "#" : next}
            aria-disabled={nextDisabled}
            onClick={(e) => {
              if (nextDisabled) {
                e.preventDefault();
                return;
              }
              onNext?.();
            }}
            className={`btn-primary text-sm ${
              nextDisabled ? "pointer-events-none opacity-40" : ""
            }`}
          >
            {nextLabel}
          </Link>
        ) : (
          <button
            type="button"
            onClick={onNext}
            disabled={nextDisabled}
            className="btn-primary text-sm disabled:opacity-40"
          >
            {nextLabel}
          </button>
        )}
      </div>
    </div>
  );
}
