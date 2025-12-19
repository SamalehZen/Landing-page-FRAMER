'use client'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import Image from 'next/image'

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white rounded-[3rem] mx-2 md:mx-6 my-12 border border-black/5">
      <div className="max-w-4xl mx-auto text-center">
        <Quote className="w-12 h-12 mx-auto text-accent-orange mb-8 opacity-20" />
        
        <motion.figure 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <blockquote className="text-3xl md:text-5xl font-instrument italic leading-snug text-text-primary mb-8">
            "We were blown away by the speed and quality. It felt like having a senior designer on our team instantly."
          </blockquote>
          <figcaption className="flex items-center justify-center gap-4">
             <div className="w-12 h-12 rounded-full bg-gray-200 relative overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" 
                  alt="Sarah Jenkins" 
                  fill 
                  className="object-cover"
                />
             </div>
             <div className="text-left">
                <div className="font-bold">Sarah Jenkins</div>
                <div className="text-sm text-gray-500">CEO at TechFlow</div>
             </div>
          </figcaption>
        </motion.figure>

        <div className="opacity-20 hover:opacity-100 transition-opacity">
            <div className="flex justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-black"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
        </div>
      </div>
    </section>
  )
}
