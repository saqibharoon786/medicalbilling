/** Prior Authorization Services pillar page */

export const paWhyMatters = [
  {
    title: "Treatment Approval",
    desc: "Ensures a planned treatment has payer approval before it's delivered, reducing the risk of the patient or practice absorbing an unexpected cost.",
  },
  {
    title: "Procedure Approval",
    desc: "Confirms that scheduled procedures — imaging, surgery, specialized testing — meet payer requirements before they're performed.",
  },
  {
    title: "Medication Approval",
    desc: "Certain medications, particularly higher-cost or specialty drugs, require authorization before a pharmacy or payer will approve coverage.",
  },
  {
    title: "Patient Care Continuity",
    desc: "Delayed or denied authorizations can interrupt treatment plans, particularly for ongoing therapies where consistency matters clinically.",
  },
  {
    title: "Revenue Protection",
    desc: "Prevents the specific, high-impact category of denials that occur when a required authorization is missing entirely.",
  },
  {
    title: "Claim Approval",
    desc: "Claims tied to properly authorized services are far more likely to be paid without dispute than those submitted without the required approval.",
  },
  {
    title: "Compliance",
    desc: "Following payer-specific authorization requirements is part of maintaining a compliant, dispute-resistant billing process.",
  },
  {
    title: "Patient Satisfaction",
    desc: "Patients experience fewer delays and cancellations when authorization is managed proactively rather than discovered as a last-minute obstacle.",
  },
  {
    title: "Cash Flow",
    desc: "Fewer authorization-related denials mean fewer delays waiting on appeals or rescheduling, improving payment predictability.",
  },
  {
    title: "Practice Efficiency",
    desc: "Proactive authorization management reduces the last-minute scramble that disrupts scheduling and staff workflow.",
  },
] as const;

export const paChallenges = [
  {
    title: "Delayed approvals",
    desc: "Payer response times vary widely, and some authorizations take considerably longer than practices anticipate.",
  },
  {
    title: "Incomplete documentation",
    desc: "Missing or insufficient clinical documentation is one of the most common reasons authorization requests stall.",
  },
  {
    title: "Payer-specific rules",
    desc: "Each payer has its own authorization criteria and submission process, making a one-size-fits-all approach ineffective.",
  },
  {
    title: "Changing insurance policies",
    desc: "Payer authorization requirements shift periodically, and staying current requires active attention.",
  },
  {
    title: "Missing clinical documentation",
    desc: "Documentation that doesn't clearly establish medical necessity is a frequent cause of denial.",
  },
  {
    title: "Authorization denials",
    desc: "Even medically appropriate services can be denied if the request isn't submitted with sufficient supporting detail.",
  },
  {
    title: "Staff workload",
    desc: "Authorization requests are time-intensive, often requiring extended payer communication.",
  },
  {
    title: "Long hold times",
    desc: "Phone-based authorization submission and follow-up can consume significant staff time.",
  },
  {
    title: "Manual processes",
    desc: "Many authorization workflows still rely on fax, phone, or portal-based submission, adding friction and delay.",
  },
  {
    title: "Revenue delays",
    desc: "Services can't be billed until authorization is resolved, directly delaying revenue for that encounter.",
  },
  {
    title: "Patient dissatisfaction",
    desc: "Delayed or denied authorizations are visible to patients and can affect their experience and trust in the practice.",
  },
] as const;

export const paProcess = [
  {
    step: "01",
    title: "Appointment Scheduling",
    desc: "Authorization review begins as soon as a service is scheduled, allowing enough lead time to complete the process before the date of service.",
  },
  {
    step: "02",
    title: "Insurance Verification",
    desc: "We confirm the patient's coverage and identify whether the scheduled service requires prior authorization under their specific plan.",
  },
  {
    step: "03",
    title: "Clinical Documentation Review",
    desc: "Relevant clinical documentation is reviewed to ensure it supports the medical necessity of the requested service.",
  },
  {
    step: "04",
    title: "Medical Necessity Validation",
    desc: "Documentation is checked against payer-specific criteria to confirm it meets what the payer requires for approval.",
  },
  {
    step: "05",
    title: "Authorization Request Submission",
    desc: "The request is submitted to the payer through their required channel, complete with supporting documentation.",
  },
  {
    step: "06",
    title: "Payer Follow-Up",
    desc: "We proactively follow up on pending requests rather than waiting for payers to respond on their own timeline.",
  },
  {
    step: "07",
    title: "Status Tracking",
    desc: "Every authorization request is tracked through to resolution, with issues addressed as they arise.",
  },
  {
    step: "08",
    title: "Approval Management",
    desc: "Once approved, authorization details are documented and communicated to the practice ahead of the scheduled service.",
  },
  {
    step: "09",
    title: "Denial Handling",
    desc: "If a request is denied, we review the reason and, where clinically appropriate, prepare and submit an appeal.",
  },
  {
    step: "10",
    title: "Reporting",
    desc: "You receive visibility into authorization status across your scheduled services, reducing last-minute surprises.",
  },
] as const;

