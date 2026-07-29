"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "./Reveal";
import {
  ievChallenges,
  ievCompare,
  ievFaqs,
  ievIncluded,
  ievIndustries,
  ievProcess,
  ievRcmLinks,
  ievRelated,
  ievSpecialties,
  ievWhy,
  ievWhyMatters,
} from "./insurance-verification-content";

export function InsuranceVerificationServicesPage() {
  return (
    <>
      <Hero />
      <WhatAreSection />
      <WhyMattersSection />
      <ChallengesSection />
      <ProcessSection />
      <IncludedSection />
      <SpecialtiesSection />
      <CompareSection />
      <WhySection />
      <RcmConnectionSection />
      <IndustriesSection />
      <RelatedSection />
      <CaseStudyFramework />
      <PrimaryCta />
      <FaqSection />
    </>
  );
}

function Hero() {
  const badges = [
    "HIPAA-Compliant Verification Process",
    "Fast, Reliable Eligibility Checks",
    "Experienced Verification Specialists",
    "Nationwide Payer Coverage",
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
            <li className="text-white font-medium">Insurance Eligibility Verification</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-14 items-center">
          <div>
            <Reveal>
              <p className="text-sm md:text-base font-medium text-emerald/95 mb-5 max-w-xl leading-relaxed">
                Front-End Revenue Cycle Support for U.S. Healthcare Providers
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-4xl md:text-5xl lg:text-[3.05rem] font-bold leading-[1.08] tracking-tight font-display">
                Insurance Eligibility Verification Services That Prevent Denials Before They Happen
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-base md:text-lg text-white/80 max-w-2xl leading-relaxed">
                Most claim denials aren&apos;t caught at the payer — they&apos;re built in before the patient
                ever walks through the door. American Billing Solutions verifies patient coverage, copays,
                deductibles, and plan limitations before every appointment, so your practice knows exactly
                what&apos;s covered and what isn&apos;t, well before a claim is ever submitted. Fewer
                eligibility-related denials. Fewer billing surprises for patients. A cleaner start to every
                claim.
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
                    Request Your Free Verification Audit <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 px-6 bg-white/5 border-white/25 text-white hover:bg-white/15"
                >
                  <Link href="/contact">Talk to a Verification Specialist</Link>
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
                    <Search className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Verify Before the Visit</div>
                    <div className="text-sm text-white/70">Coverage · benefits · patient responsibility</div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Active coverage confirmation",
                    "Copay, deductible & coinsurance",
                    "Referral & auth requirement flags",
                    "Medicare, Medicaid & commercial",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/90">
                      <CheckCircle2 className="h-4 w-4 text-emerald mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
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

function WhatAreSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Badge variant="outline" className="border-primary/30 text-primary mb-4">
            Overview
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight max-w-3xl">
            What Are Insurance Eligibility Verification Services?
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-3xl">
            <strong className="text-foreground">Insurance eligibility verification</strong> is the process of
            confirming a patient&apos;s active insurance coverage, plan benefits, and financial responsibility —
            copay, deductible, coinsurance — before they receive care. It&apos;s a front-end revenue cycle
            function, meaning it happens before a service is even delivered, not after a claim has already been
            submitted and denied.
          </p>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <Reveal>
            <Card className="p-6 md:p-8 h-full rounded-2xl border-border/60 space-y-5">
              <div>
                <h3 className="font-semibold text-lg">Why providers need it</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Without eligibility verification, a practice is essentially billing blind — assuming coverage
                  is active and benefits apply, without confirming either. When that assumption turns out to be
                  wrong, the result is a denied claim, an unexpected patient balance, or both.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">How verification improves reimbursement</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  When coverage, copay, and deductible details are confirmed upfront, claims are built on
                  accurate information from the start — improving the odds of first-pass acceptance and reducing
                  the back-and-forth of resubmission.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">How verification reduces claim denials</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  A significant share of claim denials are tied directly to eligibility issues: inactive
                  coverage, plan exclusions, or services that fall outside what a patient&apos;s plan actually
                  covers. Catching these issues before the appointment is one of the most effective ways to
                  reduce denial rates at the source.
                </p>
              </div>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-4 h-full">
              <Card className="p-6 rounded-2xl border-border/60">
                <h3 className="font-semibold text-lg">Insurance verification vs. prior authorization</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Eligibility verification</strong> confirms that a
                  patient&apos;s coverage is active and explains what their plan covers, including copay and
                  deductible amounts.{" "}
                  <Link href="/prior-authorization-services" className="text-primary font-semibold hover:underline">
                    Prior authorization
                  </Link>{" "}
                  is a separate approval process some payers require before specific procedures, medications, or
                  treatments will be covered at all — even for patients with active, verified coverage.
                </p>
              </Card>
              <Card className="p-6 rounded-2xl border-emerald/25 bg-emerald/5">
                <h3 className="font-semibold text-lg">Eligibility verification vs. medical billing</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Eligibility verification happens <em>before</em> a claim exists.{" "}
                  <Link href="/medical-billing-services" className="text-primary font-semibold hover:underline">
                    Medical billing
                  </Link>{" "}
                  is the process of creating, submitting, and managing that claim once services have been
                  delivered. Verification is a preventive step; billing is the transactional step that follows.
                </p>
              </Card>
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
              Why Insurance Eligibility Verification Matters
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {ievWhyMatters.map((item, i) => (
            <Reveal key={item.title} delay={(i % 5) * 0.03}>
              <Card className="p-4 h-full rounded-2xl border-border/60">
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChallengesSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Challenges
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              Common Eligibility Verification Challenges
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ievChallenges.map((c, i) => (
            <Reveal key={c.title} delay={(i % 6) * 0.03}>
              <Card className="p-5 h-full rounded-2xl border-border/60">
                <div className="text-xs font-bold text-destructive/80">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-2 font-semibold">{c.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="mt-10 rounded-2xl border border-destructive/25 bg-destructive/5 p-6 md:p-8 flex gap-4">
            <AlertTriangle className="h-6 w-6 text-destructive shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold">Why eligibility issues are the most preventable denials</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Unlike coding or documentation-related denials, which often require clinical judgment to resolve,
                eligibility-related denials are almost entirely preventable with a consistent, proactive
                verification process completed before the appointment.
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
            <Badge className="bg-white/10 border border-white/20 text-white mb-4">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              Our Eligibility Verification Process
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {ievProcess.map((s, i) => (
            <Reveal key={s.step} delay={(i % 5) * 0.04}>
              <div className="rounded-2xl bg-white/10 border border-white/15 p-5 h-full hover:bg-white/15 transition-colors">
                <div className="text-2xl font-bold text-emerald">{s.step}</div>
                <h3 className="mt-3 font-semibold text-sm md:text-base">{s.title}</h3>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function IncludedSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              What&apos;s Included
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              What&apos;s Included in Our Insurance Eligibility Verification Services
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ievIncluded.map((item, i) => (
            <Reveal key={item.title} delay={(i % 6) * 0.03}>
              <Card className="p-5 h-full rounded-2xl border-border/60 hover:border-primary/35 hover:shadow-elegant transition-all">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
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
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Specialties
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              Eligibility Verification for Different Specialties
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ievSpecialties.map((s, i) => (
            <Reveal key={s.title} delay={(i % 6) * 0.04}>
              <Card className="p-5 h-full rounded-2xl border-border/60">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompareSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Comparison
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              Benefits of Outsourcing Insurance Eligibility Verification
            </h2>
          </Reveal>
        </div>
        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-border/60 bg-card shadow-card-soft">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left font-semibold px-5 py-4 w-[18%]">Factor</th>
                  <th className="text-left font-semibold px-5 py-4 w-[41%]">In-House Verification</th>
                  <th className="text-left font-semibold px-5 py-4 w-[41%] bg-emerald/20">
                    Outsourced Verification
                  </th>
                </tr>
              </thead>
              <tbody>
                {ievCompare.map((row, i) => (
                  <tr key={row.factor} className={i % 2 === 0 ? "bg-background" : "bg-secondary/30"}>
                    <td className="px-5 py-4 font-semibold align-top">{row.factor}</td>
                    <td className="px-5 py-4 text-muted-foreground align-top leading-relaxed">{row.inHouse}</td>
                    <td className="px-5 py-4 align-top leading-relaxed border-l border-emerald/20">
                      {row.outsourced}
                    </td>
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

function WhySection() {
  const icons = [Users, ShieldCheck, Search, ClipboardCheck, Sparkles];
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
          {ievWhy.map((item, i) => {
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

function RcmConnectionSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Connected Workflow
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              Insurance Eligibility Verification & Revenue Cycle Management
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Eligibility verification sits at the very front of the revenue cycle, which means its accuracy
              affects nearly everything that happens downstream.
            </p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ievRcmLinks.map((item, i) => (
            <Reveal key={item.title} delay={(i % 6) * 0.04}>
              <Card className="p-5 h-full rounded-2xl border-border/60">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-8 text-sm text-muted-foreground leading-relaxed max-w-3xl">
            As a front-end function, verification has outsized influence on the efficiency of the entire{" "}
            <Link href="/revenue-cycle-management" className="text-primary font-semibold hover:underline">
              revenue cycle
            </Link>{" "}
            — errors here compound as claims move through coding, billing, and collections.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section className="py-20 md:py-24 bg-secondary/40">
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
          {ievIndustries.map((item, i) => (
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

function RelatedSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-10">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Related Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display leading-tight">Related Services</h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ievRelated.map((r, i) => (
            <Reveal key={r.href} delay={i * 0.05}>
              <Link
                href={r.href}
                className="block rounded-2xl border border-border/60 bg-card p-5 h-full hover:border-primary/40 hover:shadow-elegant transition-all group"
              >
                <div className="font-semibold group-hover:text-primary transition-colors inline-flex items-center gap-1.5">
                  {r.title}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-50" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyFramework() {
  return (
    <section className="py-20 md:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-10">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Case Study Framework
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display leading-tight">
              How We Document Verification Results
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We report real, verified outcomes only. Below is the framework used to document
              verification-related engagements; it will be populated with actual, client-approved data as case
              studies are finalized.
            </p>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              label: "Problem",
              text: "Verified client detail — eligibility-related denial rate or patient billing disputes prior to engagement.",
            },
            {
              label: "Solution",
              text: "The specific verification process implemented.",
            },
            {
              label: "Outcome",
              text: "Client-approved result — change in eligibility-related denial rate, confirmed by the client.",
            },
          ].map((block, i) => (
            <Reveal key={block.label} delay={i * 0.06}>
              <Card className="p-6 rounded-2xl border-dashed border-2 border-border/80 bg-card/80 h-full">
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {block.label}
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed italic">{block.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrimaryCta() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-hero-gradient text-primary-foreground p-10 md:p-16 shadow-elegant">
            <BgGrid />
            <div className="relative max-w-3xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
                Stop Losing Revenue to Preventable Coverage Issues
              </h2>
              <p className="mt-5 text-lg text-white/85 leading-relaxed">
                Eligibility-related denials are some of the most avoidable in the entire revenue cycle — but only
                if coverage is verified before the appointment, not after the claim is denied. A free
                verification audit shows you exactly how much of your denial volume is tied to coverage issues
                that proactive verification could have prevented.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 bg-emerald-gradient text-emerald-foreground hover:opacity-90 shadow-glow h-12"
              >
                <Link href="/contact">
                  Request Your Free Billing Audit <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
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
          {ievFaqs.map(([q, a], i) => (
            <AccordionItem
              key={q}
              value={`iev-faq-${i}`}
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
