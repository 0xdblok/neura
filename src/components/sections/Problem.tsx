"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { problemPoints } from "@/lib/site";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

/* ————— Problem glyphs (small hand-drawn strokes) ————— */
function Glyph({ kind }: { kind: string }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "size-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (kind) {
    case "info":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M3 9h18M8 15h4" />
        </svg>
      );
    case "chains":
      return (
        <svg {...common}>
          <path d="M9 12h6M7 8l-4 4 4 4M17 8l4 4-4 4" />
          <circle cx="7" cy="8" r="2.4" />
          <circle cx="17" cy="8" r="2.4" />
          <circle cx="7" cy="16" r="2.4" />
          <circle cx="17" cy="16" r="2.4" />
        </svg>
      );
    case "tools":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M4 9h16M9 4v5" />
          <circle cx="15.5" cy="15.5" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="18.5" cy="12.5" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4l2.5 2.5" />
        </svg>
      );
  }
}

/* ————— Chaos → order visual ————— */
const CHIPS = [
  { left: "6%", top: "12%", label: "0x7f3…a9c", blue: true },
  { left: "24%", top: "6%", label: "tvl +12.4B", blue: false },
  { left: "46%", top: "10%", label: "whale_move", blue: true },
  { left: "68%", top: "5%", label: "token_listing", blue: false },
  { left: "86%", top: "14%", label: "apr +18%", blue: true },
  { left: "10%", top: "34%", label: "snapshot_prop", blue: false },
  { left: "30%", top: "30%", label: "funding_8h", blue: true },
  { left: "52%", top: "36%", label: "slippage 0.4%", blue: false },
  { left: "74%", top: "32%", label: "narrative:ai", blue: true },
  { left: "90%", top: "42%", label: "LP rebalance", blue: false },
  { left: "8%", top: "60%", label: "gas spike", blue: true },
  { left: "28%", top: "64%", label: "bridge_1.2k", blue: false },
  { left: "50%", top: "66%", label: "rumor: listing", blue: true },
  { left: "72%", top: "60%", label: "shorts 4.1k", blue: false },
  { left: "88%", top: "70%", label: "vol spike", blue: true },
  { left: "18%", top: "84%", label: "dao vote open", blue: false },
  { left: "44%", top: "86%", label: "yield farm", blue: true },
  { left: "70%", top: "88%", label: "liquidations", blue: false },
];

function TransformationVisual() {
  const reduce = useReducedMotion();
  const chipVariants: Variants = {
    hidden: { opacity: 1, scale: 1 },
    gone: { opacity: 0, scale: 0.4, transition: { duration: 0.5, ease: "easeIn" } },
  };

  return (
    <div className="relative mx-auto h-[380px] w-full max-w-[540px] overflow-hidden sm:h-[440px]">
      {/* container field */}
      <div className="hairline absolute inset-0 rounded-3xl bg-surface/60">
        <div className="bg-grid absolute inset-0 rounded-3xl opacity-60" />
      </div>

      {/* labels */}
      <span className="absolute left-5 top-4 font-mono text-[10px] uppercase tracking-[0.18em] text-dim">
        signal stream
      </span>
      <motion.span
        initial={reduce ? undefined : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute right-5 top-4 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-soft"
      >
        one assistant
      </motion.span>

      {/* scattered chips */}
      <motion.div
        className="absolute inset-0"
        {...(reduce ? {} : { initial: "hidden", whileInView: "gone" })}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.035, delayChildren: 0.25 }}
      >
        {CHIPS.map((c, i) => (
          <motion.span
            key={i}
            variants={chipVariants}
            className={`absolute rounded-lg border px-2.5 py-1.5 font-mono text-[10px] tracking-tight ${
              c.blue
                ? "border-accent/25 bg-accent/10 text-accent-soft"
                : "border-violet/25 bg-violet/10 text-glow"
            }`}
            style={{ left: c.left, top: c.top }}
          >
            {c.label}
          </motion.span>
        ))}
      </motion.div>

      {/* converging orb */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          {...(reduce ? {} : { initial: { scale: 0, opacity: 0 }, whileInView: { scale: 1, opacity: 1 } })}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.85, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative flex flex-col items-center gap-4"
        >
          {/* expanding rings */}
          {[0, 1, 2].map((r) => (
            <motion.span
              key={r}
              className="absolute top-1/2 left-1/2 -ml-16 -mt-16 size-32 rounded-full border border-accent/30"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={reduce ? undefined : { scale: [1, 2.1], opacity: [0.5, 0] }}
              transition={{ duration: 3.4, repeat: Infinity, delay: r * 1.1, ease: "easeOut" }}
            />
          ))}

          <div className="relative size-32 rounded-full bg-[radial-gradient(circle_at_32%_28%,#7aa2ff,#4d7cfe_45%,#6d3fd4_80%)] shadow-[0_0_70px_rgba(77,124,254,0.55)]">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_68%_72%,rgba(255,255,255,0.22),transparent_55%)]" />
          </div>
          <span className="rounded-full border border-line bg-ink2/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white">
            Neura
          </span>
        </motion.div>
      </div>
    </div>
  );
}

/* ————— Section ————— */
export function Problem() {
  return (
    <section id="problem" className="relative border-t border-line py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 lg:order-1">
            <TransformationVisual />
          </div>

          <div className="order-1 flex flex-col gap-10 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="The problem"
              title={
                <>
                  Crypto is becoming <span className="text-accent-gradient">impossible to follow.</span>
                </>
              }
              subtitle="The market doesn't wait while you catch up. Information, chains and tools keep multiplying — and every distraction is an opportunity someone else takes."
            />

            <div className="flex flex-col gap-3">
              {problemPoints.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.08}>
                  <div className="group flex items-start gap-4 rounded-2xl border border-line bg-white/[0.02] p-4 transition-colors duration-300 hover:border-accent/30 hover:bg-accent/[0.04]">
                    <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl border border-line bg-ink2 text-accent-soft">
                      <Glyph kind={p.title.includes("information") ? "info" : p.title.includes("chains") ? "chains" : p.title.includes("tools") ? "tools" : "time"} />
                    </span>
                    <div>
                      <h3 className="text-[15px] font-medium text-white">{p.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{p.copy}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <p className="border-l-2 border-accent pl-4 text-[15px] leading-relaxed text-white/85">
                The signal is buried. <span className="text-accent-soft">Neura digs it out</span> — and hands it to you
                as one clear answer.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
