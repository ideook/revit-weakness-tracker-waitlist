import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    dirs: ['src'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig