"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu, X, Phone, Mail, Clock, Moon, Sun, ChevronRight, ChevronDown, MessageSquare,
  Building2, Users, Workflow, Award, Briefcase,
  Activity, FileText, ClipboardList, ShieldCheck, UserCheck, KeyRound,
  Search, PenSquare, CreditCard, RefreshCw, AlertTriangle, Receipt,
  Brain, HeartPulse, Stethoscope, BookOpen, Code2, FileCode2,
  Tags, Ban, BookMarked, Newspaper, Download, MapPin, Hospital,
  Video, UserRound, UsersRound, Building, Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { BrandLogo } from "./BrandLogo";
import { CONTACT_EMAIL, emailUs } from "@/lib/contact";
import { cn } from "@/lib/utils";
import {
  aboutLinks,
  serviceLinks,
  specialtyGroups,
  resourceLinks,
  locationLinks,
  industryLinks,
  PHONE_DISPLAY,
  PHONE_TEL,
  type NavLink,
} from "./nav";

type MegaKey = "about" | "services" | "specialties" | "resources" | "locations" | "industries";

type NavItem =
  | { to: string; label: string }
  | { to: string; label: string; mega: MegaKey };

const nav: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About", mega: "about" },
  { to: "/services", label: "Services", mega: "services" },
  { to: "/specialties", label: "Specialties", mega: "specialties" },
  { to: "/resources", label: "Resources", mega: "resources" },
  { to: "/locations", label: "Locations", mega: "locations" },
  { to: "/industries", label: "Industries", mega: "industries" },
  { to: "/contact", label: "Contact" },
];

const aboutMeta: Record<string, { icon: LucideIcon; desc: string }> = {
  "About Us": { icon: Building2, desc: "Our story, mission & values" },
  "Why Choose Us": { icon: Award, desc: "What sets ABS apart" },
  "Our Process": { icon: Workflow, desc: "8-step revenue workflow" },
  "Leadership Team": { icon: Users, desc: "Operators behind every account" },
  Careers: { icon: Briefcase, desc: "Join our growing team" },
};

const serviceMeta: Record<string, { icon: LucideIcon; desc: string }> = {
  "Revenue Cycle Management": { icon: Activity, desc: "End-to-end RCM operations" },
  "Medical Billing Services": { icon: FileText, desc: "Claims from submit to payment" },
  "Medical Coding": { icon: ClipboardList, desc: "CPT, ICD-10 & HCPCS accuracy" },
  "Credentialing Services": { icon: ShieldCheck, desc: "Payer enrollment & CAQH" },
  "Provider Enrollment": { icon: UserCheck, desc: "New provider onboarding" },
  "Eligibility Verification": { icon: Search, desc: "Benefits checked before visits" },
  "Prior Authorization": { icon: KeyRound, desc: "Fast auth submission & follow-up" },
  "Claims Management": { icon: PenSquare, desc: "Scrub, submit, track, resolve" },
  "Charge Entry": { icon: PenSquare, desc: "Audit-ready charge capture" },
  "Payment Posting": { icon: CreditCard, desc: "Same-day ERA/EOB posting" },
  "AR Recovery": { icon: RefreshCw, desc: "Aged AR recovery programs" },
  "Denial Management": { icon: AlertTriangle, desc: "Appeals with root-cause fixes" },
  "Accounts Receivable Follow-up": { icon: Receipt, desc: "Persistent payer follow-up" },
};

const resourceMeta: Record<string, { icon: LucideIcon; desc: string }> = {
  Blog: { icon: Newspaper, desc: "Insights & industry updates" },
  "CPT Codes": { icon: Code2, desc: "Procedure code guides" },
  "ICD-10 Codes": { icon: FileCode2, desc: "Diagnosis coding references" },
  "HCPCS Codes": { icon: Tags, desc: "Supply & service codes" },
  "Medical Billing Modifiers": { icon: Sparkles, desc: "Modifier accuracy guides" },
  "Denial Codes": { icon: Ban, desc: "CARC/RARC explanations" },
  "Billing Glossary": { icon: BookMarked, desc: "RCM terms, plain language" },
  "Case Studies": { icon: BookOpen, desc: "Real practice turnarounds" },
  Whitepapers: { icon: FileText, desc: "In-depth research reports" },
  Downloads: { icon: Download, desc: "Templates & calculators" },
};

