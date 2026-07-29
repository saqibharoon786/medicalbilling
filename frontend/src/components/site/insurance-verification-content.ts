/** Insurance Eligibility Verification Services pillar page */

export const ievWhyMatters = [
  {
    title: "Patient Coverage Confirmation",
    desc: "Confirms the patient's insurance is active and valid as of the date of service — the most basic, and most commonly overlooked, verification step.",
  },
  {
    title: "Copay Verification",
    desc: "Identifies the patient's copay obligation in advance, so it can be collected at the time of service rather than billed after the fact.",
  },
  {
    title: "Deductible Verification",
    desc: "Confirms how much of the patient's deductible has been met, which directly affects what the patient will owe versus what insurance will cover.",
  },
  {
    title: "Coinsurance Verification",
    desc: "Clarifies the percentage of costs the patient is responsible for after their deductible is met, reducing billing disputes later.",
  },
  {
    title: "Plan Limitations",
    desc: "Surfaces any service exclusions, visit limits, or coverage restrictions specific to the patient's plan before care is delivered.",
  },
  {
    title: "Out-of-Network Benefits",
    desc: "Confirms whether a patient has any out-of-network coverage, and what that coverage looks like, if the provider isn't in-network with their plan.",
  },
  {
    title: "Referral Requirements",
    desc: "Identifies whether the patient's plan requires a referral for the service being provided, preventing denials tied to missing referral documentation.",
  },
  {
    title: "Coverage Validation",
    desc: "Confirms coverage details specifically for the service being provided, not just general plan activity — some services may be excluded even under active coverage.",
  },
  {
    title: "Revenue Protection",
    desc: "Prevents the specific, common category of denials and write-offs that come from coverage issues discovered too late to correct.",
  },
  {
    title: "Patient Satisfaction",
    desc: "Patients who understand their financial responsibility before a visit are far less likely to be surprised — or frustrated — by a bill afterward.",
  },
] as const;

export const ievChallenges = [
  {
    title: "Coverage changes",
    desc: "Patients change plans, employers, or coverage status without necessarily informing the practice.",
  },
  {
    title: "Inactive insurance",
    desc: "Coverage that has lapsed or terminated, often without the patient realizing it.",
  },
  {
    title: "Wrong patient information",
    desc: "Errors in name, date of birth, or policy number can cause verification checks to fail or return inaccurate results.",
  },
  {
    title: "Plan exclusions",
    desc: "Services that are technically covered by the plan type but excluded under the specific policy.",
  },
  {
    title: "Authorization requirements",
    desc: "Coverage confirmed, but the specific service still requires prior authorization not yet identified.",
  },
  {
    title: "Coordination of benefits",
    desc: "Determining which payer is primary when a patient has multiple active insurance plans.",
  },
  {
    title: "Secondary insurance",
    desc: "Verifying and correctly sequencing secondary coverage adds complexity beyond single-payer verification.",
  },
  {
    title: "Manual verification delays",
    desc: "Phone-based or portal-based verification with individual payers can be slow, especially at high patient volume.",
  },
  {
    title: "Front-office workload",
    desc: "Verification competes for time with scheduling, check-in, and other front-desk responsibilities.",
  },
  {
    title: "Denied claims",
    desc: "The direct downstream consequence when eligibility issues aren't caught before the visit.",
  },
  {
    title: "Revenue leakage",
    desc: "Copays and deductibles not collected upfront because they weren't verified in advance are harder to collect after the fact.",
  },
] as const;

export const ievProcess = [
  {
    step: "01",
    title: "Patient Scheduling",
    desc: "Verification begins as soon as an appointment is scheduled, giving enough lead time to resolve any coverage issues before the visit.",
  },
  {
    step: "02",
    title: "Insurance Information Collection",
    desc: "Patient insurance details are collected and confirmed for accuracy — a common point of failure if not handled carefully.",
  },
  {
    step: "03",
    title: "Coverage Validation",
    desc: "We confirm the patient's insurance is active and valid for the date of service.",
  },
  {
    step: "04",
    title: "Benefits Verification",
    desc: "Plan benefits relevant to the scheduled service are reviewed, including any exclusions or limitations.",
  },
  {
    step: "05",
    title: "Copay & Deductible Verification",
    desc: "Copay amounts and deductible status are confirmed, giving the practice accurate figures to collect at time of service.",
  },
  {
    step: "06",
    title: "Referral Verification",
    desc: "We confirm whether a referral is required under the patient's plan, and whether one is already on file if needed.",
  },
  {
    step: "07",
    title: "Authorization Requirement Review",
    desc: "We identify whether the scheduled service requires prior authorization, flagging it early enough to initiate that process separately.",
  },
  {
    step: "08",
    title: "Documentation",
    desc: "Verification results are documented clearly, so front-office and billing staff have accurate, accessible information.",
  },
  {
    step: "09",
    title: "Provider Notification",
    desc: "Relevant coverage details and any issues are communicated to the practice before the appointment, not discovered afterward.",
  },
  {
    step: "10",
    title: "Reporting",
    desc: "Verification outcomes are tracked and reported, giving practices visibility into recurring coverage issues or verification trends.",
  },
] as const;

