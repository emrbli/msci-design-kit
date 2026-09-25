import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const eventCardVariants = cva(
  "group/event-card flex h-full min-h-64 flex-col justify-between gap-8 rounded-3xl p-8 transition-colors",
  {
    variants: {
      tone: {
        turquoise: "bg-brand-turquoise text-brand-blue-deep",
        white: "bg-card text-card-foreground ring-1 ring-border",
        lavender: "bg-brand-lavender text-foreground",
      },
    },
    defaultVariants: {
      tone: "white",
    },
  }
);

interface EventCardProps extends VariantProps<typeof eventCardVariants> {
  title: string;
  date: string;
  kind?: string;
  href?: string;
  className?: string;
}

/** "Upcoming events" tile — title + date/kind, tone-switchable per MSCI's card row. */
function EventCard({ title, date, kind = "Virtual Event", href = "#", tone, className }: EventCardProps) {
  return (
    <Link
      href={href}
      data-slot="event-card"
      className={cn(eventCardVariants({ tone }), "outline-none focus-visible:ring-3 focus-visible:ring-ring/50", className)}
    >
      <h3 className="text-2xl leading-snug font-medium tracking-tight text-balance">{title}</h3>
      <p className="text-sm opacity-80">
        {date} <span aria-hidden>•</span> {kind}
      </p>
    </Link>
  );
}

export { EventCard, eventCardVariants };
