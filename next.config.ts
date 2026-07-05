import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/truyen",
        destination: "/",
        permanent: true,
      },
      {
        source: "/chinh-sach-bao-mat",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/dieu-khoan-su-dung",
        destination: "/terms-of-service",
        permanent: true,
      },
      {
        source: "/dashboard",
        destination: "/",
        permanent: false,
      },
      {
        source: "/speaking",
        destination: "/",
        permanent: false,
      },
      {
        source: "/mistake-bank",
        destination: "/",
        permanent: false,
      },
      {
        source: "/login",
        destination: "/",
        permanent: false,
      },
      {
        source: "/oauth2/:path*",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
