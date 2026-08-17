import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Compact header mark vs fuller footer mark */
  size?: "header" | "footer";
};

export function BrandLogo({ className, size = "header" }: BrandLogoProps) {
  const heights = size === "header" ? "h-[58px] md:h-[70px]" : "h-[64px] md:h-[78px]";

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center shrink-0 overflow-visible",
        // Kill any accidental white plate behind the mark
        "bg-transparent !shadow-none !border-0 !ring-0 !outline-none",
        className,
      )}
      aria-label="American Billing Solutions — Home"
    >
      <img
        src="/abs-logo-clear.png"
        alt="American Billing Solutions"
        width={867}
        height={473}
        decoding="async"
        className={cn(
          heights,
          "w-auto max-w-[min(55vw,340px)] md:max-w-[380px]",
          "object-contain object-left select-none",
          "bg-transparent shadow-none border-0 outline-none ring-0 rounded-none",
          // On light header: keep original colors; in dark mode: invert to white
          size === "header" && "mix-blend-multiply dark:mix-blend-normal dark:brightness-0 dark:invert",
          // Footer: make the logo solid white for excellent contrast on the dark navy background
          size === "footer" && "brightness-0 invert drop-shadow-[0_1px_8px_rgba(255,255,255,0.15)]",
        )}
      />
    </Link>
  );
}

