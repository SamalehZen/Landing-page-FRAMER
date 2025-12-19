"use client";
import React from 'react';
import { MoveUpRight, AtSign, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-white pt-32 pb-10 px-4 md:px-8 rounded-t-[3rem] -mt-10 relative z-20">
       <div className="max-w-[1400px] mx-auto text-center flex flex-col items-center">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-block px-4 py-1.5 rounded-full border border-white/10 text-sm italic font-instrument text-gray-300 mb-10"
           >
               <span className="w-2 h-2 rounded-full bg-accent-orange inline-block mr-2 animate-pulse"></span>
               2 spots available
           </motion.div>
           
           <motion.h2 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="text-7xl md:text-[10rem] leading-[0.9] font-instrument mb-12 tracking-tight"
           >
               Let's <span style={{color: 'transparent', WebkitTextStroke: '1px white'}}>Connect</span>
           </motion.h2>
           
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="max-w-xl text-gray-400 text-lg md:text-2xl mb-16 text-balance leading-relaxed font-sans font-light"
           >
               Ready to take your product to the next level? No commitment, just a friendly chat.
           </motion.p>
           
           <motion.button 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full text-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 mb-32 group"
           >
               Book a free intro call <MoveUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
           </motion.button>
           
           <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-10 text-sm text-gray-500 gap-6 font-mono">
               <div>&copy; Hanzo Studio, 2025</div>
               <div className="flex gap-6">
                   <a href="#" className="hover:text-white transition-colors flex items-center gap-2"><AtSign size={18} /> Email</a>
                   <a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Twitter size={18} /> Twitter</a>
               </div>
           </div>
       </div>
    </footer>
  )
}
