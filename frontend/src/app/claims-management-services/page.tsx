import type { Metadata } from "next";
import { ClaimsManagementServicesPage } from "@/components/site/ClaimsManagementServicesPage";
import { cmFaqs } from "@/components/site/claims-management-content";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: {
    absolute: "Claims Management Services | American Billing Solutions",
  },
  description:
    "Professional claims management for U.S. healthcare providers. Clean claims, fewer denials, faster payments. Request your free claims audit.",
  openGraph: {
    title: "Claims Management Services | American Billing Solutions",
    description:
      "Professional claims management for U.S. healthcare providers. Clean claims, fewer denials, faster payments. Request your free claims audit.",
    url: "/claims-management-services",
  },
  alternates: {
    canonical: "/claims-management-services",
  },
};

export default function ClaimsManagementServicesRoute() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Claims Management Services",
            serviceType: "Claims Management Services",
            description:
              "Claims management is the process of overseeing an insurance claim through its entire lifecycle — from creation and submission through tracking, payer follow-up, and final resolution.",
            url: "/claims-management-services",
          }),
          faqPageSchema(cmFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Claims Management Services", path: "/claims-management-services" },
          ]),
        ]}
      />
      <ClaimsManagementServicesPage />
    </>
  );
}
