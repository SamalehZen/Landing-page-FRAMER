"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { aboutHighlights } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { buttonClasses } from "@/components/ui/Button";

const doctorOrbit = [
  { src: "/images/doctor-emily.jpg", top: "-5%", left: "15%" },
  { src: "/images/doctor-maya.jpg", top: "0%", left: "70%" },
  { src: "/images/doctor-alex.jpg", top: "60%", left: "5%" },
  { src: "/images/doctor-cynthia.jpg", top: "55%", left: "70%" },
];

export function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-16 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <Badge>About CureNast</Badge>
          <h2 className="text-4xl font-semibold text-[var(--text-dark)]">
            Trusted care, naturally delivered
          </h2>
          <p className="text-lg text-[var(--text-gray)]">
            We reimagined the medical visit with hospitality cues, botanicals, and sensory design so every touchpoint feels grounding while our team delivers gold-standard diagnostics.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {aboutHighlights.map((highlight) => (
              <div key={highlight.value} className="rounded-3xl border border-[var(--border-gray)] p-6">
                <p className="text-3xl font-semibold text-[var(--text-dark)]">{highlight.value}</p>
                <p className="mt-2 text-sm text-[var(--text-gray)]">{highlight.label}</p>
              </div>
            ))}
          </div>
          <Link href="#why" className={buttonClasses()}>
            More About Us
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square"
        >
          <div className="absolute inset-0 rounded-full border-[12px] border-dashed border-[#dbe3ff]" />
          <div className="absolute inset-8 rounded-full border-[12px] border-dashed border-[#fddbcf]" />
          <div className="absolute inset-20 flex flex-col items-center justify-center rounded-full bg-[var(--bg-light)] p-10 text-center shadow-inner">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-gray)]">Holistic Core</p>
            <p className="mt-4 text-2xl font-semibold text-[var(--text-dark)]">
              Clinical expertise meets calming rituals
            </p>
          </div>
          {doctorOrbit.map((doctor) => (
            <Image
              key={doctor.src}
              src={doctor.src}
              alt="CureNast doctor"
              width={140}
              height={140}
              className="absolute h-24 w-24 rounded-full border-4 border-white object-cover shadow-lg"
              style={{ top: doctor.top, left: doctor.left }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
