import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import { Slot } from "radix-ui"

// MSCI reference uses fully-pill buttons everywhere (solid blue, white,
// outline-on-dark) with no elevation, plus an underlined text link variant.
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-transparent text-sm font-medium whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-brand-blue-hover",
        outline:
          "border-foreground/70 bg-transparent text-foreground hover:border-foreground hover:bg-foreground/5",
        secondary:
          "border-transparent bg-white text-foreground hover:bg-white/90 dark:bg-secondary dark:text-secondary-foreground",
        inverse:
          "border-transparent bg-background text-foreground hover:bg-background/90",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "rounded-none border-none p-0! text-primary underline-offset-4 hover:underline",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20",
      },
      size: {
        default: "h-11 px-6 has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        sm: "h-9 gap-1.5 px-4 text-[0.8rem] has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-13 px-8 text-base has-data-[icon=inline-end]:pr-5 has-data-[icon=inline-start]:pl-5",
        icon: "size-11",
        "icon-sm": "size-9 [&_svg:not([class*='size-'])]:size-3.5",
        "icon-xs": "size-7 [&_svg:not([class*='size-'])]:size-3.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
