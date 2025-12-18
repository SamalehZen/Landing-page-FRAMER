import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "light" | "dark" | "accent" | "ghost";
  className?: string;
};

const variants = {
  light:
    "bg-white text-[var(--primary-blue)] shadow-[0_10px_30px_rgba(19,68,254,0.12)]",
  dark: "bg-[var(--text-dark)] text-white",
  accent:
    "bg-[var(--accent-orange)] text-white shadow-[0_10px_30px_rgba(255,98,58,0.2)]",
  ghost: "border border-white/30 bg-white/10 text-white",
};

export function Badge({ children, variant = "light", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
