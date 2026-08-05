/** Payment Posting Services pillar page */

export const ppWhyMatters = [
  {
    title: "Revenue Accuracy",
    desc: "Accurate posting ensures your financial records reflect what was actually paid, not what was expected to be paid — a distinction that matters every time there's a discrepancy.",
  },
  {
    title: "Cash Flow",
    desc: "Timely posting keeps your accounts receivable current and accurate, which is essential for understanding your practice's real-time cash position.",
  },
  {
    title: "Underpayment Detection",
    desc: "Careful reconciliation is often the only way underpayments get caught — a payment that's technically posted but doesn't match the contracted rate can otherwise go unnoticed indefinitely.",
  },
  {
    title: "Overpayment Identification",
    desc: "Overpayments need to be identified and addressed appropriately, both for accurate accounting and for compliance with payer overpayment recovery requirements.",
  },
  {
    title: "Patient Balances",
    desc: "Accurate posting is what makes patient statements accurate — a delay or error here often shows up as a patient being billed the wrong amount.",
  },
  {
    title: "Financial Reporting",
    desc: "Practice-level financial reporting is only as reliable as the payment data it's built on; inconsistent posting undermines every report generated from it.",
  },
  {
    title: "Audit Readiness",
    desc: "Clean, well-documented posting practices support readiness for both internal review and external payer audits.",
  },
  {
    title: "Compliance",
    desc: "Accurate handling of adjustments, overpayments, and payer-specific posting requirements is part of maintaining a compliant billing operation.",
  },
  {
    title: "Revenue Leakage Prevention",
    desc: "Consistent posting and reconciliation is one of the most direct ways to catch the quiet revenue leakage that comes from underpayments and unresolved discrepancies.",
  },
] as const;

export const ppChallenges = [
  {
    title: "Manual Errors",
    desc: "Hand-entered payment data is vulnerable to transposition errors, missed adjustments, and incorrect amounts — small mistakes that compound over time.",
  },
  {
    title: "Missing Payments",
    desc: "A payment that's received but never posted effectively disappears from the practice's financial picture until someone notices the discrepancy.",
  },
  {
    title: "Incorrect Adjustments",
    desc: "Misapplied adjustment codes can make a claim appear resolved when there's actually an underpayment that needs follow-up.",
  },
  {
    title: "Duplicate Posting",
    desc: "The same payment posted twice can distort financial reports and create confusion when reconciling accounts.",
  },
  {
    title: "Unposted ERA",
    desc: "ERAs that sit unprocessed create a backlog where the practice's system doesn't yet reflect payments that have technically already arrived.",
  },
  {
    title: "Posting Delays",
    desc: "When posting falls behind, accounts receivable data becomes stale, making it harder to identify real payment issues versus simple lag.",
  },
  {
    title: "Insurance Discrepancies",
    desc: "A posted payment that doesn't match the contracted rate is one of the clearest signals of an underpayment, but only if someone is actively comparing the two.",
  },
  {
    title: "Patient Ledger Issues",
    desc: "Errors in posting patient payments can result in inaccurate balances, leading to confusing or incorrect statements.",
  },
  {
    title: "Revenue Leakage",
    desc: "Small, unaddressed posting errors accumulate into meaningful revenue loss over time, often without a single obvious point of failure.",
  },
  {
    title: "Old A/R",
    desc: "Claims that aren't reconciled promptly can sit in aging accounts receivable longer than necessary, simply because posting delays obscured the fact that follow-up was needed.",
  },
] as const;

export const ppProcess = [
  {
    step: "01",
    title: "Receive ERA/EOB",
    desc: "Electronic remittance advice or explanation of benefits documents are received from payers as claims are adjudicated.",
  },
  {
    step: "02",
    title: "Verify Payments",
    desc: "Payment amounts are checked against the original claim before posting, catching discrepancies early.",
  },
  {
    step: "03",
    title: "Post Insurance Payments",
    desc: "Insurance payments are posted along with associated adjustments and any identified patient responsibility.",
  },
  {
    step: "04",
    title: "Post Patient Payments",
    desc: "Payments received directly from patients — at time of service or via statement — are posted to keep patient ledgers current.",
  },
  {
    step: "05",
    title: "Adjustments",
    desc: "Contractual write-offs, denials, and other adjustments are posted accurately alongside the payment.",
  },
  {
    step: "06",
    title: "Contract Verification",
    desc: "Posted payments are checked against contracted payer rates to identify underpayments.",
  },
  {
    step: "07",
    title: "Reconciliation",
    desc: "Payment, adjustment, and patient responsibility totals are confirmed to add up to the full billed amount.",
  },
  {
    step: "08",
    title: "Exception Handling",
    desc: "Discrepancies, unexpected denials, or underpayments identified during reconciliation are flagged and routed for follow-up.",
  },
  {
    step: "09",
    title: "Reporting",
    desc: "Posting activity and any identified issues are documented and made visible to the practice.",
  },
  {
    step: "10",
    title: "Continuous Monitoring",
    desc: "Posting accuracy and reconciliation outcomes are reviewed on an ongoing basis to catch recurring patterns.",
  },
] as const;

