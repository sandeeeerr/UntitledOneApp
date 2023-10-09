/** @type {import('next').NextConfig} */

const path = require('path');
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'app/styles')],
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  basePath: '',
  images: {
    domains: ['uploadthing.com', 'lh3.googleusercontent.com'],
  },
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig
