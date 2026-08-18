import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import {
  AboutSection,
  StatsSection,
  WhyUsSection,
  ProcessSection,
  CTASection,
} from "@/components/site/Sections";
import Link from "next/link";

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
        title="Builtss by clinicians. Engineered for revenue."
        description="15 years of relentless focus on one problem — getting healthcare providers paid faster, in full, without the paperwork burden."
      />
      <StatsSection />
      <AboutSection />
      <WhyUsSection />
      <ProcessSection />
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Leadership Team</div>
          <h2 className="text-3xl md:text-4xl font-bold">Experienced operators behind every account</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Our leadership team brings decades of combined experience across clinical operations,
            healthcare finance, and revenue cycle management — guiding strategy for 500+ practices nationwide.
          </p>
          <Link
            href="/leadership-team"
            className="inline-flex mt-6 text-sm font-semibold text-primary hover:underline"
          >
            Meet the leadership team →
          </Link>
        </div>
      </section>
      <CTASection />
    </>
  );
}
