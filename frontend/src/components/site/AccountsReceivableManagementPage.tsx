"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  FileText,
  Receipt,
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
  arBenefits,
  arCompare,
  arFaqs,
  arIncluded,
  arOnboarding,
  arOverviewConcepts,
  arProcess,
  arRelated,
  arRevenueLossReasons,
  arSpecialties,
  arUnpaidReasons,
  arWhy,
  arWhyOutsource,
} from "./accounts-receivable-management-content";

export function AccountsReceivableManagementPage() {
  return (
    <>
      <Hero />
      <WhatAreSection />
      <RevenueLossSection />
      <ProcessSection />
      <IncludedSection />
      <UnpaidReasonsSection />
      <BenefitsSection />
      <WhySection />
      <SpecialtiesSection />
      <RelatedSection />
      <CompareSection />
      <WhyOutsourceSection />
      <OnboardingSection />
      <PrimaryCta />
      <FaqSection />
    </>
  );
}

function Hero() {
  const badges = [
    "HIPAA-Compliant AR Workflows",
    "Insurance & Patient AR Follow-Up",
    "Dedicated Recovery Specialists",
    "Nationwide Payer Experience",
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
            <li className="text-white font-medium">Accounts Receivable Management</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-14 items-center">
          <div>
            <Reveal>
              <p className="text-sm md:text-base font-medium text-emerald/95 mb-5 max-w-xl leading-relaxed">
                Recovering Revenue That&apos;s Already Been Earned
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-4xl md:text-5xl lg:text-[3.05rem] font-bold leading-[1.08] tracking-tight font-display">
                Accounts Receivable Management Services That Turn Aging Claims Into Collected Revenue
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-base md:text-lg text-white/80 max-w-2xl leading-relaxed">
                Every claim sitting in your accounts receivable represents money your practice has already earned but
                hasn&apos;t collected. Some of it will resolve on its own. A meaningful portion won&apos;t — not because
                the care wasn&apos;t billable, but because no one followed up before a deadline passed or a denial went
                unaddressed. American Billing Solutions manages accounts receivable actively, following up on outstanding
                claims and patient balances until they&apos;re resolved, rather than letting them age quietly until they
                become write-offs.
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
                    Request Your Free Billing Audit <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 px-6 bg-white/5 border-white/25 text-white hover:bg-white/15"
                >
                  <Link href="/contact">Talk to an AR Specialist</Link>
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
                    <Receipt className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Active AR Recovery</div>
                    <div className="text-sm text-white/70">Insurance · Patient · Aged Claims</div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Insurance AR follow-up",
                    "Patient balance recovery",
                    "Denial investigation & appeals",
                    "Aging analysis & reporting",
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
            What Is Accounts Receivable Management?
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-3xl">
            <strong className="text-foreground">Accounts receivable (AR) management</strong> is the ongoing process of
            tracking, following up on, and resolving unpaid claims and patient balances until they&apos;re either paid,
            adjusted appropriately, or — in rare, well-documented cases — written off after all reasonable recovery
            efforts have been exhausted.
          </p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {arOverviewConcepts.map((item, i) => (
            <Reveal key={item.title} delay={(i % 8) * 0.03}>
              <Card className="p-5 h-full rounded-2xl border-border/60">
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <Card className="mt-10 p-6 md:p-8 rounded-2xl border-emerald/25 bg-emerald/5">
            <h3 className="font-semibold text-lg">
              Why AR Management Is One of the Most Important Parts of Medical Billing
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Submitting a claim is only half the job. AR management is the discipline of making sure every claim
              actually reaches resolution — because a claim that&apos;s submitted but never followed up on doesn&apos;t
              automatically get paid; it just quietly ages until it&apos;s too old to pursue effectively. Practices that
              treat AR as a passive, &quot;it&apos;ll sort itself out&quot; process consistently leave earned revenue
              uncollected. Strong front-end processes —{" "}
              <Link href="/medical-billing-services" className="text-primary font-semibold hover:underline">
                medical billing services
              </Link>
              , verification, coding, clean claims — reduce how much AR ever needs this kind of active management, but no
              process eliminates the need for it entirely. AR management sits near the back end of the{" "}
              <Link href="/revenue-cycle-management" className="text-primary font-semibold hover:underline">
                revenue cycle
              </Link>
              .
            </p>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

function RevenueLossSection() {
  return (
    <section className="py-20 md:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Revenue Risk
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              Why Healthcare Providers Lose Revenue
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {arRevenueLossReasons.map((c, i) => (
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
              <div className="font-semibold">A Real-World Billing Scenario</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Consider a claim denied for a documentation issue that could have been corrected and resubmitted within
                days. If no one reviews the denial promptly, it can sit unaddressed for weeks. By the time someone notices,
                the appeal deadline may be days away — or already passed. What started as a fully recoverable claim
                becomes a forced write-off, not because the service wasn&apos;t billable, but because the window to act
                on it closed while no one was actively watching.
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
              Our Accounts Receivable Management Process
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {arProcess.map((s, i) => (
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
              What Our AR Management Service Includes
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our AR management includes active{" "}
              <Link href="/denial-management-services" className="text-primary font-semibold hover:underline">
                denial management
              </Link>{" "}
              and appeals for denied claims, alongside broader follow-up on all outstanding balances.
            </p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {arIncluded.map((item, i) => (
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

function UnpaidReasonsSection() {
  return (
    <section className="py-20 md:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Root Causes
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              Common Reasons Claims Stay Unpaid
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {arUnpaidReasons.map((c, i) => (
            <Reveal key={c.title} delay={(i % 6) * 0.03}>
              <Card className="p-5 h-full rounded-2xl border-border/60">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
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
              Benefits of Professional AR Management
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {arBenefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 6) * 0.03}>
              <div className="rounded-2xl border border-border/60 bg-card p-5 h-full">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm capitalize">{b.title}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
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
  const icons = [Users, ShieldCheck, FileText, Sparkles];
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
          {arWhy.map((item, i) => {
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

function SpecialtiesSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-10">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Specialties
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display leading-tight">
              Medical Specialties We Support
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {arSpecialties.map((s, i) => (
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

function RelatedSection() {
  return (
    <section className="py-20 md:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-10">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Related Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display leading-tight">
              Related Revenue Cycle Services
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Accounts receivable management works best as part of a connected revenue cycle process, not a standalone
              fix applied after the fact.
            </p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {arRelated.map((r, i) => (
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
              In-House vs. Outsourced AR Management
            </h2>
          </Reveal>
        </div>
        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-border/60 bg-card shadow-card-soft">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left font-semibold px-5 py-4 w-[18%]">Factor</th>
                  <th className="text-left font-semibold px-5 py-4 w-[41%]">In-House AR Management</th>
                  <th className="text-left font-semibold px-5 py-4 w-[41%] bg-emerald/20">
                    Outsourced AR Management
                  </th>
                </tr>
              </thead>
              <tbody>
                {arCompare.map((row, i) => (
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

function WhyOutsourceSection() {
  return (
    <section className="py-20 md:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Why Outsource
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              Why Outsource Accounts Receivable Management
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {arWhyOutsource.map((item, i) => (
            <Reveal key={item.title} delay={(i % 6) * 0.04}>
              <Card className="p-6 h-full rounded-2xl border-border/60">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function OnboardingSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Onboarding
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              How Our Onboarding Process Works
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {arOnboarding.map((s, i) => (
            <Reveal key={s.step} delay={(i % 4) * 0.04}>
              <div className="rounded-2xl border border-border/60 bg-card p-5 h-full">
                <div className="text-xs font-bold text-primary uppercase tracking-wider">{s.step}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
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
                Request Your Free Billing Audit
              </h2>
              <p className="mt-5 text-lg text-white/85 leading-relaxed">
                Every day a claim sits in AR without follow-up is a day closer to it becoming permanently
                unrecoverable. You&apos;ve already done the work of providing care — the only question is whether that
                revenue actually gets collected. A free billing audit gives you a clear, honest look at your current AR
                aging, what&apos;s genuinely recoverable, and what active follow-up could bring back to your practice.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald-gradient text-emerald-foreground hover:opacity-90 shadow-glow h-12"
                >
                  <Link href="/contact">
                    Request Your Free Billing Audit <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 px-6 bg-white/5 border-white/25 text-white hover:bg-white/15"
                >
                  <Link href="/contact">Talk to an AR Specialist</Link>
                </Button>
              </div>
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
          {arFaqs.map(([q, a], i) => (
            <AccordionItem
              key={q}
              value={`ar-faq-${i}`}
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
