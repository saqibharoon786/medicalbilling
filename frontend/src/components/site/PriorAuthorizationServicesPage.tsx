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
  FileCheck,
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
  paChallenges,
  paCompare,
  paFaqs,
  paIncluded,
  paIndustries,
  paProcess,
  paRcmLinks,
  paRelated,
  paSpecialties,
  paWhy,
  paWhyMatters,
} from "./prior-authorization-content";

export function PriorAuthorizationServicesPage() {
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
    "HIPAA-Compliant Process",
    "Experienced Authorization Specialists",
    "Nationwide Payer Support",
    "Fast, Proactive Turnaround",
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
            <li className="text-white font-medium">Prior Authorization Services</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-14 items-center">
          <div>
            <Reveal>
              <p className="text-sm md:text-base font-medium text-emerald/95 mb-5 max-w-xl leading-relaxed">
                Authorization Support Trusted by U.S. Healthcare Providers
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-4xl md:text-5xl lg:text-[3.05rem] font-bold leading-[1.08] tracking-tight font-display">
                Prior Authorization Services That Keep Treatment — and Revenue — Moving
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-base md:text-lg text-white/80 max-w-2xl leading-relaxed">
                A delayed authorization doesn&apos;t just delay a procedure. It delays care, frustrates patients, and holds up
                revenue that depends on that service being approved and delivered. American Billing Solutions manages the
                prior authorization process end to end — documentation review, submission, payer follow-up, and status
                tracking — so your patients get approved faster and your practice isn&apos;t left waiting on a payer
                decision that should have taken days, not weeks.
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
                    Request Your Free Authorization Review <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 px-6 bg-white/5 border-white/25 text-white hover:bg-white/15"
                >
                  <Link href="/contact">Talk to an Authorization Specialist</Link>
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
                    <FileCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">End-to-End Authorization</div>
                    <div className="text-sm text-white/70">From documentation to approval</div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Documentation review & validation",
                    "Payer submission & follow-up",
                    "Status tracking & appeals support",
                    "Reporting & renewal management",
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
            What Are Prior Authorization Services?
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-3xl">
            <strong className="text-foreground">Prior authorization</strong> is the approval process a health insurance
            payer requires before it will cover certain procedures, medications, imaging, or treatments — even when the
            patient&apos;s general insurance coverage is active and verified. Without that approval, the payer may deny
            the claim entirely, regardless of medical necessity, leaving the practice or the patient responsible for the
            cost.
          </p>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <Reveal>
            <Card className="p-6 md:p-8 h-full rounded-2xl border-border/60 space-y-5">
              <div>
                <h3 className="font-semibold text-lg">Why Insurance Companies Require Authorization</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Payers use prior authorization as a cost-control and utilization-management mechanism — a way to
                  confirm, before a service is delivered, that it meets the payer&apos;s criteria for medical necessity
                  and appropriateness. It&apos;s not a judgment on the provider&apos;s clinical decision-making;
                  it&apos;s a payer-side administrative checkpoint that has to be cleared before the payer agrees to
                  reimburse the service.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">How Prior Authorization Affects Reimbursement</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  If a service that requires prior authorization is performed without it — or the authorization request is
                  denied — the claim is typically denied as well, regardless of how medically appropriate the service
                  was. This makes prior authorization one of the few points in the revenue cycle where a missed step can
                  eliminate reimbursement entirely, not just delay it.
                </p>
              </div>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-4 h-full">
              <Card className="p-6 rounded-2xl border-border/60">
                <h3 className="font-semibold text-lg">Prior Authorization vs. Insurance Verification</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Insurance eligibility verification</strong> confirms that a
                  patient&apos;s coverage is active and outlines their general benefits, copay, and deductible.{" "}
                  <strong className="text-foreground">Prior authorization</strong> is a separate, service-specific
                  approval required by some payers before that particular procedure, medication, or treatment will be
                  covered — even for a patient with fully verified, active coverage.
                </p>
              </Card>
              <Card className="p-6 rounded-2xl border-border/60">
                <h3 className="font-semibold text-lg">Prior Authorization vs. Referral</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  A referral is typically a directive from a primary care provider to see a specialist, often required by
                  HMO-style plans. Prior authorization is a payer&apos;s approval for a specific service or treatment,
                  and the two aren&apos;t interchangeable — a referral doesn&apos;t guarantee authorization, and
                  authorization doesn&apos;t always require a referral, depending on the payer and plan type.
                </p>
              </Card>
              <Card className="p-6 rounded-2xl border-emerald/25 bg-emerald/5">
                <h3 className="font-semibold text-lg">Prior Authorization vs. Credentialing</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  <Link href="/provider-credentialing-services" className="text-primary font-semibold hover:underline">
                    Credentialing
                  </Link>{" "}
                  determines whether a provider is eligible to bill a payer at all. Prior authorization is a
                  service-specific approval process that applies regardless of a provider&apos;s credentialing status —
                  a fully credentialed, in-network provider still needs authorization for services that require it.
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
              Why Prior Authorization Matters
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {paWhyMatters.map((item, i) => (
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
              Common Prior Authorization Challenges
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paChallenges.map((c, i) => (
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
              <div className="font-semibold">Why Authorization Delays Compound Quickly</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                A single missed or delayed authorization can cascade into a rescheduled procedure, a frustrated patient,
                and a claim that can&apos;t be billed until the issue is resolved — all from one administrative step
                that, handled proactively, is often preventable.
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
              Our Prior Authorization Process
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {paProcess.map((s, i) => (
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
              What&apos;s Included in Our Prior Authorization Services
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paIncluded.map((item, i) => (
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
              Prior Authorization for Different Specialties
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paSpecialties.map((s, i) => (
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
              Benefits of Outsourcing Prior Authorization
            </h2>
          </Reveal>
        </div>
        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-border/60 bg-card shadow-card-soft">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left font-semibold px-5 py-4 w-[18%]">Factor</th>
                  <th className="text-left font-semibold px-5 py-4 w-[41%]">In-House Prior Authorization</th>
                  <th className="text-left font-semibold px-5 py-4 w-[41%] bg-emerald/20">
                    Outsourced Prior Authorization
                  </th>
                </tr>
              </thead>
              <tbody>
                {paCompare.map((row, i) => (
                  <tr key={row.factor} className={i % 2 === 0 ? "bg-background" : "bg-secondary/30"}>
                    <td className="px-5 py-4 font-semibold align-top">{row.factor}</td>
                    <td className="px-5 py-4 text-muted-foreground align-top leading-relaxed">{row.inHouse}</td>
                    <td className="px-5 py-4 align-top leading-relaxed border-l border-emerald/20">{row.outsourced}</td>
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
  const icons = [Users, ShieldCheck, ClipboardCheck, FileCheck, Sparkles];
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
          {paWhy.map((item, i) => {
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
              Prior Authorization & Revenue Cycle Management
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Prior authorization intersects with nearly every other stage of the revenue cycle.
            </p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paRcmLinks.map((item, i) => (
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
            As a service-specific approval gate, authorization sits at a critical junction in the{" "}
            <Link href="/revenue-cycle-management" className="text-primary font-semibold hover:underline">
              revenue cycle
            </Link>{" "}
            where a single missed step can eliminate reimbursement entirely.
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
          {paIndustries.map((item, i) => (
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
          {paRelated.map((r, i) => (
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
              How We Document Authorization Results
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We report real, verified outcomes only. Below is the framework used to document authorization-related
              engagements; it will be populated with actual, client-approved data as case studies are finalized.
            </p>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              label: "Problem",
              text: "Verified client detail — description of authorization-related delays or denial rate prior to engagement.",
            },
            {
              label: "Solution",
              text: "Verified client detail — the specific authorization management process implemented.",
            },
            {
              label: "Outcome",
              text: "Verified, client-approved result — change in authorization turnaround time or denial rate, confirmed by the client.",
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
        <p className="mt-6 text-xs text-muted-foreground max-w-2xl">
          No estimated, illustrative, or invented statistics, reviews, awards, certifications, client counts, success
          rates, or testimonials appear on this page. Every figure shown in a completed case study will reflect real,
          client-approved outcomes.
        </p>
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
                Stop Letting Authorization Delays Hold Up Care and Revenue
              </h2>
              <p className="mt-5 text-lg text-white/85 leading-relaxed">
                Every pending authorization is a service that can&apos;t yet be delivered and billed. A free
                authorization review shows you exactly where delays are happening in your current process — and what
                proactive management could look like instead.
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
          {paFaqs.map(([q, a], i) => (
            <AccordionItem
              key={q}
              value={`pa-faq-${i}`}
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
