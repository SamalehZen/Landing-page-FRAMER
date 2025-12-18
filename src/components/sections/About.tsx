"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
       {/* Decorative Arc/Circle */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-dashed border-gray-200 pointer-events-none z-0 hidden lg:block" />

       <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge variant="blue">About CureNast</Badge>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-dark leading-tight">
                  Trusted care, naturally delivered
              </h2>
              <p className="text-gray-text text-lg leading-relaxed px-4 md:px-12">
                  At CureNast, we believe in a holistic approach to health. Our team of dedicated professionals combines modern medical expertise with compassionate care to ensure your well-being.
              </p>
              <div className="pt-4">
                  <Button className="font-semibold px-8 h-12">More About Us</Button>
              </div>
          </div>

          {/* Floating Doctors - Visual representation of 'circular images around content' */}
          {/* We position them absolutely relative to the container on desktop, or grid on mobile */}
          <div className="mt-16 relative h-[300px] lg:h-[400px] w-full max-w-5xl mx-auto">
             {/* Left */}
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.2 }}
               className="absolute top-0 left-4 lg:left-12 w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-100"
             >
                {/* Img placeholder */}
                <div className="w-full h-full bg-blue-100" />
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.3 }}
               className="absolute bottom-12 left-20 lg:left-32 w-20 h-20 lg:w-28 lg:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-100"
             >
                 <div className="w-full h-full bg-indigo-100" />
             </motion.div>

             {/* Right */}
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.2 }}
               className="absolute top-0 right-4 lg:right-12 w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-100"
             >
                 <div className="w-full h-full bg-green-100" />
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.3 }}
               className="absolute bottom-12 right-20 lg:right-32 w-20 h-20 lg:w-28 lg:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-100"
             >
                 <div className="w-full h-full bg-orange-100" />
             </motion.div>
             
             {/* Center Bottom Image or Element */}
             <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center">
                 <div className="inline-block bg-white px-6 py-2 rounded-full shadow-sm text-sm font-medium text-primary border border-gray-100">
                    Trusted by 10k+ Families
                 </div>
             </div>
          </div>
       </div>
    </section>
  );
}
