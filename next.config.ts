import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["sharp", "@prisma/client", "prisma"],
  },
};

export default nextConfig;
