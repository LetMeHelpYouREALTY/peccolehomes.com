import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Script from "next/script";
import { site } from "@/lib/site";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { WebSiteJsonLd } from "@/components/WebSiteJsonLd";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Peccole Ranch Homes for Sale | Las Vegas",
    template: "%s",
  },
  description:
    "Peccole Ranch homes for sale in west Las Vegas, ZIP 89117. September 2026 median sold price was $595,000. Call (702) 500-0810.",
  metadataBase: new URL(site.baseUrl),
  robots: { index: true, follow: true },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    other: {
      "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <head>
        <link rel="preconnect" href="https://em.realscout.com" />
        <link rel="dns-prefetch" href="https://em.realscout.com" />
        <link
          rel="alternate"
          type="text/plain"
          href="/llms.txt"
          title="Site summary for AI and LLM crawlers"
        />
        <LocalBusinessJsonLd />
        <WebSiteJsonLd />
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-bg font-sans text-ink antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-bg focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
