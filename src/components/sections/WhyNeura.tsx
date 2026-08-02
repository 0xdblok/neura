"use client";

import { motion } from "framer-motion";
import { whyPoints } from "@/lib/site";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const icons: Record<string, React.ReactNode> = {
  "AI Native": (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
    </svg>
  ),
  Simple: (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 17l5-6 4 3 7-9" />
      <path d="M15 5h5v5" />
    </svg>
  ),
  "Always Available": (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  ),
  "Community Powered": (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3.2" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M3.5 19c0-3 2.4-5 5.5-5s5.5 2 5.5 5" />
      <path d="M15.5 14.4c2.6.2 4.5 2 4.5 4.6" />
    </svg>
  ),
};

export function WhyNeura() {
  return (
    <section id="why" className="relative border-t border-line py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <Container>
        <SectionHeading
          eyebrow="Why Neura"
          title={
            <>
              Built different, <span className="text-accent-gradient">on purpose.</span>
            </>
          }
          subtitle="Four principles shape everything we build. They're why this isn't just another token website — it's a platform."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {whyPoints.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="h-full">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface/70 p-7 transition-colors duration-300 hover:border-line-strong"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full bg-gradient-to-b from-accent/15 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <span className="inline-flex size-12 items-center justify-center rounded-xl border border-line bg-ink2 text-accent-soft">
                  {icons[p.title]}
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-white">{p.title}</h3>
                <p className="mt-2 max-w-md text-[15px] leading-relaxed text-muted">{p.copy}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
