import { site } from "@/lib/site";
import { Container } from "../ui/Container";
import { Logo } from "../ui/Logo";

const columns = [
  {
    title: "Product",
    links: [
      { label: "AI Agents", href: "#agents" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Token", href: "#token" },
      { label: "Roadmap", href: "#roadmap" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "X / Twitter", href: site.community.twitter, external: true },
      { label: "Telegram", href: site.community.telegram, external: true },
      { label: "Discord", href: site.community.discord, external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Disclaimer", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink2/60">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              The AI intelligence layer for crypto. Autonomous agents that analyze markets, discover opportunities
              and simplify the crypto economy.
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">Built on {site.chain}</p>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3.5">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">{col.title}</span>
              {col.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  {...("external" in l && l.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="w-fit text-sm text-muted transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-dim">
            © {new Date().getFullYear()} Neura Labs. All rights reserved.
          </p>
          <p className="max-w-md text-[12px] leading-relaxed text-dim">
            {site.ticker} is a platform utility token, not an investment product. Nothing on this page is financial
            advice — always do your own research.
          </p>
        </div>
      </Container>
    </footer>
  );
}
