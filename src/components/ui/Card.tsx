import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

export { Card };
