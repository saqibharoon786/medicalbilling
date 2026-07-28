import {
  FileText, Activity, ClipboardList, ShieldCheck, KeyRound, UserCheck,
  RefreshCw, AlertTriangle, CreditCard, PenSquare, Search, Bot, Receipt, Building2,
  HeartPulse, Brain, Bone, Baby, Eye, Stethoscope, Syringe, Scan, Ambulance,
  Dumbbell, Pill, Smile, ScanFace, Sparkles,
} from "lucide-react";

export const services = [
  { icon: FileText, title: "Medical Billing", desc: "End-to-end claim lifecycle managed by certified billers with 98% first-pass acceptance." },
  { icon: Activity, title: "Revenue Cycle Management", desc: "Holistic RCM from eligibility to zero balance, tuned to your specialty and payer mix." },
  { icon: ClipboardList, title: "Medical Coding", desc: "AAPC & AHIMA certified coders across CPT, ICD-10-CM, HCPCS and modifier accuracy." },
  { icon: ShieldCheck, title: "Insurance Verification", desc: "Real-time eligibility & benefits checks before every visit to prevent denials." },
  { icon: KeyRound, title: "Prior Authorization", desc: "Fast-tracked auth submission and follow-up with dedicated payer specialists." },
  { icon: UserCheck, title: "Credentialing", desc: "Provider enrollment, CAQH maintenance, and re-credentialing with all major payers." },
  { icon: RefreshCw, title: "AR Recovery", desc: "Aggressive follow-up on aged AR to recover revenue you've written off." },
  { icon: AlertTriangle, title: "Denial Management", desc: "Root-cause analytics and appeal workflows that recover up to 92% of denials." },
  { icon: CreditCard, title: "Payment Posting", desc: "Same-day ERA/EOB posting with variance flagging and secondary claim generation." },
  { icon: PenSquare, title: "Charge Entry", desc: "Accurate, audit-ready charge capture within 24 hours of encounter." },
  { icon: Search, title: "Eligibility Verification", desc: "Automated batch eligibility with human review for edge-case plans." },
  { icon: Bot, title: "Virtual Medical Assistant", desc: "HIPAA-trained VMAs for scheduling, intake, refills and patient outreach." },
  { icon: Receipt, title: "Patient Billing", desc: "Compassionate patient statements, portals and payment plans that lift collections." },
  { icon: Building2, title: "Practice Management", desc: "Operational support, KPI dashboards and monthly performance reviews." },
];

export const specialties = [
  { icon: Stethoscope, name: "Family Medicine" },
  { icon: HeartPulse, name: "Internal Medicine" },
  { icon: HeartPulse, name: "Cardiology" },
  { icon: Bone, name: "Orthopedics" },
  { icon: Brain, name: "Psychiatry" },
  { icon: Brain, name: "Neurology" },
  { icon: Sparkles, name: "Dermatology" },
  { icon: Scan, name: "Radiology" },
  { icon: Ambulance, name: "Urgent Care" },
  { icon: Dumbbell, name: "Physical Therapy" },
  { icon: Pill, name: "Pain Management" },
  { icon: Brain, name: "Behavioral Health" },
  { icon: Baby, name: "Pediatrics" },
  { icon: Activity, name: "Gastroenterology" },
  { icon: Eye, name: "Ophthalmology" },
  { icon: Smile, name: "Dental Billing" },
  { icon: ScanFace, name: "Chiropractic Billing" },
];

export const process = [
  { step: "01", title: "Patient Visit", desc: "Eligibility, benefits and prior auth verified before the encounter." },
  { step: "02", title: "Charge Entry", desc: "Charges captured within 24 hours from EHR with QA review." },
  { step: "03", title: "Medical Coding", desc: "Certified coders assign CPT/ICD-10 with modifier accuracy." },
  { step: "04", title: "Claim Submission", desc: "Scrubbed and submitted electronically to primary payer." },
  { step: "05", title: "Insurance Processing", desc: "Active follow-up with payers until adjudication." },
  { step: "06", title: "Payment Posting", desc: "ERA/EOB posted same day with variance and adjustment coding." },
  { step: "07", title: "Denial Resolution", desc: "Root-cause analysis and appeals with 92% recovery rate." },
  { step: "08", title: "Reporting", desc: "Real-time dashboards and monthly executive performance reviews." },
];

export const stats = [
  { value: 99, suffix: "%", label: "Claim Acceptance" },
  { value: 30, suffix: "%", label: "Avg. Revenue Growth" },
  { value: 48, suffix: "h", label: "Claim Submission" },
  { value: 95, suffix: "%", label: "First Pass Rate" },
  { value: 500, suffix: "+", label: "Healthcare Providers" },
  { value: 1, suffix: "M+", label: "Claims Processed" },
];

