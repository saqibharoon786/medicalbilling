import type { Metadata } from "next";
import { PriorAuthorizationServicesPage } from "@/components/site/PriorAuthorizationServicesPage";
import { paFaqs } from "@/components/site/prior-authorization-content";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: {
    absolute: "Prior Authorization Services | American Billing Solutions",
  },
  description:
    "Faster approvals, fewer denials. Professional prior authorization services for U.S. healthcare providers. Request your free authorization review.",
  openGraph: {
    title: "Prior Authorization Services | American Billing Solutions",
    description:
      "Faster approvals, fewer denials. Professional prior authorization services for U.S. healthcare providers. Request your free authorization review.",
    url: "/prior-authorization-services",
  },
  alternates: {
    canonical: "/prior-authorization-services",
  },
};

export default function PriorAuthorizationServicesRoute() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Prior Authorization Services",
            serviceType: "Prior Authorization Services",
            description:
              "Prior authorization is the approval process a health insurance payer requires before it will cover certain procedures, medications, imaging, or treatments — even when the patient's general insurance coverage is active and verified.",
            url: "/prior-authorization-services",
          }),
          faqPageSchema(paFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Prior Authorization Services", path: "/prior-authorization-services" },
          ]),
        ]}
      />
      <PriorAuthorizationServicesPage />
    </>
  );
}
