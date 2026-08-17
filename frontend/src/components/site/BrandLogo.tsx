import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Compact header mark vs fuller footer mark */
  size?: "header" | "footer";
};

const LOGO_SRC = "/abs-logo.jpg";
const LOGO_WIDTH = 1024;
const LOGO_HEIGHT = 479;

export function BrandLogo({ className, size = "header" }: BrandLogoProps) {
  const isFooter = size === "footer";

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center shrink-0", className)}
      aria-label="American Billing Solutions — Home"
    >
      <Image
        src={LOGO_SRC}
        alt="American Billing Solutions — Accurate. Efficient. Reliable."
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        priority={size === "header"}
        className={cn(
          "w-auto object-contain object-left select-none",
          size === "header" && "h-[44px] sm:h-[50px] md:h-[56px] max-w-[min(75vw,270px)] sm:max-w-[300px] md:max-w-[320px]",
          isFooter && "h-[44px] md:h-[50px] max-w-[260px] md:max-w-[280px] brightness-0 invert",
        )}
      />
    </Link>
  );
}
