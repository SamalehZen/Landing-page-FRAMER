'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 md:p-8 flex justify-between items-start pointer-events-none">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto"
      >
        <Link href="/" className="group block">
          <div className="bg-white px-6 py-2.5 rounded-full shadow-sm border border-black/5 flex items-center gap-2 hover:shadow-md transition-all">
            <span className="font-headline text-xl tracking-tight text-text-primary group-hover:text-accent-orange transition-colors">Hanzo</span>
          </div>
        </Link>
      </motion.div>
      
      <motion.button 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto w-12 h-12 bg-white rounded-full flex flex-col justify-center items-center gap-1.5 shadow-sm border border-black/5 hover:scale-105 active:scale-95 transition-all"
        aria-label="Menu"
      >
        <div className="w-5 h-0.5 bg-black rounded-full"></div>
        <div className="w-5 h-0.5 bg-black rounded-full"></div>
      </motion.button>
    </header>
  )
}
