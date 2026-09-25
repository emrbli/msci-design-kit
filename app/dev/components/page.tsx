import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { storyGroups, storyRegistry } from "@/lib/dev-registry";

export default function ComponentsOverviewPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Component Kit</p>
        <h1 className="text-3xl font-medium tracking-tight">Bileşen kütüphanesi</h1>
        <p className="max-w-xl text-sm text-muted-foreground">
          Panel için geliştirilen tüm bileşenlerin canlı önizlemesi. Her bileşen, ışık/koyu tema ve
          farklı ekran genişliklerinde test edilebilir.
        </p>
      </div>

      {storyGroups.map((group) => {
        const items = storyRegistry.filter((story) => story.group === group);
        return (
          <div key={group} className="flex flex-col gap-4">
            <h2 className="text-sm font-medium tracking-wide text-muted-foreground uppercase">{group}</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((story) => (
                <Link
                  key={story.slug}
                  href={`/dev/components/${story.slug}`}
                  className="group flex flex-col gap-1 rounded-2xl border p-4 transition-colors hover:border-foreground/30 hover:bg-muted/50"
                >
                  <span className="flex items-center justify-between gap-2 text-sm font-medium">
                    {story.title}
                    <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  <span className="text-xs text-muted-foreground">{story.description}</span>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
