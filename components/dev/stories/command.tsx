import { Calculator, Calendar, Settings, User } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

export default function CommandDemo() {
  return (
    <div className="w-full max-w-sm rounded-2xl border">
      <Command>
        <CommandInput placeholder="Bir komut yazın..." />
        <CommandList>
          <CommandEmpty>Sonuç bulunamadı.</CommandEmpty>
          <CommandGroup heading="Öneriler">
            <CommandItem>
              <Calendar /> Takvim
            </CommandItem>
            <CommandItem>
              <Calculator /> Hesap makinesi
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Ayarlar">
            <CommandItem>
              <User /> Profil
            </CommandItem>
            <CommandItem>
              <Settings /> Tercihler
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}

export const code = `<Command>
  <CommandInput placeholder="Bir komut yazın..." />
  <CommandList>
    <CommandGroup heading="Öneriler">
      <CommandItem><Calendar /> Takvim</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`;
