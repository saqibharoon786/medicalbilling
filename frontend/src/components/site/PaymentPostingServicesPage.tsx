"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  DollarSign,
  FileText,
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
  ppBenefits,
  ppChallenges,
  ppCompare,
  ppFaqs,
  ppIncluded,
  ppProcess,
  ppRelated,
  ppSpecialties,
  ppTimeline,
  ppWhy,
  ppWhyMatters,
  ppWhyOutsource,
} from "./payment-posting-content";

export function PaymentPostingServicesPage() {
  return (
    <>
      <Hero />
      <WhatAreSection />
      <WhyMattersSection />
      <ChallengesSection />
      <ProcessSection />
      <IncludedSection />
      <BenefitsSection />
      <WhySection />
      <SpecialtiesSection />
      <RelatedSection />
      <CompareSection />
      <WhyOutsourceSection />
      <TimelineSection />
      <PrimaryCta />
      <FaqSection />
    </>
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
            <li className="text-white font-medium">Payment Posting Services</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-14 items-center">
          <div>
            <Reveal>
              <p className="text-sm md:text-base font-medium text-emerald/95 mb-5 max-w-xl leading-relaxed">
                Accurate Payment Posting for U.S. Healthcare Providers
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-4xl md:text-5xl lg:text-[3.05rem] font-bold leading-[1.08] tracking-tight font-display">
                Payment Posting Services That Keep Your Revenue Cycle Honest
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-base md:text-lg text-white/80 max-w-2xl leading-relaxed">
                Every payment your practice receives tells you something — what was paid, what was adjusted, what&apos;s
                still owed, and whether it matches what was actually billed. When payment posting is inconsistent or
                delayed, that information gets lost, and so does your ability to catch underpayments, denials, and
                patient balances before they become bigger problems. American Billing Solutions provides accurate,
                timely payment posting for healthcare providers across the United States, reconciling every ERA, EOB,
                and patient payment against what was billed so your financial records reflect reality, not guesswork.
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
                  <Link href="/contact">Talk to an Expert</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} y={28}>
            <div className="relative">
              <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-sm p-6 md:p-8 shadow-elegant">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-emerald/20 text-emerald grid place-items-center">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Accurate Reconciliation</div>
                    <div className="text-sm text-white/70">ERA · EOB · Patient Payments</div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Insurance payment posting",
                    "Patient payment posting",
                    "Contract verification",
                    "Underpayment identification",
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
            What Are Payment Posting Services?
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-3xl">
            <strong className="text-foreground">Payment posting</strong> is the process of recording payments
            received from insurance payers and patients into a practice&apos;s billing system, and reconciling those
            payments against what was originally billed. It&apos;s often treated as a back-office bookkeeping task,
            but it&apos;s actually one of the most information-rich steps in the entire revenue cycle — because
            it&apos;s where you find out whether your billing actually worked.
          </p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Insurance Payment Posting",
              desc: "Insurance payment posting records the amount a payer has paid on a claim, along with any adjustments, denials, or patient responsibility identified in the payer's response.",
            },
            {
              title: "Patient Payment Posting",
              desc: "Patient payment posting records payments made directly by patients — copays collected at the time of service, payments toward a statement balance, or payment plan installments.",
            },
            {
              title: "ERA Posting",
              desc: "An ERA (Electronic Remittance Advice) is the electronic version of a payer's payment explanation, and ERA posting is the process of importing and reconciling that data into the billing system.",
            },
            {
              title: "EOB Posting",
              desc: "An EOB (Explanation of Benefits) is the paper or PDF equivalent of an ERA, often used when a payer doesn't support electronic remittance for a particular claim.",
            },
            {
              title: "Manual Posting",
              desc: "Manual posting refers to entering payment information by hand, typically required when electronic remittance isn't available. It's slower and carries more risk of data entry error.",
            },
            {
              title: "Electronic Posting",
              desc: "Electronic posting uses ERA data to post payments automatically or semi-automatically, reducing manual entry and the errors that come with it.",
            },
            {
              title: "Adjustment Posting",
              desc: "Adjustments — contractual write-offs, denials, and other reductions from the billed amount — need to be posted accurately alongside the payment itself.",
            },
            {
              title: "Payment Reconciliation",
              desc: "Reconciliation is the step where posted payments are checked against the original claim to confirm the numbers actually match — the payment, the adjustment, and the patient responsibility.",
            },
            {
              title: "Revenue Impact",
              desc: "Payment posting doesn't generate revenue directly, but it's the process that reveals whether the revenue you expected is actually the revenue you received.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={(i % 9) * 0.03}>
              <Card className="p-5 h-full rounded-2xl border-border/60">
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
              Why Accurate Payment Posting Matters
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ppWhyMatters.map((item, i) => (
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
              Common Payment Posting Problems
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ppChallenges.map((c, i) => (
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
              <div className="font-semibold">A Real Business Scenario</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Consider a practice that receives a payment for a claim, but the adjustment code applied during posting
                doesn&apos;t match the actual contracted allowable. Posted at face value, the claim looks fully resolved
                — but a portion of the earned revenue was never collected. Without careful reconciliation against the
                contracted rate, that gap can persist across every similar claim from that payer, quietly accumulating
                over months.
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
              Our Payment Posting Process
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {ppProcess.map((s, i) => (
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
              What&apos;s Included in Our Payment Posting Services
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ppIncluded.map((item, i) => (
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

function BenefitsSection() {
  return (
    <section className="py-20 md:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Benefits
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">Benefits</h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ppBenefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 6) * 0.03}>
              <div className="rounded-2xl border border-border/60 bg-card p-5 h-full">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm">{b.title}</h3>
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
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              Why American Billing Solutions
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ppWhy.map((item, i) => {
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
    <section className="py-20 md:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-10">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Specialties
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display leading-tight">
              Industries and Specialties Served
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {ppSpecialties.map((item, i) => (
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
            <h2 className="text-3xl md:text-4xl font-bold font-display leading-tight">
              Related Revenue Cycle Services
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Payment posting works best as part of a connected revenue cycle process. Explore related services:
            </p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ppRelated.map((r, i) => (
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
    <section className="py-20 md:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Comparison
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              In-House vs. Outsourced Payment Posting
            </h2>
          </Reveal>
        </div>
        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-border/60 bg-card shadow-card-soft">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left font-semibold px-5 py-4 w-[18%]">Factor</th>
                  <th className="text-left font-semibold px-5 py-4 w-[41%]">In-House Payment Posting</th>
                  <th className="text-left font-semibold px-5 py-4 w-[41%] bg-emerald/20">
                    Outsourced Payment Posting
                  </th>
                </tr>
              </thead>
              <tbody>
                {ppCompare.map((row, i) => (
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
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Why Outsource
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              Why Outsource Payment Posting
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ppWhyOutsource.map((item, i) => (
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

function TimelineSection() {
  return (
    <section className="py-20 md:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Process Timeline
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              Process Timeline
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ppTimeline.map((s, i) => (
            <Reveal key={s.step} delay={(i % 6) * 0.04}>
              <div className="rounded-2xl border border-border/60 bg-card p-5 h-full">
                <div className="text-xs font-bold text-primary uppercase tracking-wider">{s.step}</div>
                <h3 className="mt-2 font-semibold">{s.desc}</h3>
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
                Payment posting is where you find out whether your billing is actually working — or where quiet
                underpayments and unresolved discrepancies have been accumulating without anyone noticing. A free billing
                audit gives you a clear, no-obligation look at your current posting and reconciliation practices, with a
                straightforward explanation of what&apos;s accurate, what&apos;s exposed, and what a more consistent
                process could recover.
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
                  <Link href="/contact">Talk to an Expert</Link>
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
          {ppFaqs.map(([q, a], i) => (
            <AccordionItem
              key={q}
              value={`pp-faq-${i}`}
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
