import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1b123d] text-white">
      {/* Pre-footer watermark */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-9xl font-bold opacity-10 font-poppins">CureNast</h1>
        </div>
        <div className="relative container mx-auto px-6">
          <div className="bg-gradient-to-r from-[#1344fe] to-[#1e40af] rounded-3xl p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 bg-white rounded-full"></div>
                <div className="absolute right-0 top-0 w-10 h-10 bg-[#ff623a] rounded-full"></div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 font-poppins">
              CureNast: Your trusted partner for Any health solutions
            </h3>
            <div className="flex justify-center space-x-4">
              <button className="px-6 py-3 border-2 border-white rounded-full hover:bg-white hover:text-[#1b123d] transition-colors">
                Book Appointment
              </button>
              <button className="px-6 py-3 bg-white text-[#1b123d] rounded-full hover:bg-gray-100 transition-colors flex items-center">
                Find A Doctor
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Social */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-white rounded-full"></div>
                <div className="absolute right-0 top-0 w-6 h-6 bg-[#ff623a] rounded-full"></div>
              </div>
              <span className="text-2xl font-bold font-poppins">CureNast</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Utility Pages */}
          <div>
            <h4 className="font-semibold mb-6 font-poppins">Utility Pages</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-[#ff623a] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[#ff623a] transition-colors">Service</a></li>
              <li><a href="#" className="hover:text-[#ff623a] transition-colors">Doctor</a></li>
              <li><a href="#" className="hover:text-[#ff623a] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#ff623a] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Other Pages */}
          <div>
            <h4 className="font-semibold mb-6 font-poppins">Other Pages</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-[#ff623a] transition-colors">Service Details</a></li>
              <li><a href="#" className="hover:text-[#ff623a] transition-colors">Doctor Details</a></li>
              <li><a href="#" className="hover:text-[#ff623a] transition-colors">Blog Details</a></li>
              <li><a href="#" className="hover:text-[#ff623a] transition-colors">404</a></li>
            </ul>
          </div>

          {/* Getting Care */}
          <div>
            <h4 className="font-semibold mb-6 font-poppins">Getting Care</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-[#ff623a] transition-colors">Dermatology</a></li>
              <li><a href="#" className="hover:text-[#ff623a] transition-colors">Neurology</a></li>
              <li><a href="#" className="hover:text-[#ff623a] transition-colors">Orthopedics</a></li>
              <li><a href="#" className="hover:text-[#ff623a] transition-colors">Pediatrics</a></li>
              <li><a href="#" className="hover:text-[#ff623a] transition-colors">Oncology</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6 font-poppins">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#ff623a]" />
                <span>info@curenast.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#ff623a]" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#ff623a]" />
                <span>123 Medical Center Dr<br />New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            ©Copyright 2025 CureNast - All Rights Reserved.
          </p>
          <p className="text-white/40 text-sm mt-2">
            Designed By Design Kuthir . Powered By Framer
          </p>
        </div>
      </div>
    </footer>
  );
}