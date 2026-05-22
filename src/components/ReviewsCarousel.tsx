"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const GOOGLE_REVIEW_URL = "https://share.google/zMBxjFJaxVTxFFMaC";

const reviews = [
  {
    quote:
      "Hannah was extremely helpful and efficient... She treated them with respect, putting them at ease... knowledgeable in her field, professional, approachable and friendly. I recommend her without reservation.",
    author: "Jo York",
    rating: 5,
  },
  {
    quote:
      "A lovely dental practice - friendly, efficient, good value. Dr Sembi is professional yet approachable and warm... I still prefer to return to this practice. Highly recommended.",
    author: "Charlie H",
    rating: 5,
  },
  {
    quote:
      "Just had a really excellent appt with the hygienist... this was probably the least painful deep clean I\u2019ve ever had! The hygienist has a friendly calm manner... very reassuring.",
    author: "Rachel Moss",
    rating: 5,
  },
  {
    quote:
      "Really pleased with the whole experience... The place itself is clean, modern, and has a professional feel... The clean was thorough, didn\u2019t feel rushed, and the results were spot on.",
    author: "Prytesh Patel",
    rating: 5,
  },
  {
    quote:
      "This doctor is really fantastic! He is quiet and really patient. He took the time to ensure that all of my important dental treatment was completed appropriately... that is no longer an issue!",
    author: "Paul Cali",
    rating: 5,
  },
] as const;

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 text-amber-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  );
}

// Duplicate the reviews for seamless looping
const duplicatedReviews = [...reviews, ...reviews];

export function ReviewsCarousel() {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(420);
  const gap = 24;
  const singleSetWidth = reviews.length * (cardWidth + gap);

  useEffect(() => {
    const updateWidth = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 640) {
          setCardWidth(300);
        } else if (window.innerWidth < 1024) {
          setCardWidth(360);
        } else {
          setCardWidth(420);
        }
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const totalWidth = reviews.length * (cardWidth + gap);

    const controls = animate(x, -totalWidth, {
      duration: 40,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });

    return () => controls.stop();
  }, [x, cardWidth]);

  return (
    <div ref={containerRef} className="overflow-hidden">
      <motion.div
        className="flex"
        style={{ x, gap: `${gap}px`, width: `${singleSetWidth * 2}px` }}
      >
        {duplicatedReviews.map((review, i) => (
          <div
            key={`${review.author}-${i}`}
            className="relative shrink-0 rounded-2xl border border-border/40 bg-white p-8 pt-6"
            style={{ width: `${cardWidth}px` }}
          >
            {/* Google logo — top right */}
            <Link
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 transition-opacity hover:opacity-80"
              aria-label="View on Google Reviews"
            >
              <Image
                src="/google-color.svg"
                alt="Google"
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </Link>

            <StarRating />
            <blockquote className="mt-5 pr-6 text-sm leading-relaxed text-muted-foreground">
              &ldquo;{review.quote}&rdquo;
            </blockquote>
            <p className="mt-6 text-sm font-medium text-foreground">
              {review.author}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
