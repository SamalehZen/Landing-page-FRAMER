'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-[#1344fe] rounded-full"></div>
              <div className="absolute right-0 top-0 w-6 h-6 bg-[#ff623a] rounded-full"></div>
            </div>
            <span className="text-2xl font-bold text-[#1b123d] font-poppins">CureNast</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-[#1b123d] hover:text-[#1344fe] transition-colors">Services</a>
            <a href="#about" className="text-[#1b123d] hover:text-[#1344fe] transition-colors">About</a>
            <a href="#doctors" className="text-[#1b123d] hover:text-[#1344fe] transition-colors">Doctors</a>
            <a href="#blog" className="text-[#1b123d] hover:text-[#1344fe] transition-colors">Blog</a>
            <a href="#contact" className="text-[#1b123d] hover:text-[#1344fe] transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-12 h-12 bg-[#1344fe] rounded-full flex items-center justify-center"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <div className="w-6 h-5 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-white"></div>
                <div className="w-full h-0.5 bg-white"></div>
              </div>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-[#1b123d] hover:text-[#1344fe] transition-colors">Services</a>
              <a href="#about" className="text-[#1b123d] hover:text-[#1344fe] transition-colors">About</a>
              <a href="#doctors" className="text-[#1b123d] hover:text-[#1344fe] transition-colors">Doctors</a>
              <a href="#blog" className="text-[#1b123d] hover:text-[#1344fe] transition-colors">Blog</a>
              <a href="#contact" className="text-[#1b123d] hover:text-[#1344fe] transition-colors">Contact</a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}