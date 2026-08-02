# Neura — Your AI Intelligence Layer for Crypto

Premium Web3 landing page for **Neura**, an AI-powered crypto intelligence platform built on Robinhood Chain.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4** (CSS-first theme)
- **Framer Motion** (scroll reveals, hero command center, chaos→order transformation)
- **Geist / Geist Mono** via `next/font`
- Deployed on **Vercel**

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
```

## Structure

```
src/
  app/            # layout, metadata/SEO, page assembly, icon
  components/
    ui/           # Container, Reveal, Button, SectionHeading, Logo
    nav/          # fixed glass navbar + mobile menu
    sections/     # Hero, Problem, Agents, HowItWorks, TokenUtility,
                  # WhyNeura, Roadmap, Community, FinalCta, Footer
  lib/site.ts     # ← ALL site config (links, token, copy, community URLs)
```

## Customize

Everything content-related lives in **`src/lib/site.ts`** — project name, ticker,
chain, community links, agent cards, roadmap, utilities. Update the real
community URLs, buy link and domain there before launch.

## Deploy

```bash
gh repo create neura --public --source . --push   # GitHub
vercel --prod                                     # Vercel
```
