import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Portföyü sil</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Emin misiniz?</AlertDialogTitle>
          <AlertDialogDescription>Bu işlem geri alınamaz. Portföy ve ilişkili tüm veriler silinecek.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>İptal</AlertDialogCancel>
          <AlertDialogAction>Sil</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export const code = `<AlertDialog>
  <AlertDialogTrigger asChild><Button variant="destructive">Sil</Button></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader><AlertDialogTitle>Emin misiniz?</AlertDialogTitle></AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>İptal</AlertDialogCancel>
      <AlertDialogAction>Sil</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`;
