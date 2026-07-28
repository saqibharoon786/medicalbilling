/** Medical Billing Services pillar page — copy from content brief */

export const mbsWhatIncludes = [
  "Claim creation — converting documented services into a billable claim, using the correct procedure and diagnosis codes.",
  "Coding review — checking that CPT, ICD-10, and HCPCS codes accurately reflect the documentation and meet payer requirements.",
  "Claim submission — sending clean, accurate claims to the correct payer through electronic clearinghouses.",
  "Insurance follow-up — tracking submitted claims, responding to payer requests, and resolving any issues that arise before payment.",
  "Payment posting — recording payments from insurers and patients, and reconciling them against what was billed.",
  "Denial handling — identifying why a claim was denied, correcting the issue, and resubmitting or appealing it.",
  "Accounts receivable (A/R) recovery — following up on unpaid or aging claims until they are resolved.",
] as const;

export const mbsProblems = [
  {
    title: "Increasing Claim Denials",
    desc: "Payers continue to tighten documentation and coding requirements, and even minor errors — a missing modifier, an outdated code, a mismatched diagnosis — can result in a denied claim. Each denial means delayed payment at best, and lost revenue at worst if it isn't corrected and resubmitted in time.",
  },
  {
    title: "Incorrect Coding",
    desc: "Coding rules change frequently, and keeping in-house staff current on every specialty-specific update is difficult, especially for smaller practices without a dedicated coding team. Incorrect coding doesn't just cause denials — it can also lead to underpayment for services that were fully documented.",
  },
  {
    title: "Insurance Verification Problems",
    desc: "When coverage, copays, or plan limitations aren't verified before a visit, practices often discover the issue only after the claim is denied — long after the patient has already been seen.",
  },
  {
    title: "Delayed Payments",
    desc: "Even correctly submitted claims can take weeks to process. Without active follow-up, claims can sit in a payer's system far longer than necessary, straining cash flow in the meantime.",
  },
  {
    title: "Staff Burnout",
    desc: "Billing is time-consuming, detail-heavy work. Front-office and administrative staff who are stretched across billing, scheduling, and patient communication often can't give billing the sustained attention it needs — leading to burnout and turnover.",
  },
  {
    title: "Administrative Costs",
    desc: "Maintaining an in-house billing team means hiring, training, software costs, and ongoing education on payer rule changes — costs that scale with staff turnover and complexity, regardless of how many claims are actually being processed.",
  },
  {
    title: "Revenue Leakage",
    desc: "Missed charges, underbilled services, and claims that quietly age past timely filing deadlines all represent revenue that was earned but never collected — often without the practice realizing it happened.",
  },
  {
    title: "Lack of Billing Visibility",
    desc: "Many practices don't have a clear, real-time picture of their own revenue cycle: how many claims are pending, how many are denied, and how much revenue is sitting in aging accounts receivable.",
  },
] as const;

export const mbsProcess = [
  {
    step: "01",
    title: "Patient Data & Charge Entry",
    desc: "We begin with accurate entry of patient demographics, insurance details, and charge information based on documented services — the foundation every downstream step depends on.",
  },
  {
    step: "02",
    title: "Medical Coding Review",
    desc: "Certified coders review documentation against assigned CPT, ICD-10, and HCPCS codes, correcting mismatches or gaps before a claim moves forward.",
  },
  {
    step: "03",
    title: "Insurance Eligibility Verification",
    desc: "Before submission, we confirm the patient's active coverage, plan limitations, copay, and deductible status to catch eligibility-related issues early.",
  },
  {
    step: "04",
    title: "Claim Scrubbing",
    desc: "Every claim is checked against payer-specific rules and common denial triggers — missing modifiers, mismatched codes, incomplete fields — before it's ever submitted.",
  },
  {
    step: "05",
    title: "Claim Submission",
    desc: "Clean claims are submitted electronically to the correct payer through secure clearinghouse channels, reducing manual errors and processing delays.",
  },
  {
    step: "06",
    title: "Payment Posting",
    desc: "Payments from insurers and patients are posted and reconciled against EOBs and ERAs, so discrepancies are caught immediately rather than months later.",
  },
  {
    step: "07",
    title: "Denial Management",
    desc: "When a claim is denied, our team identifies the root cause, corrects the issue, and either resubmits the claim or files a formal appeal.",
  },
  {
    step: "08",
    title: "Accounts Receivable Follow-Up",
    desc: "Claims that remain unpaid are actively tracked and followed up on — not left to age silently in the system.",
  },
  {
    step: "09",
    title: "Reporting & Optimization",
    desc: "We review performance data regularly — denial trends, A/R aging, collection rates — and adjust the process as payer rules or your practice's needs change.",
  },
] as const;

