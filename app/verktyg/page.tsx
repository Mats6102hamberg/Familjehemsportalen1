import { PageHeader } from "@/components/PageHeader";
import { SectionCard } from "@/components/SectionCard";

export default function VerktygPage() {
  return (
    <div>
      <PageHeader
        title="Verktyg & checklistor"
        subtitle="Här hittar du praktiska stöd som hjälper dig i samtal, bedömningar, dokumentation och riskvärdering."
      />

      <SectionCard title="Checklista: Oro för hedersrelaterat våld (HRV)">
        <p className="font-medium text-slate-100">Tecken att vara uppmärksam på:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Stark kontroll över klädsel, vänner eller fritid.</li>
          <li>Rädsla för att göra familjen besviken eller “dra skam”.</li>
          <li>Begränsningar: får inte delta i vissa aktiviteter eller relationer.</li>
          <li>Berättelser om hot, våld eller tvång kopplat till familjens heder.</li>
        </ul>

        <p className="mt-3 font-medium text-slate-100">
          Frågor som kan ställas utan att öka risken:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <em>“Hur ser en vanlig dag ut för dig?”</em>
          </li>
          <li>
            <em>“Finns det saker du skulle vilja göra som du inte får?”</em>
          </li>
          <li>
            <em>“Vad brukar hända om du inte följer reglerna hemma?”</em>
          </li>
        </ul>

        <p className="mt-3">
          När svaren pekar på stark kontroll, begränsningar och rädsla – förstärk
          stödet och ta frågan vidare enligt rutiner.
        </p>
      </SectionCard>

      <SectionCard title="Samtalsstöd: Samtal med barn/ungdom">
        <p className="font-medium text-slate-100">Mål:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Skapa en snabb känsla av trygghet.</li>
          <li>Låta barnet äga sin berättelse.</li>
          <li>Inte öka risken för barnet genom fel frågor.</li>
        </ul>
        <p className="mt-3 font-medium text-slate-100">Grundprinciper:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Ställ korta, öppna frågor.</li>
          <li>Undvik “Varför gjorde du...” – byt till “Vad hände då?”.</li>
          <li>Var tydlig med att barnet inte bär ansvaret för situationen.</li>
          <li>Bekräfta känslor utan att lova sådant du inte kan hålla.</li>
        </ul>
      </SectionCard>

      <SectionCard title="Samtal med familjehemmet – enkel struktur">
        <ol className="list-decimal space-y-1 pl-5">
          <li>
            <strong>Syftet:</strong> förklara varför samtalet behövs.
          </li>
          <li>
            <strong>Ramarna:</strong> tid, fokus, vad som händer efteråt.
          </li>
          <li>
            <strong>Frågorna:</strong> håll dem konkreta, respektfulla och tydliga.
          </li>
          <li>
            <strong>Efteråt:</strong> summera vad ni kommit överens om.
          </li>
          <li>
            <strong>Uppföljning:</strong> boka en ny avstämning vid behov.
          </li>
        </ol>
      </SectionCard>

      <SectionCard title="Dokumentationsstöd">
        <p className="font-medium text-slate-100">Vad som måste antecknas:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Väsentliga händelser kopplade till barnets säkerhet.</li>
          <li>Faktiska observationer (inte tolkningar).</li>
          <li>Viktiga beslut och vem som fattat dem.</li>
        </ul>
        <p className="mt-3 font-medium text-slate-100">Skriv neutralt men tydligt:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Byt “mamman var hysterisk” mot “mamman höjde rösten, talade snabbt,
            avbröt ofta och verkade mycket upprörd”.
          </li>
          <li>
            Fokusera på vad som sagts och gjorts – inte värderingar kring
            personlighet.
          </li>
        </ul>
      </SectionCard>

      <SectionCard title="Mikrocheck för riskbedömning">
        <ul className="list-disc space-y-1 pl-5">
          <li>Finns kontroll över vardag, socialt liv och val?</li>
          <li>Finns hot, våld eller starka begränsningar?</li>
          <li>Finns tidigare våld i familjen eller släkten?</li>
          <li>Finns oro för att barnet kan föras bort?</li>
        </ul>
        <p className="mt-2">
          Ju fler ja-svar – desto viktigare att förstärka skyddet och samverka
          med andra aktörer enligt gällande rutiner.
        </p>
      </SectionCard>
    </div>
  );
}
