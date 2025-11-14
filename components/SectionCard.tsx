import React from "react";

interface SectionCardProps {
  title: string;
  badge?: string;
  children: React.ReactNode;
}

export const SectionCard = ({ title, badge, children }: SectionCardProps) => {
  return (
    <section className="mb-5 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm shadow-slate-950/50">
      <div className="mb-3 flex items-center justify-between gap-2">
        <h2 className="text-base font-semibold text-slate-50">{title}</h2>
        {badge && (
          <span className="rounded-full bg-slate-800 px-2 py-0.5 text-xs font-medium text-slate-300">
            {badge}
          </span>
        )}
      </div>
      <div className="space-y-2 text-sm leading-relaxed text-slate-200">
        {children}
      </div>
    </section>
  );
};
