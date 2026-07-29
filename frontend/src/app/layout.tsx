import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { SiteChrome } from "@/components/site/SiteChrome";
import { JsonLd } from "@/components/site/JsonLd";
import {
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/schemas";
import { SITE_URL } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "American Billing Solutions — Medical Billing & RCM",
    template: "%s — American Billing Solutions",
  },
  description:
    "Maximize your revenue with professional medical billing. Reduce denials, accelerate reimbursements, and free your team to focus on patient care.",
  authors: [{ name: "American Billing Solutions" }],
  verification: {
    google: "DHVv3PVWFDptWWVZK4xeynUI6t4ciF5_pBqrY_7nrqI",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    title: "American Billing Solutions — Medical Billing & RCM",
    description:
      "Maximize your revenue with professional medical billing. Reduce denials, accelerate reimbursements, and free your team to focus on patient care.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        <JsonLd data={[organizationSchema(), localBusinessSchema(), websiteSchema()]} />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
