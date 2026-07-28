"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  ChevronRight,
  FileCheck2,
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
  homeFaqs,
  homeProblems,
  homeProcess,
  homeResources,
  homeResults,
  homeServices,
  homeSpecialties,
  homeTrust,
  homeWhy,
} from "./home-content";

export function HomePageContent() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ProblemSolutionSection />
      <ServicesOverviewSection />
      <MidCtaSecondary />
      <WhyChooseSection />
      <SpecialtySection />
      <MidCtaSpecialty />
      <ProcessSectionHome />
      <ResultsSection />
      <PrimaryCtaBlock />
      <ResourceHubSection />
      <FAQHomeSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
      <BackgroundGrid />
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28 grid lg:grid-cols-[1.15fr_0.95fr] gap-12 lg:gap-14 items-center">
        <div>
          <Reveal>
            <p className="text-sm md:text-base font-medium text-emerald/95 mb-5 max-w-xl leading-relaxed">
              The Medical Billing Partner Healthcare Providers Trust With Their Revenue
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.08] tracking-tight font-display">
              Expert Medical Billing Services Built to Recover Every Dollar You&apos;ve Earned
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-base md:text-lg text-white/80 max-w-2xl leading-relaxed">
              Claim denials, coding errors, and slow reimbursements don&apos;t just cost you money — they
              cost you time you should be spending on patients. American Billing Solutions manages your
              entire revenue cycle, from eligibility verification to final payment, with a dedicated team
              of certified billing specialists who know how to get claims paid the first time. Less
              administrative burden. Fewer denials. Faster, more predictable cash flow.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-emerald-gradient text-emerald-foreground hover:opacity-90 shadow-glow h-12 px-6">
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
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "HIPAA-Compliant Workflows",
                "Certified Medical Coders",
                "Specialty-Trained Billing Teams",
                "Transparent, Real-Time Reporting",
              ].map((label) => (
                <div key={label} className="flex items-center gap-2.5 text-sm text-white/90">
                  <CheckCircle2 className="h-4 w-4 text-emerald shrink-0" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} y={36}>
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-white/20 bg-white/5">
        <Image
          src="/hero-doctors.jpg"
          alt="Healthcare providers partnering with American Billing Solutions"
          width={1200}
          height={1408}
          className="w-full h-[480px] lg:h-[560px] object-cover"
          priority
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary/65 via-primary/15 to-transparent" />
        <div className="absolute top-5 left-5 flex items-center gap-2 rounded-full bg-white/95 text-foreground px-3 py-1.5 text-xs font-semibold shadow-card-soft">
          <span className="h-2 w-2 rounded-full bg-emerald animate-pulse" />
          Dedicated billing specialists
        </div>
      </div>

      <motion.div
        className="absolute -top-5 -right-3 sm:-right-6 glass-card rounded-2xl p-4 shadow-elegant bg-white/95 text-foreground w-56 hidden sm:block"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center gap-2 text-xs font-semibold text-primary">
          <ShieldCheck className="h-4 w-4" /> HIPAA-aligned workflows
        </div>
        <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
          Signed BAAs and secure handling of PHI at every stage.
        </p>
      </motion.div>

      <motion.div
        className="absolute -bottom-6 -left-3 sm:-left-6 glass-card rounded-2xl p-4 shadow-elegant bg-white/95 text-foreground w-60 hidden sm:block"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
      >
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald">
          <FileCheck2 className="h-4 w-4" /> Cleaner claims, clearer cash flow
        </div>
        <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
          Eligibility, coding review, and denial follow-up before revenue is lost.
        </p>
      </motion.div>
    </div>
  );
}

