import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";
import { serviceUrlRewrites } from "./src/components/site/home-content";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const specialtyRewrites = [
  { source: "/specialties/mental-health-billing", destination: "/specialties/mental-health" },
  { source: "/specialties/behavioral-health-billing", destination: "/specialties/behavioral-health" },
  { source: "/specialties/psychiatry-billing", destination: "/specialties/psychiatry" },
  { source: "/specialties/dental-billing", destination: "/specialties/dental" },
  { source: "/specialties/cardiology-billing", destination: "/specialties/cardiology" },
  { source: "/specialties/orthopedic-billing", destination: "/specialties/orthopedics" },
  { source: "/specialties/family-practice-billing", destination: "/specialties/family-medicine" },
  { source: "/specialties/urgent-care-billing", destination: "/specialties/urgent-care" },
];

const resourceRewrites = [
  { source: "/resources/icd-10", destination: "/resources/icd-10-codes" },
  { source: "/resources/denial-management-guides", destination: "/resources/denial-codes" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [],
  },
  transpilePackages: ["framer-motion"],
  async rewrites() {
    return [...serviceUrlRewrites, ...specialtyRewrites, ...resourceRewrites];
  },
};

export default nextConfig;
