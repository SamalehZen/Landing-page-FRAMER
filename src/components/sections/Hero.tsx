"use client";

import * as React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";

function FloatingCell({ className, color, mouseX, mouseY, depth = 1 }: { className?: string; color: "orange" | "blue"; mouseX: any; mouseY: any; depth?: number }) {
  const imageSrc = color === "orange" ? "/images/floating-cell-orange.png" : "/images/floating-cell-blue.png";
  
  // Create parallax effect based on mouse position
  const x = useTransform(mouseX, [0, 1], [-20 * depth, 20 * depth]);
  const y = useTransform(mouseY, [0, 1], [-20 * depth, 20 * depth]);
  
  // Smooth out the movement
  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      animate={{ 
          rotate: [0, 5, 0, -5, 0],
          translateY: [0, -10, 0, -5, 0] 
      }}
      transition={{ 
          rotate: { duration: 8, repeat: Infinity, ease: "linear" },
          translateY: { duration: 4, repeat: Infinity, ease: "easeInOut" }
      }}
      className={className}
    >
        <div className="relative w-full h-full drop-shadow-2xl filter brightness-110 contrast-125">
             <Image 
                src={imageSrc} 
                alt="Floating Cell" 
                fill 
                className="object-contain"
                sizes="(max-width: 768px) 100px, 200px"
             />
        </div>
    </motion.div>
  );
}

function DoctorCard({ name, role, className, image, delay = 0 }: { name: string; role: string; className?: string; image?: string; delay?: number }) {
  return (
    <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay, duration: 0.5, type: "spring" }}
        whileHover={{ scale: 1.05, y: -5 }}
        className={`glass-card p-3 rounded-2xl flex items-center gap-3 max-w-[260px] cursor-pointer group ${className}`}
    >
      <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden relative ring-2 ring-white shadow-md">
         {image ? (
            <Image src={image} alt={name} fill className="object-cover" />
         ) : (
            <div className="absolute inset-0 bg-primary/10"></div>
         )}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-sm text-dark leading-tight group-hover:text-primary transition-colors truncate">{name}</h4>
        <p className="text-xs text-gray-500 font-medium">{role}</p>
      </div>
      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
         <ArrowUpRight size={14} />
      </div>
    </motion.div>
  );
}

export function Hero() {
  const containerRef = React.useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Calculate normalized mouse position (0 to 1)
    if (!containerRef.current) return;
    const { width, height, left, top } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-[110vh] pt-32 pb-20 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white flex items-center justify-center"
    >
       {/* Ambient Light Orbs */}
       <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[100px] pointer-events-none" />
       <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Elements with Parallax */}
      <FloatingCell color="orange" mouseX={mouseX} mouseY={mouseY} depth={2} className="absolute top-32 left-[8%] w-32 h-32 hidden lg:block z-20" />
      <FloatingCell color="blue" mouseX={mouseX} mouseY={mouseY} depth={1.5} className="absolute bottom-40 right-[8%] w-40 h-40 hidden lg:block z-20" />

      <div className="container-custom relative z-10 grid lg:grid-cols-12 gap-8 items-center h-full">
        
        {/* Left Visuals - Desktop */}
        <div className="hidden lg:flex col-span-3 flex-col items-start justify-center gap-12 h-full py-20 relative">
           <DoctorCard name="Dr. Samuel Kim" role="Dermatologist" image="/images/dr-samuel-kim.png" className="ml-4" delay={0.6} />
           
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.8 }}
             className="relative w-56 h-72 rounded-t-[100px] rounded-b-[40px] overflow-hidden bg-gradient-to-b from-blue-100 to-white ml-8 shadow-2xl border-4 border-white"
            >
                <Image src="/images/dr-samuel-kim.png" alt="Dr. Samuel Kim Top" fill className="object-cover object-top scale-110" />
                <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-4">
                    <p className="text-white font-bold text-lg">Top Rated</p>
                    <div className="flex gap-1 text-yellow-400">
                        {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                </div>
           </motion.div>
        </div>

        {/* Center Content */}
        <div className="col-span-12 lg:col-span-6 text-center flex flex-col items-center justify-center pt-10">
           {/* Social Proof Badge */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.9, y: 20 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-md px-3 py-2.5 rounded-full shadow-sm border border-white mb-8 hover:shadow-md transition-shadow cursor-default"
           >
              <div className="flex -space-x-3">
                 {[1,2,3].map(i => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-gray-200 relative overflow-hidden ring-1 ring-gray-100">
                       <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
                    </div>
                 ))}
                 <div className="w-9 h-9 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center text-xs font-bold shadow-sm z-10">
                    +
                 </div>
              </div>
              <span className="font-medium text-sm text-dark pr-2">20,000+ happy patients served!</span>
           </motion.div>

           <motion.h1 
             className="font-display font-bold text-5xl sm:text-6xl md:text-7xl text-dark leading-[1.1] mb-8 tracking-tight"
           >
             <span className="block overflow-hidden">
                <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="block">
                    Wellness starts with
                </motion.span>
             </span>
             <span className="block overflow-hidden text-primary">
                <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="block">
                    care that listens.
                </motion.span>
             </span>
           </motion.h1>

           <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-text max-w-lg mb-10 leading-relaxed"
           >
              Experience the future of healthcare with our world-class specialists available online and in-person.
           </motion.p>

           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5 }}
             className="flex flex-col sm:flex-row items-center gap-6"
           >
              <Button size="lg" className="h-14 px-10 text-lg rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300">
                 Book Appointment
              </Button>
              <button className="h-14 w-14 rounded-full bg-white text-primary border border-gray-200 flex items-center justify-center hover:scale-110 hover:border-primary hover:text-white hover:bg-primary transition-all duration-300 shadow-lg">
                 <ArrowUpRight size={24} />
              </button>
           </motion.div>
        </div>

        {/* Right Visuals - Desktop */}
        <div className="hidden lg:flex col-span-3 flex-col items-end justify-center gap-6 relative h-full py-20">
            <DoctorCard name="Dr. Samuel Kim" role="Cardiology" image="/images/dr-samuel-kim.png" delay={0.7} />
            <DoctorCard name="Dr. Ema Thomson" role="Dermatologist" className="mr-8" image="/images/dr-ema-thomson.png" delay={0.8} />
            <DoctorCard name="Dr. Emily Davis" role="Endocrinologist" className="mr-4" image="/images/dr-emily-davis.png" delay={0.9} />
            
            {/* Decorative Tag */}
            <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                className="absolute bottom-32 right-0 bg-white shadow-xl rounded-xl p-3 flex gap-3 items-center rotate-3 border border-gray-100"
            >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                     <Star size={20} fill="currentColor" />
                </div>
                <div>
                    <div className="font-bold text-dark">4.9/5</div>
                    <div className="text-xs text-gray-500">Patient Rating</div>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
