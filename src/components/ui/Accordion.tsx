"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type AccordionItem = {
  title: string;
  content: string;
  prefix?: string;
};

type AccordionProps = {
  items: AccordionItem[];
  initialOpen?: number;
  variant?: "light" | "ghost";
};

export function Accordion({ items, initialOpen = 0, variant = "light" }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState(initialOpen);

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        return (
          <div
            key={item.title}
            className={cn(
              "rounded-2xl border px-5 py-4 transition-colors",
              variant === "light"
                ? "border-white/50 bg-white/70 backdrop-blur"
                : "border-white/10 bg-white/5 text-white",
            )}
          >
            <button
              type="button"
              className="flex w-full items-center gap-4 text-left"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              {item.prefix && (
                <span
                  className={cn(
                    "text-sm font-semibold",
                    variant === "ghost" ? "text-white" : "text-[var(--primary-blue)]",
                  )}
                >
                  {item.prefix}
                </span>
              )}
              <span
                className={cn(
                  "flex-1 text-left text-lg font-semibold",
                  variant === "ghost" ? "text-white" : "text-[var(--text-dark)]",
                )}
              >
                {item.title}
              </span>
              <span
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border",
                  variant === "ghost"
                    ? "border-white/50 text-white"
                    : "border-[var(--border-gray)] text-[var(--primary-blue)]",
                )}
              >
                <Plus
                  className={cn(
                    "transition-transform duration-300",
                    isOpen ? "rotate-45" : "rotate-0",
                  )}
                />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  <p
                    className={cn(
                      "pt-4 text-sm leading-relaxed",
                      variant === "ghost" ? "text-white/80" : "text-[var(--text-gray)]",
                    )}
                  >
                    {item.content}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
