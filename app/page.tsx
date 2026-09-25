import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 bg-brand-lavender px-6 text-center">
      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Panel</p>
      <h1 className="max-w-2xl text-4xl leading-[1.05] font-medium tracking-tight text-balance lg:text-6xl">
        Yönetim paneli, MSCI tasarım diliyle inşa ediliyor.
      </h1>
      <p className="max-w-md text-muted-foreground">
        Tüm arayüz bileşenleri, canlı önizleme ve kod örnekleriyle bileşen kütüphanesinde.
      </p>
      <Button asChild size="lg">
        <Link href="/dev/components">Bileşen kütüphanesini aç</Link>
      </Button>
    </main>
  );
}
