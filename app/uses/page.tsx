import type { Metadata } from "next";

import { USES, type UsesCard } from "@/lib/data";
import { Squiggle } from "@/components/squiggle";
import { Card, CardTitle, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Uses",
  description: "The hardware, workspace and tools Zein uses day to day.",
  alternates: { canonical: "/uses" },
};

function UsesRows({ card }: { card: UsesCard }) {
  return (
    <CardContent>
      {card.rows.map((row) => (
        <div key={row.label}>
          <strong className="font-semibold text-fg">{row.label}</strong> —{" "}
          <span className="underline decoration-line underline-offset-[3px]">
            {row.value}
          </span>
        </div>
      ))}
    </CardContent>
  );
}

export default function UsesPage() {
  return (
    <div className="mx-auto max-w-[1180px] px-10 pb-[110px] pt-20">
      <div className="mx-auto max-w-[760px]">
        <h1 className="m-0 text-[clamp(1.4rem,2.6vw,1.85rem)] font-bold tracking-[-.02em]">
          Uses
        </h1>
        <p className="mt-[14px] text-[1.02rem] text-muted">
          The stuff I use on a day-to-day basis.
        </p>
        <Squiggle className="mt-[22px]" />

        <Card className="mt-10">
          <CardTitle>{USES.hardware.title}</CardTitle>
          <UsesRows card={USES.hardware} />
        </Card>

        <Card className="mt-[22px]">
          <CardTitle>{USES.workspace.title}</CardTitle>
          <UsesRows card={USES.workspace} />
        </Card>

        <Card className="mt-[22px]">
          <CardTitle>{USES.devTools.title}</CardTitle>
          <UsesRows card={USES.devTools} />
        </Card>

        <p className="mt-6 text-[.84rem] text-muted opacity-75">
          * Inspired by the uses.tech project.
        </p>
      </div>
    </div>
  );
}
