'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Plus, Facebook, Users, Stethoscope } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#f4f4f4] to-white pt-20 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Social Proof Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-[#1344fe] border-2 border-white flex items-center justify-center">
                <Plus className="w-4 h-4 text-white" />
              </div>
            </div>
            <span className="ml-4 text-[#1b123d] font-medium">20,000+ happy patients served!</span>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text and Doctor Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1b123d] mb-8 font-poppins leading-tight">
              Wellness starts with care that really listens.
            </h1>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="outline" size="lg" className="justify-center">
                Book an Appointment
              </Button>
              <Button 
                variant="primary" 
                size="lg" 
                showArrow
                className="justify-center bg-[#1344fe] hover:bg-blue-600"
              >
                Get Started
              </Button>
            </div>

            {/* Doctor Cards - Left Side */}
            <div className="space-y-4">
              {/* Single Doctor Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white rounded-2xl p-4 shadow-lg flex items-center space-x-4 max-w-sm"
              >
                <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#1b123d]">Dr. Samuel Kim</h3>
                  <p className="text-sm text-[#636977]">Dermatologist</p>
                </div>
                <Facebook className="w-5 h-5 text-[#1344fe]" />
              </motion.div>

              {/* Stacked Doctor Cards */}
              <div className="space-y-3 max-w-sm">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                    className="bg-white rounded-2xl p-4 shadow-lg flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-400"></div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#1b123d]">Dr. {['Sarah Johnson', 'Michael Brown', 'Lisa Davis'][i-1]}</h3>
                      <p className="text-sm text-[#636977]">{['Cardiologist', 'Neurologist', 'Pediatrician'][i-1]}</p>
                    </div>
                    <Facebook className="w-5 h-5 text-[#1344fe]" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - 3D Illustrations and Large Doctor Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* 3D Virus Illustrations */}
            <div className="absolute top-0 left-0 w-32 h-32">
              <div className="w-full h-full bg-[#ff623a] rounded-full opacity-80 blur-xl animate-pulse"></div>
              <div className="absolute inset-4 bg-[#ff8566] rounded-full opacity-60 animate-pulse delay-1000"></div>
            </div>
            
            <div className="absolute top-20 right-0 w-40 h-40">
              <div className="w-full h-full bg-[#1344fe] rounded-full opacity-80 blur-xl animate-pulse"></div>
              <div className="absolute inset-4 bg-[#4169ff] rounded-full opacity-60 animate-pulse delay-1000"></div>
            </div>

            {/* Large Doctor Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative z-10"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1344fe] to-[#ff623a] rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white rounded-3xl p-8 transform -rotate-1">
                  <div className="w-full h-96 bg-gray-200 rounded-2xl flex items-center justify-center">
                    <Stethoscope className="w-24 h-24 text-gray-400" />
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-2xl font-bold text-[#1b123d] font-poppins">Expert Medical Team</h3>
                    <p className="text-[#636977] mt-2">24/7 Available for Your Health</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-40 -left-10 w-20 h-20 bg-[#ff623a] rounded-full opacity-20"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute bottom-20 -right-10 w-16 h-16 bg-[#1344fe] rounded-full opacity-20"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}