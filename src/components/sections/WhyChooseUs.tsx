'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Clock, Shield } from 'lucide-react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Accordion from '@/components/ui/Accordion';

const whyChooseData = [
  {
    id: 1,
    question: "Expert Doctors",
    answer: "Our team consists of board-certified physicians with extensive experience in their respective fields. Each doctor undergoes continuous training to stay updated with the latest medical advancements and treatment methodologies."
  },
  {
    id: 2,
    question: "Patient Centered Care",
    answer: "We prioritize your comfort and wellbeing by creating personalized treatment plans tailored to your specific needs. Our approach ensures you receive care that respects your preferences and lifestyle."
  },
  {
    id: 3,
    question: "24/7 Support",
    answer: "Round-the-clock medical assistance ensures you're never alone in your healthcare journey. Our dedicated support team is available via phone, chat, or video call whenever you need us."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#f5f6f9] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 w-72 h-72 bg-[#1344fe] rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-[#ff623a] rounded-full"></div>
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
          <Badge className="mb-6">Why Choose Us?</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1b123d] mb-6 font-poppins">
            Leading with Heart and Expertise
          </h2>
          <p className="text-xl text-[#636977] max-w-3xl mx-auto mb-8">
            Experience healthcare that combines cutting-edge technology with compassionate, personalized attention
          </p>
          <Button 
            variant="primary" 
            size="lg"
            showArrow
            className="bg-[#1344fe] hover:bg-blue-600"
          >
            Book Appointment
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Feature Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              {/* Badge */}
              <div className="inline-block bg-[#ff623a] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                MediNest
              </div>
              
              <h3 className="text-3xl font-bold text-[#1b123d] mb-6 font-poppins">
                Outstanding Care for Every Patient
              </h3>
              
              <p className="text-[#636977] mb-8 leading-relaxed">
                At CureNast, we revolutionize healthcare delivery by combining advanced medical technology with a human touch. Our integrated approach ensures comprehensive care that addresses both your immediate health concerns and long-term wellness goals.
              </p>

              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#1344fe]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-[#1344fe]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1b123d]">Advanced Technology</h4>
                    <p className="text-sm text-[#636977]">State-of-the-art medical equipment and diagnostic tools</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1b123d]">Expert Team</h4>
                    <p className="text-sm text-[#636977]">Highly qualified medical professionals with diverse expertise</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#ff623a]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#ff623a]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1b123d]">Quick Response</h4>
                    <p className="text-sm text-[#636977]">Timely appointments and efficient service delivery</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1b123d]">Safe & Secure</h4>
                    <p className="text-sm text-[#636977]">Your health data and privacy are our top priorities</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Accordion items={whyChooseData} defaultOpen={1} />
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 10, repeat: Infinity, ease: "linear" }
          }}
          className="absolute top-20 right-10 w-16 h-16 bg-[#1344fe]/10 rounded-full flex items-center justify-center"
        >
          <CheckCircle className="w-8 h-8 text-[#1344fe]" />
        </motion.div>

        <motion.div
          animate={{ 
            y: [20, -20, 20],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
            rotate: { duration: 12, repeat: Infinity, ease: "linear", delay: 0.5 }
          }}
          className="absolute bottom-20 left-10 w-14 h-14 bg-[#ff623a]/10 rounded-full flex items-center justify-center"
        >
          <Shield className="w-7 h-7 text-[#ff623a]" />
        </motion.div>
      </div>
    </section>
  );
}