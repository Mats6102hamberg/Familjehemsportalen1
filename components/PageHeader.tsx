import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className="mb-8 space-y-3">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
        {title}
      </h1>
      {subtitle && (
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
          {subtitle}
        </p>
      )}
    </div>
  );
};
