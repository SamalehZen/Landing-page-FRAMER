import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  showArrow = false,
  className = '',
  onClick,
  disabled,
  type = 'button'
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200";
  
  const variants = {
    primary: "bg-[#1344fe] text-white hover:bg-blue-600",
    outline: "border-2 border-[#1b123d] text-[#1b123d] hover:bg-[#1b123d] hover:text-white",
    ghost: "text-[#1b123d] hover:bg-gray-100"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
      {showArrow && <ArrowRight className="ml-2 w-4 h-4" />}
    </motion.button>
  );
}