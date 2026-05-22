"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeSrc?: string;
  afterSrc?: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeSrc = "/before-smile.jpeg",
  afterSrc = "/after-smile.jpeg",
  beforeAlt = "Before treatment",
  afterAlt = "After treatment",
  className,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const calculatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, percentage)));
  }, []);

  const handleMouseDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDragging) return;
      calculatePosition(e.clientX);
    },
    [isDragging, calculatePosition]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (!isDragging) return;
      const touch = e.touches[0];
      if (touch) {
        calculatePosition(touch.clientX);
      }
    },
    [isDragging, calculatePosition]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Badge visibility: hide Before when after is 75%+ visible (slider < 25)
  // Hide After when before is 75%+ visible (slider > 75)
  const showBeforeBadge = sliderPosition >= 25;
  const showAfterBadge = sliderPosition <= 75;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden rounded-2xl aspect-[4/3] select-none",
        isDragging ? "cursor-ew-resize" : "cursor-default",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* After image — full background, sits behind */}
      <div className="absolute inset-0">
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Before image — clip-path from right to reveal after underneath */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 z-20 h-full"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        {/* Vertical line */}
        <div className="h-full w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.3)]" />

        {/* Draggable handle */}
        <div
          className="absolute top-1/2 left-1/2 z-30 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white shadow-lg"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <span className="flex items-center gap-0.5 text-xs font-bold text-neutral-500 select-none">
            <span
              className="inline-block"
              style={{
                width: 0,
                height: 0,
                borderTop: "5px solid transparent",
                borderBottom: "5px solid transparent",
                borderRight: "6px solid #a3a3a3",
              }}
            />
            <span
              className="inline-block"
              style={{
                width: 0,
                height: 0,
                borderTop: "5px solid transparent",
                borderBottom: "5px solid transparent",
                borderLeft: "6px solid #a3a3a3",
              }}
            />
          </span>
        </div>
      </div>

      {/* Badges — fade in/out based on slider position */}
      <div
        className={cn(
          "pointer-events-none absolute bottom-3 left-3 z-20 rounded-md bg-red-500/75 px-3 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur-sm transition-opacity duration-300",
          showBeforeBadge ? "opacity-100" : "opacity-0"
        )}
      >
        Before
      </div>
      <div
        className={cn(
          "pointer-events-none absolute right-3 bottom-3 z-20 rounded-md bg-green-500/75 px-3 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur-sm transition-opacity duration-300",
          showAfterBadge ? "opacity-100" : "opacity-0"
        )}
      >
        After
      </div>
    </div>
  );
}
