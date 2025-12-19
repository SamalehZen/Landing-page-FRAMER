'use client'
import { motion } from 'framer-motion'
import { FileText, Layers, Code, Target, MessageCircle, Handshake, Zap, Eye, Users } from 'lucide-react'

const features = [
  { icon: FileText, title: 'Senior-level quality', desc: 'Direct access to senior design talent.' },
  { icon: Layers, title: 'Systems thinking', desc: 'Scalable design systems from day one.' },
  { icon: Code, title: 'Developer-friendly', desc: 'Designs that are ready to build.' },
  { icon: Target, title: 'Clear process', desc: 'No guessing games or hidden fees.' },
  { icon: MessageCircle, title: 'On-brand, every time', desc: 'Consistent visual language.' },
  { icon: Handshake, title: 'Reliable partner', desc: 'We are part of your team.' },
  { icon: Zap, title: 'Fast execution', desc: 'Updates every 24-48 hours.' },
  { icon: Eye, title: 'Thoughtful feedback', desc: 'Constructive design iterations.' },
  { icon: Users, title: 'Smooth handoff', desc: 'Assets delivered perfectly.' },
]

export default function Features() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="p-8 border-b border-r border-gray-200 bg-white hover:bg-gray-50 transition-colors group"
          >
            <feature.icon className="w-8 h-8 mb-6 text-gray-400 group-hover:text-accent-orange transition-colors" />
            <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
