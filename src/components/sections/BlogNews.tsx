"use client";

import * as React from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowUpRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { blogs } from "@/lib/data";

export function BlogNews() {
  return (
    <section id="blog" className="py-24 bg-gradient-to-tr from-blue-50 to-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
           <div className="space-y-4">
               <Badge variant="blue" className="bg-white border-blue-100">Blog & News</Badge>
               <h2 className="text-4xl md:text-5xl font-bold font-display text-dark">
                   Stay Informed With <br /> CureNast Updates
               </h2>
           </div>
           <Button variant="outline" withArrow>View All Blogs</Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, idx) => (
                <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                >
                    <Card className="p-0 overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
                        <div className={`h-48 w-full ${blog.bgClass} relative overflow-hidden`}>
                             {/* Placeholder image representation */}
                             <div className="absolute inset-0 bg-gray-200/50 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">
                                 [Image: {blog.category}]
                             </div>
                             <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary">
                                 {blog.category}
                             </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                                <Calendar size={12} /> {blog.date}
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-4 leading-normal group-hover:text-primary transition-colors">
                                {blog.title}
                            </h3>
                            
                            <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-200" />
                                    <div>
                                        <h4 className="font-bold text-sm text-dark">{blog.author}</h4>
                                        <p className="text-xs text-gray-400">{blog.role}</p>
                                    </div>
                                </div>
                                <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-dark hover:bg-primary hover:text-white hover:border-primary transition-all">
                                    <ArrowUpRight size={16} />
                                </button>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
