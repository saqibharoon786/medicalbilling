import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { WhyUsSection, StatsSection, CTASection } from "@/components/site/Sections";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Nine reasons practices switch to American Billing Solutions — HIPAA compliance, certified billers, dedicated account managers, and higher revenue.",
};

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Choose Us"
        title="Built for practices that refuse to leave money on the table"
        description="Certified specialists, transparent reporting, and a revenue process designed to lift collections without adding work for your staff."
      />
      <StatsSection />
      <WhyUsSection />
      <CTASection />
    </>
  );
}
