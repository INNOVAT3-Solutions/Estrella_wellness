"use client";

// Not currently used on the site. Do not use it to show reviews unless they
// are real, consented patient reviews.

import React from "react";
import { motion } from "motion/react";

type ColumnTestimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: ColumnTestimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 28,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <figure
                  key={i}
                  className="w-full max-w-xs rounded-3xl bg-white p-7 font-heading ring-1 ring-navy-900/[0.07] shadow-[0_24px_60px_-28px_rgba(6,14,34,.30)]"
                >
                  <blockquote className="text-[15px] leading-relaxed text-navy-900/80">
                    <span className="text-sun-600">
                      “
                    </span>
                    {text}
                    <span className="text-sun-600">
                      ”
                    </span>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-navy-900/[0.07] pt-5">
                    <img
                      src={image}
                      alt=""
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <div className="text-[15px] font-bold leading-tight text-navy-950">
                        {name}
                      </div>
                      <div className="mt-0.5 text-[13px] text-navy-900/70">
                        {role}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
