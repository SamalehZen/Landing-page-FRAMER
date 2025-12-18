"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { doctors } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { buttonClasses } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function DoctorsTeam() {
  return (
    <section id="doctors" className="bg-gradient-to-br from-[#0c1f64] via-[#132c8b] to-[#3062ff] py-24 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Badge variant="ghost" className="bg-white/10 text-white">
              Expert Doctor's
            </Badge>
            <h2 className="mt-4 text-4xl font-semibold">
              Online Doctor Support, Always Available
            </h2>
            <p className="mt-3 text-white/80">
              Tap into an interdisciplinary collective ready for instant video, chat, or in-person follow-ups.
            </p>
          </div>
          <Link href="#contact" className={buttonClasses("ghost")}>
            View All Doctor's
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className={cn(
                "rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur",
                index === 0 && "xl:col-span-1",
              )}
            >
              <div
                className={cn(
                  "overflow-hidden rounded-[28px] border border-white/20",
                  index === 0 && "shadow-[0_30px_80px_rgba(0,0,0,0.35)]",
                )}
              >
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={420}
                  height={480}
                  className="h-72 w-full object-cover"
                />
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div>
                  <p className="text-xl font-semibold">{doctor.name}</p>
                  <p className="text-sm text-white/70">{doctor.specialty}</p>
                </div>
                <div className="ml-auto inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
                  <CheckCircle2 className="h-4 w-4 text-[#4dffb7]" />
                  {doctor.consults}
                </div>
              </div>
              <div className="mt-4 h-1 rounded-full bg-white/10">
                <div className="h-full rounded-full bg-gradient-to-r from-white to-transparent" style={{ width: "80%" }} />
              </div>
              <p className="mt-4 text-sm text-white/70">
                Always-on availability, shared diagnostics, and joyful bedside manner.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
