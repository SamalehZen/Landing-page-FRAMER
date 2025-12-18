"use client";

import * as React from "react";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/lib/data";

export function FAQ() {
  return (
    <section className="py-32 bg-gray-50/50">
      <div className="container-custom max-w-4xl">
        <div className="text-center space-y-6 mb-20">
          <Badge variant="blue" className="bg-white border-blue-100">FAQ's</Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-dark tracking-tight">
            All Questions Answered <br /> <span className="text-gray-400">Right Here</span>
          </h2>
        </div>

        <div className="glass-card bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-100/50 border border-white">
            <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
