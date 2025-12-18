import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "blue" | "white" | "orange" | "outline";
}

export function Badge({ className, variant = "white", children, ...props }: BadgeProps) {
  const variants = {
    blue: "bg-primary/10 text-primary border border-primary/20",
    white: "bg-white text-dark border border-gray-100 shadow-sm",
    orange: "bg-accent/10 text-accent border border-accent/20",
    outline: "bg-transparent border border-gray-300 text-gray-text",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
