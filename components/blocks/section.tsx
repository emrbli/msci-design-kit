import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Container } from "./container";

const sectionVariants = cva("py-16 lg:py-24", {
  variants: {
    tone: {
      white: "bg-background text-foreground",
      lavender: "bg-brand-lavender text-foreground",
      ink: "bg-brand-ink text-background",
      primary: "bg-primary text-primary-foreground",
    },
  },
  defaultVariants: {
    tone: "white",
  },
});

interface SectionProps
  extends React.ComponentProps<"section">,
    VariantProps<typeof sectionVariants> {
  contained?: boolean;
}

/** Full-bleed page section with an MSCI-style tone (white / lavender / ink / primary). */
function Section({ className, tone, contained = true, children, ...props }: SectionProps) {
  return (
    <section data-slot="section" className={cn(sectionVariants({ tone }), className)} {...props}>
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}

export { Section, sectionVariants };
