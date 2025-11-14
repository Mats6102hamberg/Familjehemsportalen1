import { PageHeader } from "@/components/PageHeader";
import { PrintButton } from "@/components/PrintButton";

export default function OroHRVPrintPage() {
  return (
    <div className="print:bg-white print:text-black">
      <div className="print:hidden mb-4 flex items-center justify-between">
        <PageHeader
          title="Oro för hedersrelaterat våld – utskriftsversion"
          subtitle="Använd webbläsarens 'Skriv ut' och välj 'Spara som PDF' om du vill skapa en PDF."
        />
        <PrintButton />
      </div>

      <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5 print:border-none print:bg-white print:p-0">
        <h1 className="mb-2 text-lg font-semibold print:text-black">
          Checklista: Oro för hedersrelaterat våld (HRV)
        </h1>

        <p className="mb-2 text-sm print:text-black">
          Den här checklistan kan användas som stöd vid första bedömning av oro
          för hedersrelaterat våld och förtryck. Anpassa alltid efter situation
          och följ gällande rutiner.
        </p>

        <h2 className="mt-4 text-sm font-semibold print:text-black">
          Tecken att vara uppmärksam på
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm print:text-black">
          <li>Stark kontroll över klädsel, vänner eller fritid.</li>
          <li>Rädsla för att göra familjen besviken eller “dra skam”.</li>
          <li>Begränsningar: får inte delta i vissa aktiviteter eller relationer.</li>
          <li>Berättelser om hot, våld eller tvång kopplat till familjens heder.</li>
        </ul>

        <h2 className="mt-4 text-sm font-semibold print:text-black">
          Frågor som kan ställas utan att öka risken
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm print:text-black">
          <li>“Hur ser en vanlig dag ut för dig?”</li>
          <li>“Finns det saker du skulle vilja göra som du inte får?”</li>
          <li>“Vad brukar hända om du inte följer reglerna hemma?”</li>
        </ul>

        <h2 className="mt-4 text-sm font-semibold print:text-black">
          När går vi vidare?
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm print:text-black">
          <li>
            När svaren pekar på stark kontroll, begränsningar och rädsla – förstärk
            stödet.
          </li>
          <li>
            Dokumentera kortfattat de viktigaste observationerna och uppgifterna.
          </li>
          <li>
            Ta frågan vidare enligt gällande rutiner (ansvarig handläggare, samverkan,
            ev. akutbedömning).
          </li>
        </ul>
      </div>
    </div>
  );
}
