import { SiteFooter } from "@/components/blocks/site-footer";

export default function FooterDemo() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border">
      <SiteFooter />
    </div>
  );
}

export const code = `<SiteFooter columns={[
  { heading: "Ürünler", links: [{ label: "Analitik", href: "/analitik" }] },
]} />`;
