import Link from "next/link";
import { DevSidebarNav } from "@/components/dev/sidebar-nav";
import { ThemeToggle } from "@/components/dev/theme-toggle";

export default function ComponentsLayout({ children }: LayoutProps<"/dev/components">) {
  return (
    <div className="flex h-dvh overflow-hidden bg-background">
      <DevSidebarNav />
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-14 shrink-0 items-center justify-between border-b px-6">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← Uygulamaya dön
          </Link>
          <ThemeToggle />
        </header>
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto w-full max-w-6xl px-8 py-10">{children}</div>
        </main>
      </div>
    </div>
  );
}
