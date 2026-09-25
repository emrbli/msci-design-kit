import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaBannerProps {
  eyebrow?: string;
  title: string;
  ctaLabel: string;
  href?: string;
  className?: string;
}

/** Solid brand-blue banner with a white pill CTA (e.g. hero's "Read the report"). */
function CtaBanner({ eyebrow, title, ctaLabel, href = "#", className }: CtaBannerProps) {
  return (
    <div
      data-slot="cta-banner"
      className={cn(
        "flex min-h-80 flex-col justify-end gap-4 rounded-3xl bg-primary p-8 text-primary-foreground",
        className
      )}
    >
      {eyebrow && <p className="text-xs font-medium tracking-wide text-primary-foreground/70 uppercase">{eyebrow}</p>}
      <h3 className="max-w-md text-2xl leading-snug font-medium tracking-tight text-balance">{title}</h3>
      <Button asChild variant="secondary" className="w-fit">
        <a href={href}>{ctaLabel}</a>
      </Button>
    </div>
  );
}

export { CtaBanner };
