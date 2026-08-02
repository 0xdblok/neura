"use client";

import { roadmap } from "@/lib/site";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const statusStyle: Record<string, string> = {
  Building: "border-accent/30 bg-accent/10 text-accent-soft",
  Next: "border-violet/30 bg-violet/10 text-glow",
  Horizon: "border-line-strong bg-white/[0.04] text-muted",
};

export function Roadmap() {
  return (
    <section id="roadmap" className="relative border-t border-line py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <Container>
        <SectionHeading
          eyebrow="Roadmap"
          title={
            <>
              A clear path, <span className="text-accent-gradient">delivered in phases.</span>
            </>
          }
          subtitle="We ship in public. Here's how Neura goes from launch to an open agent ecosystem."
        />

        <div className="relative mt-16 grid gap-5 lg:grid-cols-3">
          {/* desktop spine */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-accent/50 via-violet/40 to-transparent lg:block" />

          {roadmap.map((r, i) => (
            <Reveal key={r.phase} delay={i * 0.12} className="h-full">
              <div className="group relative flex h-full flex-col gap-5 rounded-2xl border border-line bg-surface/70 p-6 transition-colors duration-300 hover:border-line-strong">
                {/* phase node */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="flex size-7 items-center justify-center rounded-full border border-line-strong bg-ink2 font-mono text-[10px] text-white">
                    {i + 1}
                  </span>
                  <span className={`rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] ${statusStyle[r.status]}`}>
                    {r.status}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-dim">{r.phase}</span>
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">{r.title}</h3>
                </div>

                <ul className="flex flex-col gap-2.5">
                  {r.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[14px] text-muted">
                      <span className="size-1.5 shrink-0 rounded-full bg-accent/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
