import { Inbox } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";

export default function EmptyDemo() {
  return (
    <Empty className="w-full max-w-md border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Inbox />
        </EmptyMedia>
        <EmptyTitle>Henüz kayıt yok</EmptyTitle>
        <EmptyDescription>Yeni bir portföy ekleyerek başlayın.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">Portföy ekle</Button>
      </EmptyContent>
    </Empty>
  );
}

export const code = `<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon"><Inbox /></EmptyMedia>
    <EmptyTitle>Henüz kayıt yok</EmptyTitle>
    <EmptyDescription>Yeni bir portföy ekleyerek başlayın.</EmptyDescription>
  </EmptyHeader>
  <EmptyContent><Button size="sm">Portföy ekle</Button></EmptyContent>
</Empty>`;
