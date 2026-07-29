import type { Metadata } from "next";
import { MedicalCodingServicesPage } from "@/components/site/MedicalCodingServicesPage";
import { mcsFaqs } from "@/components/site/medical-coding-content";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: {
    absolute: "Medical Coding Services for Healthcare Providers | ABS",
  },
  description:
    "Certified medical coding services for U.S. healthcare providers. Reduce denials with accurate CPT, ICD-10, and HCPCS coding. Free coding audit.",
  openGraph: {
    title: "Medical Coding Services for Healthcare Providers | ABS",
    description:
      "Certified medical coding services for U.S. healthcare providers. Reduce denials with accurate CPT, ICD-10, and HCPCS coding. Free coding audit.",
    url: "/medical-coding-services",
  },
  alternates: {
    canonical: "/medical-coding-services",
  },
};

export default function MedicalCodingServicesRoute() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Medical Coding Services",
            serviceType: "Medical Coding Services",
            description:
              "Professional medical coding services: reviewing documentation, assigning accurate CPT, ICD-10-CM, and HCPCS Level II codes, checking for compliance issues, and preparing claims to move forward cleanly through billing.",
            url: "/medical-coding-services",
          }),
          faqPageSchema(mcsFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Medical Coding Services", path: "/medical-coding-services" },
          ]),
        ]}
      />
      <MedicalCodingServicesPage />
    </>
  );
}
