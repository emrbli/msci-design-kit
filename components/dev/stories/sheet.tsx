import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Filtreleri aç</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filtreler</SheetTitle>
          <SheetDescription>Sonuçları daraltmak için filtre uygulayın.</SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button className="w-full">Uygula</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export const code = `<Sheet>
  <SheetTrigger asChild><Button variant="outline">Filtreleri aç</Button></SheetTrigger>
  <SheetContent>
    <SheetHeader><SheetTitle>Filtreler</SheetTitle></SheetHeader>
  </SheetContent>
</Sheet>`;
