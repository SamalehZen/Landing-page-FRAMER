import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "white-outline" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
  withArrow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", withArrow = false, children, ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-white hover:bg-opacity-90 border border-transparent",
      outline: "bg-transparent border border-dark text-dark hover:bg-gray-50",
      "white-outline": "bg-transparent border border-white text-dark hover:bg-white/10", // white border, usually on dark bg? Wait, user said border white.
      ghost: "bg-transparent hover:bg-gray-100 text-dark",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
      icon: "p-2 aspect-square flex items-center justify-center", // for the separate arrow button
    };

    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

    // Special handling for the split button look if needed, but for now standard button
    
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
        {withArrow && (
          <span className="ml-2 bg-primary rounded-full p-1 text-white inline-flex items-center justify-center">
             <ArrowUpRight size={16} />
          </span>
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
