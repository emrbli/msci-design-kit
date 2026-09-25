"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";

const data = [
  { month: "Oca", aum: 186 },
  { month: "Şub", aum: 205 },
  { month: "Mar", aum: 197 },
  { month: "Nis", aum: 231 },
  { month: "May", aum: 244 },
  { month: "Haz", aum: 260 },
];

const config: ChartConfig = {
  aum: { label: "Varlık (M ₺)", color: "var(--color-chart-1)" },
};

export default function ChartDemo() {
  return (
    <ChartContainer config={config} className="aspect-auto h-64 w-full">
      <AreaChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area dataKey="aum" type="monotone" fill="var(--color-chart-1)" fillOpacity={0.15} stroke="var(--color-chart-1)" strokeWidth={2} />
      </AreaChart>
    </ChartContainer>
  );
}

export const code = `const config = { aum: { label: "Varlık", color: "var(--color-chart-1)" } };

<ChartContainer config={config}>
  <AreaChart data={data}>
    <Area dataKey="aum" stroke="var(--color-chart-1)" />
  </AreaChart>
</ChartContainer>`;
