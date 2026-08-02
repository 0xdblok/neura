"use client";

import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { ButtonLink } from "../ui/Button";
import { Container } from "../ui/Container";

/* ————————————————————————————————————————
   Live insight feed items (cycling)
———————————————————————————————————————— */
const insights = [
  { tag: "Analyst", text: "ETH narrative shift detected — accumulation pattern across top 50 wallets." },
  { tag: "Research", text: "New opportunity: AI-agent L2 clusters showing early momentum on Robinhood Chain." },
  { tag: "Portfolio", text: "Flagged: 3 holdings share correlated exposure to a single liquidity pool." },
  { tag: "Analyst", text: "BTC dominance rotating — watch the DeFi re-entry window this week." },
];

const agents = [
  { name: "Market Analyst", role: "Markets", status: "online" },
  { name: "Research Agent", role: "Research", status: "online" },
  { name: "Portfolio Assistant", role: "Portfolio", status: "standby" },
];

const ease: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

/* ————————————————————————————————————————
   Animated sparkline
———————————————————————————————————————— */
function Sparkline() {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 320 84" className="h-20 w-full" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4d7cfe" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#4d7cfe" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="spark-line" x1="0" y1="0" x2="320" y2="0">
          <stop stopColor="#4d7cfe" />
          <stop offset="1" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      <path
        d="M0 62 C 24 58, 36 44, 56 46 S 88 60, 108 52 S 140 24, 164 28 S 198 52, 220 40 S 256 12, 282 18 S 306 30, 320 22"
        stroke="url(#spark-line)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {reduce ? null : (
        <motion.path
          d="M0 62 C 24 58, 36 44, 56 46 S 88 60, 108 52 S 140 24, 164 28 S 198 52, 220 40 S 256 12, 282 18 S 306 30, 320 22 L 320 84 L 0 84 Z"
          fill="url(#spark-fill)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
        />
      )}
      <motion.circle
        cx="320"
        cy="22"
        r="3.5"
        fill="#a78bfa"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.4 }}
      />
      <motion.circle cx="320" cy="22" r="8" stroke="#a78bfa" strokeWidth="1" opacity="0.4" initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 1.8 }} />
    </svg>
  );
}

