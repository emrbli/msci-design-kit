import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PromoCardProps {
  eyebrow?: string;
  title: string;
  ctaLabel: string;
  href?: string;
  imageSrc?: string;
  className?: string;
}

/** Dark image-backed promo tile with an outline pill CTA (e.g. hero's "See MSCI's approach"). */
function PromoCard({ eyebrow, title, ctaLabel, href = "#", imageSrc, className }: PromoCardProps) {
  return (
    <div
      data-slot="promo-card"
      className={cn(
        "relative flex min-h-80 flex-col justify-end overflow-hidden rounded-3xl bg-brand-ink p-8 text-background",
        className
      )}
    >
      {imageSrc && (
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover opacity-70"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="relative flex flex-col items-start gap-4">
        {eyebrow && <p className="text-xs font-medium tracking-wide text-background/70 uppercase">{eyebrow}</p>}
        <h3 className="max-w-md text-2xl leading-snug font-medium tracking-tight text-balance">{title}</h3>
        <Button asChild variant="outline" className="border-background/60 text-background hover:border-background hover:bg-background/10">
          <a href={href}>{ctaLabel}</a>
        </Button>
      </div>
    </div>
  );
}

export { PromoCard };
