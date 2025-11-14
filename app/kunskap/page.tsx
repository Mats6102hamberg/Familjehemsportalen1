import { PageHeader } from "@/components/PageHeader";
import { SectionCard } from "@/components/SectionCard";

export default function KunskapPage() {
  return (
    <div>
      <PageHeader
        title="Kunskapsbank & kursmaterial"
        subtitle="Här finns materialet från kursen samlat. Varje del har en kort 'på 2 minuter'-sammanfattning och möjlighet att fördjupa sig."
      />

      <SectionCard title="Del 1 – Vad är hedersrelaterat våld och förtryck?">
        <p className="font-medium text-slate-100">På 2 minuter:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Handlar om kontroll över beteende, sexualitet, relationer och val i
            livet.
          </li>
          <li>
            Gruppens eller familjens heder sätts före individens vilja och
            rättigheter.
          </li>
          <li>
            Skam, skuld och hot används för att upprätthålla normerna.
          </li>
        </ul>
        <p className="mt-3">
          I fördjupning kan vi prata om begrepp, lagstiftning och hur HRV kan ta
          sig uttryck i vardagen – både öppet och mer dolt.
        </p>
      </SectionCard>

      <SectionCard title="Del 2 – Familjehemmets roll">
        <p>
          Familjehemmet är en trygg bas men kan hamna mitt i konflikten mellan
          barnets behov och familjens krav eller hedersnormer.
        </p>
        <ul className="list-disc space-y-1 pl-5 mt-2">
          <li>Familjehemmet behöver stöd i att sätta gränser på ett tryggt sätt.</li>
          <li>
            De kan bli utsatta för tryck eller påtryckningar – direkt eller
            indirekt.
          </li>
          <li>
            Tydliga ramar, kontinuerlig dialog och återkoppling är avgörande.
          </li>
        </ul>
      </SectionCard>

      <SectionCard title="Del 3 – Barnets perspektiv">
        <p className="font-medium text-slate-100">
          Påminnelse: barn kan vara dubbelt lojala.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Rädda att svika familjen.</li>
          <li>Rädda för konsekvenser inom släkten.</li>
          <li>Rädda för att bli isolerade eller utkastade.</li>
        </ul>
        <p className="mt-2">
          Vårt uppdrag är att skapa en relation där barnet vågar prata, utan att
          känna sig som en förrädare. Små steg, återkommande samtal och tydlig
          trygghet är viktigare än “det perfekta samtalet”.
        </p>
      </SectionCard>

      <SectionCard title="Del 4 – Samtalsmetodik i svåra lägen">
        <ul className="list-disc space-y-1 pl-5">
          <li>Förbered dig: syfte, ramar, vad du vill förstå.</li>
          <li>Ställ öppna frågor och låt tystnad få finnas.</li>
          <li>Bekräfta känslor utan att lova resultat du inte styr över.</li>
          <li>
            Avsluta med en tydlig sammanfattning: vad har sagts, vad blir nästa
            steg, vad kan barnet eller familjehemmet förvänta sig.
          </li>
        </ul>
      </SectionCard>

      <SectionCard title="Del 5 – Samverkan">
        <p>
          Arbetet kring barn i hederskontext kräver ofta samverkan mellan flera
          aktörer: socialtjänst, skola, polis, hälso- och sjukvård och ibland
          civilsamhälle.
        </p>
        <p className="mt-2">
          I kursen kan vi fördjupa hur sekretess, informationsdelning och
          gemensam planering fungerar – men här hittar du en påminnelse om att
          du inte ska bära allt ensam.
        </p>
      </SectionCard>
    </div>
  );
}
