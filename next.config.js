const nextConfig = { reactStrictMode: true }; module.exports = nextConfig;
// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export', // enables static export
  basePath: isProd ? '/GOKUL-M-Portfolio' : '',
  assetPrefix: isProd ? '/GOKUL-M-Portfolio/' : '',
};
