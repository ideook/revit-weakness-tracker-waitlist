/** @type {import('next').NextConfig} */
const nextConfig = {  eslint: {
  dirs: ['src'],
  ignoreDuringBuilds: true,
},
  experimental: {
    typedRoutes: true,
  },
}

module.exports = nextConfig