const scale = [
  { label: "Display", className: "text-6xl font-medium tracking-tight" },
  { label: "H1", className: "text-4xl font-medium tracking-tight" },
  { label: "H2", className: "text-3xl font-medium tracking-tight" },
  { label: "H3", className: "text-2xl font-medium tracking-tight" },
  { label: "H4", className: "text-xl font-medium" },
  { label: "Body Large", className: "text-lg font-normal" },
  { label: "Body", className: "text-base font-normal" },
  { label: "Caption", className: "text-sm text-muted-foreground" },
];

export default function TypographyDemo() {
  return (
    <div className="flex w-full flex-col gap-6">
      {scale.map((item) => (
        <div key={item.label} className="flex flex-col gap-1 border-b pb-4 last:border-none">
          <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{item.label}</span>
          <p className={item.className}>Fiziksel iklim riski yıllık raporu beklemez.</p>
        </div>
      ))}
    </div>
  );
}

export const code = `<h1 className="text-4xl font-medium tracking-tight">Başlık</h1>
<p className="text-base text-foreground">Gövde metni.</p>`;
