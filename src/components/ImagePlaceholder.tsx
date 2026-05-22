"use client";

import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  prompt: string;
  aspectRatio?: string;
  className?: string;
  label?: string;
}

export function ImagePlaceholder({
  prompt,
  aspectRatio = "aspect-[4/3]",
  className,
  label,
}: ImagePlaceholderProps) {
  return (
    <div
      data-prompt={prompt}
      className={cn(
        "group relative overflow-hidden rounded-2xl",
        "bg-surface-alt",
        "ring-1 ring-brand/20 hover:ring-brand/40",
        "shadow-[inset_0_0_30px_rgba(0,136,204,0.05)] hover:shadow-[inset_0_0_40px_rgba(0,136,204,0.1)]",
        "transition-all duration-500",
        aspectRatio,
        className
      )}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
        {/* Camera / image icon */}
        <svg
          className="h-10 w-10 text-brand/20 transition-colors duration-500 group-hover:text-brand/30"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect
            x="4"
            y="8"
            width="32"
            height="24"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="20"
            cy="20"
            r="6"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="20" cy="20" r="2.5" fill="currentColor" />
        </svg>

        {/* Label */}
        {label && (
          <span className="font-display text-sm text-brand/40">{label}</span>
        )}

        {/* Prompt text */}
        <p className="max-w-[80%] px-6 text-center text-xs leading-relaxed text-muted-foreground/60">
          {prompt}
        </p>
      </div>
    </div>
  );
}
