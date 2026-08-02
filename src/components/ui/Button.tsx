import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "./cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-xl font-medium tracking-tight transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-accent to-violet text-white shadow-[0_0_24px_rgba(77,124,254,0.35)] hover:shadow-[0_0_44px_rgba(139,92,246,0.55)] hover:brightness-110 active:scale-[0.98]",
  secondary:
    "border border-line-strong bg-white/[0.03] text-white hover:border-white/30 hover:bg-white/[0.07] active:scale-[0.98] backdrop-blur-sm",
  ghost: "text-muted hover:text-white",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-[15px]",
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}) {
  return (
    <a className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </a>
  );
}
