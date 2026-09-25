"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const backgrounds = [
  { key: "white", label: "White", className: "bg-background" },
  { key: "lavender", label: "Lavender", className: "bg-brand-lavender" },
  { key: "ink", label: "Ink", className: "bg-brand-ink" },
] as const;

const widths = [
  { key: "mobile", label: "Mobile", className: "max-w-sm" },
  { key: "tablet", label: "Tablet", className: "max-w-2xl" },
  { key: "desktop", label: "Desktop", className: "max-w-none" },
] as const;

type BgKey = (typeof backgrounds)[number]["key"];
type WidthKey = (typeof widths)[number]["key"];

/** Live preview frame for a story: background + viewport-width toggles. */
function StoryCanvas({ children, className }: { children: React.ReactNode; className?: string }) {
  const [bg, setBg] = React.useState<BgKey>("white");
  const [width, setWidth] = React.useState<WidthKey>("desktop");

  const activeBg = backgrounds.find((b) => b.key === bg)!;
  const activeWidth = widths.find((w) => w.key === width)!;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex items-center gap-1 rounded-full border p-1">
          {backgrounds.map((b) => (
            <button
              key={b.key}
              type="button"
              onClick={() => setBg(b.key)}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-medium transition-colors",
                bg === b.key ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {b.label}
            </button>
          ))}
        </div>
        <div className="inline-flex items-center gap-1 rounded-full border p-1">
          {widths.map((w) => (
            <button
              key={w.key}
              type="button"
              onClick={() => setWidth(w.key)}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-medium transition-colors",
                width === w.key ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {w.label}
            </button>
          ))}
        </div>
      </div>

      <div className={cn("overflow-hidden rounded-3xl border", activeBg.className)}>
        <div
          className={cn(
            "mx-auto flex min-h-40 w-full items-center justify-center p-10 transition-[max-width]",
            activeWidth.className,
            className
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export { StoryCanvas };
