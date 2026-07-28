/** Homepage v2 copy + URL map (exact routes from content brief) */

export const homeServices = [
  {
    title: "Medical Billing Services",
    href: "/medical-billing-services",
    desc: "Complete billing management — charge entry, claim submission, payment posting, and patient statements — handled end to end by our team.",
    benefit: "Reduces the administrative load on your front office and shortens the time between service delivery and payment.",
  },
  {
    title: "Revenue Cycle Management",
    href: "/revenue-cycle-management",
    desc: "A coordinated view of your entire revenue process, from patient scheduling through final reimbursement, designed to identify and close revenue gaps.",
    benefit: "Clearer financial visibility and fewer points where revenue quietly disappears.",
  },
  {
    title: "Medical Coding Services",
    href: "/medical-coding-services",
    desc: "Certified coders translate clinical documentation into accurate CPT, ICD-10, and HCPCS codes, aligned with current payer requirements.",
    benefit: "Higher first-pass claim acceptance and reimbursement that matches the care actually provided.",
  },
  {
    title: "Claims Management Services",
    href: "/claims-management-services",
    desc: "Full lifecycle claims handling — scrubbing, submission, tracking, and follow-up — so no claim is submitted and forgotten.",
    benefit: "Fewer claims lost in the system and faster resolution on the ones that need attention.",
  },
  {
    title: "Denial Management Services",
    href: "/denial-management-services",
    desc: "Root-cause review of denied claims, with corrected resubmission or formal appeal handled by specialists familiar with payer appeal processes.",
    benefit: "Denials become recoverable revenue instead of automatic write-offs.",
  },
  {
    title: "Insurance Verification Services",
    href: "/insurance-verification-services",
    desc: "Verification of patient coverage, copays, deductibles, and plan-specific limitations before the date of service.",
    benefit: "Fewer denials tied to eligibility issues and fewer billing surprises for patients.",
  },
  {
    title: "Prior Authorization Services",
    href: "/prior-authorization-services",
    desc: "Management of the prior authorization process with payers for procedures, treatments, and referrals that require it.",
    benefit: "Fewer delayed or canceled procedures and less staff time spent on authorization follow-up.",
  },
  {
    title: "Provider Credentialing Services",
    href: "/provider-credentialing-services",
    desc: "Support through the credentialing and re-credentialing process with commercial payers, Medicare, and Medicaid.",
    benefit: "Shorter time-to-billing for new providers and fewer reimbursement gaps due to lapsed credentials.",
  },
  {
    title: "Provider Enrollment Services",
    href: "/provider-enrollment-services",
    desc: "Enrollment support for providers joining your practice, including payer applications and status follow-up.",
    benefit: "New providers can begin generating billable revenue sooner.",
  },
  {
    title: "Payment Posting Services",
    href: "/payment-posting-services",
    desc: "Accurate posting of insurance and patient payments, reconciled against EOBs and ERAs to catch discrepancies early.",
    benefit: "Reliable financial records and earlier detection of underpayments.",
  },
  {
    title: "Accounts Receivable Management",
    href: "/accounts-receivable-management",
    desc: "Structured, ongoing follow-up on aging claims — including claims previously written off by other billing processes.",
    benefit: "Recovery of revenue that would otherwise go uncollected.",
  },
] as const;

export const homeSpecialties = [
  {
    title: "Mental Health Billing",
    href: "/specialties/mental-health-billing",
    desc: "Handles time-based CPT codes, session documentation requirements, and the coding nuances unique to therapy and counseling services.",
  },
  {
    title: "Behavioral Health Billing",
    href: "/specialties/behavioral-health-billing",
    desc: "Supports bundled service billing and authorization-dependent treatment programs common in behavioral health settings.",
  },
  {
    title: "Psychiatry Billing",
    href: "/specialties/psychiatry-billing",
    desc: "Covers evaluation and management coding, medication management visits, and psychotherapy add-on codes specific to psychiatric care.",
  },
  {
    title: "Dental Billing",
    href: "/specialties/dental-billing",
    desc: "Manages the crossover between medical and dental insurance claims, a frequent source of denials for dental practices.",
  },
  {
    title: "Cardiology Billing",
    href: "/specialties/cardiology-billing",
    desc: "Handles diagnostic testing codes, procedural billing, and the modifier requirements common in cardiology claims.",
  },
  {
    title: "Orthopedic Billing",
    href: "/specialties/orthopedic-billing",
    desc: "Addresses surgical bundling rules, global period tracking, and durable medical equipment (DME) billing.",
  },
  {
    title: "Family Practice Billing",
    href: "/specialties/family-practice-billing",
    desc: "Manages high-volume, high-variety visit coding across preventive care, chronic condition management, and acute visits.",
  },
  {
    title: "Urgent Care Billing",
    href: "/specialties/urgent-care-billing",
    desc: "Built for fast turnaround and high patient volume, with attention to same-day coding accuracy and level-of-service documentation.",
  },
] as const;

export const homeProblems = [
  { title: "Increasing claim denials", desc: "as payers tighten documentation and coding requirements." },
  { title: "Incorrect or incomplete coding", desc: "that leads to underpayment or outright rejection." },
  { title: "Insurance verification issues", desc: "that surface after the appointment, when it's too late to collect upfront." },
  { title: "Delayed reimbursements", desc: "that make it harder to predict cash flow month to month." },
  { title: "Administrative burden", desc: "that pulls front-office and clinical staff away from patient care." },
  { title: "Rising operational costs", desc: "tied to hiring, training, and retaining in-house billing staff." },
] as const;

export const homeTrust = [
  {
    title: "HIPAA-Compliant Workflows",
    desc: "Every process, from data intake to claim submission, is built around HIPAA requirements. We operate under signed Business Associate Agreements with every client, and our systems are designed to keep protected health information secure at every stage of the billing cycle.",
  },
  {
    title: "Certified Medical Coders",
    desc: "Our coding team holds industry-recognized certifications (such as CPC or CCS credentials) and stays current on CPT, ICD-10, and HCPCS updates, so your claims reflect the care you actually provided.",
  },
  {
    title: "Experienced Billing Specialists",
    desc: "Our billers understand payer-specific rules, timely filing deadlines, and the appeals process — not just data entry. That experience is what separates a claim that gets paid from one that gets denied.",
  },
  {
    title: "Transparent Reporting",
    desc: "You get visibility into your own revenue cycle: claim status, denial reasons, and A/R aging, without having to request a report and wait days for an answer.",
  },
  {
    title: "Secure Data Handling",
    desc: "Patient and practice data is handled through secure, access-controlled systems, with audit trails that support both compliance and accountability.",
  },
  {
    title: "Healthcare-Specific Expertise",
    desc: "We work exclusively with healthcare providers. Our team understands the operational and clinical context behind a claim — not just the codes on it.",
  },
] as const;

export const homeWhy = [
  {
    title: "We Work Exclusively in Healthcare Billing",
    desc: "This isn't a general back-office service that happens to handle medical claims. Our entire team works in medical billing and coding, and understands the operational and regulatory context behind every claim.",
  },
  {
    title: "Your Practice Gets a Dedicated Billing Team",
    desc: "Rather than routing your account through a shared, rotating pool of staff, you work with a consistent team that learns your specialty, your payer mix, and how your practice operates.",
  },
  {
    title: "Specialty-Focused Knowledge",
    desc: "Billing rules differ meaningfully across specialties. Our team is trained to handle the coding and documentation nuances specific to your field, rather than applying a generic billing template.",
  },
  {
    title: "Reporting You Can Actually Use",
    desc: "You get real visibility into claim status, denials, and collections — information you can use to make decisions, not just a summary at the end of the month.",
  },
  {
    title: "Compliance Built Into the Process",
    desc: "HIPAA compliance isn't handled as an afterthought. It's part of how our workflows, staff training, and systems are structured from the start.",
  },
  {
    title: "Faster Reimbursement Cycles",
    desc: "By catching errors before submission and following up proactively on outstanding claims, we shorten the time between providing care and getting paid for it.",
  },
  {
    title: "Active Revenue Recovery",
    desc: "We pursue denied and aging claims rather than writing them off — including claims that may have already been abandoned by a previous billing process.",
  },
  {
    title: "Workflows Built Around Your Practice",
    desc: "Your billing setup is configured to match your specialty, systems, and patient volume — not adapted from a generic package.",
  },
] as const;

export const homeProcess = [
  {
    step: "01",
    title: "Free Billing Audit",
    desc: "We review a sample of your recent claims, denial history, and A/R aging to identify where revenue is currently being lost — at no cost and with no obligation.",
  },
  {
    step: "02",
    title: "Revenue Cycle Analysis",
    desc: "Our team examines your full billing workflow, from patient intake through payment collection, to understand where inefficiencies or compliance risks exist.",
  },
  {
    step: "03",
    title: "Implementation Strategy",
    desc: "Based on the analysis, we build a billing plan specific to your specialty and payer mix, and begin onboarding your dedicated billing team and integrating with your practice management system.",
  },
  {
    step: "04",
    title: "Claims Optimization",
    desc: "We put ongoing claim scrubbing, coding review, and eligibility verification into practice to improve first-pass acceptance rates from day one.",
  },
  {
    step: "05",
    title: "Continuous Monitoring",
    desc: "Performance is reviewed on an ongoing basis. As payer requirements change and your practice grows, your billing process is adjusted to keep pace.",
  },
] as const;

export const homeResults = [
  {
    title: "Reduced Administrative Workload",
    desc: "Your staff spends less time on claim follow-up, insurance calls, and billing corrections.",
  },
  {
    title: "Better Claim Accuracy",
    desc: "Certified coding review and pre-submission scrubbing reduce the errors that lead to denials.",
  },
  {
    title: "Improved Collections",
    desc: "Proactive denial management and A/R follow-up recover revenue that might otherwise be written off.",
  },
  {
    title: "Faster Reimbursements",
    desc: "Clean claims submitted correctly the first time move through payer systems faster.",
  },
  {
    title: "Better Visibility Into Revenue",
    desc: "Real-time reporting means you can see where your revenue cycle stands at any point, rather than waiting for a periodic summary.",
  },
] as const;

export const homeResources = [
  {
    title: "CPT Code Guides",
    href: "/resources/cpt-codes",
    desc: "Specialty-specific explanations of commonly used and commonly misapplied CPT codes.",
  },
  {
    title: "ICD-10 Resources",
    href: "/resources/icd-10",
    desc: "Diagnosis coding references to help reduce coding-related denials.",
  },
  {
    title: "Denial Management Guides",
    href: "/resources/denial-management-guides",
    desc: "Explanations of common denial codes and practical approaches to appeals.",
  },
] as const;

export const homeFaqs: [string, string][] = [
  [
    "What are medical billing services?",
    "Medical billing services manage the process of coding, submitting, and following up on healthcare claims with insurance payers, so providers are accurately reimbursed for the care they deliver.",
  ],
  [
    "Why should a practice outsource medical billing?",
    "Outsourcing can reduce the cost and complexity of maintaining an in-house billing team, lower claim denial rates through specialized expertise, and free up staff time for patient-facing work.",
  ],
  [
    "How does outsourced medical billing actually work?",
    "Your practice shares encounter and patient data through a secure system; the billing partner codes, scrubs, and submits claims, then tracks them through payment, reporting results back to your practice on an ongoing basis.",
  ],
  [
    "What is revenue cycle management (RCM)?",
    "RCM refers to the entire financial process of a patient encounter — from scheduling and eligibility verification through coding, billing, and final payment collection.",
  ],
  [
    "How do you reduce claim denials?",
    "Denials are reduced primarily through eligibility verification before the visit, accurate coding based on documentation, and claim scrubbing before submission to catch errors proactively.",
  ],
  [
    "Are your billing services HIPAA compliant?",
    "Yes. Our workflows, staff training, and systems are built around HIPAA requirements, and we operate under signed Business Associate Agreements with clients.",
  ],
  [
    "Do you offer mental health and behavioral health billing?",
    "Yes. We provide billing support specific to mental health and behavioral health practices, including time-based coding and authorization-heavy treatment plans.",
  ],
  [
    "What happens when a claim is denied?",
    "Our team reviews the denial reason, corrects any errors, and either resubmits the claim or files a formal appeal, tracking it until it's resolved.",
  ],
  [
    "Do you handle insurance eligibility verification?",
    "Yes. We verify patient coverage, copays, and deductible information before appointments to reduce denials and billing surprises.",
  ],
  [
    "Can you help with provider credentialing?",
    "Yes. We support both initial credentialing and re-credentialing with commercial payers, Medicare, and Medicaid.",
  ],
  [
    "How long does it take to onboard a new practice?",
    "Onboarding timelines vary based on practice size, specialty, and existing systems, and are discussed in detail during the initial billing audit and strategy phase.",
  ],
  [
    "What medical specialties do you support?",
    "We support a range of specialties, including mental health, behavioral health, psychiatry, dental, cardiology, orthopedics, family practice, and urgent care.",
  ],
  [
    "How is billing performance reported to clients?",
    "Clients receive access to reporting on claim status, denial trends, and accounts receivable aging, allowing ongoing visibility into revenue cycle performance.",
  ],
  [
    "Do you work with practices of all sizes?",
    "Yes. Our services are structured to work for solo practitioners, small group practices, and larger multi-provider healthcare organizations.",
  ],
  [
    "What practice management or EHR systems do you support?",
    "Compatibility with your existing practice management or EHR system is reviewed during the initial billing audit to confirm integration requirements.",
  ],
  [
    "How is pricing structured for billing services?",
    "Pricing models vary — commonly a percentage of collections or a flat monthly fee — and are discussed based on your practice's size and service needs.",
  ],
  [
    "What is denial management, specifically?",
    "Denial management is the process of identifying why a claim was denied, correcting the underlying issue, and resubmitting or appealing the claim to recover the revenue.",
  ],
  [
    "Can you help recover old, unpaid claims?",
    "Yes. Our accounts receivable management service includes follow-up on aging claims, including those that may have previously been written off.",
  ],
];

/** Maps public marketing URLs → internal app routes */
export const serviceUrlRewrites: { source: string; destination: string }[] = [
  // /medical-billing-services is a dedicated pillar page (app/medical-billing-services)
  { source: "/revenue-cycle-management", destination: "/services/rcm" },
  { source: "/medical-coding-services", destination: "/services/medical-coding" },
  { source: "/claims-management-services", destination: "/services/charge-entry" },
  { source: "/denial-management-services", destination: "/services/denial-management" },
  { source: "/insurance-verification-services", destination: "/services/eligibility" },
  { source: "/prior-authorization-services", destination: "/services/prior-authorization" },
  { source: "/provider-credentialing-services", destination: "/services/credentialing" },
  { source: "/provider-enrollment-services", destination: "/services/provider-enrollment" },
  { source: "/payment-posting-services", destination: "/services/payment-posting" },
  { source: "/accounts-receivable-management", destination: "/services/ar-follow-up" },
];
