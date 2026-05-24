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
      <div className="mx-auto max-w-7xl">
        {/* Top Row: Logo & Navigation */}
        <div className="flex flex-col items-center gap-10 text-center md:flex-row md:justify-between md:text-left">
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
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3" aria-label="Footer navigation">
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

        {/* Legal Links — always visible */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3" aria-label="Legal">
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

        {/* Copyright */}
        <p className="mt-8 text-center text-xs text-muted-foreground/60">
          &copy; 2026 Portland Dental Practice. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
