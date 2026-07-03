import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Facebook, Instagram, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-bg-light relative overflow-hidden pt-20 pb-10">
      {/* Watermark */}
      <div className="absolute top-0 left-0 right-0 flex justify-center pointer-events-none select-none overflow-hidden">
        <h1 className="text-[150px] md:text-[250px] font-bold text-primary opacity-[0.03] tracking-tighter leading-none">
          CureNast
        </h1>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 mb-16">
          {/* Brand Column / Card */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-white p-8 rounded-[30px] border border-gray-100 shadow-sm inline-block w-full">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center">
                    <div className="w-4 h-6 rounded-full bg-primary rotate-12 translate-x-1" />
                    <div className="w-4 h-6 rounded-full bg-accent -rotate-12 -translate-x-1 mix-blend-multiply opacity-90" />
                </div>
                <span className="font-display font-bold text-2xl text-dark tracking-tight">CureNast</span>
              </div>
              <p className="text-gray-text mb-8 text-lg leading-relaxed">
                CureNast: Your trusted partner for Any health solutions
              </p>
              <Button variant="outline" className="w-full justify-between group">
                Book Appointment
                <span className="bg-primary text-white rounded-full p-1 group-hover:scale-110 transition-transform">
                  <ArrowUpRight size={16} />
                </span>
              </Button>
            </div>
            
             <div className="flex gap-4">
                {[Instagram, Linkedin, Facebook, Twitter].map((Icon, i) => (
                    <Link key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-colors shadow-sm">
                        <Icon size={18} />
                    </Link>
                ))}
             </div>
          </div>

          {/* Links Grid */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8 pt-4">
             <div>
                <h4 className="font-bold text-lg mb-6">Utility Pages</h4>
                <ul className="space-y-4">
                    {["About", "Service", "Doctor", "Blog", "Contact Us"].map(item => (
                        <li key={item}><Link href="#" className="text-gray-text hover:text-primary transition-colors">{item}</Link></li>
                    ))}
                </ul>
             </div>
             <div>
                <h4 className="font-bold text-lg mb-6">Other Pages</h4>
                <ul className="space-y-4">
                    {["Service Details", "Doctor Details", "Blog Details", "404 Page"].map(item => (
                        <li key={item}><Link href="#" className="text-gray-text hover:text-primary transition-colors">{item}</Link></li>
                    ))}
                </ul>
             </div>
             <div>
                <h4 className="font-bold text-lg mb-6">Getting Care</h4>
                <ul className="space-y-4">
                    {["Dermatology", "Neurology", "Orthopedics", "Pediatrics", "Oncology"].map(item => (
                        <li key={item}><Link href="#" className="text-gray-text hover:text-primary transition-colors">{item}</Link></li>
                    ))}
                </ul>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
            <p>©Copyright 2025 CureNast - All Rights Reserved.</p>
            <p>Designed By Design Kuthir . Powered By Framer</p>
        </div>
      </div>
    </footer>
  );
}
