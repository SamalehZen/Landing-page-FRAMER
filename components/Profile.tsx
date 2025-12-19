'use client'
import { motion } from 'framer-motion'
import { Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'

const experience = [
  { role: 'Freelance Practice', company: 'Hanzo Co.', period: '2011 → Now' },
  { role: 'Design Lead', company: 'Google', period: '2024 → Now' },
  { role: 'Senior Designer', company: 'PayPal', period: '2019 → 2024' },
  { role: 'Product Designer', company: 'Meta', period: '2016 → 2019' },
]

export default function Profile() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white rounded-[3rem] mx-2 md:mx-6 border border-black/5">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: Bio & Photo */}
        <div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-100 mb-8 bg-gray-200 relative"
          >
            <Image 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" 
              alt="Hanzo Profile"
              fill
              className="object-cover"
            />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-headline mb-6">
            Pushing boundaries <span className="font-instrument italic text-gray-400">since 2011.</span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-md">
            I help startups and founders build digital products that look good and work even better. With over a decade of experience, I bring a unique blend of strategic thinking and craft execution.
          </p>
          
          <div className="flex gap-4">
             <a href="#" className="p-3 bg-gray-50 rounded-full hover:bg-black hover:text-white transition-colors"><Instagram className="w-5 h-5"/></a>
             <a href="#" className="p-3 bg-gray-50 rounded-full hover:bg-black hover:text-white transition-colors"><Linkedin className="w-5 h-5"/></a>
             <a href="#" className="p-3 bg-gray-50 rounded-full hover:bg-black hover:text-white transition-colors"><Twitter className="w-5 h-5"/></a>
          </div>
        </div>

        {/* Right Column: Experience Table */}
        <div className="bg-gray-50 p-6 md:p-10 rounded-3xl">
           <h3 className="text-sm font-mono uppercase tracking-wider text-gray-400 mb-8">Experience</h3>
           
           <div className="space-y-6">
             {experience.map((job, i) => (
               <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-gray-200 last:border-0"
               >
                 <div>
                    <div className="font-medium text-lg">{job.role}</div>
                    <div className="text-gray-500">{job.company}</div>
                 </div>
                 <div className="text-sm font-mono text-gray-400 mt-2 md:mt-0">{job.period}</div>
               </motion.div>
             ))}
           </div>
        </div>

      </div>
    </section>
  )
}
