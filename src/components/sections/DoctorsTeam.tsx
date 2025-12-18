'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';
import { doctors } from '@/lib/data';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function DoctorsTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextDoctor = () => {
    setCurrentIndex((prev) => (prev + 1) % doctors.length);
  };

  const prevDoctor = () => {
    setCurrentIndex((prev) => (prev - 1 + doctors.length) % doctors.length);
  };

  return (
    <section id="doctors" className="py-20 bg-gradient-to-br from-[#1344fe] to-[#1e40af] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-20 w-64 h-64 bg-white rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-white text-[#1b123d]">Expert Doctor's</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-poppins">
            Online Doctor Support, Always Available
          </h2>
        </motion.div>

        {/* Doctor Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center">
            {/* Previous Button */}
            <button
              onClick={prevDoctor}
              className="absolute left-0 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow -translate-x-6"
            >
              <ChevronLeft className="w-6 h-6 text-[#1b123d]" />
            </button>

            {/* Doctor Cards Container */}
            <div className="w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                  className="grid md:grid-cols-3 gap-6"
                >
                  {doctors.map((doctor, index) => {
                    const isActive = index === currentIndex;
                    const isAdjacent = Math.abs(index - currentIndex) === 1 || 
                                     (currentIndex === 0 && index === doctors.length - 1) ||
                                     (currentIndex === doctors.length - 1 && index === 0);

                    return (
                      <motion.div
                        key={doctor.id}
                        className={`
                          relative bg-white rounded-2xl overflow-hidden shadow-xl
                          ${isActive ? 'md:scale-110 md:z-10' : 'md:scale-95 opacity-75'}
                          ${isAdjacent ? 'md:scale-105' : ''}
                        `}
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Doctor Image */}
                        <div className="relative h-64">
                          <div className="w-full h-full bg-gray-300"></div>
                          {isActive && (
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1344fe]/90 to-transparent"></div>
                          )}
                          
                          {/* Consultation Badge */}
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center space-x-1">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm font-semibold text-[#1b123d]">
                              {doctor.consultations} Consults
                            </span>
                          </div>

                          {/* Active State Overlay */}
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="absolute bottom-4 left-4 right-4 text-white"
                            >
                              <p className="text-sm mb-2">Available for consultation</p>
                              <button className="bg-white text-[#1344fe] px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
                                Book Now
                              </button>
                            </motion.div>
                          )}
                        </div>

                        {/* Doctor Info */}
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-[#1b123d] mb-2 font-poppins">
                            {doctor.name}
                          </h3>
                          <p className="text-[#636977] mb-4">{doctor.specialty}</p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-2 h-2 rounded-full ${
                                    i < 4 ? 'bg-yellow-400' : 'bg-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <button className="text-[#1344fe] hover:text-blue-600 transition-colors">
                              <ArrowRight className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next Button */}
            <button
              onClick={nextDoctor}
              className="absolute right-0 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow translate-x-6"
            >
              <ChevronRight className="w-6 h-6 text-[#1b123d]" />
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {doctors.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-white w-8'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button 
            variant="outline" 
            size="lg"
            showArrow
            className="border-white text-white hover:bg-white hover:text-[#1344fe]"
          >
            View All Doctor's
          </Button>
        </motion.div>

        {/* Floating Medical Icons */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 left-20 text-white/20"
        >
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
          </svg>
        </motion.div>

        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
          className="absolute bottom-20 right-20 text-white/20"
        >
          <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}