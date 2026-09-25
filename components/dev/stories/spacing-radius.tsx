const spacing = [1, 2, 3, 4, 6, 8, 12, 16, 24];
const radii: { label: string; className: string }[] = [
  { label: "sm", className: "rounded-sm" },
  { label: "md", className: "rounded-md" },
  { label: "lg", className: "rounded-lg" },
  { label: "xl", className: "rounded-xl" },
  { label: "2xl", className: "rounded-2xl" },
  { label: "3xl", className: "rounded-3xl" },
  { label: "full", className: "rounded-full" },
];

export default function SpacingRadiusDemo() {
  return (
    <div className="flex w-full flex-col gap-8">
      <div>
        <p className="mb-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">Spacing scale</p>
        <div className="flex flex-col gap-2">
          {spacing.map((s) => (
            <div key={s} className="flex items-center gap-3">
              <span className="w-10 text-xs text-muted-foreground">{s * 4}px</span>
              <div className="h-3 rounded-full bg-primary" style={{ width: `${s * 4}px` }} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">Radius scale</p>
        <div className="flex flex-wrap gap-4">
          {radii.map((r) => (
            <div key={r.label} className="flex flex-col items-center gap-2">
              <div className={`size-16 bg-primary ${r.className}`} />
              <span className="text-xs text-muted-foreground">{r.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const code = `<div className="rounded-3xl bg-primary size-16" />`;
