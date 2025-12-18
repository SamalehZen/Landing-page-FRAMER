import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      className={`bg-white rounded-2xl shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
}