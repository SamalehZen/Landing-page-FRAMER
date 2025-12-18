"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { buttonClasses } from "@/components/ui/Button";
import { ctaIcons } from "@/lib/data";

const orbitPositions = [
  { top: "-5%", left: "50%" },
  { top: "20%", left: "85%" },
  { top: "70%", left: "80%" },
  { top: "85%", left: "35%" },
  { top: "40%", left: "-5%" },
];

export function CTA() {
  return (
    <section id="cta" className="bg-gradient-to-br from-[#0c1f64] via-[#132c8b] to-[#3062ff] py-24 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <Badge variant="ghost" className="bg-white/10 text-white">
            Get in touch
          </Badge>
          <h2 className="text-4xl font-semibold">Health Support from Expert Doctors</h2>
          <p className="text-white/80">
            Book an immersive consultation or send a secure message—CureNast is on your wavelength 24/7.
          </p>
          <Link href="#contact" className={buttonClasses("ghost")}>
            Find A Doctor
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <div className="flex flex-wrap gap-3">
            {ctaIcons.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm"
              >
                <Icon className="h-4 w-4" />
                {label}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative mx-auto aspect-square max-w-md">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20" />
            <div className="absolute inset-6 rounded-full border-2 border-dashed border-white/30" />
            <div className="absolute inset-12 rounded-full border border-white/40" />
            <div className="absolute inset-20 overflow-hidden rounded-full border border-white/20">
              <Image
                src="/images/hero-doctor-stack.jpg"
                alt="Surgical team"
                width={480}
                height={480}
                className="h-full w-full object-cover"
              />
            </div>
            {ctaIcons.map(({ label, icon: Icon }, index) => (
              <span
                key={`${label}-orbit`}
                className="absolute flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur"
                style={orbitPositions[index]}
                aria-hidden="true"
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
