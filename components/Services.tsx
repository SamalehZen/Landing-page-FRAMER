"use client";

import { motion } from "framer-motion";

// Custom SVG Icons
const Icons = {
  DesignSystems: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  UIUX: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  ),
  Research: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  ),
  Animation: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Prototyping: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  Strategy: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black">
      <path d="M4.5 9.5 2 12l2.5 2.5" />
      <path d="m19.5 9.5 2.5 2.5-2.5 2.5" />
      <path d="M9 4h6" />
      <path d="M9 20h6" />
    </svg>
  ),
};

const pills = [
    { text: "Design systems", icon: Icons.DesignSystems, bg: "bg-[#FF5A1F]", x: -150, y: -40, rotate: -5 },
    { text: "UI/UX", icon: Icons.UIUX, bg: "bg-[#2F3532]", x: -180, y: 40, rotate: 5 },
    { text: "Research", icon: Icons.Research, bg: "bg-[#2563EB]", x: -120, y: 120, rotate: -8 },
    { text: "Animation", icon: Icons.Animation, bg: "bg-[#B2F082]", textCol: "text-black", x: 150, y: -50, rotate: 8 },
    { text: "Prototyping", icon: Icons.Prototyping, bg: "bg-[#F43F5E]", x: 180, y: 30, rotate: -3 },
    { text: "Strategy", icon: Icons.Strategy, bg: "bg-[#FCD34D]", textCol: "text-black", x: 140, y: 100, rotate: 6 },
];

export default function Services() {
  return (
    <section className="py-32 px-4 bg-[#DFDFD9] text-black relative flex flex-col items-center justify-center min-h-[600px] overflow-hidden">
        
        <div className="text-center mb-12">
             <span className="font-serif italic text-gray-500 text-xl">Hello!</span>
        </div>

        <div className="relative max-w-4xl text-center z-10">
            <h2 className="text-4xl md:text-6xl leading-tight font-medium tracking-tight">
                We help startups and enterprise to establish an emotional connection between their products and happy engaged customers
            </h2>
        </div>

        {/* Floating Pills */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            {pills.map((pill, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1, x: pill.x, y: pill.y, rotate: pill.rotate }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1, type: "spring" }}
                    className={`absolute flex items-center gap-3 px-5 py-3 rounded-full shadow-lg ${pill.bg} ${pill.textCol || 'text-white'}`}
                >
                    <div className="w-5 h-5 flex items-center justify-center">
                         <pill.icon />
                    </div>
                    <span className="font-medium whitespace-nowrap">{pill.text}</span>
                </motion.div>
            ))}
        </div>
    </section>
  );
}