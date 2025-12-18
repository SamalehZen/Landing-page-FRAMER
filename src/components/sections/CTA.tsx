"use client";

import * as React from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Heart, Eye, Brain, Activity, Hand } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#f0f4ff] to-white overflow-hidden relative">
      <div className="container-custom text-center relative z-10 flex flex-col items-center">
         <Badge variant="blue" className="bg-white mb-6">Get in touch</Badge>
         <h2 className="text-4xl md:text-5xl font-bold font-display text-dark max-w-2xl mb-8">
            Health Support from Expert Doctors
         </h2>
         <Button size="lg" withArrow>Find A Doctor</Button>
         
         {/* Decorative Arc Construction */}
         <div className="mt-20 relative w-full max-w-3xl aspect-[2/1]">
             {/* Concentric Arcs (using borders) */}
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-t-full border border-dashed border-primary/20" />
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-t-full border border-dashed border-primary/30" />
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-t-full border border-dashed border-primary/40" />
             
             {/* Central Image Masked */}
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-gray-200 rounded-t-full overflow-hidden border-4 border-white shadow-2xl z-10">
                 {/* Placeholder for Surgery/Medical Image */}
                 <div className="w-full h-full bg-blue-100 flex items-end justify-center pb-4">
                     <span className="text-primary font-bold opacity-50">Medical Center</span>
                 </div>
             </div>
             
             {/* Floating Icons on Arc */}
             {/* We approximate positions on the middle arc (r=300px) */}
             
             {/* Low Left */}
             <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                className="absolute bottom-10 left-[10%] w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-primary"
            >
                 <Heart size={20} />
             </motion.div>
             
             {/* Mid Left */}
             <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute bottom-40 left-[20%] w-14 h-14 bg-white shadow-lg rounded-full flex items-center justify-center text-accent"
            >
                 <Brain size={24} />
             </motion.div>

             {/* Top Center (Relative to arc) */}
             <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-white shadow-lg rounded-full flex items-center justify-center text-blue-500"
            >
                 <Activity size={28} />
             </motion.div>

             {/* Mid Right */}
             <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute bottom-40 right-[20%] w-14 h-14 bg-white shadow-lg rounded-full flex items-center justify-center text-green-500"
            >
                 <Eye size={24} />
             </motion.div>

             {/* Low Right */}
             <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-10 right-[10%] w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-purple-500"
            >
                 <Hand size={20} />
             </motion.div>
         </div>
      </div>
    </section>
  );
}
