"use client";

import * as React from "react";
import { Badge } from "@/components/ui/Badge";
import { Mic, Video, PhoneOff, Settings, Heart, Plus } from "lucide-react";
import { motion } from "framer-motion";

export function OnlineConsultation() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#1344fe] to-[#6d28d9] text-white overflow-hidden relative">
      {/* Decorative bg blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container-custom relative z-10 text-center space-y-8">
        <Badge variant="white" className="bg-white/10 text-white border-white/20 backdrop-blur-md">Consult Online</Badge>
        <h2 className="text-4xl md:text-5xl font-bold font-display max-w-2xl mx-auto">
           Online Doctor Support, Always Available
        </h2>
        
        {/* Video UI Mockup */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-12 max-w-4xl mx-auto bg-gray-900 rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/10 relative aspect-video"
        >
             {/* Main Doctor Screen */}
             <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                 {/* Placeholder for Doctor Video Feed */}
                 <div className="text-white/20 text-9xl">👨‍⚕️</div>
                 <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                     <span className="text-sm font-medium">Rec 00:12:45</span>
                 </div>
                 
                 <div className="absolute top-6 right-6 flex flex-col gap-3">
                    <button className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors"><Settings size={18} /></button>
                    <button className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors"><Heart size={18} /></button>
                    <button className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors"><Plus size={18} /></button>
                 </div>
             </div>

             {/* User PIP */}
             <div className="absolute bottom-24 right-6 w-32 md:w-48 aspect-[3/4] bg-gray-700 rounded-xl border-2 border-white/20 shadow-lg overflow-hidden">
                 <div className="w-full h-full bg-gray-600 flex items-center justify-center text-3xl">👤</div>
             </div>
             
             {/* Name Tag */}
             <div className="absolute bottom-24 left-6">
                 <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl text-left">
                     <h3 className="font-bold text-lg">Dr. Samuel Kim</h3>
                     <p className="text-gray-300 text-xs">Dermatologist</p>
                 </div>
             </div>

             {/* Bottom Controls Bar */}
             <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center gap-4 pb-4">
                 <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors"><Mic size={20} /></button>
                 <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors"><Video size={20} /></button>
                 <button className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg"><PhoneOff size={24} /></button>
                 <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors"><Settings size={20} /></button>
             </div>
        </motion.div>
      </div>
    </section>
  );
}
