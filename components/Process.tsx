"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check, FileText, Sparkles } from 'lucide-react';

const steps = [
    { title: "Subscribe", desc: "Choose a plan and request as many designs as you need.", icon: Check },
    { title: "Request", desc: "Submit your design requests through our Trello board.", icon: FileText },
    { title: "Receive", desc: "Get your design in a few days. Revise until you're happy.", icon: Sparkles },
];

export default function Process() {
  return (
    <section className="py-32 px-4 md:px-8 max-w-[1400px] mx-auto bg-bg-primary">
       <div className="text-center mb-24 max-w-2xl mx-auto">
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-5xl md:text-6xl font-instrument mb-6 italic"
           >
             Our Process
           </motion.h2>
           <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-secondary"
           >
             Simple, efficient, and transparent. Here is how we work.
           </motion.p>
       </div>
       
       <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Connecting Curves (Desktop Only) */}
           <div className="hidden md:block absolute top-12 left-0 w-full h-24 -z-0 pointer-events-none">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 100">
                    <motion.path 
                       d="M 160,50 C 330,50 330,50 500,50 C 660,50 660,50 830,50"
                       fill="none" 
                       stroke="#e5e5e5" 
                       strokeWidth="2" 
                       strokeDasharray="8 8"
                       initial={{ pathLength: 0 }}
                       whileInView={{ pathLength: 1 }}
                       viewport={{ once: true }}
                       transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                </svg>
           </div>

           {steps.map((step, i) => {
               const Icon = step.icon;
               return (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.2 }}
                     className="bg-white p-10 rounded-[2rem] shadow-sm border border-black/5 flex flex-col items-center text-center relative z-10 group hover:-translate-y-2 transition-transform duration-300"
                   >
                       <div className="w-20 h-20 bg-bg-primary rounded-2xl flex items-center justify-center mb-8 text-text-primary group-hover:scale-110 transition-transform duration-300 shadow-inner">
                           <Icon size={32} strokeWidth={1.5} />
                       </div>
                       <h3 className="text-2xl font-medium mb-4 font-headline">{step.title}</h3>
                       <p className="text-text-secondary leading-relaxed text-balance">{step.desc}</p>
                   </motion.div>
               )
           })}
       </div>
    </section>
  )
}
