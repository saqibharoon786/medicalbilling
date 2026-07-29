import type { Metadata } from "next";
import { ProviderCredentialingServicesPage } from "@/components/site/ProviderCredentialingServicesPage";
import { pcsFaqs } from "@/components/site/provider-credentialing-content";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: {
    absolute: "Provider Credentialing Services | American Billing Solutions",
  },
  description:
    "Fast, accurate provider credentialing for U.S. healthcare providers. Medicare, Medicaid & commercial payer enrollment. Free consultation.",
  openGraph: {
    title: "Provider Credentialing Services | American Billing Solutions",
    description:
      "Fast, accurate provider credentialing for U.S. healthcare providers. Medicare, Medicaid & commercial payer enrollment. Free consultation.",
    url: "/provider-credentialing-services",
  },
  alternates: {
    canonical: "/provider-credentialing-services",
  },
};

export default function ProviderCredentialingServicesRoute() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Provider Credentialing Services",
            serviceType: "Provider Credentialing Services",
            description:
              "Provider credentialing is the process by which insurance payers verify a healthcare provider's education, training, licensure, and professional history before allowing them to join a payer's network and bill for services.",
            url: "/provider-credentialing-services",
          }),
          faqPageSchema(pcsFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Provider Credentialing Services", path: "/provider-credentialing-services" },
          ]),
        ]}
      />
      <ProviderCredentialingServicesPage />
    </>
  );
}
