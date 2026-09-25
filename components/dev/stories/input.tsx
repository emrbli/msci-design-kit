import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function InputDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="story-email">E-posta</Label>
        <Input id="story-email" type="email" placeholder="ad.soyad@sirket.com" />
      </div>
      <div className="relative">
        <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Ara..." className="rounded-full pl-9" />
      </div>
      <Input placeholder="Devre dışı" disabled />
      <Input placeholder="Geçersiz" aria-invalid />
    </div>
  );
}

export const code = `<Label htmlFor="email">E-posta</Label>
<Input id="email" type="email" placeholder="ad.soyad@sirket.com" />`;
