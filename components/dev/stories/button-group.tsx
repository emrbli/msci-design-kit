import { Bold, Italic, Underline } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export default function ButtonGroupDemo() {
  return (
    <div className="flex w-full flex-col gap-6">
      <ButtonGroup>
        <Button variant="outline" size="icon-sm" aria-label="Kalın">
          <Bold />
        </Button>
        <Button variant="outline" size="icon-sm" aria-label="İtalik">
          <Italic />
        </Button>
        <Button variant="outline" size="icon-sm" aria-label="Altı çizili">
          <Underline />
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button variant="outline">Gün</Button>
        <Button variant="outline">Hafta</Button>
        <Button variant="outline">Ay</Button>
      </ButtonGroup>
    </div>
  );
}

export const code = `<ButtonGroup>
  <Button variant="outline">Gün</Button>
  <Button variant="outline">Hafta</Button>
  <Button variant="outline">Ay</Button>
</ButtonGroup>`;
