"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export function FeaturedTransformation() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      className="bg-surface-alt py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Slider — top on mobile, right on desktop */}
          <BeforeAfterSlider className="rounded-2xl lg:order-2" />

          {/* Content — below slider on mobile, left on desktop */}
          <div className="mt-10 lg:order-1 lg:mt-0">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-brand">
              FEATURED CASE STUDY
            </p>

            <h2 className="mt-6 font-display text-4xl leading-[1.15] text-foreground md:text-5xl">
              A Smile Transformed
            </h2>

            <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
              This patient came to us feeling self-conscious about discolouration
              and uneven spacing. Through a combination of professional whitening
              and composite bonding, we were able to create a naturally radiant
              smile that restored their confidence. Every treatment plan at
              Portland Dental Practice is bespoke &mdash; designed around your
              unique goals and delivered with meticulous clinical care.
            </p>

            <Link
              href="/gallery"
              className="mt-8 inline-block bg-brand px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors duration-300 hover:bg-brand-dark"
            >
              Discover Your Options
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
