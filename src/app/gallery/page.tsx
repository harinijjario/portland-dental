"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
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

const galleryItems = [
  {
    id: 1,
    title: "Smile Transformation",
    description:
      "Complete smile makeover using porcelain veneers and professional whitening.",
    prompt: "",
    category: "Cosmetic",
  },
  {
    id: 2,
    title: "Teeth Whitening",
    description:
      "Professional whitening achieving a natural, brighter smile.",
    prompt:
      "Before and after comparison of professional teeth whitening. Left side showing yellowed teeth, right side showing bright white natural-looking teeth. Clean dental photography, studio lighting.",
    category: "Cosmetic",
  },
  {
    id: 3,
    title: "Porcelain Veneers",
    description:
      "Custom-crafted veneers to correct spacing and shape.",
    prompt:
      "Before and after dental veneer transformation. Close-up smile photography showing improved alignment and colour. Professional dental documentation style.",
    category: "Cosmetic",
  },
  {
    id: 4,
    title: "Dental Implant",
    description:
      "Single tooth implant restoring a complete, natural smile.",
    prompt:
      "Before and after of a single dental implant. Close-up showing the gap being replaced with a natural-looking implant crown. Clinical photography.",
    category: "Restorative",
  },
  {
    id: 5,
    title: "Composite Bonding",
    description:
      "Minimally invasive bonding to repair chipped and worn teeth.",
    prompt:
      "Before and after composite bonding on front teeth. Showing repaired chips and improved shape. Natural dental photography.",
    category: "Cosmetic",
  },
  {
    id: 6,
    title: "Crown Restoration",
    description:
      "Precision-crafted crown matching the natural tooth perfectly.",
    prompt:
      "Before and after of a dental crown restoration. Damaged tooth restored to full function and aesthetics. Clinical dental photography.",
    category: "Restorative",
  },
  {
    id: 7,
    title: "Orthodontic Treatment",
    description:
      "Clear aligner therapy achieving a beautifully aligned smile.",
    prompt:
      "Before and after clear aligner orthodontic treatment. Showing crooked teeth transformed to perfectly aligned. Smile photography, clean background.",
    category: "Orthodontics",
  },
  {
    id: 8,
    title: "Full Smile Makeover",
    description:
      "Comprehensive treatment combining whitening, bonding, and alignment.",
    prompt:
      "Dramatic before and after smile makeover. Multiple treatments combined for a complete transformation. Professional portrait photography showing confident smile.",
    category: "Cosmetic",
  },
  {
    id: 9,
    title: "Gum Contouring",
    description:
      "Reshaping the gum line to create a more balanced, proportional smile.",
    prompt:
      "Before and after gum contouring procedure. Showing improved gum symmetry and tooth proportions. Close-up clinical photography.",
    category: "Cosmetic",
  },
];

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const selectedGalleryItem = selectedItem
    ? galleryItems.find((item) => item.id === selectedItem)
    : null;

  return (
    <>
      <Nav />

      {/* ─── Hero ─── */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <section className="bg-white pb-16 pt-8 md:pt-10">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
            <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
              {/* Left — Image */}
              <ImagePlaceholder
                prompt="A close-up of a confident, radiant smile. Soft studio lighting, shallow depth of field. Beauty editorial photography showing naturally white, perfectly aligned teeth."
                label="Smile Gallery"
                aspectRatio="aspect-[4/3]"
              />

              {/* Right — Content */}
              <div className="mt-10 lg:mt-0">
                <p className="text-xs tracking-[0.3em] text-brand">
                  SMILE GALLERY
                </p>
                <h1 className="font-display mt-6 text-5xl leading-[1.1] md:text-6xl">
                  Real Portland Results.
                  <br />
                  Restoring Confidence
                </h1>
                <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
                  Browse our collection of smile transformations. Each case
                  represents a unique journey, tailored to the individual patient.
                </p>
              </div>
            </div>
          </div>
        </section>
      </motion.div>

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
            <p className="font-display text-3xl text-white">200+</p>
            <p className="mt-1 text-sm text-white/70">Smile Transformations</p>
          </div>
          <div className="hidden h-8 w-px bg-white/20 md:block" />
          <div>
            <p className="font-display text-3xl text-white">4.9</p>
            <p className="mt-1 text-sm text-white/70">Google Rating</p>
          </div>
          <div className="hidden h-8 w-px bg-white/20 md:block" />
          <div>
            <p className="font-display text-3xl text-white">100%</p>
            <p className="mt-1 text-sm text-white/70">Bespoke Treatment Plans</p>
          </div>
        </div>
      </motion.section>

      {/* ─── Gallery Grid ─── */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <section className="bg-surface-alt py-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-2 md:px-12 lg:grid-cols-3 lg:px-20">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer"
                onClick={() => setSelectedItem(item.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedItem(item.id);
                  }
                }}
              >
                {/* Image container with hover scale */}
                <div className="overflow-hidden rounded-2xl">
                  {item.id === 1 ? (
                    <div className="transition-transform duration-500 group-hover:scale-[1.02]">
                      <BeforeAfterSlider className="rounded-2xl" />
                    </div>
                  ) : (
                    <div className="transition-transform duration-500 group-hover:scale-[1.02]">
                      <ImagePlaceholder
                        prompt={item.prompt}
                        label={item.title}
                        aspectRatio="aspect-[4/3]"
                      />
                    </div>
                  )}
                </div>

                {/* Text content */}
                <p className="mt-4 text-xs uppercase tracking-wide text-brand">
                  {item.category}
                </p>
                <h3 className="font-display mt-1 text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </motion.div>

      {/* ─── Modal ─── */}
      <AnimatePresence>
        {selectedItem !== null && selectedGalleryItem && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 bg-black/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
            />

            {/* Modal content */}
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-6"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl bg-white p-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  className="absolute right-4 top-4 cursor-pointer text-2xl text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setSelectedItem(null)}
                  aria-label="Close gallery modal"
                >
                  &#x2715;
                </button>

                {/* Modal image */}
                {selectedGalleryItem.id === 1 ? (
                  <BeforeAfterSlider />
                ) : (
                  <ImagePlaceholder
                    prompt={selectedGalleryItem.prompt}
                    label={selectedGalleryItem.title}
                    aspectRatio="aspect-[16/9]"
                  />
                )}

                {/* Modal text */}
                <h2 className="font-display mt-6 text-3xl">
                  {selectedGalleryItem.title}
                </h2>
                <p className="mt-3 text-base text-muted-foreground">
                  {selectedGalleryItem.description}
                </p>
                <p className="mt-4 text-xs uppercase tracking-wide text-brand">
                  {selectedGalleryItem.category}
                </p>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* ─── CTA ─── */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <section className="bg-brand py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-4xl leading-[1.1] text-white md:text-5xl">
              Start Your Transformation
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Every smile tells a story. Let us help you write yours.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-lg bg-white px-8 py-3.5 text-sm font-medium tracking-wide text-brand transition-colors duration-300 hover:bg-white/90"
            >
              Book an Assessment
            </Link>
          </div>
        </section>
      </motion.div>

      <Footer />
    </>
  );
}
