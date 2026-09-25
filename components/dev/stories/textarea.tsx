import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function TextareaDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-1.5">
      <Label htmlFor="story-message">Mesaj</Label>
      <Textarea id="story-message" placeholder="Notunuzu yazın..." />
    </div>
  );
}

export const code = `<Label htmlFor="message">Mesaj</Label>
<Textarea id="message" placeholder="Notunuzu yazın..." />`;
