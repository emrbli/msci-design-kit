import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";

export default function SpinnerDemo() {
  return (
    <div className="flex items-center gap-4">
      <Spinner />
      <Spinner className="size-6" />
      <Button disabled>
        <Spinner /> Yükleniyor
      </Button>
    </div>
  );
}

export const code = `<Spinner />
<Button disabled><Spinner /> Yükleniyor</Button>`;
