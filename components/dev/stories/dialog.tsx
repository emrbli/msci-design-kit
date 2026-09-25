import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Portföy adını düzenle</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Portföyü düzenle</DialogTitle>
          <DialogDescription>Portföy adını güncelleyin.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="dialog-name">Ad</Label>
          <Input id="dialog-name" defaultValue="ACWI Growth" />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">İptal</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button>Kaydet</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export const code = `<Dialog>
  <DialogTrigger asChild><Button variant="outline">Düzenle</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Portföyü düzenle</DialogTitle>
    </DialogHeader>
  </DialogContent>
</Dialog>`;
