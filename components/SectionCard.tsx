interface SectionCardProps {
  title: string;
  badge?: string;
  children: React.ReactNode;
}

export const SectionCard = ({ title, badge, children }: SectionCardProps) => {
  return (
    <section className="mb-5 rounded-2xl border border-slate-800 bg-slate-900/85 p-4 md:p-5">
      <header className="mb-3 flex items-center justify-between gap-2">
        <h2 className="text-sm font-semibold text-slate-50 md:text-base">
          {title}
        </h2>
        {badge && (
          <span className="rounded-full border border-slate-700 bg-slate-800 px-2 py-0.5 text-[10px] uppercase tracking-wide text-slate-300">
            {badge}
          </span>
        )}
      </header>
      <div className="text-[14px] leading-relaxed text-slate-100 md:text-[15px]">
        {children}
      </div>
    </section>
  );
};
