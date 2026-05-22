import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portland Dental Practice | Premium Dental Care",
  description:
    "Portland Dental Practice offers bespoke dental treatments with a commitment to clinical excellence and patient comfort. Book an assessment today.",
  icons: {
    icon: "/Portland_Tooth_Logo.jpg",
    apple: "/Portland_Tooth_Logo.jpg",
  },
  openGraph: {
    title: "Portland Dental Practice | Premium Dental Care",
    description:
      "Bespoke dental treatments with a commitment to clinical excellence and patient comfort. Serving Portland with personalised care.",
    siteName: "Portland Dental Practice",
    images: [
      {
        url: "/Portland_Dental_Practice.jpg",
        width: 1200,
        height: 630,
        alt: "Portland Dental Practice",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portland Dental Practice | Premium Dental Care",
    description:
      "Bespoke dental treatments with a commitment to clinical excellence and patient comfort.",
    images: ["/Portland_Dental_Practice.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${playfairDisplay.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
