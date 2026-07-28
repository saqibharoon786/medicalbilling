import type { Metadata } from "next";
import { HomePageContent } from "@/components/site/HomePageContent";
import { homeFaqs } from "@/components/site/home-content";

export const metadata: Metadata = {
  title: {
    absolute: "Medical Billing Services | American Billing Solutions",
  },
  description:
    "Reduce claim denials and improve cash flow with expert medical billing and RCM services for U.S. providers. Request your free billing audit.",
  openGraph: {
    title: "Medical Billing Services | American Billing Solutions",
    description:
      "Reduce claim denials and improve cash flow with expert medical billing and RCM services for U.S. providers. Request your free billing audit.",
  },
};

function FaqJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <FaqJsonLd />
      <HomePageContent />
    </>
  );
}
