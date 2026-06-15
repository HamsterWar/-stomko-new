import { cn } from "@/lib/utils/cn";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-primary mb-5",
            align === "center" && "mx-auto"
          )}
        >
          <span className="block h-1.5 w-1.5 rounded-full bg-brand-accent animate-[pulse-soft_2.4s_ease-in-out_infinite]" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight">
        {title.split("|").map((part, i) =>
          i % 2 === 0 ? (
            <span key={i}>{part}</span>
          ) : (
            <span key={i} className="text-gradient-brand">
              {part}
            </span>
          )
        )}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base sm:text-lg text-text-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
