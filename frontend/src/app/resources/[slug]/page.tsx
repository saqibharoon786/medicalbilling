import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceLikePage } from "@/components/site/ServiceLikePage";
import { findPage, resourcePages } from "@/lib/pages-catalog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return resourcePages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = findPage(resourcePages, slug);
  if (!page) return {};
  return { title: page.title, description: page.description };
}

export default async function ResourceDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = findPage(resourcePages, slug);
  if (!page) notFound();

  const related = resourcePages.filter((p) => p.slug !== slug).slice(0, 8);
  return (
    <ServiceLikePage
      page={page}
      parentHref="/resources"
      parentLabel="Resources"
      related={related}
    />
  );
}
