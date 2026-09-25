import * as React from "react";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  icon?: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
}

/** Simple responsive grid of icon + title + description tiles ("Featured solutions"). */
function FeatureGrid({ features, columns = 3, className }: FeatureGridProps) {
  return (
    <div
      data-slot="feature-grid"
      className={cn(
        "grid grid-cols-1 gap-8 sm:grid-cols-2",
        columns === 3 && "lg:grid-cols-3",
        columns === 4 && "lg:grid-cols-4",
        className
      )}
    >
      {features.map((feature) => (
        <div key={feature.title} className="flex flex-col gap-3">
          {feature.icon && (
            <span className="flex size-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <feature.icon className="size-5" aria-hidden />
            </span>
          )}
          <h3 className="text-lg font-medium tracking-tight">{feature.title}</h3>
          <p className="text-sm text-muted-foreground">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

export { FeatureGrid };
