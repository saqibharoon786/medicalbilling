/** Claims Management Services pillar page */

export const cmWhyMatters = [
  {
    title: "Faster Reimbursements",
    desc: "Actively tracked claims move through payer systems with fewer unnecessary delays, since issues are caught and addressed as they arise rather than discovered weeks later.",
  },
  {
    title: "Higher Clean Claims Rate",
    desc: "A higher percentage of claims submitted correctly the first time means less time spent on resubmission and rework.",
  },
  {
    title: "Reduced Denials",
    desc: "Proactive scrubbing and tracking catch many of the errors that would otherwise result in denial.",
  },
  {
    title: "Improved Cash Flow",
    desc: "Fewer delays and denials translate directly into more predictable, faster-arriving revenue.",
  },
  {
    title: "Revenue Protection",
    desc: "Claims that would otherwise age silently or get lost in follow-up are instead tracked to resolution.",
  },
  {
    title: "Compliance",
    desc: "Consistent, well-documented claims processes support compliance with payer and regulatory requirements.",
  },
  {
    title: "Lower Administrative Burden",
    desc: "Structured claims tracking reduces the manual, reactive work of chasing down claim status one by one.",
  },
  {
    title: "Patient Satisfaction",
    desc: "Fewer billing errors and delays mean fewer confusing statements or unexpected balances for patients.",
  },
  {
    title: "Operational Efficiency",
    desc: "A well-managed claims process reduces the day-to-day friction of tracking claims manually across spreadsheets or disconnected systems.",
  },
] as const;

export const cmChallenges = [
  {
    title: "Claim rejections",
    desc: "Claims returned before adjudication due to formatting or data errors, distinct from denials that occur after payer review.",
  },
  {
    title: "Claim denials",
    desc: "Claims processed but denied for coding, documentation, or eligibility-related reasons.",
  },
  {
    title: "Coding errors",
    desc: "Inaccurate or mismatched codes that trigger denials or underpayment.",
  },
  {
    title: "Documentation gaps",
    desc: "Clinical documentation that doesn't fully support the billed codes.",
  },
  {
    title: "Payer-specific rules",
    desc: "Each payer has its own submission requirements and claim edits, making a uniform approach less effective.",
  },
  {
    title: "Late claim submission",
    desc: "Missing timely filing deadlines, which can eliminate the ability to collect on an otherwise valid claim.",
  },
  {
    title: "Missing modifiers",
    desc: "A frequent, avoidable cause of denial or underpayment.",
  },
  {
    title: "Duplicate claims",
    desc: "Accidental resubmission that creates processing confusion and delay.",
  },
  {
    title: "Claim aging",
    desc: "Claims that sit unresolved for extended periods without active follow-up.",
  },
  {
    title: "Revenue leakage",
    desc: "Claims that are underpaid, denied without appeal, or written off unnecessarily.",
  },
  {
    title: "Manual processing delays",
    desc: "Reliance on manual tracking methods that don't scale well with claim volume.",
  },
] as const;

export const cmProcess = [
  {
    step: "01",
    title: "Patient Registration",
    desc: "Accurate patient and insurance information collected at the start of the process, forming the foundation for every claim tied to that encounter.",
  },
  {
    step: "02",
    title: "Insurance Verification",
    desc: "Coverage and eligibility confirmed before the claim is built, reducing eligibility-related denial risk downstream.",
  },
  {
    step: "03",
    title: "Medical Coding Review",
    desc: "Claims are built on coding that's been reviewed for accuracy against documentation.",
  },
  {
    step: "04",
    title: "Claim Creation",
    desc: "The claim is assembled with accurate charge, coding, and patient information.",
  },
  {
    step: "05",
    title: "Claim Scrubbing",
    desc: "Every claim is checked against payer-specific rules and common error patterns before submission.",
  },
  {
    step: "06",
    title: "Electronic Submission",
    desc: "Clean claims are submitted electronically through clearinghouse channels for faster, more reliable processing.",
  },
  {
    step: "07",
    title: "Claim Tracking",
    desc: "Submitted claims are tracked through payer acknowledgment and adjudication, not just submitted and set aside.",
  },
  {
    step: "08",
    title: "Payer Follow-Up",
    desc: "Claims that stall or require additional information are proactively followed up on rather than left waiting.",
  },
  {
    step: "09",
    title: "Payment Posting",
    desc: "Payments received are posted and reconciled against what was billed.",
  },
  {
    step: "10",
    title: "Denial Resolution",
    desc: "Denied claims are investigated, corrected, and resubmitted or escalated to appeal as appropriate.",
  },
  {
    step: "11",
    title: "Appeals",
    desc: "Formal appeals are prepared and submitted for denials that warrant reconsideration.",
  },
  {
    step: "12",
    title: "Performance Reporting",
    desc: "Claims data is reviewed regularly to identify recurring issues and improve the process going forward.",
  },
] as const;

