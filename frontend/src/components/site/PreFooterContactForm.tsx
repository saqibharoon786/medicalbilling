"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  Phone,
  Send,
  ShieldCheck,
  User,
  Building2,
  MessageSquare,
} from "lucide-react";
import { toast } from "sonner";
import { CONTACT_EMAIL, sendInquiry } from "@/lib/contact";
import { cn } from "@/lib/utils";

const fieldClass =
  "h-12 rounded-xl border-border/80 bg-background pl-11 pr-4 text-sm shadow-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary transition-colors";

/** Site-wide inquiry form — placed just above the footer on every page. */
export function PreFooterContactForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const fields = {
      Name: String(data.get("name") || "").trim(),
      Email: String(data.get("email") || "").trim(),
      Phone: String(data.get("phone") || "").trim(),
      Practice: String(data.get("practice") || "").trim(),
      Message: String(data.get("message") || "").trim(),
      Source: "Website — Pre-footer contact form",
    };

    if (!fields.Name || !fields.Email || !fields.Message) {
      toast.error("Please fill in name, email, and message.");
      return;
    }

    setLoading(true);

    const result = await sendInquiry("Website Inquiry — American Billing Solutions", fields);

    if (result.ok) {
      setSent(true);
      form.reset();
      toast.success("Message sent!", {
        description: `Inquiry details delivered to ${CONTACT_EMAIL}`,
      });
    } else if (result.method === "mailto") {
      toast.message("Email app opened", {
        description: `Please send so we receive it at ${CONTACT_EMAIL}`,
      });
      setSent(true);
      form.reset();
    } else {
      toast.error("Could not send inquiry", {
        description: result.error || `Please email ${CONTACT_EMAIL} directly.`,
      });
    }

    setLoading(false);
  };

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-hero-gradient opacity-[0.97]"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-emerald/25 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid lg:grid-cols-[0.95fr_1.15fr] gap-10 lg:gap-12 items-center">
          {/* Left copy */}
          <div className="text-primary-foreground">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3.5 py-1.5 text-xs font-semibold tracking-wide backdrop-blur mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" />
              Free consultation · No obligation
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.15]">
              Let&apos;s talk about your billing goals
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/80 max-w-md leading-relaxed">
              Share a few details and our team will get back to you within 2 business hours.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                { icon: Clock, text: "Response within 2 business hours" },
                { icon: ShieldCheck, text: "HIPAA-aware · Your data stays private" },
                { icon: Mail, text: CONTACT_EMAIL },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-white/90">
                  <span className="h-10 w-10 shrink-0 rounded-xl bg-white/10 border border-white/15 grid place-items-center">
                    <Icon className="h-4 w-4 text-emerald" />
                  </span>
                  <span className="break-all font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form card */}
          <form
            onSubmit={onSubmit}
            className="rounded-3xl bg-card text-card-foreground p-6 sm:p-8 md:p-9 shadow-elegant border border-white/20 grid gap-5"
          >
            <div>
              <h3 className="text-xl font-bold tracking-tight">Send us a message</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill out the form below — we&apos;ll take it from there.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                id="pf-name"
                label="Full name"
                required
                icon={User}
              >
                <Input
                  id="pf-name"
                  name="name"
                  required
                  placeholder="Enter your name"
                  autoComplete="name"
                  className={fieldClass}
                />
              </Field>
              <Field
                id="pf-email"
                label="Email address"
                required
                icon={Mail}
              >
                <Input
                  id="pf-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  autoComplete="email"
                  className={fieldClass}
                />
              </Field>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field id="pf-phone" label="Phone number" icon={Phone}>
                <Input
                  id="pf-phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone"
                  autoComplete="tel"
                  className={fieldClass}
                />
              </Field>
              <Field id="pf-practice" label="Practice name" icon={Building2}>
                <Input
                  id="pf-practice"
                  name="practice"
                  placeholder="Enter your practice name"
                  className={fieldClass}
                />
              </Field>
            </div>

            <Field id="pf-message" label="Your message" required icon={MessageSquare} topIcon>
              <Textarea
                id="pf-message"
                name="message"
                required
                rows={4}
                placeholder="Enter your message"
                className={cn(
                  "min-h-[120px] rounded-xl border-border/80 bg-background pl-11 pr-4 py-3 text-sm shadow-none resize-y",
                  "focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary",
                )}
              />
            </Field>

            <Button
              type="submit"
              disabled={loading}
              size="lg"
              className="w-full h-12 rounded-xl bg-emerald-gradient text-emerald-foreground hover:opacity-90 shadow-glow text-base font-semibold"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…
                </>
              ) : sent ? (
                <>
                  <CheckCircle2 className="mr-2 h-4 w-4" /> Message sent — send another
                </>
              ) : (
                <>
                  Submit form <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>

            <p className="text-center text-xs text-muted-foreground leading-relaxed">
              Your message goes to{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary font-medium hover:underline">
                {CONTACT_EMAIL}
              </a>
              . We never share your information.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  required,
  icon: Icon,
  children,
  topIcon,
}: {
  id: string;
  label: string;
  required?: boolean;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  topIcon?: boolean;
}) {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={id} className="text-sm font-medium text-foreground/90">
        {label}
        {required && <span className="text-destructive"> *</span>}
      </Label>
      <div className="relative">
        <Icon
          className={cn(
            "pointer-events-none absolute left-3.5 h-4 w-4 text-muted-foreground",
            topIcon ? "top-3.5" : "top-1/2 -translate-y-1/2",
          )}
        />
        {children}
      </div>
    </div>
  );
}
