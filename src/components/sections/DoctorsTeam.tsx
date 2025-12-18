"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CheckCircle2 } from "lucide-react";
import { doctors } from "@/lib/data";

export function DoctorsTeam() {
  return (
    <section id="doctors" className="py-24 bg-gradient-to-br from-[#f0f4ff] to-[#e6eeff]">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <Badge variant="blue" className="bg-white">Expert Doctors</Badge>
          <h2 className="text-4xl font-bold font-display text-dark">
             Online Doctor Support, Always Available
          </h2>
        </div>

        {/* Carousel / Grid */}
        <div className="flex flex-wrap md:flex-nowrap gap-6 justify-center items-stretch pb-12">
            {doctors.map((doc, idx) => {
                const isCenter = idx === 2; // Fixed logic to center the 3rd one? Or just idx 2 based on provided data structure
                // Original code used idx === 1. Let's stick to highlighting one in the middle visually. Data has 4 items.
                // 4 items: Center logic is tricky. Let's highlight the 3rd one (index 2) as "Dr. Sarah Johnson" had 2k+ consults.
                return (
                    <motion.div
                        key={doc.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`w-full md:w-[300px] flex-shrink-0 ${isCenter ? 'md:-mt-8' : ''}`}
                    >
                        <Card className={`h-full p-4 flex flex-col items-center text-center group ${isCenter ? 'border-primary shadow-xl ring-2 ring-primary/5' : ''}`}>
                            <div className={`w-full aspect-[4/5] rounded-2xl ${doc.imageColor} mb-6 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300`}>
                                {/* Placeholder Doctor Image */}
                                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/20 to-transparent" />
                                {isCenter && (
                                     <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-primary flex items-center gap-1 shadow-sm">
                                         <CheckCircle2 size={12} /> Top Rated
                                     </div>
                                )}
                            </div>
                            
                            <h3 className="text-xl font-bold text-dark">{doc.name}</h3>
                            <p className="text-primary font-medium mb-4">{doc.role}</p>

                            <div className="mt-auto flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100 text-sm text-gray-text">
                                <CheckCircle2 size={14} className="text-green-500" />
                                {doc.consults} Consults Done
                            </div>
                        </Card>
                    </motion.div>
                )
            })}
        </div>

        <div className="text-center pt-8">
            <Button variant="outline" withArrow>View All Doctors</Button>
        </div>
      </div>
    </section>
  );
}
