/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/((?!portfolio$).*)",
        destination: "/portfolio",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
