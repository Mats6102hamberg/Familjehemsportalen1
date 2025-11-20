"use client";

import { useState, useEffect } from "react";
import { MeetingNote, emptyMeetingNote } from "@/types/notes";
import { loadMeetingNote, saveMeetingNote } from "@/lib/storage";
import { generateMeetingNotePdf } from "@/lib/pdf";
import { useToast } from "./ToastProvider";

export function MeetingNoteForm() {
  const [note, setNote] = useState<MeetingNote>(emptyMeetingNote);
  const { showToast } = useToast();

  // Ladda från localStorage vid mount
  useEffect(() => {
    const saved = loadMeetingNote();
    if (saved) {
      setNote(saved);
    }
  }, []);

  // Autosave med debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      saveMeetingNote(note);
      if (Object.values(note).some((val) => val !== "")) {
        showToast("Sparat", "success");
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [note, showToast]);

  const handleChange = (field: keyof MeetingNote, value: string) => {
    setNote((prev) => ({ ...prev, [field]: value }));
  };

  const handleGeneratePdf = () => {
    try {
      generateMeetingNotePdf(note);
      showToast("PDF skapad", "success");
    } catch (error) {
      console.error("PDF-fel:", error);
      showToast("Fel vid PDF-skapande", "error");
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-200 mb-1">
            Datum
          </label>
          <input
            type="date"
            value={note.datum}
            onChange={(e) => handleChange("datum", e.target.value)}
            className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200 mb-1">
            Plats
          </label>
          <input
            type="text"
            value={note.plats}
            onChange={(e) => handleChange("plats", e.target.value)}
            placeholder="T.ex. Kontoret, Hembesök"
            className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200 mb-1">
            Barnkod/ID
          </label>
          <input
            type="text"
            value={note.barnkod}
            onChange={(e) => handleChange("barnkod", e.target.value)}
            placeholder="T.ex. B123"
            className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200 mb-1">
            Uppföljningsdatum
          </label>
          <input
            type="date"
            value={note.uppfoljningsdatum}
            onChange={(e) => handleChange("uppfoljningsdatum", e.target.value)}
            className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-200 mb-1">
          Närvarande
        </label>
        <input
          type="text"
          value={note.narvarande}
          onChange={(e) => handleChange("narvarande", e.target.value)}
          placeholder="T.ex. Familjehem, handläggare, barn"
          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-200 mb-1">
          Syfte med mötet
        </label>
        <textarea
          value={note.syfte}
          onChange={(e) => handleChange("syfte", e.target.value)}
          placeholder="Beskriv varför mötet hålls..."
          rows={3}
          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-200 mb-1">
          Diskussionspunkter
        </label>
        <textarea
          value={note.punkter}
          onChange={(e) => handleChange("punkter", e.target.value)}
          placeholder="Vad togs upp under mötet..."
          rows={5}
          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-200 mb-1">
          Åtgärder och beslut
        </label>
        <textarea
          value={note.atgarder}
          onChange={(e) => handleChange("atgarder", e.target.value)}
          placeholder="Vilka åtgärder beslutades..."
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
