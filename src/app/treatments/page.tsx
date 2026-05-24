"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

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

interface TreatmentSectionProps {
  number: string;
  title: string;
  paragraphs: string[];
  treatments: string[];
  imagePrompt: string;
  imageLabel: string;
  imageOnRight: boolean;
  bgClass: string;
}

function TreatmentSection({
  number,
  title,
  paragraphs,
  treatments,
  imagePrompt,
  imageLabel,
  imageOnRight,
  bgClass,
}: TreatmentSectionProps) {
  const imageBlock = (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={imageOnRight ? "lg:order-2" : "lg:order-1"}
    >
      <ImagePlaceholder
        prompt={imagePrompt}
        label={imageLabel}
        aspectRatio="aspect-[4/3]"
        className="rounded-2xl"
      />
    </motion.div>
  );

  const contentBlock = (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`px-8 md:px-16 py-12 lg:py-0 ${imageOnRight ? "lg:order-1" : "lg:order-2"}`}
    >
      <span className="font-display text-7xl text-brand/10">{number}</span>
      <h2 className="font-display text-3xl md:text-4xl mt-4">{title}</h2>
      <div className="mt-6 space-y-4">
        {paragraphs.map((para, i) => (
          <p key={i} className="text-base text-muted-foreground leading-relaxed">
            {para}
          </p>
        ))}
      </div>

      {/* Treatments grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
        {treatments.map((treatment) => (
          <div key={treatment} className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
            <span className="text-sm text-muted-foreground">{treatment}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Link
        href="/contact"
        className="mt-10 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-brand hover:text-brand-dark transition-colors duration-300"
      >
        Book an Assessment
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </motion.div>
  );

  return (
    <section className={`${bgClass} py-32`}>
      <div className="mx-auto max-w-7xl">
        {/*
          Mobile: flex-col-reverse puts image above text.
          Desktop: grid with explicit order controls image left/right.
        */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-0 lg:items-center">
          {contentBlock}
          {imageBlock}
        </div>
      </div>
    </section>
  );
}

const treatmentSections: TreatmentSectionProps[] = [
  {
    number: "01",
    title: "General Dentistry",
    paragraphs: [
      "Our general dentistry services form the foundation of your oral health. Regular examinations, professional cleaning, and early detection are key to maintaining a healthy smile for life.",
      "We use the latest diagnostic technology, including digital radiography and intraoral cameras, to identify concerns at the earliest stage and provide minimally invasive treatments.",
    ],
    treatments: [
      "Check-ups & Examinations",
      "Hygiene & Prevention",
      "Fillings & Repairs",
      "Root Canal Treatment",
      "Extractions",
    ],
    imagePrompt:
      "A bright, modern dental hygiene appointment. A patient relaxing in a state-of-the-art dental chair while a hygienist performs a gentle clean. Warm natural light, clinical luxury.",
    imageLabel: "General Dentistry",
    imageOnRight: false,
    bgClass: "bg-surface-alt",
  },
  {
    number: "02",
    title: "Cosmetic Dentistry",
    paragraphs: [
      "Transform your smile with our range of cosmetic treatments. Whether you are looking for a subtle enhancement or a complete smile makeover, we create naturally beautiful results.",
      "Every cosmetic treatment begins with a detailed consultation where we discuss your goals and create a bespoke plan. We use digital smile design technology to help you visualise your results before we begin.",
    ],
    treatments: [
      "Teeth Whitening",
      "Porcelain Veneers",
      "Composite Bonding",
      "Smile Makeovers",
      "Gum Contouring",
    ],
    imagePrompt:
      "Close-up of a radiant, natural smile showing perfectly aligned white teeth. Studio lighting, beauty editorial style. Shot on Phase One, shallow depth of field.",
    imageLabel: "Cosmetic Dentistry",
    imageOnRight: true,
    bgClass: "bg-white",
  },
  {
    number: "03",
    title: "Restorative Dentistry",
    paragraphs: [
      "Restore both function and aesthetics with our advanced restorative treatments. We specialise in creating durable, natural-looking solutions that blend seamlessly with your existing teeth.",
      "Using premium materials and precision digital workflows, our restorations are crafted to exacting standards. From single crowns to full-arch rehabilitation, we deliver results that last.",
    ],
    treatments: [
      "Dental Implants",
      "Crowns & Bridges",
      "Dentures",
      "Inlays & Onlays",
      "Full Mouth Rehabilitation",
    ],
    imagePrompt:
      "A 3D render of a dental implant integrated into a jawbone model, displayed on a modern screen in a consultation room. Clean clinical setting, educational.",
    imageLabel: "Restorative Care",
    imageOnRight: false,
    bgClass: "bg-surface-alt",
  },
  {
    number: "04",
    title: "Orthodontics",
    paragraphs: [
      "Achieve a straighter, more confident smile with our discreet orthodontic solutions. We offer modern alternatives to traditional braces that fit seamlessly into your lifestyle.",
      "Our orthodontic assessments use digital scanning technology to create a precise treatment plan. We will guide you through every stage, from initial consultation to your final, beautifully aligned smile.",
    ],
    treatments: [
      "Clear Aligners",
      "Fixed Braces",
      "Retainers",
      "Adult Orthodontics",
    ],
    imagePrompt:
      "A set of clear dental aligners displayed on a clean white surface with soft directional lighting. Product photography style, minimalist luxury.",
    imageLabel: "Orthodontics",
    imageOnRight: true,
    bgClass: "bg-white",
  },
];

