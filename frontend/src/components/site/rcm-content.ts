/** Revenue Cycle Management pillar page — copy from content brief */

export const rcmProcess = [
  {
    step: "01",
    title: "Patient Registration",
    desc: "Accurate collection of patient demographic and insurance information at the point of scheduling — the foundation for every downstream billing step.",
  },
  {
    step: "02",
    title: "Insurance Verification",
    desc: "Confirming that the patient's insurance information is current and correctly recorded before their visit.",
  },
  {
    step: "03",
    title: "Eligibility Verification",
    desc: "Checking active coverage status, plan limitations, copay, and deductible amounts, ideally before the date of service, to avoid post-visit surprises for both patient and provider.",
  },
  {
    step: "04",
    title: "Medical Coding",
    desc: "Translating clinical documentation into standardized CPT, ICD-10, and HCPCS codes that accurately reflect the diagnosis and services provided.",
  },
  {
    step: "05",
    title: "Charge Entry",
    desc: "Recording billable charges based on documented services and assigned codes, forming the basis of the claim.",
  },
  {
    step: "06",
    title: "Claim Submission",
    desc: "Submitting a scrubbed, accurate claim electronically to the correct payer through a clearinghouse.",
  },
  {
    step: "07",
    title: "Payment Posting",
    desc: "Recording payments received from payers and patients, and reconciling them against what was originally billed.",
  },
  {
    step: "08",
    title: "Denial Management",
    desc: "Identifying why a claim was denied, correcting the underlying issue, and determining whether to resubmit or appeal.",
  },
  {
    step: "09",
    title: "Appeals",
    desc: "Formally contesting denied claims that were denied incorrectly or that warrant reconsideration, following payer-specific appeal procedures and deadlines.",
  },
  {
    step: "10",
    title: "Accounts Receivable (A/R)",
    desc: "Ongoing tracking and follow-up on unpaid claims until they are resolved — paid, adjusted, or, in rare cases, written off after all reasonable recovery efforts.",
  },
  {
    step: "11",
    title: "Patient Billing",
    desc: "Generating clear, accurate patient statements for any remaining balance after insurance has processed the claim.",
  },
  {
    step: "12",
    title: "Reporting",
    desc: "Providing visibility into key revenue cycle metrics: claim status, denial trends, collection rates, and A/R aging.",
  },
  {
    step: "13",
    title: "Compliance",
    desc: "Ensuring every step of the process — data handling, coding, billing practices — meets HIPAA and payer compliance requirements.",
  },
  {
    step: "14",
    title: "Revenue Optimization",
    desc: "Using reporting data to identify recurring issues (denial patterns, coding gaps, workflow bottlenecks) and adjust processes to improve performance over time.",
  },
] as const;

export const rcmGlance = [
  { stage: "Registration & Verification", goal: "Accurate patient and coverage data before the visit" },
  { stage: "Coding & Charge Entry", goal: "Claims that accurately reflect care provided" },
  { stage: "Submission & Payment Posting", goal: "Fast, clean claim processing and accurate reconciliation" },
  { stage: "Denial Management & Appeals", goal: "Recovery of revenue from denied or underpaid claims" },
  { stage: "A/R & Patient Billing", goal: "Resolution of every open balance, insurance or patient-owed" },
  { stage: "Reporting & Optimization", goal: "Continuous improvement based on real performance data" },
] as const;

export const rcmServices = [
  {
    title: "End-to-End RCM Management",
    desc: "We manage the full revenue cycle as one connected process, rather than treating billing, coding, and collections as separate, disconnected functions.",
    href: null as string | null,
  },
  {
    title: "Medical Billing Services",
    desc: "Our core billing operation — charge entry, claim submission, payment posting, and patient statements — handled as the operational engine of your revenue cycle.",
    href: "/medical-billing-services",
  },
  {
    title: "Medical Coding Services",
    desc: "Certified coders ensure every claim reflects accurate CPT, ICD-10, and HCPCS coding based on documentation, reducing denials tied to coding errors.",
    href: "/medical-coding-services",
  },
  {
    title: "Insurance Eligibility Verification",
    desc: "Coverage, copay, and deductible verification completed before the date of service to prevent avoidable denials.",
    href: "/insurance-verification-services",
  },
  {
    title: "Denial Management Services",
    desc: "Root-cause analysis and resolution of denied claims, with appeals handled by staff familiar with payer-specific procedures.",
    href: "/denial-management-services",
  },
  {
    title: "Accounts Receivable Recovery",
    desc: "Active, ongoing follow-up on aging claims — including previously unresolved balances other billing processes may have deprioritized.",
    href: "/accounts-receivable-management",
  },
  {
    title: "Reporting & Analytics",
    desc: "Real-time visibility into denial rates, collection performance, and A/R aging, so your practice always has an accurate picture of its financial standing.",
    href: null,
  },
  {
    title: "Compliance Management",
    desc: "HIPAA-aligned workflows and payer-compliant billing practices built into every stage of the process, not layered on as an afterthought.",
    href: null,
  },
] as const;

