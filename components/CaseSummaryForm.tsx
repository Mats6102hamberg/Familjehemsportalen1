"use client";

import { useState, useEffect } from "react";
import { CaseSummary, emptyCaseSummary } from "@/types/notes";
import { loadCaseSummary, saveCaseSummary } from "@/lib/storage";
import { generateCaseSummaryPdf } from "@/lib/pdf";
import { useToast } from "./ToastProvider";

export function CaseSummaryForm() {
  const [summary, setSummary] = useState<CaseSummary>(emptyCaseSummary);
  const { showToast } = useToast();

  // Ladda från localStorage vid mount
  useEffect(() => {
    const saved = loadCaseSummary();
    if (saved) {
      setSummary(saved);
    }
  }, []);

  // Autosave med debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      saveCaseSummary(summary);
      if (Object.values(summary).some((val) => val !== "")) {
        showToast("Sparat", "success");
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [summary, showToast]);

  const handleChange = (field: keyof CaseSummary, value: string) => {
    setSummary((prev) => ({ ...prev, [field]: value }));
  };

  const handleGeneratePdf = () => {
    try {
      generateCaseSummaryPdf(summary);
      showToast("PDF skapad", "success");
    } catch (error) {
      console.error("PDF-fel:", error);
      showToast("Fel vid PDF-skapande", "error");
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-200 mb-1">
            Ärendekod
          </label>
          <input
            type="text"
            value={summary.arendekod}
            onChange={(e) => handleChange("arendekod", e.target.value)}
            placeholder="T.ex. Ä2024-123"
            className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200 mb-1">
            Datum
          </label>
          <input
            type="date"
            value={summary.datum}
            onChange={(e) => handleChange("datum", e.target.value)}
            className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200 mb-1">
            Barnkod/ID
          </label>
          <input
            type="text"
            value={summary.barnkod}
            onChange={(e) => handleChange("barnkod", e.target.value)}
            placeholder="T.ex. B123"
            className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-200 mb-1">
          Bakgrund
        </label>
        <textarea
          value={summary.bakgrund}
          onChange={(e) => handleChange("bakgrund", e.target.value)}
          placeholder="Beskriv bakgrunden till ärendet..."
          rows={4}
          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-200 mb-1">
          Nuvarande läge
        </label>
        <textarea
          value={summary.nuvarandeLage}
          onChange={(e) => handleChange("nuvarandeLage", e.target.value)}
          placeholder="Hur ser läget ut idag..."
          rows={4}
          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-200 mb-1">
          Styrkor och resurser
        </label>
        <textarea
          value={summary.styrkor}
          onChange={(e) => handleChange("styrkor", e.target.value)}
          placeholder="Vilka styrkor finns hos barnet, familjen..."
          rows={4}
          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-200 mb-1">
          Oro och risker
        </label>
        <textarea
          value={summary.oro}
          onChange={(e) => handleChange("oro", e.target.value)}
          placeholder="Vad oroar, vilka risker finns..."
          rows={4}
          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-200 mb-1">
          Plan framåt
        </label>
        <textarea
          value={summary.planFramat}
          onChange={(e) => handleChange("planFramat", e.target.value)}
          placeholder="Nästa steg, mål, åtgärder..."
          rows={4}
          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div className="flex justify-end pt-4">
        <button
          onClick={handleGeneratePdf}
          className="px-6 py-2 bg-emerald-500 text-slate-950 font-semibold rounded-lg hover:bg-emerald-400 transition shadow-sm shadow-emerald-500/40"
        >
          Skapa PDF
        </button>
      </div>
    </div>
  );
}
