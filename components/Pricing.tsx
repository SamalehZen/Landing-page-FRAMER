'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'

export default function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true)

  return (
    <section className="py-24 px-6 md:px-12 flex flex-col items-center">
      <div className="text-center mb-12">
        <h2 className="font-headline text-5xl mb-6">Fixed Price, Zero Limits</h2>
        
        {/* Toggle */}
        <div className="inline-flex items-center gap-4 bg-gray-100 p-2 rounded-full mb-8">
           <button 
             onClick={() => setIsMonthly(true)}
             className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${isMonthly ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-black'}`}
           >
             Monthly
           </button>
           <button 
             onClick={() => setIsMonthly(false)}
             className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!isMonthly ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-black'}`}
           >
             Custom
           </button>
        </div>
      </div>

      <div className="w-full max-w-lg bg-bg-dark text-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-orange-500/10 border border-white/10 relative overflow-hidden">
         {/* Background Pulse */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-accent-orange/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
         
         <div className="relative z-10">
            <AnimatePresence mode="wait">
              {isMonthly ? (
                <motion.div
                  key="monthly"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                    <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-5xl md:text-6xl font-headline">$7,500</span>
                        <span className="text-gray-400">/mo</span>
                    </div>
                    <p className="text-gray-400 mb-8 border-b border-white/10 pb-8">Perfect for startups and scaleups needing ongoing design support.</p>
                </motion.div>
              ) : (
                 <motion.div
                  key="custom"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                    <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-5xl md:text-6xl font-headline">Custom</span>
                    </div>
                    <p className="text-gray-400 mb-8 border-b border-white/10 pb-8">For specific projects with defined scope and timeline.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <ul className="space-y-4 mb-10">
               {['Unlimited design requests', 'Fast turnaround (48h)', 'Fixed monthly rate', 'Async communication', 'Flexible scope', 'Pause anytime'].map((feature, i) => (
                 <li key={i} className="flex items-center gap-3 text-gray-300">
                    <span className="bg-accent-orange/20 p-1 rounded-full text-accent-orange shrink-0">
                       <Check className="w-4 h-4" />
                    </span>
                    {feature}
                 </li>
               ))}
            </ul>

            <button className="w-full py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all">
                Get Started
            </button>
         </div>
      </div>
    </section>
  )
}