export const mbsIncluded = [
  {
    title: "Charge Entry Services",
    desc: "Accurate, timely entry of charges based on documented encounters is the starting point for a clean claim. Errors here cascade through every later stage of the billing cycle, so we treat charge entry as a quality-control checkpoint, not a data-entry formality.",
    benefit: "Fewer downstream errors and a stronger foundation for accurate reimbursement.",
    href: null as string | null,
  },
  {
    title: "Insurance Verification",
    desc: "Before a patient is seen, we confirm active coverage, copay amounts, deductible status, and any plan-specific limitations that could affect the claim.",
    benefit: "Fewer denials tied to eligibility issues, and fewer billing surprises for patients after the visit.",
    href: "/insurance-verification-services",
  },
  {
    title: "Medical Coding Support",
    desc: "Certified coders assign and review CPT, ICD-10, and HCPCS codes based on clinical documentation, keeping pace with payer-specific and specialty-specific rule changes.",
    benefit: "Higher first-pass claim acceptance and reimbursement that accurately reflects the care provided.",
    href: "/medical-coding-services",
  },
  {
    title: "Claims Management",
    desc: "Full lifecycle handling of every claim — from scrubbing through submission, tracking, and resolution — so nothing is submitted and simply forgotten.",
    benefit: "Fewer claims lost in payer systems and faster resolution when issues arise.",
    href: "/claims-management-services",
  },
  {
    title: "Denial Management",
    desc: "When claims are denied, we investigate the specific reason, correct the underlying issue, and either resubmit or appeal — tracked through to resolution.",
    benefit: "Denials become recoverable revenue rather than automatic write-offs.",
    href: "/denial-management-services",
  },
  {
    title: "Payment Posting",
    desc: "Insurance and patient payments are posted accurately and reconciled against EOBs and ERAs, surfacing underpayments or discrepancies early.",
    benefit: "Reliable financial records and faster detection of payment issues.",
    href: "/payment-posting-services",
  },
  {
    title: "Prior Authorization",
    desc: "We manage the prior authorization process with payers for procedures and treatments that require it, keeping scheduling on track.",
    benefit: "Fewer delayed or canceled procedures and less staff time spent on hold with insurers.",
    href: "/prior-authorization-services",
  },
  {
    title: "Accounts Receivable Management",
    desc: "Structured, ongoing follow-up on aging claims — including claims that may have already been written off elsewhere.",
    benefit: "Recovery of revenue that would otherwise go uncollected.",
    href: "/accounts-receivable-management",
  },
] as const;

export const mbsWhy = [
  {
    title: "A Healthcare-Focused Billing Team",
    desc: "We work exclusively with healthcare providers. Our staff understands the clinical and regulatory context behind a claim, not just the codes on the page.",
  },
  {
    title: "Dedicated Specialists, Not a Rotating Call Center",
    desc: "Your practice is assigned a consistent billing team that learns your specialty, payer mix, and internal workflows — rather than being routed through whoever happens to be available.",
  },
  {
    title: "HIPAA-Compliant Workflows",
    desc: "Data security and compliance are built into how we operate, not treated as an afterthought. We work under signed Business Associate Agreements with every client.",
  },
  {
    title: "Transparent Reporting",
    desc: "You have visibility into claim status, denial reasons, and A/R aging as they happen, rather than waiting on a periodic summary to understand where things stand.",
  },
  {
    title: "Specialty Expertise",
    desc: "Billing rules vary meaningfully by specialty. Our team is trained to handle the specific coding and documentation requirements relevant to your field.",
  },
  {
    title: "Better Communication",
    desc: "You have a direct line to your billing team, not a generic support queue — which matters when a payer issue needs to be resolved quickly.",
  },
  {
    title: "Customized Billing Solutions",
    desc: "Your billing setup is configured around your specialty, systems, and patient volume, rather than adapted from a one-size-fits-all package.",
  },
] as const;

