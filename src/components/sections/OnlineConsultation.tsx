"use client";

import { motion } from "framer-motion";
import { Heart, Mic, PhoneOff, Plus, Settings, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { buttonClasses } from "@/components/ui/Button";
import { consultationHighlights } from "@/lib/data";

export function OnlineConsultation() {
  return (
    <section id="consult" className="bg-gradient-to-br from-[#0e0dff] via-[#4c3dfc] to-[#964bff] py-24 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <Badge variant="ghost" className="bg-white/15 text-white">
            Consult Online
          </Badge>
          <h2 className="text-4xl font-semibold">Online Doctor Support, Always Available</h2>
          <p className="text-lg text-white/80">
            Secure glassmorphism rooms with collaborative notes, screen sharing, and AI-assisted summaries after every visit.
          </p>
          <div className="space-y-4">
            {consultationHighlights.map((highlight) => (
              <div key={highlight.title} className="flex gap-4 rounded-3xl border border-white/15 bg-white/10 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <highlight.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">{highlight.title}</p>
                  <p className="text-sm text-white/80">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="#contact" className={buttonClasses("ghost")}>
            Start a Live Session
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -left-6 top-1/3 flex flex-col gap-3">
            {[Settings, Heart, Plus].map((Icon) => (
              <span key={Icon.name} className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                <Icon className="h-5 w-5" />
              </span>
            ))}
          </div>
          <div className="rounded-[40px] border border-white/15 bg-white/10 p-6 shadow-[0_35px_80px_rgba(8,0,50,0.4)] backdrop-blur">
            <div className="rounded-[28px] border border-white/20 bg-white/10 p-4">
              <Image
                src="/images/patient-consult.jpg"
                alt="Live consultation"
                width={520}
                height={420}
                className="h-80 w-full rounded-[24px] object-cover"
              />
            </div>
            <div className="mt-4 flex items-center gap-4">
              <Image
                src="/images/hero-doctor-secondary.jpg"
                alt="Dr. Samuel Kim"
                width={64}
                height={64}
                className="h-16 w-16 rounded-2xl object-cover"
              />
              <div>
                <p className="text-lg font-semibold">Dr. Samuel Kim</p>
                <p className="text-sm text-white/70">Cardiologist · Live</p>
              </div>
              <div className="ml-auto flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <Video className="h-5 w-5" />
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <Mic className="h-5 w-5" />
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-orange)] text-white">
                  <PhoneOff className="h-5 w-5" />
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
