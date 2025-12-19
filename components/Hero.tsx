'use client'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 flex flex-col items-center justify-center min-h-[90vh]">
      
      {/* Booking Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-black/5 shadow-sm"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-orange opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-orange"></span>
        </span>
        <span className="text-sm font-medium text-text-secondary tracking-wide uppercase text-[11px]">Booking Open — 2 Spots Left</span>
      </motion.div>

      {/* Main Title */}
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-6xl md:text-[5.5rem] lg:text-[7rem] leading-[1.1] md:leading-[0.95] font-instrument text-center max-w-6xl text-text-primary tracking-tight"
      >
        <span className="block">Unlimited Design for</span>
        <span className="block md:inline-flex items-center justify-center gap-4 flex-wrap">
          <span className="inline-block w-24 h-12 md:w-32 md:h-16 bg-gradient-to-r from-orange-300 to-red-300 rounded-full rotate-[-6deg] border border-black/5 shadow-inner"></span>
          <span className="italic font-normal">Solid</span>
          <span className="inline-block w-24 h-12 md:w-32 md:h-16 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full rotate-[4deg] border border-black/5 shadow-inner"></span>
          <span>Startups</span>
        </span>
      </motion.h1>

      {/* CTA Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12"
      >
        <button className="group relative px-8 py-4 bg-bg-dark text-white rounded-full text-lg font-medium flex items-center gap-3 hover:scale-105 transition-transform shadow-lg shadow-black/20">
          Choose your plan
          <span className="bg-white/20 rounded-full p-1">
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </button>
      </motion.div>

      {/* Social Proof / Trusted By */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-20 flex flex-col items-center gap-4"
      >
        <p className="text-sm text-text-secondary font-mono uppercase tracking-wider">Trusted by Leaders from</p>
        <div className="flex items-center -space-x-4">
            {[
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
              "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
              "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop"
            ].map((src, i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-bg-primary bg-gray-200 flex items-center justify-center shadow-sm overflow-hidden relative">
                    <Image 
                      src={src} 
                      alt={`Leader ${i + 1}`} 
                      fill 
                      sizes="48px"
                      className="object-cover"
                    />
                </div>
            ))}
        </div>
      </motion.div>

    </section>
  )
}
