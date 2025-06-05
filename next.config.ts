/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/DigitalLetter' : '', 
  assetPrefix: isProd ? '/DigitalLetter' : '', 
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  }
}
 
module.exports = nextConfig
