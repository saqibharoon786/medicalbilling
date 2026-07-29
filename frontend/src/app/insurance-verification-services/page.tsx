import type { Metadata } from "next";
import { InsuranceVerificationServicesPage } from "@/components/site/InsuranceVerificationServicesPage";
import { ievFaqs } from "@/components/site/insurance-verification-content";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: {
    absolute: "Insurance Eligibility Verification Services | ABS",
  },
  description:
    "Prevent claim denials with fast, accurate insurance eligibility verification for U.S. healthcare providers. Request your free verification audit.",
  openGraph: {
    title: "Insurance Eligibility Verification Services | ABS",
    description:
      "Prevent claim denials with fast, accurate insurance eligibility verification for U.S. healthcare providers. Request your free verification audit.",
    url: "/insurance-verification-services",
  },
  alternates: {
    canonical: "/insurance-verification-services",
  },
};

export default function InsuranceVerificationServicesRoute() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Insurance Eligibility Verification Services",
            serviceType: "Insurance Eligibility Verification Services",
            description:
              "Insurance eligibility verification is the process of confirming a patient's active insurance coverage, plan benefits, and financial responsibility — copay, deductible, coinsurance — before they receive care.",
            url: "/insurance-verification-services",
          }),
          faqPageSchema(ievFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            {
              name: "Insurance Eligibility Verification Services",
              path: "/insurance-verification-services",
            },
          ]),
        ]}
      />
      <InsuranceVerificationServicesPage />
    </>
  );
}
