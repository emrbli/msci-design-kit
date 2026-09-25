import { notFound } from "next/navigation";
import { CodeBlock } from "@/components/dev/code-block";
import { StoryCanvas } from "@/components/dev/story-canvas";
import { storyModules } from "@/components/dev/stories";
import { getStory, storyRegistry } from "@/lib/dev-registry";

export function generateStaticParams() {
  return storyRegistry.map((story) => ({ slug: story.slug }));
}

export default async function StoryPage({ params }: PageProps<"/dev/components/[slug]">) {
  const { slug } = await params;
  const meta = getStory(slug);
  const story = storyModules[slug];

  if (!meta || !story) {
    notFound();
  }

  const Demo = story.default;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1.5">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{meta.group}</p>
        <h1 className="text-2xl font-medium tracking-tight">{meta.title}</h1>
        <p className="text-sm text-muted-foreground">{meta.description}</p>
      </div>

      <StoryCanvas>
        <Demo />
      </StoryCanvas>

      {story.code && <CodeBlock code={story.code} />}
    </div>
  );
}
