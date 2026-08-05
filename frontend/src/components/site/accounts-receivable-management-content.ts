/** Accounts Receivable Management Services pillar page */

export const arOverviewConcepts = [
  {
    title: "Medical AR and Healthcare AR",
    desc: "In a medical billing context, accounts receivable refers specifically to the money owed to a practice for services already rendered — both from insurance payers and from patients directly. Unlike consumer AR in other industries, healthcare AR involves a layer of complexity most other fields don't deal with: claim adjudication rules, payer-specific timelines, coding-dependent denials, and patient responsibility that often isn't known until after a claim is processed.",
  },
  {
    title: "Outstanding Claims",
    desc: "An outstanding claim is one that hasn't yet reached final resolution — it may be pending with the payer, denied and unaddressed, or partially paid with a remaining balance still owed. Outstanding claims are the core unit AR management is built around.",
  },
  {
    title: "Insurance Follow-Up",
    desc: "Insurance follow-up is the active process of checking claim status with payers, responding to information requests, and pushing stalled claims toward resolution — the opposite of submitting a claim and simply waiting.",
  },
  {
    title: "Patient Balances",
    desc: "Patient balances are the portion of a bill that remains the patient's responsibility after insurance has processed the claim — copays, deductibles, coinsurance, or amounts for non-covered services. These balances need their own follow-up process, distinct from insurance AR.",
  },
  {
    title: "Claim Aging",
    desc: "Claim aging refers to how long a claim has remained unresolved, typically tracked in buckets — 0-30 days, 31-60, 61-90, 90+. The older a claim gets, the harder it generally becomes to collect, since documentation gets harder to retrieve and timely filing windows start to close.",
  },
  {
    title: "Revenue Recovery",
    desc: "Revenue recovery is the active work of resolving aged and denied claims that would otherwise be written off — not new revenue, but revenue that was already earned and is still recoverable with the right follow-up.",
  },
  {
    title: "Cash Flow",
    desc: "Because AR represents revenue that's earned but not yet collected, how well it's managed directly determines how predictable and current a practice's cash flow actually is.",
  },
  {
    title: "Revenue Cycle",
    desc: "AR management sits near the back end of the revenue cycle — it's what happens after a claim has been submitted and hasn't resolved cleanly on the first pass. Strong front-end processes reduce how much AR ever needs this kind of active management, but no process eliminates the need for it entirely.",
  },
] as const;

export const arRevenueLossReasons = [
  {
    title: "Unpaid Claims",
    desc: "Claims that are submitted but never paid — sometimes because they were denied and never appealed, sometimes because they simply weren't tracked closely enough to notice they hadn't resolved.",
  },
  {
    title: "Claim Aging",
    desc: "The longer a claim sits unresolved, the more likely it is to become genuinely difficult to collect, particularly as it approaches timely filing deadlines.",
  },
  {
    title: "Denied Claims",
    desc: "Denials that aren't investigated and corrected or appealed represent revenue that's actively being left on the table, not just delayed.",
  },
  {
    title: "Timely Filing Limits",
    desc: "Every payer has a deadline for submitting a claim or an appeal. Miss it, and the claim often becomes entirely unrecoverable, regardless of how valid it was.",
  },
  {
    title: "Insurance Delays",
    desc: "Payers don't always process claims within expected timeframes, and without active follow-up, a delayed claim can be mistaken for a resolved one.",
  },
  {
    title: "Incorrect Follow-Up",
    desc: "Following up on the wrong claims, or following up inconsistently, wastes staff time without meaningfully improving recovery.",
  },
  {
    title: "Patient Balances",
    desc: "Patient responsibility that isn't actively pursued through clear statements and follow-up tends to go uncollected far more often than insurance balances.",
  },
  {
    title: "Staff Shortages",
    desc: "AR follow-up is time-intensive, and when practices are short-staffed, it's often the first responsibility to get deprioritized in favor of more immediate, patient-facing tasks.",
  },
  {
    title: "Poor Billing Workflows",
    desc: "Without a structured process for tracking claim status, AR tends to accumulate quietly until someone finally looks at the full aging report and finds a bigger problem than expected.",
  },
  {
    title: "Revenue Leakage",
    desc: "The cumulative effect of all of the above: money that was earned through legitimate patient care, never collected, not because the care wasn't billable, but because the follow-up never happened.",
  },
] as const;