export const ppIncluded = [
  {
    title: "Insurance Payment Posting",
    desc: "Accurate recording of payer payments, adjustments, and patient responsibility for every processed claim.",
  },
  {
    title: "Patient Payment Posting",
    desc: "Timely posting of payments collected at time of service or through patient billing, keeping ledgers current and accurate.",
  },
  {
    title: "ERA Processing",
    desc: "Structured handling of electronic remittance advice, reconciled against claims rather than posted at face value.",
  },
  {
    title: "EOB Processing",
    desc: "Careful manual posting for payers that don't support electronic remittance, with the same level of reconciliation applied.",
  },
  {
    title: "Credit Balance Review",
    desc: "Identification and review of credit balances that may indicate overpayment requiring resolution.",
  },
  {
    title: "Adjustment Posting",
    desc: "Accurate application of contractual adjustments, denials, and other reductions from the billed amount.",
  },
  {
    title: "Contractual Adjustment Review",
    desc: "Verification that posted adjustments align with actual contracted payer rates, a key step in catching underpayments.",
  },
  {
    title: "Payment Reconciliation",
    desc: "Confirmation that posted amounts — payment, adjustment, and patient responsibility — match the original claim.",
  },
  {
    title: "Underpayment Identification",
    desc: "Structured comparison between posted payments and contracted rates to surface underpayments that would otherwise go unnoticed.",
  },
  {
    title: "Overpayment Analysis",
    desc: "Identification of overpayments and appropriate handling in line with payer requirements.",
  },
  {
    title: "Revenue Reporting",
    desc: "Clear reporting on posting activity, reconciliation outcomes, and identified discrepancies.",
  },
  {
    title: "Financial Auditing",
    desc: "Support maintaining posting records that stand up to internal review or payer audit scrutiny.",
  },
] as const;

export const ppBenefits = [
  {
    title: "Faster reconciliation",
    desc: "Payments are matched to claims promptly, not weeks after receipt.",
  },
  {
    title: "Cleaner accounts receivable",
    desc: "A/R reflects current, accurate data rather than stale or unposted balances.",
  },
  {
    title: "Higher accuracy",
    desc: "Structured verification reduces the errors that come with manual, unreviewed posting.",
  },
  {
    title: "Lower billing errors",
    desc: "Accurate posting supports accurate downstream statements and reporting.",
  },
  {
    title: "Better reporting",
    desc: "Financial reports are only as reliable as the payment data behind them.",
  },
  {
    title: "Better cash flow",
    desc: "Timely, accurate posting gives a clearer real-time picture of collected revenue.",
  },
  {
    title: "Reduced administrative burden",
    desc: "Structured posting reduces the manual reconciliation work otherwise left to practice staff.",
  },
  {
    title: "Lower operating costs",
    desc: "Avoids the overhead of building and maintaining dedicated in-house posting capacity.",
  },
  {
    title: "Improved revenue cycle",
    desc: "Accurate posting strengthens the reliability of every stage of the revenue cycle that depends on it.",
  },
] as const;

export const ppWhy = [
  {
    title: "Healthcare Specialists",
    desc: "Our team works exclusively in healthcare billing and revenue cycle functions, including payment posting as a dedicated discipline, not an afterthought bundled into general bookkeeping.",
  },
  {
    title: "HIPAA Compliant",
    desc: "Payment posting involves handling sensitive patient and financial information, managed under HIPAA-compliant workflows with signed Business Associate Agreements.",
  },
  {
    title: "Dedicated Team",
    desc: "Your practice works with a consistent point of contact who understands your payer mix and posting history.",
  },
  {
    title: "Transparent Reporting",
    desc: "You have visibility into posting activity and any identified discrepancies, not just a static ledger updated on your behalf.",
  },
  {
    title: "Certified Experts",
    desc: "Our staff bring relevant billing and revenue cycle experience to the posting process, understanding what a discrepancy might actually indicate.",
  },
  {
    title: "Revenue-Focused Approach",
    desc: "Posting is treated as a tool for catching underpayments and revenue leakage, not just a data-entry task.",
  },
  {
    title: "Scalable Solutions",
    desc: "Whether your payment volume is modest or substantial, our posting process scales to match your practice's needs.",
  },
  {
    title: "Custom Workflows",
    desc: "Posting processes are configured around your specific payer mix, practice management system, and reporting preferences.",
  },
] as const;

