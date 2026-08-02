"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { cn } from "../ui/cn";
import { Logo } from "../ui/Logo";

const links = [
  { label: "Agents", href: "#agents" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Token", href: "#token" },
  { label: "Roadmap", href: "#roadmap" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b border-line" : "border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label="Neura home" className="rounded-lg">
          <Logo />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3.5 py-2 text-sm text-muted transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.community.telegram}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:text-white"
          >
            Join Community
          </a>
          <a
            href={site.buyUrl}
            className="inline-flex h-9 items-center rounded-lg bg-gradient-to-r from-accent to-violet px-4 text-sm font-medium text-white shadow-[0_0_18px_rgba(77,124,254,0.35)] transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:brightness-110"
          >
            Buy Token
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex size-10 items-center justify-center rounded-lg border border-line text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-line bg-ink2/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-[15px] text-muted hover:text-white"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-2 flex gap-3">
                <a
                  href={site.community.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 flex-1 items-center justify-center rounded-xl border border-line-strong text-sm text-white"
                >
                  Join Community
                </a>
                <a
                  href={site.buyUrl}
                  className="flex h-11 flex-1 items-center justify-center rounded-xl bg-gradient-to-r from-accent to-violet text-sm font-medium text-white"
                >
                  Buy Token
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
