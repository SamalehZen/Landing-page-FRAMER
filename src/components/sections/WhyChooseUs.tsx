"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { buttonClasses } from "@/components/ui/Button";
import { partnerBadge, whyAccordion } from "@/lib/data";

export function WhyChooseUs() {
  return (
    <section id="why" className="bg-[var(--bg-light)] py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <Badge>Why Choose Us?</Badge>
          <h2 className="text-4xl font-semibold text-[var(--text-dark)]">
            Leading with Heart and Expertise
          </h2>
          <p className="text-lg text-[var(--text-gray)]">
            We choreograph every visit with anticipatory empathy, precise diagnostics, and integrated specialists across one platform.
          </p>
          <Link href="#contact" className={buttonClasses("outline")}>
            Book Appointment
          </Link>
          <div className="rounded-3xl border border-white/70 bg-white p-6 shadow-[0_30px_70px_rgba(15,23,42,0.1)]">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-orange)]/10 px-4 py-2 text-sm font-semibold text-[var(--accent-orange)]">
              {partnerBadge.pill}
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-[var(--text-dark)]">{partnerBadge.title}</h3>
            <p className="mt-2 text-sm text-[var(--text-gray)]">{partnerBadge.description}</p>
            <p className="mt-4 text-base text-[var(--text-gray)]">{partnerBadge.body}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {partnerBadge.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-[var(--border-gray)] p-4">
                  <p className="text-3xl font-semibold text-[var(--text-dark)]">{stat.value}</p>
                  <p className="text-sm text-[var(--text-gray)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <Accordion
            items={whyAccordion.map((item, index) => ({
              title: item.title,
              content: item.description,
              prefix: (index + 1).toString().padStart(2, "0"),
            }))}
            initialOpen={0}
          />
          <Link
            href="#services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary-blue)]"
          >
            Discover the CureNast method
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