export const testimonials = [
  { name: "Dr. Sarah Whitman, MD", clinic: "Whitman Family Practice · Austin, TX", quote: "Meridian rebuilt our AR from the ground up. We saw a 34% lift in collections in the first quarter and our team finally got back to patient care.", rating: 5 },
  { name: "Dr. Marcus Chen, DO", clinic: "Coastal Orthopedic Group · San Diego, CA", quote: "Their denial team recovered $412K in aged AR we had written off. Reporting is world-class and the account manager feels like an extension of our team.", rating: 5 },
  { name: "Dr. Priya Anand, MD", clinic: "Anand Cardiology Associates · Boston, MA", quote: "Prior auths that used to take five days now clear in under 24 hours. Patient satisfaction scores are up and no-shows dropped 22%.", rating: 5 },
  { name: "Dr. James O'Neill, MD", clinic: "Great Lakes Pediatrics · Chicago, IL", quote: "Onboarding was seamless. Their coders caught modifier errors our previous vendor missed for years — the audit alone paid for the switch.", rating: 5 },
];

export const faqs = [
  ["How quickly can we onboard with Meridian RCM?", "Most practices are fully live in 14–21 days. We handle EHR integration, credentialing transfer, and payer enrollment in parallel while your current process continues without disruption."],
  ["Is your platform HIPAA compliant?", "Yes. We are HIPAA compliant, SOC 2 Type II certified, and HITRUST-aligned. All data is encrypted in transit and at rest, and every team member completes annual HIPAA and security training."],
  ["What is your first-pass acceptance rate?", "Our platform-wide first-pass acceptance rate is 98.6%. We use a multi-layer scrubbing engine and specialty-specific coding review before submission."],
  ["Do you work with our existing EHR?", "We integrate with 40+ EHR and PM systems including Epic, Cerner, Athenahealth, eClinicalWorks, Kareo, DrChrono, NextGen, and AdvancedMD."],
  ["How is pricing structured?", "We offer transparent percentage-of-collections pricing with no hidden fees, no long-term contracts, and no charge for denied claims — you only pay when we get you paid."],
  ["Who owns the patient and financial data?", "You do. Always. We are custodians of your data and you can export or terminate at any time with full data portability."],
  ["Do you handle patient billing and collections?", "Yes. We manage patient statements, portal payments, payment plans and soft collections with a compassionate, brand-safe voice."],
  ["Can you help with credentialing new providers?", "Absolutely. Our credentialing team handles CAQH, payer enrollments, re-credentialing and hospital privileging across all major commercial and government payers."],
  ["How do you handle denials and appeals?", "Every denial is coded to a root cause, appealed within 48 hours when appropriate, and fed back into our upstream workflows to prevent recurrence. Our recovery rate is 92%."],
  ["What specialties do you support?", "We support 30+ specialties from primary care to complex surgical subspecialties, dental, behavioral health, and DME. Every account gets a specialty-matched team."],
  ["How often will we receive reports?", "You get real-time dashboards, weekly performance snapshots, and a monthly executive review with your dedicated account manager."],
  ["Can we speak with existing clients?", "Yes. During evaluation we'll connect you with 2–3 references in your specialty and region."],
  ["What if we're mid-transition from another biller?", "We specialize in vendor transitions. We'll clean up backlog, re-work agedAR, and stand up new workflows in parallel."],
  ["Do you offer virtual medical assistants?", "Yes. HIPAA-trained VMAs support scheduling, intake, refills, referrals and patient outreach — priced per FTE or per task."],
  ["How is your team structured?", "Every account has a dedicated Account Manager, a lead coder, a claims specialist, an AR analyst and a credentialing lead — one team, one number."],
  ["Are your team members US-based?", "Our AR, denial, and account management teams are US-based. Some backend coding and posting is delivered from our secure, HIPAA-compliant global service centers."],
  ["What's your typical revenue lift?", "Practices that partner with us see a 20–35% lift in net collections within the first 90 days, driven by cleaner claims, faster follow-up and denial recovery."],
  ["Do you offer month-to-month contracts?", "Yes. We earn your business every month. No multi-year lock-ins."],
  ["How do we get started?", "Book a free 30-minute consultation. We'll audit a sample of claims, benchmark your KPIs, and share a written revenue opportunity report — no obligation."],
  ["Is there a setup fee?", "No setup fee for standard onboarding. Complex multi-location or hospital groups may have a scoped implementation fee, disclosed upfront."],
] as const;
