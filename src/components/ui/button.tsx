import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 rounded-button whitespace-nowrap font-medium transition-[transform,background-color,color,opacity,border-color] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Primary action — driven by the swappable --accent token.
        default: "bg-accent text-accent-foreground border border-accent hover:opacity-90",
        // Primary action on a dark/ink surface.
        alternate: "bg-paper text-ink border border-paper hover:opacity-90",
        secondary: "border border-ink/20 text-ink hover:bg-ink/[0.04]",
        "secondary-alt": "border border-white/40 text-white hover:bg-white/10",
        link: "gap-2 text-ink underline-offset-4 hover:underline p-0",
        "link-alt": "gap-2 text-white underline-offset-4 hover:underline p-0",
        ghost: "text-ink hover:bg-ink/[0.05]",
        none: "",
      },
      size: {
        default: "px-6 py-3 text-medium",
        sm: "px-5 py-2.5 text-small",
        lg: "px-7 py-3.5 text-medium",
        link: "p-0",
        icon: "size-11",
        none: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    title?: string;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  iconLeft,
  iconRight,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {iconLeft && iconLeft}
      <Slottable>{children}</Slottable>
      {iconRight && iconRight}
    </Comp>
  );
}

export { Button, buttonVariants };
export type { ButtonProps };
