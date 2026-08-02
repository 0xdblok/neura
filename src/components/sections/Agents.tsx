"use client";

import { motion } from "framer-motion";
import { agents } from "@/lib/site";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

/* ————— Agent icons ————— */
function AgentIcon({ kind }: { kind: string }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "size-6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (kind === "analyst")
    return (
      <svg {...common}>
        <path d="M3 17l5-6 4 3 6-8" />
        <path d="M15 6h3v3" />
      </svg>
    );
  if (kind === "research")
    return (
      <svg {...common}>
        <circle cx="11" cy="11" r="6.5" />
        <path d="M15.5 15.5L20 20" />
        <path d="M8.5 11l1.8 1.8 3.4-3.6" />
      </svg>
    );
  return (
    <svg {...common}>
      <rect x="3" y="4" width="18" height="14" rx="3" />
      <path d="M3 9.5h18" />
      <circle cx="12" cy="16" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="16" cy="16" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const accentByAgent: Record<string, string> = {
  analyst: "from-accent/25 to-violet/20 text-accent-soft border-accent/25",
  research: "from-violet/25 to-glow/20 text-glow border-violet/30",
  portfolio: "from-accent/20 to-accent/5 text-accent-soft border-accent/25",
};

export function Agents() {
  return (
    <section id="agents" className="relative border-t border-line py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-violet/40 to-transparent" />
      <Container>
        <SectionHeading
          eyebrow="Meet your AI agents"
          title={
            <>
              A team of agents, <span className="text-gradient">working while you sleep.</span>
            </>
          }
          subtitle="Each agent is purpose-built to handle one slice of the crypto economy — so the whole market gets covered."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {agents.map((a, i) => (
            <Reveal key={a.id} delay={i * 0.1} className="h-full">
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-line bg-surface/70 p-6 transition-colors duration-300 hover:border-line-strong"
              >
                {/* hover glow */}
                <div
                  className={`pointer-events-none absolute -top-24 left-1/2 h-48 w-64 -translate-x-1/2 rounded-full bg-gradient-to-b opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 ${
                    a.id === "research" ? "from-violet/30 to-transparent" : "from-accent/30 to-transparent"
                  }`}
                />

                {/* icon */}
                <div className="relative">
                  <span
                    className={`relative inline-flex size-13 items-center justify-center rounded-2xl border bg-gradient-to-b ${accentByAgent[a.id]}`}
                  >
                    <AgentIcon kind={a.id} />
                    <span className="absolute -right-1 -top-1 size-2.5 rounded-full border-2 border-ink bg-emerald-400" />
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-dim">{a.role}</span>
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">{a.name}</h3>
                  <p className="text-[15px] leading-relaxed text-muted">{a.description}</p>
                </div>

                <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                  {a.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-line bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] tracking-tight text-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
