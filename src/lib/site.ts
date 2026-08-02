/**
 * Central site configuration for Neura.
 * Update community links, token ticker, and URLs here — every section reads from this file.
 */

export const site = {
  name: "Neura",
  ticker: "NEURA",
  domain: "https://neura-ai.vercel.app", // TODO: replace with production domain
  tagline: "Your AI Intelligence Layer for Crypto.",
  description:
    "Neura is an AI-powered crypto intelligence platform on Robinhood Chain. Autonomous AI agents analyze markets, discover opportunities and simplify the crypto economy — for every investor.",
  vision: "Bring intelligent AI agents to every crypto investor.",

  chain: "Robinhood Chain",

  community: {
    twitter: "https://x.com/neura_ai", // TODO: real handle
    telegram: "https://t.me/neura_ai", // TODO: real group
    discord: "https://discord.gg/neura", // TODO: real invite
  },

  buyUrl: "#", // TODO: DEX / launchpad URL
} as const;

export const agents = [
  {
    id: "analyst",
    name: "AI Market Analyst",
    role: "Markets",
    description:
      "Analyzes narratives, trends and market movements across chains — turning noise into a clear read on where the market is going.",
    tags: ["Trend detection", "Narrative analysis", "Momentum signals"],
  },
  {
    id: "research",
    name: "AI Research Agent",
    role: "Research",
    description:
      "Finds opportunities and summarizes information. From token deep-dives to protocol reports, it does the reading so you don't have to.",
    tags: ["Opportunity scan", "Summary briefs", "Due diligence"],
  },
  {
    id: "portfolio",
    name: "AI Portfolio Assistant",
    role: "Portfolio",
    description:
      "Helps users understand their assets — exposure, risk and what to watch — in plain language, any time of day.",
    tags: ["Position insight", "Risk overview", "Plain-language answers"],
  },
] as const;

export const problemPoints = [
  {
    title: "Too much information",
    copy: "Thousands of posts, threads and reports every day. No one can read it all.",
  },
  {
    title: "Too many chains",
    copy: "L1s, L2s and rollups multiply faster than anyone can track them.",
  },
  {
    title: "Too many tools",
    copy: "Dashboards, bots and scanners — each one more complex than the last.",
  },
  {
    title: "Missed opportunities",
    copy: "The window between signal and action keeps shrinking.",
  },
] as const;

export const utilities = [
  { title: "Access premium AI agents", copy: "Unlock the full agent suite with tiered token access." },
  { title: "AI usage credits", copy: "Pay for advanced analysis with NEURA, not subscriptions." },
  { title: "Exclusive features", copy: "Early access to new agents and alpha tools." },
  { title: "Community rewards", copy: "Earn for contributing intelligence and growth." },
  { title: "Future ecosystem benefits", copy: "Governance, staking and marketplace roles ahead." },
] as const;

export const roadmap = [
  {
    phase: "Phase 1",
    title: "Launch",
    status: "Building",
    items: ["Token deployment", "Community building", "Website release", "Initial AI features"],
  },
  {
    phase: "Phase 2",
    title: "Expansion",
    status: "Next",
    items: ["More AI agents", "More integrations", "Better intelligence"],
  },
  {
    phase: "Phase 3",
    title: "Future Vision",
    status: "Horizon",
    items: ["AI agent marketplace", "Creator ecosystem", "Advanced automation"],
  },
] as const;

export const whyPoints = [
  {
    title: "AI Native",
    copy: "Built for the next generation of crypto users — agents as the interface, not afterthought dashboards.",
  },
  {
    title: "Simple",
    copy: "Complex markets, simplified by AI. Ask in plain language, get clear answers.",
  },
  {
    title: "Always Available",
    copy: "Markets never sleep. Neither do your agents — intelligence on call 24/7.",
  },
  {
    title: "Community Powered",
    copy: "Built with users, not at them. Early community shapes the roadmap and shares in growth.",
  },
] as const;
