"use client";

import { ArrowRight, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-24 pb-8 px-4 bg-[#111111] text-white rounded-t-[3rem] -mt-10 relative z-40">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center min-h-[60vh] justify-between">
        
        <div className="flex flex-col items-center gap-8 mt-20">
             <div className="flex items-center gap-4 text-gray-400 font-serif italic text-lg">
                <span className="h-[1px] w-12 bg-gray-700 block" />
                2 spots available
                <span className="h-[1px] w-12 bg-gray-700 block" />
             </div>

             <h2 className="text-5xl md:text-7xl lg:text-9xl font-medium tracking-tighter text-gray-200">
                Let's <span className="text-gray-500">Connect</span>
             </h2>

             <p className="max-w-lg text-gray-400 text-lg md:text-xl leading-relaxed">
                Feel free to contact me if having any questions.
                I'm available for new projects or just for chatting.
             </p>

             <Link href="#" className="mt-8 group relative inline-flex items-center gap-3 px-8 py-4 bg-[#1F1F1F] rounded-full border border-gray-800 hover:border-gray-600 transition-all hover:bg-white hover:text-black">
                <span className="font-medium">Book a free intro call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </Link>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center pt-32 gap-6 text-sm text-gray-500">
            <div>
                &copy; Hanzo Studio, 2025
            </div>
            
            <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                     <span>@</span>
                </button>
                <button className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                     <Twitter className="w-4 h-4" />
                </button>
            </div>
        </div>

      </div>
    </footer>
  );
}