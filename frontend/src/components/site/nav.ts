/** Site-wide navigation & footer links — SEO-ready structure */

export { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-config";

export type NavLink = { label: string; href: string };
export type NavGroup = { heading: string; links: NavLink[] };

export const aboutLinks: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Our Process", href: "/our-process" },
  { label: "Leadership Team", href: "/leadership-team" },
  { label: "Careers", href: "/careers" },
];

export const serviceLinks: NavLink[] = [
  { label: "Revenue Cycle Management", href: "/revenue-cycle-management" },
  { label: "Medical Billing Services", href: "/medical-billing-services" },
  { label: "Medical Coding", href: "/medical-coding-services" },
  { label: "Credentialing Services", href: "/provider-credentialing-services" },
  { label: "Provider Enrollment", href: "/provider-enrollment-services" },
  { label: "Eligibility Verification", href: "/insurance-verification-services" },
  { label: "Prior Authorization", href: "/prior-authorization-services" },
  { label: "Claims Management", href: "/claims-management-services" },
  { label: "Payment Posting", href: "/payment-posting-services" },
  { label: "AR Recovery", href: "/accounts-receivable-management" },
  { label: "Denial Management", href: "/denial-management-services" },
  { label: "Accounts Receivable Follow-up", href: "/accounts-receivable-management" },
];

export const specialtyGroups: NavGroup[] = [
  {
    heading: "Behavioral Health",
    links: [
      { label: "Mental Health Billing", href: "/specialties/mental-health-billing" },
      { label: "Behavioral Health Billing", href: "/specialties/behavioral-health-billing" },
      { label: "Psychiatry Billing", href: "/specialties/psychiatry-billing" },
      { label: "Psychology Billing", href: "/specialties/psychology" },
      { label: "Therapy Billing", href: "/specialties/therapy" },
      { label: "Counseling Billing", href: "/specialties/counseling" },
      { label: "ABA Therapy Billing", href: "/specialties/aba-therapy" },
      { label: "Addiction Treatment Billing", href: "/specialties/addiction-treatment" },
    ],
  },
  {
    heading: "Medical Specialties",
    links: [
      { label: "Cardiology Billing", href: "/specialties/cardiology-billing" },
      { label: "Dermatology Billing", href: "/specialties/dermatology" },
      { label: "Orthopedic Billing", href: "/specialties/orthopedic-billing" },
      { label: "Gastroenterology Billing", href: "/specialties/gastroenterology" },
      { label: "Neurology Billing", href: "/specialties/neurology" },
      { label: "Internal Medicine Billing", href: "/specialties/internal-medicine" },
      { label: "Family Practice Billing", href: "/specialties/family-practice-billing" },
      { label: "Pediatrics Billing", href: "/specialties/pediatrics" },
      { label: "Pain Management Billing", href: "/specialties/pain-management" },
      { label: "Physical Therapy Billing", href: "/specialties/physical-therapy" },
      { label: "Chiropractic Billing", href: "/specialties/chiropractic" },
      { label: "OB/GYN Billing", href: "/specialties/obgyn" },
      { label: "Urgent Care Billing", href: "/specialties/urgent-care-billing" },
      { label: "Home Health Billing", href: "/specialties/home-health" },
      { label: "Radiology Billing", href: "/specialties/radiology" },
      { label: "Dental Billing", href: "/specialties/dental-billing" },
    ],
  },
];

export const resourceLinks: NavLink[] = [
  { label: "Blog", href: "/resources" },
  { label: "CPT Codes", href: "/resources/cpt-codes" },
  { label: "ICD-10 Codes", href: "/resources/icd-10" },
  { label: "HCPCS Codes", href: "/resources/hcpcs-codes" },
  { label: "Medical Billing Modifiers", href: "/resources/modifiers" },
  { label: "Denial Codes", href: "/resources/denial-management-guides" },
  { label: "Billing Glossary", href: "/resources/glossary" },
  { label: "Case Studies", href: "/resources/case-studies" },
  { label: "Whitepapers", href: "/resources/whitepapers" },
  { label: "Downloads", href: "/resources/downloads" },
];

export const locationLinks: NavLink[] = [
  { label: "All States", href: "/locations" },
  { label: "California", href: "/locations/california" },
  { label: "Texas", href: "/locations/texas" },
  { label: "Florida", href: "/locations/florida" },
  { label: "New York", href: "/locations/new-york" },
  { label: "Illinois", href: "/locations/illinois" },
  { label: "Pennsylvania", href: "/locations/pennsylvania" },
  { label: "Arizona", href: "/locations/arizona" },
];

export const industryLinks: NavLink[] = [
  { label: "Solo Practices", href: "/industries/solo-practices" },
  { label: "Group Practices", href: "/industries/group-practices" },
  { label: "Hospitals", href: "/industries/hospitals" },
  { label: "Behavioral Health Clinics", href: "/industries/behavioral-health-clinics" },
  { label: "Telehealth Providers", href: "/industries/telehealth" },
  { label: "Private Practices", href: "/industries/private-practices" },
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
  { label: "Medical Billing", href: "/medical-billing-services" },
  { label: "Medical Coding", href: "/medical-coding-services" },
  { label: "Credentialing", href: "/provider-credentialing-services" },
  { label: "RCM", href: "/revenue-cycle-management" },
];

export const footerResources: NavLink[] = [
  { label: "Blog", href: "/resources" },
  { label: "CPT Codes", href: "/resources/cpt-codes" },
  { label: "ICD-10", href: "/resources/icd-10" },
  { label: "Modifier Guides", href: "/resources/modifiers" },
  { label: "Denial Codes", href: "/resources/denial-management-guides" },
];

export const footerSupport: NavLink[] = [
  { label: "FAQs", href: "/faq" },
  { label: "Help Center", href: "/contact" },
  { label: "Sitemap", href: "/sitemap" },
];
