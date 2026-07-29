"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Brain,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  LineChart,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "./Reveal";
import {
  rcmBenefits,
  rcmChecklist,
  rcmDenialTriggers,
  rcmFaqs,
  rcmGlance,
  rcmIndustries,
  rcmMentalHealth,
  rcmMistakes,
  rcmProcess,
  rcmServices,
  rcmSpecialties,
  rcmTech,
  rcmWhy,
  rcmWorkflow,
} from "./rcm-content";

export function RevenueCycleManagementPage() {
  return (
    <>
      <Hero />
      <WhatIsSection />
      <WhyMattersSection />
      <SoftCta
        headline="Curious What Your Revenue Cycle Is Actually Costing You?"
        copy="A free RCM audit gives you a clear look at denial patterns, coding accuracy, and outstanding A/R — no obligation."
        cta="Request Your Free RCM Audit"
      />
      <ProcessSection />
      <ServicesSection />
      <SoftCta
        headline="Get a Custom RCM Plan for Your Practice"
        copy="Every practice's revenue cycle looks different. Let's talk through what yours actually needs."
        cta="Get a Custom Quote"
        tone="primary"
      />
      <MentalHealthSection />
      <SoftCta
        headline="Billing for Mental Health Practices, Done Right"
        copy="If behavioral health, psychiatry, or therapy billing is part of your practice, talk to a specialist who works in this specialty every day."
        cta="Schedule a Consultation"
        tone="hero"
      />
      <BenefitsSection />
      <WhySection />
      <IndustriesSection />
      <SpecialtiesSection />
      <WorkflowSection />
      <TechSection />
      <MistakesSection />
      <CaseStudyFramework />
      <SoftCta
        headline="Still Weighing Your Options?"
        copy="Get a straightforward answer about what RCM outsourcing would actually look like for your practice."
        cta="Request Your Free RCM Audit"
        tone="hero"
      />
      <FaqSection />
    </>
  );
}

