import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Neura — Your AI Intelligence Layer for Crypto",
    template: "%s · Neura",
  },
  description: site.description,
  keywords: [
    "Neura",
    "AI crypto agent",
    "crypto AI",
    "Robinhood Chain",
    "AI intelligence layer",
    "crypto analysis AI",
    "web3 AI agents",
    "crypto market intelligence",
  ],
  authors: [{ name: "Neura Labs" }],
  creator: "Neura Labs",
  openGraph: {
    type: "website",
    url: site.domain,
    siteName: "Neura",
    title: "Neura — Your AI Intelligence Layer for Crypto",
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neura — Your AI Intelligence Layer for Crypto",
    description: site.description,
    creator: "@neura_ai",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#05060a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Neura Labs",
      url: site.domain,
      description: site.description,
      sameAs: [site.community.twitter, site.community.telegram, site.community.discord],
    },
    {
      "@type": "WebSite",
      name: "Neura",
      url: site.domain,
      description: site.description,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-foreground">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