const locationMeta: Record<string, LucideIcon> = {
  "All States": MapPin,
  California: MapPin,
  Texas: MapPin,
  Florida: MapPin,
  "New York": MapPin,
  Illinois: MapPin,
  Pennsylvania: MapPin,
  Arizona: MapPin,
};

const industryMeta: Record<string, { icon: LucideIcon; desc: string }> = {
  "Solo Practices": { icon: UserRound, desc: "Built for independent providers" },
  "Group Practices": { icon: UsersRound, desc: "Multi-provider workflows" },
  Hospitals: { icon: Hospital, desc: "Hospital & outpatient billing" },
  "Behavioral Health Clinics": { icon: Brain, desc: "BH & mental health RCM" },
  "Telehealth Providers": { icon: Video, desc: "Virtual care claim support" },
  "Private Practices": { icon: Building, desc: "Private practice collections" },
};

const specialtyIcons: Record<string, LucideIcon> = {
  "Mental Health Billing": Brain,
  "Behavioral Health Billing": Brain,
  "Psychiatry Billing": Brain,
  "Psychology Billing": Brain,
  "Therapy Billing": HeartPulse,
  "Counseling Billing": HeartPulse,
  "ABA Therapy Billing": Sparkles,
  "Addiction Treatment Billing": ShieldCheck,
  "Cardiology Billing": HeartPulse,
  "Dermatology Billing": Sparkles,
  "Orthopedic Billing": Activity,
  "Gastroenterology Billing": Stethoscope,
  "Neurology Billing": Brain,
  "Internal Medicine Billing": Stethoscope,
  "Family Practice Billing": Stethoscope,
  "Family Medicine Billing": Stethoscope,
  "Pediatrics Billing": HeartPulse,
  "Pain Management Billing": Activity,
  "Physical Therapy Billing": Activity,
  "Chiropractic Billing": Activity,
  "OB/GYN Billing": HeartPulse,
  "Urgent Care Billing": Hospital,
  "Home Health Billing": Building2,
  "Radiology Billing": Search,
  "Dental Billing": Sparkles,
};

