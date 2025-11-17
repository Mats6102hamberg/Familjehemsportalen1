"use client";

import { useState } from "react";

const TARGETS = [
  "familjehem",
  "ungdom",
  "biologisk familj",
  "skola",
  "socialtjänst",
];

const CONTEXTS = [
  "hedersrelaterade normer kring klädsel, umgänge och relationer",
  "hot om att bli skickad utomlands",
  "kontroll av mobil och sociala medier",
  "skolfrånvaro kopplad till oro för familjens reaktioner",
  "stark lojalitet till familjen trots risk",
];

const TWISTS = [
  "En person i nätverket stöttar barnet i smyg.",
  "Familjehemmet känner sig ifrågasatt av både släkt och myndigheter.",
  "Skolan upplever att de inte får tillräcklig information.",
  "Socialtjänsten är splittrad i sin bedömning.",
  "Barnet säger olika saker till olika vuxna.",
];

const QUESTIONS = [
  "Vilka risker ser du i situationen på kort respektive lång sikt?",
  "Vad behöver barnet just nu – känslomässigt och praktiskt?",
  "Vad kan familjehemmet behöva för stöd för att orka långsiktigt?",
  "Vad behöver tydliggöras i kontakten med socialtjänsten?",
  "Vilka normer och föreställningar behöver synliggöras i arbetet?",
];

function generateCase(): string {
  const target = TARGETS[Math.floor(Math.random() * TARGETS.length)];
  const context = CONTEXTS[Math.floor(Math.random() * CONTEXTS.length)];
  const twist = TWISTS[Math.floor(Math.random() * TWISTS.length)];
  const q1 = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
  const q2 = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];

  return [
    `En ${target} befinner sig i en situation präglad av ${context}.`,
    "",
    twist,
    "",
    "Diskutera:",
    `• ${q1}`,
    `• ${q2}`,
    "• Vilka aktörer behöver samverka och på vilket sätt?",
  ].join("\n");
}

export function CaseGenerator() {
  const [text, setText] = useState<string | null>(null);

  const handleGenerate = () => {
    setText(generateCase());
  };

  return (
    <div className="space-y-3 text-sm text-slate-200">
      <p>
        Klicka på knappen för att skapa ett nytt caseförslag. Du kan justera
        texten efteråt så att den passar din grupp.
      </p>

      <button
        type="button"
        onClick={handleGenerate}
        className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm shadow-emerald-500/40 transition hover:bg-emerald-400"
      >
        Skapa nytt case
      </button>

      {text && (
        <textarea
          className="mt-2 w-full min-h-[200px] rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 outline-none ring-emerald-400/50 focus:border-emerald-400 focus:ring-1"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      )}

      {!text && (
        <p className="text-xs text-slate-400">
          Förslag: låt deltagarna först läsa caset tyst, sedan arbeta i mindre
          grupper med frågorna innan ni tar det i helgrupp.
        </p>
      )}
    </div>
  );
}

export default CaseGenerator;
