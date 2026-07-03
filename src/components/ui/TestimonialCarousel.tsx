"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  image: string;
  rating: number;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="flex flex-col md:flex-row gap-12 items-center">
      {/* Content Side */}
      <div className="flex-1 space-y-8 relative">
        <Quote className="text-accent w-16 h-16 opacity-20 absolute -top-8 -left-4 md:-left-8" />
        <Quote className="text-accent w-12 h-12 mb-6" />
        
        <div className="h-[300px] relative overflow-hidden"> {/* Fixed height or min-height to prevent layout shift */}
            <AnimatePresence mode="wait">
            <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
            >
                <div>
                    <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                        <Star 
                            key={i} 
                            size={20} 
                            className={cn(
                            "fill-current", 
                            i < Math.floor(testimonials[currentIndex].rating) ? "text-yellow-400" : 
                            i < testimonials[currentIndex].rating ? "text-yellow-400 opacity-50" : "text-gray-300"
                            )} 
                        />
                        ))}
                    </div>
                <h3 className="text-2xl md:text-3xl font-display font-medium italic mb-6 leading-relaxed">
                    "{testimonials[currentIndex].content}"
                </h3>
                
                <div className="flex items-center gap-4">
                     <div className="relative w-12 h-12 rounded-full overflow-hidden md:hidden">
                        <Image src={testimonials[currentIndex].image} alt={testimonials[currentIndex].author} fill className="object-cover" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-dark">{testimonials[currentIndex].author}</h4>
                        <p className="text-gray-text">{testimonials[currentIndex].role}</p>
                    </div>
                </div>
                </div>
            </motion.div>
            </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-6 mt-8">
            <div className="flex items-center gap-2 font-medium text-lg">
                <span className="text-dark">0{currentIndex + 1}</span>
                <span className="text-gray-300">/</span>
                <span className="text-gray-300">0{testimonials.length}</span>
            </div>
            <div className="flex gap-2">
                <button onClick={prevSlide} className="p-3 border border-gray-200 rounded-full hover:bg-primary hover:text-white transition-colors">
                    <ArrowLeft size={20} />
                </button>
                <button onClick={nextSlide} className="p-3 border border-gray-200 rounded-full hover:bg-primary hover:text-white transition-colors">
                    <ArrowRight size={20} />
                </button>
            </div>
        </div>
      </div>

      {/* Image Side - Desktop Only larger view */}
      <div className="hidden md:block flex-1 relative">
         <AnimatePresence mode="wait">
             <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100"
             >
                <Image 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].author} 
                    fill 
                    className="object-cover"
                />
             </motion.div>
         </AnimatePresence>
      </div>
    </div>
  );
}
