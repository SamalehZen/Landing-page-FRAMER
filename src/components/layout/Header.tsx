"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigationLinks } from "@/lib/data";
import { buttonClasses } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

function Logo() {
  return (
    <Link href="#hero" className="flex items-center gap-3 text-lg font-semibold text-[var(--text-dark)]">
      <span className="relative flex h-10 w-10 items-center justify-center">
        <span className="absolute h-8 w-4 rounded-full bg-[var(--primary-blue)] blur-[0.5px]" />
        <span className="absolute h-8 w-4 translate-x-3 rounded-full bg-[var(--accent-orange)] blur-[0.5px]" />
      </span>
      CureNast
    </Link>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        isScrolled ? "backdrop-blur border-b border-white/40 bg-white/90 shadow-lg" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Logo />
        <nav className="hidden items-center gap-6 lg:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[var(--text-gray)] transition hover:text-[var(--primary-blue)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link href="#contact" className={buttonClasses("outline")}>
            Book Appointment
          </Link>
          <button
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-blue)] text-white lg:hidden"
            aria-label="Open menu"
          >
            <span className="relative h-4 w-4">
              <span className="absolute inset-x-0 top-0 h-0.5 rounded-full bg-white" />
              <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-white" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
