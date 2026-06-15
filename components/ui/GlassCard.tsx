import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

type Variant = "soft" | "strong" | "raised";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: Variant;
  interactive?: boolean;
};

const variants: Record<Variant, string> = {
  soft: "glass",
  strong: "glass-strong",
  raised: "bg-white border border-[rgba(38,128,179,0.1)] shadow-[var(--shadow-glass-md)]",
};

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(function GlassCard(
  { variant = "soft", interactive, className, children, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-3xl",
        variants[variant],
        interactive &&
          "cursor-pointer transition-all duration-300 hover:shadow-[var(--shadow-glass-lg)] hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
