'use client';

import { motion } from 'framer-motion';
import { Heart, User, Brain, Bone, Eye, Baby, ArrowRight } from 'lucide-react';
import { services } from '@/lib/data';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const iconMap = {
  Heart,
  User,
  Brain,
  Bone,
  Eye,
  Baby
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-[#1344fe] to-[#1e40af] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full"></div>
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
          <Badge className="mb-6">Services</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-poppins">
            Complete Health Care Solutions
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Comprehensive medical services delivered by expert healthcare professionals dedicated to your wellbeing
          </p>
          <Button 
            variant="outline" 
            size="lg"
            showArrow
            className="border-white text-white hover:bg-white hover:text-[#1344fe]"
          >
            View All Services
          </Button>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8 text-[#1344fe]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#1b123d] mb-4 font-poppins">
                  {service.title}
                </h3>
                <p className="text-[#636977] mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Link */}
                <a 
                  href="#" 
                  className="inline-flex items-center text-[#1344fe] font-semibold hover:text-blue-600 transition-colors group"
                >
                  Explore More
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Floating Medical Icons */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-40 left-10 text-white/20"
        >
          <Heart className="w-24 h-24" />
        </motion.div>

        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
          }}
          className="absolute bottom-40 right-10 text-white/20"
        >
          <Brain className="w-32 h-32" />
        </motion.div>
      </div>
    </section>
  );
}