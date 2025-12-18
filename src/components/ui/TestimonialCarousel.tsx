'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '@/lib/data';

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        <button
          onClick={prevTestimonial}
          className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
        >
          <ChevronLeft className="w-6 h-6 text-[#1b123d]" />
        </button>
        
        <div className="flex-1 mx-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#ff623a] flex items-center justify-center">
                  <span className="text-white text-3xl font-serif italic">"</span>
                </div>
              </div>
              
              <p className="text-2xl font-medium text-[#1b123d] mb-8 italic max-w-3xl mx-auto">
                {testimonial.text}
              </p>
              
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#1b123d]">{testimonial.name}</p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(testimonial.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-[#636977]">{testimonial.rating}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <button
          onClick={nextTestimonial}
          className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
        >
          <ChevronRight className="w-6 h-6 text-[#1b123d]" />
        </button>
      </div>
      
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
              index === currentIndex
                ? 'bg-[#1344fe] text-white'
                : 'bg-gray-200 text-[#636977] hover:bg-gray-300'
            }`}
          >
            {String(index + 1).padStart(2, '0')}
          </button>
        ))}
      </div>
    </div>
  );
}