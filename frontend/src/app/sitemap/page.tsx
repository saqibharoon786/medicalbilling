import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import {
  aboutLinks,
  serviceLinks,
  specialtyGroups,
  resourceLinks,
  locationLinks,
  industryLinks,
  footerCompany,
  footerSupport,
} from "@/components/site/nav";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Complete sitemap for American Billing Solutions — services, specialties, resources, and locations.",
};

function SitemapCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="font-semibold text-lg mb-3">{title}</h2>
      <ul className="space-y-1.5 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SitemapPage() {
  return (
    <>
      <PageHero
        eyebrow="Sitemap"
        title="Find every page on our site"
        description="Quick links to company pages, services, specialties, resources, locations, and support."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <SitemapCol title="Company" links={[{ label: "Home", href: "/" }, ...aboutLinks, ...footerCompany.filter((l) => !aboutLinks.some((a) => a.label === l.label))]} />
          <SitemapCol title="Services" links={serviceLinks} />
          <SitemapCol title="Resources" links={resourceLinks} />
          <SitemapCol title="Locations" links={locationLinks} />
          <SitemapCol title="Industries" links={industryLinks} />
          <SitemapCol title="Support" links={footerSupport} />
          {specialtyGroups.map((g) => (
            <SitemapCol key={g.heading} title={g.heading} links={g.links} />
          ))}
        </div>
      </section>
    </>
  );
}
