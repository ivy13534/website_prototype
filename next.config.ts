import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig & { turbopack?: { root?: string }; allowedDevOrigins?: string[]; experimental?: any } = {
  // Explicitly set Turbopack root to this package to avoid workspace-root detection warnings
  turbopack: { root: __dirname },

  // Allow dev previews from the network IPs you use (add more origins if needed)
  // Keep both protocol+port and host-only entries to match Next's detection logic
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://10.61.200.142:3000",
    "http://10.61.200.142",
    "10.61.200.142"
  ],

  experimental: {
    // Some Next versions expect this under experimental; include same origins for compatibility
    allowedDevOrigins: ["http://10.61.200.142", "http://10.61.200.142:3000"]
  }
};

export default nextConfig;
