import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/Sections";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight } from "lucide-react";
import type { PageEntry } from "@/lib/pages-catalog";

const highlights = [
  "Specialty-matched billers and coders",
  "Denial prevention built into every claim",
  "Transparent KPIs and monthly reviews",
  "HIPAA-compliant, SOC 2–aligned operations",
];

export function ServiceLikePage({
  page,
  parentHref,
  parentLabel,
  related,
}: {
  page: PageEntry;
  parentHref: string;
  parentLabel: string;
  related?: PageEntry[];
}) {
  return (
    <>
      <PageHero
        eyebrow={page.eyebrow || parentLabel}
        title={page.title}
        description={page.description}
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.2fr_0.8fr] gap-12">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              American Billing Solutions delivers {page.title.toLowerCase()} with certified specialists,
              clean claim workflows, and accountable follow-up — so your team stays focused on patient care.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-emerald mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild className="bg-emerald-gradient text-emerald-foreground hover:opacity-90">
                <Link href="/contact">Get a free billing audit</Link>
              </Button>
              <Button asChild variant="outline" className="border-primary/30 text-primary">
                <Link href={parentHref}>
                  All {parentLabel.toLowerCase()} <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {related && related.length > 0 && (
            <aside className="rounded-2xl border border-border/60 bg-secondary/40 p-6 h-fit">
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                Related {parentLabel}
              </div>
              <ul className="space-y-1">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`${parentHref}/${r.slug}`}
                      className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-background hover:text-primary transition-colors"
                    >
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </section>
      <CTASection />
    </>
  );
}
