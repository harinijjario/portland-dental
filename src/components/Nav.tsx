"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Treatments", href: "/treatments" },
  { label: "About", href: "/about" },
  { label: "Patient Journey", href: "/patient-journey" },
  { label: "Smile Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex h-20 items-center justify-between",
        "border-b border-border/50 bg-white",
        "px-6 md:px-12 lg:px-20"
      )}
    >
      {/* Logo */}
      <Link href="/" className="relative shrink-0">
        <Image
          src="/Portland_Dental_Practice.jpg"
          alt="Portland Dental Practice"
          width={180}
          height={48}
          className="h-10 w-auto object-contain"
          priority
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium tracking-wide text-brand-grey hover:text-brand transition-colors duration-300"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Desktop CTA */}
      <Link
        href="/contact"
        className={cn(
          "hidden lg:inline-flex",
          "bg-brand text-white px-6 py-2.5 text-sm font-medium tracking-wide",
          "hover:bg-brand-dark transition-colors duration-300",
          "rounded-lg"
        )}
      >
        Book an Assessment
      </Link>

      {/* Mobile Hamburger Button */}
      <button
        type="button"
        className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
        aria-expanded={mobileMenuOpen}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        <span
          className={cn(
            "block h-0.5 w-6 bg-brand-grey transition-all duration-300",
            mobileMenuOpen && "translate-y-2 rotate-45"
          )}
        />
        <span
          className={cn(
            "block h-0.5 w-6 bg-brand-grey transition-all duration-300",
            mobileMenuOpen && "opacity-0"
          )}
        />
        <span
          className={cn(
            "block h-0.5 w-6 bg-brand-grey transition-all duration-300",
            mobileMenuOpen && "-translate-y-2 -rotate-45"
          )}
        />
      </button>

      {/* Mobile Full-Screen Overlay Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center bg-white transition-all duration-500",
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="flex flex-col items-center gap-8" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-display text-2xl font-medium tracking-wide text-brand-grey hover:text-brand transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={cn(
              "mt-4 inline-flex",
              "bg-brand text-white px-8 py-3 text-sm font-medium tracking-wide",
              "hover:bg-brand-dark transition-colors duration-300",
              "rounded-lg"
            )}
          >
            Book an Assessment
          </Link>
        </nav>
      </div>
    </header>
  );
}
