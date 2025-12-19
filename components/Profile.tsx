"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const experience = [
    { role: "Freelance Practice", company: "Hanzo Co.", years: "2011 → Now" },
    { role: "Design Lead", company: "Google", years: "2024 → Now" },
    { role: "Senior Designer", company: "PayPal", years: "2019 → 2024" },
    { role: "Product Designer", company: "Meta", years: "2016 → 2019" }
];

export default function Profile() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-black/5 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div className="max-w-xl">
                    <motion.div 
                       className="w-24 h-24 rounded-full overflow-hidden border border-black/10 mb-8 bg-gray-100 relative"
                       initial={{ opacity: 0, scale: 0.8 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                    >
                         <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-white"></div>
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-instrument leading-tight mb-8"
                    >
                        Pushing boundaries <span className="italic text-text-secondary">since 2011</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-text-secondary leading-relaxed mb-10 text-balance"
                    >
                         Based in San Francisco, I help founders and startups build their digital presence. 
                         I believe in design that is honest, functional, and timeless.
                    </motion.p>
                    <div className="flex gap-4">
                        {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                            <a key={i} href="#" className="w-12 h-12 rounded-full bg-bg-primary flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300">
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
                
                <div className="w-full">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-text-secondary text-sm font-medium tracking-wide border-b border-black/10">
                                <th className="pb-4 font-normal pl-2">Role</th>
                                <th className="pb-4 font-normal">Company</th>
                                <th className="pb-4 font-normal text-right pr-2">Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {experience.map((row, i) => (
                                <motion.tr 
                                   key={i}
                                   initial={{ opacity: 0, x: 20 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: i * 0.1 }}
                                   className="group border-b border-black/5 hover:bg-bg-primary transition-colors"
                                >
                                    <td className="py-6 pl-2 font-medium text-lg">{row.role}</td>
                                    <td className="py-6 text-text-secondary">{row.company}</td>
                                    <td className="py-6 pr-2 text-right font-mono text-sm text-text-secondary group-hover:text-black transition-colors">{row.years}</td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
  )
}