export const mbsSpecialties = [
  {
    title: "Mental Health Billing",
    href: "/specialties/mental-health-billing",
    desc: "Time-based CPT codes and session documentation requirements specific to therapy and counseling services.",
  },
  {
    title: "Behavioral Health Billing",
    href: "/specialties/behavioral-health-billing",
    desc: "Bundled service billing and authorization-dependent treatment programs.",
  },
  {
    title: "Psychiatry Billing",
    href: "/specialties/psychiatry-billing",
    desc: "Evaluation and management coding, medication management visits, and psychotherapy add-on codes.",
  },
  {
    title: "Dental Billing",
    href: "/specialties/dental-billing",
    desc: "Crossover claims between medical and dental insurance, a frequent source of denials.",
  },
  {
    title: "Cardiology Billing",
    href: "/specialties/cardiology-billing",
    desc: "Diagnostic testing codes, procedural billing, and modifier-heavy claim requirements.",
  },
  {
    title: "Orthopedic Billing",
    href: "/specialties/orthopedic-billing",
    desc: "Surgical bundling rules, global period tracking, and durable medical equipment (DME) billing.",
  },
  {
    title: "Family Practice Billing",
    href: "/specialties/family-practice-billing",
    desc: "High-volume, high-variety coding across preventive care and chronic condition management.",
  },
  {
    title: "Urgent Care Billing",
    href: "/specialties/urgent-care-billing",
    desc: "Fast-turnaround billing suited to high patient volume and same-day coding accuracy.",
  },
] as const;

export const mbsCompare = [
  {
    factor: "Cost",
    inHouse: "Salaries, benefits, training, and software costs regardless of claim volume or complexity",
    outsourced: "Costs typically scale with services used or collections, without the fixed overhead of full-time staff",
  },
  {
    factor: "Expertise",
    inHouse: "Dependent on the knowledge and availability of individual staff members",
    outsourced: "Access to a team with cross-specialty billing and coding experience",
  },
  {
    factor: "Technology",
    inHouse: "Requires ongoing investment in billing software and system updates",
    outsourced: "Billing systems, clearinghouse access, and updates are managed as part of the service",
  },
  {
    factor: "Scalability",
    inHouse: "Adding capacity requires hiring and training new staff",
    outsourced: "Capacity can adjust more readily to changes in patient volume",
  },
  {
    factor: "Denial Management",
    inHouse: "Often reactive, handled alongside many other administrative tasks",
    outsourced: "Dedicated, proactive follow-up as a core part of the service",
  },
  {
    factor: "Reporting",
    inHouse: "Varies widely depending on internal systems and staff bandwidth",
    outsourced: "Structured, consistent reporting on claims, denials, and A/R",
  },
  {
    factor: "Compliance",
    inHouse: "Requires internal ownership of HIPAA training and audit processes",
    outsourced: "Compliance built into workflows and staff training as standard practice",
  },
] as const;

