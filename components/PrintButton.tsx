"use client";

export const PrintButton = () => {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <button
      type="button"
      onClick={handlePrint}
      className="inline-flex items-center rounded-xl border border-slate-600 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-100 shadow-sm transition hover:border-emerald-400 hover:text-emerald-200"
    >
      Ladda ner som PDF (skriv ut)
    </button>
  );
};
