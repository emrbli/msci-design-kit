import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Detayları göster</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Portföy detayı</DrawerTitle>
          <DrawerDescription>Mobil cihazlarda alttan açılan panel.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Kapat</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export const code = `<Drawer>
  <DrawerTrigger asChild><Button variant="outline">Detayları göster</Button></DrawerTrigger>
  <DrawerContent>
    <DrawerHeader><DrawerTitle>Portföy detayı</DrawerTitle></DrawerHeader>
  </DrawerContent>
</Drawer>`;
