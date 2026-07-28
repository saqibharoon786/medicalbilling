/** Site-wide navigation & footer links — SEO-ready structure */

export const PHONE_DISPLAY = "+1 (800) 555-0142";
export const PHONE_TEL = "tel:+18005550142";

export type NavLink = { label: string; href: string };
export type NavGroup = { heading: string; links: NavLink[] };

export const aboutLinks: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Why Choose Us", href: "/about#why-choose-us" },
  { label: "Our Process", href: "/about#process" },
  { label: "Leadership Team", href: "/about#leadership" },
  { label: "Careers", href: "/careers" },
];

export const serviceLinks: NavLink[] = [
  { label: "Revenue Cycle Management", href: "/services#rcm" },
  { label: "Medical Billing Services", href: "/services#medical-billing" },
  { label: "Medical Coding", href: "/services#medical-coding" },
  { label: "Credentialing Services", href: "/services#credentialing" },
  { label: "Provider Enrollment", href: "/services#provider-enrollment" },
  { label: "Eligibility Verification", href: "/services#eligibility" },
  { label: "Prior Authorization", href: "/services#prior-authorization" },
  { label: "Charge Entry", href: "/services#charge-entry" },
  { label: "Payment Posting", href: "/services#payment-posting" },
  { label: "AR Recovery", href: "/services#ar-recovery" },
  { label: "Denial Management", href: "/services#denial-management" },
  { label: "Accounts Receivable Follow-up", href: "/services#ar-follow-up" },
];

export const specialtyGroups: NavGroup[] = [
  {
    heading: "Behavioral Health",
    links: [
      { label: "Mental Health Billing", href: "/specialties#mental-health" },
      { label: "Psychiatry Billing", href: "/specialties#psychiatry" },
      { label: "Psychology Billing", href: "/specialties#psychology" },
      { label: "Therapy Billing", href: "/specialties#therapy" },
      { label: "Counseling Billing", href: "/specialties#counseling" },
      { label: "ABA Therapy Billing", href: "/specialties#aba-therapy" },
      { label: "Addiction Treatment Billing", href: "/specialties#addiction-treatment" },
    ],
  },
  {
    heading: "Medical Specialties",
    links: [
      { label: "Cardiology Billing", href: "/specialties#cardiology" },
      { label: "Dermatology Billing", href: "/specialties#dermatology" },
      { label: "Orthopedic Billing", href: "/specialties#orthopedics" },
      { label: "Gastroenterology Billing", href: "/specialties#gastroenterology" },
      { label: "Neurology Billing", href: "/specialties#neurology" },
      { label: "Internal Medicine Billing", href: "/specialties#internal-medicine" },
      { label: "Family Medicine Billing", href: "/specialties#family-medicine" },
      { label: "Pediatrics Billing", href: "/specialties#pediatrics" },
      { label: "Pain Management Billing", href: "/specialties#pain-management" },
      { label: "Physical Therapy Billing", href: "/specialties#physical-therapy" },
      { label: "Chiropractic Billing", href: "/specialties#chiropractic" },
      { label: "OB/GYN Billing", href: "/specialties#obgyn" },
      { label: "Urgent Care Billing", href: "/specialties#urgent-care" },
      { label: "Home Health Billing", href: "/specialties#home-health" },
      { label: "Radiology Billing", href: "/specialties#radiology" },
    ],
  },
];

export const resourceLinks: NavLink[] = [
  { label: "Blog", href: "/resources" },
  { label: "CPT Codes", href: "/resources#cpt-codes" },
  { label: "ICD-10 Codes", href: "/resources#icd-10-codes" },
  { label: "HCPCS Codes", href: "/resources#hcpcs-codes" },
  { label: "Medical Billing Modifiers", href: "/resources#modifiers" },
  { label: "Denial Codes", href: "/resources#denial-codes" },
  { label: "Billing Glossary", href: "/resources#glossary" },
  { label: "Case Studies", href: "/resources#case-studies" },
  { label: "Whitepapers", href: "/resources#whitepapers" },
  { label: "Downloads", href: "/resources#downloads" },
];

export const locationLinks: NavLink[] = [
  { label: "All States", href: "/locations" },
  { label: "California", href: "/locations#california" },
  { label: "Texas", href: "/locations#texas" },
  { label: "Florida", href: "/locations#florida" },
  { label: "New York", href: "/locations#new-york" },
  { label: "Illinois", href: "/locations#illinois" },
  { label: "Pennsylvania", href: "/locations#pennsylvania" },
  { label: "Arizona", href: "/locations#arizona" },
];

export const industryLinks: NavLink[] = [
  { label: "Solo Practices", href: "/industries#solo-practices" },
  { label: "Group Practices", href: "/industries#group-practices" },
  { label: "Hospitals", href: "/industries#hospitals" },
  { label: "Behavioral Health Clinics", href: "/industries#behavioral-health-clinics" },
  { label: "Telehealth Providers", href: "/industries#telehealth" },
  { label: "Private Practices", href: "/industries#private-practices" },
];

/** Footer columns */
export const footerCompany: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export const footerServices: NavLink[] = [
  { label: "Medical Billing", href: "/services#medical-billing" },
  { label: "Medical Coding", href: "/services#medical-coding" },
  { label: "Credentialing", href: "/services#credentialing" },
  { label: "RCM", href: "/services#rcm" },
];

export const footerResources: NavLink[] = [
  { label: "Blog", href: "/resources" },
  { label: "CPT Codes", href: "/resources#cpt-codes" },
  { label: "ICD-10", href: "/resources#icd-10-codes" },
  { label: "Modifier Guides", href: "/resources#modifiers" },
  { label: "Denial Codes", href: "/resources#denial-codes" },
];

export const footerSupport: NavLink[] = [
  { label: "FAQs", href: "/faq" },
  { label: "Help Center", href: "/contact" },
  { label: "Sitemap", href: "/sitemap" },
];
