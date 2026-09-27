import type { Metadata } from "next";
import Script from "next/script";
import { site } from "@/lib/site";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { WebSiteJsonLd } from "@/components/WebSiteJsonLd";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RealScoutWidget } from "@/components/RealScoutWidget";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Peccole Ranch Homes | Homes for Sale in Peccole Ranch, Las Vegas",
    template: `%s | ${site.name}`,
  },
  description:
    "Peccole Ranch Homes and Las Vegas real estate. Find homes for sale in Peccole Ranch, Summerlin. Local expertise for buyers and sellers.",
  keywords: [
    "Peccole Ranch Homes",
    "Peccole Ranch",
    "Peccole Ranch Las Vegas",
    "homes for sale Peccole Ranch",
    "Peccole Ranch real estate",
    "Summerlin real estate",
  ],
  openGraph: {
    title: "Peccole Ranch Homes | Homes for Sale in Peccole Ranch, Las Vegas",
    description: "Peccole Ranch Homes and Las Vegas real estate. Local expertise for buyers and sellers in Peccole Ranch, Summerlin.",
    url: site.baseUrl,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Peccole Ranch Homes — Las Vegas real estate in Summerlin",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL(site.baseUrl),
  twitter: {
    card: "summary_large_image",
    title: "Peccole Ranch Homes | Homes for Sale in Peccole Ranch, Las Vegas",
    description: "Peccole Ranch Homes and Las Vegas real estate. Local expertise for buyers and sellers in Peccole Ranch, Summerlin.",
    images: ["/opengraph-image"],
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    other: { "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://em.realscout.com" />
        <link rel="dns-prefetch" href="https://em.realscout.com" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="Site summary for AI and LLM crawlers (GEO)" />
        <LocalBusinessJsonLd />
        <WebSiteJsonLd />
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <RealScoutWidget />
        <Footer />
      </body>
    </html>
  );
}
