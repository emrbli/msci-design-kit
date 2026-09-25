"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Container } from "./container";

interface MegaMenuLink {
  label: string;
  description?: string;
  href: string;
}

interface MegaMenuColumn {
  heading: string;
  links: MegaMenuLink[];
}

interface NavEntry {
  label: string;
  href?: string;
  columns?: MegaMenuColumn[];
}

const defaultNav: NavEntry[] = [
  {
    label: "Data & Analytics",
    columns: [
      {
        heading: "Featured Solutions",
        links: [
          { label: "Risk models", href: "#", description: "Multi-asset class risk analytics" },
          { label: "Portfolio analytics", href: "#", description: "Attribution & performance" },
          { label: "Climate data", href: "#", description: "Physical & transition risk" },
        ],
      },
      {
        heading: "Discover",
        links: [
          { label: "Research library", href: "#" },
          { label: "Methodology", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Indexes",
    columns: [
      {
        heading: "Index families",
        links: [
          { label: "ACWI", href: "#" },
          { label: "World", href: "#" },
          { label: "Factor indexes", href: "#" },
        ],
      },
    ],
  },
  { label: "Research & Insights", href: "#" },
  { label: "Discover Panel", href: "#" },
];

/** Sticky marketing header with a Radix mega menu, matching msci.com's top nav. */
function SiteHeader({ nav = defaultNav }: { nav?: NavEntry[] }) {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur-sm">
      <Container className="flex h-18 items-center gap-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Panel
        </Link>

        <NavigationMenu viewport={false} className="hidden max-w-none flex-1 justify-start lg:flex">
          <NavigationMenuList>
            {nav.map((entry) =>
              entry.columns ? (
                <NavigationMenuItem key={entry.label}>
                  <NavigationMenuTrigger>{entry.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[38rem] grid-cols-2 gap-6 p-6">
                      {entry.columns.map((column) => (
                        <div key={column.heading} className="flex flex-col gap-2">
                          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                            {column.heading}
                          </p>
                          {column.links.map((link) => (
                            <NavigationMenuLink key={link.label} asChild>
                              <Link href={link.href} className="flex-col items-start gap-0.5">
                                <span className="text-sm font-medium">{link.label}</span>
                                {link.description && (
                                  <span className="text-xs text-muted-foreground">{link.description}</span>
                                )}
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={entry.label}>
                  <NavigationMenuLink asChild>
                    <Link href={entry.href ?? "#"}>{entry.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon-sm" aria-label="Ara">
            <Search />
          </Button>
          <Button variant="outline" size="sm" className="hidden sm:inline-flex">
            Müşteri girişi
          </Button>
          <Button size="sm" className="hidden sm:inline-flex">
            İletişime geçin
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon-sm" className="lg:hidden" aria-label="Menüyü aç">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-sm">
              <SheetHeader>
                <SheetTitle>Menü</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4 pb-6">
                {nav.map((entry) => (
                  <SheetClose asChild key={entry.label}>
                    <Link
                      href={entry.href ?? entry.columns?.[0]?.links[0]?.href ?? "#"}
                      className="rounded-lg px-2 py-2.5 text-sm font-medium hover:bg-muted"
                    >
                      {entry.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}

export { SiteHeader };
export type { MegaMenuColumn, MegaMenuLink, NavEntry };
