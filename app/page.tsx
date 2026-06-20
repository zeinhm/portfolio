import Image from "next/image";
import { Github, Globe, Linkedin } from "lucide-react";

import { SITE } from "@/lib/data";
import { Squiggle } from "@/components/squiggle";
import { EmailLink } from "@/components/email-link";

const SOCIALS = [
  { href: SITE.github, label: "GitHub", icon: <Github size={18} /> },
  { href: SITE.linkedin, label: "LinkedIn", icon: <Linkedin size={18} /> },
  { href: SITE.zenith, label: "ZENITH", icon: <Globe size={17} strokeWidth={1.8} /> },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-[1180px] px-10 pb-[120px] pt-24">
      <div className="mx-auto max-w-[760px]">
        <Image
          src="/assets/zein.png"
          alt={SITE.name}
          width={128}
          height={128}
          priority
          className="mx-auto mb-8 block h-32 w-32 rounded-full border-[3px] border-line object-cover"
        />

        <h1 className="m-0 text-[clamp(1.55rem,3vw,2.1rem)] font-bold leading-[1.15] tracking-[-.02em]">
          Hey, I&apos;m <span className="text-accent">{SITE.name}</span>!
        </h1>

        <p className="mt-6 text-[clamp(.92rem,1.3vw,1.02rem)] leading-[1.7] text-muted">
          A frontend engineer based in{" "}
          <span className="text-fg underline decoration-line underline-offset-4">
            Jakarta, Indonesia
          </span>
          .<br />
          I specialize in developing applications using the{" "}
          <span className="text-fg underline decoration-line underline-offset-4">
            React ecosystem
          </span>
          .<br />
          Most recently, I was a Senior Web Engineer at{" "}
          <span className="text-fg underline decoration-line underline-offset-4">
            Ajaib Sekuritas
          </span>
          .
        </p>

        <Squiggle className="mt-[30px]" />

        <h2 className="mb-[22px] mt-16 text-[1.2rem] font-semibold">Find me on</h2>
        <div className="flex flex-wrap gap-[26px]">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="inline-flex items-center gap-[9px] text-[1.05rem] text-muted no-underline transition-colors hover:text-fg"
              {...(s.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {s.icon}
              {s.label}
            </a>
          ))}
        </div>

        <h2 className="mb-[14px] mt-[60px] text-[1.2rem] font-semibold">Contact</h2>
        <p className="m-0 text-[1.05rem] text-muted">
          You can reach me out anytime at <EmailLink />
        </p>
      </div>
    </div>
  );
}
