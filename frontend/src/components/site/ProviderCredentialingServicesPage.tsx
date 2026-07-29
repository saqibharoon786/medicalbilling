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
  FileCheck2,
  KeyRound,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "./Reveal";
import {
  pcsChallenges,
  pcsCompare,
  pcsFaqs,
  pcsIncluded,
  pcsIndustries,
  pcsLifecycle,
  pcsProcess,
  pcsRcmLinks,
  pcsRelated,
  pcsSpecialties,
  pcsWhy,
  pcsWhyCritical,
} from "./provider-credentialing-content";

export function ProviderCredentialingServicesPage() {
  return (
    <>
      <Hero />
      <WhatAreSection />
      <WhyCriticalSection />
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
    "Experienced Credentialing Specialists",
    "Nationwide Payer Network Experience",
    "Medicare, Medicaid & Commercial Payer Enrollment",
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
            <li className="text-white font-medium">Provider Credentialing Services</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-14 items-center">
          <div>
            <Reveal>
              <p className="text-sm md:text-base font-medium text-emerald/95 mb-5 max-w-xl leading-relaxed">
                Trusted Credentialing Support for U.S. Healthcare Providers
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-4xl md:text-5xl lg:text-[3.1rem] font-bold leading-[1.08] tracking-tight font-display">
                Provider Credentialing Services That Get You In-Network Faster
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-base md:text-lg text-white/80 max-w-2xl leading-relaxed">
                Every day a provider spends waiting on credentialing is a day they can&apos;t bill for the care
                they&apos;re providing. American Billing Solutions manages the credentialing and payer enrollment
                process from start to finish — application preparation, CAQH maintenance, payer follow-up, and
                ongoing recredentialing — so physicians, group practices, and healthcare organizations can start
                seeing in-network patients and getting reimbursed without unnecessary delays.
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
                    Request Your Free Credentialing Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 px-6 bg-white/5 border-white/25 text-white hover:bg-white/15"
                >
                  <Link href="/contact">Talk to a Credentialing Specialist</Link>
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
                    <UserCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">End-to-End Credentialing</div>
                    <div className="text-sm text-white/70">Application → enrollment → recredentialing</div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "CAQH setup & ongoing maintenance",
                    "Medicare, Medicaid & commercial payers",
                    "Proactive payer follow-up",
                    "Deadline tracking & recredentialing",
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
            What Are Provider Credentialing Services?
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-3xl">
            <strong className="text-foreground">Provider credentialing</strong> is the process by which
            insurance payers — Medicare, Medicaid, and commercial insurers — verify a healthcare provider&apos;s
            education, training, licensure, and professional history before allowing them to join a payer&apos;s
            network and bill for services. In plain terms: credentialing is how a payer decides whether a
            provider is who they say they are, qualified to practice, and eligible to be reimbursed.
          </p>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-3 gap-5">
          {[
            {
              title: "Why healthcare providers need credentialing",
              body: "Without active credentialing, a provider generally cannot bill a payer for services rendered to that payer's members — regardless of how qualified the provider is or how good the care they deliver. Credentialing isn't a formality; it's a prerequisite for getting paid.",
            },
            {
              title: "How credentialing impacts reimbursement",
              body: "If credentialing isn't completed, or lapses, claims submitted for that provider are typically denied outright, not just delayed. This makes credentialing one of the few processes in healthcare administration where a single gap can completely block revenue for a provider.",
            },
            {
              title: "Credentialing vs. medical billing",
              body: "Credentialing and medical billing are sequential, not overlapping, functions. Credentialing determines whether a provider can bill a given payer at all. Medical billing is the ongoing process of actually submitting and managing claims once that eligibility is established.",
            },
          ].map((card, i) => (
            <Reveal key={card.title} delay={i * 0.06}>
              <Card className="p-6 h-full rounded-2xl border-border/60">
                <h3 className="font-semibold text-lg">{card.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{card.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <Reveal>
            <Card className="p-6 md:p-8 h-full rounded-2xl border-border/60">
              <h3 className="text-xl font-semibold font-display">Credentialing vs. Provider Enrollment</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                These terms are related but distinct. <strong className="text-foreground">Credentialing</strong>{" "}
                is the verification process — confirming a provider&apos;s qualifications, licensure, and history
                meet a payer&apos;s standards.{" "}
                <Link href="/provider-enrollment-services" className="text-primary font-semibold hover:underline">
                  Provider enrollment
                </Link>{" "}
                is the administrative process of actually registering that credentialed provider with a specific
                payer so claims can be submitted and paid under their name. Credentialing typically has to happen
                before enrollment can be completed.
              </p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                A practice with excellent{" "}
                <Link href="/medical-billing-services" className="text-primary font-medium hover:underline">
                  medical billing
                </Link>{" "}
                processes still can&apos;t collect revenue from a payer the provider isn&apos;t credentialed with.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="p-6 md:p-8 h-full rounded-2xl border-emerald/25 bg-emerald/5">
              <h3 className="text-xl font-semibold font-display">The Credentialing Lifecycle</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Credentialing isn&apos;t a one-time event — it&apos;s a recurring cycle:
              </p>
              <ol className="mt-5 space-y-3">
                {pcsLifecycle.map((item, i) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed">
                    <span className="font-bold text-emerald shrink-0">{i + 1}.</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ol>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhyCriticalSection() {
  return (
    <section className="py-20 md:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Why It Matters
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              Why Credentialing Is Critical
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pcsWhyCritical.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 0.04}>
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
              Common Credentialing Challenges
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pcsChallenges.map((c, i) => (
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
              <div className="font-semibold">Why credentialing delays are so costly</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Unlike a slow claim, which still eventually gets paid, a credentialing delay can mean services
                simply cannot be billed to a payer at all until the process is complete. That makes credentialing
                timeline management one of the highest-stakes administrative processes in a practice&apos;s
                revenue cycle.
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
              Our Credentialing Process
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {pcsProcess.map((s, i) => (
            <Reveal key={s.step} delay={(i % 5) * 0.04}>
              <div className="rounded-2xl bg-white/10 border border-white/15 p-5 h-full hover:bg-white/15 transition-colors">
                <div className="text-2xl font-bold text-emerald">{s.step}</div>
                <h3 className="mt-3 font-semibold text-sm md:text-base">{s.title}</h3>
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
                "Info Collection",
                "Document Verification",
                "CAQH Setup",
                "Application Prep",
                "Submission",
                "Follow-Up",
                "Approval Tracking",
                "Enrollment",
                "Recredentialing",
              ].map((label, i, arr) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="rounded-lg bg-white/10 border border-white/15 px-3 py-1.5 font-medium">
                    {label}
                  </span>
                  {i < arr.length - 1 && <span className="text-emerald">→</span>}
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
              What&apos;s Included in Our Credentialing Services
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pcsIncluded.map((item, i) => (
            <Reveal key={item.title} delay={(i % 8) * 0.03}>
              <Card className="p-5 h-full rounded-2xl border-border/60 hover:border-primary/35 hover:shadow-elegant transition-all">
                <h3 className="font-semibold text-sm md:text-base">{item.title}</h3>
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
              Credentialing for Different Specialties
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pcsSpecialties.map((s, i) => (
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
              Benefits of Outsourcing Credentialing
            </h2>
          </Reveal>
        </div>
        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-border/60 bg-card shadow-card-soft">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left font-semibold px-5 py-4 w-[18%]">Factor</th>
                  <th className="text-left font-semibold px-5 py-4 w-[41%]">In-House Credentialing</th>
                  <th className="text-left font-semibold px-5 py-4 w-[41%] bg-emerald/20">
                    Outsourced Credentialing
                  </th>
                </tr>
              </thead>
              <tbody>
                {pcsCompare.map((row, i) => (
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
  const icons = [Users, KeyRound, ShieldCheck, FileCheck2, ClipboardCheck, Sparkles];
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
          {pcsWhy.map((item, i) => {
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
              Credentialing and Revenue Cycle Management
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Credentialing sits at the very front of the revenue cycle — before billing, before claims, before
              any revenue can be generated from a payer relationship at all.
            </p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pcsRcmLinks.map((item, i) => (
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
            Because credentialing gates the entire billing process for a given payer, it&apos;s one of the
            highest-leverage points in the{" "}
            <Link href="/revenue-cycle-management" className="text-primary font-semibold hover:underline">
              revenue cycle
            </Link>{" "}
            to get right early.
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
          {pcsIndustries.map((item, i) => (
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
          {pcsRelated.map((r, i) => (
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
              How We Document Credentialing Results
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We report real, verified credentialing outcomes only. Below is the framework used to document
              engagements; it will be populated with actual, client-approved data as case studies are finalized.
            </p>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              label: "Problem",
              text: "Verified client detail — credentialing delays or backlog prior to engagement.",
            },
            {
              label: "Solution",
              text: "Specific credentialing process and payer applications managed.",
            },
            {
              label: "Outcome",
              text: "Client-approved result — credentialing timeline improvement, confirmed by the client.",
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
                Don&apos;t Let Credentialing Delays Hold Back Your Revenue
              </h2>
              <p className="mt-5 text-lg text-white/85 leading-relaxed">
                Every provider waiting on credentialing is a provider who can&apos;t yet bill for the care
                they&apos;re delivering. A free credentialing consultation gives you a clear picture of your
                current applications, potential delays, and what it would take to get every provider active and
                billing across your full payer mix.
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
          {pcsFaqs.map(([q, a], i) => (
            <AccordionItem
              key={q}
              value={`pcs-faq-${i}`}
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
