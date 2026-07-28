import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { ServicesSection, ProcessSection, CTASection } from "@/components/site/Sections";

export const metadata: Metadata = {
  title: "Medical Billing Services",
  description:
    "Complete revenue cycle services: billing, coding, credentialing, denial management, AR recovery, prior authorization and more.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="A complete revenue cycle, delivered end-to-end"
        description="Fourteen tightly integrated services that eliminate revenue leakage at every stage of the patient financial journey."
      />
      <ServicesSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
