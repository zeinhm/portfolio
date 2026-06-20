import type { Metadata } from "next";

import { SKILLS, WORK_HISTORY, SITE } from "@/lib/data";
import { Squiggle } from "@/components/squiggle";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Resume / CV — Zein Hammad Marhabah",
  description:
    "The stack and work history of Zein Hammad Marhabah, a frontend engineer with 7 years of experience.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-[1180px] px-10 pb-[110px] pt-20">
      <div className="mx-auto max-w-[760px]">
        <h1 className="m-0 text-[clamp(1.4rem,2.6vw,1.85rem)] font-bold tracking-[-.02em]">
          My Resume / CV
        </h1>
        <p className="mt-[18px] max-w-[60ch] text-[1.02rem] leading-[1.65] text-muted">
          I&apos;m a frontend engineer with 7 years of experience building web
          applications. On this page you can learn about my stack and my
          previous work experience.
        </p>
        <Squiggle className="mt-6" />

        {/* Skills */}
        <h2 className="mb-3 mt-[60px] text-[1.45rem] font-bold">Skills</h2>
        <p className="mb-[22px] max-w-[60ch] text-[.98rem] leading-[1.6] text-muted">
          The frameworks, libraries, services and runtimes I&apos;ve worked
          with. Not a complete list — I&apos;m always picking up new things.
        </p>
        <div className="flex flex-wrap gap-[10px]">
          {SKILLS.map((skill) => (
            <Badge key={skill.name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={skill.icon}
                alt=""
                width={22}
                height={22}
                loading="lazy"
                className="block flex-none"
              />
              {skill.name}
            </Badge>
          ))}
        </div>

        {/* Work History */}
        <h2 className="mb-3 mt-16 text-[1.45rem] font-bold">Work History</h2>
        <p className="mb-2 max-w-[60ch] text-[.98rem] leading-[1.6] text-muted">
          A summary of my past employment. If you need more detail, you can{" "}
          <a
            href={SITE.cv}
            download
            className="font-semibold text-fg underline decoration-accent underline-offset-[3px]"
          >
            download my resume
          </a>
          .
        </p>

        <div className="mt-[34px] flex flex-col gap-[38px] border-l border-line pl-7">
          {WORK_HISTORY.map((job) => (
            <div key={`${job.company}-${job.dates}`} className="relative">
              <span className="absolute -left-[34px] top-[6px] h-[11px] w-[11px] rounded-full bg-accent shadow-[0_0_0_4px_var(--bg)]" />
              <h3 className="m-0 text-[1.12rem] font-bold">{job.role}</h3>
              <div className="mt-[3px] text-[.92rem] text-muted">
                <span className="text-fg underline decoration-line underline-offset-[3px]">
                  {job.company}
                </span>{" "}
                · {job.meta}
              </div>
              <div className="mt-[3px] text-[.82rem] text-muted opacity-80">
                {job.dates}
              </div>
              <ul className="mt-3 list-disc pl-[18px] text-[.95rem] leading-[1.7] text-muted">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
