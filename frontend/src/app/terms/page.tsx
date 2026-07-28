import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for American Billing Solutions medical billing and revenue cycle management services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" />
      <article className="mx-auto max-w-3xl px-6 py-20 prose prose-slate dark:prose-invert">
        <p className="text-muted-foreground">Last updated: January 2026</p>
        <h2>1. Services</h2>
        <p>
          American Billing Solutions provides medical billing, coding, credentialing and revenue cycle
          management services under a Master Services Agreement executed with each client practice.
        </p>
        <h2>2. Fees</h2>
        <p>
          Fees are structured as a transparent percentage of collections with no long-term contracts and no
          charge for denied claims.
        </p>
        <h2>3. Confidentiality &amp; BAA</h2>
        <p>All engagements are governed by a Business Associate Agreement in accordance with HIPAA.</p>
        <h2>4. Term &amp; termination</h2>
        <p>
          Month-to-month agreements can be terminated by either party with 30 days written notice, subject
          to full data portability.
        </p>
        <h2>5. Limitation of liability</h2>
        <p>Our aggregate liability is limited to the fees paid in the twelve months preceding the claim.</p>
        <h2>6. Governing law</h2>
        <p>These terms are governed by the laws of the State of Delaware.</p>
      </article>
    </>
  );
}
