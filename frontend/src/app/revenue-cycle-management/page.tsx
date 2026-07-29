import type { Metadata } from "next";
import { RevenueCycleManagementPage } from "@/components/site/RevenueCycleManagementPage";
import { rcmFaqs } from "@/components/site/rcm-content";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: {
    absolute: "Revenue Cycle Management Services | American Billing Solutions",
  },
  description:
    "Full-service revenue cycle management for U.S. healthcare and mental health providers. Reduce denials, accelerate collections. Free RCM audit.",
  openGraph: {
    title: "Revenue Cycle Management Services | American Billing Solutions",
    description:
      "Full-service RCM for U.S. healthcare providers, with deep expertise in mental health and behavioral health billing. Request a free revenue cycle audit.",
    url: "/revenue-cycle-management",
  },
  alternates: {
    canonical: "/revenue-cycle-management",
  },
};

export default function RevenueCycleManagementRoute() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Revenue Cycle Management Services",
            serviceType: "Revenue Cycle Management Services",
            description:
              "Revenue cycle management is the administrative and clinical process, used by healthcare organizations, of tracking patient revenue from initial appointment scheduling through final payment.",
            url: "/revenue-cycle-management",
          }),
          faqPageSchema(rcmFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Revenue Cycle Management", path: "/revenue-cycle-management" },
          ]),
        ]}
      />
      <RevenueCycleManagementPage />
    </>
  );
}
