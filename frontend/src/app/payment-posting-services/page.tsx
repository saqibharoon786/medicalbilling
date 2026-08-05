import type { Metadata } from "next";
import { PaymentPostingServicesPage } from "@/components/site/PaymentPostingServicesPage";
import { ppFaqs } from "@/components/site/payment-posting-content";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: {
    absolute: "Payment Posting Services | American Billing Solutions",
  },
  description:
    "Accurate insurance and patient payment posting for U.S. healthcare providers. Catch underpayments, improve cash flow. Free billing audit.",
  openGraph: {
    title: "Payment Posting Services | American Billing Solutions",
    description:
      "Accurate ERA and EOB payment posting and reconciliation for U.S. healthcare providers. Catch underpayments before they cost you. Request a free billing audit.",
    url: "/payment-posting-services",
  },
  alternates: {
    canonical: "/payment-posting-services",
  },
};

export default function PaymentPostingServicesRoute() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Payment Posting Services",
            serviceType: "Payment Posting Services",
            description:
              "Payment posting is the process of recording payments received from insurance payers and patients into a practice's billing system, and reconciling those payments against what was originally billed.",
            url: "/payment-posting-services",
          }),
          faqPageSchema(ppFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Payment Posting Services", path: "/payment-posting-services" },
          ]),
        ]}
      />
      <PaymentPostingServicesPage />
    </>
  );
}
