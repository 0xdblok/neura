"use client";

import { site } from "@/lib/site";
import { ButtonLink } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-line py-28 sm:py-40">
      {/* Backdrop */}
      <div className="bg-grid bg-grid-fade absolute inset-0 -z-20" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(77,124,254,0.18),transparent_70%)]" />
      <div className="absolute left-1/3 top-1/3 -z-10 h-[320px] w-[320px] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.16),transparent_70%)]" />

      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.03] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent-soft">
            <span className="size-1.5 rounded-full bg-accent animate-pulse-soft" />
            Early access · {site.ticker}
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-7 max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl">
            The future of crypto intelligence <span className="text-gradient">starts here.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Something important is being built. Join early — be part of the intelligence layer that the next
            generation of crypto investors runs on.
          </p>
        </Reveal>

        <Reveal delay={0.24} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href={site.buyUrl} size="lg">
            Buy Token
            <svg viewBox="0 0 24 24" className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </ButtonLink>
          <ButtonLink href={site.community.telegram} target="_blank" rel="noreferrer" variant="secondary" size="lg">
            Join Community
          </ButtonLink>
        </Reveal>

        <Reveal delay={0.32}>
          <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-dim">
            Autonomous agents · {site.chain} · Always learning
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