export const rcmMentalHealth = [
  {
    title: "Behavioral Health Billing",
    desc: "Behavioral health billing often involves bundled service arrangements, program-based billing, and authorization requirements that differ significantly from standard medical billing. Claims frequently require documentation tying services directly to a treatment plan, and payers scrutinize medical necessity more closely than in many other specialties.",
  },
  {
    title: "Psychiatry Billing",
    desc: "Psychiatric billing combines evaluation and management (E/M) coding with medication management visit codes and psychotherapy add-on codes, often within the same encounter. Getting the combination right — and documenting time or complexity appropriately — is essential to avoiding denials.",
  },
  {
    title: "Therapy Billing",
    desc: "Therapy billing (individual, group, and family therapy) is largely time-based, meaning session length and documented start/end times directly affect which CPT code applies. Errors here are a common, avoidable source of denials.",
  },
  {
    title: "Psychology Billing",
    desc: "Psychological testing and assessment billing involves its own code set, often requiring documentation of time spent in testing, scoring, and interpretation separately from the therapeutic encounter itself.",
  },
  {
    title: "Telehealth Billing",
    desc: "Telehealth billing for mental health services requires correct use of place-of-service codes and modifiers, which have shifted repeatedly as payer telehealth policies have evolved. Staying current with payer-specific telehealth rules is essential to avoid denials tied to outdated billing practices.",
  },
  {
    title: "Mental Health Coding",
    desc: "Mental health coding requires familiarity with a distinct subset of CPT and ICD-10 codes, along with an understanding of how documentation needs to support medical necessity — a more frequent point of payer scrutiny in behavioral health than in many other specialties.",
  },
] as const;

export const rcmDenialTriggers = [
  "Session time not clearly documented, affecting time-based CPT code selection",
  "Missing or expired prior authorization for ongoing treatment",
  "Insufficient documentation of medical necessity",
  "Incorrect use of telehealth modifiers or place-of-service codes",
  "Diagnosis codes that don't align with documented treatment rationale",
] as const;

export const rcmBenefits = [
  {
    title: "Reduced Administrative Burden",
    desc: "Your staff spends less time on claim follow-up, payer calls, and billing corrections, and more time on patient-facing work.",
  },
  {
    title: "Improved Claim Accuracy",
    desc: "Dedicated coding review and pre-submission claim scrubbing reduce the errors that most commonly cause denials.",
  },
  {
    title: "Faster, More Predictable Cash Flow",
    desc: "Clean claims submitted correctly the first time tend to move through payer systems with fewer delays, improving the predictability of collections.",
  },
  {
    title: "Better Financial Visibility",
    desc: "Structured reporting gives you a real-time view of collections, denials, and outstanding A/R — rather than a once-a-month summary.",
  },
  {
    title: "Specialized Expertise Without the Overhead",
    desc: "Access to coders and billers with deep, current knowledge of payer rules and specialty-specific requirements, without the cost of building that expertise in-house.",
  },
  {
    title: "Scalability",
    desc: "As your practice grows or adds providers, your revenue cycle management can scale without the lag time of hiring and training new internal staff.",
  },
] as const;

export const rcmWhy = [
  {
    title: "Compliance-First Approach",
    desc: "HIPAA compliance is built into our workflows, staff training, and systems from the ground up — not treated as a checkbox. We operate under signed Business Associate Agreements with every client.",
  },
  {
    title: "Certified Team",
    desc: "Our coders hold relevant industry certifications and are trained on current CPT, ICD-10, and HCPCS updates, with staff who have specific experience in mental health and behavioral health billing.",
  },
  {
    title: "Technology-Enabled Workflows",
    desc: "Our processes integrate with major practice management and EHR systems, supporting electronic claims submission and real-time claim tracking.",
  },
  {
    title: "Accuracy at Every Stage",
    desc: "From charge entry through claim submission, every stage includes a review step designed to catch errors before they become denials.",
  },
  {
    title: "Full Transparency",
    desc: "You have direct access to reporting on claim status, denials, and collections — visibility you can act on, not just review after the fact.",
  },
  {
    title: "Fast Turnaround",
    desc: "Claims are reviewed and submitted promptly after encounter data is received, minimizing unnecessary delay in the billing cycle.",
  },
  {
    title: "Dedicated Account Management",
    desc: "Your practice works with a consistent point of contact who understands your specialty, payer mix, and specific billing history — not a rotating support queue.",
  },
] as const;

