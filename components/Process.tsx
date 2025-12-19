'use client'
import { motion } from 'framer-motion'
import { Check, FileText, Sparkles } from 'lucide-react'

const steps = [
  { id: 1, title: 'Subscribe', desc: 'Choose a plan and request as many designs as you need.', icon: Check },
  { id: 2, title: 'Request', desc: 'Submit your design requests through our easy-to-use board.', icon: FileText },
  { id: 3, title: 'Get Design', desc: 'Receive your high-quality designs within 48 hours on average.', icon: Sparkles },
]

export default function Process() {
  return (
    <section className="py-24 px-6 md:px-12 bg-bg-primary overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono uppercase text-text-secondary tracking-widest mb-2 block">How it works</span>
          <h2 className="text-4xl md:text-5xl font-headline">Our Process, Explained</h2>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          
          {/* Connecting Line (Desktop) */}
          <svg className="absolute top-12 left-0 w-full h-24 -z-10 hidden md:block pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1000 100">
            <motion.path 
              d="M160,50 C350,50 350,20 500,50 S650,80 840,50" 
              fill="none" 
              stroke="#e5e5e5" 
              strokeWidth="2" 
              strokeDasharray="8 8"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>

          {steps.map((step, i) => (
             <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center text-center p-6 bg-transparent"
             >
               <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-black/5 flex items-center justify-center mb-6 relative z-10">
                 <step.icon className="w-8 h-8 text-black" />
                 <div className="absolute -top-2 -right-2 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold font-mono border-2 border-white">
                    {step.id}
                 </div>
               </div>
               <h3 className="text-2xl font-medium mb-3">{step.title}</h3>
               <p className="text-gray-500 leading-relaxed max-w-xs">{step.desc}</p>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
