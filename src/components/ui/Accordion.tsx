"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onClick?: () => void;
  number?: string; // Optional number like "01", "02"
}

export function AccordionItem({ title, children, isOpen, onClick, number }: AccordionItemProps) {
  return (
    <div className="border-b border-border-gray py-4">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between text-left focus:outline-none group"
      >
        <div className="flex items-center gap-4">
           {number && <span className="text-primary font-medium">{number}</span>}
           <span className={cn("text-lg font-medium", isOpen ? "text-primary" : "text-dark group-hover:text-primary transition-colors")}>
             {title}
           </span>
        </div>
        <div className={cn("flex items-center justify-center w-8 h-8 rounded-full transition-colors", isOpen ? "bg-primary text-white" : "bg-gray-100 text-dark")}>
           {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 text-gray-text leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Accordion({ items, defaultIndex = 0 }: { items: { title: string; content: React.ReactNode; number?: string }[], defaultIndex?: number | null }) {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(defaultIndex);

  return (
    <div className="w-full space-y-2">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          number={item.number}
          isOpen={activeIndex === index}
          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
