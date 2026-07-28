import type { Metadata } from "next";
import { MedicalBillingServicesPage } from "@/components/site/MedicalBillingServicesPage";
import { mbsFaqs } from "@/components/site/medical-billing-content";

export const metadata: Metadata = {
  title: {
    absolute: "Medical Billing Services for Healthcare Providers | ABS",
  },
  description:
    "Reduce claim denials and get paid faster with professional medical billing services for U.S. providers. Request your free billing audit today.",
  openGraph: {
    title: "Medical Billing Services for Healthcare Providers | ABS",
    description:
      "Reduce claim denials and get paid faster with professional medical billing services for U.S. providers. Request your free billing audit today.",
    url: "/medical-billing-services",
  },
  alternates: {
    canonical: "/medical-billing-services",
  },
};

function PageSchemas() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Medical Billing Services",
    name: "Medical Billing Services",
    description:
      "Complete medical billing services for physicians, clinics, and healthcare organizations across the United States — from charge entry and coding review to claim submission, denial follow-up, and payment posting.",
    provider: {
      "@type": "Organization",
      name: "American Billing Solutions",
      url: "https://americanbillingsolutions.com",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    url: "/medical-billing-services",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: mbsFaqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Medical Billing Services",
        item: "/medical-billing-services",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

export default function MedicalBillingServicesRoute() {
  return (
    <>
      <PageSchemas />
      <MedicalBillingServicesPage />
    </>
  );
}
