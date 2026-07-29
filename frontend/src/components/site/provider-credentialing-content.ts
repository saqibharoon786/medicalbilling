/** Provider Credentialing Services pillar page — copy from content brief */

export const pcsWhyCritical = [
  {
    title: "Getting Paid by Insurance",
    desc: "Without active credentialing, claims for a provider's services generally can't be paid by that payer, regardless of the quality or necessity of the care delivered.",
  },
  {
    title: "Network Participation",
    desc: "Being credentialed and enrolled as an in-network provider gives patients an incentive to choose your practice, since their insurance covers services at in-network rates.",
  },
  {
    title: "Patient Trust",
    desc: "Credentialing verification — confirming education, training, and licensure — is part of what gives patients and payers confidence in a provider's qualifications.",
  },
  {
    title: "Compliance",
    desc: "Maintaining active, accurate credentialing status is a compliance requirement, not an optional administrative task, particularly for Medicare and Medicaid participation.",
  },
  {
    title: "Risk Reduction",
    desc: "Lapsed credentialing can expose a practice to billing compliance risk if claims are submitted under a provider whose status isn't current.",
  },
  {
    title: "Practice Growth",
    desc: "New providers can't generate billable revenue until credentialing is complete, making credentialing speed a direct factor in how quickly practice growth translates into revenue.",
  },
  {
    title: "Revenue Protection",
    desc: "Expired or lapsed credentials are one of the more preventable causes of denied claims and revenue disruption — preventable with proactive tracking and renewal management.",
  },
  {
    title: "Faster Reimbursements",
    desc: "Providers who are properly credentialed and enrolled avoid the claim denials and delays that come from billing under an inactive or non-participating status.",
  },
] as const;

export const pcsChallenges = [
  {
    title: "Delayed approvals",
    desc: "Payer processing times vary widely and can extend credentialing timelines well beyond initial expectations.",
  },
  {
    title: "Application errors",
    desc: "Incomplete or inconsistent information across applications is one of the most common causes of processing delays.",
  },
  {
    title: "Missing documentation",
    desc: "Licenses, certifications, or work history documentation that isn't submitted in the format or completeness a payer requires.",
  },
  {
    title: "Expired licenses",
    desc: "Credentialing applications stall immediately if underlying licenses or certifications aren't current.",
  },
  {
    title: "CAQH maintenance",
    desc: "CAQH profiles require regular attestation and updates; a stale profile can delay every payer application tied to it.",
  },
  {
    title: "Insurance follow-ups",
    desc: "Credentialing applications often require active follow-up to keep moving; payers rarely proactively update applicants on status.",
  },
  {
    title: "Payer communication",
    desc: "Each payer has its own process, portal, and point of contact, making consistent follow-up time-consuming.",
  },
  {
    title: "Recredentialing deadlines",
    desc: "Missing a recredentialing deadline can result in a lapse in network status, even for an established provider.",
  },
  {
    title: "Enrollment delays",
    desc: "Credentialing approval doesn't always mean enrollment is immediately complete; the two processes can have separate timelines.",
  },
  {
    title: "Revenue loss",
    desc: "Every day of delayed credentialing is a day of unbillable services for that payer relationship.",
  },
  {
    title: "Administrative burden",
    desc: "Credentialing is document-heavy and detail-intensive, often competing for attention with other practice management priorities.",
  },
] as const;

export const pcsProcess = [
  {
    step: "01",
    title: "Provider Information Collection",
    desc: "We gather the provider's education, training, licensure, work history, and other documentation required across payer applications.",
  },
  {
    step: "02",
    title: "Document Verification",
    desc: "Licenses, certifications, malpractice history, and other required documents are verified for completeness and current validity before submission.",
  },
  {
    step: "03",
    title: "CAQH Profile Setup & Maintenance",
    desc: "We establish or update the provider's CAQH profile, which many commercial payers rely on as a shared data source for credentialing.",
  },
  {
    step: "04",
    title: "Application Preparation",
    desc: "Payer-specific applications are prepared accurately and completely, reducing the risk of processing delays due to errors or missing information.",
  },
  {
    step: "05",
    title: "Insurance Submission",
    desc: "Applications are submitted to the relevant payers — Medicare, Medicaid, and commercial insurers — through each payer's required process.",
  },
  {
    step: "06",
    title: "Follow-Up With Payers",
    desc: "We proactively follow up on submitted applications rather than waiting for payers to reach out, keeping the process moving.",
  },
  {
    step: "07",
    title: "Approval Tracking",
    desc: "Application status is tracked through to approval, with issues addressed as they arise rather than discovered after the fact.",
  },
  {
    step: "08",
    title: "Provider Enrollment",
    desc: "Once credentialed, we complete the enrollment process so the provider is fully set up to bill under the new payer relationship.",
  },
  {
    step: "09",
    title: "Ongoing Recredentialing",
    desc: "We track recredentialing deadlines proactively, initiating the renewal process before expiration to avoid any lapse in network status.",
  },
  {
    step: "10",
    title: "Reporting",
    desc: "You receive visibility into credentialing status across every provider and payer relationship, rather than having to track it manually.",
  },
] as const;