export const rcmIndustries = [
  "Private medical practices",
  "Group and multi-provider practices",
  "Multi-location healthcare organizations",
  "Mental health and behavioral health clinics",
  "Psychiatry and psychology practices",
  "Dental practices",
  "Specialty medical practices (cardiology, orthopedics, and others)",
  "Urgent care centers",
  "Family and primary care practices",
] as const;

export const rcmSpecialties = [
  {
    title: "Mental Health Billing",
    href: "/specialties/mental-health-billing",
    note: "Time-based coding, medical necessity documentation",
  },
  {
    title: "Behavioral Health Billing",
    href: "/specialties/behavioral-health-billing",
    note: "Bundled services, authorization-dependent programs",
  },
  {
    title: "Psychiatry Billing",
    href: "/specialties/psychiatry-billing",
    note: "E/M plus psychotherapy add-on code combinations",
  },
  {
    title: "Dental Billing",
    href: "/specialties/dental-billing",
    note: "Medical/dental insurance crossover claims",
  },
  {
    title: "Cardiology Billing",
    href: "/specialties/cardiology-billing",
    note: "Diagnostic testing and modifier-heavy claims",
  },
  {
    title: "Orthopedic Billing",
    href: "/specialties/orthopedic-billing",
    note: "Surgical bundling and global period tracking",
  },
  {
    title: "Family Practice Billing",
    href: "/specialties/family-practice-billing",
    note: "High-volume, high-variety visit coding",
  },
  {
    title: "Urgent Care Billing",
    href: "/specialties/urgent-care-billing",
    note: "High patient volume, same-day coding accuracy",
  },
] as const;

export const rcmWorkflow = [
  {
    step: "01",
    title: "Free RCM Audit",
    desc: "We review recent claims, denial patterns, and A/R aging at no cost, to identify where revenue is currently being lost in your existing process.",
  },
  {
    step: "02",
    title: "Revenue Cycle Analysis",
    desc: "Our team maps your full financial workflow, from scheduling through payment collection, identifying inefficiencies and compliance risks.",
  },
  {
    step: "03",
    title: "Implementation",
    desc: "We configure a billing and RCM plan tailored to your specialty and payer mix, and begin onboarding your dedicated account team.",
  },
  {
    step: "04",
    title: "Claims Optimization",
    desc: "Ongoing coding review, claim scrubbing, and eligibility verification are put into practice to improve first-pass acceptance rates.",
  },
  {
    step: "05",
    title: "Continuous Monitoring & Reporting",
    desc: "We track performance on an ongoing basis and adjust processes as payer requirements evolve and your practice grows.",
  },
] as const;

export const rcmTech = [
  "Secure, access-controlled systems for handling protected health information (PHI), consistent with HIPAA requirements.",
  "Electronic claims submission through clearinghouse integrations for faster processing than manual or paper-based submission.",
  "Audit trails supporting both internal quality control and compliance verification.",
  "Practice management and EHR integration to reduce manual data entry and the errors that come with it.",
  "Signed Business Associate Agreements (BAAs) with every client, formalizing our shared responsibility for data protection.",
] as const;

export const rcmMistakes = [
  "Skipping eligibility verification and discovering coverage issues only after the claim is denied.",
  "Inconsistent documentation that doesn't clearly support the codes being billed.",
  "Letting denials sit unaddressed past timely filing or appeal deadlines.",
  "Treating A/R follow-up as optional rather than an active, ongoing process.",
  "Applying generic billing practices to specialties — like mental health — that require specific coding and documentation knowledge.",
  "Lack of reporting visibility, making it difficult to spot recurring denial patterns before they compound.",
  "Underinvesting in coding accuracy, leading to both denials and underpayment for services actually provided.",
] as const;

