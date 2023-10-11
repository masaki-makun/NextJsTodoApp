/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  webpack: (config) => {
    // ignore formidable warnings
    config.ignoreWarnings = [
      { module: /node_modules\/formidable\/src\/Formidable\.js/ },
      { file: /node_modules\/formidable\/src\/index\.js/ },
    ];

    return config;
  },
};

module.exports = nextConfig;