function SoftCta({
  headline,
  copy,
  cta,
  tone = "soft",
}: {
  headline: string;
  copy: string;
  cta: string;
  tone?: "soft" | "primary" | "hero";
}) {
  const wrap =
    tone === "hero"
      ? "relative overflow-hidden rounded-3xl bg-hero-gradient text-primary-foreground p-8 md:p-12 shadow-elegant"
      : tone === "primary"
        ? "rounded-3xl bg-primary text-primary-foreground p-8 md:p-10"
        : "rounded-3xl border border-border/60 bg-secondary/50 p-8 md:p-10";
  const muted = tone === "soft" ? "text-muted-foreground" : "text-white/80";

  return (
    <section className="py-10 md:py-12">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className={wrap}>
            {tone === "hero" && <BgGrid />}
            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-bold font-display leading-tight">{headline}</h2>
                <p className={`mt-3 leading-relaxed ${muted}`}>{copy}</p>
              </div>
              <Button asChild size="lg" className="bg-emerald-gradient text-emerald-foreground hover:opacity-90 shrink-0 h-12 shadow-glow">
                <Link href="/contact">
                  {cta} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Hero() {
  const badges = [
    "HIPAA-Compliant Processes",
    "Certified Coding Team",
    "Mental Health & Behavioral Health Specialists",
    "Dedicated Account Management",
    "Transparent, Real-Time Reporting",
  ];

  return (
    <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
      <BgGrid />
      <div className="relative mx-auto max-w-7xl px-6 pt-8 pb-16 lg:pb-24">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/70">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden>
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li className="text-white font-medium">Revenue Cycle Management</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-14 items-center">
          <div>
            <Reveal>
              <p className="text-sm md:text-base font-medium text-emerald/95 mb-5 max-w-xl leading-relaxed">
                Full-Service Revenue Cycle Management for U.S. Healthcare Providers
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-4xl md:text-5xl lg:text-[3.1rem] font-bold leading-[1.08] tracking-tight font-display">
                Revenue Cycle Management Services That Turn Care Into Collected Revenue
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-base md:text-lg text-white/80 max-w-2xl leading-relaxed">
                Every unpaid claim, coding error, and delayed reimbursement represents money your practice has
                already earned but hasn&apos;t collected. American Billing Solutions manages your entire revenue
                cycle — from the moment a patient is scheduled to the moment their balance is fully resolved —
                so your practice runs on predictable cash flow instead of chasing payments. We work with
                physicians, specialty practices, and healthcare organizations nationwide, with particular depth
                in mental health, behavioral health, and psychiatry billing, where documentation and payer rules
                are especially complex.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald-gradient text-emerald-foreground hover:opacity-90 shadow-glow h-12 px-6"
                >
                  <Link href="/contact">
                    Request Your Free RCM Audit <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 px-6 bg-white/5 border-white/25 text-white hover:bg-white/15"
                >
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="mt-10 grid sm:grid-cols-2 gap-3">
                {badges.map((b) => (
                  <div key={b} className="flex items-center gap-2.5 text-sm text-white/90">
                    <CheckCircle2 className="h-4 w-4 text-emerald shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} y={28}>
            <div className="relative">
              <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-sm p-6 md:p-8 shadow-elegant">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-emerald/20 text-emerald grid place-items-center">
                    <LineChart className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Full Revenue Cycle</div>
                    <div className="text-sm text-white/70">Scheduling → final payment</div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Eligibility & coding before submission",
                    "Clean claim scrubbing & electronic filing",
                    "Denial resolution & A/R recovery",
                    "Real-time reporting & optimization",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/90">
                      <CheckCircle2 className="h-4 w-4 text-emerald mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-white/15 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/55">Focus</div>
                    <div className="mt-1 font-semibold text-sm">Predictable cash flow</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/55">Specialty depth</div>
                    <div className="mt-1 font-semibold text-sm">Mental & behavioral health</div>
                  </div>
                </div>
              </div>
              <motion.div
                className="absolute -bottom-4 -left-3 sm:-left-5 rounded-2xl bg-white text-foreground px-4 py-3 shadow-elegant hidden sm:flex items-center gap-2"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold">HIPAA-aligned · Signed BAAs</span>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhatIsSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-[1fr_0.95fr] gap-12 lg:gap-16 items-start">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Overview
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              What Is Revenue Cycle Management?
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Revenue cycle management (RCM)</strong> is the process
              healthcare providers use to track and manage the financial lifecycle of a patient encounter —
              from initial scheduling and insurance verification through coding, billing, claim submission,
              payment collection, and final account resolution.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              In plain terms: RCM is everything that happens, financially, between &quot;a patient books an
              appointment&quot; and &quot;the provider has been paid in full for that visit.&quot; It includes
              clinical documentation, medical coding, claims processing, denial resolution, and patient billing
              — treated not as separate, disconnected tasks, but as one continuous financial process.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Medical billing is often used interchangeably with RCM, but it&apos;s more accurate to think of
              billing as one component within the larger revenue cycle. Billing focuses on claim creation and
              submission; RCM encompasses the entire financial journey, including the front-end steps
              (scheduling, eligibility verification) and back-end steps (A/R follow-up, reporting, compliance)
              that determine whether a claim is even submitted correctly in the first place.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-emerald/25 bg-emerald/5 p-6 md:p-8">
              <div className="text-xs font-semibold uppercase tracking-widest text-emerald mb-3">
                Quick definition
              </div>
              <p className="text-lg font-medium leading-relaxed text-foreground">
                Revenue cycle management is the administrative and clinical process, used by healthcare
                organizations, of tracking patient revenue from initial appointment scheduling through final
                payment.
              </p>
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                Explore how{" "}
                <Link href="/medical-billing-services" className="text-primary font-semibold hover:underline">
                  medical billing services
                </Link>{" "}
                fit inside the broader RCM process.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhyMattersSection() {
  return (
    <section className="py-20 md:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Why It Matters
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              Why Revenue Cycle Management Matters
            </h2>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              title: "Financial Impact",
              body: "A practice's revenue cycle directly determines its financial health, independent of how much clinical care is being delivered. A provider can have a full patient schedule and still struggle financially if claims are denied, underpaid, or left unresolved. Effective RCM closes that gap between care delivered and revenue collected.",
              extra:
                "Industry bodies such as CMS and the AMA regularly publish guidance on claims processing, coding accuracy, and payer compliance — reflecting how much administrative complexity now sits between a clinical encounter and final payment.",
            },
            {
              title: "Operational Impact",
              body: "Poor revenue cycle management doesn't just cost money — it consumes staff time. Front-office and billing staff spend hours on hold with payers, resubmitting claims, and manually tracking down documentation, time that could otherwise go toward patient-facing work.",
              extra:
                "A well-managed revenue cycle reduces this operational drag by catching errors before they become denials, rather than cleaning them up after the fact.",
            },
            {
              title: "Patient Experience",
              body: "Revenue cycle management also affects patients directly. Confusing billing statements, unexpected charges, and delayed insurance processing all contribute to patient frustration and can affect a practice's reputation.",
              extra:
                "Clear, accurate, and timely billing — supported by proper eligibility verification before the visit — helps patients understand their financial responsibility upfront, reducing disputes and improving the overall experience.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <Card className="p-6 h-full rounded-2xl border-border/60">
                <h3 className="text-xl font-semibold font-display">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.extra}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="mt-8 rounded-2xl border border-primary/20 bg-card p-6 md:p-8 flex gap-4">
            <Brain className="h-6 w-6 text-primary shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold">Why this matters for mental health practices</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Mental health and behavioral health providers face additional RCM complexity: session-based and
                time-based coding, frequent prior authorization requirements, and payer scrutiny around medical
                necessity documentation. A generic billing approach often underperforms in this specialty —
                which is why RCM expertise specific to{" "}
                <Link href="/specialties/mental-health-billing" className="text-primary font-medium hover:underline">
                  mental health billing
                </Link>{" "}
                matters more here than in many other fields.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="py-20 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <BgGrid />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge className="bg-white/10 border border-white/20 text-white mb-4">Process</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              The Complete Revenue Cycle Management Process
            </h2>
            <p className="mt-4 text-white/75 leading-relaxed">
              The revenue cycle is best understood as a connected sequence of stages, not a series of isolated
              tasks. Below is how each stage fits into the whole.
            </p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {rcmProcess.map((s, i) => (
            <Reveal key={s.step} delay={(i % 4) * 0.04}>
              <div className="rounded-2xl bg-white/10 border border-white/15 p-5 h-full hover:bg-white/15 transition-colors">
                <div className="text-2xl font-bold text-emerald">{s.step}</div>
                <h3 className="mt-3 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 rounded-2xl bg-white/10 border border-white/15 overflow-hidden">
            <div className="px-5 py-4 border-b border-white/10 font-semibold">RCM Process at a Glance</div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm">
                <thead>
                  <tr className="text-left text-white/70">
                    <th className="px-5 py-3 font-medium">Stage</th>
                    <th className="px-5 py-3 font-medium">Primary Goal</th>
                  </tr>
                </thead>
                <tbody>
                  {rcmGlance.map((row) => (
                    <tr key={row.stage} className="border-t border-white/10">
                      <td className="px-5 py-3 font-medium">{row.stage}</td>
                      <td className="px-5 py-3 text-white/75">{row.goal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              Our Revenue Cycle Management Services
            </h2>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {rcmServices.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.04}>
              <Card className="p-6 h-full rounded-2xl border-border/60 hover:border-primary/35 hover:shadow-elegant transition-all">
                {s.href ? (
                  <Link
                    href={s.href}
                    className="text-lg font-semibold hover:text-primary transition-colors inline-flex items-start gap-2"
                  >
                    {s.title}
                    <ArrowUpRight className="h-4 w-4 mt-1 shrink-0 opacity-60" />
                  </Link>
                ) : (
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                )}
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MentalHealthSection() {
  return (
    <section className="py-20 md:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Specialty Depth
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              Mental Health Revenue Cycle Management
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Mental health billing is one of the most operationally complex areas of healthcare RCM — and
              it&apos;s where American Billing Solutions has built particular depth of expertise.
            </p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rcmMentalHealth.map((item, i) => (
            <Reveal key={item.title} delay={(i % 6) * 0.04}>
              <Card className="p-6 h-full rounded-2xl border-border/60">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="mt-10 rounded-2xl border border-destructive/25 bg-destructive/5 p-6 md:p-8">
            <div className="flex items-center gap-2 font-semibold text-destructive">
              <AlertTriangle className="h-5 w-5" />
              Denial alert — common issues in mental health claims
            </div>
            <ul className="mt-4 space-y-2.5">
              {rcmDenialTriggers.map((t) => (
                <li key={t} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-destructive shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
              Understanding these patterns — and correcting for them proactively — is a core part of how we
              approach{" "}
              <Link href="/specialties/mental-health-billing" className="text-primary font-semibold hover:underline">
                mental health billing services
              </Link>{" "}
              for behavioral health, psychiatry, and therapy practices.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Benefits
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              Benefits of Outsourcing Revenue Cycle Management
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rcmBenefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 6) * 0.04}>
              <div className="rounded-2xl border border-border/60 bg-card p-6 h-full">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">{b.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  const icons = [ShieldCheck, ClipboardCheck, Sparkles, Stethoscope, LineChart, Users, LockKeyhole];
  return (
    <section className="py-20 md:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              Why Choose American Billing Solutions
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rcmWhy.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={item.title} delay={(i % 6) * 0.04}>
                <Card className="p-6 h-full rounded-2xl border-border/60">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary grid place-items-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-10">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Industries
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display leading-tight">Industries We Serve</h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {rcmIndustries.map((item, i) => (
            <Reveal key={item} delay={(i % 6) * 0.03}>
              <div className="rounded-xl border border-border/60 bg-card px-4 py-3.5 text-sm font-medium flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald shrink-0" />
                {item}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecialtiesSection() {
  return (
    <section className="py-20 md:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-10">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Specialties
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display leading-tight">Specialties We Support</h2>
          </Reveal>
        </div>
        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-border/60 bg-card shadow-card-soft">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left font-semibold px-5 py-4">Specialty</th>
                  <th className="text-left font-semibold px-5 py-4">Key RCM Consideration</th>
                </tr>
              </thead>
              <tbody>
                {rcmSpecialties.map((row, i) => (
                  <tr key={row.href} className={i % 2 === 0 ? "bg-background" : "bg-secondary/30"}>
                    <td className="px-5 py-4">
                      <Link href={row.href} className="font-semibold text-primary hover:underline inline-flex items-center gap-1">
                        {row.title}
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                      </Link>
                    </td>
                    <td className="px-5 py-4 text-muted-foreground">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section className="py-20 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <BgGrid />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge className="bg-white/10 border border-white/20 text-white mb-4">Workflow</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              Our Proven Workflow
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {rcmWorkflow.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.05}>
              <div className="rounded-2xl bg-white/10 border border-white/15 p-5 h-full">
                <div className="text-2xl font-bold text-emerald">{s.step}</div>
                <h3 className="mt-3 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.15}>
          <div className="mt-10 rounded-2xl bg-emerald/15 border border-emerald/30 p-5 md:p-6">
            <div className="font-semibold text-emerald">Expert tip</div>
            <p className="mt-2 text-sm text-white/85 leading-relaxed">
              The single highest-leverage point in most revenue cycles is eligibility verification before the
              visit. Practices that consistently verify coverage upfront tend to see meaningfully fewer
              downstream denials than those that verify only after a claim is rejected.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TechSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-10">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Technology & Security
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display leading-tight">
              Technology & Security
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our systems are built to support both efficient claims processing and strict data security:
            </p>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {rcmTech.map((item, i) => (
            <Reveal key={item} delay={(i % 5) * 0.04}>
              <div className="rounded-2xl border border-border/60 bg-card p-5 flex gap-3">
                <LockKeyhole className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-8 text-xs text-muted-foreground max-w-3xl leading-relaxed">
            Compliance note: Our workflows are designed with CMS billing guidelines and HIPAA data security
            requirements in mind. This page is provided for informational purposes and does not constitute
            legal or compliance advice — practices should consult their own compliance counsel for guidance
            specific to their situation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function MistakesSection() {
  return (
    <section className="py-20 md:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 lg:gap-14">
        <Reveal>
          <Badge variant="outline" className="border-primary/30 text-primary mb-4">
            Common Mistakes
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-display leading-tight">
            Frequently Made Revenue Cycle Mistakes
          </h2>
          <div className="mt-6 rounded-2xl border border-destructive/25 bg-destructive/5 p-6">
            <div className="flex items-center gap-2 font-semibold text-destructive">
              <AlertTriangle className="h-5 w-5" />
              Common RCM mistakes that cost practices revenue
            </div>
            <ol className="mt-4 space-y-3 list-decimal list-inside">
              {rcmMistakes.map((m) => (
                <li key={m} className="text-sm text-muted-foreground leading-relaxed">
                  {m}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="rounded-3xl border border-border/60 bg-card p-6 md:p-8 h-full shadow-card-soft">
            <h3 className="text-xl font-semibold font-display">Best Practice Checklist</h3>
            <ul className="mt-6 space-y-3">
              {rcmChecklist.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-0.5 h-5 w-5 rounded border border-emerald/40 bg-emerald/10 grid place-items-center shrink-0">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald" />
                  </span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CaseStudyFramework() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-10">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Case Study Framework
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display leading-tight">
              How We Document Client Results
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We believe in reporting real, verified outcomes — not invented statistics. Below is the framework
              we use to document client results; this section will be populated with actual, client-approved
              figures as case studies are finalized.
            </p>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Practice Type", text: "Specialty — e.g., outpatient behavioral health practice" },
            { label: "Challenge", text: "Verified starting situation — denial rate, A/R backlog, or administrative strain." },
            { label: "Approach", text: "Specific RCM services implemented and process changes made." },
            { label: "Outcome", text: "Client-approved results — denial rate, days in A/R, or collection rate." },
          ].map((block, i) => (
            <Reveal key={block.label} delay={i * 0.05}>
              <Card className="p-5 rounded-2xl border-dashed border-2 border-border/80 bg-card/80 h-full">
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {block.label}
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed italic">{block.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground max-w-2xl">
          No estimated, illustrative, or placeholder numbers are published on this page. Every figure shown in
          a completed case study reflects verified, client-approved data.
        </p>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="py-20 md:py-24" id="faq">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display">
              Frequently Asked Questions
            </h2>
          </Reveal>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {rcmFaqs.map(([q, a], i) => (
            <AccordionItem
              key={q}
              value={`rcm-faq-${i}`}
              className="border border-border/60 rounded-2xl bg-card px-5 shadow-card-soft data-[state=open]:shadow-elegant transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                {q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function BgGrid() {
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
    </>
  );
}
