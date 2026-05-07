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
        className="h-4 w-4 text-navy-900"
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
        className="h-4 w-4 text-navy-900"
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
        className="h-4 w-4 text-navy-900"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
  };
  return <div className="mr-3 flex-shrink-0">{icons[type]}</div>;
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
  contactInfo: {
    website: string;
    phone: string;
    address: string;
  };
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    { className, logo, slogan, title, subtitle, callToAction, backgroundImage, contactInfo },
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
          "relative flex w-full flex-col overflow-hidden bg-cream-50 paper-grain paper-grain-light text-navy-900 md:flex-row",
          className
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Side: Content */}
        <div className="flex w-full flex-col justify-between p-8 md:w-1/2 md:p-14 lg:w-3/5 lg:p-20 lg:min-h-[680px]">
          {/* Top Section: Logo & Main Content */}
          <div>
            {(logo || slogan) && (
              <motion.header className="mb-14" variants={itemVariants}>
                <div className="flex items-center">
                  {logo && (
                    <img src={logo.url} alt={logo.alt} className="mr-4 h-9 w-auto" />
                  )}
                  <div>
                    {logo?.text && (
                      <p className="font-display text-[17px] font-light text-navy-900">
                        {logo.text}
                      </p>
                    )}
                    {slogan && (
                      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-navy-900/55">
                        {slogan}
                      </p>
                    )}
                  </div>
                </div>
              </motion.header>
            )}

            <motion.main variants={containerVariants}>
              <motion.h1
                className="font-display font-light leading-[0.98] tracking-[-0.03em] text-navy-900 text-[clamp(40px,5.5vw,76px)]"
                variants={itemVariants}
              >
                {title}
              </motion.h1>
              <motion.div
                className="my-8 h-px w-24 bg-navy-900/30"
                variants={itemVariants}
              ></motion.div>
              <motion.p
                className="mb-10 max-w-md text-[16px] leading-[1.7] text-navy-900/70"
                variants={itemVariants}
              >
                {subtitle}
              </motion.p>
              <motion.a
                href={callToAction.href}
                className="inline-flex items-center gap-2 border-b border-navy-900/30 pb-1 text-[13px] font-medium uppercase tracking-[0.22em] text-navy-900 transition-colors hover:border-navy-900"
                variants={itemVariants}
              >
                {callToAction.text}
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M7 10H13M13 10L10 7M13 10L10 13"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.a>
            </motion.main>
          </div>

          {/* Bottom Section: Footer Info */}
          <motion.footer
            className="mt-16 w-full border-t border-navy-900/15 pt-7"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 gap-5 text-[12px] text-navy-900/70 sm:grid-cols-3">
              <div className="flex items-center">
                <InfoIcon type="website" />
                <span className="uppercase tracking-[0.16em]">{contactInfo.website}</span>
              </div>
              <div className="flex items-center">
                <InfoIcon type="phone" />
                <span className="uppercase tracking-[0.16em]">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center">
                <InfoIcon type="address" />
                <span className="uppercase tracking-[0.16em]">{contactInfo.address}</span>
              </div>
            </div>
          </motion.footer>
        </div>

        {/* Right Side: Image with Clip Path Animation */}
        <motion.div
          className="w-full min-h-[420px] bg-cover bg-center md:w-1/2 md:min-h-full lg:w-2/5"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
          initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
          animate={{ clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)" }}
          transition={{ duration: 1.2, ease: "circOut" as const }}
        ></motion.div>
      </motion.section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
