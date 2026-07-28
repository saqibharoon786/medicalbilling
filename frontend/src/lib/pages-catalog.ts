/** SEO page catalogs — path segments after /services|/specialties|/resources|/locations|/industries */

export type PageEntry = {
  slug: string;
  title: string;
  description: string;
  eyebrow?: string;
};

export const servicePages: PageEntry[] = [
  {
    slug: "rcm",
    title: "Revenue Cycle Management",
    description:
      "End-to-end RCM from eligibility to zero balance — tuned to your specialty and payer mix.",
    eyebrow: "Services",
  },
  {
    slug: "medical-billing",
    title: "Medical Billing Services",
    description:
      "End-to-end claim lifecycle managed by certified billers with high first-pass acceptance.",
    eyebrow: "Services",
  },
  {
    slug: "medical-coding",
    title: "Medical Coding",
    description:
      "AAPC & AHIMA certified coders across CPT, ICD-10-CM, HCPCS and modifier accuracy.",
    eyebrow: "Services",
  },
  {
    slug: "credentialing",
    title: "Credentialing Services",
    description:
      "Provider enrollment, CAQH maintenance, and re-credentialing with all major payers.",
    eyebrow: "Services",
  },
  {
    slug: "provider-enrollment",
    title: "Provider Enrollment",
    description: "Fast, accurate enrollment for new providers across commercial and government payers.",
    eyebrow: "Services",
  },
  {
    slug: "eligibility",
    title: "Eligibility Verification",
    description: "Real-time eligibility and benefits checks before every visit to prevent denials.",
    eyebrow: "Services",
  },
  {
    slug: "prior-authorization",
    title: "Prior Authorization",
    description: "Fast-tracked auth submission and follow-up with dedicated payer specialists.",
    eyebrow: "Services",
  },
  {
    slug: "charge-entry",
    title: "Charge Entry",
    description: "Accurate, audit-ready charge capture within 24 hours of the encounter.",
    eyebrow: "Services",
  },
  {
    slug: "payment-posting",
    title: "Payment Posting",
    description: "Same-day ERA/EOB posting with variance flagging and secondary claim generation.",
    eyebrow: "Services",
  },
  {
    slug: "ar-recovery",
    title: "AR Recovery",
    description: "Aggressive follow-up on aged AR to recover revenue you’ve written off.",
    eyebrow: "Services",
  },
  {
    slug: "denial-management",
    title: "Denial Management",
    description: "Root-cause analytics and appeal workflows that recover the majority of denials.",
    eyebrow: "Services",
  },
  {
    slug: "ar-follow-up",
    title: "Accounts Receivable Follow-up",
    description: "Persistent payer follow-up until every clean claim is paid in full.",
    eyebrow: "Services",
  },
];

export const specialtyPages: PageEntry[] = [
  { slug: "mental-health", title: "Mental Health Billing", description: "Specialty billing for mental health practices — coding, claims, and denial prevention." },
  { slug: "behavioral-health", title: "Behavioral Health Billing", description: "Behavioral health clinic billing with authorizations, coding, and denial prevention." },
  { slug: "psychiatry", title: "Psychiatry Billing", description: "Psychiatry-focused RCM with accurate E/M, therapy, and medication management coding." },
  { slug: "psychology", title: "Psychology Billing", description: "Psychology billing support for therapy sessions, testing, and payer-specific rules." },
  { slug: "therapy", title: "Therapy Billing", description: "Clean claims for therapy practices with specialty-matched coding and AR follow-up." },
  { slug: "counseling", title: "Counseling Billing", description: "Counseling practice billing with eligibility, coding, and patient collections support." },
  { slug: "aba-therapy", title: "ABA Therapy Billing", description: "ABA therapy billing built around authorization, units, and payer documentation rules." },
  { slug: "addiction-treatment", title: "Addiction Treatment Billing", description: "Addiction treatment RCM covering levels of care, authorizations, and complex payer mixes." },
  { slug: "cardiology", title: "Cardiology Billing", description: "Cardiology billing for procedures, diagnostics, and high-dollar claim accuracy." },
  { slug: "dermatology", title: "Dermatology Billing", description: "Dermatology coding and billing for medical and procedure-heavy practices." },
  { slug: "orthopedics", title: "Orthopedic Billing", description: "Orthopedic billing for surgery, injections, PT crosswalks, and implant-related claims." },
  { slug: "gastroenterology", title: "Gastroenterology Billing", description: "GI billing for endoscopy, procedures, and facility/professional split claims." },
  { slug: "neurology", title: "Neurology Billing", description: "Neurology RCM for EMG, EEGs, infusions, and complex diagnostic coding." },
  { slug: "internal-medicine", title: "Internal Medicine Billing", description: "Internal medicine billing with clean E/M coding and chronic care support." },
  { slug: "family-medicine", title: "Family Medicine Billing", description: "Family medicine billing built for high-volume primary care workflows." },
  { slug: "pediatrics", title: "Pediatrics Billing", description: "Pediatric billing including vaccines, well visits, and age-specific coding rules." },
  { slug: "pain-management", title: "Pain Management Billing", description: "Pain management billing for injections, procedures, and prior auth-heavy workflows." },
  { slug: "physical-therapy", title: "Physical Therapy Billing", description: "PT billing with unit accuracy, modifiers, and progress-note aligned claims." },
  { slug: "chiropractic", title: "Chiropractic Billing", description: "Chiropractic billing with payer-specific visit limits and modifier accuracy." },
  { slug: "obgyn", title: "OB/GYN Billing", description: "OB/GYN billing for global maternity, procedures, and office-based services." },
  { slug: "urgent-care", title: "Urgent Care Billing", description: "Urgent care billing for high-volume, same-day encounters and payer variation." },
  { slug: "home-health", title: "Home Health Billing", description: "Home health billing with episode-based workflows and documentation alignment." },
  { slug: "radiology", title: "Radiology Billing", description: "Radiology billing for professional and technical components with clean coding." },
  { slug: "ophthalmology", title: "Ophthalmology Billing", description: "Ophthalmology billing for exams, procedures, and optical-related services." },
  { slug: "dental", title: "Dental Billing", description: "Dental billing support for practice management and payer claim workflows." },
].map((p) => ({ ...p, eyebrow: "Specialties" }));

