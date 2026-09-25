import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonDemo() {
  return (
    <div className="flex w-full max-w-sm items-center gap-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="flex flex-1 flex-col gap-2">
        <Skeleton className="h-4 w-3/4 rounded-full" />
        <Skeleton className="h-4 w-1/2 rounded-full" />
      </div>
    </div>
  );
}

export const code = `<Skeleton className="size-12 rounded-full" />
<Skeleton className="h-4 w-3/4 rounded-full" />`;
