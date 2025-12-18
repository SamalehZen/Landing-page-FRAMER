'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { blogPosts } from '@/lib/data';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function BlogNews() {
  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-[#1344fe] to-[#1e40af] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 right-20 w-64 h-64 bg-white rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-white rounded-full"></div>
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
          <Badge className="mb-6 bg-white text-[#1b123d]">Blog & News</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-poppins">
            Stay Informed With CureNast Updates
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Latest health insights, medical breakthroughs, and wellness tips from our expert team
          </p>
        </motion.div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gray-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1 text-sm">
                    <Calendar className="w-4 h-4 text-[#1344fe]" />
                    <span className="text-[#1b123d] font-medium">
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1b123d] mb-3 font-poppins line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-[#636977] mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="text-sm font-semibold text-[#1b123d]">{post.author}</p>
                      <p className="text-xs text-[#636977]">{post.authorRole}</p>
                    </div>
                  </div>
                </div>

                {/* Read More Link */}
                <a 
                  href="#" 
                  className="inline-flex items-center text-[#1344fe] font-semibold hover:text-blue-600 transition-colors group"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 shadow-xl"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4">Featured Article</Badge>
              <h3 className="text-3xl font-bold text-[#1b123d] mb-4 font-poppins">
                The Future of Telemedicine: Transforming Healthcare Access
              </h3>
              <p className="text-[#636977] mb-6 leading-relaxed">
                Discover how virtual consultations are revolutionizing patient care, breaking down geographical barriers, and making quality healthcare accessible to everyone, everywhere.
              </p>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-[#1344fe]" />
                  <span className="text-[#636977]">Dr. Michael Chen</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-[#1344fe]" />
                  <span className="text-[#636977]">March 20, 2025</span>
                </div>
              </div>

              <a 
                href="#" 
                className="inline-flex items-center text-[#1344fe] font-semibold hover:text-blue-600 transition-colors group text-lg"
              >
                Read Full Article
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-[#1344fe] to-[#1e40af] rounded-2xl p-1 transform rotate-3">
                <div className="bg-gray-200 rounded-2xl h-64 transform -rotate-3"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline" 
            size="lg"
            showArrow
            className="border-white text-white hover:bg-white hover:text-[#1344fe]"
          >
            View All Blog's
          </Button>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 left-20 text-white/20"
        >
          <Calendar className="w-16 h-16" />
        </motion.div>

        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
          className="absolute bottom-20 right-20 text-white/20"
        >
          <User className="w-20 h-20" />
        </motion.div>
      </div>
    </section>
  );
}