export const paIncluded = [
  {
    title: "Procedure Authorization",
    desc: "Management of authorization requests for medical and surgical procedures requiring payer approval before they're performed.",
  },
  {
    title: "Medication Authorization",
    desc: "Support navigating authorization requirements for medications, particularly higher-cost or specialty drugs.",
  },
  {
    title: "Imaging Authorization",
    desc: "Authorization management for advanced imaging services (MRI, CT, and similar), a common category requiring prior approval.",
  },
  {
    title: "Surgery Authorization",
    desc: "Coordination of authorization for surgical procedures, often requiring more extensive documentation than standard office-based services.",
  },
  {
    title: "Behavioral Health Authorization",
    desc: "Authorization support specific to behavioral health treatment programs, which frequently require both initial and ongoing authorization.",
  },
  {
    title: "Mental Health Authorization",
    desc: "Management of authorization requirements for mental health services, including ongoing therapy authorizations that require periodic renewal.",
  },
  {
    title: "Referral Authorization",
    desc: "Coordination between referral requirements and authorization requirements, which can overlap but aren't identical.",
  },
  {
    title: "Medical Necessity Documentation",
    desc: "Support ensuring clinical documentation clearly establishes medical necessity in the terms a specific payer requires.",
  },
  {
    title: "Clinical Documentation Review",
    desc: "Review of documentation before submission to identify gaps that could delay or jeopardize approval.",
  },
  {
    title: "Authorization Follow-Up",
    desc: "Proactive, ongoing follow-up on submitted requests to keep the process moving rather than waiting passively for a response.",
  },
  {
    title: "Appeals Support",
    desc: "Preparation and submission of appeals for denied authorization requests that warrant reconsideration.",
  },
  {
    title: "Status Tracking",
    desc: "Real-time tracking of every authorization request from submission through determination.",
  },
  {
    title: "Authorization Reporting",
    desc: "Structured reporting on authorization volume, turnaround time, and outcomes, giving practices visibility into the process.",
  },
  {
    title: "Urgent Authorization Requests",
    desc: "Expedited handling for time-sensitive authorization needs, following payer-specific urgent request procedures where available.",
  },
  {
    title: "Recurring Authorization Management",
    desc: "Proactive tracking of authorization expiration dates for ongoing treatments, avoiding gaps in coverage for continuing care.",
  },
] as const;

export const paSpecialties = [
  {
    title: "Mental Health",
    desc: "Ongoing therapy often requires periodic reauthorization, with payers reviewing treatment progress and continued medical necessity at each renewal.",
  },
  {
    title: "Behavioral Health",
    desc: "Program-based treatment frequently requires both initial program authorization and ongoing session or level-of-care authorization.",
  },
  {
    title: "Psychiatry",
    desc: "Certain medications and treatment modalities may require authorization independent of standard visit-based services.",
  },
  {
    title: "Primary Care",
    desc: "Authorization needs are typically less frequent than in specialty care, but referrals to specialists may carry their own authorization requirements.",
  },
  {
    title: "Cardiology",
    desc: "Diagnostic testing and interventional procedures frequently require authorization, often with detailed clinical criteria to satisfy.",
  },
  {
    title: "Orthopedics",
    desc: "Surgical procedures and advanced imaging are common authorization triggers, often requiring extensive supporting documentation.",
  },
  {
    title: "Pain Management",
    desc: "Interventional procedures and certain medications are closely scrutinized, with authorization criteria that can be more stringent than in other specialties.",
  },
  {
    title: "Neurology",
    desc: "Advanced imaging and certain diagnostic or treatment procedures frequently require detailed medical necessity documentation.",
  },
  {
    title: "Oncology",
    desc: "Treatment protocols, imaging, and medications often require authorization at multiple points throughout a treatment course, making ongoing management particularly important.",
  },
  {
    title: "Urgent Care",
    desc: "Most urgent care services don't require prior authorization, but referrals for follow-up specialty care may.",
  },
  {
    title: "Dental",
    desc: "Certain procedures with medical necessity components may require authorization through medical, rather than dental, insurance.",
  },
  {
    title: "Telehealth",
    desc: "Authorization requirements for telehealth-delivered services vary by payer and have shifted as telehealth coverage policy has evolved.",
  },
] as const;

