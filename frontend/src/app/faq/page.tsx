import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { FAQSection, CTASection } from "@/components/site/Sections";
import { faqs } from "@/components/site/data";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to the most common questions about medical billing, RCM, onboarding, pricing, HIPAA and more.",
};

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={[
          faqPageSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="FAQ"
        title="Everything you wanted to ask a medical biller"
        description="Answers to the most common questions we hear from physicians and practice administrators."
      />
      <FAQSection />
      <CTASection />
    </>
  );
}
