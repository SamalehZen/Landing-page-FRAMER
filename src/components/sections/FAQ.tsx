"use client";

import { motion } from "framer-motion";
import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { faqItems } from "@/lib/data";

export function FAQ() {
  return (
    <section id="faq" className="bg-[var(--bg-light)] py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Badge>FAQ's</Badge>
          <h2 className="mt-4 text-4xl font-semibold text-[var(--text-dark)]">
            All Questions Answered Right Here
          </h2>
        </motion.div>
        <Accordion
          items={faqItems.map((item, index) => ({
            title: item.question,
            content: item.answer,
            prefix: `/${(index + 1).toString().padStart(2, "0")}`,
          }))}
          initialOpen={0}
        />
      </div>
    </section>
  );
}
