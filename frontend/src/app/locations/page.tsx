import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/Sections";
import { locationLinks } from "@/components/site/nav";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Medical billing services across all 50 US states. Serving practices in California, Texas, Florida, New York, and nationwide.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Locations"
        title="Medical billing across America"
        description="Local expertise for every state market — starting with our priority regions, expanding to all 50 states."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {locationLinks.map((loc) => (
              <div
                key={loc.label}
                id={loc.href.includes("#") ? loc.href.split("#")[1] : undefined}
                className="rounded-2xl border border-border/60 p-5 bg-card scroll-mt-28"
              >
                <Link href={loc.href} className="font-semibold hover:text-primary transition-colors">
                  {loc.label}
                </Link>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Specialty billing, credentialing & RCM support for providers in {loc.label === "All States" ? "every US market" : loc.label}.
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-muted-foreground text-center">
            City and remaining state pages coming soon — 50-state coverage in progress.
          </p>
        </div>
      </section>
      <CTASection />
    </>
  );
}
