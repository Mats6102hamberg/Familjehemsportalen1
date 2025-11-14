"use client";

import { useState } from "react";

const situations = [
  {
    id: 1,
    title: "Barn/ungdom vill lämna familjehemmet NU",
    aiPrompt:
      "Situationen: Barn/ungdom vill lämna familjehemmet akut. Hjälp mig att sortera risk, känsla, steg, dokumentation och nästa steg.",
    steps: [
      "Stanna upp, behåll lugnet och bekräfta barnets känsla – ingen moralpredikan.",
      "Sätt er ner på en lugn plats. Lås inte dörrar, men minska möjligheten till impulsiva beslut.",
      "Fråga mjukt: Vad gör att du vill gå just nu? Försök förstå om det handlar om konflikt, längtan eller rädsla.",
      "Utforska om någon kontaktat barnet (familj, släkt, sociala medier) inför att barnet vill gå.",
      "Prioritera fysisk säkerhet: var om möjligt två vuxna närvarande.",
      "Ring socialtjänstens jour enligt rutin. Vid omedelbar fara eller hot – ring 112.",
      "Dokumentera tidpunkt, vad som sagts, vad som hänt och vilka åtgärder som vidtagits.",
    ],
  },
  {
    id: 2,
    title: "Akut oro för bortförande",
    aiPrompt:
      "Situationen: Akut oro för bortförande. Hjälp mig identifiera risk, vad som ska göras direkt, vilka steg som är viktiga och hur jag ska dokumentera.",
    steps: [
      "Ta alltid bortföranderisk på största allvar – hellre en gång för mycket än en gång för lite.",
      "Håll barnet nära och under uppsikt. Låt barnet inte röra sig ensam utanför hem/skola.",
      "Fråga försiktigt om barnet fått meddelanden eller information om resa, mötesplats eller liknande.",
      "Kontakta ansvarig handläggare eller jour omgående och informera kort om läget.",
      "Vid konkret hot eller planerad hämtning – ring 112 och följ polisens instruktioner.",
      "Informera berörda vuxna i närmiljön (t.ex. skola) enligt överenskommen rutin.",
      "Dokumentera exakt vad som sagts, vem som sagt det och vilka åtgärder som vidtagits.",
    ],
  },
  {
    id: 3,
    title: "Släkting dyker upp oannonserat",
    aiPrompt:
      "Situationen: Släkting dyker upp oannonserat vid familjehem eller skola. Hjälp mig förstå läge, risk och rätt steg.",
    steps: [
      "Var aldrig ensam – ta med en kollega eller annan vuxen om du behöver gå ut.",
      "Håll barnet på en trygg plats inomhus, utom synhåll om situationen känns hotfull.",
      "Undvik att gå in i diskussion eller konflikt med släktingen. Håll kommunikationen kort och saklig.",
      "Kontakta socialtjänsten direkt och informera om situationen.",
      "Vid hot, aggressivitet eller försök att ta barnet – ring 112 omedelbart.",
      "Dokumentera tid, vem som dök upp, vad som sades och hur personen uppträdde.",
      "Följ upp med familjehemmet kring känslor, oro och behov av stöd efter händelsen.",
    ],
  },
  {
    id: 4,
    title: "Familjehemmet känner sig akut hotat eller otryggt",
    aiPrompt:
      "Situationen: Familjehemmet känner sig akut hotat eller otryggt i sitt uppdrag. Hjälp mig att sortera stödbehov, säkerhetssteg och uppföljning.",
    steps: [
      "Lyssna in familjehemmets upplevelse utan att bagatellisera deras oro.",
      "Fråga konkret: Vad har hänt? Vad är det som gör att ni känner er hotade just nu?",
      "Bedöm om hotet gäller direkt fara (någon på väg, uttalade hot, tidigare våld).",
      "Vid akut fara – ring 112 och informera socialtjänstens jour.",
      "Planera omedelbar avlastning: kan någon komma ut, kan barnet tillfälligt flyttas, behövs väktare/extra skydd?",
      "Dokumentera hoten noggrant och vidarebefordra enligt rutin.",
      "Planera uppföljningssamtal med familjehemmet – de behöver stöd även efter den akuta situationen.",
    ],
  },
  {
    id: 5,
    title: "Jag upplever att något är väldigt fel – men vet inte vad",
    aiPrompt:
      "Situationen: Jag har en stark magkänsla att något är fel kring barnet eller familjen, men kan inte sätta ord på exakt vad. Hjälp mig att sortera observationer, nästa steg och hur jag kan formulera en oro.",
    steps: [
      "Ta din magkänsla på allvar – erfarenhet och intuition är viktiga signaler.",
      "Skriv ner konkreta observationer: beteendeförändringar, frånvaro, kroppsspråk, stämning.",
      "Fundera över: När började känslan? Vad är det som skaver mest?",
      "Rådfråga en kollega, handledare eller ansvarig handläggare – dela din oro utan att måla upp värsta scenariot.",
      "Dokumentera din oro sakligt, utan att spekulera – håll dig till vad du sett och hört.",
      "Kom överens med ansvarig handläggare om hur oron ska följas upp.",
      "Följ upp ditt eget mående – det är tungt att bära oro utan tydlig bild.",
    ],
  },
];

export const AkutModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [selected, setSelected] = useState<number | null>(null);

  if (!open) return null;

  const situation = situations.find((s) => s.id === selected);

  return (
    <div
      className="
        fixed inset-0 z-50
        bg-black/50 backdrop-blur-sm
        flex items-center justify-center
        p-4
      "
    >
      <div
        className="
          w-full max-w-xl
          rounded-2xl
          bg-slate-900
          border border-slate-700
          p-5
          shadow-xl
        "
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-slate-100">
            Akut stöd – Steg för steg
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 text-xl"
          >
            ×
          </button>
        </div>

        {/* Visa lista OM ingen situation är vald */}
        {!situation && (
          <div className="space-y-3">
            {situations.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelected(s.id)}
                className="
                  w-full text-left px-3 py-3
                  bg-slate-800 rounded-xl
                  text-slate-200
                  border border-slate-700
                  hover:bg-slate-700
                  transition
                "
              >
                {s.title}
              </button>
            ))}
          </div>
        )}

        {/* Visa steg-för-steg OM situation vald */}
        {situation && (
          <div>
            <h3 className="text-slate-200 font-semibold mb-2">
              {situation.title}
            </h3>

            <ol className="space-y-2 list-decimal pl-5 text-slate-300 text-sm">
              {situation.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>

            <button
              onClick={() => setSelected(null)}
              className="mt-5 text-sm text-slate-400 hover:text-slate-200"
            >
              ← Tillbaka till listan
            </button>

            <button
              onClick={() => {
                // Trigger AI-stöttning via din AI-widget
                alert(
                  "Öppna AI-stödet nere till höger och skriv: \n\n" +
                    situation.aiPrompt
                );
              }}
              className="
                mt-4 w-full
                rounded-xl
                bg-emerald-500 text-slate-950 font-semibold
                py-2
                hover:bg-emerald-400
              "
            >
              Få AI-stöd i detta
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
