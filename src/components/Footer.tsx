import Image from "next/image";
import Link from "next/link";

const footerNavLinks = [
  { label: "Home", href: "/" },
  { label: "Treatments", href: "/treatments" },
  { label: "About", href: "/about" },
  { label: "Patient Journey", href: "/patient-journey" },
  { label: "Smile Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
] as const;

export function Footer() {
  return (
    <footer className="bg-surface-alt py-20 px-6 md:px-12 lg:px-20">
      {/* Top Row: Logo & Navigation */}
      <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/Portland_Dental_Practice.jpg"
            alt="Portland Dental Practice"
            width={220}
            height={56}
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer navigation">
          {footerNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-brand transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Separator */}
      <div className="my-10 border-t border-border/30" />

      {/* Bottom Row */}
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          &copy; 2026 Portland Dental Practice. All rights reserved.
        </p>

        {/* Legal Links */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Legal">
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-brand transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
