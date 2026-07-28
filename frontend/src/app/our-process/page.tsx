import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { ProcessSection, CTASection } from "@/components/site/Sections";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "From patient visit to zero balance in eight precise steps — eligibility, coding, claims, posting, denials, and reporting.",
};

export default function OurProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Process"
        title="From patient visit to zero balance"
        description="A repeatable, audited workflow that turns every encounter into revenue — with clear ownership at each step."
      />
      <ProcessSection />
      <CTASection />
    </>
  );
}
