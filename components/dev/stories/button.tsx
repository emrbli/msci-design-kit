import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-wrap items-center gap-3">
        <Button>Read the report</Button>
        <Button variant="outline">See MSCI&apos;s approach</Button>
        <Button variant="secondary">Watch past event replays</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link action</Button>
        <Button variant="destructive">Delete</Button>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon" aria-label="Icon">
          <ArrowRight />
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button disabled>Disabled</Button>
        <Button>
          Explore now
          <ArrowRight data-icon="inline-end" />
        </Button>
      </div>
    </div>
  );
}

export const code = `<Button>Read the report</Button>
<Button variant="outline">See MSCI's approach</Button>
<Button variant="secondary">Watch past event replays</Button>`;
