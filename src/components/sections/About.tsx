'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Users, Award, Heart } from 'lucide-react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function About() {
  const doctorImages = [
    { id: 1, name: "Dr. Sarah Chen", specialty: "Cardiologist", position: "top-10 left-10" },
    { id: 2, name: "Dr. Michael Ross", specialty: "Neurologist", position: "top-10 right-10" },
    { id: 3, name: "Dr. Emily Johnson", specialty: "Dermatologist", position: "bottom-10 left-10" },
    { id: 4, name: "Dr. David Kim", specialty: "Orthopedic", position: "bottom-10 right-10" },
    { id: 5, name: "Dr. Lisa Wang", specialty: "Pediatrician", position: "top-1/2 left-5" },
    { id: 6, name: "Dr. James Brown", specialty: "Ophthalmologist", position: "top-1/2 right-5" }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Arc */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] border-4 border-[#1344fe]/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] border-2 border-[#ff623a]/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Doctor Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[600px]"
          >
            {/* Central Content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="flex justify-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-[#1344fe]/10 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-[#1344fe]" />
                  </div>
                  <div className="w-16 h-16 bg-[#ff623a]/10 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-[#ff623a]" />
                  </div>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#1b123d] mb-2 font-poppins">20+ Years</h3>
                <p className="text-[#636977]">Of Medical Excellence</p>
              </div>
            </div>

            {/* Circular Doctor Images */}
            {doctorImages.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                className={`absolute ${doctor.position} w-32 h-32`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, z: 10 }}
              >
                <div className="relative group">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <div className="w-full h-full bg-gray-300"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                    <div className="text-center text-white">
                      <p className="text-sm font-semibold">{doctor.name}</p>
                      <p className="text-xs">{doctor.specialty}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Floating Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-20 left-20 w-8 h-8 bg-[#ff623a] rounded-full opacity-60"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-20 right-20 w-6 h-6 bg-[#1344fe] rounded-full opacity-60"
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-6">About CureNast</Badge>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1b123d] mb-6 font-poppins leading-tight">
              Trusted care, naturally delivered
            </h2>
            
            <p className="text-xl text-[#636977] mb-8 leading-relaxed">
              At CureNast, we believe in providing healthcare that combines cutting-edge medical expertise with compassionate, personalized attention. Our team of dedicated professionals is committed to your wellbeing.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#1344fe]/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#1344fe]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1b123d]">500+</h4>
                  <p className="text-sm text-[#636977]">Expert Doctors</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#ff623a]/10 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#ff623a]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1b123d]">20k+</h4>
                  <p className="text-sm text-[#636977]">Happy Patients</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1b123d]">15+</h4>
                  <p className="text-sm text-[#636977]">Years Experience</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1b123d]">98%</h4>
                  <p className="text-sm text-[#636977]">Success Rate</p>
                </div>
              </div>
            </div>

            <Button 
              variant="primary" 
              size="lg"
              showArrow
              className="bg-[#1344fe] hover:bg-blue-600"
            >
              More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}