export const cmIncluded = [
  {
    title: "Electronic Claim Submission",
    desc: "Claims submitted through secure clearinghouse channels for faster, more reliable processing than manual submission methods.",
  },
  {
    title: "Claims Scrubbing",
    desc: "Pre-submission review checking claims against payer-specific rules and common denial triggers.",
  },
  {
    title: "Claims Tracking",
    desc: "Ongoing monitoring of every claim's status from submission through resolution.",
  },
  {
    title: "Claims Follow-Up",
    desc: "Proactive outreach to payers on claims that stall, require additional information, or exceed expected processing timelines.",
  },
  {
    title: "Rejected Claims Management",
    desc: "Identification and correction of claims returned before adjudication due to formatting or data errors.",
  },
  {
    title: "Denied Claims Management",
    desc: "Investigation and resolution of claims denied after payer review, coordinated closely with our denial management process.",
  },
  {
    title: "Claims Appeals",
    desc: "Preparation and submission of formal appeals for denials that warrant reconsideration.",
  },
  {
    title: "Claim Status Monitoring",
    desc: "Real-time visibility into where every claim stands in its lifecycle.",
  },
  {
    title: "Payment Reconciliation",
    desc: "Matching posted payments against billed charges to catch discrepancies or underpayment early.",
  },
  {
    title: "Claim Reporting",
    desc: "Structured reporting on claim volume, denial rates, and resolution timelines.",
  },
  {
    title: "Revenue Optimization",
    desc: "Using claims data to identify recurring issues and adjust processes to improve first-pass acceptance over time.",
  },
  {
    title: "Payer Communication",
    desc: "Direct, ongoing communication with payers to resolve claim issues efficiently.",
  },
  {
    title: "Compliance Review",
    desc: "Ensuring claims practices align with current payer and regulatory requirements.",
  },
  {
    title: "Quality Assurance",
    desc: "Structured review built into the claims process to catch errors before they affect payment.",
  },
  {
    title: "Claims Analytics",
    desc: "Data-driven insight into claims performance, used to continuously refine the process.",
  },
] as const;

export const cmSpecialties = [
  {
    title: "Mental Health",
    desc: "Time-based coding accuracy and session documentation are frequent points of scrutiny in mental health claims.",
  },
  {
    title: "Behavioral Health",
    desc: "Bundled and program-based claims require careful tracking, particularly when authorization dependencies are involved.",
  },
  {
    title: "Psychiatry",
    desc: "Claims combining evaluation and management with psychotherapy codes require careful review to avoid mismatched billing.",
  },
  {
    title: "Primary Care",
    desc: "High claim volume across a wide range of visit types requires efficient, consistent claims processing at scale.",
  },
  {
    title: "Family Medicine",
    desc: "Similar to primary care, with a broad mix of preventive, chronic, and acute service claims requiring accurate handling.",
  },
  {
    title: "Internal Medicine",
    desc: "Complex, often multi-diagnosis claims require careful coding-to-documentation alignment to avoid denial.",
  },
  {
    title: "Cardiology",
    desc: "Diagnostic and procedural claims often involve modifier complexity that increases denial risk if not carefully managed.",
  },
  {
    title: "Orthopedics",
    desc: "Surgical claims frequently involve bundling rules and global period considerations that require careful claims tracking.",
  },
  {
    title: "Urgent Care",
    desc: "High patient volume and same-day billing require fast, accurate claims processing without sacrificing accuracy.",
  },
  {
    title: "Pain Management",
    desc: "Frequent, procedure-heavy claims require close attention to authorization status and medical necessity documentation.",
  },
  {
    title: "Dental",
    desc: "Crossover claims between medical and dental insurance require familiarity with both claims systems.",
  },
  {
    title: "Telehealth",
    desc: "Claims involving telehealth-specific modifiers and place-of-service codes require attention to payer-specific, evolving rules.",
  },
] as const;