export const ppSpecialties = [
  "Mental Health",
  "Behavioral Health",
  "Psychiatry",
  "Family Practice",
  "Internal Medicine",
  "Cardiology",
  "Orthopedics",
  "Urgent Care",
  "Pediatrics",
  "Dental",
  "Multi-Specialty Clinics",
] as const;

export const ppRelated = [
  {
    title: "Medical Billing Services",
    href: "/medical-billing-services",
    desc: "The billing operation that generates the claims payment posting reconciles against.",
  },
  {
    title: "Revenue Cycle Management",
    href: "/revenue-cycle-management",
    desc: "The broader financial process payment posting supports at the back end.",
  },
  {
    title: "Medical Coding Services",
    href: "/medical-coding-services",
    desc: "Coding accuracy that shapes what a claim should be paid in the first place.",
  },
  {
    title: "Claims Management Services",
    href: "/claims-management-services",
    desc: "End-to-end claim tracking that payment posting closes out upon resolution.",
  },
  {
    title: "Denial Management Services",
    href: "/denial-management-services",
    desc: "Denial resolution that often begins with a discrepancy first identified during posting.",
  },
  {
    title: "Insurance Verification Services",
    href: "/insurance-verification-services",
    desc: "Front-end verification that reduces the coverage-related discrepancies posting would otherwise catch late.",
  },
  {
    title: "Prior Authorization Services",
    href: "/prior-authorization-services",
    desc: "Authorization management that helps prevent the denials posting would otherwise surface after the fact.",
  },
  {
    title: "Provider Credentialing Services",
    href: "/provider-credentialing-services",
    desc: "Credentialing that determines whether a claim can be paid at all before posting is ever relevant.",
  },
  {
    title: "Accounts Receivable Management",
    href: "/accounts-receivable-management",
    desc: "Ongoing follow-up on claims that posting and reconciliation identify as underpaid or unresolved.",
  },
] as const;

export const ppCompare = [
  {
    factor: "Cost",
    inHouse: "Staff time and systems regardless of payment volume",
    outsourced: "Scales with actual posting volume and need",
  },
  {
    factor: "Accuracy",
    inHouse: "Dependent on individual staff consistency and review habits",
    outsourced: "Structured verification and reconciliation built into the process",
  },
  {
    factor: "Speed",
    inHouse: "Dependent on internal staff bandwidth, often delayed during high volume",
    outsourced: "Dedicated capacity focused on timely posting",
  },
  {
    factor: "Compliance",
    inHouse: "Requires internal tracking of payer-specific posting requirements",
    outsourced: "Compliance built into the posting workflow",
  },
  {
    factor: "Technology",
    inHouse: "Requires investment in posting and reconciliation tools",
    outsourced: "Posting tools and ERA processing managed as part of the service",
  },
  {
    factor: "Scalability",
    inHouse: "Adding capacity requires additional staff hours",
    outsourced: "Capacity adjusts to payment volume changes",
  },
  {
    factor: "Expertise",
    inHouse: "Limited to what internal staff have learned through experience",
    outsourced: "Access to specialists trained specifically in posting and reconciliation",
  },
  {
    factor: "Reporting",
    inHouse: "Often limited to what's built into the practice management system",
    outsourced: "Structured reporting on posting activity and identified discrepancies",
  },
] as const;

export const ppWhyOutsource = [
  {
    title: "Operational Efficiency",
    desc: "Dedicated posting capacity means payments are reconciled promptly, without competing for attention against other administrative priorities.",
  },
  {
    title: "Cost Savings",
    desc: "Outsourcing avoids the fixed overhead of maintaining in-house posting staff and reconciliation systems.",
  },
  {
    title: "Expert Staff",
    desc: "Posting is handled by people specifically trained to recognize what a discrepancy, unusual adjustment, or missing payment might indicate.",
  },
  {
    title: "Fewer Posting Errors",
    desc: "Structured verification catches errors before they distort financial reporting or patient balances.",
  },
  {
    title: "Better Cash Flow",
    desc: "Timely, accurate posting supports a clearer, more current understanding of your practice's actual financial position.",
  },
  {
    title: "Return on Investment",
    desc: "The value of outsourced posting is measured in what it recovers — underpayments identified and corrected — as much as in the administrative time it saves.",
  },
] as const;

