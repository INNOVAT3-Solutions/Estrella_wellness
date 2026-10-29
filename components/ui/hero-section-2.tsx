"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

// Icon component for contact details
const InfoIcon = ({ type }: { type: "website" | "phone" | "address" }) => {
  const icons = {
    website: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" x2="22" y1="12" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
    phone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <circle cx="12" cy="12" r="9"></circle>
        <polyline points="12 7 12 12 15 14"></polyline>
      </svg>
    ),
    address: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
  };
  return (
    <span aria-hidden className="mr-2.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-950 text-sun-300">
      {icons[type]}
    </span>
  );
};

interface HeroSectionProps {
  className?: string;
  logo?: {
    url: string;
    alt: string;
    text?: string;
  };
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  callToAction: {
    text: string;
    href: string;
  };
  backgroundImage: string;
  /** Describes the hero image for screen readers. Omit or pass "" if decorative. */
  imageAlt?: string;
  contactInfo: {
    website: string;
    phone: string;
    address: string;
  };
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      logo,
      slogan,
      title,
      subtitle,
      callToAction,
      backgroundImage,
      imageAlt,
      contactInfo,
    },
    ref
  ) => {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    };

    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: "easeOut" as const,
        },
      },
    };

    return (
      <motion.section
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden bg-mist-50 font-heading text-navy-950",
          className
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-x grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.08fr_1fr] lg:gap-14 lg:py-24">
          {/* Copy */}
          <div className="min-w-0">
            {(logo || slogan) && (
              <motion.header className="flex flex-wrap items-center gap-3" variants={itemVariants}>
                {logo && (
                  <img src={logo.url} alt={logo.alt} className="h-9 w-auto" />
                )}
                {logo?.text && (
                  <p className="text-[17px] font-bold text-navy-950">{logo.text}</p>
                )}
                {slogan && (
                  <span className="tag-pill">
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-sun-500" />
                    {slogan}
                  </span>
                )}
              </motion.header>
            )}

            <motion.div variants={containerVariants}>
              <motion.h1
                className="mt-5 text-balance font-heading text-[clamp(2.4rem,3.9vw,4.4rem)] font-extrabold leading-[1.03] tracking-[-0.035em] text-navy-950"
                variants={itemVariants}
              >
                {title}
              </motion.h1>
              <motion.p
                className="mt-5 max-w-lg text-pretty text-[17px] leading-relaxed text-navy-900/70"
                variants={itemVariants}
              >
                {subtitle}
              </motion.p>
              <motion.div className="mt-8" variants={itemVariants}>
                <a
                  href={callToAction.href}
                  className="btn-pill px-8 py-4 text-[15px] shadow-[0_12px_28px_-12px_rgba(200,146,56,.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun-500 focus-visible:ring-offset-2"
                >
                  {callToAction.text}
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path
                      d="M4 10H16M16 10L11 5M16 10L11 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </motion.div>
            </motion.div>

            {/* Footer info */}
            <motion.footer
              className="mt-10 border-t border-navy-900/10 pt-6"
              variants={itemVariants}
            >
              <ul className="flex flex-col gap-3 text-[14px] font-medium text-navy-900/75 sm:flex-row sm:flex-wrap sm:gap-x-7">
                <li className="flex items-center">
                  <InfoIcon type="website" />
                  <span>{contactInfo.website}</span>
                </li>
                <li className="flex items-center">
                  <InfoIcon type="phone" />
                  <span>{contactInfo.phone}</span>
                </li>
                <li className="flex items-center">
                  <InfoIcon type="address" />
                  <span>{contactInfo.address}</span>
                </li>
              </ul>
            </motion.footer>
          </div>

          {/* Image */}
          <motion.div
            className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-cover bg-center shadow-[0_24px_60px_-28px_rgba(6,14,34,.30)] ring-1 ring-navy-900/[0.07] sm:aspect-[16/11] lg:aspect-[4/5]"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
            {...(imageAlt
              ? { role: "img", "aria-label": imageAlt }
              : { "aria-hidden": true })}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" as const }}
          ></motion.div>
        </div>
      </motion.section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
