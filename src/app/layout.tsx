import type { Metadata } from "next";
import { Poppins, Inter, Instrument_Sans } from "next/font/google"; // Instrument_Sans is the correct import name? Let's verify. Usually names are PascalCase.
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "CureNast - Trusted Health Solutions",
  description: "Wellness starts with care that really listens. Book an appointment today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${instrumentSans.variable} antialiased scroll-smooth`}>
      <body className="font-sans text-dark bg-white">
        <Header />
        <main className="min-h-screen">
            {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
