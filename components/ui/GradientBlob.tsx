import { cn } from "@/lib/utils/cn";

type GradientBlobProps = {
  className?: string;
  colors?: [string, string];
  size?: number;
  blur?: number;
  animate?: boolean;
};

export function GradientBlob({
  className,
  colors = ["#4BA9D9", "#2680B3"],
  size = 480,
  blur = 80,
  animate = true,
}: GradientBlobProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute opacity-60",
        animate && "motion-safe:animate-[blob_18s_ease-in-out_infinite]",
        className
      )}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${colors[0]} 0%, ${colors[1]} 50%, transparent 70%)`,
        filter: `blur(${blur}px)`,
      }}
    />
  );
}
