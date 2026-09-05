import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  basePath: isGitHubPages ? "/ascend-mun" : "",

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
