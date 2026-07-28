"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  FileSearch,
  HeartPulse,
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
  mbsBenefits,
  mbsCompare,
  mbsFaqs,
  mbsIncluded,
  mbsProblems,
  mbsProcess,
  mbsRelated,
  mbsSpecialties,
  mbsWhatIncludes,
  mbsWhoWeHelp,
  mbsWhy,
} from "./medical-billing-content";

export function MedicalBillingServicesPage() {
  return (
    <>
      <Hero />
      <SoftCta
        headline="Not Sure Where Your Revenue Is Slipping Through?"
        copy="A free billing audit gives you a clear look at your current claim denial patterns, coding accuracy, and outstanding A/R — with no obligation."
      />
      <WhatAreSection />
      <ProblemsSection />
      <ProcessSection />
      <IncludedSection />
      <SoftCta
        headline="See Which Services Would Make the Biggest Difference for Your Practice"
        copy="Every practice's billing gaps are different. A quick audit identifies exactly where yours are."
        tone="primary"
      />
      <WhySection />
      <SpecialtiesSection />
      <CompareSection />
      <BenefitsSection />
      <WhoWeHelpSection />
      <RelatedSection />
      <ResultsFramework />
      <SoftCta
        headline="Still Have Questions About Your Billing Process?"
        copy="Get a straightforward answer, not a sales pitch. Request an audit and we'll walk you through what we find."
        tone="hero"
      />
      <FaqSection />
    </>
  );
}

