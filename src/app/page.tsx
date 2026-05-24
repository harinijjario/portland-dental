"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { FeaturedTransformation } from "@/components/FeaturedTransformation";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";

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

const trustStats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "15,000+", label: "Smiles Transformed" },
  { value: "5\u2605", label: "Patient Rating" },
  { value: "98%", label: "Recommend Us" },
] as const;

const treatments = [
  {
    name: "General Dentistry",
    prompt:
      "Close-up of modern dental tools arranged elegantly on a pristine white surface. Minimalist, clinical luxury.",
    description:
      "Routine check-ups, hygiene treatments, and preventative care to maintain your oral health.",
    href: "/treatments",
  },
  {
    name: "Cosmetic Dentistry",
    prompt:
      "A before-and-after comparison of teeth whitening. Clean studio lighting, dental photography.",
    description:
      "Teeth whitening, veneers, and smile makeovers designed to enhance your natural beauty.",
    href: "/treatments",
  },
  {
    name: "Restorative Care",
    prompt:
      "An advanced dental implant procedure in a state-of-the-art treatment room. Warm clinical lighting.",
    description:
      "Implants, crowns, and bridges to restore function and aesthetics with lasting results.",
    href: "/treatments",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* ─── HERO ─── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="bg-white"
      >
        <div className="flex min-h-[90vh] flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-0">
          {/* Left — Content */}
          <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:px-20 lg:py-0">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-brand">
              PORTLAND DENTAL PRACTICE
            </p>

            <h1 className="mt-6 font-display text-5xl leading-[1.1] text-foreground md:text-6xl lg:text-7xl">
              Your Smile,
              <br />
              Our Expertise
            </h1>

            <p className="mt-8 max-w-lg font-sans text-lg leading-relaxed text-muted-foreground md:text-xl">
              We provide bespoke dental care tailored to your individual needs.
              From preventative treatments to advanced cosmetic dentistry, our
              experienced team delivers exceptional results in a calm, welcoming
              environment.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-brand px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors duration-300 hover:bg-brand-dark"
              >
                Book an Assessment
              </Link>
              <Link
                href="/treatments"
                className="border border-brand/30 px-8 py-3.5 text-sm font-medium tracking-wide text-brand transition-colors duration-300 hover:bg-brand/5"
              >
                Discover Your Options
              </Link>
            </div>
          </div>

          {/* Right — Hero Image */}
          <div className="relative">
            <ImagePlaceholder
              prompt="A warm, naturally-lit photograph of a modern dental practice reception area. Soft cream and white tones with touches of cerulean blue. A welcoming smile from a patient at the front desk. Shallow depth of field, editorial quality, luxury medical aesthetic."
              label="Hero Image"
              aspectRatio="aspect-[3/4] lg:aspect-auto lg:h-full"
            />
          </div>
        </div>
      </motion.section>

      {/* ─── TRUST INDICATORS ─── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="bg-brand py-16"
      >
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 text-center lg:grid-cols-4">
          {trustStats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ─── WELCOME SECTION ─── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="bg-white py-32"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:px-12 lg:grid-cols-2 lg:px-20">
          {/* Left — Image */}
          <ImagePlaceholder
            prompt="A close-up portrait of a confident, friendly dentist in a pristine white coat, standing in a modern treatment room. Natural light from a large window. Clean, clinical luxury aesthetic. Shot on medium format, shallow depth of field."
            label="Lead Dentist Portrait"
            aspectRatio="aspect-[3/4]"
          />

          {/* Right — Content */}
          <div>
            <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-brand">
              WELCOME
            </p>

            <h2 className="mt-6 font-display text-4xl leading-[1.15] text-foreground md:text-5xl">
              Exceptional Care,
              <br />
              Every Visit
            </h2>

            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                At Portland Dental Practice, we believe that outstanding dental
                care begins with truly understanding each patient. Our
                personalised approach ensures that every treatment plan is
                crafted around your unique needs and aspirations.
              </p>
              <p>
                Our state-of-the-art practice combines the latest clinical
                techniques with a warm, unhurried atmosphere. From your first
                assessment to ongoing care, we are committed to making every
                visit a comfortable and positive experience.
              </p>
            </div>

            <Link
              href="/about"
              className="mt-8 inline-block border-b border-brand/30 pb-1 text-sm font-medium text-brand transition-colors hover:border-brand"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </motion.section>

      {/* ─── FEATURED TRANSFORMATION ─── */}
      <FeaturedTransformation />

      {/* ─── TREATMENTS PREVIEW ─── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="bg-white py-32"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <p className="text-center font-sans text-xs font-medium uppercase tracking-[0.3em] text-brand">
            OUR EXPERTISE
          </p>

          <h2 className="mt-6 text-center font-display text-4xl leading-[1.15] text-foreground md:text-5xl">
            Tailored Treatments
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground">
            Comprehensive dental care, from preventative to cosmetic
          </p>

          <div className="mt-16 grid grid-cols-1 gap-0 md:grid-cols-3">
            {treatments.map((treatment) => (
              <div key={treatment.name}>
                <ImagePlaceholder
                  prompt={treatment.prompt}
                  label={treatment.name}
                  aspectRatio="aspect-[4/3]"
                />
                <div className="px-2 py-8">
                  <h3 className="font-display text-2xl text-foreground">
                    {treatment.name}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {treatment.description}
                  </p>
                  <Link
                    href={treatment.href}
                    className="mt-4 inline-block text-sm text-brand transition-colors hover:text-brand-dark"
                  >
                    Learn More &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ─── REVIEWS ─── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="bg-surface-alt py-32"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <p className="text-center font-sans text-xs font-medium uppercase tracking-[0.3em] text-brand">
            PATIENT REVIEWS
          </p>

          <h2 className="mt-6 text-center font-display text-4xl leading-[1.15] text-foreground md:text-5xl">
            What Our Patients Say
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground">
            Genuine feedback from those who trust us with their smiles
          </p>
        </div>

        <div className="mt-16">
          <ReviewsCarousel />
        </div>
      </motion.section>

      {/* ─── CTA SECTION ─── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="bg-brand py-24"
      >
        <div className="mx-auto max-w-4xl px-6 text-center md:px-12 lg:px-20">
          <h2 className="font-display text-4xl text-white md:text-5xl">
            Ready to Begin Your Journey?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Book a comprehensive assessment with our team and discover the
            possibilities for your smile.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-block bg-white px-8 py-3.5 text-sm font-medium tracking-wide text-brand transition-colors duration-300 hover:bg-white/90"
          >
            Request a Consultation
          </Link>
        </div>
      </motion.section>

      <Footer />
    </>
  );
}