export const paCompare = [
  {
    factor: "Cost",
    inHouse: "Staff time spent on authorization regardless of volume or complexity",
    outsourced: "Scales with actual authorization volume and need",
  },
  {
    factor: "Turnaround Time",
    inHouse: "Dependent on internal staff bandwidth and payer response times",
    outsourced: "Dedicated, proactive follow-up designed to reduce delays",
  },
  {
    factor: "Accuracy",
    inHouse: "Risk of inconsistent documentation submitted across staff members",
    outsourced: "Structured process for documentation review before submission",
  },
  {
    factor: "Compliance",
    inHouse: "Requires internal tracking of every payer's specific criteria",
    outsourced: "Compliance built into the authorization workflow",
  },
  {
    factor: "Administrative Burden",
    inHouse: "Falls on clinical or front-office staff alongside other duties",
    outsourced: "Handled by a dedicated authorization team",
  },
  {
    factor: "Staff Productivity",
    inHouse: "Time-intensive follow-up competes with other priorities",
    outsourced: "Frees staff to focus on patient care and scheduling",
  },
  {
    factor: "Technology",
    inHouse: "May rely on manual, fax, or phone-based submission",
    outsourced: "Structured tracking and, where available, electronic submission",
  },
  {
    factor: "Scalability",
    inHouse: "Adding capacity requires additional staff hours",
    outsourced: "Capacity adjusts to practice growth and authorization volume",
  },
  {
    factor: "Patient Experience",
    inHouse: "Delays can go unnoticed until close to the scheduled service",
    outsourced: "Proactive management reduces last-minute scheduling disruptions",
  },
  {
    factor: "Revenue Impact",
    inHouse: "Missed authorizations can result in full claim denial",
    outsourced: "Designed specifically to prevent authorization-related revenue loss",
  },
] as const;

export const paWhy = [
  {
    title: "Experienced Authorization Specialists",
    desc: "Our team manages prior authorization as a dedicated function, with specific experience navigating payer-specific requirements across specialties.",
  },
  {
    title: "HIPAA Compliance",
    desc: "Authorization requests involve sensitive clinical information, handled under HIPAA-compliant workflows with signed Business Associate Agreements.",
  },
  {
    title: "Nationwide Payer Knowledge",
    desc: "Experience navigating authorization processes across Medicare, Medicaid, and a wide range of commercial payers nationwide.",
  },
  {
    title: "Dedicated Team",
    desc: "Your practice works with a consistent point of contact who understands your specialty, common authorization triggers, and payer relationships.",
  },
  {
    title: "Transparent Reporting",
    desc: "You have visibility into authorization status, turnaround times, and outcomes, rather than having to track requests manually.",
  },
  {
    title: "Fast Turnaround",
    desc: "Authorization requests are submitted and followed up on promptly, minimizing avoidable delays in the process.",
  },
  {
    title: "Customized Workflow",
    desc: "Authorization management is configured around your specialty and typical procedure mix, not applied as a generic process.",
  },
  {
    title: "Revenue Cycle Expertise",
    desc: "Authorization is handled with a clear understanding of how it connects to billing, coding, and overall revenue cycle performance.",
  },
  {
    title: "Scalable Solutions",
    desc: "Whether you handle a handful of authorizations a month or manage high procedure volume, capacity adjusts to your practice's needs.",
  },
  {
    title: "Excellent Communication",
    desc: "Clear, proactive communication about authorization status keeps your scheduling and clinical teams informed, not guessing.",
  },
] as const;

export const paRcmLinks = [
  {
    title: "Medical Billing",
    desc: "Claims for services requiring authorization generally can't be paid without it, making authorization a prerequisite for successful billing, not a parallel task.",
  },
  {
    title: "Medical Coding",
    desc: "Coding needs to align with what was actually authorized, particularly when authorized service scope differs from what's ultimately billed.",
  },
  {
    title: "Insurance Verification",
    desc: "Authorization requirements are typically identified during the eligibility verification process, making the two closely connected front-end functions.",
  },
  {
    title: "Claims Management",
    desc: "Authorization status is a key factor claims management teams need to track before submission to avoid preventable denials.",
  },
  {
    title: "Denial Management",
    desc: "Missing or expired authorization is a common, specific category of denial that denial management teams address, often requiring appeal rather than simple resubmission.",
  },
  {
    title: "Cash Flow",
    desc: "Delayed authorization directly delays the point at which a service can be billed and paid for, affecting overall cash flow predictability.",
  },
  {
    title: "Accounts Receivable",
    desc: "Claims held up by authorization issues can sit unresolved longer than standard claims, adding to A/R aging if not actively managed.",
  },
  {
    title: "Patient Satisfaction",
    desc: "Authorization delays are one of the more visible administrative issues patients experience directly, making proactive management a patient-experience factor, not just a revenue one.",
  },
  {
    title: "Revenue Cycle",
    desc: "As a service-specific approval gate, authorization sits at a critical junction in the revenue cycle where a single missed step can eliminate reimbursement entirely.",
  },
] as const;

