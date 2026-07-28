import { Badge } from "@/components/ui/badge";
import { Reveal } from "./Reveal";

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 45%, transparent 80%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 py-24 lg:py-32 text-center">
        <Reveal>
          <Badge className="bg-white/10 border border-white/20 text-white mb-5">{eyebrow}</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">{title}</h1>
          {description && <p className="mt-5 text-lg md:text-xl text-white/80 max-w-3xl mx-auto">{description}</p>}
        </Reveal>
      </div>
    </section>
  );
}
