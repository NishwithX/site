/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/:path*', // Catch all paths
          destination: '/pages/:path*', // Map them to the corresponding path under /pages/
        },
      ];
    },
  };
  
  export default nextConfig;
  