'use client'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const projects = [
  { id: 1, title: 'Finance Dashboard', category: 'UI/UX', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', size: 'col-span-1 md:col-span-2' },
  { id: 2, title: 'Mobile App', category: 'Product', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80', size: 'col-span-1' },
  { id: 3, title: 'SaaS Platform', category: 'Web Design', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', size: 'col-span-1' },
  { id: 4, title: 'E-commerce', category: 'Mobile', image: 'https://images.unsplash.com/photo-1555421689-49263376da39?w=800&q=80', size: 'col-span-1 md:col-span-2' },
  { id: 5, title: 'Design System', category: 'System', image: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d0f?w=800&q=80', size: 'col-span-1' },
  { id: 6, title: 'Marketing Site', category: 'Web', image: 'https://images.unsplash.com/photo-1481487484168-9b930d5b7d93?w=800&q=80', size: 'col-span-1 md:col-span-2' },
]

export default function WorkGallery() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white rounded-[3rem] mx-2 md:mx-6 shadow-sm border border-black/5">
      <div className="flex justify-between items-end mb-12">
        <h2 className="font-headline text-4xl md:text-5xl">Selected Work</h2>
        <button className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-black/10 hover:bg-black hover:text-white transition-colors">
          See Recent Work <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`${project.size} aspect-[4/3] group relative rounded-3xl overflow-hidden cursor-pointer`}
          >
            <div className={`absolute inset-0 bg-gray-100 group-hover:scale-105 transition-transform duration-500`}>
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 to-transparent">
              <span className="text-white bg-black/20 backdrop-blur-md self-start px-3 py-1 rounded-full text-sm mb-2 border border-white/20">{project.category}</span>
              <h3 className="text-2xl font-medium text-white">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 flex md:hidden justify-center">
        <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-black/10">
          See Recent Work <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  )
}
