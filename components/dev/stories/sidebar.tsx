"use client";

import { BarChart3, LayoutDashboard, Settings, Users } from "lucide-react";
import { DashboardShell, type NavGroup } from "@/components/blocks/dashboard-shell";
import { StatCard } from "@/components/blocks/stat-card";

const groups: NavGroup[] = [
  {
    label: "Genel",
    items: [
      { label: "Panel", href: "/dev/components/sidebar#panel", icon: LayoutDashboard },
      { label: "Analitik", href: "/dev/components/sidebar#analitik", icon: BarChart3 },
    ],
  },
  {
    label: "Yönetim",
    items: [
      { label: "Kullanıcılar", href: "/dev/components/sidebar#kullanicilar", icon: Users },
      { label: "Ayarlar", href: "/dev/components/sidebar#ayarlar", icon: Settings },
    ],
  },
];

export default function SidebarDemo() {
  return (
    // `contain: layout` gives the shell's `position: fixed` sidebar a local
    // containing block so it previews inside this frame instead of the viewport.
    <div className="relative h-[32rem] w-full overflow-hidden rounded-2xl border [contain:layout]">
      <DashboardShell groups={groups} activeHref={groups[0].items[0].href}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <StatCard label="Aktif portföy" value="128" change="+4 bu ay" trend="up" />
          <StatCard label="Bekleyen inceleme" value="6" change="-2 bu hafta" trend="down" />
        </div>
      </DashboardShell>
    </div>
  );
}

export const code = `<DashboardShell groups={groups} activeHref="/panel">
  {children}
</DashboardShell>`;
