"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
       {/* Decorative Arc/Circle - Subtle & Clean */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-gray-100 pointer-events-none z-0 hidden lg:block" />
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full border border-dashed border-gray-100/50 pointer-events-none z-0 hidden lg:block opacity-50" />

       <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge variant="blue" className="glass bg-blue-50/50 text-primary border-blue-100">About CureNast</Badge>
              <h2 className="text-5xl md:text-6xl font-bold font-display text-dark leading-tight tracking-tight">
                  Trusted care, <span className="text-primary italic">naturally</span> delivered.
              </h2>
              <p className="text-gray-500 text-xl leading-relaxed px-4 md:px-12 font-light max-w-2xl mx-auto">
                  At CureNast, we believe in a holistic approach to health. Our team combines modern medical expertise with compassion.
              </p>
              <div className="pt-6">
                  <Button className="font-semibold px-10 h-14 text-lg rounded-full shadow-lg hover:shadow-primary/30 transition-shadow">More About Us</Button>
              </div>
          </div>

          {/* Floating Doctors - Visual representation of 'circular images around content' */}
          <div className="mt-24 relative h-[300px] lg:h-[450px] w-full max-w-6xl mx-auto">
             {/* Left */}
             <motion.div 
               initial={{ opacity: 0, x: -50, scale: 0.8 }}
               whileInView={{ opacity: 1, x: 0, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2, type: "spring" }}
               className="absolute top-0 left-4 lg:left-12 w-24 h-24 lg:w-36 lg:h-36 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gray-100 z-10 hover:scale-110 transition-transform"
             >
                <Image src="/images/dr-samuel-kim.png" alt="Doctor" fill className="object-cover" />
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: -50, scale: 0.8 }}
               whileInView={{ opacity: 1, x: 0, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3, type: "spring" }}
               className="absolute bottom-12 left-20 lg:left-32 w-20 h-20 lg:w-28 lg:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-100 grayscale hover:grayscale-0 transition-all hover:scale-110"
             >
                 <Image src="/images/dr-emily-davis.png" alt="Doctor" fill className="object-cover" />
             </motion.div>

             {/* Right */}
             <motion.div 
               initial={{ opacity: 0, x: 50, scale: 0.8 }}
               whileInView={{ opacity: 1, x: 0, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2, type: "spring" }}
               className="absolute top-0 right-4 lg:right-12 w-24 h-24 lg:w-36 lg:h-36 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gray-100 z-10 hover:scale-110 transition-transform"
             >
                 <Image src="/images/dr-ema-thomson.png" alt="Doctor" fill className="object-cover" />
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: 50, scale: 0.8 }}
               whileInView={{ opacity: 1, x: 0, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3, type: "spring" }}
               className="absolute bottom-12 right-20 lg:right-32 w-20 h-20 lg:w-28 lg:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-100 grayscale hover:grayscale-0 transition-all hover:scale-110"
             >
                 <Image src="/images/dr-samuel-kim.png" alt="Doctor" fill className="object-cover" />
             </motion.div>
             
             {/* Center Bottom Image or Element */}
             <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center"
             >
                 <div className="inline-flex items-center gap-3 bg-white px-8 py-3 rounded-full shadow-xl border border-gray-100 hover:scale-105 transition-transform cursor-pointer">
                    <div className="flex -space-x-2">
                        {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border border-white" />)}
                    </div>
                    <span className="text-sm font-bold text-dark">Trusted by 10k+ Families</span>
                 </div>
             </motion.div>
          </div>
       </div>
    </section>
  );
}
