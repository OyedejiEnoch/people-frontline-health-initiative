import { cn } from "@/lib/utils";

/*
  Typographic wordmark — deliberately not a medical cross / globe / heart
  (the brief explicitly dislikes generic NGO symbols). The accent dot reads as
  "a point of care", and is driven by the swappable --accent token.
*/
export function Logo({
  variant = "mark",
  tone = "ink",
  className,
}: {
  variant?: "mark" | "full";
  tone?: "ink" | "paper";
  className?: string;
}) {
  const color = tone === "paper" ? "text-paper" : "text-ink";
  // Accent currently equals ink, so on dark surfaces fall back to paper so the
  // dot stays visible until a real brand color is set.
  const dot = tone === "paper" ? "text-paper" : "text-accent";

  if (variant === "full") {
    return (
      <span className={cn("font-display leading-none", color, className)}>
        <span className="block text-lg font-semibold tracking-tight">
          People Frontline Health
          <span className={dot}>.</span>
        </span>
        <span className="mt-1 block text-tiny font-medium uppercase tracking-[0.2em] text-muted">
          Initiative
        </span>
      </span>
    );
  }

  return (
    <span
      className={cn(
        "font-display text-2xl font-semibold tracking-tight leading-none",
        color,
        className,
      )}
    >
      PFHI<span className={dot}>.</span>
    </span>
  );
}
