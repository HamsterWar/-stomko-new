"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "accent" | "ghost" | "glass" | "outline";
type Size = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-br from-[#4BA9D9] via-[#2680B3] to-[#1C5F87] text-white shadow-[0_12px_32px_rgba(38,128,179,0.32),0_4px_12px_rgba(38,128,179,0.18)] hover:shadow-[0_18px_42px_rgba(38,128,179,0.42),0_6px_16px_rgba(38,128,179,0.24)] hover:brightness-110",
  accent:
    "bg-gradient-to-br from-[#FF8C6B] via-[#FF7A59] to-[#EA5A3A] text-white shadow-[0_12px_32px_rgba(255,122,89,0.32),0_4px_12px_rgba(255,122,89,0.18)] hover:shadow-[0_18px_42px_rgba(255,122,89,0.45),0_6px_16px_rgba(255,122,89,0.28)] hover:brightness-110",
  ghost:
    "bg-white text-brand-deep border border-[rgba(38,128,179,0.18)] hover:border-[rgba(38,128,179,0.35)] hover:bg-[rgba(38,128,179,0.04)]",
  glass:
    "glass-strong text-brand-deep hover:bg-white",
  outline:
    "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm rounded-xl",
  md: "h-12 px-6 text-[15px] rounded-2xl",
  lg: "h-14 px-7 text-base rounded-2xl",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", className, children, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 cursor-pointer active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});
