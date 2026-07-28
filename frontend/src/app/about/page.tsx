import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import {
  AboutSection,
  StatsSection,
  WhyUsSection,
  ProcessSection,
  CTASection,
} from "@/components/site/Sections";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded by clinicians and healthcare CFOs. Meet the team behind 500+ US practices and 1M+ processed claims.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built by clinicians. Engineered for revenue."
        description="15 years of relentless focus on one problem — getting healthcare providers paid faster, in full, without the paperwork burden."
      />
      <StatsSection />
      <AboutSection />
      <WhyUsSection />
      <ProcessSection />
      <section id="leadership" className="py-24 bg-secondary/50 scroll-mt-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Leadership Team</div>
          <h2 className="text-3xl md:text-4xl font-bold">Experienced operator behind every account</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Our leadership team brings decades of combined experience across clinical operations,
            healthcare finance, and revenue cycle management — guiding strategy for 500+ practices nationwide.
          </p>
        </div>
      </section>
      <CTASection />
    </>
  );
}
