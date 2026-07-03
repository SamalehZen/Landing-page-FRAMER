"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Doctors", href: "#doctors" },
    { name: "About", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "py-3 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-sm" 
          : "py-6 bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
           <div className="relative flex items-center justify-center">
              <span className="w-6 h-4 bg-primary rounded-full transform -rotate-12 group-hover:rotate-0 transition-transform"></span>
              <span className="w-6 h-4 bg-accent rounded-full absolute -right-3 top-1 opacity-90 group-hover:translate-x-1 transition-transform"></span>
           </div>
           <span className="font-display text-2xl font-bold tracking-tight transition-colors text-dark">
             CureNast
           </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/50 backdrop-blur-sm px-2 py-1.5 rounded-full border border-white/50 shadow-sm">
            {navLinks.map((link) => (
                <Link 
                    key={link.name} 
                    href={link.href}
                    className="px-5 py-2 text-sm font-medium text-gray-text hover:text-primary hover:bg-white rounded-full transition-all"
                >
                    {link.name}
                </Link>
            ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
             <Button 
                variant={scrolled ? "primary" : "outline"} 
                className={!scrolled ? "border-dark text-dark hover:bg-dark hover:text-white" : ""}
             >
                Book Appointment
             </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg hover:scale-105 transition-transform"
        >
            {isOpen ? <X size={20} /> : <div className="flex flex-col gap-1 items-end pr-0.5"><span className="w-5 h-0.5 bg-white"></span><span className="w-3 h-0.5 bg-white"></span></div>}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div 
         initial={false}
         animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
         className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 absolute w-full top-full left-0 z-40"
      >
          <div className="container-custom py-8 flex flex-col gap-6 items-center text-center">
            {navLinks.map((link) => (
                <Link 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-bold text-dark hover:text-primary"
                >
                    {link.name}
                </Link>
            ))}
            <Button className="w-full max-w-xs mt-4">Book Appointment</Button>
          </div>
      </motion.div>
    </motion.header>
  );
}