"use client";

import { motion } from "framer-motion";
import { Check, Plus } from "lucide-react";
import { useState } from "react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-24 px-4 bg-[#DFDFD9] text-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-serif italic text-gray-500 text-xl mb-4">Pricing</p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-medium tracking-tight"
          >
            Fixed Price, Zero Limits
          </motion.h2>
        </div>

        {/* Pricing Card */}
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#f4f4f5] rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 md:gap-24 shadow-sm"
        >
            {/* Left Side: Price & Toggle */}
            <div className="flex-1 flex flex-col justify-between space-y-12">
                
                {/* Toggle */}
                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => setIsAnnual(false)}
                        className={`text-xl font-medium transition-colors ${!isAnnual ? 'text-black' : 'text-gray-400'}`}
                    >
                        Monthly
                    </button>
                    
                    <button 
                        onClick={() => setIsAnnual(!isAnnual)}
                        className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 ${!isAnnual ? 'bg-[#FF5A1F]' : 'bg-gray-300'}`}
                    >
                        <div className={`w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${!isAnnual ? 'translate-x-0' : 'translate-x-6'}`} />
                    </button>

                    <button 
                        onClick={() => setIsAnnual(true)}
                        className={`text-xl font-medium transition-colors ${isAnnual ? 'text-black' : 'text-gray-400'}`}
                    >
                        Custom
                    </button>
                </div>

                {/* Price Display */}
                <div>
                     <div className="flex items-baseline">
                        <span className="text-7xl md:text-8xl font-medium tracking-tighter">
                            ${!isAnnual ? '7,500' : 'Custom'}
                        </span>
                        {!isAnnual && <span className="text-3xl md:text-4xl text-gray-400 ml-2">/mo</span>}
                     </div>
                </div>

                {/* Testimonial Quote */}
                <div className="hidden md:block">
                     <p className="text-gray-600 italic font-serif leading-relaxed text-lg">
                        “Astrid's minimalist design approach transformed our brand. The simplicity and clarity she brought to our identity made us stand out in a crowded market.”
                     </p>
                </div>
            </div>

            {/* Right Side: Features */}
            <div className="flex-1">
                <h3 className="text-2xl font-medium mb-8">What's included</h3>
                <div className="space-y-6">
                    {[
                        "Unlimited design requests",
                        "Fast turnaround",
                        "Fixed monthly rate",
                        "Async communication",
                        "Flexible scope",
                        "Pause anytime"
                    ].map((feature, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-4"
                        >
                            <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center shrink-0">
                                <Plus className="w-4 h-4" />
                            </div>
                            <span className="text-lg md:text-xl text-gray-700">{feature}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

        </motion.div>
      </div>
    </section>
  );
}