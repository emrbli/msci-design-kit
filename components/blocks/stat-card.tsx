import * as React from "react";
import { ArrowDownRight, ArrowUpRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  change?: string;
  trend?: "up" | "down" | "neutral";
  icon?: LucideIcon;
  className?: string;
}

/** Dashboard KPI tile: label, big value, and an optional up/down trend chip. */
function StatCard({ label, value, change, trend = "neutral", icon: Icon, className }: StatCardProps) {
  return (
    <div
      data-slot="stat-card"
      className={cn("flex flex-col gap-3 rounded-3xl bg-card p-6 ring-1 ring-border", className)}
    >
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        {Icon && <Icon className="size-4 text-muted-foreground" aria-hidden />}
      </div>
      <p className="text-3xl font-medium tracking-tight">{value}</p>
      {change && (
        <p
          className={cn(
            "inline-flex w-fit items-center gap-1 text-xs font-medium",
            trend === "up" && "text-success",
            trend === "down" && "text-danger",
            trend === "neutral" && "text-muted-foreground"
          )}
        >
          {trend === "up" && <ArrowUpRight className="size-3.5" aria-hidden />}
          {trend === "down" && <ArrowDownRight className="size-3.5" aria-hidden />}
          {change}
        </p>
      )}
    </div>
  );
}

export { StatCard };
