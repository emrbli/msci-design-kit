import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroAction {
  label: string;
  href?: string;
  variant?: "default" | "outline" | "secondary";
}

interface HeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: HeroAction[];
  className?: string;
}

/** Full-bleed dark hero with a large tight-tracking headline and pill CTAs. */
function Hero({ eyebrow, title, description, actions = [], className }: HeroProps) {
  return (
    <section data-slot="hero" className={cn("bg-brand-ink text-background", className)}>
      <div className="page-container flex min-h-[28rem] flex-col justify-end gap-6 py-16 lg:py-24">
        {eyebrow && <p className="text-sm font-medium tracking-wide text-background/70 uppercase">{eyebrow}</p>}
        <h1 className="max-w-3xl text-4xl leading-[1.05] font-medium tracking-tight text-balance lg:text-6xl">
          {title}
        </h1>
        {description && <p className="max-w-xl text-lg text-background/75">{description}</p>}
        {actions.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-2">
            {actions.map((action) => (
              <Button
                key={action.label}
                asChild
                variant={action.variant ?? "outline"}
                size="lg"
                className={action.variant === "outline" || !action.variant ? "border-background/60 text-background hover:border-background hover:bg-background/10" : undefined}
              >
                <a href={action.href ?? "#"}>{action.label}</a>
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export { Hero };
