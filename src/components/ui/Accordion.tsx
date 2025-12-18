'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItem {
  id: number;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: number;
  showNumbers?: boolean;
}

export default function Accordion({ items, defaultOpen = 0, showNumbers = false }: AccordionProps) {
  const [openItem, setOpenItem] = useState<number | null>(defaultOpen);

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="border border-gray-200 rounded-2xl overflow-hidden">
          <button
            onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center space-x-4">
              {showNumbers && (
                <span className="text-[#1344fe] font-bold text-lg">
                  /{String(item.id).padStart(2, '0')}
                </span>
              )}
              <span className="font-medium text-[#1b123d]">{item.question}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                {openItem === item.id ? (
                  <ChevronUp className="w-4 h-4 text-[#1b123d]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#1b123d]" />
                )}
              </div>
            </div>
          </button>
          
          <AnimatePresence>
            {openItem === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-[#636977]">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}