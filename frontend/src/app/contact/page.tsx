import type { Metadata } from "next";
import { ContactPageContent } from "@/components/site/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk with a senior RCM strategist. Free 30-minute consultation, no obligation.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
