import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variantStyles: Record<Variant, string> = {
  primary:
    "border-transparent bg-[var(--primary-blue)] text-white shadow-[0_20px_40px_rgba(19,68,254,0.25)] hover:-translate-y-0.5 hover:shadow-[0_25px_40px_rgba(19,68,254,0.35)] focus-visible:ring-[var(--primary-blue)]",
  secondary:
    "border-transparent bg-[var(--accent-orange)] text-white shadow-[0_20px_40px_rgba(255,98,58,0.25)] hover:-translate-y-0.5 hover:shadow-[0_25px_40px_rgba(255,98,58,0.35)] focus-visible:ring-[var(--accent-orange)]",
  outline:
    "border-[var(--text-dark)] text-[var(--text-dark)] hover:bg-[var(--text-dark)] hover:text-white focus-visible:ring-[var(--text-dark)]",
  ghost:
    "border-transparent bg-white/10 text-white backdrop-blur hover:bg-white/20 focus-visible:ring-white",
};

export function buttonClasses(variant: Variant = "primary") {
  return cn(baseStyles, variantStyles[variant]);
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => (
    <button ref={ref} className={cn(buttonClasses(variant), className)} {...props}>
      {children}
    </button>
  ),
);
Button.displayName = "Button";
