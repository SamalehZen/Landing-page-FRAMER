"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-primary to-[#0f36cb] text-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4 max-w-2xl">
            <Badge variant="white" className="bg-white/10 text-white border-white/20 backdrop-blur-sm">Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white">
              Complete Health Care Solutions
            </h2>
            <p className="text-blue-100 text-lg">
              We offer a wide range of specialized medical services to ensure comprehensive care for you and your family.
            </p>
          </div>
          <Button variant="white-outline" className="text-white border-white hover:bg-white hover:text-primary whitespace-nowrap" withArrow>
             View All Services
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
                <Card className="h-full group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border-none">
                    <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                        <service.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold font-display text-dark mb-3">
                        {service.title}
                    </h3>
                    <p className="text-gray-text mb-6">
                        {service.desc}
                    </p>
                    <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-dark group-hover:text-primary transition-colors">
                        Explore More <ArrowRight size={16} />
                    </a>
                </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