export const ppTimeline = [
  {
    step: "Discovery",
    desc: "We review your current posting practices, payer mix, and practice management system to understand your specific needs.",
  },
  {
    step: "Setup",
    desc: "Posting workflows are configured to match your systems and reporting preferences.",
  },
  {
    step: "Integration",
    desc: "Our process is integrated with your practice management or EHR system to support efficient, accurate posting.",
  },
  {
    step: "Daily Posting",
    desc: "Payments are posted and reconciled on an ongoing daily basis, rather than in periodic batches that create backlogs.",
  },
  {
    step: "Quality Review",
    desc: "Posted payments are reviewed for accuracy and reconciled against contracted rates to catch discrepancies.",
  },
  {
    step: "Monthly Reporting",
    desc: "You receive structured reporting on posting activity, identified discrepancies, and resolution status.",
  },
] as const;

export const ppFaqs: [string, string][] = [
  [
    "What is payment posting in medical billing?",
    "Payment posting is the process of recording payments received from insurance payers and patients into a practice's billing system, and reconciling those payments against what was originally billed to confirm accuracy.",
  ],
  [
    "What is the difference between ERA and EOB posting?",
    "An ERA is an electronic remittance advice that can typically be posted in a more automated, structured way. An EOB is a paper or PDF equivalent used when electronic remittance isn't available, requiring manual posting with the same level of reconciliation.",
  ],
  [
    "Why is payment posting important for a medical practice?",
    "Payment posting is what reveals whether a practice's actual collected revenue matches what was expected, making it essential for catching underpayments, denials, and inaccurate patient balances before they become larger problems.",
  ],
  [
    "How does payment posting help identify underpayments?",
    "By reconciling posted payments against contracted payer rates, payment posting surfaces discrepancies where a payment doesn't match what the contract specifies, often the first sign of an underpayment.",
  ],
  [
    "What happens if payment posting is delayed?",
    "Delayed posting causes accounts receivable data to become stale, making it harder to identify real payment issues, track patient balances accurately, or generate reliable financial reports.",
  ],
  [
    "Do you post both insurance and patient payments?",
    "Yes, we post payments from both insurance payers and patients, keeping both sides of the ledger accurate and current.",
  ],
  [
    "How do you handle overpayments identified during posting?",
    "Overpayments are identified through reconciliation and handled appropriately in line with payer-specific overpayment recovery requirements.",
  ],
  [
    "What causes duplicate payment posting, and how is it prevented?",
    "Duplicate posting typically occurs when the same ERA or EOB is processed more than once. A structured, tracked posting workflow helps prevent this by confirming each remittance is processed a single time.",
  ],
  [
    "Can payment posting errors affect patient billing?",
    "Yes, posting errors can result in inaccurate patient balances, which may lead to incorrect billing statements and patient confusion or disputes.",
  ],
  [
    "Is payment posting HIPAA compliant with your process?",
    "Yes, payment posting involves sensitive patient and financial information, and our processes are managed under HIPAA-compliant workflows with signed Business Associate Agreements.",
  ],
  [
    "How does payment posting relate to accounts receivable?",
    "Accurate, timely payment posting keeps accounts receivable data current, making it possible to identify which claims are genuinely outstanding versus already resolved but not yet reconciled.",
  ],
  [
    "What technology do you use for payment posting?",
    "We use structured posting and reconciliation tools integrated with ERA processing, supplemented by careful manual review for EOBs and posting exceptions.",
  ],
  [
    "How much does payment posting outsourcing cost?",
    "Pricing depends on payment volume, payer mix, and scope of service, and is typically discussed after an initial review of a practice's specific posting needs.",
  ],
  [
    "What specialties do you provide payment posting for?",
    "We provide payment posting support across specialties including mental health, behavioral health, psychiatry, family practice, internal medicine, cardiology, orthopedics, urgent care, pediatrics, and dental.",
  ],
  [
    "How quickly are payments posted after being received?",
    "Payments are posted on an ongoing daily basis rather than in periodic batches, keeping accounts receivable and patient ledgers current.",
  ],
];
