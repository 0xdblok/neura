"use client";

import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const steps = [
  {
    n: "01",
    title: "Connect your wallet",
    copy: "Link your wallet in one click. No forms, no friction — just connect and go.",
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="18" height="13" rx="3" />
        <path d="M3 10h18" />
        <path d="M16 15h2" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Choose your AI agent",
    copy: "Pick Market Analyst, Research or Portfolio — or let Neura route you to the right agent.",
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="7" r="3.2" />
        <path d="M5.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
        <path d="M12 10.5V14" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Receive intelligent insights",
    copy: "Plain-language answers, alerts and opportunities — in the app or on Telegram.",
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L4.5 13.5H11L9.5 22 19 10h-6.5L13 2z" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative border-t border-line py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              From signal to insight in <span className="text-accent-gradient">three steps.</span>
            </>
          }
          subtitle="No dashboards to learn. No endless tabs. Neura collapses the workflow into a single conversation."
        />

        <div className="relative mt-16">
          {/* connector line (desktop) */}
          <svg
            className="absolute left-0 right-0 top-[52px] hidden h-2 w-full lg:block"
            preserveAspectRatio="none"
            viewBox="0 0 100 2"
            aria-hidden="true"
          >
            <line x1="4" y1="1" x2="96" y2="1" stroke="rgba(77,124,254,0.35)" strokeWidth="1.2" strokeDasharray="4 6" className="animate-dash" />
          </svg>

          <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.12}>
                <div className="group relative flex flex-col items-center gap-5 text-center">
                  {/* node */}
                  <div className="relative">
                    <span className="relative z-10 flex size-[104px] items-center justify-center rounded-2xl border border-line bg-surface text-accent-soft transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-[0_0_36px_rgba(77,124,254,0.25)]">
                      {s.icon}
                    </span>
                    <span className="absolute -right-2.5 -top-2.5 z-20 flex size-8 items-center justify-center rounded-full border border-line-strong bg-ink2 font-mono text-[11px] text-white">
                      {s.n}
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <h3 className="text-lg font-semibold tracking-[-0.015em] text-white">{s.title}</h3>
                    <p className="max-w-xs text-[15px] leading-relaxed text-muted">{s.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
