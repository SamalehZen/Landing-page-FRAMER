"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Image from 'next/image';

const questions = [
  { q: "What's the difference between a subscription and a custom project?", a: "Subscriptions are best for long-term design needs, allowing unlimited requests with a flat monthly fee. Custom projects are one-off, defined deliverables with a fixed budget and timeline." },
  { q: "How fast is the turnaround?", a: "Most requests are completed within 48-72 hours. Complex tasks may take longer, but we'll always keep you updated." },
  { q: "How many requests can I make?", a: "Unlimited. You can add as many design requests to your queue as you'd like, and they will be delivered one by one." },
  { q: "What types of design do you handle?", a: "We handle everything from UI/UX, mobile apps, web design, design systems, branding, to pitch decks and marketing assets." },
  { q: "What tools do you use?", a: "We primarily work in Figma for design, and can assist with implementation in Framer, Webflow, or custom code." },
  { q: "Can I pause the subscription?", a: "Yes, you can pause or cancel your subscription at any time. There are no contracts or long-term commitments." },
  { q: "Do you offer development too?", a: "Our primary focus is design, but we can recommend trusted development partners or help with handover to your team." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-4 md:px-8 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
        {/* Left Contact Card */}
        <div className="lg:col-span-1">
            <div className="bg-bg-dark text-white p-10 rounded-[2rem] sticky top-32">
                 <div className="w-16 h-16 rounded-full bg-gray-600 mb-6 border-2 border-white/10 overflow-hidden relative">
                    {/* Placeholder Avatar */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-500 to-gray-700"></div>
                 </div>
                 <h3 className="text-2xl font-medium mb-4">Have more questions?</h3>
                 <p className="text-gray-400 mb-8 leading-relaxed">
                     Book a free discovery call to discuss your specific needs.
                 </p>
                 <button className="w-full bg-white text-black py-3 rounded-full font-medium hover:bg-gray-100 transition-colors mb-6">
                     Book a free discovery call
                 </button>
                 <div className="text-center">
                     <a href="mailto:hello@hanzo.studio" className="text-accent-orange border-b border-accent-orange/30 hover:border-accent-orange pb-0.5 transition-colors">
                         or send an email
                     </a>
                 </div>
            </div>
        </div>
        
        {/* Right Accordion */}
        <div className="lg:col-span-2">
            <h2 className="text-5xl font-instrument italic mb-12">Your Questions, Answered</h2>
            <div className="space-y-2">
                {questions.map((item, i) => {
                    const isOpen = openIndex === i;
                    return (
                        <div key={i} className="border-b border-black/10">
                            <button 
                                onClick={() => setOpenIndex(isOpen ? null : i)} 
                                className="w-full flex justify-between items-start text-left py-6 hover:opacity-70 transition-opacity group"
                            >
                                <span className={`text-xl font-medium pr-8 transition-colors ${isOpen ? 'text-black' : 'text-text-secondary group-hover:text-black'}`}>{item.q}</span>
                                <span className="mt-1 shrink-0 text-text-secondary">
                                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }} 
                                        animate={{ height: "auto", opacity: 1 }} 
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-8 text-lg text-text-secondary leading-relaxed max-w-2xl">
                                            {item.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}
