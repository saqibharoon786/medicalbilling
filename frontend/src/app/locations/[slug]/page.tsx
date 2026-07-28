import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceLikePage } from "@/components/site/ServiceLikePage";
import { findPage, locationPages } from "@/lib/pages-catalog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return locationPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = findPage(locationPages, slug);
  if (!page) return {};
  return { title: page.title, description: page.description };
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = findPage(locationPages, slug);
  if (!page) notFound();

  const related = locationPages.filter((p) => p.slug !== slug);
  return (
    <ServiceLikePage
      page={page}
      parentHref="/locations"
      parentLabel="Locations"
      related={related}
    />
  );
}
