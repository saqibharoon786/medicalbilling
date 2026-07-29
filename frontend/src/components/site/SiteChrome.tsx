"use client";

import type { ReactNode } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PreFooterContactForm } from "@/components/site/PreFooterContactForm";
import { Toaster } from "@/components/ui/sonner";

/** Single client boundary for site chrome — avoids chunk/HMR breakage across layout imports. */
export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <PreFooterContactForm />
        <Footer />
      </div>
      <Toaster position="top-right" richColors />
    </>
  );
}
