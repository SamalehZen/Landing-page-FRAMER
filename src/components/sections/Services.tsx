"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Sparkles } from "lucide-react";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="py-32 bg-gradient-to-br from-primary via-[#0f36cb] to-[#0a2590] text-white relative overflow-hidden">
      {/* Abstract Background Noise / Grain could go here */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-6 max-w-2xl">
            <Badge variant="white" className="bg-white/10 text-white border-white/20 backdrop-blur-md shadow-lg">Services</Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight leading-tight">
              Complete Health <br/> Care Solutions
            </h2>
            <p className="text-blue-100/90 text-lg leading-relaxed max-w-lg">
              We offer a wide range of specialized medical services ensuring comprehensive care for you and your family with state-of-the-art technology.
            </p>
          </div>
          <Button variant="white-outline" className="h-14 px-8 text-white border-white/30 hover:bg-white hover:text-primary hover:border-white transition-all duration-300 shadow-xl backdrop-blur-sm" withArrow>
             View All Services
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
            >
                {/* Premium Glass Card */}
                <Card className="h-full group bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:-translate-y-2 hover:bg-white/10 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-900/50 relative overflow-hidden">
                    {/* Inner Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:bg-white group-hover:text-primary transition-all duration-300 shadow-inner border border-white/10">
                            <service.icon size={32} />
                        </div>
                        <h3 className="text-2xl font-bold font-display text-white mb-4 group-hover:translate-x-1 transition-transform">
                            {service.title}
                        </h3>
                        <p className="text-blue-100/70 mb-8 leading-relaxed">
                            {service.desc}
                        </p>
                        <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider group-hover:gap-4 transition-all opacity-80 group-hover:opacity-100">
                            Explore More <ArrowRight size={16} />
                        </a>
                    </div>
                </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
