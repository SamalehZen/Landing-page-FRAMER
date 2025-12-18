'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';

export default function Testimonials() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#ff623a] rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#1344fe] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Testimonial Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <TestimonialCarousel />
          </motion.div>

          {/* Right Side - Large Image and Additional Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Large Quote Icon */}
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-[#ff623a] rounded-full flex items-center justify-center z-10"
            >
              <Quote className="w-16 h-16 text-white" />
            </motion.div>

            {/* Main Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#1344fe] to-[#1e40af] rounded-3xl p-1 transform rotate-3">
                <div className="bg-white rounded-3xl p-8 transform -rotate-3">
                  <div className="w-full h-96 bg-gray-200 rounded-2xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1344fe]/20 to-[#ff623a]/20"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-2xl font-bold text-white mb-2 font-poppins">
                        Real Stories from Real Patients
                      </h3>
                      <p className="text-white/90">
                        Join thousands of satisfied patients who have transformed their health journey with CureNast
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#1344fe] to-[#1e40af] rounded-2xl p-6 text-white"
              >
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <h4 className="text-3xl font-bold mb-1">4.9/5</h4>
                <p className="text-white/90">Average Rating</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#ff623a] to-[#ff472e] rounded-2xl p-6 text-white"
              >
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <h4 className="text-3xl font-bold mb-1">98%</h4>
                <p className="text-white/90">Satisfaction Rate</p>
              </motion.div>
            </div>

            {/* Additional Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 space-y-4"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1b123d]">Verified Reviews</h4>
                  <p className="text-sm text-[#636977]">All testimonials are from confirmed patients</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1b123d]">Recent Experiences</h4>
                  <p className="text-sm text-[#636977]">Updated regularly with latest patient feedback</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}