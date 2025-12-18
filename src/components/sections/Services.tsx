"use client";

import * as React from "react";
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowUpRight, ArrowRight, Brain, Heart, Eye } from "lucide-react";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#1344fe] text-white overflow-hidden font-display">
      <div className="container-custom">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-6 max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold font-display text-white tracking-tight leading-[1.1]">
              Complete Health <br/> Care Solutions.
            </h2>
            <p className="text-white/80 text-lg font-light leading-relaxed max-w-lg font-sans">
              Modern medical services designed around your health, comfort, and recovery. Experience expert care from a team that puts you first.
            </p>
          </div>
          
          {/* Top Actions */}
          <div className="flex items-center gap-4">
             <button className="h-14 px-8 bg-white text-dark font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-sm text-lg">
                View All Services
             </button>
             <button className="h-14 w-14 bg-white text-dark rounded-xl flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm">
                <ArrowUpRight size={24} />
             </button>
          </div>
        </div>

        {/* Services Grid - Horizontal Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.slice(0, 4).map((service, idx) => ( // Showing top 4 for better layout match
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
            >
                <div className="h-full bg-white rounded-[32px] overflow-hidden flex flex-row group hover:shadow-2xl transition-all duration-300 min-h-[320px]">
                    {/* Left: Graphic Area */}
                    <div className="w-[40%] bg-blue-100/50 relative flex items-center justify-center p-6 group-hover:bg-blue-100 transition-colors">
                        <div className="w-24 h-24 rounded-full bg-[#1344fe] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                             <service.icon size={42} strokeWidth={1.5} />
                        </div>
                    </div>

                    {/* Right: Content Area */}
                    <div className="w-[60%] p-8 flex flex-col justify-between bg-white relative">
                        <div>
                            <h3 className="text-2xl font-bold text-dark mb-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 font-sans leading-relaxed text-sm lg:text-base">
                                Discover tailored {service.title.toLowerCase()} services designed for you, ensuring personalized care and effective recovery.
                            </p>
                        </div>
                        
                        <div className="mt-8 pt-4">
                            <button className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-gray-200 text-dark font-medium hover:border-[#1344fe] transition-colors group/btn bg-white">
                                Explore More 
                                <span className="w-8 h-8 rounded-full bg-[#1344fe] text-white flex items-center justify-center -mr-2 group-hover/btn:scale-110 transition-transform">
                                    <ArrowUpRight size={16} />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
