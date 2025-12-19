"use client";
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { 
      quote: "Working with Hanzo has been a game-changer for our startup. They understood our vision perfectly.", 
      name: "Marcus Eriksson", 
      role: "CEO at Nordic",
      color: "bg-blue-100"
  },
  { 
      quote: "The quality of work is outstanding, and the turnaround time is incredibly fast. Highly recommended.", 
      name: "Olivia Rhye", 
      role: "Product Manager at Circool",
      color: "bg-pink-100"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
                <motion.div 
                   key={i} 
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.2 }}
                   whileHover={{ y: -5 }}
                   className="bg-white p-10 md:p-12 rounded-[2rem] border border-black/5 shadow-sm flex flex-col justify-between h-full"
                >
                    <p className="text-2xl md:text-3xl font-instrument italic leading-relaxed mb-10 text-text-primary">
                        "{t.quote}"
                    </p>
                    <div className="flex items-center gap-4 border-t border-black/5 pt-6 mt-auto">
                        <div className={`w-12 h-12 rounded-full ${t.color} border border-black/5 shadow-inner`}></div>
                        <div>
                            <div className="font-medium text-text-primary">{t.name}</div>
                            <div className="text-sm text-text-secondary">{t.role}</div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
  )
}
