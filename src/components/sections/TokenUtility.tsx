"use client";

import { utilities, site } from "@/lib/site";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const flow = [
  {
    label: "NEURA",
    sub: "The access key",
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7v10M9.2 9.4c0-1 1.2-1.7 2.8-1.7s2.8.7 2.8 1.7c0 2.6-5.6 1.4-5.6 4 0 1 1.2 1.7 2.8 1.7s2.8-.7 2.8-1.7" />
      </svg>
    ),
  },
  {
    label: "AI Agents",
    sub: "Powers intelligence",
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
      </svg>
    ),
  },
  {
    label: "Usage",
    sub: "Credits & features",
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L4.5 13.5H11L9.5 22 19 10h-6.5L13 2z" />
      </svg>
    ),
  },
  {
    label: "Ecosystem Growth",
    sub: "Rewards & value",
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l5-6 4 3 6-8" />
        <path d="M15 6h3v3" />
      </svg>
    ),
  },
];

export function TokenUtility() {
  return (
    <section id="token" className="relative overflow-hidden border-t border-line py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-violet/40 to-transparent" />
      <div className="absolute left-1/2 top-24 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.1),transparent_70%)]" />

      <Container>
        <SectionHeading
          eyebrow="Token utility"
          title={
            <>
              One token. <span className="text-gradient">The entire intelligence layer.</span>
            </>
          }
          subtitle={`NEURA is the fuel that runs the Neura ecosystem — access, usage and growth, all in one asset.`}
        />

        {/* Flow visual */}
        <Reveal className="mt-16">
          <div className="relative">
            {/* horizontal connector (desktop) */}
            <svg
              className="absolute left-[12%] right-[12%] top-1/2 hidden h-2 w-[76%] -translate-y-1/2 lg:block"
              preserveAspectRatio="none"
              viewBox="0 0 100 2"
              aria-hidden="true"
            >
              <line x1="0" y1="1" x2="100" y2="1" stroke="rgba(139,92,246,0.35)" strokeWidth="1.2" strokeDasharray="4 6" className="animate-dash" />
            </svg>
            {/* vertical connector (mobile) */}
            <svg
              className="absolute left-1/2 top-[10%] h-[80%] w-2 -translate-x-1/2 lg:hidden"
              preserveAspectRatio="none"
              viewBox="0 0 2 100"
              aria-hidden="true"
            >
              <line x1="1" y1="0" x2="1" y2="100" stroke="rgba(139,92,246,0.3)" strokeWidth="1.2" strokeDasharray="4 6" className="animate-dash" />
            </svg>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {flow.map((f, i) => (
                <Reveal key={f.label} delay={i * 0.1}>
                  <div className="group relative flex flex-col items-center gap-4 rounded-2xl border border-line bg-surface/70 p-6 text-center transition-all duration-300 hover:border-accent/35 hover:shadow-[0_0_40px_rgba(77,124,254,0.12)]">
                    <span className="flex size-14 items-center justify-center rounded-2xl border border-line bg-gradient-to-b from-accent/20 to-violet/10 text-accent-soft transition-transform duration-300 group-hover:scale-105">
                      {f.icon}
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-dim">{f.sub}</span>
                      <span className="text-[15px] font-semibold text-white">{f.label}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Utility chips */}
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {utilities.map((u, i) => (
            <Reveal key={u.title} delay={i * 0.06}>
              <div className="flex h-full flex-col gap-2 rounded-xl border border-line bg-white/[0.02] p-4 transition-colors duration-300 hover:border-accent/30 hover:bg-accent/[0.04]">
                <span className="text-sm font-medium text-white">{u.title}</span>
                <span className="text-[13px] leading-relaxed text-muted">{u.copy}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-8 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
            {site.ticker} · powered by {site.chain}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
