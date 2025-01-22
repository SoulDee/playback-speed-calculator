/** @type {import('next').NextConfig} */
const nextConfig = {
  // 配置选项
}

if (process.env.NODE_ENV === 'development') {
  const { setupDevPlatform } = require('@cloudflare/next-on-pages/next-dev');
  setupDevPlatform().catch(e => console.error(e));
}

module.exports = nextConfig;