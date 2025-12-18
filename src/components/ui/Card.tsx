import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  hover?: boolean;
};

export function Card({ className, children, hover = true, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/40 bg-white/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur",
        hover && "transition-transform duration-300 hover:-translate-y-1",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
