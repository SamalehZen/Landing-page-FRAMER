"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Infinity as InfinityIcon } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 relative overflow-hidden">
        
        {/* Status Pill */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-100 flex items-center gap-2.5 mb-10"
        >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-800 tracking-wide">Booking Open — 2 Spots Left</span>
        </motion.div>

        {/* Heading */}
        <div className="flex flex-col items-center text-center gap-6 max-w-6xl z-10">
            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.95] font-semibold text-gray-900 flex flex-wrap justify-center gap-x-4 gap-y-2 items-center"
            >
                <span>Unlimited</span>
                <span className="relative flex items-center">
                    {/* Design Icon - Yellow cards approximation */}
                    <motion.div 
                        initial={{ scale: 0, rotate: -20 }}
                        animate={{ scale: 1, rotate: -6 }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                        className="mx-2 w-16 h-12 md:w-20 md:h-16 bg-yellow-400 rounded-xl border-2 border-white shadow-lg flex items-center justify-center relative z-0 overflow-hidden"
                    >
                         <div className="absolute inset-0 bg-yellow-300/50" />
                         <div className="w-full h-1 bg-white/30 absolute top-3" />
                    </motion.div>
                    Design
                </span>
                <div className="w-full md:w-auto" /> {/* Break on mobile */}
                <span className="text-gray-400 font-serif italic font-light px-2 bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent">for</span>
                <span className="relative flex items-center">
                     {/* Solid Icon - Black rect */}
                     <motion.div 
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "auto", opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className="mx-3 px-4 py-1 bg-black rounded-2xl flex items-center justify-center"
                     >
                        <InfinityIcon className="text-white w-6 h-6 md:w-8 md:h-8" />
                     </motion.div>
                    Solid Startups
                </span>
            </motion.h1>
            
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-500 max-w-lg mt-8 font-medium tracking-tight"
            >
                We help startups and brands create beautiful, functional products — fast and hassle-free.
            </motion.p>
        </div>

        {/* CTA */}
        <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mt-12 bg-black text-white rounded-full pl-8 pr-6 py-4 text-lg font-medium transition-all flex items-center gap-3 group shadow-2xl shadow-black/20 z-20 cursor-pointer"
        >
            Choose your plan
            <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
            </div>
        </motion.button>
        
        {/* Social Proof */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 flex items-center gap-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
        >
            <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces",
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop&crop=faces",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces",
                  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&fit=crop&crop=faces"
                ].map((src, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-gray-100 bg-gray-200 overflow-hidden">
                         {/* eslint-disable-next-line @next/next/no-img-element */}
                         <img src={src} alt="User" className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
            <div className="flex flex-col">
                <div className="flex items-center">
                    {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-500 text-xs">★</span>)}
                </div>
                <div className="text-sm font-semibold text-gray-800">
                    Trusted by Leaders
                </div>
            </div>
        </motion.div>

        {/* Floating Decoration Right */}
        <motion.div 
            className="absolute top-[40%] right-[10%] hidden 2xl:block pointer-events-none"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8, type: "spring" }}
        >
             <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-72 bg-black rounded-2xl p-5 shadow-2xl relative border border-gray-800"
             >
                <div className="absolute -top-3 -right-3 bg-[#FF4F00] text-white text-[10px] uppercase font-bold px-2 py-1 rounded-full shadow-lg tracking-wider">New</div>
                <div className="flex justify-between items-start mb-4">
                     <div>
                        <div className="text-white text-base font-medium">AI Automation</div>
                        <div className="text-gray-400 text-xs">for Productivity</div>
                     </div>
                     <Zap className="text-yellow-400 w-5 h-5 fill-yellow-400" />
                </div>
                
                <div className="h-32 bg-gray-900 rounded-xl overflow-hidden relative border border-gray-800">
                     <div className="absolute inset-0 bg-gradient-to-tr from-[#FF4F00]/20 to-yellow-500/10" />
                     {/* Abstract chart or ui */}
                     <div className="absolute bottom-0 left-0 right-0 h-16 flex items-end justify-between px-4 pb-4 gap-2">
                        {[40, 70, 50, 90, 60, 80].map((h, i) => (
                            <motion.div 
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ duration: 1, delay: 1 + (i * 0.1) }}
                                className="w-full bg-gradient-to-t from-gray-700 to-gray-600 rounded-t-sm" 
                            />
                        ))}
                     </div>
                </div>
             </motion.div>
        </motion.div>

        {/* Floating FAB */}
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 }}
            className="fixed bottom-8 right-8 z-50"
        >
             <button className="bg-white text-black text-sm font-semibold px-4 py-3 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-2 border border-gray-200">
                <span className="text-lg">🎁</span>
                Remix for free
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full">1</div>
             </button>
        </motion.div>

    </section>
  );
}