import { Progress } from "@/components/ui/progress";

export default function ProgressDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Progress value={32} />
      <Progress value={68} />
      <Progress value={100} />
    </div>
  );
}

export const code = `<Progress value={68} />`;
