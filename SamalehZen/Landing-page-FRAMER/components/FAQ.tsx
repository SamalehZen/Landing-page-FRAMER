"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    question: "What's the difference between a subscription and a custom project?",
    answer: "A subscription offers ongoing design support with a fixed monthly fee, perfect for evolving needs. Custom projects are one-off engagements with a defined scope and timeline, ideal for specific deliverables."
  },
  {
    question: "How fast is the turnaround?",
    answer: "Most requests are completed within 2–3 business days. Complex tasks may take longer, but we'll always provide a clear timeline upfront."
  },
  {
    question: "What if I don't like the design?",
    answer: "We offer unlimited revisions! We'll work closely with you to refine the design until you're 100% satisfied with the result."
  },
  {
    question: "Is there any contract?",
    answer: "No long-term contracts. The subscription is month-to-month, and you can pause or cancel anytime."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 bg-[#DFDFD9] text-black">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
            <p className="font-serif italic text-gray-500 text-xl mb-4">FAQ</p>
            <h2 className="text-5xl md:text-6xl font-medium tracking-tight">Your Questions, Answered</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            
            {/* Left Box */}
            <div className="md:col-span-5">
                <div className="bg-[#f4f4f5] p-8 rounded-[2rem] sticky top-24">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-6 bg-gray-300">
                        {/* Avatar */}
                         <Image src="/assets/IMG_7576.png" width={64} height={64} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-2xl font-medium mb-2">Have more questions?</h3>
                    <button className="text-lg underline underline-offset-4 decoration-gray-400 hover:decoration-black transition-all">
                        Book a free discovery call
                    </button>
                </div>
            </div>

            {/* Right Accordion */}
            <div className="md:col-span-7 space-y-4">
                {faqs.map((faq, i) => (
                    <div key={i} className="border-b border-gray-300 pb-4">
                        <button 
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            className="w-full flex items-start justify-between py-4 text-left group"
                        >
                            <span className="text-xl md:text-2xl font-light pr-8 group-hover:text-gray-600 transition-colors">
                                {faq.question}
                            </span>
                            <div className={`mt-1 bg-white/50 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${openIndex === i ? 'rotate-45' : 'rotate-0'}`}>
                                <Plus className="w-4 h-4 text-gray-600" />
                            </div>
                        </button>
                        <AnimatePresence>
                            {openIndex === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <p className="text-gray-600 pb-8 text-lg leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
}