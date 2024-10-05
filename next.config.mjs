/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/site', // Set to your GitHub repository name (just the name, not the full URL)
  assetPrefix: '/site/', // Ensure this matches your basePath
};

export default nextConfig;