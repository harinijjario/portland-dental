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

const openingHours = [
  { days: "Monday \u2013 Friday", hours: "8:00 \u2013 18:00" },
  { days: "Saturday", hours: "9:00 \u2013 14:00" },
  { days: "Sunday", hours: "Closed" },
] as const;

const expectations = [
  {
    number: "01",
    title: "Warm Welcome",
    description:
      "Our reception team will greet you warmly and ensure you feel comfortable from the moment you arrive.",
  },
  {
    number: "02",
    title: "No Pressure",
    description:
      "We will discuss your options openly and honestly. There is never any obligation to proceed.",
  },
  {
    number: "03",
    title: "Clear Communication",
    description:
      "We explain everything in plain language. You will always know what to expect and why.",
  },
] as const;

export default function ContactPage() {
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
              {/* Left — Image */}
              <ImagePlaceholder
                prompt="A friendly dental receptionist handing over a welcome pack to a new patient at a sleek, modern reception desk. Warm smiles, natural light, contemporary interior with blue accents. Editorial photography."
                label="Get in Touch"
                aspectRatio="aspect-[4/3]"
              />

              {/* Right — Content */}
              <div className="mt-10 lg:mt-0">
                <p className="text-xs font-medium tracking-[0.3em] text-brand">
                  CONTACT US
                </p>
                <h1 className="mt-6 font-display text-5xl leading-[1.1] md:text-6xl">
                  Get in Touch
                </h1>
                <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
                  We would love to hear from you. Whether you have a question about
                  our treatments or would like to book an assessment, our team is
                  here to help.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Contact Content ── */}
        <section className="bg-surface-alt py-32">
          <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:gap-0">
            {/* Left — Contact Form */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="px-6 py-12 md:px-12 lg:px-20"
            >
              <h2 className="font-display text-3xl">Request a Consultation</h2>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-10 space-y-6"
              >
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-foreground"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="mt-2 w-full border-b border-border bg-transparent py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-brand"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-2 w-full border-b border-border bg-transparent py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-brand"
                    placeholder="you@example.co.uk"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-2 w-full border-b border-border bg-transparent py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-brand"
                    placeholder="0117 000 0000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="treatment"
                    className="block text-sm font-medium text-foreground"
                  >
                    Treatment Interest
                  </label>
                  <select
                    id="treatment"
                    name="treatment"
                    className="mt-2 w-full border-b border-border bg-transparent py-3 text-base text-foreground outline-none transition-colors focus:border-brand"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="general-enquiry">General Enquiry</option>
                    <option value="general-dentistry">General Dentistry</option>
                    <option value="cosmetic-dentistry">
                      Cosmetic Dentistry
                    </option>
                    <option value="restorative-care">Restorative Care</option>
                    <option value="orthodontics">Orthodontics</option>
                    <option value="hygiene-appointment">
                      Hygiene Appointment
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-2 w-full resize-none border-b border-border bg-transparent py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-brand"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full bg-brand px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-brand-dark md:w-auto"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Right — Practice Details & Map */}
            <div>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="px-6 py-12 md:px-12"
              >
                <h2 className="font-display text-2xl">Practice Details</h2>

                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="mt-1 text-sm text-foreground">
                      Portland House, 17 Portland Square
                      <br />
                      Bristol BS2 8SJ
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Telephone</p>
                    <p className="mt-1 text-sm text-foreground">
                      0117 925 0123
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="mt-1 text-sm text-foreground">
                      hello@portlanddental.co.uk
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="mt-8">
                  <p className="mb-4 text-sm font-medium uppercase tracking-wide text-foreground">
                    Opening Hours
                  </p>
                  <div className="space-y-2">
                    {openingHours.map((item) => (
                      <div
                        key={item.days}
                        className="flex justify-between text-sm text-muted-foreground"
                      >
                        <span>{item.days}</span>
                        <span>{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Map Placeholder */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                <ImagePlaceholder
                  prompt="An elegant map illustration showing the location of a dental practice in a Georgian square in Bristol. Watercolour style, muted blue and grey tones. Birds-eye view."
                  label="Location Map"
                  aspectRatio="aspect-[16/9]"
                  className="mx-6 mb-12 md:mx-12"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Reassurance — What to Expect ── */}
        <section className="bg-brand py-24">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto max-w-4xl px-6"
          >
            <h2 className="text-center font-display text-3xl leading-[1.15] text-white md:text-4xl">
              What to Expect
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3">
              {expectations.map((item) => (
                <motion.div
                  key={item.number}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className="text-center"
                >
                  <span className="font-display text-4xl text-white/20">
                    {item.number}
                  </span>
                  <h3 className="mt-4 text-lg font-medium text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Final CTA ── */}
        <section className="bg-brand-dark py-24">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto max-w-3xl px-6 text-center"
          >
            <h2 className="font-display text-4xl leading-[1.15] text-white md:text-5xl">
              Your New Smile Starts Here
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Take the first step today. Our team is ready to welcome you.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex bg-white px-8 py-3.5 text-sm font-medium tracking-wide text-brand-dark transition-colors duration-300 hover:bg-white/90"
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