export default function TreatmentsPage() {
  return (
    <>
      <Nav />

      <main>
        {/* ─── Hero ─── */}
        <section className="bg-white pb-16 pt-8 md:pt-10">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center lg:gap-16"
            >
              {/* Image — top on mobile, right on desktop */}
              <ImagePlaceholder
                prompt="A panoramic view of a modern, bright dental treatment room with state-of-the-art equipment. Clean lines, cerulean blue accents, natural light flooding through large windows. Architectural interior photography."
                label="Our Treatment Rooms"
                aspectRatio="aspect-[4/3]"
                className="lg:order-2"
              />

              {/* Content — below image on mobile, left on desktop */}
              <div className="mt-10 lg:order-1 lg:mt-0">
                <p className="text-xs tracking-[0.3em] text-brand font-medium uppercase">
                  Our Treatments
                </p>
                <h1 className="font-display text-5xl md:text-6xl leading-[1.1] mt-6">
                  Comprehensive Dental Care
                </h1>
                <p className="text-lg text-muted-foreground mt-8 max-w-lg leading-relaxed">
                  From preventative care to advanced cosmetic treatments, we offer a
                  complete range of services tailored to your individual needs.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── Stats Bar ─── */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-brand py-14"
        >
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 px-6 text-center md:flex-row md:gap-16">
            <div>
              <p className="font-display text-3xl text-white">2,500+</p>
              <p className="mt-1 text-sm text-white/70">Patients Treated</p>
            </div>
            <div className="hidden h-8 w-px bg-white/20 md:block" />
            <div>
              <p className="font-display text-3xl text-white">15+</p>
              <p className="mt-1 text-sm text-white/70">Years Combined Experience</p>
            </div>
            <div className="hidden h-8 w-px bg-white/20 md:block" />
            <div>
              <p className="font-display text-3xl text-white">98%</p>
              <p className="mt-1 text-sm text-white/70">Patient Satisfaction</p>
            </div>
          </div>
        </motion.section>

        {/* ─── Treatment Sections ─── */}
        {treatmentSections.map((section) => (
          <TreatmentSection key={section.number} {...section} />
        ))}

        {/* ─── CTA Section ─── */}
        <section className="bg-brand py-24">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center px-6"
          >
            <h2 className="font-display text-3xl md:text-4xl text-white leading-[1.15]">
              Find the Right Treatment for You
            </h2>
            <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-xl mx-auto">
              Book a comprehensive assessment and let our team create a
              personalised treatment plan tailored to your goals.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex bg-white text-brand px-8 py-3.5 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors duration-300 rounded-lg"
            >
              Request a Consultation
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}
