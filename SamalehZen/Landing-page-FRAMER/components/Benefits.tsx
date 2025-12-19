"use client";

import { motion } from "framer-motion";
import { 
  Sparkles, 
  Code2, 
  Lightbulb, 
  Zap, 
  RefreshCcw, 
  Monitor, 
  Target, 
  ShieldCheck, 
  MessageSquare,
  Box
} from "lucide-react";

export default function Benefits() {
  const benefits = [
    { text: "High-level quality", icon: Sparkles },
    { text: "Developer-friendly", icon: Code2 },
    { text: "On-brand, every time", icon: Lightbulb },
    { text: "Fast execution", icon: Zap },
    { text: "Smooth handoff", icon: RefreshCcw },
    { text: "Systems thinking", icon: Monitor },
    { text: "Clear process", icon: Target },
    { text: "Reliable partner", icon: ShieldCheck },
    { text: "Thoughtful feedback", icon: Box },
  ];

  return (
    <section className="py-24 px-4 bg-[#DFDFD9] text-black border-t border-gray-300">
      <div className="max-w-5xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {benefits.map((item, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-4 py-4 border-b border-gray-300/50 group hover:pl-2 transition-all duration-300"
                >
                    <item.icon strokeWidth={1.5} className="w-6 h-6 text-gray-700 group-hover:text-black transition-colors" />
                    <span className="text-xl font-light text-gray-600 group-hover:text-black transition-colors">
                        {item.text}
                    </span>
                </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
}