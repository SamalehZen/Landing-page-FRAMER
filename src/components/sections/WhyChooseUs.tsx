"use client";

import * as React from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { CheckCircle2 } from "lucide-react";
import { whyChooseUsData } from "@/lib/data";

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-bg-light">
      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content - Accordion */}
        <div className="space-y-8 order-2 lg:order-1">
          <Badge variant="outline" className="bg-white">Why Choose Us?</Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-dark">
            Leading with Heart and Expertise
          </h2>
          <Accordion items={whyChooseUsData} defaultIndex={0} />
          <div className="pt-4">
            <Button withArrow>Book Appointment</Button>
          </div>
        </div>

        {/* Right Content - Feature Card Visual */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
           <Card className="max-w-md w-full bg-white p-8 relative overflow-hidden border-none shadow-xl">
               <Badge variant="orange" className="mb-6">MediNest</Badge>
               <h3 className="text-3xl font-bold font-display text-dark mb-4 leading-tight">
                   Outstanding Care for Every Patient
               </h3>
               <p className="text-gray-text mb-8">
                   We are committed to medical excellence and human-centered care, ensuring the best outcomes for our community.
               </p>
               
               {/* Decorative Visual Element inside card */}
               <div className="h-48 bg-gray-50 rounded-2xl relative overflow-hidden flex items-end justify-center">
                    <div className="w-32 h-32 bg-primary/10 rounded-full blur-2xl absolute -bottom-10" />
                    <div className="text-primary font-bold text-lg mb-4 flex items-center gap-2">
                        <CheckCircle2 className="text-accent" /> Certified Care
                    </div>
               </div>
           </Card>
        </div>

      </div>
    </section>
  );
}
