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
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const teamMembers = [
  {
    name: "Dr. Kian Dhinsa",
    role: "Principal Dentist",
    prompt:
      "Professional headshot of a distinguished male dentist in his 50s wearing a white coat. Warm, confident smile. Studio lighting, neutral grey background.",
    bio: "BDS MFDS RCS (Eng). Over 25 years of experience in restorative and cosmetic dentistry.",
  },
  {
    name: "Dr. Sarah Chen",
    role: "Associate Dentist",
    prompt:
      "Professional headshot of a friendly female dentist in her 30s. Modern, approachable. Studio lighting, neutral background.",
    bio: "BDS MJDF RCS. Specialises in cosmetic dentistry and minimally invasive treatments.",
  },
  {
    name: "Emily Richards",
    role: "Dental Hygienist",
    prompt:
      "Professional headshot of a warm, smiling female dental hygienist in clinical scrubs. Studio lighting.",
    bio: "DipDH. Passionate about preventative care and patient education.",
  },
  {
    name: "Tom Bradshaw",
    role: "Practice Manager",
    prompt:
      "Professional headshot of a friendly male practice manager in smart business attire. Warm expression. Studio lighting.",
    bio: "Ensuring every aspect of your visit runs smoothly and comfortably.",
  },
] as const;

const values = [
  {
    number: "01",
    title: "Clinical Excellence",
    description:
      "We maintain the highest standards of clinical care, investing continuously in advanced training and state-of-the-art technology.",
  },
  {
    number: "02",
    title: "Patient-Centred Care",
    description:
      "Every decision we make is guided by what is best for you. We listen, we explain, and we involve you at every stage of your treatment.",
  },
  {
    number: "03",
    title: "Lasting Relationships",
    description:
      "We believe in building genuine, long-term relationships with our patients. Many of our families have trusted us for generations.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <Nav />

      <main>
        {/* ── Hero ── */}
        <section className="bg-white pb-16 pt-8 md:pt-10">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center lg:gap-16"
            >
              {/* Image — top on mobile, right on desktop */}
              <ImagePlaceholder
                prompt="The welcoming interior of a modern dental practice waiting area. Comfortable seating, natural materials, potted plants, soft lighting. A blend of clinical professionalism and warm hospitality. Interior design photography."
                label="Our Practice"
                aspectRatio="aspect-[4/3]"
                className="lg:order-2"
              />

              {/* Content — below image on mobile, left on desktop */}
              <div className="mt-10 lg:order-1 lg:mt-0">
                <p className="text-xs font-medium tracking-[0.3em] text-brand">
                  ABOUT US
                </p>
                <h1 className="mt-6 font-display text-5xl leading-[1.1] md:text-6xl">
                  A Practice Built on Trust
                </h1>
                <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
                  For over two decades, Portland Dental Practice has been dedicated
                  to delivering exceptional dental care in a warm, professional
                  environment.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Our Story ── */}
        <section className="bg-surface-alt py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:px-12 lg:grid-cols-2 lg:px-20">
            {/* Image — shows above text on mobile via flex-col-reverse wrapper */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="order-first lg:order-none"
            >
              <ImagePlaceholder
                prompt="The exterior of a distinguished dental practice in a Georgian townhouse. Portland stone facade, elegant entrance with brass details, potted bay trees flanking the door. Overcast British light, architectural photography."
                label="Our Practice"
                aspectRatio="aspect-[3/4]"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <h2 className="font-display text-4xl leading-[1.15] md:text-5xl">
                Our Story
              </h2>
              <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  Founded with a vision to redefine dental care, Portland Dental
                  Practice has grown from a small family practice into one of the
                  region&apos;s most respected dental clinics.
                </p>
                <p>
                  We have always believed that exceptional dentistry is about
                  more than clinical skill. It requires genuine care, clear
                  communication, and an unwavering commitment to each
                  patient&apos;s wellbeing.
                </p>
                <p>
                  Today, our practice combines time-honoured values with
                  cutting-edge technology, ensuring that every patient receives
                  care that is both clinically outstanding and deeply personal.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="bg-brand py-32">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20"
          >
            <div className="text-center">
              <p className="text-xs font-medium tracking-[0.3em] text-white/70">
                OUR VALUES
              </p>
              <h2 className="mt-6 font-display text-4xl leading-[1.15] text-white md:text-5xl">
                What Guides Us
              </h2>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-3">
              {values.map((value) => (
                <motion.div
                  key={value.number}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                >
                  <span className="font-display text-6xl text-white/15">
                    {value.number}
                  </span>
                  <h3 className="mt-2 font-display text-2xl text-white">{value.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-white/70">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── The Team ── */}
        <section className="bg-surface-alt py-32">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20"
          >
            <div className="text-center">
              <p className="text-xs font-medium tracking-[0.3em] text-brand">
                THE TEAM
              </p>
              <h2 className="mt-6 font-display text-4xl leading-[1.15] md:text-5xl">
                Meet Your Dental Professionals
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                Our dedicated team combines decades of experience with a genuine
                passion for patient care.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member) => (
                <motion.div
                  key={member.name}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                >
                  <ImagePlaceholder
                    prompt={member.prompt}
                    aspectRatio="aspect-[3/4]"
                    label={member.name}
                  />
                  <h3 className="mt-6 font-display text-xl">{member.name}</h3>
                  <p className="font-sans text-sm text-brand">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-slate-900 py-28">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20"
          >
            <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-display text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl">
                  Get to
                  <br />
                  Know Us
                </h2>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/60">
                  We would love to welcome you to our practice. Book a consultation
                  and discover how we can help you achieve the smile you deserve.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href="/contact"
                  className="rounded-full bg-brand px-10 py-5 text-sm font-medium tracking-wide text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-brand-dark"
                >
                  Book an Assessment
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}