export const cmCompare = [
  {
    factor: "Cost",
    inHouse: "Staff time and systems regardless of claim volume",
    outsourced: "Scales with actual claims volume and need",
  },
  {
    factor: "Accuracy",
    inHouse: "Dependent on individual staff consistency",
    outsourced: "Structured scrubbing and QA processes",
  },
  {
    factor: "Compliance",
    inHouse: "Requires internal tracking of payer-specific rules",
    outsourced: "Compliance monitoring built into the workflow",
  },
  {
    factor: "Technology",
    inHouse: "Requires investment in claims tracking systems",
    outsourced: "Claims tracking tools managed as part of the service",
  },
  {
    factor: "Speed",
    inHouse: "Dependent on internal staff bandwidth",
    outsourced: "Dedicated capacity focused on timely follow-up",
  },
  {
    factor: "Scalability",
    inHouse: "Adding capacity requires hiring and training",
    outsourced: "Capacity adjusts to claim volume changes",
  },
  {
    factor: "Staff Productivity",
    inHouse: "Claims tracking competes with other administrative duties",
    outsourced: "Frees staff to focus on patient-facing work",
  },
  {
    factor: "Revenue",
    inHouse: "Errors may go uncaught without dedicated review",
    outsourced: "Structured process designed to protect earned revenue",
  },
  {
    factor: "Denial Prevention",
    inHouse: "Reactive, addressed after denials occur",
    outsourced: "Proactive scrubbing designed to prevent denials before submission",
  },
  {
    factor: "Cash Flow",
    inHouse: "Vulnerable to claims aging without active follow-up",
    outsourced: "Consistent tracking designed to keep claims moving",
  },
] as const;

export const cmWhy = [
  {
    title: "Experienced Claims Specialists",
    desc: "Our team manages claims as a dedicated, ongoing function — not a one-time submission task.",
  },
  {
    title: "HIPAA Compliance",
    desc: "Claims handling involves sensitive patient and billing information, managed under HIPAA-compliant workflows with signed Business Associate Agreements.",
  },
  {
    title: "Nationwide Payer Experience",
    desc: "Experience managing claims across Medicare, Medicaid, and a wide range of commercial payers nationwide.",
  },
  {
    title: "Transparent Reporting",
    desc: "You have visibility into claim status, denial trends, and resolution timelines, rather than a black-box submission process.",
  },
  {
    title: "Dedicated Team",
    desc: "Your practice works with a consistent point of contact who understands your claims history and payer mix.",
  },
  {
    title: "Fast Turnaround",
    desc: "Claims are scrubbed and submitted promptly, with proactive follow-up on anything that stalls.",
  },
  {
    title: "Customized Workflows",
    desc: "Claims processes are configured around your specialty and typical claim types, not applied generically.",
  },
  {
    title: "Revenue Cycle Expertise",
    desc: "Claims management is handled with a clear understanding of how it connects to coding, billing, and overall revenue cycle performance.",
  },
  {
    title: "Scalable Solutions",
    desc: "Whether your claim volume is modest or substantial, our process scales to match your practice's needs.",
  },
  {
    title: "Continuous Monitoring",
    desc: "Claims are tracked continuously through resolution, not checked periodically or only when a problem is flagged.",
  },
] as const;

export const cmRcmLinks = [
  {
    title: "Medical Billing",
    desc: "Claims management is the operational engine that carries billed claims through to resolution, making it inseparable from effective billing.",
  },
  {
    title: "Medical Coding",
    desc: "Coding accuracy is the foundation claims management builds on; claims management can't fix a fundamentally miscoded claim, only catch and correct it before submission.",
  },
  {
    title: "Insurance Verification",
    desc: "Verified eligibility reduces the volume of claims that require rework due to coverage issues discovered after submission.",
  },
  {
    title: "Prior Authorization",
    desc: "Claims tied to services requiring prior authorization need that status confirmed before submission to avoid preventable denial.",
  },
  {
    title: "Denial Management",
    desc: "Effective claims tracking is what surfaces denials quickly enough for denial management to act on them before filing deadlines pass.",
  },
  {
    title: "Payment Posting",
    desc: "Accurate payment posting depends on claims being tracked clearly enough to reconcile payments against what was actually billed.",
  },
  {
    title: "Accounts Receivable",
    desc: "Claims that fall out of active tracking are the ones most likely to age into difficult-to-recover A/R.",
  },
  {
    title: "Cash Flow",
    desc: "The speed and consistency of claims resolution directly shapes how predictable a practice's cash flow is month to month.",
  },
  {
    title: "Revenue Cycle",
    desc: "Claims management functions as the connective tissue of the revenue cycle, linking front-end accuracy to back-end collection.",
  },
] as const;