function hasMega(n: NavItem): n is NavItem & { mega: MegaKey } {
  return "mega" in n && Boolean(n.mega);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MegaKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState<MegaKey | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMega = (key: MegaKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(key);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 160);
  };

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem("theme");
    const prefersDark = stored === "dark";
    setDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
    setMobileOpen(null);
  }, [pathname]);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const requestAudit = () => {
    setOpenMenu(null);
    setOpen(false);
    emailUs(
      "Free Billing Audit Request",
      "Hi ABS team,\n\nI would like a free billing audit for my practice.\n\nName:\nPractice name:\nSpecialty:\nPhone:\n",
    );
    toast.success("Opening email…", { description: `Send to ${CONTACT_EMAIL}` });
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden md:block bg-primary text-primary-foreground text-xs">
        <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6 opacity-90">
            <a href={PHONE_TEL} className="flex items-center gap-1.5 hover:underline">
              <Phone className="h-3.5 w-3.5" /> {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-1.5 hover:underline">
              <Mail className="h-3.5 w-3.5" /> {CONTACT_EMAIL}
            </a>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> Mon–Fri 8am–8pm EST · 24/7 Support
            </span>
          </div>
          <div className="flex items-center gap-3 opacity-90">
            <span>HIPAA Compliant</span>
            <span className="opacity-50">·</span>
            <span>SOC 2 Type II</span>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "transition-all duration-300 border-b border-border/60",
          scrolled ? "glass-card shadow-card-soft" : "bg-background/80 backdrop-blur-md",
        )}
      >
        <div className="mx-auto max-w-7xl px-4 xl:px-6 min-h-[76px] md:min-h-[84px] py-2 flex items-center justify-between gap-3">
          <BrandLogo size="header" />

          <nav className="hidden lg:flex items-center gap-0.5">
            {nav.map((n) =>
              hasMega(n) ? (
                <div
                  key={n.to}
                  className="relative"
                  onMouseEnter={() => openMega(n.mega)}
                  onMouseLeave={scheduleClose}
                >
                  <Link
                    href={n.to}
                    className={cn(
                      "px-2.5 py-2 text-[13px] rounded-lg transition-all inline-flex items-center gap-1",
                      openMenu === n.mega || isActive(n.to)
                        ? "font-semibold text-primary bg-primary/5"
                        : "font-medium text-foreground/80 hover:text-primary hover:bg-accent/60",
                    )}
                  >
                    {n.label}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 opacity-70 transition-transform duration-200",
                        openMenu === n.mega && "rotate-180",
                      )}
                    />
                  </Link>
                  {openMenu === n.mega && (
                    <MegaPanel
                      mega={n.mega}
                      onEnter={() => openMega(n.mega)}
                      onLeave={scheduleClose}
                      onNavigate={() => setOpenMenu(null)}
                      onAudit={requestAudit}
                    />
                  )}
                </div>
              ) : (
                <Link
                  key={n.to}
                  href={n.to}
                  className={cn(
                    "px-2.5 py-2 text-[13px] rounded-lg transition-colors",
                    isActive(n.to)
                      ? "font-semibold text-primary bg-primary/5"
                      : "font-medium text-foreground/80 hover:text-primary hover:bg-accent/60",
                  )}
                >
                  {n.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="h-9 w-9 grid place-items-center rounded-lg border border-border hover:bg-accent transition-colors"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Button variant="outline" className="hidden md:inline-flex border-primary/30 text-primary hover:bg-primary/5" asChild>
              <a href={PHONE_TEL}>
                <Phone className="mr-1.5 h-3.5 w-3.5" />
                Call Now
              </a>
            </Button>
            <Button
              className="hidden sm:inline-flex bg-emerald-gradient text-emerald-foreground hover:opacity-90 shadow-card-soft text-xs lg:text-sm px-3 lg:px-4"
              onClick={() => requestAudit()}
            >
              <MessageSquare className="mr-1.5 h-3.5 w-3.5" />
              <span className="hidden xl:inline">Get Free Billing Audit</span>
              <span className="xl:hidden">Free Audit</span>
            </Button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden h-9 w-9 grid place-items-center rounded-lg border border-border"
              aria-label="Menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-background max-h-[min(80vh,720px)] overflow-y-auto">
            <div className="px-4 py-4 grid gap-1">
              {nav.map((n) => {
                if (!hasMega(n)) {
                  return (
                    <Link
                      key={n.to}
                      href={n.to}
                      onClick={() => setOpen(false)}
                      className="px-3 py-3 rounded-xl text-sm font-medium hover:bg-accent"
                    >
                      {n.label}
                    </Link>
                  );
                }
                const isExpanded = mobileOpen === n.mega;
                return (
                  <div key={n.to} className="rounded-xl border border-transparent data-[open=true]:border-border data-[open=true]:bg-secondary/40" data-open={isExpanded}>
                    <button
                      onClick={() => setMobileOpen(isExpanded ? null : n.mega)}
                      className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-sm font-medium hover:bg-accent"
                    >
                      <span>{n.label}</span>
                      <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform", isExpanded && "rotate-180")} />
                    </button>
                    {isExpanded && <MobileMega mega={n.mega} onNavigate={() => setOpen(false)} />}
                  </div>
                );
              })}
              <div className="mt-3 grid gap-2">
                <Button variant="outline" className="border-primary/30 text-primary" asChild>
                  <a href={PHONE_TEL} onClick={() => setOpen(false)}>
                    <Phone className="mr-1.5 h-3.5 w-3.5" />
                    Call Now
                  </a>
                </Button>
                <Button className="bg-emerald-gradient text-emerald-foreground" onClick={requestAudit}>
                  Get Free Billing Audit
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function MegaShell({
  children,
  className,
  onEnter,
  onLeave,
}: {
  children: ReactNode;
  className?: string;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      className={cn("absolute top-full pt-3 z-50 animate-in fade-in-0 zoom-in-95 duration-150", className)}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="overflow-hidden rounded-2xl border border-border/80 bg-background shadow-elegant ring-1 ring-black/5 dark:ring-white/10">
        {children}
      </div>
    </div>
  );
}

function MegaPanel({
  mega,
  onEnter,
  onLeave,
  onNavigate,
  onAudit,
}: {
  mega: MegaKey;
  onEnter: () => void;
  onLeave: () => void;
  onNavigate: () => void;
  onAudit: () => void;
}) {
  if (mega === "about") {
    return (
      <MegaShell className="left-0 w-[380px]" onEnter={onEnter} onLeave={onLeave}>
        <div className="p-2">
          <div className="px-3 pt-3 pb-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald">Company</p>
            <p className="text-sm font-semibold mt-0.5">About American Billing Solutions</p>
          </div>
          <div className="grid gap-0.5 p-1">
            {aboutLinks.map((l) => {
              const meta = aboutMeta[l.label];
              const Icon = meta?.icon ?? Building2;
              return (
                <IconRow
                  key={l.label}
                  href={l.href}
                  icon={Icon}
                  label={l.label}
                  desc={meta?.desc}
                  onNavigate={onNavigate}
                />
              );
            })}
          </div>
        </div>
      </MegaShell>
    );
  }

  if (mega === "services") {
    return (
      <MegaShell className="left-1/2 -translate-x-1/2 w-[min(94vw,860px)]" onEnter={onEnter} onLeave={onLeave}>
        <div className="grid lg:grid-cols-[1fr_240px]">
          <div className="p-5">
            <PanelTop
              eyebrow="Our Services"
              title="Complete revenue cycle, end-to-end"
              viewAll={{ href: "/services", label: "View all services" }}
              onNavigate={onNavigate}
            />
            <div className="mt-4 grid sm:grid-cols-2 gap-1 max-h-[58vh] overflow-y-auto pr-1">
              {serviceLinks.map((s) => {
                const meta = serviceMeta[s.label];
                const Icon = meta?.icon ?? FileText;
                return (
                  <IconRow
                    key={s.label}
                    href={s.href}
                    icon={Icon}
                    label={s.label}
                    desc={meta?.desc}
                    onNavigate={onNavigate}
                    compact
                  />
                );
              })}
            </div>
          </div>
          <FeatureRail
            title="Free billing audit"
            body="We’ll review your claims, denials, and AR — then show where revenue is leaking."
            cta="Request free audit"
            onCta={onAudit}
            href="/services"
            linkLabel="Explore services"
            onNavigate={onNavigate}
          />
        </div>
      </MegaShell>
    );
  }

  if (mega === "specialties") {
    return (
      <MegaShell className="left-1/2 -translate-x-1/2 w-[min(96vw,980px)]" onEnter={onEnter} onLeave={onLeave}>
        <div className="grid lg:grid-cols-[1fr_220px]">
          <div className="p-5">
            <PanelTop
              eyebrow="Specialty Billing"
              title="Teams matched to your specialty"
              viewAll={{ href: "/specialties", label: "All specialties" }}
              onNavigate={onNavigate}
            />
            <div className="mt-4 grid md:grid-cols-2 gap-6 max-h-[62vh] overflow-y-auto pr-1">
              {specialtyGroups.map((group) => (
                <div key={group.heading}>
                  <div className="flex items-center gap-2 mb-2.5 px-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      {group.heading}
                    </span>
                  </div>
                  <div className="grid gap-0.5">
                    {group.links.map((l) => {
                      const Icon = specialtyIcons[l.label] ?? Stethoscope;
                      return (
                        <IconRow
                          key={l.label}
                          href={l.href}
                          icon={Icon}
                          label={l.label}
                          onNavigate={onNavigate}
                          compact
                          tone="emerald"
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <FeatureRail
            title="Don’t see your specialty?"
            body="We support 50+ specialties. Tell us yours and we’ll match a dedicated billing team."
            cta="Talk to an expert"
            onCta={onAudit}
            href="/specialties"
            linkLabel="Browse specialties"
            onNavigate={onNavigate}
          />
        </div>
      </MegaShell>
    );
  }

  if (mega === "resources") {
    return (
      <MegaShell className="left-1/2 -translate-x-1/2 w-[min(94vw,780px)]" onEnter={onEnter} onLeave={onLeave}>
        <div className="p-5">
          <PanelTop
            eyebrow="Knowledge Hub"
            title="Codes, guides & billing resources"
            viewAll={{ href: "/resources", label: "All resources" }}
            onNavigate={onNavigate}
          />
          <div className="mt-4 grid sm:grid-cols-2 gap-1">
            {resourceLinks.map((r) => {
              const meta = resourceMeta[r.label];
              const Icon = meta?.icon ?? BookOpen;
              return (
                <IconRow
                  key={r.label}
                  href={r.href}
                  icon={Icon}
                  label={r.label}
                  desc={meta?.desc}
                  onNavigate={onNavigate}
                  tone="emerald"
                />
              );
            })}
          </div>
        </div>
      </MegaShell>
    );
  }

  if (mega === "locations") {
    return (
      <MegaShell className="left-0 w-[340px]" onEnter={onEnter} onLeave={onLeave}>
        <div className="p-2">
          <div className="px-3 pt-3 pb-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald">Locations</p>
            <p className="text-sm font-semibold mt-0.5">Medical billing by state</p>
          </div>
          <div className="grid grid-cols-2 gap-0.5 p-1">
            {locationLinks.map((l) => {
              const Icon = locationMeta[l.label] ?? MapPin;
              return (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={onNavigate}
                  className="group flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-foreground/85 hover:bg-accent hover:text-primary transition-colors"
                >
                  <span className="h-7 w-7 rounded-lg bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  {l.label}
                </Link>
              );
            })}
          </div>
          <div className="px-3 pb-3 pt-1">
            <Link
              href="/locations"
              onClick={onNavigate}
              className="text-xs font-semibold text-primary inline-flex items-center gap-1 hover:underline"
            >
              View all states <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </MegaShell>
    );
  }

  return (
    <MegaShell className="left-0 w-[400px]" onEnter={onEnter} onLeave={onLeave}>
      <div className="p-2">
        <div className="px-3 pt-3 pb-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald">Industries</p>
          <p className="text-sm font-semibold mt-0.5">Solutions by practice type</p>
        </div>
        <div className="grid gap-0.5 p-1">
          {industryLinks.map((l) => {
            const meta = industryMeta[l.label];
            const Icon = meta?.icon ?? Building;
            return (
              <IconRow
                key={l.label}
                href={l.href}
                icon={Icon}
                label={l.label}
                desc={meta?.desc}
                onNavigate={onNavigate}
              />
            );
          })}
        </div>
      </div>
    </MegaShell>
  );
}

function PanelTop({
  eyebrow,
  title,
  viewAll,
  onNavigate,
}: {
  eyebrow: string;
  title: string;
  viewAll: { href: string; label: string };
  onNavigate: () => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald">{eyebrow}</p>
        <p className="text-base font-semibold mt-0.5 font-display">{title}</p>
      </div>
      <Link
        href={viewAll.href}
        onClick={onNavigate}
        className="shrink-0 text-xs font-semibold text-primary inline-flex items-center gap-1 rounded-full bg-primary/5 hover:bg-primary/10 px-3 py-1.5 transition-colors"
      >
        {viewAll.label} <ChevronRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}

function IconRow({
  href,
  icon: Icon,
  label,
  desc,
  onNavigate,
  compact,
  tone = "primary",
}: {
  href: string;
  icon: LucideIcon;
  label: string;
  desc?: string;
  onNavigate: () => void;
  compact?: boolean;
  tone?: "primary" | "emerald";
}) {
  const iconTone =
    tone === "emerald"
      ? "bg-emerald/10 text-emerald group-hover:bg-emerald group-hover:text-emerald-foreground"
      : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground";

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        "group flex gap-3 rounded-xl transition-all hover:bg-accent",
        compact ? "p-2.5" : "p-3",
      )}
    >
      <span className={cn("h-9 w-9 shrink-0 rounded-xl grid place-items-center transition-colors", iconTone)}>
        <Icon className="h-4 w-4" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">
          {label}
        </span>
        {desc && <span className="block text-[11px] text-muted-foreground mt-0.5 leading-snug line-clamp-1">{desc}</span>}
      </span>
    </Link>
  );
}

function FeatureRail({
  title,
  body,
  cta,
  onCta,
  href,
  linkLabel,
  onNavigate,
}: {
  title: string;
  body: string;
  cta: string;
  onCta: () => void;
  href: string;
  linkLabel: string;
  onNavigate: () => void;
}) {
  return (
    <div className="relative bg-primary text-primary-foreground p-5 flex flex-col justify-between gap-6 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative">
        <div className="h-10 w-10 rounded-xl bg-emerald/25 grid place-items-center mb-4">
          <Sparkles className="h-5 w-5 text-emerald" />
        </div>
        <h3 className="text-lg font-semibold font-display leading-snug">{title}</h3>
        <p className="mt-2 text-sm text-white/75 leading-relaxed">{body}</p>
      </div>
      <div className="relative grid gap-2">
        <Button className="bg-emerald-gradient text-emerald-foreground hover:opacity-90 w-full" onClick={onCta}>
          {cta}
        </Button>
        <Link
          href={href}
          onClick={onNavigate}
          className="text-center text-xs font-medium text-white/80 hover:text-white inline-flex items-center justify-center gap-1"
        >
          {linkLabel} <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}

function MobileMega({ mega, onNavigate }: { mega: MegaKey; onNavigate: () => void }) {
  if (mega === "specialties") {
    return (
      <div className="px-2 pb-3 grid gap-3">
        <Link href="/specialties" onClick={onNavigate} className="px-2 py-1.5 text-xs font-semibold text-primary">
          All specialties →
        </Link>
        {specialtyGroups.map((group) => (
          <div key={group.heading} className="rounded-xl bg-background border border-border/70 p-2">
            <div className="px-2 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              {group.heading}
            </div>
            {group.links.map((l) => (
              <MobileLink key={l.label} link={l} onNavigate={onNavigate} />
            ))}
          </div>
        ))}
      </div>
    );
  }

  const map: Record<
    Exclude<MegaKey, "specialties">,
    { href: string; label: string; links: NavLink[] }
  > = {
    about: { href: "/about", label: "About overview →", links: aboutLinks },
    services: { href: "/services", label: "View all services →", links: serviceLinks },
    resources: { href: "/resources", label: "All resources →", links: resourceLinks },
    locations: { href: "/locations", label: "All states →", links: locationLinks },
    industries: { href: "/industries", label: "All industries →", links: industryLinks },
  };

  const data = map[mega];
  return (
    <div className="px-2 pb-3 grid gap-0.5">
      <Link href={data.href} onClick={onNavigate} className="px-3 py-2 rounded-lg text-xs font-semibold text-primary">
        {data.label}
      </Link>
      {data.links.map((l) => (
        <MobileLink key={l.label} link={l} onNavigate={onNavigate} />
      ))}
    </div>
  );
}

function MobileLink({ link, onNavigate }: { link: NavLink; onNavigate: () => void }) {
  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      className="px-3 py-2.5 rounded-lg text-sm text-foreground/85 hover:bg-accent hover:text-primary"
    >
      {link.label}
    </Link>
  );
}
