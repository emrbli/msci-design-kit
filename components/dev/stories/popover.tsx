import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Boyutları ayarla</Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium">Boyutlar</p>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="popover-width">Genişlik</Label>
            <Input id="popover-width" defaultValue="100%" className="h-8" />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export const code = `<Popover>
  <PopoverTrigger asChild><Button variant="outline">Boyutları ayarla</Button></PopoverTrigger>
  <PopoverContent className="w-64">...</PopoverContent>
</Popover>`;
