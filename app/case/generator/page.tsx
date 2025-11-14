"use client";

import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { SectionCard } from "@/components/SectionCard";

type GeneratedCase = {
  id: number;
  title: string;
  theme: string;
  scenario: string;
  reflectionQuestions: string[];
  focusPoints: string[];
};

const themes = [
  "Skola och fritid",
  "Relationer och kärlek",
  "Familjehemmet i press",
  "Syskon och lojalitet",
  "Bortföranderisk",
  "Normalisering av hedersnormer",
  "Berättelser som tas tillbaka",
  "Längtan hem trots risk",
];

const agePhrases = [
  "En 13-åring",
  "En 14-åring",
  "En 15-åring",
  "En 16-åring",
  "En 17-åring",
];

const contextPhrases = [
  "i familjehem",
  "som nyligen placerats i familjehem",
  "som bott en längre tid i familjehem",
  "som pendlar mellan familjehem och ursprungsfamilj",
];

const tensionPhrases = [
  "upplever stark lojalitet till sin familj men också en önskan om frihet",
  "känner sig klämd mellan familjens krav och egna drömmar",
  "är rädd för konsekvenser om hen inte följer familjens regler",
  "känner skuld över att inte leva upp till familjens förväntningar",
  "har svårt att prata öppet om sin vardag av rädsla för att någon ska bli arg",
];

const schoolSituations = [
  "En klassresa med övernattning närmar sig och ungdomen vill följa med.",
  "Skolan erbjuder en kvällsaktivitet som alla ska delta i.",
  "En lärare uppmuntrar ungdomen att delta i en idrottsturnering.",
];

const relationSituations = [
  "Ungdomen har inlett en relation som absolut inte får bli känd hemma.",
  "En tidigare relation hotar att avslöjas för familjen.",
  "Det circulerar rykten om att ungdomen träffar någon i smyg.",
];

const familyHomeSituations = [
  "Familjehemmet känner sig osäkert på hur mycket de ska lägga sig i.",
  "Familjehemmet tycker att situationen är normal, men du reagerar.",
  "Familjehemmet vill väl men uttrycker sig på ett sätt som liknar hedersnormer.",
];

const riskSituations = [
  "Det pratas löst om en resa till hemlandet inom en snar framtid.",
  "En släkting har antytt att ungdomen inte ska stanna i Sverige.",
  "Det kommer signaler om att familjen planerar något utan att informera myndigheterna.",
];

const reflectionQuestionsBase = [
  "Vilket är ditt första steg – och varför?",
  "Vad behöver du ta reda på innan du går vidare?",
  "När behöver fler aktörer kopplas in?",
  "Vad behöver dokumenteras, och hur?",
  "Hur skyddar du barnet utan att öka risken?",
];

const focusPointsBase = [
  "Bekräfta känslor utan att lova saker du inte kan styra över.",
  "Hjälpa barnet att skilja på skuld, skam och ansvar.",
  "Tydliggöra din roll och ditt uppdrag.",
  "Utforska små konkreta trygghetsstrategier i vardagen.",
  "Lyfta familjehemmets behov av stöd utan att lägga skuld.",
];

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickSome<T>(arr: T[], count: number): T[] {
  const copy = [...arr];
  const result: T[] = [];
  while (result.length < count && copy.length > 0) {
    const index = Math.floor(Math.random() * copy.length);
    result.push(copy.splice(index, 1)[0]);
  }
  return result;
}

function buildScenario(theme: string): string {
  const age = pickRandom(agePhrases);
  const context = pickRandom(contextPhrases);
  const tension = pickRandom(tensionPhrases);

  if (theme === "Skola och fritid") {
    const school = pickRandom(schoolSituations);
    return `${age} ${context} ${tension}. ${school}`;
  }

  if (theme === "Relationer och kärlek") {
    const rel = pickRandom(relationSituations);
    return `${age} ${context} ${tension}. ${rel}`;
  }

  if (theme === "Familjehemmet i press") {
    const fam = pickRandom(familyHomeSituations);
    return `${age} ${context} ${tension}. ${fam}`;
  }

  if (theme === "Bortföranderisk") {
    const risk = pickRandom(riskSituations);
    return `${age} ${context} ${tension}. ${risk}`;
  }

  // Övriga teman – mer generellt scenario
  return `${age} ${context} ${tension}. Situationen har utvecklats så att både barnets trygghet och familjehemmets uppdrag sätts på prov.`;
}

function generateSingleCase(id: number): GeneratedCase {
  const theme = pickRandom(themes);
  const scenario = buildScenario(theme);
  const reflectionQuestions = pickSome(reflectionQuestionsBase, 3);
  const focusPoints = pickSome(focusPointsBase, 3);

  return {
    id,
    theme,
    title: `Genererat case #${id} – ${theme}`,
    scenario,
    reflectionQuestions,
    focusPoints,
  };
}

function generateCases(count: number): GeneratedCase[] {
  const result: GeneratedCase[] = [];
  for (let i = 1; i <= count; i++) {
    result.push(generateSingleCase(i));
  }
  return result;
}

export default function CaseGeneratorPage() {
  const [count, setCount] = useState(5);
  const [cases, setCases] = useState<GeneratedCase[]>([]);

  const handleGenerate = () => {
    const safeCount = Math.min(Math.max(count, 1), 100);
    setCases(generateCases(safeCount));
  };

  return (
    <div>
      <PageHeader
        title="Case-generator"
        subtitle="Generera upp till 100 varierade case för reflektion, handledning och övningar. Innehållet är generellt och kan anpassas efter dina grupper."
      />

      <div className="mb-6 flex flex-wrap items-end gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
        <div>
          <label
            htmlFor="case-count"
            className="block text-xs font-medium text-slate-200"
          >
            Antal case att generera (1–100)
          </label>
          <input
            id="case-count"
            type="number"
            min={1}
            max={100}
            value={count}
            onChange={(e) => setCount(Number(e.target.value) || 1)}
            className="mt-1 w-24 rounded-xl border border-slate-700 bg-slate-950 px-3 py-1.5 text-sm text-slate-50 outline-none ring-emerald-400/50 focus:border-emerald-400 focus:ring-1"
          />
        </div>
        <button
          type="button"
          onClick={handleGenerate}
          className="inline-flex items-center rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm shadow-emerald-500/40 transition hover:bg-emerald-400"
        >
          Generera case
        </button>
        <p className="text-xs text-slate-400">
          Tips: Börja med 3–5 case för diskussion, och öka vid behov. Du kan
          alltid generera en ny omgång.
        </p>
      </div>

      {cases.length === 0 && (
        <p className="text-sm text-slate-300">
          Inga genererade case ännu. Välj antal och klicka på{" "}
          <span className="font-semibold">“Generera case”</span> för att börja.
        </p>
      )}

      <div className="space-y-5">
        {cases.map((c) => (
          <SectionCard key={c.id} title={c.title} badge={c.theme}>
            <p className="font-medium text-slate-100">Scenario:</p>
            <p>{c.scenario}</p>

            <p className="mt-3 font-medium text-slate-100">
              Frågor att reflektera kring:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              {c.reflectionQuestions.map((q, idx) => (
                <li key={idx}>{q}</li>
              ))}
            </ul>

            <p className="mt-3 font-medium text-slate-100">
              Möjligt fokus i samtal:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              {c.focusPoints.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
          </SectionCard>
        ))}
      </div>
    </div>
  );
}
