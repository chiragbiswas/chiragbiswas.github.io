/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
    ];
  },
};
export default nextConfig;
