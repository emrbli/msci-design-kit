import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-8">
      <Tabs defaultValue="overview">
        <TabsList variant="line">
          <TabsTrigger value="overview">Genel Bakış</TabsTrigger>
          <TabsTrigger value="performance">Performans</TabsTrigger>
          <TabsTrigger value="holdings">Varlıklar</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="pt-4 text-sm text-muted-foreground">
          Portföyün genel özeti burada yer alır.
        </TabsContent>
        <TabsContent value="performance" className="pt-4 text-sm text-muted-foreground">
          Zaman içindeki getiri grafiği.
        </TabsContent>
        <TabsContent value="holdings" className="pt-4 text-sm text-muted-foreground">
          Varlık dağılım tablosu.
        </TabsContent>
      </Tabs>

      <Tabs defaultValue="day">
        <TabsList>
          <TabsTrigger value="day">Gün</TabsTrigger>
          <TabsTrigger value="week">Hafta</TabsTrigger>
          <TabsTrigger value="month">Ay</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}

export const code = `<Tabs defaultValue="overview">
  <TabsList variant="line">
    <TabsTrigger value="overview">Genel Bakış</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">...</TabsContent>
</Tabs>`;
