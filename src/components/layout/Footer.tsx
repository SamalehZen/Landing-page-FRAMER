import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { buttonClasses } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const social = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

const footerColumns = [
  {
    title: "Utility Pages",
    links: ["About", "Service", "Doctor", "Blog", "Contact Us"],
  },
  {
    title: "Other Pages",
    links: ["Service Details", "Doctor Details", "Blog Details", "404"] ,
  },
  {
    title: "Getting Care",
    links: ["Dermatology", "Neurology", "Orthopedics", "Pediatrics", "Oncology"],
  },
];

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <span className="relative flex h-12 w-12 items-center justify-center">
        <span className="absolute h-10 w-5 rounded-full bg-[var(--primary-blue)]" />
        <span className="absolute h-10 w-5 translate-x-4 rounded-full bg-[var(--accent-orange)]" />
      </span>
      <span className="text-xl font-semibold text-white">CureNast</span>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-32 bg-[#081a51] text-white" id="contact">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <p className="w-full text-center text-[14rem] font-black tracking-[0.1em] text-white/10">
          CureNast
        </p>
      </div>
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20">
        <div className="rounded-[40px] border border-white/15 bg-white/10 p-10 backdrop-blur">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <LogoMark />
              <p className="mt-4 text-lg text-white/80">
                CureNast: Your trusted partner for any health solutions.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="#hero"
                className={cn(buttonClasses("outline"), "border-white text-white hover:bg-white/10")}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <LogoMark />
            <p className="text-sm text-white/70">
              We blend precision diagnostics with spa-level hospitality to keep wellness joyful.
            </p>
            <div className="flex gap-3">
              {social.map(({ icon: Icon, href, label }) => (
                <Link
                  key={href}
                  href={href}
                  aria-label={`Visit ${label}`}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white hover:text-[#081a51]"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
                {column.title}
              </p>
              <ul className="mt-4 space-y-3 text-white/80">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="transition hover:text-white">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
          <p>©Copyright 2025 CureNast - All Rights Reserved.</p>
          <p>
            Designed By <span className="font-semibold">Design Kuthir</span> · Powered By Framer
          </p>
        </div>
      </div>
    </footer>
  );
}
