import type { Metadata } from "next";
import { HomePageContent } from "@/components/site/HomePageContent";
import { homeFaqs } from "@/components/site/home-content";
import { JsonLd } from "@/components/site/JsonLd";
import { faqPageSchema } from "@/lib/schemas";

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

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqPageSchema(homeFaqs)} />
      <HomePageContent />
    </>
  );
}
