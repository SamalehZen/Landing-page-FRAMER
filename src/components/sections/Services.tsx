"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { buttonClasses } from "@/components/ui/Button";

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-gradient-to-br from-[#1344fe] via-[#1c51ff] to-[#4f7dff] py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 text-white lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <Badge variant="ghost" className="bg-white/15 text-white">
              Services
            </Badge>
            <h2 className="mt-4 text-4xl font-semibold">Complete Health Care Solutions</h2>
            <p className="mt-3 max-w-2xl text-white/80">
              Every specialty is connected through a single record so your care team speaks one language—yours.
            </p>
          </div>
          <Link href="#services" className={buttonClasses("ghost")}>
            View All Services
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="rounded-3xl border border-white/30 bg-white/10 p-6 text-white backdrop-blur"
            >
              <div className={`mb-5 inline-flex rounded-2xl bg-gradient-to-br ${service.accent} p-4 text-[var(--primary-blue)]`}>
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm text-white/80">{service.description}</p>
              <button
                type="button"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                Explore More <ArrowUpRight className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
