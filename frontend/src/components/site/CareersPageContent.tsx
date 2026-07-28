"use client";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, ArrowRight, Users, HeartPulse, GraduationCap, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { CONTACT_EMAIL, emailUs } from "@/lib/contact";

const roles = [
  { title: "Senior Medical Coder (AAPC / AHIMA)", team: "Coding", location: "Remote · US", type: "Full time" },
  { title: "AR Recovery Specialist", team: "Revenue Operations", location: "Austin, TX (Hybrid)", type: "Full time" },
  { title: "Denial Management Analyst", team: "Revenue Operations", location: "Remote · US", type: "Full time" },
  { title: "Client Success Manager", team: "Account Management", location: "Chicago, IL", type: "Full time" },
  { title: "Credentialing Specialist", team: "Provider Enrollment", location: "Remote · US", type: "Full time" },
  { title: "Product Designer, Reporting", team: "Product & Design", location: "New York, NY", type: "Full time" },
  { title: "Software Engineer, Integrations", team: "Engineering", location: "Remote · US", type: "Full time" },
  { title: "Virtual Medical Assistant", team: "Virtual Assistants", location: "Remote · US", type: "Full or part time" },
];

const perks = [
  { icon: HeartPulse, title: "Full health, dental & vision", desc: "100% employer paid premiums for you and 75% for dependents." },
  { icon: Users, title: "Truly flexible remote work", desc: "Work where you focus. Two annual all-company gatherings." },
  { icon: GraduationCap, title: "Certification stipend", desc: "$2,500/year for AAPC, AHIMA, HFMA and continuing education." },
  { icon: Sparkles, title: "Equity in the company", desc: "Every full time hire receives meaningful equity." },
];

export function CareersPageContent() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Do the best work of your career, in healthcare"
        description="Join a mission-driven team modernizing the back office of US medicine — so physicians can spend more time with patients."
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {perks.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.05}>
                <Card className="p-6 rounded-2xl border-border/60 h-full">
                  <div className="h-11 w-11 rounded-xl bg-emerald/15 grid place-items-center">
                    <Icon className="h-5 w-5 text-emerald" />
                  </div>
                  <div className="mt-4 font-semibold">{title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{desc}</div>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Open positions</h2>
          </Reveal>
          <div className="grid gap-3">
            {roles.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.04}>
                <Card className="p-5 rounded-2xl border-border/60 hover:shadow-elegant hover:border-primary/40 transition-all flex flex-wrap items-center gap-4 justify-between group">
                  <div>
                    <div className="font-semibold text-lg group-hover:text-primary transition-colors">{r.title}</div>
                    <div className="mt-1 flex flex-wrap gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Briefcase className="h-3.5 w-3.5" /> {r.team}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" /> {r.location}
                      </span>
                      <Badge variant="outline" className="text-[10px]">
                        {r.type}
                      </Badge>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => {
                      emailUs(
                        `Job Application — ${r.title}`,
                        `Hi ABS team,\n\nI would like to apply for: ${r.title}\n\nName:\nPhone:\nEmail:\nLocation:\nResume / LinkedIn:\n\nBrief intro:\n`,
                      );
                      toast.success("Opening email…", {
                        description: `Send application to ${CONTACT_EMAIL}`,
                      });
                    }}
                    className="border-primary/30 text-primary"
                  >
                    Apply <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
