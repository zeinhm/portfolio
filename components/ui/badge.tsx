import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Skill chip: devicon logo (22px, no background tile) + label.
 * border = line, bg = surface, radius 11px, font .88rem.
 */
const Badge = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "inline-flex items-center gap-[10px] rounded-[11px] border border-line bg-surface py-[6px] pl-[6px] pr-[14px] text-[.88rem] text-fg",
      className
    )}
    {...props}
  />
));
Badge.displayName = "Badge";

export { Badge };
