import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** Marketing URLs without dedicated app/ pages → /services/* detail routes */
const serviceUrlRewrites = [
  { source: "/denial-management-services", destination: "/services/denial-management" },
  { source: "/provider-enrollment-services", destination: "/services/provider-enrollment" },
];

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
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async rewrites() {
    return [...serviceUrlRewrites, ...specialtyRewrites, ...resourceRewrites];
  },
};

export default nextConfig;
