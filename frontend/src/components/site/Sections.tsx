"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import {
  ShieldCheck, BadgeCheck, Clock, HeadphonesIcon, Users, TrendingUp,
  MessageCircle, FileCheck2, ChevronRight, Star, ArrowRight, Award,
  Zap, LineChart, LockKeyhole, Cloud, Database, MonitorSmartphone, Cpu,
  ArrowUpRight, CheckCircle2, Sparkles,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { services, specialties, process, stats, testimonials, faqs } from "./data";
import { CONTACT_EMAIL, emailUs } from "@/lib/contact";

function serviceAnchorId(title: string) {
  const map: Record<string, string> = {
    "Medical Billing": "medical-billing",
    "Revenue Cycle Management": "rcm",
    "Medical Coding": "medical-coding",
    "Insurance Verification": "eligibility",
    "Prior Authorization": "prior-authorization",
    Credentialing: "credentialing",
    "AR Recovery": "ar-recovery",
    "Denial Management": "denial-management",
    "Payment Posting": "payment-posting",
    "Charge Entry": "charge-entry",
    "Eligibility Verification": "eligibility",
    "Virtual Medical Assistant": "vma",
    "Patient Billing": "patient-billing",
    "Practice Management": "practice-management",
  };
  return map[title] ?? title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function specialtyAnchorId(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+billing$/i, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
      <BackgroundGrid />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32 grid lg:grid-cols-[1.15fr_1fr] gap-14 items-center">
        <div>
          <Reveal>
            <Badge className="bg-white/10 border border-white/20 text-white hover:bg-white/15 backdrop-blur mb-6">
              <Sparkles className="h-3.5 w-3.5 mr-1.5 text-emerald" />
              Trusted by 500+ US healthcare providers
            </Badge>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Maximize Your Revenue with{" "}
              <span className="text-emerald">Professional</span> Medical Billing
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Reduce claim denials, accelerate reimbursements, and recover aged AR — so your
              physicians can stop chasing payers and get back to patient care.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="bg-emerald-gradient text-emerald-foreground hover:opacity-90 shadow-glow h-12 px-6"
                onClick={() => {
                  emailUs("Free Consultation Request", "Hi ABS team,\n\nI would like a free consultation.\n\nName:\nPractice:\nPhone:\n");
                  toast.success("Opening email…", { description: `Send to ${CONTACT_EMAIL}` });
                }}
              >
                Request Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-6 bg-white/5 border-white/25 text-white hover:bg-white/15"
                onClick={() => {
                  emailUs("Discovery Call Request", "Hi ABS team,\n\nI would like to schedule a discovery call.\n\nName:\nPractice:\nPhone:\nPreferred time:\n");
                  toast.success("Opening email…", { description: `Send to ${CONTACT_EMAIL}` });
                }}
              >
                Schedule Discovery Call
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: ShieldCheck, label: "HIPAA Ready" },
                { icon: BadgeCheck, label: "98% Acceptance" },
                { icon: Award, label: "Certified Experts" },
                { icon: Clock, label: "24/7 Support" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-white/85">
                  <Icon className="h-4 w-4 text-emerald" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} y={40}>
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}

