"use client";
import React from 'react';
import { motion } from 'framer-motion';

const badges = [
    { text: "Design systems", x: "-18vw", y: "-4rem", rotate: -6 },
    { text: "UI/UX", x: "-22vw", y: "3rem", rotate: 3 },
    { text: "Research", x: "-15vw", y: "10rem", rotate: -8 },
    { text: "Animation", x: "18vw", y: "-5rem", rotate: 5 },
    { text: "Prototyping", x: "22vw", y: "2rem", rotate: -4 },
    { text: "Strategy", x: "16vw", y: "11rem", rotate: 7 },
];

export default function About() {
  return (
    <section className="py-40 px-4 flex flex-col items-center justify-center min-h-[80vh] relative overflow-hidden bg-bg-primary">
       {/* Badges Container - visible on large screens, simplified for mobile */}
       <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
             {badges.map((b, i) => (
                 <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
                    whileInView={{ opacity: 1, scale: 1, x: b.x, y: b.y, rotate: b.rotate }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        delay: 0.2 + (i * 0.1) 
                    }}
                    className="absolute hidden md:block bg-white px-6 py-3 rounded-full shadow-xl shadow-black/5 border border-black/5 text-sm font-medium text-text-secondary whitespace-nowrap will-change-transform"
                 >
                     {b.text}
                 </motion.div>
             ))}
       </div>

       <div className="relative z-10 text-center max-w-2xl px-4">
           <motion.h2 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="text-7xl md:text-9xl font-instrument italic mb-10 text-text-primary"
           >
             Hello!
           </motion.h2>
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2, duration: 0.8 }}
             className="text-xl md:text-3xl leading-relaxed text-text-secondary font-sans font-light"
           >
             We are a design studio that helps startups launch and grow their products. We focus on clean, functional, and user-centric design.
           </motion.p>
           
           {/* Mobile badges fallback */}
           <div className="md:hidden flex flex-wrap justify-center gap-3 mt-12">
                {badges.map((b, i) => (
                    <span key={i} className="bg-white px-4 py-2 rounded-full text-sm shadow-sm border border-black/5 text-text-secondary">
                        {b.text}
                    </span>
                ))}
           </div>
       </div>
    </section>
  )
}
