import { useId } from "react";
import { cn } from "./cn";

/**
 * Neura brand mark — an AI orb with an orbiting satellite node.
 */
export function LogoMark({ className }: { className?: string }) {
  const id = useId();
  return (
    <svg viewBox="0 0 32 32" fill="none" className={cn("size-7", className)} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="4" y1="4" x2="28" y2="28">
          <stop stopColor="#4d7cfe" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="12.2" stroke={`url(#${id})`} strokeWidth="1.4" opacity="0.85" />
      <circle cx="16" cy="16" r="5.4" fill={`url(#${id})`} />
      <circle cx="16" cy="3.4" r="2.1" fill="#7aa2ff" />
      <circle cx="16" cy="3.4" r="4.6" stroke="#7aa2ff" strokeWidth="0.8" opacity="0.35" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="text-[17px] font-semibold tracking-[-0.02em] text-white">
        Neura<span className="text-accent-soft">.</span>
      </span>
    </span>
  );
}
