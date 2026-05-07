"use client";

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
                  className="w-full max-w-xs border border-navy-900/15 bg-cream-50 p-8 shadow-soft"
                >
                  <blockquote className="font-display text-[18px] font-light leading-[1.5] text-navy-900">
                    <span className="font-normal italic text-navy-900/35">
                      “
                    </span>
                    {text}
                    <span className="font-normal italic text-navy-900/35">
                      ”
                    </span>
                  </blockquote>
                  <figcaption className="mt-7 flex items-center gap-3 border-t border-navy-900/15 pt-5">
                    <img
                      src={image}
                      alt={name}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <div className="font-display text-[15px] font-normal leading-tight text-navy-900">
                        {name}
                      </div>
                      <div className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-navy-900/55">
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
