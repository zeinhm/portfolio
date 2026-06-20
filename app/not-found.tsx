import Link from "next/link";

import { Squiggle } from "@/components/squiggle";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[1180px] px-10 pb-[120px] pt-24">
      <div className="mx-auto max-w-[760px] text-center">
        <h1 className="m-0 text-[clamp(1.4rem,2.6vw,1.85rem)] font-bold tracking-[-.02em]">
          Page Not Found
        </h1>
        <p className="mt-[14px] text-[1.05rem] text-muted">
          Sorry, the page you are looking for doesn&apos;t exist :(
        </p>
        <Squiggle className="mx-auto mt-[22px]" />

        <div className="mt-[30px] text-[clamp(5rem,16vw,9rem)] font-bold leading-none tracking-[-.04em] text-accent">
          404
        </div>

        <Button asChild className="mt-[30px]">
          <Link href="/">Back home</Link>
        </Button>
      </div>
    </div>
  );
}