export const cmIndustries = [
  "Private practices",
  "Medical clinics",
  "Hospitals",
  "Mental health practices",
  "Behavioral health organizations",
  "Urgent care centers",
  "Dental clinics",
  "Telehealth providers",
  "Specialty practices",
  "Healthcare organizations",
] as const;

export const cmRelated = [
  {
    title: "Medical Billing Services",
    href: "/medical-billing-services",
    desc: "The broader billing operation claims management supports and connects to.",
  },
  {
    title: "Medical Coding Services",
    href: "/medical-coding-services",
    desc: "The coding accuracy claims management depends on from the outset.",
  },
  {
    title: "Denial Management Services",
    href: "/denial-management-services",
    desc: "Focused resolution for claims that have already been denied.",
  },
  {
    title: "Payment Posting Services",
    href: "/payment-posting-services",
    desc: "The reconciliation step that closes out a claim once payment is received.",
  },
] as const;

export const cmFaqs: [string, string][] = [
  [
    "What are claims management services?",
    "Claims management services involve overseeing an insurance claim through its entire lifecycle — creation, scrubbing, submission, tracking, payer follow-up, and resolution — to ensure claims are paid accurately and on time, or resolved through appeal if denied.",
  ],
  [
    "How is claims management different from medical billing?",
    "Medical billing is the broader function of creating and submitting claims and managing patient statements. Claims management focuses specifically on tracking and resolving each claim through its full lifecycle once it's been submitted.",
  ],
  [
    "What is claims scrubbing?",
    "Claims scrubbing is the process of reviewing a claim for errors — coding mismatches, missing modifiers, formatting issues — before it's submitted to a payer, reducing the likelihood of rejection or denial.",
  ],
  [
    "What's the difference between a claim rejection and a claim denial?",
    "A rejected claim is returned before it enters the payer's review process, typically due to a formatting or data error. A denied claim was reviewed by the payer and declined for a substantive reason, such as a coding or coverage issue.",
  ],
  [
    "How does claims management reduce denials?",
    "By scrubbing claims before submission and actively tracking them afterward, claims management catches many of the errors that would otherwise result in denial, and addresses issues quickly enough to correct them before deadlines pass.",
  ],
  [
    "What is electronic claims submission?",
    "Electronic claims submission is the process of sending claims to payers through secure clearinghouse channels rather than paper-based methods, generally resulting in faster, more reliable processing.",
  ],
  [
    "How long does the claims lifecycle typically take?",
    "Timelines vary by payer and claim complexity, but a well-managed claim typically moves from submission to resolution within a few weeks, assuming no issues arise that require correction or appeal.",
  ],
  [
    "Do you handle claims appeals?",
    "Yes, when a claim is denied for a reason that warrants reconsideration, we prepare and submit formal appeals with supporting documentation.",
  ],
  [
    "Are your claims management services HIPAA compliant?",
    "Yes, claims handling involves sensitive patient and billing information, and our processes are managed under HIPAA-compliant workflows with signed Business Associate Agreements.",
  ],
  [
    "How much do claims management services cost?",
    "Pricing depends on claim volume, specialty, and scope of service, and is typically discussed after an initial review of a practice's specific claims needs.",
  ],
  [
    "What technology do you use for claims tracking?",
    "We use structured claims tracking systems integrated with electronic submission tools, giving practices real-time visibility into claim status throughout the lifecycle.",
  ],
  [
    "Can outsourcing claims management improve cash flow?",
    "Yes, by reducing claim denials, rejections, and aging through proactive tracking and follow-up, outsourced claims management typically contributes to more predictable, timely cash flow.",
  ],
  [
    "What specialties do you support for claims management?",
    "We support claims management across specialties including mental health, behavioral health, psychiatry, primary care, cardiology, orthopedics, urgent care, pain management, dental, and telehealth.",
  ],
  [
    "How do you handle duplicate or aging claims?",
    "Duplicate claims are identified and corrected to avoid processing confusion, while aging claims are proactively followed up on to prevent them from exceeding timely filing deadlines.",
  ],
  [
    "What's the benefit of continuous claims monitoring versus periodic review?",
    "Continuous monitoring catches issues — stalled claims, missing information requests, early denial signals — as they happen, rather than discovering them during a periodic review when deadlines may already be at risk.",
  ],
];