function BackgroundGrid() {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at top, black 40%, transparent 75%)",
        }}
      />
      <motion.div
        aria-hidden
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-emerald/30 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary-glow/40 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-white/20 bg-white/5">
        <Image
          src="/hero-doctors.jpg"
          alt="Team of certified healthcare providers partnering with American Billing Solutions"
          width={1200}
          height={1408}
          className="w-full h-[520px] lg:h-[600px] object-cover"
          priority
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
        <div className="absolute top-5 left-5 flex items-center gap-2 rounded-full bg-white/95 text-foreground px-3 py-1.5 text-xs font-semibold shadow-card-soft">
          <span className="h-2 w-2 rounded-full bg-emerald animate-pulse" />
          Trusted by 500+ US practices
        </div>
      </div>

      <motion.div
        className="absolute -top-6 -right-4 sm:-right-8 glass-card rounded-2xl p-4 shadow-elegant bg-white/95 text-foreground w-60 hidden sm:block"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
      >
        <div className="flex items-center justify-between">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Clean Claims</div>
          <Badge className="bg-emerald text-emerald-foreground text-[10px]">+34.2%</Badge>
        </div>
        <div className="text-2xl font-bold mt-1">98.6%</div>
        <div className="mt-2 h-10 rounded-md bg-emerald/10 relative overflow-hidden">
          <svg viewBox="0 0 200 40" className="w-full h-full">
            <motion.path
              d="M0,30 C30,25 50,15 90,18 C130,21 160,10 200,6"
              fill="none" stroke="oklch(0.72 0.16 165)" strokeWidth="2.5"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4 }}
            />
          </svg>
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-8 -left-4 sm:-left-8 glass-card rounded-2xl p-4 shadow-elegant bg-white/95 text-foreground w-64 hidden sm:block"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
      >
        <div className="flex items-center gap-2 text-xs text-emerald font-medium">
          <TrendingUp className="h-4 w-4" /> Denial recovered
        </div>
        <div className="text-sm font-semibold mt-1">Aetna · $8,412.00</div>
        <div className="text-xs text-muted-foreground">Appealed and paid in 3 days</div>
      </motion.div>

      <motion.div
        className="absolute top-1/2 -left-6 hidden lg:flex items-center gap-2 rounded-2xl bg-white/95 text-foreground px-3 py-2 shadow-elegant"
        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}
      >
        <ShieldCheck className="h-4 w-4 text-primary" />
        <div className="text-xs font-semibold">HIPAA · SOC 2</div>
      </motion.div>
    </div>
  );
}

