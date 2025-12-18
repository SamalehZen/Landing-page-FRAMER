import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'accent';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: "bg-white text-[#1b123d] border border-gray-200",
    accent: "bg-[#ff623a] text-white"
  };

  return (
    <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}