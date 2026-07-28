import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { ServiceLikePage } from "@/components/site/ServiceLikePage";
import { findPage, servicePages } from "@/lib/pages-catalog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicePages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "medical-billing") {
    return {
      title: {
        absolute: "Medical Billing Services for Healthcare Providers | ABS",
      },
      description:
        "Reduce claim denials and get paid faster with professional medical billing services for U.S. providers. Request your free billing audit today.",
      alternates: { canonical: "/medical-billing-services" },
    };
  }
  const page = findPage(servicePages, slug);
  if (!page) return {};
  return { title: page.title, description: page.description };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  if (slug === "medical-billing") {
    redirect("/medical-billing-services");
  }

  const page = findPage(servicePages, slug);
  if (!page) notFound();

  const related = servicePages.filter((p) => p.slug !== slug).slice(0, 6);
  return (
    <ServiceLikePage
      page={page}
      parentHref="/services"
      parentLabel="Services"
      related={related}
    />
  );
}
