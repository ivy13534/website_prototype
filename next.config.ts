import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Explicitly set Turbopack root to this package to avoid workspace-root detection warnings
  turbopack: { root: __dirname }
};

export default nextConfig;
