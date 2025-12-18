"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Facebook, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { socialProof } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { buttonClasses } from "@/components/ui/Button";

const heroDoctors = [
  {
    name: "Dr. Samuel Kim",
    title: "Dermatologist",
    image: "/images/doctor-samuel.jpg",
  },
  {
    name: "Dr. Emily Davis",
    title: "Endocrinologist",
    image: "/images/doctor-emily.jpg",
  },
  {
    name: "Dr. Maya Kapoor",
    title: "Dermatologist",
    image: "/images/doctor-maya.jpg",
  },
];

const variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#f5f6f9,white)] pb-24 pt-32"
    >
      <div className="absolute inset-y-0 left-1/2 hidden w-1/2 bg-[radial-gradient(circle_at_20%_20%,rgba(19,68,254,0.15),transparent)] lg:block" />
      <motion.div
        className="mx-auto grid w-full max-w-6xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div variants={variants} className="space-y-8">
          <Badge className="w-fit">Precision care that actually listens</Badge>
          <div className="flex items-center gap-4 rounded-full bg-white p-3 shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
            <div className="flex items-center -space-x-3">
              {socialProof.avatars.map((avatar, index) => (
                <Image
                  key={avatar}
                  src={avatar}
                  alt="Happy patient"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full border-2 border-white object-cover"
                  style={{ zIndex: socialProof.avatars.length - index }}
                />
              ))}
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-dashed border-[var(--primary-blue)] bg-white text-sm font-semibold text-[var(--primary-blue)]">
                +
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-gray)]">Care stories</p>
              <p className="text-sm font-semibold text-[var(--text-dark)]">
                {socialProof.totalPatients} {socialProof.message}
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold text-[var(--text-dark)] sm:text-5xl lg:text-6xl">
              Wellness starts with care that really listens.
            </h1>
            <p className="text-lg text-[var(--text-gray)]">
              We blend clinical mastery with calm rituals, making every consultation feel human, precise, and future-ready.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="#services" className={buttonClasses("outline")}>
              Book an Appointment
            </Link>
            <Link
              href="#contact"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary-blue)] text-white shadow-[0_20px_40px_rgba(19,68,254,0.35)]"
              aria-label="Go to contact"
            >
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-[var(--text-gray)]">
            <div>
              <p className="text-3xl font-semibold text-[var(--text-dark)]">98%</p>
              <p>Patient satisfaction</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-[var(--text-dark)]">45k</p>
              <p>Virtual consults yearly</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-[var(--text-dark)]">24/7</p>
              <p>Care concierge</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={variants}
          className="relative grid gap-6"
        >
          <div className="absolute -left-10 top-4 h-24 w-24 rounded-full bg-[radial-gradient(circle,#ffb199,#ff623a)] blur-3xl" />
          <div className="absolute -right-4 bottom-10 h-20 w-20 rounded-full bg-[radial-gradient(circle,#8bbcff,#1344fe)] blur-3xl" />
          <div className="relative overflow-hidden rounded-[40px] border border-white/60 bg-white/80 p-6 shadow-[0_40px_80px_rgba(15,23,42,0.15)]">
            <div className="flex items-center gap-4">
              <Image
                src="/images/hero-doctor-main.jpg"
                alt="Lead doctor"
                width={520}
                height={640}
                priority
                className="h-72 w-full rounded-[30px] object-cover"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-[var(--text-dark)]">Dr. Samuel Kim</p>
                <p className="text-sm text-[var(--text-gray)]">Dermatologist</p>
              </div>
              <div className="flex items-center gap-1 text-[var(--primary-blue)]">
                <Star className="h-4 w-4 fill-[var(--primary-blue)]" />
                <span className="text-sm font-semibold">4.9</span>
              </div>
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {heroDoctors.map((doctor) => (
              <div key={doctor.name} className="rounded-3xl border border-white/40 bg-white/80 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
                <div className="flex items-center gap-4">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={80}
                    height={80}
                    className="h-16 w-16 rounded-2xl object-cover"
                  />
                  <div>
                    <p className="font-semibold text-[var(--text-dark)]">{doctor.name}</p>
                    <p className="text-xs text-[var(--text-gray)]">{doctor.title}</p>
                  </div>
                  <span className="ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary-blue)] text-white">
                    <Facebook className="h-4 w-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
