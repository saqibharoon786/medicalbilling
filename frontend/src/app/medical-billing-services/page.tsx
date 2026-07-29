import type { Metadata } from "next";
import { MedicalBillingServicesPage } from "@/components/site/MedicalBillingServicesPage";
import { mbsFaqs } from "@/components/site/medical-billing-content";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schemas";

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

export default function MedicalBillingServicesRoute() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Medical Billing Services",
            serviceType: "Medical Billing Services",
            description:
              "Complete medical billing services for physicians, clinics, and healthcare organizations across the United States — from charge entry and coding review to claim submission, denial follow-up, and payment posting.",
            url: "/medical-billing-services",
          }),
          faqPageSchema(mbsFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Medical Billing Services", path: "/medical-billing-services" },
          ]),
        ]}
      />
      <MedicalBillingServicesPage />
    </>
  );
}
