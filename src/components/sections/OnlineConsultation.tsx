'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  Phone, 
  Settings, 
  Heart, 
  Plus,
  MessageSquare,
  Share,
  User
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function OnlineConsultation() {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);

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
          <Badge className="mb-6 bg-white text-[#1b123d]">Consult Online</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-poppins">
            Online Doctor Support, Always Available
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Connect with healthcare professionals from the comfort of your home through our secure video consultation platform
          </p>
        </motion.div>

        {/* Video Call UI Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
            {/* Main Video Area */}
            <div className="relative bg-black rounded-2xl overflow-hidden mb-6" style={{ height: '500px' }}>
              {/* Doctor Video Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <User className="w-16 h-16 text-gray-400" />
                    </div>
                    <h3 className="text-white text-xl font-semibold">Dr. Samuel Kim</h3>
                    <p className="text-gray-400">Dermatologist</p>
                  </div>
                </div>
              </div>

              {/* Overlay Glass Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>

              {/* Top Bar */}
              <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 bg-red-500 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-white text-sm font-medium">LIVE</span>
                  </div>
                  <span className="text-white text-sm">12:34</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Settings className="w-5 h-5 text-white" />
                  </button>
                  <button className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Share className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Side Icons */}
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2 space-y-4">
                <button className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Heart className="w-6 h-6 text-white" />
                </button>
                <button className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <MessageSquare className="w-6 h-6 text-white" />
                </button>
                <button className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Plus className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Small Self Video */}
              <div className="absolute bottom-24 right-6 w-32 h-24 bg-gray-700 rounded-lg overflow-hidden border-2 border-white/30">
                <div className="w-full h-full flex items-center justify-center">
                  <User className="w-8 h-8 text-gray-400" />
                </div>
              </div>

              {/* Bottom Controls */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex justify-center items-center space-x-4">
                  <button
                    onClick={() => setIsMicOn(!isMicOn)}
                    className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
                      isMicOn 
                        ? 'bg-white/20 backdrop-blur hover:bg-white/30' 
                        : 'bg-red-500 hover:bg-red-600'
                    }`}
                  >
                    {isMicOn ? (
                      <Mic className="w-6 h-6 text-white" />
                    ) : (
                      <MicOff className="w-6 h-6 text-white" />
                    )}
                  </button>

                  <button
                    onClick={() => setIsVideoOn(!isVideoOn)}
                    className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
                      isVideoOn 
                        ? 'bg-white/20 backdrop-blur hover:bg-white/30' 
                        : 'bg-red-500 hover:bg-red-600'
                    }`}
                  >
                    {isVideoOn ? (
                      <Video className="w-6 h-6 text-white" />
                    ) : (
                      <VideoOff className="w-6 h-6 text-white" />
                    )}
                  </button>

                  <button className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                    <Phone className="w-8 h-8 text-white transform rotate-135" />
                  </button>
                </div>
              </div>
            </div>

            {/* Features Below */}
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">HD Video Quality</h4>
                <p className="text-white/70 text-sm">Crystal clear video consultations</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Easy to Use</h4>
                <p className="text-white/70 text-sm">Simple interface for all ages</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">24/7 Available</h4>
                <p className="text-white/70 text-sm">Doctors ready when you need them</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-[#1344fe]"
          >
            Start Online Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}