"use client";

import * as React from "react";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/lib/data";

export function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="blue">FAQ's</Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-dark">
            All Questions Answered <br /> Right Here
          </h2>
        </div>

        <Accordion items={faqs} />
      </div>
    </section>
  );
}