export const resourcePages: PageEntry[] = [
  { slug: "cpt-codes", title: "CPT Codes", description: "Common procedural terminology guides for accurate claim coding." },
  { slug: "icd-10-codes", title: "ICD-10 Codes", description: "Diagnosis code references and documentation tips for cleaner claims." },
  { slug: "hcpcs-codes", title: "HCPCS Codes", description: "Supply, DME, and service code lookup resources for billers." },
  { slug: "modifiers", title: "Medical Billing Modifiers", description: "Modifier guides that prevent denials and underpayments." },
  { slug: "denial-codes", title: "Denial Codes", description: "CARC/RARC explanations and appeal playbooks." },
  { slug: "glossary", title: "Billing Glossary", description: "Plain-language definitions for RCM terminology." },
  { slug: "case-studies", title: "Case Studies", description: "Real practice turnarounds and recovered revenue stories." },
  { slug: "whitepapers", title: "Whitepapers", description: "In-depth research for CFOs and practice leaders." },
  { slug: "downloads", title: "Downloads", description: "Checklists, calculators, and templates you can use today." },
].map((p) => ({ ...p, eyebrow: "Resources" }));

export const locationPages: PageEntry[] = [
  { slug: "california", title: "California Medical Billing", description: "Medical billing and RCM support for California healthcare providers." },
  { slug: "texas", title: "Texas Medical Billing", description: "Medical billing and RCM support for Texas healthcare providers." },
  { slug: "florida", title: "Florida Medical Billing", description: "Medical billing and RCM support for Florida healthcare providers." },
  { slug: "new-york", title: "New York Medical Billing", description: "Medical billing and RCM support for New York healthcare providers." },
  { slug: "illinois", title: "Illinois Medical Billing", description: "Medical billing and RCM support for Illinois healthcare providers." },
  { slug: "pennsylvania", title: "Pennsylvania Medical Billing", description: "Medical billing and RCM support for Pennsylvania healthcare providers." },
  { slug: "arizona", title: "Arizona Medical Billing", description: "Medical billing and RCM support for Arizona healthcare providers." },
].map((p) => ({ ...p, eyebrow: "Locations" }));

export const industryPages: PageEntry[] = [
  { slug: "solo-practices", title: "Solo Practices", description: "Billing and RCM built for independent providers who need full-cycle support." },
  { slug: "group-practices", title: "Group Practices", description: "Multi-provider billing workflows, reporting, and AR ownership for groups." },
  { slug: "hospitals", title: "Hospitals", description: "Hospital and outpatient billing support with scalable RCM operations." },
  { slug: "behavioral-health-clinics", title: "Behavioral Health Clinics", description: "Clinic billing for behavioral health — authorizations, coding, and collections." },
  { slug: "telehealth", title: "Telehealth Providers", description: "Virtual care claim support with telehealth modifiers and payer rules." },
  { slug: "private-practices", title: "Private Practices", description: "Private practice collections, coding, and denial prevention." },
].map((p) => ({ ...p, eyebrow: "Industries" }));

export function findPage(pages: PageEntry[], slug: string) {
  return pages.find((p) => p.slug === slug);
}