function SoftCta({
  headline,
  copy,
  tone = "soft",
}: {
  headline: string;
  copy: string;
  tone?: "soft" | "primary" | "hero";
}) {
  const wrap =
    tone === "hero"
      ? "relative overflow-hidden rounded-3xl bg-hero-gradient text-primary-foreground p-8 md:p-12 shadow-elegant"
      : tone === "primary"
        ? "rounded-3xl bg-primary text-primary-foreground p-8 md:p-10"
        : "rounded-3xl border border-border/60 bg-secondary/50 p-8 md:p-10";

  const btn =
    tone === "soft"
      ? "bg-emerald-gradient text-emerald-foreground hover:opacity-90"
      : "bg-emerald-gradient text-emerald-foreground hover:opacity-90 shadow-glow";

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
              <Button asChild size="lg" className={`${btn} shrink-0 h-12`}>
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

function Hero() {
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
            <li className="text-white font-medium">Medical Billing Services</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-14 items-center">
          <div>
            <Reveal>
              <p className="text-sm md:text-base font-medium text-emerald/95 mb-5 max-w-xl leading-relaxed">
                Trusted Medical Billing Support for Healthcare Providers Across the USA
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-4xl md:text-5xl lg:text-[3.15rem] font-bold leading-[1.08] tracking-tight font-display">
                Medical Billing Services That Help Healthcare Providers Get Paid Faster
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-base md:text-lg text-white/80 max-w-2xl leading-relaxed">
                Running a practice shouldn&apos;t mean chasing insurance companies for money you&apos;ve already
                earned. American Billing Solutions provides complete medical billing services for physicians,
                clinics, and healthcare organizations across the United States — managing everything from charge
                entry and coding review to claim submission, denial follow-up, and payment posting. Our goal is
                simple: reduce your administrative workload, minimize claim denials, and improve the speed and
                predictability of your revenue cycle.
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
                  <Link href="/contact">Speak With a Billing Specialist</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/85">
                {["HIPAA-Compliant Workflows", "Dedicated Billing Team", "Specialty-Trained Coders"].map(
                  (t) => (
                    <span key={t} className="inline-flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald shrink-0" />
                      {t}
                    </span>
                  ),
                )}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} y={28}>
            <div className="relative">
              <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-sm p-6 md:p-8 shadow-elegant">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-emerald/20 text-emerald grid place-items-center">
                    <ClipboardList className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">End-to-End Billing Cycle</div>
                    <div className="text-sm text-white/70">From charge entry to final payment</div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Charge entry & coding review",
                    "Eligibility verification & claim scrubbing",
                    "Submission, posting & denial follow-up",
                    "A/R recovery & transparent reporting",
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
                    <div className="mt-1 font-semibold text-sm">Fewer denials</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/55">Outcome</div>
                    <div className="mt-1 font-semibold text-sm">Faster cash flow</div>
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
                <span className="text-xs font-semibold">Signed BAAs · Secure PHI handling</span>
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
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-start">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Overview
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              What Are Medical Billing Services?
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Medical billing services cover the full financial process that happens after a patient receives
              care — the work required to turn a clinical encounter into an accurate insurance claim and,
              eventually, a payment.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              In practice, this means a medical billing company acts as the operational bridge between the care
              a provider delivers and the revenue that care generates. Done well, it reduces the time between
              service delivery and payment, minimizes errors that lead to denials, and gives a practice clear
              visibility into its financial performance.
            </p>
            <p className="mt-4 font-medium text-foreground leading-relaxed">
              This is the gap American Billing Solutions is built to close.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-border/60 bg-card p-6 md:p-8 shadow-card-soft">
              <h3 className="font-semibold text-lg mb-5">At a high level, services typically include:</h3>
              <ul className="space-y-4">
                {mbsWhatIncludes.map((item) => {
                  const [title, ...rest] = item.split(" — ");
                  return (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 text-emerald mt-0.5 shrink-0" />
                      <span>
                        <span className="font-semibold text-foreground">{title}</span>
                        {rest.length > 0 && (
                          <span className="text-muted-foreground"> — {rest.join(" — ")}</span>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProblemsSection() {
  return (
    <section className="py-20 md:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Challenges
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              The Problems Healthcare Providers Face
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Billing challenges rarely show up as one dramatic failure. They show up as a slow accumulation of
              small issues that, over time, add up to real financial strain.
            </p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mbsProblems.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 0.04}>
              <Card className="p-5 h-full rounded-2xl border-border/60 hover:shadow-elegant transition-shadow">
                <div className="h-9 w-9 rounded-xl bg-destructive/10 text-destructive grid place-items-center text-xs font-bold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-10 max-w-3xl text-muted-foreground leading-relaxed">
            None of these problems reflect the quality of care being provided. They reflect how difficult it has
            become to manage billing as a specialized, ever-changing discipline alongside the demands of running
            a practice.
          </p>
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
              Our Medical Billing Services Process
            </h2>
            <p className="mt-4 text-white/75 leading-relaxed">
              This isn&apos;t a one-time transaction per claim. It&apos;s a continuous cycle designed to catch
              problems early and recover revenue that would otherwise be lost to inattention.
            </p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mbsProcess.map((s, i) => (
            <Reveal key={s.step} delay={(i % 3) * 0.05}>
              <div className="rounded-2xl bg-white/10 border border-white/15 p-5 h-full hover:bg-white/15 transition-colors">
                <div className="text-2xl font-bold text-emerald">{s.step}</div>
                <h3 className="mt-3 font-semibold text-lg">{s.title}</h3>
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
    <section className="py-20 md:py-24" id="whats-included">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              What&apos;s Included
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              What&apos;s Included in Our Medical Billing Services
            </h2>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {mbsIncluded.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 0.04}>
              <Card className="p-6 h-full rounded-2xl border-border/60 hover:border-primary/35 hover:shadow-elegant transition-all flex flex-col">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-lg font-semibold hover:text-primary transition-colors inline-flex items-start gap-2"
                  >
                    {item.title}
                    <ArrowUpRight className="h-4 w-4 mt-1 shrink-0 opacity-60" />
                  </Link>
                ) : (
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                )}
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{item.desc}</p>
                <p className="mt-4 text-sm">
                  <span className="font-semibold text-primary">Business benefit:</span>{" "}
                  <span className="text-muted-foreground">{item.benefit}</span>
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  const icons = [HeartPulse, Users, ShieldCheck, FileSearch, Stethoscope, Sparkles, Building2];
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
          {mbsWhy.map((item, i) => {
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
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Specialties
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              Medical Billing for Different Specialties
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Billing accuracy depends heavily on specialty-specific knowledge — a code or modifier that&apos;s
              routine in one field can trigger a denial in another if documentation requirements aren&apos;t
              followed precisely. That&apos;s why our teams are trained by specialty, not solely by billing
              software.
            </p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mbsSpecialties.map((s, i) => (
            <Reveal key={s.href} delay={(i % 4) * 0.04}>
              <Link
                href={s.href}
                className="block rounded-2xl border border-border/60 bg-card p-5 h-full hover:border-primary/40 hover:shadow-elegant transition-all group"
              >
                <div className="font-semibold group-hover:text-primary transition-colors inline-flex items-center gap-1.5">
                  {s.title}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-50" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-10 max-w-3xl text-sm text-muted-foreground leading-relaxed">
            Each specialty carries its own documentation standards, payer expectations, and common denial
            triggers. Applying a generic billing approach across all of them is one of the most common reasons
            practices see avoidable denials.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function CompareSection() {
  return (
    <section className="py-20 md:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Comparison
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              Outsourced Medical Billing vs. In-House Billing
            </h2>
          </Reveal>
        </div>
        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-border/60 bg-card shadow-card-soft">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left font-semibold px-5 py-4 w-[18%]">Factor</th>
                  <th className="text-left font-semibold px-5 py-4 w-[41%]">In-House Billing</th>
                  <th className="text-left font-semibold px-5 py-4 w-[41%] bg-emerald/20">
                    Outsourced Medical Billing Partner
                  </th>
                </tr>
              </thead>
              <tbody>
                {mbsCompare.map((row, i) => (
                  <tr key={row.factor} className={i % 2 === 0 ? "bg-background" : "bg-secondary/30"}>
                    <td className="px-5 py-4 font-semibold align-top">{row.factor}</td>
                    <td className="px-5 py-4 text-muted-foreground align-top leading-relaxed">
                      {row.inHouse}
                    </td>
                    <td className="px-5 py-4 text-foreground align-top leading-relaxed border-l border-emerald/20">
                      {row.outsourced}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-8 max-w-3xl text-muted-foreground leading-relaxed">
            Neither model is inherently right for every practice — the decision depends on your size, growth
            plans, and how much administrative bandwidth you want to dedicate internally versus hand off to a
            specialized partner.
          </p>
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
              Benefits of Outsourcing Medical Billing
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {mbsBenefits.map((b, i) => (
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

function WhoWeHelpSection() {
  return (
    <section className="py-20 md:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Who We Help
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              Who We Help
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              American Billing Solutions provides medical billing services for a wide range of healthcare
              providers, including:
            </p>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mbsWhoWeHelp.map((w, i) => (
            <Reveal key={w.title} delay={(i % 5) * 0.04}>
              <Card className="p-6 rounded-2xl border-border/60 h-full">
                <h3 className="font-semibold text-lg">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-10 max-w-3xl text-muted-foreground leading-relaxed">
            Whatever the size or structure of your practice, the underlying goal is the same: reduce the
            administrative burden of billing while improving how much of your earned revenue is actually
            collected.
          </p>
        </Reveal>
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
          {mbsRelated.map((r, i) => (
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
        <p className="mt-8 text-sm text-muted-foreground">
          Explore our{" "}
          <Link href="/resources" className="text-primary font-semibold hover:underline">
            resource hub
          </Link>{" "}
          for billing guides and denial prevention tips.
        </p>
      </div>
    </section>
  );
}

function ResultsFramework() {
  return (
    <section className="py-20 md:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-10">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Results Framework
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display leading-tight">
              How We Measure Results
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We believe in showing real outcomes, not manufactured statistics. Below is the framework we use
              to evaluate and report results for practices we work with — client-specific figures will be added
              here as verified case studies become available.
            </p>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              label: "Challenge",
              text: "Verified client baseline — denial rate, A/R backlog, or administrative strain before engagement.",
            },
            {
              label: "Solution",
              text: "The specific services implemented and process changes made for that practice.",
            },
            {
              label: "Outcome",
              text: "Measurable, client-approved changes in denials, collection speed, or revenue recovery.",
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
          This section is intentionally structured as a placeholder. We do not publish estimated or invented
          performance figures — every result shown here will reflect verified, client-approved data.
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
          {mbsFaqs.map(([q, a], i) => (
            <AccordionItem
              key={q}
              value={`mbs-faq-${i}`}
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
