import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { CONTACT_EMAIL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Privacy & HIPAA",
  description:
    "How Medivantek Billing collects, uses, discloses, and safeguards personal information and protected health information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy & compliance"
        title="Privacy Policy"
        description="How Medivantek Billing protects the information entrusted to us by providers and patients."
      />
      <article className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <div className="mb-12 flex flex-col gap-4 border-b border-border pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Medivantek Billing</p>
            <p className="mt-2 text-muted-foreground">Privacy, security, and responsible data stewardship</p>
          </div>
          <div className="rounded-xl border border-border bg-muted/40 px-5 py-3 sm:text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Effective date</p>
            <p className="mt-1 font-semibold text-foreground">October 1, 2025</p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none dark:prose-invert prose-headings:font-display prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
          <p className="lead">
            Medivantek Billing is committed to protecting the privacy and confidentiality of the personal and
            sensitive information we collect and handle while providing medical billing, credentialing, and
            related services.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information in
            compliance with applicable laws, including the Health Insurance Portability and Accountability Act
            (HIPAA).
          </p>

          <h2>1. Information We Collect</h2>
          <h3>1.1 Personal Information</h3>
          <p>We may collect personal information, including but not limited to:</p>
          <ul>
            <li>Names, addresses, phone numbers, and email addresses of providers and patients.</li>
            <li>Insurance information, including policy numbers, insurance provider names, and claims details.</li>
          </ul>
          <h3>1.2 Protected Health Information (PHI)</h3>
          <p>
            As part of providing medical billing services, we may handle PHI, including medical records,
            diagnoses, treatment information, and other data necessary for billing purposes.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul>
            <li>Submitting claims to insurance companies.</li>
            <li>Credentialing and payer enrollment services.</li>
            <li>Communicating with respective insurance companies and patients regarding billing and claims.</li>
            <li>Complying with legal and regulatory requirements.</li>
          </ul>

          <h2>3. How We Protect and Manage Your Data</h2>
          <p>
            We implement a comprehensive approach to data protection and management to ensure the security of
            your information.
          </p>
          <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-primary/15 bg-primary/4 p-6">
              <h3 className="font-display text-lg font-semibold text-foreground">Security measures</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                <li><strong className="text-foreground">Encryption:</strong> Sensitive information, including PHI, is encrypted during transmission and at rest using industry-standard protocols.</li>
                <li><strong className="text-foreground">Access control:</strong> Role-based access limits sensitive data to authorized personnel with a need to know.</li>
                <li><strong className="text-foreground">Secure servers:</strong> Our servers are hosted in secure data centers with physical security, firewalls, and intrusion detection.</li>
                <li><strong className="text-foreground">Data backup:</strong> Regular backups help ensure critical data can be recovered after failures or emergencies.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-muted/30 p-6">
              <h3 className="font-display text-lg font-semibold text-foreground">Ongoing oversight</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                <li><strong className="text-foreground">Employee training:</strong> Employees receive regular training on data privacy, security, HIPAA, and related requirements.</li>
                <li><strong className="text-foreground">Data retention:</strong> We retain information only as long as necessary or legally required, then securely delete or destroy it.</li>
                <li><strong className="text-foreground">Third-party monitoring:</strong> We periodically audit service providers to ensure they meet our security and privacy standards.</li>
              </ul>
            </div>
          </div>

          <h2>4. Information Sharing and Disclosure</h2>
          <p>
            Your privacy is of utmost importance to us. We do not sell, rent, or share personal information,
            including SMS consent, with third parties or affiliates for marketing purposes.
          </p>
          <h3>Claims processing with insurance companies</h3>
          <p>
            We may disclose necessary information to insurance companies to facilitate claims processing,
            verify coverage, or obtain approvals required to deliver the services you need.
          </p>
          <h3>Authorized third-party service providers</h3>
          <p>
            We may engage trusted providers, such as payment processors, IT support teams, or other operational
            partners. They are contractually obligated to handle your information securely and only to perform
            their specific services.
          </p>
          <h3>Compliance with legal and regulatory obligations</h3>
          <p>
            We may disclose information to regulatory authorities or governmental agencies when required by
            applicable laws, regulations, subpoenas, or other legal processes.
          </p>

          <h2>5. Your Rights</h2>
          <p>As a healthcare provider or patient, you have the right to:</p>
          <ul>
            <li><strong>Access:</strong> Request access to your personal and billing information.</li>
            <li><strong>Correction:</strong> Request corrections to inaccurate or incomplete data.</li>
            <li><strong>Restriction:</strong> Request restrictions on how we use or share your information.</li>
          </ul>
          <p>
            To exercise these rights, contact us at <a href="tel:2059746607">205-974-6607</a> or email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>

          <h2>6. Cookies and Tracking Technologies</h2>
          <p>
            Our website may use cookies to improve user experience. Cookies are small text files stored on your
            device that help us analyze website traffic and improve functionality. You can manage or disable
            cookies through your browser settings.
          </p>

          <h2>7. Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically to reflect changes in our practices or applicable
            laws. Updates will be posted on our website with the revised effective date.
          </p>
        </div>
      </article>
    </>
  );
}
