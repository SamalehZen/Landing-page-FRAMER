'use client';

import { motion } from 'framer-motion';
import { HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';
import { faqs } from '@/lib/data';
import Accordion from '@/components/ui/Accordion';
import Badge from '@/components/ui/Badge';

export default function FAQ() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#1344fe] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#ff623a] rounded-full"></div>
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
          <Badge className="mb-6">FAQ's</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1b123d] mb-6 font-poppins">
            All Questions Answered Right Here
          </h2>
          <p className="text-xl text-[#636977] max-w-3xl mx-auto">
            Find answers to commonly asked questions about our services, appointments, and healthcare solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* FAQ Accordion - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Accordion items={faqs} showNumbers={true} />
          </motion.div>

          {/* Side Support Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Still Have Questions Card */}
            <div className="bg-gradient-to-br from-[#1344fe] to-[#1e40af] rounded-2xl p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-poppins">
                Still Have Questions?
              </h3>
              <p className="text-white/90 mb-6">
                Can't find what you're looking for? Our support team is here to help you 24/7.
              </p>
              <div className="space-y-4">
                <a 
                  href="tel:+1234567890" 
                  className="flex items-center space-x-3 text-white hover:text-white/80 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </a>
                <a 
                  href="mailto:info@curenast.com" 
                  className="flex items-center space-x-3 text-white hover:text-white/80 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@curenast.com</span>
                </a>
              </div>
            </div>

            {/* Live Chat Card */}
            <div className="bg-[#f5f6f9] rounded-2xl p-8">
              <div className="w-16 h-16 bg-[#ff623a]/10 rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-[#ff623a]" />
              </div>
              <h3 className="text-xl font-bold text-[#1b123d] mb-4 font-poppins">
                Start Live Chat
              </h3>
              <p className="text-[#636977] mb-6">
                Get instant answers from our AI-powered assistant or connect with a human representative.
              </p>
              <button className="w-full bg-[#1344fe] text-white py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors">
                Start Chat Now
              </button>
            </div>

            {/* Quick Links */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#1b123d] mb-6 font-poppins">
                Quick Links
              </h3>
              <div className="space-y-4">
                <a href="#" className="block text-[#636977] hover:text-[#1344fe] transition-colors">
                  → Book an Appointment
                </a>
                <a href="#" className="block text-[#636977] hover:text-[#1344fe] transition-colors">
                  → Find a Doctor
                </a>
                <a href="#" className="block text-[#636977] hover:text-[#1344fe] transition-colors">
                  → Insurance Information
                </a>
                <a href="#" className="block text-[#636977] hover:text-[#1344fe] transition-colors">
                  → Patient Portal
                </a>
                <a href="#" className="block text-[#636977] hover:text-[#1344fe] transition-colors">
                  → Emergency Services
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#f5f6f9] rounded-3xl p-12 text-center"
        >
          <h3 className="text-2xl font-bold text-[#1b123d] mb-4 font-poppins">
            Need More Help?
          </h3>
          <p className="text-[#636977] mb-8 max-w-2xl mx-auto">
            Our comprehensive help center contains detailed guides, video tutorials, and step-by-step instructions for all our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-[#1344fe] text-white rounded-full font-semibold hover:bg-blue-600 transition-colors">
              Visit Help Center
            </button>
            <button className="px-6 py-3 border-2 border-[#1b123d] text-[#1b123d] rounded-full font-semibold hover:bg-[#1b123d] hover:text-white transition-colors">
              Download Guide
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}