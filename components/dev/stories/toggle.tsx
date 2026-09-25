import { Bold, Italic, Underline } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function ToggleDemo() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex items-center gap-2">
        <Toggle aria-label="Kalın">
          <Bold />
        </Toggle>
        <Toggle variant="outline" aria-label="İtalik">
          <Italic />
        </Toggle>
      </div>
      <ToggleGroup type="multiple" variant="outline">
        <ToggleGroupItem value="bold" aria-label="Kalın">
          <Bold />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="İtalik">
          <Italic />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Altı çizili">
          <Underline />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

export const code = `<ToggleGroup type="multiple" variant="outline">
  <ToggleGroupItem value="bold" aria-label="Kalın"><Bold /></ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="İtalik"><Italic /></ToggleGroupItem>
</ToggleGroup>`;
