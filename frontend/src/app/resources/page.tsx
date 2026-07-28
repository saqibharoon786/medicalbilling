import type { Metadata } from "next";
import { ResourcesPageContent } from "@/components/site/ResourcesPageContent";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides, whitepapers, webinars and tools to help medical practices optimize their revenue cycle.",
};

export default function ResourcesPage() {
  return <ResourcesPageContent />;
}
