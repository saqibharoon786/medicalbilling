import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceLikePage } from "@/components/site/ServiceLikePage";
import { findPage, industryPages } from "@/lib/pages-catalog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industryPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = findPage(industryPages, slug);
  if (!page) return {};
  return { title: page.title, description: page.description };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = findPage(industryPages, slug);
  if (!page) notFound();

  const related = industryPages.filter((p) => p.slug !== slug);
  return (
    <ServiceLikePage
      page={page}
      parentHref="/industries"
      parentLabel="Industries"
      related={related}
    />
  );
}
