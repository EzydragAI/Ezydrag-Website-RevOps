import { cn } from "@/lib/cn";

export function Logo({
  className,
  inverse = false,
}: {
  className?: string;
  inverse?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg viewBox="0 0 28 28" className="h-7 w-7" aria-hidden fill="none">
        <rect
          width="28"
          height="28"
          rx="8"
          className={inverse ? "fill-white" : "fill-teal"}
        />
        <path
          d="M8 18 L14 7 L20 18 M11 14h6"
          className={inverse ? "stroke-[#3d1c0b]" : "stroke-bg"}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className={cn(
          "font-display text-[15px] font-semibold tracking-[0.2em]",
          inverse ? "text-white" : "text-ink",
        )}
      >
        EZYDRAG®
      </span>
    </span>
  );
}
