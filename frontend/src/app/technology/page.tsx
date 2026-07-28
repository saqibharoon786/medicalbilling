import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { TechnologySection, StatsSection, CTASection } from "@/components/site/Sections";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "HIPAA-secure cloud infrastructure, EMR/EHR integrations, AI analytics and real-time reporting.",
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="The platform behind our 98.6% first-pass rate"
        description="Enterprise-grade infrastructure and AI-driven claim intelligence, built for HIPAA from day one."
      />
      <TechnologySection />
      <StatsSection />
      <CTASection />
    </>
  );
}
