import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="monthly" className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="monthly" id="story-monthly" />
        <Label htmlFor="story-monthly">Aylık</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="quarterly" id="story-quarterly" />
        <Label htmlFor="story-quarterly">Üç aylık</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="yearly" id="story-yearly" />
        <Label htmlFor="story-yearly">Yıllık</Label>
      </div>
    </RadioGroup>
  );
}

export const code = `<RadioGroup defaultValue="monthly">
  <RadioGroupItem value="monthly" id="monthly" />
  <Label htmlFor="monthly">Aylık</Label>
</RadioGroup>`;
