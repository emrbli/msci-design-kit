import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface InsightCardProps {
  tag: string;
  title: string;
  href?: string;
  imageSrc?: string;
  className?: string;
}

/** Research/insight tile: tag badge, image, and an arrow-linked title. */
function InsightCard({ tag, title, href = "#", imageSrc, className }: InsightCardProps) {
  return (
    <Link
      href={href}
      data-slot="insight-card"
      className={cn("group/insight-card flex flex-col gap-4 outline-none focus-visible:ring-3 focus-visible:ring-ring/50 rounded-3xl", className)}
    >
      <div className="relative aspect-4/3 overflow-hidden rounded-3xl bg-muted">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover/insight-card:scale-105"
          />
        )}
      </div>
      <Badge variant="outline" className="w-fit">
        {tag}
      </Badge>
      <h3 className="flex items-start gap-1 text-lg leading-snug font-medium text-balance">
        {title}
        <ArrowUpRight className="mt-0.5 size-4 shrink-0 transition-transform group-hover/insight-card:translate-x-0.5 group-hover/insight-card:-translate-y-0.5" />
      </h3>
    </Link>
  );
}

export { InsightCard };