/* ---------------- About ---------------- */
export function AboutSection() {
  return (
    <section className="py-24" id="about">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1fr_1.1fr] gap-14 items-start">
        <Reveal>
          <Badge variant="outline" className="border-primary/30 text-primary mb-4">About Meridian</Badge>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Built by clinicians. <span className="text-gradient-primary">Engineered for revenue.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Meridian RCM was founded by former practice administrators, coders and healthcare CFOs
            who were tired of watching great physicians get buried in paperwork. Today we manage the
            complete revenue cycle for over 500 US practices — from solo primary care to
            multi-specialty groups and ambulatory surgery centers.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <MiniCard title="Our Mission" body="Free healthcare providers from administrative burden so they can focus on patients." />
            <MiniCard title="Our Vision" body="Every US practice operating at peak financial health with radical transparency." />
            <MiniCard title="Core Values" body="Integrity. Precision. Partnership. Compassion. Continuous improvement." />
            <MiniCard title="Experience" body="15+ years serving physicians across all 50 states and 30+ specialties." />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-4">
            {[
              { icon: Users, title: "Healthcare Industry Experience", desc: "Team blends former CFOs, AAPC-certified coders and payer alumni." },
              { icon: BadgeCheck, title: "Certified Team", desc: "AAPC, AHIMA, HFMA and Six Sigma credentialed across every function." },
              { icon: FileCheck2, title: "Transparent Process", desc: "Real-time dashboards, monthly reviews, and no black-box billing." },
              { icon: TrendingUp, title: "Revenue Growth", desc: "Average 20–35% lift in net collections within the first 90 days." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.06}>
                <Card className="p-5 hover:shadow-elegant hover:-translate-y-0.5 transition-all border-border/60 rounded-2xl group">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 grid place-items-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">{title}</div>
                      <div className="text-sm text-muted-foreground mt-1">{desc}</div>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MiniCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border/60 p-4 bg-card hover:border-primary/40 transition-colors">
      <div className="text-sm font-semibold text-primary">{title}</div>
      <div className="text-sm text-muted-foreground mt-1">{body}</div>
    </div>
  );
}

/* ---------------- Services ---------------- */
export function ServicesSection({ compact = false }: { compact?: boolean }) {
  const items = compact ? services.slice(0, 8) : services;
  return (
    <section className="py-24 bg-secondary/50" id="services">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-14">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">A complete revenue cycle, delivered end-to-end</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Fourteen tightly integrated services that eliminate revenue leakage
              at every stage of the patient financial journey.
            </p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, title, desc }, i) => {
            const serviceId = serviceAnchorId(title);
            return (
            <Reveal key={title} delay={(i % 8) * 0.04}>
              <Card id={serviceId} className="group p-6 h-full rounded-2xl border-border/60 hover:border-primary/40 hover:shadow-elegant transition-all hover:-translate-y-1 bg-card scroll-mt-28">
                <div className="h-11 w-11 rounded-xl bg-primary-gradient grid place-items-center shadow-card-soft group-hover:shadow-glow transition-shadow">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="mt-4 font-semibold text-lg">{title}</div>
                <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</div>
                <button
                  onClick={() => {
                    emailUs(`Service Inquiry — ${title}`, `Hi ABS team,\n\nI'm interested in: ${title}\n\nName:\nPractice:\nPhone:\n`);
                    toast.success("Opening email…", { description: `Send to ${CONTACT_EMAIL}` });
                  }}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
                >
                  Learn more <ChevronRight className="h-4 w-4" />
                </button>
              </Card>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Specialties ---------------- */
export function SpecialtiesSection() {
  return (
    <section className="py-24" id="specialties">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <Reveal>
              <Badge variant="outline" className="border-primary/30 text-primary mb-4">Specialties</Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Specialty-matched teams across 30+ disciplines</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Every account is staffed with coders and AR analysts who live inside your specialty.
              </p>
            </Reveal>
          </div>
          <Link href="/specialties"><Button variant="outline" className="border-primary/30 text-primary">View all specialties <ArrowUpRight className="ml-1 h-4 w-4" /></Button></Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {specialties.map(({ icon: Icon, name }, i) => (
            <Reveal key={name} delay={(i % 6) * 0.04}>
              <div
                id={specialtyAnchorId(name)}
                className="group cursor-pointer rounded-2xl border border-border/60 p-4 bg-card hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-elegant scroll-mt-28"
              >
                <Icon className="h-5 w-5 text-primary group-hover:text-emerald transition-colors" />
                <div className="mt-3 font-medium text-sm">{name}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
export function ProcessSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden" id="process">
      <BackgroundGrid />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-14">
          <Reveal>
            <Badge className="bg-white/10 border border-white/20 text-white mb-4">Work Process</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">From patient visit to zero balance in eight precise steps</h2>
            <p className="mt-4 text-lg text-white/80">A repeatable, audited workflow that turns every encounter into revenue.</p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {process.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.06}>
              <div className="glass-card rounded-2xl p-5 bg-white/10 border-white/15 h-full hover:bg-white/15 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-emerald">{s.step}</div>
                  <ArrowRight className="h-4 w-4 text-white/50" />
                </div>
                <div className="mt-3 font-semibold text-lg">{s.title}</div>
                <div className="mt-2 text-sm text-white/75 leading-relaxed">{s.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Choose Us ---------------- */
export function WhyUsSection() {
  const features = [
    { icon: ShieldCheck, title: "HIPAA Compliance", desc: "SOC 2 Type II, encryption in transit and at rest." },
    { icon: BadgeCheck, title: "Certified Billing Specialists", desc: "AAPC, AHIMA and HFMA credentialed." },
    { icon: Users, title: "Dedicated Account Manager", desc: "One US-based lead across every function." },
    { icon: HeadphonesIcon, title: "24/7 Support", desc: "Named humans, not tickets. Always reachable." },
    { icon: Zap, title: "Fast Turnaround", desc: "24-hour charge entry, 48-hour claim submission." },
    { icon: LineChart, title: "Advanced Reporting", desc: "Real-time KPI dashboards you actually understand." },
    { icon: TrendingUp, title: "Reduced Claim Denials", desc: "Root-cause loops keep denials permanently down." },
    { icon: Award, title: "Higher Revenue", desc: "20–35% average net collections lift in 90 days." },
    { icon: MessageCircle, title: "Transparent Communication", desc: "Weekly reviews, monthly executive briefings." },
  ];
  return (
    <section className="py-24" id="why-choose-us">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-14">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">Why Choose Us</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Nine reasons practices switch to Meridian and never look back</h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={(i % 6) * 0.05}>
              <Card className="p-6 rounded-2xl border-border/60 h-full group hover:shadow-elegant hover:-translate-y-0.5 transition-all">
                <div className="h-11 w-11 rounded-xl bg-emerald/15 grid place-items-center group-hover:bg-emerald-gradient transition-all">
                  <Icon className="h-5 w-5 text-emerald group-hover:text-emerald-foreground transition-colors" />
                </div>
                <div className="mt-4 font-semibold text-lg">{title}</div>
                <div className="mt-1.5 text-sm text-muted-foreground">{desc}</div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stats ---------------- */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toLocaleString());
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration: 1.8, ease: [0.22, 1, 0.36, 1] });
    const un = rounded.on("change", (v) => setDisplay(v));
    return () => { controls.stop(); un(); };
  }, [inView, to, mv, rounded]);
  return <span ref={ref}>{display}{suffix}</span>;
}

export function StatsSection() {
  return (
    <section className="py-20 bg-secondary/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient-primary font-display">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm text-muted-foreground font-medium">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Technology ---------------- */
export function TechnologySection() {
  const tech = [
    { icon: Cpu, title: "Advanced Billing Software", desc: "Proprietary claim scrubber with 400+ payer-specific edits." },
    { icon: Database, title: "EMR / EHR Integration", desc: "40+ integrations including Epic, Athena, Cerner, eCW, Kareo." },
    { icon: MonitorSmartphone, title: "Practice Management", desc: "Unified scheduling, eligibility and workflow orchestration." },
    { icon: Cloud, title: "Secure Cloud Infrastructure", desc: "AWS GovCloud regions with active-active failover." },
    { icon: LineChart, title: "Real-Time Reporting", desc: "Live dashboards with drill-down to the claim level." },
    { icon: LockKeyhole, title: "HIPAA Secure Servers", desc: "AES-256 encryption, MFA, and quarterly penetration tests." },
    { icon: Sparkles, title: "AI Analytics Dashboard", desc: "Predictive denial scoring and revenue leakage detection." },
  ];
  return (
    <section className="py-24" id="technology">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-14">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">Technology</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">The platform behind our 98.6% first-pass rate</h2>
            <p className="mt-4 text-lg text-muted-foreground">Enterprise-grade infrastructure and AI-driven claim intelligence, built for HIPAA from day one.</p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tech.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={(i % 6) * 0.05}>
              <Card className="p-6 rounded-2xl border-border/60 h-full hover:border-primary/40 hover:shadow-elegant transition-all group">
                <div className="flex items-center justify-between">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 grid place-items-center group-hover:bg-primary-gradient transition-all">
                    <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <Badge variant="outline" className="text-[10px] border-emerald/40 text-emerald">Live</Badge>
                </div>
                <div className="mt-4 font-semibold text-lg">{title}</div>
                <div className="mt-1.5 text-sm text-muted-foreground">{desc}</div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
export function TestimonialsSection() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="py-24 bg-secondary/50">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Physicians and administrators who chose us</h2>
          </Reveal>
        </div>

        <div className="relative">
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="p-10 rounded-3xl bg-card border-border/60 shadow-elegant">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[i].rating }).map((_, k) => (
                  <Star key={k} className="h-5 w-5 fill-emerald text-emerald" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl leading-relaxed font-display">
                "{testimonials[i].quote}"
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-primary-gradient grid place-items-center text-primary-foreground font-bold text-lg">
                  {testimonials[i].name.split(" ")[1]?.[0]}{testimonials[i].name.split(" ")[2]?.[0]}
                </div>
                <div>
                  <div className="font-semibold">{testimonials[i].name}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[i].clinic}</div>
                </div>
              </div>
            </Card>
          </motion.div>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Testimonial ${k + 1}`}
                className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-2 bg-border"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Case Studies ---------------- */
export function CaseStudiesSection() {
  const cases = [
    { practice: "12-provider Cardiology group", before: "$680K", after: "$912K", metric: "Monthly collections", tag: "Northeast" },
    { practice: "Multi-site Orthopedic practice", before: "22%", after: "6%", metric: "Denial rate", tag: "West Coast" },
    { practice: "Solo Family Medicine practice", before: "58 days", after: "24 days", metric: "Days in AR", tag: "Midwest" },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-14">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">Case Studies</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Real practices. Real recovered revenue.</h2>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <Reveal key={c.practice} delay={i * 0.08}>
              <Card className="p-8 rounded-2xl border-border/60 h-full hover:shadow-elegant transition-all group overflow-hidden relative">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald/10 group-hover:bg-emerald/20 transition-colors" />
                <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">{c.tag}</Badge>
                <div className="mt-4 font-semibold text-lg">{c.practice}</div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Before</div>
                    <div className="text-2xl font-bold text-destructive mt-1">{c.before}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">After</div>
                    <div className="text-2xl font-bold text-emerald mt-1">{c.after}</div>
                  </div>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">{c.metric}</div>
                <button
                  onClick={() => {
                    emailUs(`Case Study Request — ${c.practice}`, `Hi ABS team,\n\nPlease send the case study for: ${c.practice}\n\nName:\nEmail:\nPractice:\n`);
                    toast.success("Opening email…", { description: `Send to ${CONTACT_EMAIL}` });
                  }}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
                >
                  Read the story <ChevronRight className="h-4 w-4" />
                </button>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
export function FAQSection({ limit }: { limit?: number }) {
  const items = limit ? faqs.slice(0, limit) : faqs;
  return (
    <section className="py-24 bg-secondary/50" id="faq">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">FAQ</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Answers to the questions we hear every week</h2>
          </Reveal>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {items.map(([q, a], i) => (
            <AccordionItem key={i} value={`i-${i}`} className="border border-border/60 rounded-2xl bg-card px-5 shadow-card-soft data-[state=open]:shadow-elegant transition-shadow">
              <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">{q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
export function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-hero-gradient text-primary-foreground p-10 md:p-16 shadow-elegant">
          <BackgroundGrid />
          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Ready to increase your practice revenue?</h2>
              <p className="mt-4 text-lg text-white/85 max-w-2xl">
                Get a free 30-minute revenue audit. We'll benchmark your KPIs against your specialty
                and hand you a written opportunity report — no obligation.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button
                size="lg"
                className="bg-emerald-gradient text-emerald-foreground hover:opacity-90 h-12 px-6 shadow-glow"
                onClick={() => {
                  emailUs("Free Consultation Request", "Hi ABS team,\n\nI would like a free consultation.\n\nName:\nPractice:\nPhone:\n");
                  toast.success("Opening email…", { description: `Send to ${CONTACT_EMAIL}` });
                }}
              >
                Get Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-6 bg-white/5 border-white/25 text-white hover:bg-white/15"
                onClick={() => {
                  emailUs("Talk to an Expert", "Hi ABS team,\n\nI would like to speak with an expert.\n\nName:\nPractice:\nPhone:\n");
                  toast.success("Opening email…", { description: `Send to ${CONTACT_EMAIL}` });
                }}
              >
                Talk to an Expert
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
