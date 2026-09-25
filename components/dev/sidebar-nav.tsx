"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { storyGroups, storyRegistry } from "@/lib/dev-registry";

/** Grouped, search-filterable nav for the /dev/components storybook shell. */
function DevSidebarNav() {
  const pathname = usePathname();
  const [query, setQuery] = React.useState("");

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return storyRegistry;
    return storyRegistry.filter(
      (story) => story.title.toLowerCase().includes(q) || story.description.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <nav className="flex h-full w-64 shrink-0 flex-col gap-4 border-r bg-sidebar px-3 py-4 text-sidebar-foreground">
      <div className="flex items-center gap-2 px-1">
        <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-xs font-semibold text-primary-foreground">
          P
        </span>
        <Link href="/dev/components" className="text-sm font-medium tracking-tight">
          Component Kit
        </Link>
      </div>

      <div className="relative px-1">
        <Search className="absolute top-1/2 left-3.5 size-3.5 -translate-y-1/2 text-muted-foreground" aria-hidden />
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Bileşen ara..."
          className="h-8 rounded-full pl-8 text-sm"
        />
      </div>

      <div className="flex-1 overflow-y-auto px-1">
        {storyGroups.map((group) => {
          const items = filtered.filter((story) => story.group === group);
          if (items.length === 0) return null;
          return (
            <div key={group} className="mb-4">
              <p className="px-2 pb-1.5 text-[0.7rem] font-medium tracking-wide text-muted-foreground uppercase">
                {group}
              </p>
              <ul className="flex flex-col gap-0.5">
                {items.map((story) => {
                  const href = `/dev/components/${story.slug}`;
                  const active = pathname === href;
                  return (
                    <li key={story.slug}>
                      <Link
                        href={href}
                        className={cn(
                          "block rounded-lg px-2 py-1.5 text-sm transition-colors",
                          active
                            ? "bg-sidebar-accent font-medium text-sidebar-accent-foreground"
                            : "text-sidebar-foreground/80 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"
                        )}
                      >
                        {story.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export { DevSidebarNav };
