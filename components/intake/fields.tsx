"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * An option can be a plain string (used as both stored value and label) or a
 * { value, label } pair — `value` is the canonical stored/compared string
 * (kept in English so persisted data and risk-tier logic stay stable) and
 * `label` is what's displayed (translatable).
 */
export type FieldOption = string | { value: string; label: string };

const normalizeOption = (opt: FieldOption): { value: string; label: string } =>
  typeof opt === "string" ? { value: opt, label: opt } : opt;

export function Field({
  label,
  required,
  children,
  hint,
  className,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
  hint?: string;
  className?: string;
}) {
  return (
    <label className={cn("flex flex-col gap-2", className)}>
      <span className="label">
        {label}
        {required && <span className="ml-1 text-sun-600">*</span>}
      </span>
      {children}
      {hint && <span className="text-xs text-navy-500">{hint}</span>}
    </label>
  );
}

export function MultiSelect({
  options,
  values,
  onToggle,
  cols = 2,
}: {
  options: FieldOption[];
  values: string[];
  onToggle: (v: string) => void;
  cols?: 1 | 2 | 3;
}) {
  return (
    <div
      className={cn(
        "grid gap-3",
        cols === 1 && "grid-cols-1",
        cols === 2 && "grid-cols-1 sm:grid-cols-2",
        cols === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      )}
    >
      {options.map((raw) => {
        const opt = normalizeOption(raw);
        const checked = values.includes(opt.value);
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onToggle(opt.value)}
            data-checked={checked}
            className="checkbox-card text-left"
          >
            <span
              className={cn(
                "mt-0.5 flex h-5 w-5 items-center justify-center rounded-md border transition",
                checked
                  ? "border-sun-500 bg-sun-500 text-white"
                  : "border-navy-200 bg-white"
              )}
            >
              {checked && (
                <svg
                  className="h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </span>
            <span className="text-sm font-medium text-navy-800">
              {opt.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export function RadioGroup({
  options,
  value,
  onChange,
  cols = 2,
}: {
  options: FieldOption[];
  value: string;
  onChange: (v: string) => void;
  cols?: 1 | 2 | 3;
}) {
  return (
    <div
      className={cn(
        "grid gap-3",
        cols === 1 && "grid-cols-1",
        cols === 2 && "grid-cols-1 sm:grid-cols-2",
        cols === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      )}
    >
      {options.map((raw) => {
        const opt = normalizeOption(raw);
        const checked = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            data-checked={checked}
            className="checkbox-card text-left"
          >
            <span
              className={cn(
                "mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border transition",
                checked
                  ? "border-sun-500 bg-sun-500"
                  : "border-navy-200 bg-white"
              )}
            >
              {checked && <span className="h-2 w-2 rounded-full bg-white" />}
            </span>
            <span className="text-sm font-medium text-navy-800">
              {opt.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export function StepHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      <div className="eyebrow">{eyebrow}</div>
      <h1 className="mt-2 font-display text-3xl text-navy-900 sm:text-4xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-navy-600">{subtitle}</p>
      )}
    </div>
  );
}
