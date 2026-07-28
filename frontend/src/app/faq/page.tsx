import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { FAQSection, CTASection } from "@/components/site/Sections";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "20 answers to the most common questions about medical billing, RCM, onboarding, pricing, HIPAA and more.",
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Everything you wanted to ask a medical biller"
        description="Twenty answers to the most common questions we hear from physicians and practice administrators."
      />
      <FAQSection />
      <CTASection />
    </>
  );
}