export const paIndustries = [
  "Private practices",
  "Medical clinics",
  "Hospitals",
  "Behavioral health organizations",
  "Mental health practices",
  "Urgent care centers",
  "Dental clinics",
  "Specialty practices",
  "Telehealth providers",
  "Healthcare organizations",
] as const;

export const paRelated = [
  {
    title: "Medical Billing Services",
    href: "/medical-billing-services",
    desc: "The billing process that depends on authorization being resolved before claims can be submitted.",
  },
  {
    title: "Insurance Verification Services",
    href: "/insurance-verification-services",
    desc: "The closely related front-end process that often identifies authorization requirements in the first place.",
  },
  {
    title: "Claims Management Services",
    href: "/claims-management-services",
    desc: "End-to-end claim handling, including tracking authorization status as part of the claim lifecycle.",
  },
  {
    title: "Denial Management Services",
    href: "/denial-management-services",
    desc: "Resolution support for claims denied due to missing or expired authorization.",
  },
] as const;

export const paFaqs: [string, string][] = [
  [
    "What is prior authorization in healthcare?",
    "Prior authorization is the approval process a health insurance payer requires before it will cover certain procedures, medications, or treatments, confirming the service meets the payer's criteria for medical necessity before it's delivered.",
  ],
  [
    "Why do insurance companies require prior authorization?",
    "Payers use prior authorization as a utilization management tool, reviewing planned services in advance to confirm they meet coverage criteria before agreeing to reimburse them.",
  ],
  [
    "What is the difference between prior authorization and insurance verification?",
    "Insurance verification confirms that a patient's coverage is active and outlines their general benefits. Prior authorization is a separate, service-specific approval some payers require before a particular procedure or treatment will be covered.",
  ],
  [
    "How long does prior authorization typically take?",
    "Turnaround time varies significantly by payer and service type, and can range from a few days to several weeks depending on documentation completeness and payer processing timelines.",
  ],
  [
    "What happens if a service is performed without required authorization?",
    "If a service that requires prior authorization is performed without it, the payer will typically deny the claim, regardless of medical necessity, often leaving the practice or patient responsible for the cost.",
  ],
  [
    "Do you handle authorization for medications?",
    "Yes, we manage authorization requests for medications, including higher-cost or specialty drugs that require payer approval before coverage.",
  ],
  [
    "What is required to submit a prior authorization request?",
    "Requests generally require clinical documentation establishing medical necessity, along with specific procedure or medication details required by the payer's submission process.",
  ],
  [
    "Do you provide prior authorization for mental health and behavioral health services?",
    "Yes, we manage both initial and ongoing authorization requirements for mental health and behavioral health treatment, including periodic reauthorization for continuing therapy.",
  ],
  [
    "What happens if an authorization request is denied?",
    "If a request is denied, we review the reason for denial and, where clinically appropriate, prepare and submit an appeal with additional supporting documentation.",
  ],
  [
    "Are prior authorization services HIPAA compliant?",
    "Yes, authorization requests involve sensitive clinical information, and our processes are managed under HIPAA-compliant workflows with signed Business Associate Agreements.",
  ],
  [
    "How much do prior authorization services cost?",
    "Pricing depends on authorization volume, specialty, and complexity, and is typically discussed after an initial review of a practice's specific authorization needs.",
  ],
  [
    "What technology do you use for authorization management?",
    "We use structured tracking systems and, where available, electronic submission tools, supplemented by direct payer follow-up for requests that require manual processing.",
  ],
  [
    "Can you handle urgent or expedited authorization requests?",
    "Yes, we manage urgent authorization requests following payer-specific expedited request procedures where available, prioritizing time-sensitive cases.",
  ],
  [
    "What are the benefits of outsourcing prior authorization?",
    "Outsourcing can reduce administrative burden on clinical and front-office staff, improve turnaround time through dedicated, proactive follow-up, and reduce the risk of authorization-related claim denials.",
  ],
  [
    "What specialties require the most frequent prior authorization?",
    "Specialties involving advanced imaging, surgical procedures, specialty medications, and ongoing treatment programs — such as orthopedics, oncology, pain management, and behavioral health — tend to encounter authorization requirements more frequently than primary care.",
  ],
];
