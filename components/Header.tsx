"use client";
import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 md:px-8 md:py-6 pointer-events-none mix-blend-difference text-white"
    >
        {/* Wrapper to reset blend mode for content visibility if background is light */}
       <div className="flex w-full justify-between items-center mix-blend-normal">
          <Link href="/" className="pointer-events-auto">
              <div className="bg-white text-black px-6 py-2.5 rounded-full font-headline font-bold text-lg shadow-sm border border-black/5 tracking-wide">
                  Hanzo
              </div>
          </Link>
          
          <button className="pointer-events-auto w-12 h-12 bg-white rounded-full flex flex-col items-center justify-center gap-1.5 shadow-sm border border-black/5 hover:scale-105 transition-transform" aria-label="Menu">
              <div className="w-5 h-0.5 bg-black"></div>
              <div className="w-5 h-0.5 bg-black"></div>
          </button>
       </div>
    </motion.header>
  );
}
