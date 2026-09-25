import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function SliderDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <div className="flex flex-col gap-3">
        <Label>Risk toleransı</Label>
        <Slider defaultValue={[40]} max={100} step={1} />
      </div>
      <div className="flex flex-col gap-3">
        <Label>Tarih aralığı</Label>
        <Slider defaultValue={[20, 80]} max={100} step={1} />
      </div>
    </div>
  );
}

export const code = `<Slider defaultValue={[40]} max={100} step={1} />
<Slider defaultValue={[20, 80]} max={100} step={1} />`;
