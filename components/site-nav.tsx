"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github } from "lucide-react";

import { SITE } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_LINKS = [
  { href: "/resume", label: "RESUME" },
  { href: "/contact", label: "CONTACT" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-line bg-bg/70 backdrop-blur">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-6 px-10 py-[22px]">
        <Link
          href="/"
          className="inline-flex items-center text-[1.5rem] font-bold tracking-[.02em] text-fg"
          aria-label="Home"
        >
          ZM
        </Link>

        <div className="flex items-center gap-[30px]">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[.8rem] font-semibold tracking-[.12em] transition-colors hover:text-fg",
                  active ? "text-accent" : "text-muted"
                )}
              >
                {link.label}
              </Link>
            );
          })}

          <a
            href={SITE.github}
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-muted transition-colors hover:text-fg"
          >
            <Github size={18} />
          </a>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
