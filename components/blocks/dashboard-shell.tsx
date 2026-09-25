"use client";

import * as React from "react";
import Link from "next/link";
import { type LucideIcon, Search } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

interface DashboardShellProps {
  groups: NavGroup[];
  activeHref?: string;
  userName?: string;
  topbar?: React.ReactNode;
  children: React.ReactNode;
}

/** Application shell: collapsible brand sidebar + sticky topbar, for panel pages. */
function DashboardShell({ groups, activeHref, userName = "Panel", topbar, children }: DashboardShellProps) {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2 py-1.5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground">
              P
            </span>
            <span className="text-sm font-medium tracking-tight group-data-[collapsible=icon]:hidden">
              Panel
            </span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          {groups.map((group) => (
            <SidebarGroup key={group.label}>
              <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton asChild isActive={activeHref === item.href}>
                        <Link href={item.href}>
                          <item.icon />
                          <span>{item.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
        <SidebarFooter>
          <div className="flex items-center gap-2 px-2 py-1.5">
            <Avatar className="size-8">
              <AvatarFallback>{userName.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium group-data-[collapsible=icon]:hidden">{userName}</span>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-3 border-b bg-background/80 px-4 backdrop-blur-sm lg:px-6">
          <SidebarTrigger />
          <Separator orientation="vertical" className="h-6" />
          <div className="relative w-full max-w-sm">
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
            <Input placeholder="Ara..." className="rounded-full pl-9" />
          </div>
          <div className="ml-auto flex items-center gap-2">{topbar}</div>
        </header>
        <main className={cn("flex flex-1 flex-col gap-6 p-4 lg:p-6")}>{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}

export { DashboardShell };
export type { NavGroup, NavItem };