export const ievIncluded = [
  {
    title: "Coverage Verification",
    desc: "Confirmation that a patient's insurance is active and valid as of the date of service.",
  },
  {
    title: "Benefits Verification",
    desc: "Review of what services are covered under the patient's specific plan, including relevant limitations.",
  },
  {
    title: "Copay Verification",
    desc: "Identification of the patient's copay obligation for the scheduled visit type.",
  },
  {
    title: "Deductible Verification",
    desc: "Confirmation of how much of the patient's annual deductible has been met.",
  },
  {
    title: "Coinsurance Verification",
    desc: "Clarification of the percentage split between insurance and patient responsibility after the deductible is met.",
  },
  {
    title: "Referral Verification",
    desc: "Confirmation of whether a referral is required and whether one is properly on file.",
  },
  {
    title: "Policy Validation",
    desc: "Verification that policy numbers, group numbers, and plan details match what's on file with the payer.",
  },
  {
    title: "Coordination of Benefits",
    desc: "Determination of primary versus secondary payer responsibility when a patient has more than one active plan.",
  },
  {
    title: "Secondary Insurance Verification",
    desc: "Verification of secondary coverage details to ensure accurate claim sequencing after the primary payer processes.",
  },
  {
    title: "Medicare Verification",
    desc: "Verification specific to Medicare coverage, including relevant plan type (Original Medicare, Medicare Advantage) distinctions.",
  },
  {
    title: "Medicaid Verification",
    desc: "Verification of Medicaid eligibility, which can vary by state and requires attention to state-specific coverage rules.",
  },
  {
    title: "Commercial Insurance Verification",
    desc: "Verification across commercial payers, each with its own plan structures and benefit designs.",
  },
  {
    title: "Real-Time Eligibility Checks",
    desc: "Electronic verification where available, providing faster turnaround than manual phone-based checks.",
  },
  {
    title: "Manual Eligibility Verification",
    desc: "Direct payer contact for verification when real-time electronic checks aren't available or return incomplete information.",
  },
  {
    title: "Verification Reporting",
    desc: "Structured reporting on verification outcomes and trends, giving practices visibility into recurring coverage issues.",
  },
] as const;

export const ievSpecialties = [
  {
    title: "Mental Health",
    desc: "Session limits, authorization requirements for ongoing treatment, and plan-specific mental health parity rules require close attention during verification.",
  },
  {
    title: "Behavioral Health",
    desc: "Program-based services often have their own coverage structure separate from standard outpatient visit coverage.",
  },
  {
    title: "Psychiatry",
    desc: "Coverage for medication management visits and psychotherapy services may be verified separately, even within the same treatment plan.",
  },
  {
    title: "Primary Care",
    desc: "High appointment volume makes efficient, consistent verification particularly important to avoid front-office bottlenecks.",
  },
  {
    title: "Family Medicine",
    desc: "A broad range of visit types — preventive, chronic, acute — can each carry different coverage rules under the same plan.",
  },
  {
    title: "Cardiology",
    desc: "Diagnostic testing and procedures often require verification of specific coverage terms beyond a standard office visit.",
  },
  {
    title: "Orthopedics",
    desc: "Procedures and imaging frequently require both eligibility verification and separate prior authorization confirmation.",
  },
  {
    title: "Urgent Care",
    desc: "Same-day visits require fast verification turnaround, often without the scheduling lead time available in other settings.",
  },
  {
    title: "Dental",
    desc: "Verification may need to account for both medical and dental insurance, particularly for procedures with medical necessity components.",
  },
  {
    title: "Telehealth",
    desc: "Coverage for telehealth visits varies by payer and has changed significantly in recent years, requiring current, payer-specific verification.",
  },
  {
    title: "Pain Management",
    desc: "Frequent visits and procedure-heavy treatment plans require attention to visit limits and authorization requirements tied to specific interventions.",
  },
] as const;

