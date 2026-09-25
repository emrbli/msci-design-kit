import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function AccordionDemo() {
  return (
    <Accordion type="single" collapsible defaultValue="item-1" className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Veri güncelleme sıklığı nedir?</AccordionTrigger>
        <AccordionContent>Piyasa verileri her işlem günü kapanışta güncellenir.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>API erişimi nasıl alırım?</AccordionTrigger>
        <AccordionContent>Ayarlar → Entegrasyonlar bölümünden bir anahtar oluşturabilirsiniz.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Ekip üyesi ekleyebilir miyim?</AccordionTrigger>
        <AccordionContent>Evet, Kullanıcılar sayfasından davet gönderebilirsiniz.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export const code = `<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Soru</AccordionTrigger>
    <AccordionContent>Cevap.</AccordionContent>
  </AccordionItem>
</Accordion>`;
