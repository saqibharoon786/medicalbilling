"use client";

import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, FileText, PlayCircle, ArrowRight } from "lucide-react";
import { CTASection } from "@/components/site/Sections";
import { toast } from "sonner";
import { CONTACT_EMAIL, emailUs } from "@/lib/contact";

const posts = [
  { tag: "Guide", icon: BookOpen, title: "The 2026 Denial Prevention Playbook", desc: "A field-tested framework for cutting denial rates below 5% within one quarter." },
  { tag: "Whitepaper", icon: FileText, title: "State of RCM in Small Practices", desc: "Benchmark report from 500+ US practices — collections, denial rates and days in AR by specialty." },
  { tag: "Webinar", icon: PlayCircle, title: "Prior Auth Automation That Actually Works", desc: "Live walkthrough of the workflow that clears 92% of auths in under 24 hours." },
  { tag: "Guide", icon: BookOpen, title: "Choosing a Billing Partner: 27 Questions to Ask", desc: "The definitive vendor evaluation checklist used by CFOs and administrators." },
  { tag: "Case Study", icon: FileText, title: "How a 12-Provider Cardiology Group Grew Revenue 34%", desc: "The 90-day transformation, step by step, from onboarding to first month's reporting." },
  { tag: "Tool", icon: Download, title: "Free Practice Revenue Health Calculator", desc: "Interactive spreadsheet — benchmark your KPIs against your specialty in 5 minutes." },
];

const hub = [
  { id: "cpt-codes", title: "CPT Codes", desc: "Common procedural terminology guides for accurate claim coding." },
  { id: "icd-10-codes", title: "ICD-10 Codes", desc: "Diagnosis code references and documentation tips." },
  { id: "hcpcs-codes", title: "HCPCS Codes", desc: "Supply, DME, and service code lookup resources." },
  { id: "modifiers", title: "Medical Billing Modifiers", desc: "Modifier guides that prevent denials and underpayments." },
  { id: "denial-codes", title: "Denial Codes", desc: "CARC/RARC explanations and appeal playbooks." },
  { id: "glossary", title: "Billing Glossary", desc: "Plain-language definitions for RCM terminology." },
  { id: "case-studies", title: "Case Studies", desc: "Real practice turnarounds and revenue wins." },
  { id: "whitepapers", title: "Whitepapers", desc: "In-depth research for CFOs and practice leaders." },
  { id: "downloads", title: "Downloads", desc: "Checklists, calculators, and templates you can use today." },
];

export function ResourcesPageContent() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Playbooks, benchmarks and tools"
        description="Field-tested guides distilled from 500+ practices and one million+ processed claims."
      />
      <section className="py-16 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8">
            <Badge variant="outline" className="border-primary/30 text-primary mb-3">Knowledge Hub</Badge>
            <h2 className="text-2xl md:text-3xl font-bold">Codes, modifiers & billing references</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {hub.map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="rounded-xl border border-border/60 p-4 bg-card scroll-mt-28"
              >
                <div className="font-semibold">{item.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(({ tag, icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.06}>
              <Card className="p-7 rounded-2xl border-border/60 h-full group hover:shadow-elegant hover:-translate-y-1 transition-all">
                <div className="flex items-center justify-between">
                  <div className="h-11 w-11 rounded-xl bg-primary-gradient grid place-items-center shadow-card-soft">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <Badge variant="outline" className="border-emerald/40 text-emerald">
                    {tag}
                  </Badge>
                </div>
                <div className="mt-5 font-semibold text-lg leading-snug">{title}</div>
                <div className="mt-2 text-sm text-muted-foreground">{desc}</div>
                <Button
                  variant="ghost"
                  onClick={() => {
                    emailUs(`Resource Request — ${title}`, `Hi ABS team,\n\nPlease send: ${title}\n\nName:\nEmail:\n`);
                    toast.success("Opening email…", { description: `Send to ${CONTACT_EMAIL}` });
                  }}
                  className="mt-5 -ml-3 text-primary hover:text-primary hover:bg-primary/5"
                >
                  Get resource <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-14">
          <Link href="/faq">
            <Button variant="outline" className="border-primary/30 text-primary">
              Read the FAQ instead
            </Button>
          </Link>
        </div>
      </section>
      <CTASection />
    </>
  );
}
