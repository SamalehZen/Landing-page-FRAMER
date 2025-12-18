"use client";

import * as React from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { cn } from "@/lib/utils";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="flex items-center">
        <div className="w-4 h-6 rounded-full bg-primary rotate-12 translate-x-1" />
        <div className="w-4 h-6 rounded-full bg-accent -rotate-12 -translate-x-1 mix-blend-multiply opacity-90" />
      </div>
      <span className="font-display font-bold text-2xl text-dark tracking-tight">CureNast</span>
    </Link>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > 50 && latest > previous) {
        // Scrolling down
        setIsScrolled(true);
    } else if (latest < 50) {
        // At top
        setIsScrolled(false);
    }
  });

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Doctors", href: "#doctors" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-dark font-medium hover:text-primary transition-colors text-sm"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA + Menu */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden xl:flex">Contact Us</Button>
          <Button size="sm" withArrow>Book Now</Button>
          
          <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors ml-2">
            <Menu size={20} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
            className="lg:hidden w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 lg:hidden border-t border-gray-100"
            >
                {navLinks.map((link) => (
                    <Link
                    key={link.name}
                    href={link.href}
                    className="text-dark font-medium text-lg py-2 border-b border-gray-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                    >
                    {link.name}
                    </Link>
                ))}
                <div className="flex flex-col gap-3 mt-4">
                     <Button className="w-full justify-center">Book Appointment</Button>
                </div>
            </motion.div>
        )}
      </div>
    </motion.header>
  );
}
