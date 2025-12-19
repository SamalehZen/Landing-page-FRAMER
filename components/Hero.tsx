"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 md:px-8 max-w-[1400px] mx-auto flex flex-col items-center text-center">
      {/* Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2.5 bg-white px-5 py-2.5 rounded-full border border-black/5 shadow-sm mb-8 hover:scale-105 transition-transform cursor-default"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-orange opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-orange"></span>
        </span>
        <span className="text-sm font-medium text-text-secondary font-sans tracking-tight">Booking Open — 2 Spots Left</span>
      </motion.div>

      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="mb-10 max-w-6xl"
      >
        <h1 className="text-6xl md:text-8xl lg:text-[7rem] leading-[1.1] md:leading-[1.1] font-normal tracking-tight text-text-primary font-instrument">
          Unlimited Design for{' '}
          <span className="inline-flex w-[1.2em] h-[0.8em] align-middle mx-2 rounded-full bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 border border-black/5 rotate-[-5deg]"></span>
          <br className="hidden md:block" />
          Solid{' '}
           <span className="inline-flex w-[0.8em] h-[0.8em] align-middle mx-2 rounded-lg bg-gradient-to-br from-orange-200 via-yellow-200 to-lime-200 border border-black/5 rotate-[10deg]"></span>
           Startups.
        </h1>
      </motion.div>

      {/* CTA Button */}
      <motion.button
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.3, duration: 0.5 }}
         className="bg-bg-dark text-white text-lg px-8 py-4 rounded-full font-medium hover:scale-105 active:scale-95 transition-all duration-300 group shadow-lg shadow-black/10"
      >
         Choose your plan <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
      </motion.button>

      {/* Trusted by Leaders */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-16 flex flex-col items-center gap-4"
      >
         <div className="flex -space-x-3 hover:space-x-1 transition-all duration-300">
             {[
               "bg-blue-300", "bg-green-300", "bg-yellow-300", "bg-red-300", "bg-purple-300"
             ].map((color, i) => (
                 <div key={i} className={`relative w-12 h-12 rounded-full border-[3px] border-bg-primary ${color} flex items-center justify-center text-[10px] overflow-hidden shadow-sm`}>
                    <div className="opacity-20 w-full h-full mix-blend-multiply bg-noise"></div>
                 </div>
             ))}
         </div>
         <p className="text-sm text-text-secondary font-instrument italic text-lg opacity-80">Trusted by Leaders</p>
      </motion.div>
    </section>
  )
}