export const arProcess = [
  {
    step: "01",
    title: "Claim Review",
    desc: "Every outstanding claim is reviewed to understand its current status and what's needed to move it toward resolution.",
  },
  {
    step: "02",
    title: "A/R Aging Analysis",
    desc: "Claims are categorized by how long they've been outstanding, prioritizing action based on urgency and recoverability.",
  },
  {
    step: "03",
    title: "Insurance Follow-Up",
    desc: "Payers are contacted directly to check claim status, respond to information requests, and push stalled claims forward.",
  },
  {
    step: "04",
    title: "Patient Balance Follow-Up",
    desc: "Patient responsibility is followed up on through clear communication and structured billing statements.",
  },
  {
    step: "05",
    title: "Denial Investigation",
    desc: "Denied claims are reviewed to identify the root cause before deciding whether to correct and resubmit or appeal.",
  },
  {
    step: "06",
    title: "Appeals",
    desc: "Formal appeals are prepared and submitted for denials that warrant reconsideration, within payer-specific deadlines.",
  },
  {
    step: "07",
    title: "Payment Tracking",
    desc: "Claims moving toward payment are tracked through to actual posting, confirming resolution rather than assuming it.",
  },
  {
    step: "08",
    title: "Resolution",
    desc: "Every claim is driven to a final state — paid, appropriately adjusted, or, only after all reasonable options are exhausted, written off.",
  },
  {
    step: "09",
    title: "Reporting",
    desc: "AR status and recovery activity are reported clearly, so practices understand what's outstanding and what's being actively worked.",
  },
  {
    step: "10",
    title: "Continuous Optimization",
    desc: "Recurring denial or aging patterns are used to inform upstream process improvements, reducing how much AR accumulates going forward.",
  },
] as const;

export const arIncluded = [
  {
    title: "Insurance AR Follow-Up",
    desc: "Active, ongoing follow-up with payers on outstanding claims, rather than passive waiting for automatic resolution.",
  },
  {
    title: "Patient AR Follow-Up",
    desc: "Structured outreach and clear billing statements to help collect patient responsibility balances.",
  },
  {
    title: "Outstanding Claims Recovery",
    desc: "Focused effort on claims that haven't yet reached resolution, working them toward payment or appropriate closure.",
  },
  {
    title: "Aged Claims Management",
    desc: "Prioritized handling of older claims, where the window for recovery is narrower and action is more time-sensitive.",
  },
  {
    title: "Denial Recovery",
    desc: "Investigation and resolution of denied claims through correction, resubmission, or appeal.",
  },
  {
    title: "Appeals Management",
    desc: "Preparation and submission of formal appeals for denials that warrant reconsideration, tracked to their own resolution.",
  },
  {
    title: "Payment Reconciliation",
    desc: "Confirming that payments received actually match what was billed and expected, closing the loop on claim resolution.",
  },
  {
    title: "Revenue Leakage Detection",
    desc: "Identifying patterns — recurring denial reasons, underpayments, aging trends — that point to systemic revenue leakage.",
  },
  {
    title: "AR Reporting",
    desc: "Clear, structured reporting on AR aging, recovery activity, and outstanding balances.",
  },
  {
    title: "Collection Optimization",
    desc: "Refining follow-up priorities and timing based on what's actually improving recovery outcomes.",
  },
  {
    title: "Revenue Analytics",
    desc: "Data-driven insight into AR performance, used to inform both AR strategy and upstream billing improvements.",
  },
  {
    title: "Monthly Performance Reviews",
    desc: "Regular review of AR performance, giving practices a consistent, scheduled checkpoint on recovery progress.",
  },
] as const;

export const arUnpaidReasons = [
  {
    title: "Incorrect Coding",
    desc: "Coding that doesn't align with documentation is a frequent root cause of denials that then sit unaddressed if not investigated promptly.",
  },
  {
    title: "Eligibility Issues",
    desc: "Claims submitted without verified coverage often get denied for reasons that could have been caught before the visit.",
  },
  {
    title: "Authorization Problems",
    desc: "Services requiring prior authorization that wasn't obtained or had expired are commonly denied outright.",
  },
  {
    title: "Duplicate Claims",
    desc: "Accidentally resubmitted claims can create processing confusion that delays resolution of the original claim.",
  },
  {
    title: "Documentation Errors",
    desc: "Insufficient or inconsistent documentation can result in denial even when the service itself was medically appropriate.",
  },
  {
    title: "Payer Delays",
    desc: "Some claims simply take longer to process than expected, and without active tracking, a delay can be mistaken for resolution.",
  },
  {
    title: "Patient Responsibility",
    desc: "Balances owed by patients require their own dedicated follow-up process, separate from insurance-side AR.",
  },
  {
    title: "Underpayments",
    desc: "A claim that's technically paid can still leave revenue on the table if the payment doesn't match the contracted rate — a discrepancy that only surfaces with careful reconciliation.",
  },
  {
    title: "No Follow-Up",
    desc: "The single most common reason a recoverable claim becomes a write-off: no one actively pursued it before the window to act closed.",
  },
  {
    title: "Timely Filing Expiration",
    desc: "Every payer sets a deadline for submitting claims or appeals. Once that deadline passes, even a valid, well-documented claim often becomes unrecoverable.",
  },
] as const;

