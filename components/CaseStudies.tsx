'use client'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const studies = [
  { title: 'Fintech Mobile App', tags: ['App', 'UI/UX'], image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=800&q=80', color: 'bg-blue-100' },
  { title: 'SaaS Dashboard', tags: ['Web', 'Product'], image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', color: 'bg-gray-100' },
  { title: 'Health & Wellness', tags: ['Mobile', 'Branding'], image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80', color: 'bg-green-100' },
  { title: 'Crypto Wallet', tags: ['App', 'System'], image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&q=80', color: 'bg-purple-100' },
]

export default function CaseStudies() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="flex justify-between items-center mb-16">
         <h2 className="font-headline text-4xl">Recent Case Studies</h2>
         <a href="#" className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-accent-orange transition-colors">
            View All Projects <ArrowUpRight className="w-4 h-4" />
         </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {studies.map((study, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group"
          >
            <div className={`aspect-[4/3] rounded-3xl ${study.color} mb-6 overflow-hidden relative shadow-sm group-hover:-translate-y-2 transition-transform duration-500`}>
               {/* Mockup Placeholder */}
               <div className="absolute inset-12 top-12 bottom-0 bg-white rounded-t-2xl shadow-lg opacity-80 group-hover:opacity-100 transition-opacity overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
               </div>
            </div>
            
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-medium">{study.title}</h3>
              <div className="flex gap-2">
                {study.tags.map(tag => (
                   <span key={tag} className="px-3 py-1 rounded-full border border-black/10 text-xs font-medium uppercase tracking-wider">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