export const mbsBenefits = [
  {
    title: "Reduce Administrative Workload",
    desc: "Your front-office and clinical staff spend less time on claim follow-up, insurance calls, and billing corrections.",
  },
  {
    title: "Improve Claim Accuracy",
    desc: "Certified coding review and pre-submission claim scrubbing reduce the errors that commonly lead to denials.",
  },
  {
    title: "Reduce Billing Errors",
    desc: "A dedicated team focused solely on billing is positioned to catch mistakes that get missed when billing is one of many competing responsibilities.",
  },
  {
    title: "Faster Reimbursement Cycle",
    desc: "Clean claims, submitted correctly the first time, tend to move through payer systems with fewer delays.",
  },
  {
    title: "Better Revenue Visibility",
    desc: "Structured reporting gives you a clearer, more current picture of collections, denials, and outstanding claims.",
  },
  {
    title: "Access to Billing Specialists",
    desc: "You gain access to coders and billers with deep, current knowledge of payer rules — without the cost of building that expertise in-house.",
  },
  {
    title: "Lower Operational Burden",
    desc: "Reduced need to manage billing software, staff turnover, and ongoing compliance training internally.",
  },
] as const;

export const mbsWhoWeHelp = [
  {
    title: "Solo physicians",
    desc: "who need billing handled reliably without hiring dedicated in-house staff.",
  },
  {
    title: "Small practices",
    desc: "looking to reduce administrative overhead while improving collections.",
  },
  {
    title: "Multi-provider clinics",
    desc: "that need consistent billing processes across several providers and schedules.",
  },
  {
    title: "Specialty practices",
    desc: "— including mental health, behavioral health, dental, cardiology, orthopedics, and more — that require specialty-specific coding knowledge.",
  },
  {
    title: "Healthcare organizations",
    desc: "managing higher claim volumes across multiple locations or departments.",
  },
] as const;

export const mbsRelated = [
  {
    title: "Revenue Cycle Management",
    href: "/revenue-cycle-management",
    desc: "A broader view of your entire financial process, from scheduling through final payment.",
  },
  {
    title: "Provider Credentialing Services",
    href: "/provider-credentialing-services",
    desc: "Support through payer credentialing and re-credentialing.",
  },
  {
    title: "Provider Enrollment Services",
    href: "/provider-enrollment-services",
    desc: "Enrollment support for new providers joining your practice.",
  },
  {
    title: "Denial Management Services",
    href: "/denial-management-services",
    desc: "Focused, root-cause resolution of denied claims.",
  },
] as const;

