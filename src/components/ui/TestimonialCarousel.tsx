"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  rating: number;
  image: string;
};

type Props = {
  items: Testimonial[];
};

const quoteVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export function TestimonialCarousel({ items }: Props) {
  const [index, setIndex] = useState(0);
  const active = items[index];

  const goTo = (dir: number) => {
    setIndex((prev) => (prev + dir + items.length) % items.length);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
      <div className="relative overflow-hidden rounded-[32px] border border-white/40 bg-white/80 p-10 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
        <Quote className="h-14 w-14 text-[var(--accent-orange)]" />
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            variants={quoteVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="mt-6 text-2xl font-medium italic text-[var(--text-dark)]"
          >
            “{active.quote}”
          </motion.blockquote>
        </AnimatePresence>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <div>
            <p className="text-lg font-semibold text-[var(--text-dark)]">{active.author}</p>
            <p className="text-sm text-[var(--text-gray)]">{active.role}</p>
          </div>
          <div className="ml-auto flex items-center gap-1 text-[var(--accent-orange)]">
            {Array.from({ length: 5 }).map((_, starIndex) => (
              <Star
                key={starIndex}
                className={cn(
                  "h-4 w-4",
                  starIndex + 1 <= Math.round(active.rating)
                    ? "fill-[var(--accent-orange)]"
                    : "stroke-[var(--accent-orange)] text-transparent",
                )}
              />
            ))}
            <span className="ml-2 text-sm font-semibold text-[var(--text-dark)]">
              {active.rating.toFixed(1)}
            </span>
          </div>
        </div>
        <div className="mt-10 flex items-center gap-3">
          <button
            aria-label="Previous testimonial"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-gray)] text-[var(--text-dark)] transition hover:bg-[var(--primary-blue)] hover:text-white"
            onClick={() => goTo(-1)}
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next testimonial"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-gray)] text-[var(--text-dark)] transition hover:bg-[var(--primary-blue)] hover:text-white"
            onClick={() => goTo(1)}
          >
            <ArrowRight className="h-5 w-5" />
          </button>
          <div className="ml-auto flex items-center gap-3 text-sm font-semibold text-[var(--text-gray)]">
            {items.map((_, dotIndex) => (
              <button
                key={dotIndex}
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full border",
                  dotIndex === index
                    ? "border-[var(--primary-blue)] text-[var(--primary-blue)]"
                    : "border-transparent text-[var(--text-gray)]",
                )}
                onClick={() => setIndex(dotIndex)}
                aria-label={`Go to testimonial ${dotIndex + 1}`}
              >
                {(dotIndex + 1).toString().padStart(2, "0")}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="relative ml-auto max-w-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.image}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="overflow-hidden rounded-[40px] border-4 border-white shadow-[0_40px_80px_rgba(15,23,42,0.2)]"
          >
            <Image
              src={active.image}
              alt={active.author}
              width={540}
              height={640}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
