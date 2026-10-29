import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "peccolehomes.com" }],
        destination: "https://www.peccolehomes.com/:path*",
        permanent: true,
      },
      { source: "/sell", destination: "/sellers", permanent: true },
      { source: "/buy", destination: "/buyers", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src https://d1buiexcd5gara.cloudfront.net https://widgetbe.com https://*.widgetbe.com 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://*.realscout.com https://assets.calendly.com https://*.google.com https://*.googleapis.com https://*.gstatic.com",
              "connect-src https://d1buiexcd5gara.cloudfront.net https://widgetbe.com https://*.widgetbe.com 'self' blob: https://em.realscout.com https://www.realscout.com https://*.realscout.com https://calendly.com https://*.calendly.com https://*.google.com https://*.googleapis.com https://*.gstatic.com wss: https:",
              "img-src https://d1buiexcd5gara.cloudfront.net https://widgetbe.com https://*.widgetbe.com 'self' data: https: blob:",
              "style-src https://widgetbe.com https://d1buiexcd5gara.cloudfront.net 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.googleapis.com https://*.gstatic.com https://assets.calendly.com",
              "font-src https://widgetbe.com https://d1buiexcd5gara.cloudfront.net 'self' https://fonts.gstatic.com https://fonts.googleapis.com data:",
              "frame-src https://d1buiexcd5gara.cloudfront.net https://widgetbe.com https://*.widgetbe.com 'self' blob: https://em.realscout.com https://www.realscout.com https://calendly.com https://www.google.com https://maps.google.com https://*.google.com https://*.googleapis.com https://maps.googleapis.com",
              "worker-src 'self' blob:",
              "child-src 'self' blob: https://em.realscout.com https://www.realscout.com https://calendly.com https://www.google.com https://*.google.com https://*.googleapis.com",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
