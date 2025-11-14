import { PageHeader } from "@/components/PageHeader";
import { SectionCard } from "@/components/SectionCard";

export default function CasePage() {
  return (
    <div>
      <PageHeader
        title="Case & övningar"
        subtitle="Här finns korta verklighetsnära case att använda i reflektion, handledning och utbildning."
      />

      <SectionCard title="Case 1 – Ungdom som inte får delta i skolaktivitet" badge="Skola / fritid">
        <p className="font-medium text-slate-100">Scenario:</p>
        <p>
          En 16-årig ungdom berättar för familjehemmet att hen väldigt gärna vill
          följa med på en klassresa med övernattning. Föräldrarna har sagt ett
          tydligt nej och hänvisar till tradition, rykte och “vad släkten ska säga”.
          Ungdomen är ledsen, skamsen och vågar inte ta upp det hemma.
        </p>

        <p className="mt-3 font-medium text-slate-100">Frågor att reflektera kring:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Vad är ditt första steg – och varför just det?</li>
          <li>Hur kan du prata med ungdomen utan att öka pressen hen känner?</li>
          <li>Hur kan du stödja familjehemmet i att ta emot känslorna utan att “lösa allt” åt ungdomen?</li>
          <li>När blir det här en fråga om risk, inte bara begränsning?</li>
        </ul>

        <p className="mt-3 font-medium text-slate-100">Möjligt fokus i samtal:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Bekräfta ungdomens känslor – sorg, ilska, orättvisa.</li>
          <li>Prata om skillnaden mellan “att förstå föräldrarna” och “att hålla med”.</li>
          <li>Utforska vilka vuxna i skolan som kan vara stöd.</li>
        </ul>
      </SectionCard>

      <SectionCard title="Case 2 – Misstanke om bortförande" badge="Hög risk">
        <p className="font-medium text-slate-100">Scenario:</p>
        <p>
          Familjehemmet berättar att de hört antydningar om att familjen planerar
          en “resa till hemlandet”. Ungdomen verkar orolig, undvikande och säger
          att hen “inte vill åka, men måste”. Inga exakta datum finns, men det
          pratas om att det kan bli “snart”.
        </p>

        <p className="mt-3 font-medium text-slate-100">Frågor att reflektera kring:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Vilka tecken gör att du börjar tänka bortföranderisk?</li>
          <li>Vilka steg behöver tas direkt – samma dag?</li>
          <li>Vad behöver dokumenteras, och hur formulerar du det?</li>
          <li>Vilka aktörer behöver kopplas in (skola, socialtjänst, ev. polis)?</li>
        </ul>

        <p className="mt-3 font-medium text-slate-100">Möjliga handlingspunkter:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Kort, tydlig dokumentation av vad som sagts och av vem.</li>
          <li>Kontakt med ansvarig handläggare enligt rutin – samma dag.</li>
          <li>Dialog med familjehemmet om att vara uppmärksamma på förändringar (packning, frånvaro, nya besked).</li>
        </ul>
      </SectionCard>

      <SectionCard title="Case 3 – Familjehemmet känner sig hotat" badge="Trygghet i uppdraget">
        <p className="font-medium text-slate-100">Scenario:</p>
        <p>
          Familjehemmet berättar att en släkting till barnet ringt och i skarpt
          tonfall ifrågasatt hur de sköter sitt uppdrag. De upplever samtalet som
          obehagligt och hotfullt, även om inga direkta hot uttalats. De känner
          sig oroliga inför framtiden och undrar om de ska fortsätta uppdraget.
        </p>

        <p className="mt-3 font-medium text-slate-100">Frågor att reflektera kring:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Hur kan du bekräfta deras oro utan att förstärka rädslan?</li>
          <li>Vad behöver du ta reda på innan nästa steg?</li>
          <li>Hur kan du tydliggöra skillnaden mellan “obehag” och “konkret hot”?</li>
          <li>Vilket stöd kan du erbjuda familjehemmet här och nu?</li>
        </ul>

        <p className="mt-3 font-medium text-slate-100">Möjliga fokusområden i samtal:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Bekräfta att uppdraget ibland innebär påfrestningar.</li>
          <li>Tydliggöra vilka vägar som finns vid hot (anmälan, dokumentation, kontakt med ansvarig).</li>
          <li>Utforska vad familjehemmet behöver för att känna sig tryggare.</li>
        </ul>
      </SectionCard>

      <SectionCard title="Case 4 – Ungdom som lever dubbelliv" badge="Relationer / hemligheter">
        <p className="font-medium text-slate-100">Scenario:</p>
        <p>
          En 15-årig flicka berättar för familjehemmet att hon har en pojkvän som
          hennes familj absolut inte får veta om. Hon är rädd att relationen ska
          avslöjas. Hon har börjat komma hem senare och har stark ångest varje kväll
          inför att någon ska upptäcka något.
        </p>

        <p className="mt-3 font-medium text-slate-100">Frågor att reflektera kring:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Hur hanterar du att hon litar på dig – utan att lova att hålla hemligheter?</li>
          <li>Hur kan du prata med henne utan att öka risken hon lever med hemma?</li>
          <li>När och hur blir detta en fråga där fler aktörer behöver kopplas in?</li>
          <li>Vilka trygga vuxna i skolan skulle kunna vara stöd?</li>
        </ul>

        <p className="mt-3 font-medium text-slate-100">Möjligt fokus i samtal:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Bekräfta hennes rädsla, press och längtan efter frihet.</li>
          <li>
            Vara tydlig med vad du kan och inte kan hålla för dig själv, utifrån ditt uppdrag.
          </li>
          <li>Utforska små konkreta trygghetsstrategier i vardagen.</li>
          <li>
            Prata om att hennes värde inte avgörs av om relationen “godkänns” eller inte.
          </li>
        </ul>
      </SectionCard>

      <SectionCard title="Case 5 – Pojke som kontrollerar sin syster" badge="Syskon / makt">
        <p className="font-medium text-slate-100">Scenario:</p>
        <p>
          En 14-årig pojke i familjehemmet blir upprörd när hans 12-åriga syster gör
          egna val. Han kommenterar hennes kläder, vem hon pratar med och säger att
          hon “förstör familjens heder”. Familjehemmet är osäkra på hur de ska
          hantera dynamiken utan att skapa mer konflikt.
        </p>

        <p className="mt-3 font-medium text-slate-100">Frågor att reflektera kring:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Hur kan du prata med pojken utan att gå rakt i försvar–angrepp?</li>
          <li>När kan det vara bra att prata med syskonen var för sig?</li>
          <li>
            Hur kan du hjälpa pojken att sätta ord på sin oro – utan att bekräfta
            kontrollen?
          </li>
          <li>När blir hans beteende en tydlig risk för systern?</li>
        </ul>

        <p className="mt-3 font-medium text-slate-100">Möjliga fokus i samtal:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Utforska vad han är rädd för ska hända om systern gör egna val.
          </li>
          <li>
            Förklara hur ansvar och rättigheter ser ut i Sverige – på ett konkret sätt.
          </li>
          <li>
            Skydda systern genom tydliga ramar, utan att demonisera honom som person.
          </li>
          <li>
            Stötta familjehemmet i att hålla en tydlig linje: ingen får kontrollera eller
            begränsa ett annat barn.
          </li>
        </ul>
      </SectionCard>

      <SectionCard title="Case 6 – Familjehemmet normaliserar hedersnormer" badge="Normer / uppdrag">
        <p className="font-medium text-slate-100">Scenario:</p>
        <p>
          Familjehemmet kommer själva från en kultur där hedersnormer är vanliga.
          De uttrycker att det är “helt normalt” att en tonårsflicka inte får ha
          pojkvän och säger:
        </p>
        <p className="italic text-slate-300">
          “Det är väl inte så farligt, det är tradition. Så har det alltid varit.”
        </p>
        <p>
          Du märker att deras syn kolliderar med uppdragets krav, och det skaver hos dig.
        </p>

        <p className="mt-3 font-medium text-slate-100">Frågor att reflektera kring:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Hur för du ett samtal om normer utan att familjehemmet känner sig attackerade?
          </li>
          <li>Var går gränsen mellan kultur, värderingar och faktiskt förtryck?</li>
          <li>
            Hur kan du tydliggöra uppdragets ansvar med fokus på barnets rättigheter?
          </li>
          <li>När behöver frågan lyftas vidare i organisationen?</li>
        </ul>

        <p className="mt-3 font-medium text-slate-100">Möjligt fokus i samtal:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Betona att uppdraget styrs av lag och barnets rättigheter – inte av enskilda
            normer.
          </li>
          <li>
            Lyfta fram där de redan gör mycket bra, och bygga vidare på det.
          </li>
          <li>
            Ge exempel på hur familjehem kan stötta barn i att hitta sin egen väg, även
            när det krockar med gamla traditioner.
          </li>
          <li>
            Vara tydlig med var gränsen går: kontroll, begränsning och rädsla är inte
            acceptabelt – oavsett tradition.
          </li>
        </ul>
      </SectionCard>

      <SectionCard title="Case 7 – Ungdom som vill återvända hem trots risk" badge="Längtan / risk">
        <p className="font-medium text-slate-100">Scenario:</p>
        <p>
          En 17-åring uttrycker tydligt att hen vill flytta hem igen. Du vet att det
          tidigare funnits stark kontroll, begränsningar och misstanke om våld i
          hemmet. Ungdomen säger:
        </p>
        <p className="italic text-slate-300 mt-1">
          “Jag orkar inte mer. Jag vill bara hem. Jag bryr mig inte längre om vad som händer.”
        </p>
        <p>
          Familjehemmet är oroliga men vill samtidigt respektera ungdomens vilja.
          Du känner både förståelse för längtan och oro för riskerna.
        </p>

        <p className="mt-3 font-medium text-slate-100">Frågor att reflektera kring:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Vad är längtan? Vad är trötthet? Vad är uppgivenhet?</li>
          <li>Hur pratar du om risk utan att skrämma eller skuldbelägga?</li>
          <li>
            Hur bedömer du hur fritt valet är? Finns press, krav eller hot från familjen?
          </li>
          <li>
            Vad behöver familjehemmet för stöd när ungdomens vilja och risken krockar?
          </li>
          <li>
            Vilka steg måste tas direkt enligt rutin, och vilka kan vänta tills mer information finns?
          </li>
        </ul>

        <p className="mt-3 font-medium text-slate-100">Möjligt fokus i samtal:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Bekräfta längtan hem och tröttheten – även när situationen är farlig vill
            många barn “hem till det de känner igen”.
          </li>
          <li>
            Utforska vad ungdomen behöver för att känna sig trygg där de är nu.
          </li>
          <li>
            Hjälpa ungdomen att skilja mellan “att slippa bråk” och “att bo tryggt”.
          </li>
          <li>
            Vara tydlig: Det är inte ungdomen som bär ansvaret för beslut kring hemflytt.
          </li>
          <li>
            Förklara hur socialtjänstens process ser ut vid önskemål om hemflytt.
          </li>
        </ul>
      </SectionCard>

      <SectionCard title="Case 8 – Ungdom som tar tillbaka sin berättelse" badge="Berättelse / trygghet">
        <p className="font-medium text-slate-100">Scenario:</p>
        <p>
          En 13-åring har tidigare berättat om hot och våld från en äldre släkting.
          Nu säger barnet plötsligt att allt var “påhittat”:
        </p>
        <p className="italic text-slate-300 mt-1">
          “Jag hittade bara på… det var inget. Du behöver inte tänka på det.”
        </p>
        <p>
          Barnet undviker ögonkontakt, blir stelt i kroppen och försöker byta ämne.
          Du får en stark känsla av att något inte stämmer.
        </p>

        <p className="mt-3 font-medium text-slate-100">Frågor att reflektera kring:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>När är “jag hittade på” egentligen ett skydd under press?</li>
          <li>Hur minskar du pressen utan att ge upp möjligheten till säkerhet för barnet?</li>
          <li>Vad och hur ska du dokumentera utan att öka risken?</li>
          <li>Vilka aktörer behöver informeras – och hur mycket?</li>
          <li>Hur kan du visa att du är trygg och inte dömer något barnet sagt?</li>
        </ul>

        <p className="mt-3 font-medium text-slate-100">Möjligt fokus i samtal:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Bekräfta att det är helt okej att ändra sig. Barn skäms ofta när de återtar
            sin berättelse – normalisera det.
          </li>
          <li>
            Förmedla att du inte blir arg, besviken eller stressad när barnet ändrar sin
            historia.
          </li>
          <li>
            Ställa mjuka frågor om känsla, inte fakta: “Hur känns det när vi pratar om det här?”
          </li>
          <li>
            Förklara lugnt att du kommer att ta ansvar för att barnet ska vara tryggt – oavsett
            vad barnet säger idag.
          </li>
          <li>
            Visa att du finns kvar och att barnet inte behöver prata mer just nu.
          </li>
        </ul>
      </SectionCard>
    </div>
  );
}
