import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/Sections";
import { industryLinks } from "@/components/site/nav";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Medical billing solutions for solo practices, group practices, hospitals, behavioral health clinics, telehealth providers, and private practices.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Built for how your practice operates"
        description="From solo providers to multi-location groups and hospitals — workflows matched to your care model."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industryLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-2xl border border-border/60 p-6 bg-card hover:border-primary/40 hover:shadow-card-soft transition-all"
              >
                <div className="text-lg font-semibold hover:text-primary transition-colors">{item.label}</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  End-to-end billing, coding, and AR support tailored for {item.label.toLowerCase()}.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
