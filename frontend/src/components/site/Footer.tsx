"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { BrandLogo } from "./BrandLogo";
import { CONTACT_EMAIL, sendInquiry } from "@/lib/contact";
import {
  footerCompany,
  footerServices,
  footerResources,
  footerSupport,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "./nav";

export function Footer() {
  const [email, setEmail] = useState("");
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
        <div className="sm:col-span-2 lg:col-span-2 space-y-4">
          <BrandLogo size="footer" />
          <p className="text-sm opacity-80 max-w-md">
            Medical billing and revenue cycle support for U.S. healthcare providers — dedicated specialists,
            HIPAA-compliant workflows, and clear reporting so you can focus on patient care.
          </p>
          <div className="space-y-2 text-sm opacity-90">
            <a href={PHONE_TEL} className="flex items-center gap-2 hover:underline">
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2 hover:underline">
              <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>602 W Swann Ave #100, Tampa, FL 33609, United States</span>
            </div>
          </div>
          <div className="flex gap-2 pt-2">
            {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
              <button
                key={i}
                onClick={() => toast("Opening social profile…")}
                className="h-9 w-9 grid place-items-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Icon className="h-4 w-4" />
              </button>
            ))}
          </div>
        </div>

        <FooterCol title="Company" links={footerCompany} />
        <FooterCol title="Services" links={footerServices} />
        <FooterCol title="Resources" links={footerResources} />
        <FooterCol title="Support" links={footerSupport}>
          <div className="mt-6">
            <div className="text-sm font-semibold mb-2">Newsletter</div>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                if (!email.trim()) return;
                const result = await sendInquiry("Newsletter Subscription", {
                  Email: email.trim(),
                  Message: "Please add me to the American Billing Solutions newsletter.",
                  Source: "Website — Footer newsletter",
                });
                if (result.ok) {
                  toast.success("Subscribed!", {
                    description: `Details sent to ${CONTACT_EMAIL}`,
                  });
                } else if (result.method === "mailto") {
                  toast.message("Email app opened", {
                    description: `Please send so we receive it at ${CONTACT_EMAIL}`,
                  });
                } else {
                  toast.error("Could not subscribe", {
                    description: result.error || `Email ${CONTACT_EMAIL} directly.`,
                  });
                }
                setEmail("");
              }}
              className="flex gap-2"
            >
              <Input
                type="email"
                required
                placeholder="you@clinic.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 placeholder:text-white/50 text-white"
              />
              <Button type="submit" className="bg-emerald-gradient text-emerald-foreground">
                Join
              </Button>
            </form>
          </div>
        </FooterCol>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row justify-between gap-3 text-xs opacity-75">
          <div>© {new Date().getFullYear()} American Billing Solutions. All rights reserved.</div>
          <div>HIPAA · SOC 2 Type II · HITRUST-aligned</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
  children,
}: {
  title: string;
  links: { label: string; href: string }[];
  children?: React.ReactNode;
}) {
  return (
    <div>
      <div className="font-semibold mb-4">{title}</div>
      <ul className="space-y-2 text-sm opacity-85">
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link href={href} className="hover:opacity-100 hover:text-emerald transition-colors">
              {label}
            </Link>
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
}
