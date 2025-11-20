"use client";

import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { MeetingNoteForm } from "@/components/MeetingNoteForm";
import { CaseSummaryForm } from "@/components/CaseSummaryForm";
import { ToastProvider } from "@/components/ToastProvider";

type Tab = "meeting" | "case";

export default function ArbetsbordPage() {
  const [activeTab, setActiveTab] = useState<Tab>("meeting");

  return (
    <ToastProvider>
      <div className="space-y-6">
        <PageHeader
          title="Arbetsbord"
          subtitle="Dokumentera möten och case-sammanfattningar. Allt sparas automatiskt i din webbläsare."
        />

        {/* Flikar */}
        <div className="flex gap-2 border-b border-slate-800">
          <button
            onClick={() => setActiveTab("meeting")}
            className={`px-4 py-2 font-medium text-sm transition ${
              activeTab === "meeting"
                ? "border-b-2 border-emerald-500 text-emerald-400"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Mötesanteckningar
          </button>
          <button
            onClick={() => setActiveTab("case")}
            className={`px-4 py-2 font-medium text-sm transition ${
              activeTab === "case"
                ? "border-b-2 border-emerald-500 text-emerald-400"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Case-sammanfattning
          </button>
        </div>

        {/* Innehåll */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          {activeTab === "meeting" && <MeetingNoteForm />}
          {activeTab === "case" && <CaseSummaryForm />}
        </div>

        {/* Info */}
        <div className="rounded-lg bg-slate-800/50 border border-slate-700 p-4">
          <p className="text-xs text-slate-400">
            <strong className="text-slate-300">💾 Autosparande:</strong> Dina
            anteckningar sparas automatiskt i webbläsaren. Data lagras endast
            lokalt på din dator och skickas aldrig till någon server.
          </p>
        </div>
      </div>
    </ToastProvider>
  );
}
