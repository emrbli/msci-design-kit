import * as React from "react";
import { cn } from "@/lib/utils";

/** Centered content column matching MSCI's wide (90rem) page grid. */
function Container({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="container"
      className={cn("mx-auto w-full max-w-(--page-max-width) px-6 lg:px-16", className)}
      {...props}
    />
  );
}

export { Container };
