import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { CONTACT_EMAIL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Privacy & HIPAA",
  description:
    "How American Billing Solutions protects patient and practice data — HIPAA, SOC 2, and privacy commitments.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy" title="Privacy Policy & HIPAA Commitment" />
      <article className="mx-auto max-w-3xl px-6 py-20 prose prose-slate dark:prose-invert">
        <p className="text-muted-foreground">Last updated: January 2026</p>
        <h2>1. Our commitment</h2>
        <p>
          American Billing Solutions is HIPAA compliant and SOC 2 Type II certified. Every team member
          completes annual HIPAA and security training, and all systems are audited on a continuous basis.
        </p>
        <h2>2. Information we collect</h2>
        <p>
          We collect only the information necessary to deliver billing, coding and revenue cycle services
          on behalf of your practice, and only under a signed Business Associate Agreement (BAA).
        </p>
        <h2>3. How we use information</h2>
        <p>
          We use protected health information (PHI) only to perform contracted RCM services. We never sell
          PHI or use it for marketing.
        </p>
        <h2>4. Data security</h2>
        <p>
          All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Access is limited by role and
          audited continuously.
        </p>
        <h2>5. Data ownership &amp; portability</h2>
        <p>Your data is always yours. You may export or delete it at any time with full portability.</p>
        <h2>6. Contact</h2>
        <p>
          Reach our Privacy Office at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </article>
    </>
  );
}