function TrustSection() {
  const icons = [ShieldCheck, BadgeCheck, Users, LineChart, LockKeyhole, Stethoscope];
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Trust & Authority
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              A Billing Team That Takes Compliance and Accuracy Seriously
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Healthcare revenue depends on getting the details right — and on protecting patient data
              every step of the way. Here&apos;s how we approach both:
            </p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {homeTrust.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={item.title} delay={(i % 6) * 0.04}>
                <Card className="p-6 h-full rounded-2xl border-border/60 hover:shadow-elegant transition-shadow">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary grid place-items-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={0.1}>
          <Link
            href="/why-choose-us"
            className="inline-flex items-center gap-1 mt-10 text-sm font-semibold text-primary hover:underline"
          >
            See how our compliance process works <ChevronRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function ProblemSolutionSection() {
  return (
    <section className="py-20 md:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 lg:gap-16">
        <Reveal>
          <Badge variant="outline" className="border-primary/30 text-primary mb-4">
            The Problem
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-display leading-tight">
            What&apos;s Actually Draining Your Revenue
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            If your practice is dealing with any of the following, you&apos;re not alone — and none of it
            is a reflection of the quality of care you provide:
          </p>
          <ul className="mt-8 space-y-4">
            {homeProblems.map((p) => (
              <li key={p.title} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-destructive shrink-0" />
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold text-foreground">{p.title}</span>{" "}
                  <span className="text-muted-foreground">{p.desc}</span>
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
            Each of these issues compounds over time. A denied claim that isn&apos;t appealed becomes lost
            revenue. A verification issue that isn&apos;t caught becomes a billing dispute with a patient.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-3xl bg-card border border-border/60 p-8 md:p-10 shadow-card-soft h-full">
            <Badge className="bg-emerald/15 text-emerald border-emerald/20 mb-4">How We Address It</Badge>
            <h3 className="text-2xl md:text-3xl font-bold font-display leading-tight">
              Prevention first — not cleanup after the fact
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              American Billing Solutions is structured around preventing these issues before they cost you
              revenue, not just cleaning up after them.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We verify insurance eligibility before the appointment. We scrub every claim for coding and
              documentation issues before submission. When a claim is denied, our team investigates the
              root cause and either corrects and resubmits it or files an appeal — and we track it until
              it&apos;s resolved, not just until it&apos;s resubmitted.
            </p>
            <p className="mt-4 text-foreground/90 font-medium leading-relaxed">
              The result is a revenue cycle where problems are caught early, claims move faster, and you
              spend less time managing billing and more time managing your practice.
            </p>
            <Button asChild className="mt-8 bg-emerald-gradient text-emerald-foreground hover:opacity-90">
              <Link href="/contact">
                Find Out What&apos;s Costing You Revenue <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServicesOverviewSection() {
  return (
    <section className="py-20 md:py-24" id="services">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Services
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              Medical billing and RCM services built around how practices actually operate
            </h2>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {homeServices.map((s, i) => (
            <Reveal key={s.href} delay={(i % 6) * 0.04}>
              <Card className="p-6 h-full rounded-2xl border-border/60 hover:border-primary/35 hover:shadow-elegant transition-all flex flex-col">
                <Link href={s.href} className="text-lg font-semibold text-foreground hover:text-primary transition-colors inline-flex items-start gap-2">
                  {s.title}
                  <ArrowUpRight className="h-4 w-4 mt-1 shrink-0 opacity-60" />
                </Link>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                <p className="mt-4 text-sm">
                  <span className="font-semibold text-primary">Business benefit:</span>{" "}
                  <span className="text-muted-foreground">{s.benefit}</span>
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MidCtaSecondary() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="rounded-2xl border border-border/60 bg-secondary/50 px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold font-display">Not Sure Which Services You Need?</h2>
              <p className="mt-2 text-muted-foreground">
                Every practice&apos;s billing challenges are different. Talk to a specialist about your
                specific situation before committing to anything.
              </p>
            </div>
            <Button asChild size="lg" variant="outline" className="border-primary/30 text-primary shrink-0">
              <Link href="/contact">Speak With a Billing Specialist</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhyChooseSection() {
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
        <div className="grid sm:grid-cols-2 gap-5">
          {homeWhy.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 0.04}>
              <div className="rounded-2xl bg-card border border-border/60 p-6 h-full">
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-emerald mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
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

function SpecialtySection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Specialty Billing
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              Specialty Billing Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Billing accuracy depends heavily on specialty-specific knowledge. A code that&apos;s routine
              in one field can trigger a denial in another if the documentation or modifier rules
              aren&apos;t followed correctly. That&apos;s why our teams are trained by specialty, not just
              by billing software.
            </p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {homeSpecialties.map((s, i) => (
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
        <div className="mt-8">
          <Link href="/specialties" className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1">
            View all specialties <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function MidCtaSpecialty() {
  return (
    <section className="pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="rounded-2xl bg-primary text-primary-foreground px-6 py-8 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
            <h2 className="text-xl md:text-2xl font-bold font-display max-w-xl">
              Billing for Your Specialty, Handled by People Who Understand It
            </h2>
            <Button asChild size="lg" className="bg-emerald-gradient text-emerald-foreground hover:opacity-90 shrink-0">
              <Link href="/contact">Ask About Your Specialty</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProcessSectionHome() {
  return (
    <section className="py-20 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <BackgroundGrid />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge className="bg-white/10 border border-white/20 text-white mb-4">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              How Our Process Works
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {homeProcess.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.05}>
              <div className="rounded-2xl bg-white/10 border border-white/15 p-5 h-full hover:bg-white/15 transition-colors">
                <div className="text-2xl font-bold text-emerald">{s.step}</div>
                <h3 className="mt-3 font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Button asChild size="lg" className="bg-emerald-gradient text-emerald-foreground hover:opacity-90">
            <Link href="/contact">
              Start With a Free Billing Audit <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ResultsSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Results & Value
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
              Outcomes you can see in your operations and your financials
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Working with a dedicated billing partner should produce outcomes you can actually see —
              without inflated claims or placeholder metrics.
            </p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {homeResults.map((item, i) => (
            <Reveal key={item.title} delay={(i % 5) * 0.04}>
              <Card className="p-6 rounded-2xl border-border/60 h-full">
                <CheckCircle2 className="h-5 w-5 text-emerald" />
                <h3 className="mt-4 font-semibold text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrimaryCtaBlock() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-hero-gradient text-primary-foreground p-10 md:p-16 shadow-elegant">
            <BackgroundGrid />
            <div className="relative max-w-3xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
                Find Out What Your Billing Process Is Actually Costing You
              </h2>
              <p className="mt-5 text-lg text-white/85 leading-relaxed">
                Most practices don&apos;t have a clear picture of how much revenue is sitting in denied
                claims, aging A/R, or coding errors — until someone takes a close look. A billing audit
                isn&apos;t a sales pitch; it&apos;s a straightforward review of your current claims and
                collections data, with a clear explanation of what&apos;s working and what isn&apos;t.
              </p>
              <Button asChild size="lg" className="mt-8 bg-emerald-gradient text-emerald-foreground hover:opacity-90 shadow-glow h-12">
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

function ResourceHubSection() {
  return (
    <section className="py-20 md:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-10">
          <Reveal>
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Resources
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display leading-tight">
              Learn More About Medical Billing and Revenue Cycle Management
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our{" "}
              <Link href="/resources" className="text-primary font-medium hover:underline">
                resource hub
              </Link>{" "}
              is built for practice managers, billing staff, and providers who want a clearer
              understanding of the billing process — not just a service to outsource it to.
            </p>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {homeResources.map((r, i) => (
            <Reveal key={r.href} delay={i * 0.05}>
              <Link
                href={r.href}
                className="block rounded-2xl border border-border/60 bg-card p-6 h-full hover:border-primary/40 hover:shadow-elegant transition-all"
              >
                <div className="font-semibold text-lg hover:text-primary inline-flex items-center gap-1.5">
                  {r.title}
                  <ArrowUpRight className="h-4 w-4 opacity-50" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Have questions about your billing process?{" "}
          <Link href="/contact" className="text-primary font-semibold hover:underline">
            Contact us
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

function FAQHomeSection() {
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
          {homeFaqs.map(([q, a], i) => (
            <AccordionItem
              key={q}
              value={`faq-${i}`}
              className="border border-border/60 rounded-2xl bg-card px-5 shadow-card-soft data-[state=open]:shadow-elegant transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                {q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
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
    </>
  );
}
