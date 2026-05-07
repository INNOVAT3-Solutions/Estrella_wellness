"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface NavigationItem {
  label: string;
  hasDropdown?: boolean;
  onClick?: () => void;
}

interface ProgramCard {
  image: string;
  category: string;
  title: string;
  onClick?: () => void;
}

interface PulseFitHeroProps {
  logo?: string;
  navigation?: NavigationItem[];
  ctaButton?: {
    label: string;
    onClick: () => void;
  };
  /** Render the internal header chrome. Set to false when the host app provides its own. */
  showHeader?: boolean;
  title: React.ReactNode;
  subtitle: string;
  primaryAction?: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  disclaimer?: string;
  socialProof?: {
    avatars: string[];
    text: string;
  };
  programs?: ProgramCard[];
  /** Seconds per program for one full carousel loop. Higher = slower. */
  carouselSecondsPerCard?: number;
  className?: string;
  children?: React.ReactNode;
}

export function PulseFitHero({
  logo = "PulseFit",
  navigation = [
    { label: "Features" },
    { label: "Programs", hasDropdown: true },
    { label: "Testimonials" },
    { label: "Pricing" },
    { label: "Contact" },
  ],
  ctaButton,
  showHeader = true,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  disclaimer,
  socialProof,
  programs = [],
  carouselSecondsPerCard = 10,
  className,
  children,
}: PulseFitHeroProps) {
  return (
    <section
      className={cn(
        "relative w-full min-h-screen flex flex-col overflow-hidden bg-cream-50 paper-grain paper-grain-light",
        className
      )}
      role="banner"
      aria-label="Hero section"
    >
      {/* Header */}
      {showHeader && (
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-20 flex flex-row justify-between items-center px-8 lg:px-16"
          style={{
            paddingTop: "32px",
            paddingBottom: "32px",
          }}
        >
          {/* Logo */}
          <div className="font-display text-2xl font-normal text-navy-900">{logo}</div>

          {/* Navigation */}
          <nav className="hidden lg:flex flex-row items-center gap-8" aria-label="Main navigation">
            {navigation.map((item, index) => (
              <button
                key={index}
                onClick={item.onClick}
                className="flex flex-row items-center gap-1 text-[12px] font-medium uppercase tracking-[0.18em] text-navy-900/70 hover:text-navy-900 transition-colors"
              >
                {item.label}
                {item.hasDropdown && (
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          {ctaButton && (
            <button
              onClick={ctaButton.onClick}
              className="bg-navy-900 px-6 py-3 text-[12px] font-medium uppercase tracking-[0.18em] text-cream-50 transition-colors hover:bg-navy-800"
            >
              {ctaButton.label}
            </button>
          )}
        </motion.header>
      )}

      {/* Main Content */}
      {children ? (
        <div className="relative z-10 flex-1 flex items-center justify-center w-full">
          {children}
        </div>
      ) : (
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-20 pb-12 sm:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex flex-col items-center text-center max-w-5xl gap-8 sm:gap-10"
          >
            {/* Title — brand serif */}
            <h1 className="font-display font-light text-navy-900 text-[clamp(48px,8vw,108px)] leading-[0.95] tracking-[-0.035em]">
              {title}
            </h1>

            {/* Subtitle — brand sans */}
            <p className="font-sans font-normal text-navy-900/70 text-[17px] sm:text-[19px] leading-[1.65] max-w-xl">
              {subtitle}
            </p>

            {/* Action Buttons */}
            {(primaryAction || secondaryAction) && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex flex-col sm:flex-row items-center gap-5 mt-2"
              >
                {primaryAction && (
                  <button
                    onClick={primaryAction.onClick}
                    className="inline-flex items-center gap-2 bg-navy-900 px-8 py-4 text-[13px] font-medium uppercase tracking-[0.2em] text-cream-50 transition-colors duration-300 hover:bg-navy-800"
                  >
                    {primaryAction.label}
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M7 10H13M13 10L10 7M13 10L10 13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                )}

                {secondaryAction && (
                  <button
                    onClick={secondaryAction.onClick}
                    className="inline-flex items-center gap-2 border-b border-navy-900/30 pb-1 text-[13px] font-medium uppercase tracking-[0.18em] text-navy-900 transition-colors hover:border-navy-900"
                  >
                    {secondaryAction.label}
                  </button>
                )}
              </motion.div>
            )}

            {/* Disclaimer */}
            {disclaimer && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="font-sans text-[12px] uppercase tracking-[0.22em] text-navy-900/55"
              >
                {disclaimer}
              </motion.p>
            )}

            {/* Social Proof */}
            {socialProof && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-row items-center gap-4 mt-2"
              >
                <div className="flex flex-row -space-x-2">
                  {socialProof.avatars.map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar}
                      alt={`Patient ${index + 1}`}
                      className="rounded-full border-2 border-cream-50 h-10 w-10 object-cover"
                    />
                  ))}
                </div>
                <span className="font-sans text-[13px] text-navy-900/70">
                  {socialProof.text}
                </span>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}

      {/* Program Cards Carousel */}
      {programs.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative z-10 w-full overflow-hidden pt-10 pb-20"
        >
          {/* Gradient Overlays — fade to brand cream */}
          <div
            className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none w-[120px] sm:w-[180px]"
            style={{
              background:
                "linear-gradient(90deg, #F4EFE6 0%, rgba(244, 239, 230, 0) 100%)",
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none w-[120px] sm:w-[180px]"
            style={{
              background:
                "linear-gradient(270deg, #F4EFE6 0%, rgba(244, 239, 230, 0) 100%)",
            }}
          />

          {/* Scrolling Container */}
          <motion.div
            className="flex items-center"
            animate={{
              x: [0, -((programs.length * 380) / 2)],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: programs.length * carouselSecondsPerCard,
                ease: "linear",
              },
            }}
            style={{
              gap: "24px",
              paddingLeft: "24px",
            }}
          >
            {/* Duplicate programs for seamless loop */}
            {[...programs, ...programs].map((program, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03, y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onClick={program.onClick}
                className="flex-shrink-0 cursor-pointer relative overflow-hidden"
                style={{
                  width: "356px",
                  height: "480px",
                }}
              >
                {/* Image */}
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(10, 23, 51, 0) 0%, rgba(10, 23, 51, 0.78) 100%)",
                  }}
                />

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-7 flex flex-col gap-2">
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-cream-50/80">
                    {program.category}
                  </span>
                  <h3 className="font-display text-[26px] font-light leading-[1.15] text-cream-50">
                    {program.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
