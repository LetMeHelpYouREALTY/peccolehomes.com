import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "peccolehomes.com" }],
        destination: "https://www.peccolehomes.com/:path*",
        permanent: true,
      },
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
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://*.realscout.com https://assets.calendly.com https://*.google.com https://*.googleapis.com https://*.gstatic.com",
              "connect-src 'self' blob: https://em.realscout.com https://www.realscout.com https://*.realscout.com https://*.google.com https://*.googleapis.com https://*.gstatic.com wss: https:",
              "img-src 'self' data: https: blob:",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.googleapis.com https://*.gstatic.com https://assets.calendly.com",
              "font-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com data:",
              "frame-src 'self' blob: https://em.realscout.com https://www.realscout.com https://calendly.com https://www.google.com https://maps.google.com https://*.google.com https://*.googleapis.com https://maps.googleapis.com",
              "worker-src 'self' blob:",
              "child-src 'self' blob: https://em.realscout.com https://www.realscout.com https://www.google.com https://*.google.com https://*.googleapis.com",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
