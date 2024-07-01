/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/9t88i8dp/production/**",
        port: "",
      },
    ],
  },
};

export default nextConfig;
