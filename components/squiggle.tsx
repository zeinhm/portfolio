import { cn } from "@/lib/utils";

/** Hand-drawn amber wave divider under hero / section intros. */
export function Squiggle({ className }: { className?: string }) {
  return (
    <svg
      width="150"
      height="16"
      viewBox="0 0 150 16"
      fill="none"
      aria-hidden="true"
      className={cn("block", className)}
    >
      <path
        d="M3 8 Q 9 1.5, 15 8 T 27 8 T 39 8 T 51 8 T 63 8 T 75 8 T 87 8 T 99 8 T 111 8 T 123 8 T 135 8 T 147 8"
        stroke="var(--accent)"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