export const ievCompare = [
  {
    factor: "Cost",
    inHouse: "Staff time spent on verification regardless of patient volume",
    outsourced: "Scales with actual verification volume and need",
  },
  {
    factor: "Speed",
    inHouse: "Dependent on front-office bandwidth and payer response times",
    outsourced: "Dedicated capacity focused specifically on verification turnaround",
  },
  {
    factor: "Accuracy",
    inHouse: "Risk of inconsistency across different staff members",
    outsourced: "Structured, consistent verification process",
  },
  {
    factor: "Compliance",
    inHouse: "Requires internal tracking of payer-specific verification requirements",
    outsourced: "Verification workflows built around current payer requirements",
  },
  {
    factor: "Staff Workload",
    inHouse: "Competes directly with scheduling and check-in responsibilities",
    outsourced: "Frees front-office staff to focus on patient-facing tasks",
  },
  {
    factor: "Technology",
    inHouse: "May rely on manual phone verification without electronic tools",
    outsourced: "Access to real-time eligibility checking tools where available",
  },
  {
    factor: "Scalability",
    inHouse: "Adding verification capacity requires additional staff hours",
    outsourced: "Capacity adjusts to appointment volume without added internal burden",
  },
  {
    factor: "Denial Prevention",
    inHouse: "Inconsistent verification increases eligibility-related denial risk",
    outsourced: "Consistent, proactive verification designed specifically to prevent denials",
  },
  {
    factor: "Revenue Impact",
    inHouse: "Missed verification can result in unexpected write-offs",
    outsourced: "Designed to reduce revenue lost to preventable coverage issues",
  },
  {
    factor: "Patient Experience",
    inHouse: "Coverage surprises can occur if verification is inconsistent",
    outsourced: "Patients arrive informed about their financial responsibility in advance",
  },
] as const;

export const ievWhy = [
  {
    title: "Experienced Verification Team",
    desc: "Our specialists handle eligibility verification as a core, dedicated function — not an add-on task squeezed into other front-office responsibilities.",
  },
  {
    title: "HIPAA Compliance",
    desc: "Verification involves handling sensitive patient and insurance information, managed under HIPAA-compliant workflows with signed Business Associate Agreements.",
  },
  {
    title: "Dedicated Account Managers",
    desc: "Your practice works with a consistent point of contact who understands your patient volume, specialty, and payer mix.",
  },
  {
    title: "Fast Turnaround",
    desc: "Verification is completed with enough lead time to resolve issues before the scheduled appointment, not after.",
  },
  {
    title: "Accurate Verification",
    desc: "A structured process reduces the risk of incomplete or inaccurate coverage information reaching your billing team.",
  },
  {
    title: "Nationwide Insurance Experience",
    desc: "Our team has experience verifying coverage across Medicare, Medicaid, and a wide range of commercial payers nationwide.",
  },
  {
    title: "Transparent Reporting",
    desc: "You have visibility into verification outcomes and trends, helping identify recurring coverage issues across your patient population.",
  },
  {
    title: "Scalable Solutions",
    desc: "Whether you're a solo practice or a high-volume multi-location group, verification capacity adjusts to your actual patient volume.",
  },
  {
    title: "Revenue Cycle Expertise",
    desc: "Verification is handled as part of a broader understanding of how front-end processes affect downstream billing and collections.",
  },
  {
    title: "Customized Workflows",
    desc: "Verification processes are configured around your specialty, scheduling patterns, and payer mix, rather than applied generically.",
  },
] as const;

export const ievRcmLinks = [
  {
    title: "Medical Billing",
    desc: "Claims built on unverified coverage assumptions are far more likely to be denied, creating rework that proper verification would have prevented.",
  },
  {
    title: "Medical Coding",
    desc: "Verified plan details can clarify coverage limitations relevant to how services should be coded and billed.",
  },
  {
    title: "Claims Submission",
    desc: "Verified eligibility reduces the number of claims submitted with coverage-related errors from the outset.",
  },
  {
    title: "Claim Acceptance",
    desc: "Claims built on confirmed coverage information are more likely to be accepted on first submission.",
  },
  {
    title: "Cash Flow",
    desc: "Fewer eligibility-related denials mean fewer delays waiting on resubmission and appeals, improving payment predictability.",
  },
  {
    title: "Patient Collections",
    desc: "Knowing copay and deductible amounts in advance makes it possible to collect patient responsibility at the time of service, rather than billing after the fact.",
  },
  {
    title: "Accounts Receivable",
    desc: "Reduces the volume of claims that end up in extended A/R follow-up due to preventable coverage issues.",
  },
] as const;

