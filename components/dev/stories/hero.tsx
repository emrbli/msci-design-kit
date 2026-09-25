import { Hero } from "@/components/blocks/hero";

export default function HeroDemo() {
  return (
    <div className="w-full overflow-hidden rounded-2xl">
      <Hero
        eyebrow="MSCI Araştırma"
        title="Fiziksel iklim riski yıllık raporu beklemez."
        description="Portföyünüzdeki iklim ve sürdürülebilirlik risklerini gerçek zamanlı izleyin."
        actions={[
          { label: "See MSCI's approach", variant: "outline" },
          { label: "Read the report", variant: "default" },
        ]}
      />
    </div>
  );
}

export const code = `<Hero
  eyebrow="MSCI Araştırma"
  title="Fiziksel iklim riski yıllık raporu beklemez."
  actions={[{ label: "See MSCI's approach", variant: "outline" }]}
/>`;
