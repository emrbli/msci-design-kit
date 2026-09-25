import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon-sm" aria-label="Bilgi">
          <Info />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Son 30 günün ortalaması.</TooltipContent>
    </Tooltip>
  );
}

export const code = `<Tooltip>
  <TooltipTrigger asChild><Button variant="ghost" size="icon-sm"><Info /></Button></TooltipTrigger>
  <TooltipContent>Son 30 günün ortalaması.</TooltipContent>
</Tooltip>`;