/* ————————————————————————————————————————
   Command center panel
———————————————————————————————————————— */
function CommandCenter() {
  const [idx, setIdx] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % insights.length), 3000);
    return () => clearInterval(t);
  }, [reduce]);

  const current = insights[idx];

  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      {/* Glow behind panel */}
      <div className="absolute -inset-10 -z-10 rounded-[40px] bg-[radial-gradient(closest-side,rgba(77,124,254,0.28),transparent_70%)] blur-2xl" />
      <div className="absolute -inset-10 -z-10 translate-x-8 translate-y-6 rounded-[40px] bg-[radial-gradient(closest-side,rgba(139,92,246,0.22),transparent_70%)] blur-2xl" />

      {/* Rotating conic ring */}
      <div className="pointer-events-none absolute -inset-6 -z-10 opacity-60">
        <div
          className="size-full rounded-[36px] animate-spin-slow"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0%, rgba(77,124,254,0.28) 12%, transparent 26%, transparent 50%, rgba(139,92,246,0.25) 62%, transparent 76%)",
          }}
        />
      </div>

      {/* Panel */}
      <div className="glass hairline relative overflow-hidden rounded-2xl">
        {/* Scanline */}
        {reduce ? null : (
          <div className="animate-scan pointer-events-none absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-accent/[0.06] to-transparent" />
        )}

        {/* Titlebar */}
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex shrink-0 gap-1.5">
              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span className="size-2.5 rounded-full bg-[#febc2e]" />
              <span className="size-2.5 rounded-full bg-[#28c840]" />
            </div>
            <span className="truncate font-mono text-[11px] tracking-tight text-dim">neura://command-center</span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-accent-soft">
            <span className="size-1.5 rounded-full bg-accent animate-pulse-soft" />
            Live
          </span>
        </div>

        {/* Body */}
        <div className="grid gap-4 p-4 sm:grid-cols-[150px_1fr] sm:p-5">
          {/* Agent list */}
          <div className="flex flex-col gap-2">
            {agents.map((a) => (
              <div
                key={a.name}
                className="flex items-center justify-between gap-1 rounded-xl border border-line bg-white/[0.02] px-3 py-2 sm:justify-start sm:flex-col sm:items-start sm:flex-none sm:py-2.5"
              >
                <span className="flex items-center gap-1.5">
                  <span
                    className={`size-1.5 shrink-0 rounded-full ${
                      a.status === "online" ? "bg-emerald-400" : "bg-amber-400"
                    } animate-pulse-soft`}
                  />
                  <span className="text-[11px] font-medium leading-tight text-white sm:block">{a.name}</span>
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-dim">{a.role}</span>
              </div>
            ))}
          </div>

          {/* Insight feed */}
          <div className="relative flex min-h-[132px] flex-col rounded-xl border border-line bg-ink2/60 p-3.5">
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-dim">Live insight stream</span>
            <div className="relative mt-3 flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={idx}
                  initial={reduce ? undefined : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="flex h-full flex-col gap-2.5"
                >
                  <span className="inline-flex w-fit items-center rounded-md border border-accent/25 bg-accent/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-accent-soft">
                    {current.tag}
                  </span>
                  <p className="text-[13px] leading-relaxed text-white/90">{current.text}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Sparkline footer */}
        <div className="border-t border-line px-4 py-3 sm:px-5">
          <div className="mb-1 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em] text-dim">
            <span>Market intelligence · 24h</span>
            <span className="text-emerald-400">▲ +2.4%</span>
          </div>
          <Sparkline />
        </div>
      </div>

      {/* Floating chips */}
      <div className="animate-float absolute -left-3 top-16 hidden sm:block lg:-left-10">
        <FloatingChip label="BTC +2.4%" accent />
      </div>
      <div className="animate-float-delayed absolute -right-3 top-40 hidden sm:block lg:-right-12">
        <FloatingChip label="Narrative shift detected" />
      </div>
      <div className="animate-float absolute -bottom-5 left-10 hidden sm:block" style={{ animationDelay: "1.6s" }}>
        <FloatingChip label="Portfolio risk: low" />
      </div>
    </div>
  );
}

function FloatingChip({ label, accent = false }: { label: string; accent?: boolean }) {
  return (
    <span
      className={`glass hairline inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-[10px] ${
        accent ? "text-emerald-300" : "text-white/80"
      }`}
    >
      <span className={`size-1 rounded-full ${accent ? "bg-emerald-400" : "bg-accent"}`} />
      {label}
    </span>
  );
}

/* ————————————————————————————————————————
   Hero
———————————————————————————————————————— */
export function Hero() {
  const reduce = useReducedMotion();
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
  };

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Backdrop */}
      <div className="bg-grid bg-grid-fade absolute inset-0 -z-20" />
      <div className="absolute -top-40 left-1/2 -z-10 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(77,124,254,0.16),transparent_70%)]" />
      <div className="absolute top-40 -left-40 -z-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.12),transparent_70%)]" />
      <div className="absolute top-64 -right-40 -z-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(77,124,254,0.1),transparent_70%)]" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          {/* Copy */}
          <motion.div variants={container} initial={reduce ? false : "hidden"} animate="show" className="flex flex-col items-start gap-7">
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.03] px-4 py-2 text-[13px] text-muted">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent" />
                </span>
                Autonomous AI agents · {site.chain}
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-[44px] font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl lg:text-[68px]"
            >
              Your <span className="text-gradient">AI Intelligence Layer</span> for Crypto.
            </motion.h1>

            <motion.p variants={item} className="max-w-lg text-lg leading-relaxed text-muted sm:text-xl">
              Autonomous AI agents that analyze markets, discover opportunities and help you navigate the crypto
              economy — in plain language.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap items-center gap-4">
              <ButtonLink href={site.buyUrl} size="lg">
                Buy Token
                <svg viewBox="0 0 24 24" className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </ButtonLink>
              <ButtonLink href={site.community.telegram} target="_blank" rel="noreferrer" variant="secondary" size="lg">
                Join Community
              </ButtonLink>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
              {["Real-time analysis", "Multi-chain coverage", "24/7 agents"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <span className="size-1 rounded-full bg-accent/70" />
                  {t}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease }}
          >
            <CommandCenter />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
