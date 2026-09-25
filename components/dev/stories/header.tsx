import { SiteHeader } from "@/components/blocks/site-header";

export default function HeaderDemo() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border">
      <SiteHeader />
    </div>
  );
}

export const code = `<SiteHeader nav={[
  { label: "Data & Analytics", columns: [...] },
  { label: "Research & Insights", href: "/research" },
]} />`;
