import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** Public marketing URLs → internal app routes (keep in sync with home-content links) */
const serviceUrlRewrites = [
  // Dedicated pillars: billing, RCM, coding, credentialing, insurance verification
  { source: "/claims-management-services", destination: "/services/charge-entry" },
  { source: "/denial-management-services", destination: "/services/denial-management" },
  { source: "/prior-authorization-services", destination: "/services/prior-authorization" },
  { source: "/provider-enrollment-services", destination: "/services/provider-enrollment" },
  { source: "/payment-posting-services", destination: "/services/payment-posting" },
  { source: "/accounts-receivable-management", destination: "/services/ar-follow-up" },
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
