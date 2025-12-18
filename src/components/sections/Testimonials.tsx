"use client";

import { Badge } from "@/components/ui/Badge";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { testimonials } from "@/lib/data";
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="accent">Testimonials</Badge>
          <h2 className="mt-4 text-4xl font-semibold text-[var(--text-dark)]">Care stories told with gratitude</h2>
        </motion.div>
        <TestimonialCarousel items={testimonials} />
      </div>
    </section>
  );
}
