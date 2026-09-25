import { CtaBanner } from "@/components/blocks/cta-banner";
import { EventCard } from "@/components/blocks/event-card";
import { InsightCard } from "@/components/blocks/insight-card";
import { PromoCard } from "@/components/blocks/promo-card";

export default function CardsDemo() {
  return (
    <div className="flex w-full flex-col gap-10">
      <div>
        <p className="mb-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">Event cards</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <EventCard tone="turquoise" title="The Long and Short of Quantitative Indexing" date="6 Ekim 2026" />
          <EventCard tone="white" title="Sustainability and Climate In Focus" date="29 Eylül 2026" />
          <EventCard tone="lavender" title="Real Estate In Focus" date="29 Ekim 2026" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <PromoCard eyebrow="MSCI Yaklaşımı" title="Fiziksel iklim riski yıllık raporu beklemez." ctaLabel="See MSCI's approach" />
        <CtaBanner eyebrow="Yeni Rapor" title="2026 sürdürülebilirlik ve iklim görünümü." ctaLabel="Read the report" />
      </div>
      <div>
        <p className="mb-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">Insight card</p>
        <div className="max-w-xs">
          <InsightCard tag="Araştırma" title="Gelişen piyasalarda faktör getirileri nasıl değişti?" />
        </div>
      </div>
    </div>
  );
}

export const code = `<EventCard tone="turquoise" title="..." date="6 Ekim 2026" />
<PromoCard eyebrow="MSCI Yaklaşımı" title="..." ctaLabel="See MSCI's approach" />
<CtaBanner eyebrow="Yeni Rapor" title="..." ctaLabel="Read the report" />`;
