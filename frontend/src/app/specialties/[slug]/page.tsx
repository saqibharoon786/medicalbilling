import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceLikePage } from "@/components/site/ServiceLikePage";
import { findPage, specialtyPages } from "@/lib/pages-catalog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return specialtyPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = findPage(specialtyPages, slug);
  if (!page) return {};
  return { title: page.title, description: page.description };
}

export default async function SpecialtyDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = findPage(specialtyPages, slug);
  if (!page) notFound();

  const related = specialtyPages.filter((p) => p.slug !== slug).slice(0, 8);
  return (
    <ServiceLikePage
      page={page}
      parentHref="/specialties"
      parentLabel="Specialties"
      related={related}
    />
  );
}
