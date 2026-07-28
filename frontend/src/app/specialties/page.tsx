import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { SpecialtiesSection, CTASection, TestimonialsSection } from "@/components/site/Sections";

export const metadata: Metadata = {
  title: "Specialties",
  description:
    "Specialty-matched billing teams across 30+ disciplines from primary care to complex subspecialties.",
};

export default function SpecialtiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Specialties"
        title="Specialty-matched teams across 30+ disciplines"
        description="Every account is staffed with coders and AR analysts who live inside your specialty."
      />
      <SpecialtiesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
