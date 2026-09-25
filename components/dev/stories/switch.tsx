import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function SwitchDemo() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Switch id="story-notifications" defaultChecked />
        <Label htmlFor="story-notifications">Bildirimler açık</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="story-marketing" />
        <Label htmlFor="story-marketing">Pazarlama e-postaları</Label>
      </div>
    </div>
  );
}

export const code = `<Switch id="notifications" defaultChecked />
<Label htmlFor="notifications">Bildirimler açık</Label>`;
