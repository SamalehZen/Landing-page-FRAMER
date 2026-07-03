"use client";

import * as React from "react";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
         {/* Fix for Next/Image src in demo: I will map the images to a placeholder here to avoid broken images if local files missing */}
         <TestimonialCarousel testimonials={testimonials.map(t => ({...t, image: `https://placehold.co/400x400/e7e7e7/1b123d?text=${t.author.charAt(0)}`}))} />
      </div>
    </section>
  );
}
