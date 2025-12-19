"use client";
import React from 'react';
import { motion } from 'framer-motion';

const cases = [
    { title: "Fintech Dashboard", tags: ["UI/UX", "SaaS"], color: "bg-orange-100" },
    { title: "Travel App", tags: ["Mobile", "Concept"], color: "bg-blue-100" },
    { title: "E-commerce System", tags: ["Design System", "Web"], color: "bg-purple-100" },
    { title: "Medical Platform", tags: ["Research", "Product"], color: "bg-green-100" }
];

export default function CaseStudies() {
    return (
        <section className="py-32 px-4 max-w-[1400px] mx-auto">
             <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 px-2 gap-6">
                 <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-5xl md:text-7xl font-instrument italic"
                 >
                     Recent Case Studies
                 </motion.h2>
                 <motion.button 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-lg border-b border-black pb-1 hover:text-accent-orange hover:border-accent-orange transition-colors self-start md:self-auto"
                 >
                     View all projects
                 </motion.button>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
                 {cases.map((c, i) => (
                     <motion.div 
                        key={i}
                        className="group cursor-pointer"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                     >
                        <div className={`aspect-[4/3] ${c.color} rounded-[2rem] overflow-hidden mb-6 relative border border-black/5 shadow-sm transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl`}>
                            {/* Abstract Mockup */}
                            <div className="absolute inset-8 bg-white rounded-xl shadow-lg opacity-90 transform group-hover:scale-105 transition-transform duration-500 flex flex-col overflow-hidden">
                                <div className="h-6 bg-gray-50 border-b border-gray-100 flex items-center px-3 gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-300"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-300"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-300"></div>
                                </div>
                                <div className="p-4 grid grid-cols-2 gap-4">
                                     <div className="h-20 bg-gray-100 rounded-lg"></div>
                                     <div className="h-20 bg-gray-100 rounded-lg"></div>
                                     <div className="col-span-2 h-32 bg-gray-50 rounded-lg border border-gray-100"></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-2">
                            <h3 className="text-3xl font-medium font-headline">{c.title}</h3>
                            <div className="flex gap-2">
                                {c.tags.map(t => (
                                    <span key={t} className="px-4 py-1.5 rounded-full border border-black/10 text-sm font-medium bg-white text-text-secondary">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                     </motion.div>
                 ))}
             </div>
        </section>
    )
}
