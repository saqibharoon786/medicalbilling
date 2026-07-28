"use client";

import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { CONTACT_EMAIL, sendInquiry } from "@/lib/contact";

export function ContactPageContent() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [specialty, setSpecialty] = useState("");
  const [contactTime, setContactTime] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const fields = {
      "Full name": String(data.get("fullName") || "").trim(),
      "Practice name": String(data.get("practiceName") || "").trim(),
      Specialty: specialty || "Not specified",
      "Preferred contact time": contactTime || "Anytime",
      Email: String(data.get("email") || "").trim(),
      Phone: String(data.get("phone") || "").trim(),
      Message: String(data.get("message") || "").trim(),
      Source: "Website — Contact page",
    };

    if (!fields["Full name"] || !fields.Email) {
      toast.error("Please fill in name and email.");
      return;
    }

    setLoading(true);

    const result = await sendInquiry("Website Contact — Free Consultation", fields);

    if (result.ok) {
      toast.success("Message sent!", {
        description: `Inquiry details delivered to ${CONTACT_EMAIL}`,
      });
      setSent(true);
      form.reset();
      setSpecialty("");
      setContactTime("");
    } else if (result.method === "mailto") {
      toast.message("Email app opened", {
        description: `Please send so we receive it at ${CONTACT_EMAIL}`,
      });
      setSent(true);
      form.reset();
      setSpecialty("");
      setContactTime("");
    } else {
      toast.error("Could not send inquiry", {
        description: result.error || `Please email ${CONTACT_EMAIL} directly.`,
      });
    }

    setLoading(false);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk with a senior RCM strategist"
        description="Free 30-minute consultation. We'll audit a sample of claims and share a written revenue opportunity report — no obligation."
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.2fr_1fr] gap-10">
          <Reveal>
            <Card className="p-8 rounded-3xl border-border/60 shadow-card-soft">
              <form onSubmit={onSubmit} className="grid gap-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Full name" required>
                    <Input name="fullName" required placeholder="Enter your name" />
                  </Field>
                  <Field label="Practice name" required>
                    <Input name="practiceName" required placeholder="Enter your practice name" />
                  </Field>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Specialty">
                    <Select value={specialty} onValueChange={setSpecialty}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select specialty" />
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          "Family Medicine",
                          "Internal Medicine",
                          "Cardiology",
                          "Orthopedics",
                          "Psychiatry",
                          "Neurology",
                          "Dermatology",
                          "Radiology",
                          "Urgent Care",
                          "Pediatrics",
                          "Other",
                        ].map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field label="Preferred contact time">
                    <Select value={contactTime} onValueChange={setContactTime}>
                      <SelectTrigger>
                        <SelectValue placeholder="Anytime" />
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          "Morning (8am–11am)",
                          "Midday (11am–2pm)",
                          "Afternoon (2pm–5pm)",
                          "Evening (5pm–8pm)",
                        ].map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Email" required>
                    <Input name="email" required type="email" placeholder="Enter your email" />
                  </Field>
                  <Field label="Phone">
                    <Input name="phone" type="tel" placeholder="Enter your phone" />
                  </Field>
                </div>
                <Field label="How can we help?">
                  <Textarea name="message" rows={5} placeholder="Enter your message" />
                </Field>
                <Button
                  type="submit"
                  disabled={loading}
                  size="lg"
                  className="bg-emerald-gradient text-emerald-foreground hover:opacity-90 shadow-glow h-12"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…
                    </>
                  ) : sent ? (
                    <>
                      <CheckCircle2 className="mr-2 h-4 w-4" /> Sent — send another
                    </>
                  ) : (
                    "Request Free Consultation"
                  )}
                </Button>
                <p className="text-xs text-muted-foreground">
                  Submissions go to{" "}
                  <a className="underline text-primary" href={`mailto:${CONTACT_EMAIL}`}>
                    {CONTACT_EMAIL}
                  </a>
                  . By submitting you agree to our privacy policy.
                </p>
              </form>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5">
              <InfoCard icon={Phone} title="Talk to us" body="+1 (800) 555-0142" hint="Mon–Fri 8am–8pm EST" />
              <InfoCard
                icon={Mail}
                title="Email us"
                body={CONTACT_EMAIL}
                hint="Responses within 2 hours"
                href={`mailto:${CONTACT_EMAIL}`}
              />
              <InfoCard icon={MapPin} title="Headquarters" body="200 Congress Ave, Suite 900" hint="Austin, TX 78701" />
              <InfoCard icon={Clock} title="Support" body="24 / 7 for active clients" hint="Named account manager" />
              <Card className="rounded-2xl overflow-hidden border-border/60 shadow-card-soft">
                <div className="relative h-64 bg-secondary">
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="text-center">
                      <div className="mx-auto h-12 w-12 rounded-full bg-primary grid place-items-center shadow-glow">
                        <MapPin className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="mt-3 font-semibold">Austin, TX Headquarters</div>
                      <div className="text-sm text-muted-foreground">30.2672° N, 97.7431° W</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-1.5">
      <Label className="text-sm">
        {label}
        {required && <span className="text-destructive"> *</span>}
      </Label>
      {children}
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  body,
  hint,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
  hint: string;
  href?: string;
}) {
  return (
    <Card className="p-5 rounded-2xl border-border/60 flex gap-4 items-start hover:shadow-elegant transition-all">
      <div className="h-11 w-11 rounded-xl bg-primary/10 grid place-items-center shrink-0">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{title}</div>
        {href ? (
          <a href={href} className="mt-0.5 font-semibold break-all hover:text-primary hover:underline">
            {body}
          </a>
        ) : (
          <div className="mt-0.5 font-semibold">{body}</div>
        )}
        <div className="text-xs text-muted-foreground mt-0.5">{hint}</div>
      </div>
    </Card>
  );
}