export const mbsFaqs: [string, string][] = [
  [
    "What are medical billing services?",
    "Medical billing services manage the process of turning documented patient care into accurate insurance claims, and following those claims through submission, denial resolution, and final payment. This includes coding review, claim submission, payment posting, and accounts receivable follow-up. The goal is to ensure healthcare providers are paid accurately and promptly for the care they deliver, while reducing the administrative burden on practice staff.",
  ],
  [
    "How do medical billing companies work?",
    "Medical billing companies typically receive encounter and patient data from a provider's practice management or EHR system. Their team reviews coding accuracy, verifies insurance eligibility, submits claims to payers, and follows up on any denials or unpaid claims. Reporting is provided so the practice can track collections, denial trends, and outstanding accounts receivable throughout the process.",
  ],
  [
    "Why should healthcare providers outsource medical billing?",
    "Outsourcing can reduce the cost and complexity of maintaining an in-house billing team, provide access to specialized coding and billing expertise, and free up administrative staff to focus on patient-facing tasks. It can also improve claim accuracy and reduce denials, since billing becomes the primary focus of a dedicated team rather than one responsibility among many.",
  ],
  [
    "What does a medical billing company do?",
    "A medical billing company manages the administrative and financial process that follows a patient encounter — entering charges, reviewing coding, verifying insurance, submitting claims, posting payments, and resolving denials. Essentially, it handles the work required to convert clinical documentation into collected revenue.",
  ],
  [
    "How much do medical billing services cost?",
    "Pricing models vary, and commonly include a percentage of collections or a flat monthly fee, depending on practice size, claim volume, and specialty. Costs are typically discussed after an initial review of a practice's billing volume and needs, since a single flat rate rarely reflects the complexity differences between practices.",
  ],
  [
    "What is included in outsourced medical billing?",
    "Outsourced medical billing typically includes charge entry, coding review, insurance eligibility verification, claim scrubbing and submission, payment posting, denial management, and accounts receivable follow-up. Some providers also include credentialing and prior authorization support as part of a broader service package.",
  ],
  [
    "How do medical billing services reduce claim denials?",
    "Denials are reduced primarily through proactive steps taken before a claim is ever submitted — verifying insurance eligibility, reviewing documentation against assigned codes, and scrubbing claims for common error patterns. When denials do occur, prompt root-cause analysis and resubmission or appeal further reduce lost revenue.",
  ],
  [
    "Do medical billing companies handle insurance verification?",
    "Yes, most full-service medical billing companies include insurance eligibility verification as part of their process, confirming active coverage, copay amounts, and plan limitations before a patient's appointment to reduce denials tied to eligibility issues.",
  ],
  [
    "What is the difference between medical billing and medical coding?",
    "Medical coding involves translating clinical documentation into standardized codes (CPT, ICD-10, HCPCS) that describe the diagnosis and services provided. Medical billing uses those codes to create and submit claims to insurance payers, then manages the process through to payment. Coding is a component of the broader billing process, not a separate, unrelated function.",
  ],
  [
    "How long does medical billing outsourcing take to set up?",
    "Onboarding timelines vary based on practice size, specialty, and existing systems, but typically involve an initial billing audit, strategy development, and integration with the practice's existing management or EHR software before claims processing begins under the new arrangement.",
  ],
  [
    "Are outsourced medical billing services HIPAA compliant?",
    "Reputable medical billing companies operate under HIPAA-compliant workflows and sign Business Associate Agreements (BAAs) with each client, outlining how protected health information is handled, stored, and secured throughout the billing process.",
  ],
  [
    "Do you support small medical practices?",
    "Yes. Medical billing services are structured to support practices of varying sizes, including solo practitioners and small group practices, with billing solutions scaled to match claim volume and complexity rather than requiring a large in-house team.",
  ],
  [
    "What specialties do you provide medical billing for?",
    "Specialty billing support commonly includes mental health, behavioral health, psychiatry, dental, cardiology, orthopedics, family practice, and urgent care, among others — each requiring specific coding and documentation knowledge unique to that field.",
  ],
  [
    "How do you handle denied claims?",
    "Denied claims are reviewed to determine the specific reason for denial, whether coding, documentation, or eligibility-related. The issue is then corrected, and the claim is either resubmitted or formally appealed, with follow-up continuing until the claim is resolved.",
  ],
  [
    "Do you provide revenue cycle management?",
    "Yes, revenue cycle management extends beyond billing alone to cover the entire financial process of a patient encounter, from scheduling and eligibility verification through coding, billing, and final payment collection, giving practices a more complete view of their financial performance.",
  ],
  [
    "Can you help with old unpaid claims?",
    "Yes, accounts receivable recovery services focus specifically on following up on aging or previously unresolved claims, including those that may have already been written off by a prior billing process, to recover revenue that would otherwise go uncollected.",
  ],
  [
    "What software and EHR systems do you support?",
    "Compatibility with practice management and EHR systems is typically reviewed during the initial billing audit or onboarding process to confirm integration requirements specific to your practice's existing technology.",
  ],
  [
    "Why choose American Billing Solutions?",
    "American Billing Solutions focuses exclusively on healthcare billing, provides a dedicated team rather than a rotating support queue, operates under HIPAA-compliant workflows, and offers transparent, real-time reporting so practices maintain visibility into their own revenue cycle rather than relying on periodic summaries.",
  ],
  [
    "How does the billing audit process work?",
    "A billing audit reviews a sample of recent claims, denial patterns, and accounts receivable aging to identify where revenue may currently be lost. It's typically offered at no cost and without obligation, providing a clear starting point before any services are implemented.",
  ],
  [
    "How can I get started with medical billing services?",
    "Getting started typically begins with a free billing audit to understand your current billing performance, followed by a tailored implementation plan based on your specialty, systems, and practice size. From there, onboarding and ongoing claims management begin under the new billing process.",
  ],
];