export const pcsIncluded = [
  {
    title: "Physician Credentialing",
    desc: "Full credentialing support for physicians across specialties, from initial application through payer approval.",
  },
  {
    title: "Nurse Practitioner Credentialing",
    desc: "Credentialing support tailored to NP-specific licensure and payer requirements, which can differ from physician credentialing pathways.",
  },
  {
    title: "Mental Health Provider Credentialing",
    desc: "Credentialing for licensed therapists, counselors, and mental health providers, including payers with mental-health-specific network requirements.",
  },
  {
    title: "Behavioral Health Credentialing",
    desc: "Support for behavioral health organizations navigating program-level and provider-level credentialing requirements.",
  },
  {
    title: "Group Practice Credentialing",
    desc: "Coordinated credentialing across multiple providers within a single practice, keeping timelines and documentation consistent.",
  },
  {
    title: "Hospital Credentialing",
    desc: "Support for providers seeking hospital privileges, which often involves additional verification steps beyond standard payer credentialing.",
  },
  {
    title: "Medicare Credentialing",
    desc: "Credentialing and enrollment support specific to Medicare's requirements and processes, including PECOS.",
  },
  {
    title: "Medicaid Credentialing",
    desc: "Support navigating state-specific Medicaid credentialing requirements, which vary meaningfully from state to state.",
  },
  {
    title: "Commercial Insurance Credentialing",
    desc: "Credentialing with commercial payers, coordinated where possible through CAQH to reduce duplicate data entry across applications.",
  },
  {
    title: "CAQH Profile Management",
    desc: "Ongoing maintenance and attestation of CAQH profiles, which many commercial payers require to be current before processing applications.",
  },
  {
    title: "PECOS Enrollment",
    desc: "Support navigating PECOS (Medicare's Provider Enrollment, Chain, and Ownership System), required for Medicare enrollment and billing.",
  },
  {
    title: "License Verification",
    desc: "Confirmation that all required state licenses are current and properly documented before submission.",
  },
  {
    title: "DEA Verification",
    desc: "Verification of DEA registration status for providers who prescribe controlled substances, where relevant to the credentialing application.",
  },
  {
    title: "NPI Registration Support",
    desc: "Assistance confirming and maintaining accurate National Provider Identifier (NPI) registration, foundational to every credentialing application.",
  },
  {
    title: "Recredentialing Services",
    desc: "Proactive tracking and management of recredentialing deadlines, typically required every two to three years depending on the payer.",
  },
  {
    title: "Credentialing Maintenance",
    desc: "Ongoing management of documentation updates, license renewals, and CAQH attestations to keep credentialing status active without interruption.",
  },
] as const;

export const pcsSpecialties = [
  {
    title: "Mental Health",
    desc: "Credentialing timelines and payer network requirements for mental health providers can differ from general medical credentialing, particularly around license type verification.",
  },
  {
    title: "Behavioral Health",
    desc: "Organizational-level credentialing may be required in addition to individual provider credentialing, depending on the payer and program structure.",
  },
  {
    title: "Psychiatry",
    desc: "Credentialing needs to account for both medical licensure and any additional certifications relevant to psychiatric practice.",
  },
  {
    title: "Primary Care",
    desc: "Often has more standardized credentialing pathways, but high patient volume makes credentialing speed particularly important for revenue continuity.",
  },
  {
    title: "Family Medicine",
    desc: "Similar to primary care, with credentialing timelines directly affecting a new provider's ability to begin seeing a full patient panel.",
  },
  {
    title: "Internal Medicine",
    desc: "Credentialing considerations are generally standard, though sub-specialty certifications may require additional documentation.",
  },
  {
    title: "Cardiology",
    desc: "Sub-specialty board certifications and hospital privileging often add additional steps to the standard credentialing process.",
  },
  {
    title: "Orthopedics",
    desc: "Hospital credentialing and surgical privileging frequently run alongside standard payer credentialing, adding complexity.",
  },
  {
    title: "Pain Management",
    desc: "DEA verification and controlled substance prescribing authority are a more central part of the credentialing review process.",
  },
  {
    title: "Urgent Care",
    desc: "High provider turnover and rotating staff can make credentialing management an ongoing, continuous process rather than a one-time task.",
  },
  {
    title: "Dental",
    desc: "Dental credentialing often runs through separate payer networks from medical credentialing, requiring familiarity with both systems.",
  },
  {
    title: "Telehealth Providers",
    desc: "Multi-state licensure and payer-specific telehealth credentialing requirements add complexity, particularly for providers practicing across state lines.",
  },
] as const;

