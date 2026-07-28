import type { Metadata } from "next";
import { CareersPageContent } from "@/components/site/CareersPageContent";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the team modernizing US medical billing. Open roles in coding, AR, engineering, credentialing and client success.",
};

export default function CareersPage() {
  return <CareersPageContent />;
}
