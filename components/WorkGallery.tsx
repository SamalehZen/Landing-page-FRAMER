"use client";
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { col: "md:col-span-1", bg: "bg-[#e8e6e1]" },
  { col: "md:col-span-1", bg: "bg-[#f0f0f0]" },
  { col: "md:col-span-1", bg: "bg-[#e6e6e6]" },
  { col: "md:col-span-2", bg: "bg-[#dcdcd9]" },
  { col: "md:col-span-1", bg: "bg-[#e8e6e1]" },
  { col: "md:col-span-1", bg: "bg-[#f5f5f0]" },
  { col: "md:col-span-2", bg: "bg-[#e1e1de]" },
];

export default function WorkGallery() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-[1400px] mx-auto relative group">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px] md:auto-rows-[450px]">
         {projects.map((project, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               whileHover={{ scale: 0.98 }}
               className={`relative rounded-[2rem] overflow-hidden ${project.bg} ${project.col} group/card cursor-pointer`}
             >
                <div className="absolute inset-0 p-8 flex items-center justify-center">
                    {/* Abstract Content Placeholder */}
                    <div className="w-full h-full relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white rounded-xl shadow-lg shadow-black/5 transform group-hover/card:scale-105 transition-transform duration-500 flex flex-col overflow-hidden border border-black/5">
                            {/* Header */}
                            <div className="h-8 border-b border-black/5 flex items-center px-3 gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            </div>
                            {/* Body */}
                            <div className="flex-1 bg-gray-50 p-4">
                                <div className="w-3/4 h-4 bg-gray-200 rounded mb-2"></div>
                                <div className="w-1/2 h-4 bg-gray-200 rounded mb-4"></div>
                                <div className="flex gap-2">
                                    <div className="w-1/3 h-20 bg-gray-200 rounded"></div>
                                    <div className="w-1/3 h-20 bg-gray-200 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </motion.div>
         ))}
      </div>
      
      {/* Central Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="pointer-events-auto">
             <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl shadow-black/10 border border-black/5 text-sm font-medium hover:text-accent-orange transition-colors"
             >
                 See Recent<br/>Work
             </motion.button>
          </div>
      </div>
    </section>
  )
}
