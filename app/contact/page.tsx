import type { Metadata } from "next";

import { Squiggle } from "@/components/squiggle";
import { EmailLink } from "@/components/email-link";

export const metadata: Metadata = {
  title: "Contact — Zein Hammad Marhabah",
  description: "Get in touch with Zein Hammad Marhabah.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[1180px] px-10 pb-[120px] pt-24">
      <div className="mx-auto max-w-[760px]">
        <h1 className="m-0 text-[clamp(1.4rem,2.6vw,1.85rem)] font-bold tracking-[-.02em]">
          Get in touch
        </h1>
        <p className="mt-[14px] text-[1.1rem] text-muted">
          Do you have an exciting project? Let&apos;s talk!
        </p>
        <Squiggle className="mt-[22px]" />

        <p className="mt-[34px] text-[1.06rem] leading-[1.8] text-muted">
          You can reach me out anytime at <EmailLink />
          <br />
          I usually respond right away on business days.
        </p>
      </div>
    </div>
  );
}
