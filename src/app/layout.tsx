import type { Metadata } from "next";
import { Instrument_Sans, Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "CureNast | Precision wellness redesigned",
  description:
    "CureNast blends evidence-backed medicine with hospitality-grade experiences—online and in-person—for patients who expect world-class care.",
  metadataBase: new URL("https://curenast.framer.website"),
  openGraph: {
    title: "CureNast | Precision wellness redesigned",
    description:
      "Pixel-perfect CureNast landing experience rebuilt in Next.js with cinematic motion, accessibility, and SEO baked in.",
    url: "https://curenast.framer.website",
    siteName: "CureNast",
    images: [
      {
        url: "/images/hero-doctor-main.jpg",
        width: 1200,
        height: 630,
        alt: "CureNast hero image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CureNast | Precision wellness redesigned",
    description: "Premium medical collective with heart-first technology.",
    images: ["/images/hero-doctor-main.jpg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: "CureNast",
  url: "https://curenast.framer.website",
  logo: "https://curenast.framer.website/favicon.ico",
  sameAs: ["https://instagram.com", "https://linkedin.com", "https://twitter.com"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "44 Embarcadero Center",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94111",
    addressCountry: "USA",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: "+1-800-555-1212",
    email: "care@curenast.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${inter.variable} ${instrument.variable} antialiased bg-[var(--bg-light)] text-[var(--text-dark)]`}
        suppressHydrationWarning
      >
        <a href="#hero" className="skip-link">
          Skip to main content
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
