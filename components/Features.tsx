"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, FileText, Code, Target, MessageSquare, Handshake, Zap, Eye, Users } from 'lucide-react';

const featuresList = [
  { text: "Senior-level quality", icon: FileText },
  { text: "Systems thinking", icon: Layers },
  { text: "Developer-friendly", icon: Code },
  { text: "Clear process", icon: Target },
  { text: "On-brand, every time", icon: MessageSquare },
  { text: "Reliable partner", icon: Handshake },
  { text: "Fast execution", icon: Zap },
  { text: "Thoughtful feedback", icon: Eye },
  { text: "Smooth handoff", icon: Users },
];

export default function Features() {
  return (
    <section className="py-24 px-4 max-w-[1000px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-0">
            {featuresList.map((f, i) => {
                const Icon = f.icon;
                return (
                    <motion.div 
                       key={i}
                       initial={{ opacity: 0, y: 10 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ delay: i * 0.05 }}
                       viewport={{ once: true }}
                       className="flex items-center gap-4 py-6 border-b border-black/5 group hover:border-black/20 transition-colors cursor-default"
                    >
                        <div className="text-text-secondary group-hover:text-accent-orange transition-colors">
                            <Icon size={24} strokeWidth={1.5} />
                        </div>
                        <span className="text-lg font-medium">{f.text}</span>
                    </motion.div>
                )
            })}
        </div>
    </section>
  )
}
