"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
  "Unlimited design requests",
  "Fast turnaround (2-3 days)",
  "Fixed monthly rate",
  "Async communication",
  "Flexible scope",
  "Pause anytime"
];

export default function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section className="py-32 px-4 max-w-5xl mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
             <h2 className="text-6xl md:text-7xl font-instrument italic mb-10">Fixed Price, Zero Limits</h2>
             <div className="inline-flex bg-white p-1.5 rounded-full border border-black/5 shadow-sm relative">
                  <div className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-bg-dark rounded-full transition-all duration-300 ${isMonthly ? 'left-1.5' : 'left-[calc(50%+3px)]'}`}></div>
                  <button 
                    onClick={() => setIsMonthly(true)}
                    className={`relative z-10 px-8 py-3 rounded-full text-sm font-medium transition-colors duration-300 w-32 ${isMonthly ? 'text-white' : 'text-text-secondary hover:text-black'}`}
                  >
                      Monthly
                  </button>
                  <button 
                    onClick={() => setIsMonthly(false)}
                    className={`relative z-10 px-8 py-3 rounded-full text-sm font-medium transition-colors duration-300 w-32 ${!isMonthly ? 'text-white' : 'text-text-secondary hover:text-black'}`}
                  >
                      Custom
                  </button>
             </div>
        </motion.div>
        
        <div className="w-full max-w-md px-4">
            <AnimatePresence mode="wait">
                 <motion.div 
                    key={isMonthly ? "monthly" : "custom"}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-black/5 shadow-2xl shadow-black/5 text-center relative overflow-hidden"
                 >
                     <div className="mb-8 relative z-10">
                         <div className="text-sm font-medium text-text-secondary mb-3 uppercase tracking-widest font-mono">
                             {isMonthly ? "Membership" : "Project"}
                         </div>
                         <div className="text-5xl md:text-6xl font-normal tracking-tight font-sans">
                             {isMonthly ? "$7,500" : "Custom"}
                             {isMonthly && <span className="text-xl md:text-2xl text-text-secondary font-normal ml-1">/mo</span>}
                         </div>
                         <p className="text-sm text-text-secondary mt-4 font-medium">
                             {isMonthly ? "Pause or cancel anytime." : "Tailored to your specific needs."}
                         </p>
                     </div>
                     
                     {/* Divider with circle cuts */}
                     <div className="relative h-px w-full bg-gray-100 my-8">
                        <div className="absolute left-[-45px] top-1/2 -translate-y-1/2 w-10 h-10 bg-bg-primary rounded-full"></div>
                        <div className="absolute right-[-45px] top-1/2 -translate-y-1/2 w-10 h-10 bg-bg-primary rounded-full"></div>
                     </div>
                     
                     <div className="space-y-4 text-left mb-10 relative z-10">
                         {features.map((f, i) => (
                             <div key={i} className="flex items-start gap-3">
                                 <div className="w-5 h-5 rounded-full bg-accent-orange/10 flex items-center justify-center text-accent-orange shrink-0 mt-0.5">
                                     <Check size={12} strokeWidth={3} />
                                 </div>
                                 <span className="text-sm font-medium text-text-primary">{f}</span>
                             </div>
                         ))}
                     </div>
                     
                     <button className="w-full bg-bg-dark text-white py-4 rounded-full font-medium text-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 relative z-10 shadow-lg shadow-black/20">
                         {isMonthly ? "Start Subscription" : "Book a Call"}
                     </button>
                 </motion.div>
            </AnimatePresence>
        </div>
    </section>
  )
}
