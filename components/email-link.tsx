"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Renders the email from string parts at runtime so naive scrapers that read
 * the server HTML never see a complete address.
 */
export function EmailLink({ className }: { className?: string }) {
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    setEmail(["zeinmrhb", "gmail.com"].join(String.fromCharCode(64)));
  }, []);

  return (
    <a
      href={email ? `mailto:${email}` : undefined}
      className={cn(
        "font-semibold text-fg underline decoration-accent underline-offset-4",
        className
      )}
    >
      {email || "email me"}
    </a>
  );
}
