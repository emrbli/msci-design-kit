import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id="story-terms" defaultChecked />
        <Label htmlFor="story-terms">Kullanım koşullarını kabul ediyorum</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="story-newsletter" />
        <Label htmlFor="story-newsletter">Haber bültenine abone ol</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="story-disabled" disabled />
        <Label htmlFor="story-disabled" className="text-muted-foreground">
          Devre dışı
        </Label>
      </div>
    </div>
  );
}

export const code = `<Checkbox id="terms" defaultChecked />
<Label htmlFor="terms">Kullanım koşullarını kabul ediyorum</Label>`;