export const pcsCompare = [
  {
    factor: "Cost",
    inHouse: "Staff time and training regardless of credentialing volume",
    outsourced: "Scales with actual credentialing need",
  },
  {
    factor: "Accuracy",
    inHouse: "Dependent on individual staff familiarity with payer requirements",
    outsourced: "Backed by specialists who manage applications across many payers",
  },
  {
    factor: "Approval Time",
    inHouse: "Often slower without dedicated, consistent follow-up",
    outsourced: "Proactive follow-up designed to keep applications moving",
  },
  {
    factor: "Compliance",
    inHouse: "Requires internal tracking of every payer's specific requirements",
    outsourced: "Compliance tracking built into the credentialing workflow",
  },
  {
    factor: "Administrative Work",
    inHouse: "Falls on practice managers alongside other responsibilities",
    outsourced: "Handled by a dedicated credentialing team",
  },
  {
    factor: "Scalability",
    inHouse: "Adding providers requires proportional internal staff time",
    outsourced: "Capacity adjusts to practice growth without added internal burden",
  },
  {
    factor: "Expertise",
    inHouse: "Limited to what internal staff have learned through experience",
    outsourced: "Access to specialists familiar with Medicare, Medicaid, and commercial payer processes",
  },
  {
    factor: "Technology",
    inHouse: "Requires internal tracking systems for deadlines and documentation",
    outsourced: "Structured tracking and reporting built into the service",
  },
  {
    factor: "Follow-Up",
    inHouse: "Often reactive, addressed when issues surface",
    outsourced: "Proactive tracking of every application and deadline",
  },
  {
    factor: "Revenue Impact",
    inHouse: "Delays can go unnoticed until a provider is unable to bill",
    outsourced: "Designed specifically to minimize revenue disruption from credentialing gaps",
  },
] as const;

export const pcsWhy = [
  {
    title: "Dedicated Credentialing Specialists",
    desc: "Your practice works with a consistent point of contact who understands your providers, payer mix, and credentialing history — not a rotating queue.",
  },
  {
    title: "Nationwide Insurance Network Experience",
    desc: "Our team has experience navigating credentialing processes across Medicare, Medicaid, and commercial payers nationwide.",
  },
  {
    title: "HIPAA Compliance",
    desc: "Credentialing involves sensitive provider and practice information, handled under HIPAA-compliant workflows with signed Business Associate Agreements.",
  },
  {
    title: "Transparent Reporting",
    desc: "You have visibility into the status of every credentialing and recredentialing application, rather than having to request updates.",
  },
  {
    title: "Faster Processing",
    desc: "Proactive follow-up and accurate application preparation are designed to reduce unnecessary delays in the credentialing timeline.",
  },
  {
    title: "Experienced Team",
    desc: "Our specialists understand payer-specific requirements and common causes of processing delays, and structure applications to avoid them.",
  },
  {
    title: "Compliance Focus",
    desc: "Credentialing accuracy and documentation completeness are treated as compliance priorities, not just administrative tasks.",
  },
  {
    title: "Personalized Support",
    desc: "Credentialing plans are built around your specific providers, specialties, and payer relationships.",
  },
  {
    title: "Ongoing Maintenance",
    desc: "We track recredentialing deadlines and documentation renewals proactively, so network status doesn't lapse.",
  },
  {
    title: "Scalable Solutions",
    desc: "Whether you're credentialing a single new provider or managing an entire group practice, our process scales to match your needs.",
  },
] as const;

export const pcsRcmLinks = [
  {
    title: "Medical Billing",
    desc: "Billing simply cannot begin for a payer a provider isn't credentialed and enrolled with; credentialing is a prerequisite, not a parallel process.",
  },
  {
    title: "Claims Submission",
    desc: "Claims submitted under a provider without active credentialing status are typically denied outright, regardless of accuracy elsewhere in the claim.",
  },
  {
    title: "Insurance Payments",
    desc: "Delayed credentialing directly delays the point at which a provider can begin receiving in-network payments.",
  },
  {
    title: "Revenue Cycle",
    desc: "Because credentialing gates the entire billing process for a given payer, it's one of the highest-leverage points in the revenue cycle to get right early.",
  },
  {
    title: "Practice Growth",
    desc: "Adding new providers only translates into new revenue once credentialing is complete, making credentialing speed a direct factor in growth timelines.",
  },
  {
    title: "Cash Flow",
    desc: "Credentialing delays create a gap between when a provider starts seeing patients and when the practice can actually collect payment for that care.",
  },
  {
    title: "Patient Access",
    desc: "Credentialing with a broader range of payers expands the pool of patients who can see a provider at in-network rates, directly affecting patient access and practice volume.",
  },
] as const;

