"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { href: "/", label: "Hem" },
  { href: "/akut", label: "Akut stöd" },
  { href: "/verktyg", label: "Verktyg" },
  { href: "/kunskap", label: "Kunskapsbank" },
  { href: "/hallbarhet", label: "Egen hållbarhet" },
  { href: "/vardegrund", label: "Värdegrund" },
];

export const Nav = () => {
  const pathname = usePathname();

  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-emerald-400/20 ring-1 ring-emerald-400/40" />
          <div>
            <p className="text-sm font-semibold tracking-wide text-emerald-200">
              Familjehemsstöd
            </p>
            <p className="text-xs text-slate-400">
              Tryggt stöd i svåra situationer
            </p>
          </div>
        </div>
        <nav className="hidden gap-3 text-sm text-slate-200 sm:flex">
          {links.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  "rounded-full px-3 py-1 transition " +
                  (active
                    ? "bg-emerald-500 text-slate-950 shadow-sm"
                    : "hover:bg-slate-800/70")
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/login"
          className="rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-slate-200 hover:border-emerald-400 hover:text-emerald-200"
        >
          Logga in
        </Link>
      </div>
    </header>
  );
};
