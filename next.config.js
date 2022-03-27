
/** @type {import('next').NextConfig} */
const path = require('path')
const withImages = require('next-images')
module.exports = withImages()
module.exports = {
  future: {
    webpack5: true,
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config) => {
    config.experiments = config.experiments || {};
    config.experiments.topLevelAwait = true;
    return config;
  },
}


