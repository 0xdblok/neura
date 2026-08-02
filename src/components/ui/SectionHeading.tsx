import type { ReactNode } from "react";
import { cn } from "./cn";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-soft">
        <span className="size-1.5 rounded-full bg-accent animate-pulse-soft" />
        {eyebrow}
      </span>
      <h2 className="max-w-2xl text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-4xl md:text-[44px]">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">{subtitle}</p>
      ) : null}
    </Reveal>
  );
}
