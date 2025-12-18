"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Facebook } from "lucide-react";
import Image from "next/image";

function FloatingCell({ className, color }: { className?: string; color: "orange" | "blue" }) {
  return (
    <motion.div
      animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    >
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl">
            <circle cx="50" cy="50" r="45" fill={color === "orange" ? "#ff623a" : "#1344fe"} />
            {/* Simple spikes/texture details */}
            <circle cx="30" cy="30" r="5" fill="rgba(255,255,255,0.2)" />
            <circle cx="70" cy="60" r="8" fill="rgba(255,255,255,0.2)" />
        </svg>
    </motion.div>
  );
}

function DoctorCard({ name, role, className }: { name: string; role: string; className?: string }) {
  return (
    <motion.div 
        whileHover={{ scale: 1.05 }}
        className={`bg-white p-3 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-3 max-w-[240px] ${className}`}
    >
      <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
         {/* Placeholder avatar */}
         <div className="absolute inset-0 bg-primary/10"></div> 
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-sm text-dark leading-tight">{name}</h4>
        <p className="text-xs text-gray-400">{role}</p>
      </div>
      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-primary">
         <Facebook size={12} />
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#f4f4f4] to-white flex items-center justify-center">
      
      {/* Background Decor */}
      <FloatingCell color="orange" className="absolute top-24 left-[10%] w-24 h-24 hidden lg:block z-0 opacity-80" />
      <FloatingCell color="blue" className="absolute bottom-32 right-[10%] w-32 h-32 hidden lg:block z-0 opacity-80" />

      <div className="container-custom relative z-10 grid lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Visuals - Desktop */}
        <div className="hidden lg:flex col-span-3 flex-col items-start gap-8 relative h-full justify-center">
           <DoctorCard name="Dr. Samuel Kim" role="Dermatologist" className="mb-20" />
           {/* Maybe a large doctor image cutout here if design requires, inferred from 'Grande photo' */}
           <div className="relative w-48 h-64 rounded-t-full rounded-b-3xl overflow-hidden bg-blue-100 mt-auto ml-8 shadow-xl">
               {/* Placeholder for doctor cutout */}
                <div className="absolute bottom-0 w-full h-[90%] bg-primary/20"></div>
           </div>
        </div>

        {/* Center Content */}
        <div className="col-span-12 lg:col-span-6 text-center flex flex-col items-center">
           {/* Social Proof Badge */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="inline-flex items-center gap-3 bg-white px-2 py-2 rounded-full shadow-sm mb-8"
           >
              <div className="flex -space-x-2">
                 {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 relative overflow-hidden">
                       <div className="absolute inset-0 bg-gray-300"></div>
                    </div>
                 ))}
                 <div className="w-8 h-8 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center text-xs font-bold font-sans">
                    +
                 </div>
              </div>
              <span className="font-medium text-sm text-dark pr-2">20,000+ happy patients served!</span>
           </motion.div>

           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
             className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-dark leading-[1.15] mb-8"
           >
             Wellness starts with care that really listens.
           </motion.h1>

           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4 }}
             className="flex flex-col sm:flex-row items-center gap-4"
           >
              <Button variant="outline" className="h-14 px-8 border-dark text-dark font-medium rounded-full hover:bg-dark hover:text-white transition-colors">
                 Book an Appointment
              </Button>
              <button className="h-14 w-14 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                 <ArrowUpRight size={24} />
              </button>
           </motion.div>
        </div>

        {/* Right Visuals - Desktop */}
        <div className="hidden lg:flex col-span-3 flex-col items-end justify-center gap-4 relative h-full">
            <DoctorCard name="Dr. Samuel Kim" role="Cardiology" />
            <DoctorCard name="Dr. Ema Thomson" role="Dermatologist" className="-translate-x-4" />
            <DoctorCard name="Dr. Emily Davis" role="Endocrinologist" className="-translate-x-8" />
        </div>
      </div>
    </section>
  );
}
