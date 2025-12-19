"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 px-4 bg-[#DFDFD9] text-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-serif italic text-gray-500 text-xl mb-4">Our Projects</p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-medium tracking-tight"
          >
            Pushing boundaries <span className="text-gray-400">since 2011</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Card */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[500px] w-full bg-black rounded-[2rem] overflow-hidden"
            >
                {/* Placeholder for Joris - using one of the uploaded assets or a generic one if not available */}
                <Image 
                    src="/assets/IMG_7576.png" 
                    alt="Joris van Dijk" 
                    fill 
                    className="object-cover opacity-80"
                />
            </motion.div>

            {/* Content */}
            <div className="space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <p className="text-xl md:text-2xl leading-relaxed text-gray-800">
                        Joris van Dijk is a Dutch designer known for his minimalist, expressive digital work. He helps startups and studios create clean interfaces and strong branding. Based in Utrecht, he blends function with emotion — and often spends his free time cycling or exploring generative art.
                    </p>
                </motion.div>

                {/* Resume Table */}
                <div className="space-y-6">
                    {[
                        { role: "Freelance Practice", company: "Hanzo Co.", period: "2011 \u2192 Now" },
                        { role: "Design Lead", company: "Google", period: "2024 \u2192 Now" },
                        { role: "Senior Designer", company: "PayPal", period: "2019 \u2192 2024" },
                        { role: "Product Designer", company: "Meta", period: "2016 \u2192 2019" },
                    ].map((job, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + (i * 0.1) }}
                            className="flex justify-between items-center border-b border-gray-300 pb-4 text-sm md:text-base group hover:border-black transition-colors"
                        >
                            <span className="w-1/3 text-gray-900 font-medium">{job.role}</span>
                            <span className="w-1/3 text-gray-500">{job.company}</span>
                            <span className="w-1/3 text-right text-gray-900 tabular-nums">{job.period}</span>
                        </motion.div>
                    ))}
                </div>

                <div className="pt-8">
                     <div>
                        <h4 className="font-semibold text-lg">Joris van Dijk</h4>
                        <p className="text-gray-500 text-sm">Hanzo Studio, Founder</p>
                     </div>
                     <div className="flex gap-4 mt-4 text-gray-400">
                        {/* Social Icons Placeholders */}
                        <div className="w-6 h-6 border border-gray-400 rounded flex items-center justify-center">In</div>
                        <div className="w-6 h-6 border border-gray-400 rounded flex items-center justify-center">X</div>
                     </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}