export const arBenefits = [
  {
    title: "Improve collections",
    desc: "Active follow-up recovers revenue that would otherwise be written off.",
  },
  {
    title: "Increase revenue",
    desc: "Not by billing more, but by actually collecting more of what's already been earned.",
  },
  {
    title: "Reduce AR days",
    desc: "Claims move toward resolution faster with consistent, prioritized follow-up.",
  },
  {
    title: "Recover aging claims",
    desc: "Even older claims, given prompt attention, are often still recoverable.",
  },
  {
    title: "Improve cash flow",
    desc: "More predictable, timely collection of outstanding balances.",
  },
  {
    title: "Reduce write-offs",
    desc: "Fewer claims reach the point of being genuinely unrecoverable.",
  },
  {
    title: "Increase profitability",
    desc: "Recovered revenue drops directly to the bottom line, since the underlying care was already delivered.",
  },
  {
    title: "Lower administrative workload",
    desc: "Dedicated AR follow-up relieves staff from a time-consuming, detail-heavy task.",
  },
  {
    title: "Improve financial visibility",
    desc: "Clear AR reporting gives practices an accurate picture of what's truly outstanding.",
  },
  {
    title: "Better patient satisfaction",
    desc: "Clear, consistent patient balance communication reduces confusion and billing disputes.",
  },
] as const;

export const arWhy = [
  {
    title: "Dedicated AR Team",
    desc: "Your practice works with a team focused specifically on AR follow-up and recovery, not staff juggling AR alongside unrelated administrative duties.",
  },
  {
    title: "Healthcare Billing Experts",
    desc: "Our team understands payer rules, appeal processes, and the coding and documentation context behind why claims get denied in the first place.",
  },
  {
    title: "HIPAA-Compliant Workflows",
    desc: "AR follow-up involves handling sensitive patient and billing information, managed under HIPAA-compliant workflows with signed Business Associate Agreements.",
  },
  {
    title: "Transparent Reporting",
    desc: "You have visibility into AR status, aging trends, and recovery activity, not a static report you have to interpret on your own.",
  },
  {
    title: "Custom Workflows",
    desc: "AR follow-up priorities are configured around your specific payer mix, claim volume, and specialty.",
  },
  {
    title: "Revenue-First Strategy",
    desc: "Every claim in AR is treated as recoverable revenue worth actively pursuing, not a line item to eventually write off.",
  },
  {
    title: "Scalable Solutions",
    desc: "Whether your AR backlog is modest or substantial, our process scales to match the actual volume that needs attention.",
  },
  {
    title: "U.S. Healthcare Expertise",
    desc: "Our team works within the specific rules, deadlines, and payer landscape of the U.S. healthcare system, not a generalized international billing model.",
  },
] as const;

export const arSpecialties = [
  {
    title: "Mental Health",
    desc: "Session-based claims with time documentation requirements can be denied for subtle documentation mismatches that require careful review during follow-up.",
  },
  {
    title: "Behavioral Health",
    desc: "Program-based and authorization-dependent claims often require coordinated follow-up across both the clinical and billing side of a denial.",
  },
  {
    title: "Psychiatry",
    desc: "Claims combining evaluation and psychotherapy codes require follow-up staff who understand how the two components should be billed together.",
  },
  {
    title: "Family Practice",
    desc: "High claim volume across varied visit types means AR follow-up needs to prioritize efficiently rather than treat every claim identically.",
  },
  {
    title: "Internal Medicine",
    desc: "Complex, multi-diagnosis claims can be denied for reasons that require genuine clinical-coding context to resolve during appeal.",
  },
  {
    title: "Urgent Care",
    desc: "High patient volume creates a correspondingly high claim volume, making consistent AR triage essential to avoid claims quietly aging past attention.",
  },
  {
    title: "Dental",
    desc: "Crossover claims between medical and dental insurance require follow-up staff familiar with both systems' specific denial patterns.",
  },
  {
    title: "Cardiology",
    desc: "Procedure and diagnostic-heavy claims often involve modifier-related denials that require detailed review during follow-up.",
  },
  {
    title: "Orthopedics",
    desc: "Surgical claims with bundling and global period rules require follow-up staff who understand what's separately billable versus already included.",
  },
  {
    title: "Pediatrics",
    desc: "Age-specific coding and vaccine administration billing can create denial patterns that require specialty-specific follow-up knowledge.",
  },
  {
    title: "Multi-Specialty Clinics",
    desc: "Varied claim types across multiple specialties require AR processes flexible enough to handle different denial patterns within the same practice.",
  },
] as const;

