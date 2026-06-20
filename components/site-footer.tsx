import Link from "next/link";

import { SITE } from "@/lib/data";

function ShareIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M6 9v6M18 6a3 3 0 0 1-3 3H9" />
      <circle cx="18" cy="6" r="3" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-line">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-[14px] px-10 py-[22px] text-[.84rem] text-muted">
        <span className="inline-flex items-center gap-[5px]">
          © 2026 Built with <span className="text-[#EF4444]">♥</span> by{" "}
          {SITE.name}
        </span>
        <div className="flex items-center gap-[22px]">
          <Link href="/uses" className="transition-colors hover:text-fg">
            Uses
          </Link>
          <Link href="/resume" className="transition-colors hover:text-fg">
            Tech Stack
          </Link>
          <a
            href={SITE.github}
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex transition-colors hover:text-accent"
          >
            <ShareIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
