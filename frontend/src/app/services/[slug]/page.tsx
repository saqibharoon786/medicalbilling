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
  if (slug === "rcm") {
    return {
      title: {
        absolute: "Revenue Cycle Management Services | American Billing Solutions",
      },
      description:
        "Full-service revenue cycle management for U.S. healthcare and mental health providers. Reduce denials, accelerate collections. Free RCM audit.",
      alternates: { canonical: "/revenue-cycle-management" },
    };
  }
  if (slug === "medical-coding") {
    return {
      title: {
        absolute: "Medical Coding Services for Healthcare Providers | ABS",
      },
      description:
        "Certified medical coding services for U.S. healthcare providers. Reduce denials with accurate CPT, ICD-10, and HCPCS coding. Free coding audit.",
      alternates: { canonical: "/medical-coding-services" },
    };
  }
  if (slug === "credentialing") {
    return {
      title: {
        absolute: "Provider Credentialing Services | American Billing Solutions",
      },
      description:
        "Fast, accurate provider credentialing for U.S. healthcare providers. Medicare, Medicaid & commercial payer enrollment. Free consultation.",
      alternates: { canonical: "/provider-credentialing-services" },
    };
  }
  if (slug === "eligibility") {
    return {
      title: {
        absolute: "Insurance Eligibility Verification Services | ABS",
      },
      description:
        "Prevent claim denials with fast, accurate insurance eligibility verification for U.S. healthcare providers. Request your free verification audit.",
      alternates: { canonical: "/insurance-verification-services" },
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
  if (slug === "rcm") {
    redirect("/revenue-cycle-management");
  }
  if (slug === "medical-coding") {
    redirect("/medical-coding-services");
  }
  if (slug === "credentialing") {
    redirect("/provider-credentialing-services");
  }
  if (slug === "eligibility") {
    redirect("/insurance-verification-services");
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
