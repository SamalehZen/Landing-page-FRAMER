'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Heart, Eye, Brain, Bone, Hand } from 'lucide-react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const medicalIcons = [
  { icon: Heart, label: "Cardiology", position: "top-20 left-10" },
  { icon: Eye, label: "Ophthalmology", position: "top-20 right-10" },
  { icon: Brain, label: "Neurology", position: "top-1/2 left-5" },
  { icon: Bone, label: "Orthopedics", position: "top-1/2 right-5" },
  { icon: Hand, label: "Surgery", position: "bottom-20 left-1/2 transform -translate-x-1/2" }
];

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1344fe] via-purple-600 to-[#1e40af] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-20 w-72 h-72 bg-white rounded-full"></div>
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
          <Badge className="mb-6 bg-white text-[#1b123d]">Get in touch</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-poppins">
            Health Support from Expert Doctors
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Take the first step towards better health with our team of dedicated medical professionals
          </p>
        </motion.div>

        {/* Main CTA Content with Arc */}
        <div className="relative max-w-6xl mx-auto">
          {/* Arc Background */}
          <div className="relative h-96 flex items-center justify-center">
            {/* Concentric Arcs */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full max-w-2xl max-h-96 border-4 border-white/20 rounded-full"></div>
              <div className="absolute w-3/4 h-3/4 max-w-lg max-h-72 border-4 border-white/30 rounded-full"></div>
              <div className="absolute w-1/2 h-1/2 max-w-sm max-h-48 border-4 border-white/40 rounded-full"></div>
            </div>

            {/* Medical Icons Around Arc */}
            {medicalIcons.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  className={`absolute ${item.position}`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="w-16 h-16 bg-[#1344fe]/10 rounded-xl flex items-center justify-center mb-3">
                      <IconComponent className="w-8 h-8 text-[#1344fe]" />
                    </div>
                    <p className="text-sm font-semibold text-[#1b123d] text-center">{item.label}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Central Medical Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="w-48 h-48 bg-gray-200 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#1344fe]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Heart className="w-10 h-10 text-[#1344fe]" />
                    </div>
                    <p className="text-[#1b123d] font-semibold">Expert Care</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#1344fe]"
            >
              Book Appointment
            </Button>
            <Button 
              variant="primary" 
              size="lg"
              showArrow
              className="bg-white text-[#1344fe] hover:bg-gray-100"
            >
              Find A Doctor
            </Button>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mt-20"
        >
          <div className="text-center">
            <h3 className="text-4xl font-bold text-white mb-2">500+</h3>
            <p className="text-white/80">Expert Doctors</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-white mb-2">50k+</h3>
            <p className="text-white/80">Happy Patients</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-white mb-2">15+</h3>
            <p className="text-white/80">Years Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-white mb-2">24/7</h3>
            <p className="text-white/80">Available Support</p>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-10 left-10 text-white/20"
        >
          <Heart className="w-24 h-24" />
        </motion.div>

        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 0.7, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
          className="absolute bottom-10 right-10 text-white/20"
        >
          <Brain className="w-32 h-32" />
        </motion.div>

        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 10, repeat: Infinity, ease: "linear" }
          }}
          className="absolute top-1/2 right-20 text-white/20"
        >
          <Eye className="w-20 h-20" />
        </motion.div>
      </div>
    </section>
  );
}