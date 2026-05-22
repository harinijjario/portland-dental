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

export default function PatientJourneyPage() {
  return (
    <>
      <Nav />

      {/* ─── HERO ─── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="bg-white py-32 pt-40"
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-brand">
            YOUR JOURNEY
          </p>

          <h1 className="mt-6 font-display text-5xl leading-[1.1] text-foreground md:text-6xl">
            From First Visit to
            {"\n"}Lasting Confidence
          </h1>

          <p className="mx-auto mt-8 max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground">
            We have designed every step of your experience to be seamless,
            comfortable, and reassuring. Here is what you can expect when you
            visit Portland Dental Practice.
          </p>
        </div>
      </motion.section>

      {/* ─── STEP 1 — INITIAL ENQUIRY ─── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="bg-surface-alt py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-0 lg:grid-cols-2">
            {/* Left — Image (mobile: shows above text via flex-col-reverse) */}
            <div className="flex flex-col-reverse lg:flex-col">
              <ImagePlaceholder
                prompt="A warm, inviting dental practice reception area. A receptionist warmly greeting a new patient. Soft natural light, contemporary interior with clean lines and calming colours. Editorial photography."
                label="Step 1"
                aspectRatio="aspect-[4/3]"
                className="rounded-2xl"
              />
            </div>

            {/* Right — Content */}
            <div className="px-8 py-16 md:px-16 lg:py-0">
              <p className="font-display text-8xl leading-none text-brand/10 md:text-9xl">
                01
              </p>

              <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
                Initial Enquiry
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Your journey begins with a simple phone call or online
                  enquiry. Our friendly reception team will listen to your needs,
                  answer your questions, and find a convenient appointment time.
                </p>
                <p>
                  There is no obligation and no pressure. We are here to help
                  you take the first step at your own pace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ─── STEP 2 — COMPREHENSIVE ASSESSMENT ─── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="bg-white py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-0 lg:grid-cols-2">
            {/* Left — Content (mobile: shows below image via flex-col-reverse wrapper) */}
            <div className="order-2 px-8 py-16 md:px-16 lg:order-1 lg:py-0">
              <p className="font-display text-8xl leading-none text-brand/10 md:text-9xl">
                02
              </p>

              <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
                Comprehensive Assessment
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Your first visit is dedicated entirely to understanding you.
                  We conduct a thorough examination, including digital scans and
                  radiographs where appropriate, to build a complete picture of
                  your oral health.
                </p>
                <p>
                  More importantly, we take the time to listen. What are your
                  concerns? What would you like to achieve? This conversation
                  shapes everything that follows.
                </p>
              </div>
            </div>

            {/* Right — Image */}
            <div className="order-1 lg:order-2">
              <ImagePlaceholder
                prompt="A dentist conducting a detailed examination using modern diagnostic equipment. Calm, focused atmosphere. Patient comfortable and relaxed. Warm clinical lighting."
                label="Step 2"
                aspectRatio="aspect-[4/3]"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* ─── STEP 3 — PERSONALISED TREATMENT PLAN ─── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="bg-surface-alt py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-0 lg:grid-cols-2">
            {/* Left — Image */}
            <div className="flex flex-col-reverse lg:flex-col">
              <ImagePlaceholder
                prompt="A dentist and patient reviewing a digital treatment plan on a large screen in a modern consultation room. Both engaged in discussion. Clean, professional setting."
                label="Step 3"
                aspectRatio="aspect-[4/3]"
                className="rounded-2xl"
              />
            </div>

            {/* Right — Content */}
            <div className="px-8 py-16 md:px-16 lg:py-0">
              <p className="font-display text-8xl leading-none text-brand/10 md:text-9xl">
                03
              </p>

              <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
                Personalised Treatment Plan
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Based on your assessment, we create a bespoke treatment plan
                  that addresses your needs and aligns with your goals. We
                  explain every option clearly, including timelines and
                  investment.
                </p>
                <p>
                  You will never feel rushed. We encourage questions and ensure
                  you feel completely confident before proceeding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ─── STEP 4 — YOUR TREATMENT ─── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="bg-white py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-0 lg:grid-cols-2">
            {/* Left — Content */}
            <div className="order-2 px-8 py-16 md:px-16 lg:order-1 lg:py-0">
              <p className="font-display text-8xl leading-none text-brand/10 md:text-9xl">
                04
              </p>

              <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
                Your Treatment
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Whether your treatment is a single appointment or a series of
                  visits, we ensure every session is as comfortable as possible.
                  Our modern facilities and gentle techniques mean you are in
                  safe hands.
                </p>
                <p>
                  We keep you informed throughout, explaining each step as we
                  go. Your comfort and peace of mind are our priority.
                </p>
              </div>
            </div>

            {/* Right — Image */}
            <div className="order-1 lg:order-2">
              <ImagePlaceholder
                prompt="A dental treatment in progress in a state-of-the-art surgery. Patient relaxed with noise-cancelling headphones. Modern equipment, ambient lighting. Clinical luxury."
                label="Step 4"
                aspectRatio="aspect-[4/3]"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* ─── STEP 5 — AFTERCARE & BEYOND ─── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="bg-surface-alt py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-0 lg:grid-cols-2">
            {/* Left — Image */}
            <div className="flex flex-col-reverse lg:flex-col">
              <ImagePlaceholder
                prompt="A patient admiring their new smile in a hand mirror, with the dental team smiling in the background. Warm, celebratory moment. Bright, airy clinical setting."
                label="Step 5"
                aspectRatio="aspect-[4/3]"
                className="rounded-2xl"
              />
            </div>

            {/* Right — Content */}
            <div className="px-8 py-16 md:px-16 lg:py-0">
              <p className="font-display text-8xl leading-none text-brand/10 md:text-9xl">
                05
              </p>

              <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
                Aftercare & Beyond
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Your care does not end when your treatment is complete. We
                  provide detailed aftercare guidance and schedule follow-up
                  appointments to ensure your results are lasting.
                </p>
                <p>
                  We then welcome you into our ongoing care programme, with
                  regular check-ups and hygiene visits to keep your smile at its
                  best for years to come.
                </p>
              </div>
            </div>
          </div>
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
            Begin Your Journey Today
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Take the first step towards a healthier, more confident smile.
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
