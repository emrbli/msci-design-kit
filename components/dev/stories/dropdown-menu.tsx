import { Settings, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Hesap menüsü</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuLabel>Hesabım</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User /> Profil
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings /> Ayarlar
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOut /> Çıkış yap
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export const code = `<DropdownMenu>
  <DropdownMenuTrigger asChild><Button variant="outline">Hesap menüsü</Button></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem><User /> Profil</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`;
