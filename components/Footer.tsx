'use client'
import { ArrowUpRight, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-white pt-24 pb-12 rounded-t-[3rem] mt-12 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 mb-8 bg-white/5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-mono text-gray-300">2 spots available</span>
            </div>
            
            <h2 className="font-instrument text-6xl md:text-8xl italic mb-6 leading-[0.9]">
              Let's <span className="font-sans font-medium text-transparent stroke-text hover:text-white transition-colors duration-500 cursor-pointer" style={{ WebkitTextStroke: '1px white' }}>Connect</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-md">
              Ready to elevate your startup's design? Let's discuss how we can work together to achieve your goals.
            </p>
          </div>
          
          <Link 
            href="mailto:hello@hanzo.design"
            className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:scale-105 transition-transform"
          >
            Book a free intro call
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </Link>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="text-gray-500 font-mono text-sm">© Hanzo Studio, 2025</span>
          
          <div className="flex gap-6">
            <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} />
            <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} />
            <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} />
          </div>
        </div>
      </div>
      
      {/* Abstract Gradient Background */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-accent-orange/10 rounded-full blur-[120px] pointer-events-none"></div>
    </footer>
  )
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <Link href={href} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
      {icon}
    </Link>
  )
}
