"use client";

import Link from "next/link";

const items = [
  { title: "Case", href: "/case" },
  { title: "Journalanteckningar", href: "/journal" },
  { title: "PDF-mallar", href: "/pdf-mallar" },
  { title: "Checklista för handledning", href: "/checklista" },
  { title: "Mötesanteckningar", href: "/moten" },
  { title: "Favoriter", href: "/favoriter" },
];

export function Dashboard() {
  return (
    <div className="grid grid-cols-1 gap-6 pt-4 md:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="block rounded-xl border border-slate-800 bg-slate-900/60 p-6 shadow-sm shadow-slate-950/40 transition hover:-translate-y-0.5 hover:border-emerald-300"
        >
          <h2 className="mb-2 text-xl font-semibold text-slate-50">
            {item.title}
          </h2>
          <p className="text-sm text-slate-300">
            Klicka för att öppna {item.title.toLowerCase()}.
          </p>
        </Link>
      ))}
    </div>
  );
}
