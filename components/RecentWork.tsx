"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

// Custom Folder Icon
const FolderIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z" />
  </svg>
);

export default function RecentWork() {
  const projects = [
    {
      title: "My Piggy Bank",
      category: "Finance App",
      image: "/assets/IMG_7573.png", // Using uploaded asset as placeholder/actual
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      title: "Hobby Point",
      category: "Community Platform",
      image: "/assets/IMG_7572.png", // Using uploaded asset as placeholder/actual
      colSpan: "col-span-1",
    },
    {
      title: "Wallet",
      category: "Fintech",
      image: "/assets/IMG_7571.png", // Using uploaded asset as placeholder/actual
      colSpan: "col-span-1",
    },
    {
      title: "Sales Funnels",
      category: "Marketing",
      image: "/assets/IMG_7573.png", // Reuse for layout balance
      colSpan: "col-span-1 md:col-span-2",
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#111111] text-white relative overflow-hidden rounded-t-[3rem] -mt-10 z-30">
        <div className="max-w-7xl mx-auto">
            
            {/* Floating Label Central */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex flex-col items-center">
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-black text-white px-4 py-2 rounded-full text-sm font-bold mb-2 shadow-lg flex items-center gap-2"
                >
                    See Recent Work
                </motion.div>
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl relative group cursor-pointer transition-transform hover:scale-110">
                    <FolderIcon className="w-10 h-10 text-black" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
                {/* Custom layout matching screenshot */}
                
                {/* Top Left - Large Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="md:col-span-2 bg-[#1A1A1A] rounded-3xl overflow-hidden relative group h-[400px] md:h-[500px]"
                >
                    <div className="absolute inset-0 p-8 z-10 flex flex-col justify-between">
                         <div>
                             <h3 className="text-3xl font-medium text-gray-200">My Piggy Bank</h3>
                             <div className="mt-4 flex gap-2">
                                 <span className="px-3 py-1 bg-white/10 rounded-full text-sm backdrop-blur-md">Finance</span>
                                 <span className="px-3 py-1 bg-white/10 rounded-full text-sm backdrop-blur-md">App</span>
                             </div>
                         </div>
                         <div className="self-end bg-white/10 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                             <ArrowUpRight className="text-white" />
                         </div>
                    </div>
                    {/* Mockup Image */}
                    <div className="absolute right-0 bottom-0 w-3/4 h-3/4 rounded-tl-3xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:-translate-x-2 group-hover:-translate-y-2">
                         <Image src="/assets/IMG_7573.png" alt="Project 1" fill className="object-cover object-left-top" />
                    </div>
                </motion.div>

                {/* Top Right - Tall Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="md:col-span-1 bg-[#483CB6] rounded-3xl overflow-hidden relative group h-[400px] md:h-[500px]"
                >
                     <div className="absolute inset-0 p-8 z-10 flex flex-col items-center text-center">
                         <h3 className="text-3xl font-medium text-white mb-2">Hobby Point.</h3>
                         <div className="flex gap-2 text-xs text-white/70">
                             <span>Hottest</span>
                             <span>Extramal</span>
                             <span>Home</span>
                         </div>
                     </div>
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-3/4 rounded-t-3xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:translate-y-2">
                         <Image src="/assets/IMG_7571.png" alt="Project 2" fill className="object-cover object-top" />
                     </div>
                </motion.div>

                {/* Bottom Left - Regular Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="md:col-span-1 bg-[#1A1A1A] rounded-3xl overflow-hidden relative group h-[400px]"
                >
                    <div className="absolute inset-0 p-8 z-10">
                        <h3 className="text-2xl font-medium text-gray-200">Wallet</h3>
                        <p className="text-gray-500 mt-2">$11,350.50</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-4/5 flex justify-center">
                         <div className="w-3/4 h-full bg-[#2A2A2A] rounded-t-3xl relative overflow-hidden shadow-xl transition-all duration-500 group-hover:w-4/5">
                            <Image src="/assets/IMG_7575.png" alt="Project 3" fill className="object-cover" />
                         </div>
                    </div>
                </motion.div>

                {/* Bottom Right - Wide Card */}
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.4 }}
                   className="md:col-span-2 bg-[#E6E6E6] text-black rounded-3xl overflow-hidden relative group h-[400px]"
                >
                    <div className="absolute inset-0 p-8 z-10">
                        <h3 className="text-2xl font-medium">Career Lessons</h3>
                        <p className="text-gray-600 mt-2">Masterclasses from pros</p>
                    </div>
                    <div className="absolute right-0 bottom-0 w-2/3 h-4/5 rounded-tl-3xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105">
                         <Image src="/assets/IMG_7578.png" alt="Project 4" fill className="object-cover object-left-top" />
                    </div>
                </motion.div>
                
            </div>
        </div>
    </section>
  );
}