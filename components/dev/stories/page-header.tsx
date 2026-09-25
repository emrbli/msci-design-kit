import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/blocks/page-header";

export default function PageHeaderDemo() {
  return (
    <div className="w-full rounded-2xl border p-6">
      <PageHeader
        title="Portföyler"
        description="Tüm yönetilen portföylerin özeti."
        breadcrumbs={[{ label: "Panel", href: "#" }, { label: "Portföyler" }]}
        actions={<Button size="sm">Yeni portföy</Button>}
      />
    </div>
  );
}

export const code = `<PageHeader
  title="Portföyler"
  description="Tüm yönetilen portföylerin özeti."
  breadcrumbs={[{ label: "Panel", href: "/panel" }, { label: "Portföyler" }]}
  actions={<Button size="sm">Yeni portföy</Button>}
/>`;
