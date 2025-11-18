"use client";

import Link from "next/link";

const cards = [
  {
    title: "Case",
    href: "/case",
    description: "Klicka för att öppna case.",
  },
  {
    title: "Journalanteckningar",
    href: "/journalanteckningar",
    description: "Klicka för att öppna journalanteckningar.",
  },
  {
    title: "PDF-mallar",
    href: "/pdf-mallar",
    description: "Klicka för att öppna pdf-mallar.",
  },
  {
    title: "Checklista för handledning",
    href: "/checklista",
    description: "Klicka för att öppna checklista för handledning.",
  },
  {
    title: "Mötesanteckningar",
    href: "/motesanteckningar",
    description: "Klicka för att öppna mötesanteckningar.",
  },
  {
    title: "Favoriter",
    href: "/favoriter",
    description: "Klicka för att öppna favoriter.",
  },
];

export function Dashboard() {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">
      {cards.map((card) => (
        <Link key={card.title} href={card.href} className="block">
          <div className="rounded-xl bg-[#111827] p-6 transition hover:bg-[#1f2937]">
            <h2 className="mb-2 text-3xl font-bold">{card.title}</h2>
            <p>{card.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