export const ievIndustries = [
  "Private practices",
  "Clinics",
  "Hospitals",
  "Behavioral health organizations",
  "Mental health practices",
  "Urgent care centers",
  "Dental clinics",
  "Telehealth providers",
  "Specialty practices",
  "Healthcare organizations",
] as const;

export const ievRelated = [
  {
    title: "Medical Billing Services",
    href: "/medical-billing-services",
    desc: "The billing process that verified eligibility data feeds directly into.",
  },
  {
    title: "Revenue Cycle Management",
    href: "/revenue-cycle-management",
    desc: "The broader financial process that eligibility verification supports at the front end.",
  },
  {
    title: "Medical Coding Services",
    href: "/medical-coding-services",
    desc: "Coding accuracy that benefits from clear, verified coverage information.",
  },
  {
    title: "Prior Authorization Services",
    href: "/prior-authorization-services",
    desc: "The related approval process required for specific services beyond standard eligibility verification.",
  },
] as const;

export const ievFaqs: [string, string][] = [
  [
    "What is insurance eligibility verification?",
    "Insurance eligibility verification is the process of confirming a patient's active insurance coverage, plan benefits, and financial responsibility — including copay and deductible amounts — before they receive care, reducing the risk of coverage-related claim denials.",
  ],
  [
    "Why is eligibility verification important for healthcare providers?",
    "Verification prevents claims from being submitted based on incorrect coverage assumptions, reducing denials, improving cash flow predictability, and helping patients understand their financial responsibility before their visit.",
  ],
  [
    "What is the difference between eligibility verification and prior authorization?",
    "Eligibility verification confirms that a patient's coverage is active and outlines their benefits. Prior authorization is a separate payer approval process required for specific procedures or treatments, even when a patient's general coverage is already verified.",
  ],
  [
    "How does eligibility verification reduce claim denials?",
    "By identifying coverage issues, plan exclusions, or missing referral requirements before a claim is ever submitted, verification prevents a significant category of denials that would otherwise only be discovered after the fact.",
  ],
  [
    "What information does insurance verification confirm?",
    "Verification typically confirms active coverage status, copay amount, deductible status, coinsurance percentage, plan limitations, referral requirements, and whether prior authorization may be needed for a specific service.",
  ],
  [
    "Do you verify Medicare and Medicaid coverage?",
    "Yes, we verify eligibility across Medicare, Medicaid, and commercial payers, accounting for the specific verification requirements and coverage structures relevant to each.",
  ],
  [
    "Can you verify secondary insurance coverage?",
    "Yes, we verify secondary insurance details and help determine coordination of benefits, ensuring claims are sequenced correctly between primary and secondary payers.",
  ],
  [
    "How far in advance should eligibility be verified?",
    "Verification is generally most effective when completed as soon as an appointment is scheduled, allowing enough time to resolve any coverage issues before the date of service.",
  ],
  [
    "What happens if a patient's coverage is inactive?",
    "If verification identifies inactive coverage, the practice is notified before the appointment, allowing time to address the issue with the patient or reschedule as needed, rather than discovering it after a claim is denied.",
  ],
  [
    "Is insurance eligibility verification HIPAA compliant?",
    "Yes, verification involves handling sensitive patient and insurance information, and our processes are managed under HIPAA-compliant workflows with signed Business Associate Agreements.",
  ],
  [
    "How much does insurance eligibility verification cost?",
    "Pricing depends on patient volume, payer mix, and scope of service, and is typically discussed after an initial review of a practice's verification needs.",
  ],
  [
    "Do you offer real-time eligibility checks?",
    "Yes, we use real-time electronic eligibility checking where available, supplemented by manual verification for payers or situations where electronic checks return incomplete information.",
  ],
  [
    "What specialties do you provide eligibility verification for?",
    "We provide verification support across specialties including mental health, behavioral health, psychiatry, primary care, cardiology, orthopedics, urgent care, dental, telehealth, and pain management.",
  ],
  [
    "Can outsourcing eligibility verification reduce front-office workload?",
    "Yes, outsourcing verification frees front-office staff from a time-consuming, detail-heavy task, allowing them to focus more directly on scheduling and patient-facing responsibilities.",
  ],
  [
    "How does eligibility verification improve the patient experience?",
    "When copay and deductible amounts are confirmed in advance, patients understand their financial responsibility before their visit, reducing billing disputes and surprise charges after the fact.",
  ],
];
