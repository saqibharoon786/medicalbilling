import type { Metadata } from "next";
import { AccountsReceivableManagementPage } from "@/components/site/AccountsReceivableManagementPage";
import { arFaqs } from "@/components/site/accounts-receivable-management-content";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: {
    absolute: "Accounts Receivable Management Services | ABS",
  },
  description:
    "Recover unpaid claims and aging AR with expert accounts receivable management for U.S. healthcare providers. Request your free billing audit.",
  openGraph: {
    title: "Accounts Receivable Management Services | American Billing Solutions",
    description:
      "Expert AR follow-up and recovery for U.S. healthcare providers. Reduce write-offs, recover aged claims, improve cash flow. Free billing audit available.",
    url: "/accounts-receivable-management",
  },
  twitter: {
    title: "Accounts Receivable Management for Healthcare Providers",
    description:
      "Recover unpaid claims and aging accounts receivable with active, expert follow-up. Request a free billing audit today.",
  },
  alternates: {
    canonical: "/accounts-receivable-management",
  },
};

export default function AccountsReceivableManagementRoute() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Accounts Receivable Management Services",
            serviceType: "Accounts Receivable Management Services",
            description:
              "Accounts receivable (AR) management is the ongoing process of tracking, following up on, and resolving unpaid claims and patient balances until they're either paid, adjusted appropriately, or written off after all reasonable recovery efforts have been exhausted.",
            url: "/accounts-receivable-management",
          }),
          faqPageSchema(arFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Accounts Receivable Management", path: "/accounts-receivable-management" },
          ]),
        ]}
      />
      <AccountsReceivableManagementPage />
    </>
  );
}
