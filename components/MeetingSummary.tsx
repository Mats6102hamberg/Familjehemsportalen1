"use client";

import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { SectionCard } from "@/components/SectionCard";
import { generateMeetingSummaryPdf } from "@/lib/pdf";
import { useToast } from "@/components/ToastProvider";

export const MeetingSummary = () => {
  const [notes, setNotes] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSummarize = async () => {
    const trimmed = notes.trim();
    if (!trimmed || isLoading) return;

    setIsLoading(true);
    setError(null);
    setResult(null);

    const prompt = `
Jag är kursledare/handledare och har haft en cirka tre timmar lång sittning (t.ex. via Teams) med en liten grupp som arbetar med familjehem och hedersrelaterad problematik.

Här är mina råa, ganska ostrukturerade anteckningar från mötet:

""" 
${trimmed}
"""

Gör nu en professionell bearbetning av detta material på svenska. Jag vill ha fyra delar i svaret:

1) Kort sammanfattning (5–8 meningar) anpassad för chefer eller en övergripande läsare.
2) Utförlig sammanfattning (1–2 sidor text) som fångar huvudteman, viktiga diskussioner, reflektioner och lärdomar.
3) Snygg presentations­text (8–15 meningar) som skulle kunna ligga i min kursportal som beskrivning av vad vi arbetade med den här gången. Den ska ha varm, professionell ton – lyfta gruppens mod, utveckling och fokus på barnets bästa.
4) Punktlista med “Fokus till nästa gång” (max 8 punkter) – konkret, handlingsinriktat men utan att lova saker jag inte styr över.

Skriv allt på svenska, tydligt uppdelat med rubriker:

# Kort sammanfattning
# Utförlig sammanfattning
# Presentations­text
# Fokus till nästa gång
    `.trim();

    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "general",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      });

      const data = await res.json();

      if (data.error) {
        setError(
          "Kunde inte få svar från AI-tjänsten just nu. Försök igen om en stund."
        );
      } else {
        setResult(data.reply ?? "");
      }
    } catch (err) {
      console.error(err);
      setError(
        "Något gick fel i kontakten med AI-tjänsten. Kontrollera uppkoppling och försök igen."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const hasNotes = notes.trim().length > 0;

  return (
    <div>
      <PageHeader
        title="Mötes­sammanfattning"
        subtitle="Klistra in dina anteckningar efter handledning eller utbildning – portalen hjälper dig att skapa en tydlig sammanfattning, en snygg presentations­text och fokus till nästa gång."
      />

      <SectionCard title="1. Klistra in dina anteckningar" badge="Underlag">
        <p className="text-sm text-slate-200 mb-4">
          Efter ett möte (t.ex. tre timmar via Teams): klistra in dina råa
          anteckningar här. Det gör inget om de är röriga – AI:n hjälper dig att
          sortera.
        </p>

        <div className="text-slate-400 text-sm mb-4 rounded-lg bg-slate-800/50 border border-slate-700 p-3">
          <strong className="text-slate-300">Tips:</strong> Du kan skriva ut eller spara som PDF med{" "}
          <span className="font-medium text-slate-200">⌘ + P</span> (Mac) eller{" "}
          <span className="font-medium text-slate-200">Ctrl + P</span> (Windows).
        </div>

        <textarea
          className="mt-3 w-full min-h-[200px] rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 outline-none ring-emerald-400/50 focus:border-emerald-400 focus:ring-1"
          placeholder="Ex: punkter, stödord, vad som sades, stämningar, frågor som kom upp..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        <div className="mt-3 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleSummarize}
            disabled={!hasNotes || isLoading}
            className="
              rounded-xl
              bg-emerald-500
              px-4 py-2
              text-sm font-semibold text-slate-950
              shadow-sm shadow-emerald-500/40
              transition
              hover:bg-emerald-400
              disabled:opacity-60 disabled:cursor-not-allowed
            "
          >
            {isLoading ? "Arbetar..." : "Skapa sammanfattning och presentations­text"}
          </button>
          <p className="text-xs text-slate-400">
            Ju mer du skriver in, desto bättre blir sammanfattningen. Du kan
            alltid justera texterna efteråt.
          </p>
        </div>

        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
      </SectionCard>

      <SectionCard title="2. Resultat" badge="Sammanfattning">
        {!result && !isLoading && (
          <p className="text-sm text-slate-300">
            När du klickar på knappen ovan dyker den bearbetade texten upp här:
            kort sammanfattning, utförlig sammanfattning, presentations­text och
            fokus till nästa gång.
          </p>
        )}

        {isLoading && (
          <p className="text-sm text-slate-300">
            AI:n arbetar med att forma dina anteckningar till ett sammanhängande
            material...
          </p>
        )}

        {result && (
          <>
            <div className="mt-2 whitespace-pre-wrap rounded-xl border border-slate-800 bg-slate-950/80 p-3 text-sm text-slate-100">
              {result}
            </div>

            <MeetingSummaryPdfButton notes={notes} summary={result} />
          </>
        )}
      </SectionCard>
    </div>
  );
};

function MeetingSummaryPdfButton({ notes, summary }: { notes: string; summary: string }) {
  const { showToast } = useToast();

  const handleGeneratePdf = () => {
    try {
      generateMeetingSummaryPdf(notes, summary);
      showToast("PDF skapad", "success");
    } catch (error) {
      console.error("PDF-fel:", error);
      showToast("Fel vid PDF-skapande", "error");
    }
  };

  return (
    <div className="mt-4 flex justify-end">
      <button
        onClick={handleGeneratePdf}
        className="px-6 py-2 bg-emerald-500 text-slate-950 font-semibold rounded-lg hover:bg-emerald-400 transition shadow-sm shadow-emerald-500/40"
      >
        Skapa PDF
      </button>
    </div>
  );
}
