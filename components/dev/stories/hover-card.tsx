import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <button type="button" className="flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline">
          <Avatar className="size-6">
            <AvatarFallback>AY</AvatarFallback>
          </Avatar>
          A. Yılmaz
        </button>
      </HoverCardTrigger>
      <HoverCardContent className="w-64">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium">Ahmet Yılmaz</p>
          <p className="text-xs text-muted-foreground">Portföy Yöneticisi · 12 aktif portföy</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export const code = `<HoverCard>
  <HoverCardTrigger asChild><button>A. Yılmaz</button></HoverCardTrigger>
  <HoverCardContent>Portföy Yöneticisi</HoverCardContent>
</HoverCard>`;