export const arRelated = [
  {
    title: "Medical Billing Services",
    href: "/medical-billing-services",
    desc: "The billing operation that generates the claims AR management ultimately follows up on.",
  },
  {
    title: "Revenue Cycle Management",
    href: "/revenue-cycle-management",
    desc: "The broader financial process AR management supports at the back end.",
  },
  {
    title: "Claims Management Services",
    href: "/claims-management-services",
    desc: "Ongoing claim tracking that, done well, reduces how much AR ever needs deep recovery work.",
  },
  {
    title: "Denial Management Services",
    href: "/denial-management-services",
    desc: "Focused denial resolution that overlaps closely with AR recovery for denied claims specifically.",
  },
] as const;

export const arCompare = [
  {
    factor: "Cost",
    inHouse: "Staff time regardless of AR volume or aging severity",
    outsourced: "Scales with actual AR volume and recovery need",
  },
  {
    factor: "Expertise",
    inHouse: "Dependent on individual staff experience with payer appeals",
    outsourced: "Access to specialists experienced across payers and denial types",
  },
  {
    factor: "Technology",
    inHouse: "Requires internal AR tracking and reporting tools",
    outsourced: "AR tracking and reporting built into the service",
  },
  {
    factor: "Scalability",
    inHouse: "Adding follow-up capacity requires hiring and training",
    outsourced: "Capacity adjusts to AR backlog and claim volume",
  },
  {
    factor: "Recovery Rate",
    inHouse: "Often limited by competing staff priorities",
    outsourced: "Dedicated focus designed specifically to maximize recovery",
  },
  {
    factor: "Reporting",
    inHouse: "Often limited to what practice management software provides by default",
    outsourced: "Structured reporting on aging, recovery activity, and outcomes",
  },
  {
    factor: "Compliance",
    inHouse: "Requires internal tracking of payer-specific appeal deadlines",
    outsourced: "Deadline tracking built into the AR workflow",
  },
  {
    factor: "Productivity",
    inHouse: "AR follow-up competes with scheduling, billing, and other tasks",
    outsourced: "Frees internal staff to focus on other priorities",
  },
  {
    factor: "Cash Flow",
    inHouse: "Vulnerable to claims aging without consistent attention",
    outsourced: "Active follow-up designed to keep cash flow predictable",
  },
  {
    factor: "Revenue Recovery",
    inHouse: "Recoverable claims can be missed amid competing demands",
    outsourced: "Structured process designed specifically to catch and pursue recoverable claims",
  },
] as const;

export const arWhyOutsource = [
  {
    title: "Cost Savings",
    desc: "Outsourcing avoids the fixed overhead of dedicated in-house AR staff, particularly for practices without consistently high AR volume.",
  },
  {
    title: "Dedicated Experts",
    desc: "AR follow-up is handled by staff who work in this function specifically, understanding payer appeal processes and denial patterns in depth.",
  },
  {
    title: "Better Recovery",
    desc: "Consistent, prioritized follow-up recovers claims that might otherwise be deprioritized amid competing internal responsibilities.",
  },
  {
    title: "Improved Collections",
    desc: "Both insurance and patient balances receive structured, ongoing attention rather than sporadic follow-up.",
  },
  {
    title: "Reduced Write-Offs",
    desc: "Fewer claims reach the point of being genuinely unrecoverable when follow-up happens consistently and on time.",
  },
  {
    title: "Faster Reimbursements",
    desc: "Claims that are actively worked resolve faster than claims left to resolve passively.",
  },
  {
    title: "Revenue Growth",
    desc: "Recovered revenue from AR directly improves practice profitability, since the underlying care has already been delivered.",
  },
  {
    title: "Operational Efficiency",
    desc: "Removing AR follow-up from internal staff's plate allows them to focus on scheduling, patient care coordination, and other front-line priorities.",
  },
] as const;

