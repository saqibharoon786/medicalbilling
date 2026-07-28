import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { CTASection, StatsSection } from "@/components/site/Sections";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Leadership Team",
  description:
    "Meet the operators behind American Billing Solutions — decades of experience across clinical operations, healthcare finance, and RCM.",
};

const leaders = [
  {
    name: "Clinical Operations",
    role: "Practice & workflow leadership",
    bio: "Former practice administrators who design billing workflows that fit how clinics actually run day to day.",
  },
  {
    name: "Healthcare Finance",
    role: "Revenue & KPI strategy",
    bio: "Ex-healthcare CFOs focused on collections lift, denial reduction, and transparent monthly performance reviews.",
  },
  {
    name: "RCM Delivery",
    role: "Coding, AR & payer ops",
    bio: "Certified coding and AR leads who staff every account with specialty-matched specialists and named ownership.",
  },
];

export default function LeadershipTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership Team"
        title="Experienced operators behind every account"
        description="Decades of combined experience across clinical operations, healthcare finance, and revenue cycle management — guiding strategy for 500+ practices nationwide."
      />
      <StatsSection />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-12">
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Leadership
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">The people steering your revenue</h2>
            <p className="mt-3 text-muted-foreground text-lg">
              Every engagement is backed by leaders who have built and run high-performing RCM operations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {leaders.map((person) => (
              <div
                key={person.name}
                className="rounded-2xl border border-border/60 bg-card p-7 hover:shadow-elegant transition-shadow"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary-gradient grid place-items-center text-primary-foreground font-bold text-lg">
                  {person.name.split(" ").map((w) => w[0]).join("")}
                </div>
                <h3 className="mt-5 text-xl font-semibold">{person.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{person.role}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
