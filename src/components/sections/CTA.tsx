"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Heart, Eye, Brain, Activity, Hand, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#f0f4ff] to-white overflow-hidden relative">
      <div className="container-custom text-center relative z-10 flex flex-col items-center">
         <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8"
         >
            <Badge variant="blue" className="bg-white shadow-sm mb-6">Get in touch</Badge>
         </motion.div>
         
         <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-dark max-w-4xl mb-12 tracking-tight leading-none"
         >
            Health Support from <br/> <span className="text-primary">Expert Doctors</span>
         </motion.h2>

         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
         >
             <Button size="lg" className="h-16 px-12 text-xl rounded-full shadow-2xl shadow-primary/30 hover:scale-105 transition-transform" withArrow>
                Find A Doctor
             </Button>
         </motion.div>
         
         {/* Decorative Arc Construction */}
         <div className="mt-24 relative w-full max-w-5xl aspect-[2/1]">
             {/* Concentric Arcs (using borders) */}
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-t-full border border-dashed border-primary/10" />
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-t-full border border-dashed border-primary/20" />
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-t-full border border-dashed border-primary/30" />
             
             {/* Central Image Masked */}
             <motion.div 
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-gray-100 rounded-t-full overflow-hidden border-8 border-white shadow-2xl z-10"
             >
                 {/* Placeholder for Surgery/Medical Image */}
                 <div className="w-full h-full bg-gradient-to-t from-blue-100 to-white flex items-end justify-center pb-6">
                     <span className="text-primary font-bold opacity-50 flex items-center gap-2"><Sparkles size={16} /> Medical Center</span>
                 </div>
             </motion.div>
             
             {/* Floating Icons on Arc */}
             
             {/* Low Left */}
             <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0 }}
                className="absolute bottom-12 left-[15%] w-16 h-16 bg-white shadow-xl rounded-full flex items-center justify-center text-primary border border-gray-50"
            >
                 <Heart size={24} fill="currentColor" className="opacity-20 text-red-500 absolute" />
                 <Heart size={24} className="text-red-500 relative z-10" />
             </motion.div>
             
             {/* Mid Left */}
             <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute bottom-48 left-[22%] w-20 h-20 bg-white shadow-xl rounded-full flex items-center justify-center text-accent border border-gray-50"
            >
                 <Brain size={32} />
             </motion.div>

             {/* Top Center (Relative to arc) */}
             <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-white shadow-2xl rounded-full flex items-center justify-center text-blue-500 border-4 border-gray-50"
            >
                 <Activity size={40} />
             </motion.div>

             {/* Mid Right */}
             <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
                className="absolute bottom-48 right-[22%] w-20 h-20 bg-white shadow-xl rounded-full flex items-center justify-center text-green-500 border border-gray-50"
            >
                 <Eye size={32} />
             </motion.div>

             {/* Low Right */}
             <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-12 right-[15%] w-16 h-16 bg-white shadow-xl rounded-full flex items-center justify-center text-purple-500 border border-gray-50"
            >
                 <Hand size={24} />
             </motion.div>
         </div>
      </div>
    </section>
  );
}