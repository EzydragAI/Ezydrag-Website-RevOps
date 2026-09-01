import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "ghost" | "inverse";
  children: ReactNode;
};

export function Button({
  variant = "solid",
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        "btn-fill inline-flex h-12 items-center justify-center px-8 font-display text-[11px] uppercase tracking-[0.22em]",
        variant === "ghost" && "border-line",
        variant === "inverse" && "border-white text-white",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
}
