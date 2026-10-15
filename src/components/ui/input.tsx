"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

function Input({
  className,
  type,
  variant = "primary",
  ...props
}: React.ComponentProps<"input"> & {
  variant?: "primary" | "secondary";
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex min-h-12 w-full rounded-form border px-4 py-2.5 align-middle text-regular transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
        variant === "primary" &&
          "border-ink/20 bg-transparent text-ink placeholder:text-muted focus-visible:border-ink/40 focus-visible:ring-ink/15",
        variant === "secondary" &&
          "border-white/30 bg-transparent text-white placeholder:text-white/50 focus-visible:border-white/60 focus-visible:ring-white/20",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
