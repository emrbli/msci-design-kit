import { Badge } from "@/components/ui/badge";

export default function BadgeDemo() {
  return (
    <div className="flex w-full flex-wrap items-center gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="turquoise">Turquoise</Badge>
      <Badge variant="ink">Ink</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  );
}

export const code = `<Badge>Default</Badge>
<Badge variant="turquoise">Turquoise</Badge>
<Badge variant="success">Success</Badge>`;