export const pcsIndustries = [
  "Private practices",
  "Medical clinics",
  "Hospitals",
  "Behavioral health organizations",
  "Mental health practices",
  "Urgent care centers",
  "Dental clinics",
  "Telehealth providers",
  "Group practices",
  "Healthcare organizations",
] as const;

export const pcsRelated = [
  {
    title: "Medical Billing Services",
    href: "/medical-billing-services",
    desc: "The billing operation that credentialing makes possible in the first place.",
  },
  {
    title: "Revenue Cycle Management",
    href: "/revenue-cycle-management",
    desc: "A broader view of the financial process credentialing sits at the front of.",
  },
  {
    title: "Medical Coding Services",
    href: "/medical-coding-services",
    desc: "Coding accuracy that matters once credentialed billing is underway.",
  },
  {
    title: "Provider Enrollment Services",
    href: "/provider-enrollment-services",
    desc: "The enrollment step that follows credentialing approval, completing the process of getting a provider active with a payer.",
  },
] as const;

export const pcsLifecycle = [
  "Initial credentialing — first-time verification and network application for a new provider or new payer relationship.",
  "Enrollment — registering the credentialed provider with the payer for billing purposes.",
  "Active status maintenance — keeping documentation, licenses, and CAQH profiles current.",
  "Recredentialing — periodic re-verification required by most payers, typically every two to three years.",
  "Ongoing monitoring — tracking expiration dates and renewal deadlines to avoid lapses in network status.",
] as const;

export const pcsFaqs: [string, string][] = [
  [
    "What are provider credentialing services?",
    "Provider credentialing services manage the process of verifying a healthcare provider's education, training, licensure, and professional history with insurance payers, which is required before that provider can join a payer's network and bill for services.",
  ],
  [
    "Why is provider credentialing important?",
    "Without active credentialing, a provider generally cannot be reimbursed by a given insurance payer, regardless of the quality of care provided. Credentialing is a prerequisite for billing, not just a compliance formality.",
  ],
  [
    "What is the difference between credentialing and provider enrollment?",
    "Credentialing is the verification process confirming a provider meets a payer's qualification standards. Provider enrollment is the subsequent administrative step of registering that credentialed provider with the payer so claims can actually be submitted and paid.",
  ],
  [
    "What is CAQH, and why does it matter for credentialing?",
    "CAQH is a shared data platform many commercial payers use to collect and verify provider credentialing information. A current, accurately maintained CAQH profile can streamline applications across multiple payers at once.",
  ],
  [
    "What is PECOS enrollment?",
    "PECOS (Provider Enrollment, Chain, and Ownership System) is the system Medicare uses for provider enrollment, and is a required step for providers seeking to bill Medicare for services.",
  ],
  [
    "How long does provider credentialing typically take?",
    "Credentialing timelines vary by payer and provider type, and can range from several weeks to a few months, particularly for commercial payers or Medicare/Medicaid enrollment, depending on application completeness and payer processing times.",
  ],
  [
    "Do you handle Medicare credentialing?",
    "Yes, we manage Medicare credentialing and enrollment, including navigating the PECOS system as part of the process.",
  ],
  [
    "Do you handle Medicaid credentialing?",
    "Yes, Medicaid credentialing requirements vary by state, and we manage state-specific application and documentation requirements as part of our credentialing services.",
  ],
  [
    "Can you help with commercial insurance credentialing?",
    "Yes, we manage commercial payer credentialing, often coordinating through CAQH where applicable to streamline the process across multiple payers.",
  ],
  [
    "What is recredentialing, and how often does it need to happen?",
    "Recredentialing is the periodic re-verification process most payers require, typically every two to three years, to confirm a provider's credentials and documentation remain current.",
  ],
  [
    "How much do provider credentialing services cost?",
    "Pricing depends on the number of providers, payers, and specialties involved, and is typically discussed after an initial review of your practice's specific credentialing needs.",
  ],
  [
    "Are your credentialing services HIPAA compliant?",
    "Yes, credentialing involves sensitive provider information, and our processes are handled under HIPAA-compliant workflows with signed Business Associate Agreements.",
  ],
  [
    "What's the difference between credentialing and medical billing?",
    "Credentialing determines whether a provider is eligible to bill a specific payer at all. Medical billing is the ongoing process of submitting and managing claims once that eligibility has been established through credentialing.",
  ],
  [
    "Can you credential new practices that don't have existing payer relationships?",
    "Yes, we support credentialing for new practices from the ground up, including initial CAQH profile setup and first-time applications with Medicare, Medicaid, and commercial payers.",
  ],
  [
    "Do you provide credentialing for mental health and behavioral health providers?",
    "Yes, we provide credentialing support specific to mental health and behavioral health providers, including payers with mental-health-specific network requirements and licensure verification.",
  ],
];
