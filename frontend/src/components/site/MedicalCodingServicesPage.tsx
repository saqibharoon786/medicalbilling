"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Code2,
  FileCode2,
  FileSearch,
  ShieldCheck,
  Sparkles,
  Tags,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "./Reveal";
import {
  mcsChallenges,
  mcsCompare,
  mcsFaqs,
  mcsIncluded,
  mcsIndustries,
  mcsProcess,
  mcsRcmLinks,
  mcsRelated,
  mcsSpecialties,
  mcsWhy,
  mcsWhyAccurate,
} from "./medical-coding-content";

export function MedicalCodingServicesPage() {
  return (
    <>
      <Hero />
      <WhatAreSection />
      <WhyAccurateSection />
      <ChallengesSection />
      <ProcessSection />
      <IncludedSection />
      <SpecialtiesSection />
      <CompareSection />
      <WhySection />
      <CodingPlusRcmSection />
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
    "HIPAA-Compliant Coding Workflows",
    "Certified Medical Coders (CPC / CCS-credentialed)",
    "Fast, Reliable Turnaround",
    "Documentation-Backed Accuracy",
    "Revenue Optimization Focus",
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
            <li className="text-white font-medium">Medical Coding Services</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-14 items-center">
          <div>
            <Reveal>
              <p className="text-sm md:text-base font-medium text-emerald/95 mb-5 max-w-xl leading-relaxed">
                Certified Medical Coders Serving U.S. Healthcare Providers
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-4xl md:text-5xl lg:text-[3.1rem] font-bold leading-[1.08] tracking-tight font-display">
                Medical Coding Services That Protect Your Revenue and Your Compliance
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-base md:text-lg text-white/80 max-w-2xl leading-relaxed">
                Every claim your practice submits depends on one thing being right first: the code. American
                Billing Solutions provides certified medical coding services for physicians, clinics, and
                healthcare organizations across the United States — accurate CPT, ICD-10-CM, and HCPCS Level II
                coding that reduces denials, supports compliance, and ensures you&apos;re reimbursed for the
                full scope of care you actually provided.
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
                    Request Your Free Coding Audit <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 px-6 bg-white/5 border-white/25 text-white hover:bg-white/15"
                >
                  <Link href="/contact">Talk to a Coding Specialist</Link>
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
                    <Code2 className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Three Core Code Sets</div>
                    <div className="text-sm text-white/70">CPT · ICD-10-CM · HCPCS II</div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Documentation-backed code assignment",
                    "Second-level QA before claim handoff",
                    "CMS & payer compliance review",
                    "Specialty-trained coding teams",
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
                <BadgeCheck className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold">CPC / CCS-credentialed coders</span>
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
            What Are Medical Coding Services?
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-3xl">
            Medical coding is the process of translating clinical documentation — everything a provider records
            about a patient encounter — into standardized codes that payers use to determine what happened
            during a visit and how much to reimburse for it. Medical coding services refers to the professional
            management of that process: reviewing documentation, assigning accurate codes, checking for
            compliance issues, and preparing claims to move forward cleanly through{" "}
            <Link href="/medical-billing-services" className="text-primary font-medium hover:underline">
              medical billing services
            </Link>
            .
          </p>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <Reveal>
            <Card className="p-6 md:p-8 h-full rounded-2xl border-border/60">
              <h3 className="text-xl font-semibold font-display">Coding vs. Billing: What&apos;s the Difference?</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                These two terms get used interchangeably, but they&apos;re not the same function.
              </p>
              <div className="mt-5 space-y-4">
                <div className="rounded-xl bg-secondary/50 p-4">
                  <div className="font-semibold">Medical coding</div>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    The translation step — converting a clinical note into a standardized code set that
                    represents the diagnosis, procedure, or service provided.
                  </p>
                </div>
                <div className="rounded-xl bg-secondary/50 p-4">
                  <div className="font-semibold">Medical billing</div>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    What happens next — using those codes to build a claim, submit it to a payer, and manage it
                    through to payment.
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm font-medium leading-relaxed">
                Coding accuracy is the foundation billing depends on. A perfectly submitted claim built on an
                incorrect code is still going to be denied, underpaid, or flagged for review.
              </p>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-4 h-full">
              {[
                {
                  icon: Code2,
                  title: "CPT (Current Procedural Terminology)",
                  desc: "Maintained by the American Medical Association, CPT codes describe the specific procedures and services a provider performed — everything from an office visit to a surgical procedure.",
                },
                {
                  icon: FileCode2,
                  title: "ICD-10-CM",
                  desc: "These codes describe the diagnosis — the medical reason the service was provided. ICD-10-CM codes need to align logically with the CPT codes billed; a mismatch between the two is one of the most common denial triggers.",
                },
                {
                  icon: Tags,
                  title: "HCPCS Level II",
                  desc: "Used primarily for items not covered by CPT — durable medical equipment, certain drugs, and other supplies or services, particularly relevant for Medicare and Medicaid billing.",
                },
              ].map((item) => (
                <Card key={item.title} className="p-5 rounded-2xl border-border/60">
                  <div className="flex gap-3">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 rounded-2xl border border-emerald/25 bg-emerald/5 p-6 md:p-8">
            <h3 className="font-semibold text-lg">Why coding accuracy directly affects reimbursement</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-4xl">
              A payer doesn&apos;t reimburse based on the care that was actually delivered — it reimburses based
              on what the codes say was delivered. If the coding undersells the encounter, the practice is
              underpaid for services it rightfully performed. If the coding overstates it, the claim risks
              denial, audit, or compliance exposure. Accurate coding isn&apos;t just a compliance formality —
              it&apos;s the mechanism that determines whether a practice is paid fairly for its work.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhyAccurateSection() {
  return (
    <section className="py-20 md:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Impact
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              Why Accurate Medical Coding Matters
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mcsWhyAccurate.map((item, i) => (
            <Reveal key={item.title} delay={(i % 6) * 0.04}>
              <Card className="p-5 h-full rounded-2xl border-border/60">
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
              Common Medical Coding Challenges
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Coding is a detail-intensive discipline, and even well-run practices run into recurring
              challenges:
            </p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {mcsChallenges.map((c, i) => (
            <Reveal key={c.title} delay={(i % 5) * 0.03}>
              <Card className="p-4 h-full rounded-2xl border-border/60">
                <div className="text-xs font-bold text-destructive/80">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-2 font-semibold text-sm">{c.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="mt-10 rounded-2xl border border-destructive/25 bg-destructive/5 p-6 md:p-8 flex gap-4">
            <AlertTriangle className="h-6 w-6 text-destructive shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold">The real cost of coding errors</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Coding mistakes rarely show up as one large, obvious loss. They accumulate quietly — a slightly
                undercoded visit here, a{" "}
                <Link href="/denial-management-services" className="text-primary font-medium hover:underline">
                  denied claim
                </Link>{" "}
                there — until a practice looks back and realizes a meaningful percentage of earned revenue was
                never collected.
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
              Our Medical Coding Process
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mcsProcess.map((s, i) => (
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
          <div className="mt-10 rounded-2xl bg-white/10 border border-white/15 p-5 md:p-6 overflow-x-auto">
            <div className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-4">
              Process at a glance
            </div>
            <div className="flex flex-wrap items-center gap-2 text-sm min-w-max">
              {[
                "Patient Encounter",
                "Documentation Review",
                "Code Assignment",
                "QA Review",
                "Compliance Review",
                "Claim Readiness",
                "Submission Support",
                "Continuous Monitoring",
              ].map((label, i, arr) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="rounded-lg bg-white/10 border border-white/15 px-3 py-1.5 font-medium">
                    {label}
                  </span>
                  {i < arr.length - 1 && <span className="text-emerald">↓</span>}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
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
              What&apos;s Included in Our Medical Coding Services
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mcsIncluded.map((item, i) => (
            <Reveal key={item.title} delay={(i % 6) * 0.04}>
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
              Medical Coding Specialties
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Coding requirements vary meaningfully across specialties, and generic coding knowledge often
              isn&apos;t enough to avoid denials in more complex or highly scrutinized fields.
            </p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mcsSpecialties.map((s, i) => (
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
              Benefits of Outsourcing Medical Coding
            </h2>
          </Reveal>
        </div>
        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-border/60 bg-card shadow-card-soft">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left font-semibold px-5 py-4 w-[16%]">Factor</th>
                  <th className="text-left font-semibold px-5 py-4 w-[42%]">In-House Coding</th>
                  <th className="text-left font-semibold px-5 py-4 w-[42%] bg-emerald/20">Outsourced Coding</th>
                </tr>
              </thead>
              <tbody>
                {mcsCompare.map((row, i) => (
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
  const icons = [ClipboardList, BadgeCheck, ShieldCheck, FileSearch, Sparkles, Code2];
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
          {mcsWhy.map((item, i) => {
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

function CodingPlusRcmSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Connected Workflow
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              Medical Coding + Revenue Cycle Management
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Coding doesn&apos;t operate in isolation — it&apos;s the input that determines how well everything
              downstream in the revenue cycle performs.
            </p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mcsRcmLinks.map((item, i) => (
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
            Coding sits near the front of the revenue cycle, which means errors here compound as they move
            through billing, submission, and collections. Getting coding right is one of the highest-leverage
            ways to improve overall{" "}
            <Link href="/revenue-cycle-management" className="text-primary font-semibold hover:underline">
              revenue cycle management
            </Link>{" "}
            performance.
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
          {mcsIndustries.map((item, i) => (
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
            <p className="mt-4 text-muted-foreground">
              Medical coding is one part of a larger, connected revenue cycle. Explore related services:
            </p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mcsRelated.map((r, i) => (
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
              How We Document Coding Results
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We report real, verified outcomes only — not projected or invented statistics. Below is the
              framework we use to document coding-related engagements; it will be populated with actual,
              client-approved data as case studies are finalized.
            </p>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              label: "Problem",
              text: "Verified client detail — coding-related denial rate or documentation gaps prior to engagement.",
            },
            {
              label: "Solution",
              text: "Specific coding review, QA process, or specialty-specific coding support implemented.",
            },
            {
              label: "Outcome",
              text: "Client-approved result — measurable change in denial rate or coding accuracy.",
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
                Find Out How Much Coding Errors Are Actually Costing You
              </h2>
              <p className="mt-5 text-lg text-white/85 leading-relaxed">
                Most practices don&apos;t realize how much revenue is affected by coding accuracy until someone
                takes a close look at the documentation-to-code match on recent claims. A free coding audit
                gives you a clear, no-obligation view of where your coding is strong, where it&apos;s exposed,
                and what it would take to fix it.
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
          {mcsFaqs.map(([q, a], i) => (
            <AccordionItem
              key={q}
              value={`mcs-faq-${i}`}
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
