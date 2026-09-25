"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function ToastDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="outline" onClick={() => toast("Değişiklikler kaydedildi.")}>
        Varsayılan
      </Button>
      <Button variant="outline" onClick={() => toast.success("Portföy oluşturuldu.")}>
        Başarılı
      </Button>
      <Button variant="outline" onClick={() => toast.error("Kayıt başarısız oldu.")}>
        Hata
      </Button>
    </div>
  );
}

export const code = `toast.success("Portföy oluşturuldu.");
toast.error("Kayıt başarısız oldu.");`;
