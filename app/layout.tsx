import type { Metadata } from "next";
import { Inter, Instrument_Serif, Fragment_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({ 
  weight: "400",
  style: ['normal', 'italic'],
  subsets: ["latin"],
  variable: "--font-instrument",
  display: 'swap',
});

const fragmentMono = Fragment_Mono({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
  display: 'swap',
});

const lanecarHeadline = localFont({
  src: "./fonts/LanecarHeadline.woff2",
  variable: "--font-headline",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Hanzo Studio",
  description: "Unlimited Design for Solid Startups",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} ${fragmentMono.variable} ${lanecarHeadline.variable}`}>
      <body className="font-sans bg-bg-primary text-text-primary antialiased selection:bg-accent-orange/20 selection:text-accent-orange">
        {children}
      </body>
    </html>
  );
}
