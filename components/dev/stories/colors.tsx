const swatches: { label: string; className: string; fg?: string }[] = [
  { label: "primary", className: "bg-primary", fg: "text-primary-foreground" },
  { label: "brand-turquoise", className: "bg-brand-turquoise", fg: "text-brand-blue-deep" },
  { label: "brand-ink", className: "bg-brand-ink", fg: "text-background" },
  { label: "brand-lavender", className: "bg-brand-lavender", fg: "text-foreground" },
  { label: "secondary", className: "bg-secondary", fg: "text-secondary-foreground" },
  { label: "muted", className: "bg-muted", fg: "text-muted-foreground" },
  { label: "accent", className: "bg-accent", fg: "text-accent-foreground" },
  { label: "card", className: "bg-card ring-1 ring-border", fg: "text-card-foreground" },
];

const statuses: { label: string; className: string; fg: string }[] = [
  { label: "success", className: "bg-success-soft", fg: "text-success" },
  { label: "warning", className: "bg-warning-soft", fg: "text-warning" },
  { label: "danger", className: "bg-danger-soft", fg: "text-danger" },
  { label: "info", className: "bg-info-soft", fg: "text-info" },
];

const charts = ["bg-chart-1", "bg-chart-2", "bg-chart-3", "bg-chart-4", "bg-chart-5"];

export default function ColorsDemo() {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {swatches.map((swatch) => (
          <div key={swatch.label} className={`flex h-24 flex-col justify-end rounded-2xl p-3 ${swatch.className} ${swatch.fg}`}>
            <span className="text-xs font-medium">{swatch.label}</span>
          </div>
        ))}
      </div>
      <div>
        <p className="mb-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">Durum renkleri</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {statuses.map((s) => (
            <div key={s.label} className={`flex h-16 items-center justify-center rounded-2xl text-sm font-medium ${s.className} ${s.fg}`}>
              {s.label}
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">Grafik paleti</p>
        <div className="flex gap-2">
          {charts.map((c) => (
            <div key={c} className={`h-10 flex-1 rounded-lg ${c}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const code = `<div className="bg-primary text-primary-foreground rounded-2xl p-3">primary</div>
<div className="bg-brand-turquoise text-brand-blue-deep rounded-2xl p-3">brand-turquoise</div>`;