export const arOnboarding = [
  {
    step: "Discovery",
    desc: "We start by understanding your current AR situation — claim volume, payer mix, and existing follow-up practices.",
  },
  {
    step: "Billing Audit",
    desc: "A review of recent claims and aging reports identifies where AR is currently at risk of aging out or going unaddressed.",
  },
  {
    step: "Workflow Review",
    desc: "We examine your existing billing and follow-up workflows to understand where gaps exist.",
  },
  {
    step: "System Integration",
    desc: "Our AR process is integrated with your practice management or EHR system to support efficient claim tracking.",
  },
  {
    step: "AR Analysis",
    desc: "Outstanding claims are categorized by aging and recoverability, establishing follow-up priorities from day one.",
  },
  {
    step: "Implementation",
    desc: "Active follow-up begins on prioritized claims, with appeals initiated where warranted.",
  },
  {
    step: "Reporting",
    desc: "You receive structured reporting on AR status and recovery activity as the process gets underway.",
  },
  {
    step: "Continuous Support",
    desc: "AR management continues as an ongoing function, not a one-time cleanup project, with regular reporting and process refinement.",
  },
] as const;

export const arFaqs: [string, string][] = [
  [
    "What is medical accounts receivable management?",
    "Medical accounts receivable management is the ongoing process of tracking, following up on, and resolving unpaid insurance claims and patient balances until they're paid, appropriately adjusted, or, after all reasonable efforts, written off.",
  ],
  [
    "What is AR follow-up?",
    "AR follow-up is the active work of checking claim status with payers, responding to information requests, and pushing stalled or denied claims toward resolution, rather than waiting passively for them to resolve on their own.",
  ],
  [
    "Why do medical claims become aged?",
    "Claims become aged when they aren't actively tracked and followed up on — a denial goes unaddressed, a payer delay isn't checked on, or a claim requiring additional information sits without a response, allowing time to pass without resolution.",
  ],
  [
    "How can AR management improve cash flow?",
    "By actively recovering claims that would otherwise sit unresolved or become write-offs, AR management brings in revenue that was already earned but not yet collected, making cash flow more current and predictable.",
  ],
  [
    "What is a good AR aging percentage?",
    "This varies by specialty and payer mix, but generally, practices aim to keep the majority of AR within 0-60 days, since claims aging past 90 days become progressively harder to collect. There's no single universal benchmark — what matters most is whether your aging distribution is improving or worsening over time.",
  ],
  [
    "How long should claims stay in AR before being written off?",
    "There's no fixed universal timeline — it depends on the payer's timely filing and appeal deadlines, and on whether reasonable recovery efforts have genuinely been exhausted. Claims should be actively worked, not simply aged out by default.",
  ],
  [
    "Can old unpaid claims still be recovered?",
    "Often, yes — particularly if appeal deadlines haven't passed and the underlying denial reason is correctable. Older claims require faster, more decisive action, but many are still legitimately recoverable.",
  ],
  [
    "Do you work with Medicare and Medicaid claims?",
    "Yes, we manage AR follow-up across Medicare, Medicaid, and commercial payers, each with its own specific appeal processes and deadlines.",
  ],
  [
    "What reports do you provide for AR management?",
    "We provide structured reporting on AR aging, recovery activity, denial trends, and outstanding balances, giving practices clear visibility into what's being actively worked and what's been resolved.",
  ],
  [
    "How do you reduce write-offs?",
    "By prioritizing claims based on aging and recoverability, following up consistently before deadlines pass, and investigating denials promptly enough to correct or appeal them while there's still time to act.",
  ],
  [
    "What's the difference between AR management and denial management?",
    "Denial management focuses specifically on claims that have already been denied. AR management is broader, covering all outstanding claims and patient balances — including denials, but also claims still pending, underpaid, or simply awaiting payer response.",
  ],
  [
    "Do you handle patient balance follow-up as well as insurance follow-up?",
    "Yes, we manage both sides of accounts receivable — following up with payers on outstanding claims and communicating with patients regarding their responsibility balances.",
  ],
  [
    "How much does outsourced AR management cost?",
    "Pricing depends on AR volume, claim aging severity, and specialty complexity, and is typically discussed after an initial billing audit of your current AR situation.",
  ],
  [
    "What specialties do you support for AR management?",
    "We support AR management across specialties including mental health, behavioral health, psychiatry, family practice, internal medicine, urgent care, dental, cardiology, orthopedics, pediatrics, and multi-specialty practices.",
  ],
  [
    "How quickly can AR management start showing results?",
    "Timelines vary based on the size and age of your existing AR backlog, but active follow-up on prioritized claims typically begins immediately after onboarding, with recovery activity building as claims move through resolution.",
  ],
];
