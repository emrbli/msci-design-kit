import * as React from "react";
import Link from "next/link";
import { Container } from "./container";

interface FooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}

const defaultColumns: FooterColumn[] = [
  {
    heading: "Ürünler",
    links: [
      { label: "Analitik", href: "#" },
      { label: "Endeksler", href: "#" },
      { label: "Araştırma", href: "#" },
    ],
  },
  {
    heading: "Şirket",
    links: [
      { label: "Hakkımızda", href: "#" },
      { label: "Kariyer", href: "#" },
      { label: "Basın", href: "#" },
    ],
  },
  {
    heading: "Kaynaklar",
    links: [
      { label: "Dokümantasyon", href: "#" },
      { label: "Destek", href: "#" },
      { label: "Durum", href: "#" },
    ],
  },
];

/** Multi-column footer with a legal bar, matching MSCI's dense footer layout. */
function SiteFooter({ columns = defaultColumns }: { columns?: FooterColumn[] }) {
  return (
    <footer className="border-t bg-background">
      <Container className="grid grid-cols-2 gap-8 py-16 sm:grid-cols-4">
        <div className="col-span-2 flex flex-col gap-3 sm:col-span-1">
          <span className="text-lg font-semibold tracking-tight">Panel</span>
          <p className="max-w-40 text-sm text-muted-foreground">İç kullanım için yönetim paneli.</p>
        </div>
        {columns.map((column) => (
          <div key={column.heading} className="flex flex-col gap-3">
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{column.heading}</p>
            <ul className="flex flex-col gap-2">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <div className="border-t">
        <Container className="flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Panel. Tüm hakları saklıdır.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-foreground">
              Gizlilik
            </Link>
            <Link href="#" className="hover:text-foreground">
              Kullanım Koşulları
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export { SiteFooter };
export type { FooterColumn };
