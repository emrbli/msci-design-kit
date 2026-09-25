import { AlertTriangle, Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Alert>
        <Info />
        <AlertTitle>Veriler güncellendi</AlertTitle>
        <AlertDescription>Son güncelleme bugün 09:14&apos;te yapıldı.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertTriangle />
        <AlertTitle>Bağlantı hatası</AlertTitle>
        <AlertDescription>Veri kaynağına ulaşılamıyor, lütfen tekrar deneyin.</AlertDescription>
      </Alert>
    </div>
  );
}

export const code = `<Alert>
  <Info />
  <AlertTitle>Veriler güncellendi</AlertTitle>
  <AlertDescription>Son güncelleme bugün 09:14'te yapıldı.</AlertDescription>
</Alert>`;
