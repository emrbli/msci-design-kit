import { CardCarousel } from "@/components/blocks/card-carousel";
import { EventCard } from "@/components/blocks/event-card";

export default function CarouselDemo() {
  return (
    <div className="w-full">
      <CardCarousel>
        <EventCard tone="turquoise" title="The Long and Short of Quantitative Indexing" date="6 Ekim 2026" />
        <EventCard tone="white" title="Sustainability and Climate In Focus" date="29 Eylül 2026" />
        <EventCard tone="lavender" title="Real Estate In Focus" date="29 Ekim 2026" />
        <EventCard tone="white" title="Factor Investing Deep Dive" date="12 Kasım 2026" />
      </CardCarousel>
    </div>
  );
}

export const code = `<CardCarousel>
  <EventCard tone="turquoise" title="..." date="6 Ekim 2026" />
  <EventCard tone="white" title="..." date="29 Eylül 2026" />
</CardCarousel>`;
