const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/GOKUL-M-Portfolio' : '',
  assetPrefix: isProd ? '/GOKUL-M-Portfolio/' : '',
  images: { unoptimized: true },
};

module.exports = nextConfig;