export const rcmChecklist = [
  "Verify insurance eligibility before every appointment",
  "Review documentation against assigned codes before submission",
  "Scrub every claim for common denial triggers before it's sent",
  "Track every claim through to resolution — not just submission",
  "Review denial and A/R reports on a regular, scheduled basis",
  "Apply specialty-specific coding knowledge where relevant",
  "Keep staff current on payer rule and telehealth policy changes",
] as const;

export const rcmFaqs: [string, string][] = [
  [
    "What is revenue cycle management in healthcare?",
    "Revenue cycle management (RCM) is the process of tracking and managing the financial lifecycle of a patient encounter, from scheduling and insurance verification through coding, billing, claim submission, and final payment collection. It covers the full financial journey of a claim, not just the billing step alone.",
  ],
  [
    "What is the difference between medical billing and revenue cycle management?",
    "Medical billing refers specifically to creating and submitting claims for reimbursement. Revenue cycle management is broader, encompassing everything from patient registration and eligibility verification through coding, billing, denial management, and reporting — with billing as one component within that larger process.",
  ],
  [
    "Why is revenue cycle management important for healthcare providers?",
    "RCM directly affects a practice's financial health by determining how much of the revenue earned through patient care is actually collected. Poor RCM leads to denied claims, delayed payments, and revenue leakage, regardless of how much clinical care is being delivered.",
  ],
  [
    "What are the main stages of the revenue cycle?",
    "The main stages include patient registration, insurance and eligibility verification, medical coding, charge entry, claim submission, payment posting, denial management, appeals, accounts receivable follow-up, patient billing, and ongoing reporting and optimization.",
  ],
  [
    "How does outsourcing revenue cycle management benefit a practice?",
    "Outsourcing RCM can reduce administrative workload on internal staff, improve claim accuracy through specialized coding expertise, accelerate reimbursement timelines, and provide better financial visibility through structured reporting — without the overhead of building that expertise in-house.",
  ],
  [
    "What makes mental health revenue cycle management different?",
    "Mental health RCM involves time-based coding for therapy sessions, frequent prior authorization requirements, heightened payer scrutiny around medical necessity documentation, and specialty-specific code combinations for psychiatric evaluation and psychotherapy — all of which require billing expertise specific to behavioral health.",
  ],
  [
    "How do you reduce claim denials in revenue cycle management?",
    "Denials are reduced primarily through proactive steps before submission: verifying insurance eligibility, ensuring documentation supports the codes billed, and scrubbing claims for common error patterns. When denials occur, prompt root-cause resolution and resubmission or appeal further reduce lost revenue.",
  ],
  [
    "Are revenue cycle management services HIPAA compliant?",
    "Reputable RCM providers operate under HIPAA-compliant workflows and sign Business Associate Agreements (BAAs) with clients, outlining how protected health information is handled and secured throughout the revenue cycle process.",
  ],
  [
    "Do you offer revenue cycle management for telehealth services?",
    "Yes, telehealth billing requires correct application of place-of-service codes and modifiers, which vary by payer and have changed as telehealth policy has evolved — an area we actively manage as part of mental health and behavioral health RCM support.",
  ],
  [
    "How long does it take to see improvement after outsourcing RCM?",
    "Timelines vary based on a practice's existing claim volume, denial backlog, and complexity, and are typically discussed during the initial RCM audit, which identifies the most urgent issues to address first.",
  ],
  [
    "What is denial management, and how is it different from claims management?",
    "Denial management focuses specifically on identifying why claims were denied and resolving them through correction or appeal. Claims management is the broader process of tracking every claim's lifecycle, including denial management as one part of that larger process.",
  ],
  [
    "Do you support small mental health and therapy practices?",
    "Yes, RCM services are structured to support practices of varying sizes, including solo therapists and small behavioral health practices, with billing solutions scaled to claim volume and specialty complexity.",
  ],
  [
    "What accounts receivable services do you offer?",
    "Accounts receivable services include ongoing, structured follow-up on unpaid or aging claims, including claims that may have previously gone unresolved, with the goal of recovering revenue that would otherwise be written off.",
  ],
  [
    "How is revenue cycle performance measured and reported?",
    "Performance is typically tracked through metrics like denial rate, days in accounts receivable, first-pass claim acceptance rate, and overall collection rate, with reporting provided on an ongoing basis so practices can monitor real-time performance.",
  ],
  [
    "How do I get started with revenue cycle management services?",
    "Getting started typically begins with a free RCM audit to assess your current billing performance and denial patterns, followed by a tailored implementation plan based on your specialty, systems, and practice size.",
  ],
];
