import {
  Hero,
  AboutSection,
  ServicesSection,
  SpecialtiesSection,
  ProcessSection,
  WhyUsSection,
  StatsSection,
  TechnologySection,
  TestimonialsSection,
  CaseStudiesSection,
  FAQSection,
  CTASection,
} from "@/components/site/Sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <AboutSection />
      <ServicesSection compact />
      <ProcessSection />
      <SpecialtiesSection />
      <WhyUsSection />
      <TechnologySection />
      <TestimonialsSection />
      <CaseStudiesSection />
      <FAQSection limit={8} />
      <CTASection />
    </>
  );
}
