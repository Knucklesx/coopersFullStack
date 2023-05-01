/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['img.freepik.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        port: '',
        pathname: '/photo-gratis/grupo-de-pessoas-trabalhando-no-plano-de-negocios-em-um-escritorio_1303-15866.jpg?w=2000',
      },

    ]
  }
}
module.exports = nextConfig
