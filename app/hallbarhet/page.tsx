import { PageHeader } from "@/components/PageHeader";
import { SectionCard } from "@/components/SectionCard";

export default function HallbarhetPage() {
  return (
    <div>
      <PageHeader
        title="Egen hållbarhet"
        subtitle="Du ska hålla länge i det här arbetet. Ditt mående spelar roll – både för dig själv och för dem du möter."
      />

      <SectionCard title="Att bli berörd är normalt">
        <p>
          Att arbeta nära barn och familjer i hederskontext är känslomässigt
          krävande. Det är inte ett tecken på svaghet att bli berörd – det är
          ofta ett tecken på att du tar ditt uppdrag på allvar.
        </p>
      </SectionCard>

      <SectionCard title="Reflektionsfrågor – för dig själv eller med kollega">
        <ul className="list-disc space-y-1 pl-5">
          <li>Vad bar jag med mig hem idag?</li>
          <li>Vilken situation tog mest energi?</li>
          <li>Vad hade jag behövt få sagt eller få stöd i?</li>
          <li>Finns något jag behöver lägga ifrån mig innan nästa arbetsdag?</li>
        </ul>
      </SectionCard>

      <SectionCard title="Självomsorg utan floskler">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Avsluta dagen med en kort egen “logg”: vad hände, vad gjorde jag,
            vad tar jag med mig?
          </li>
          <li>
            Prata kort med en kollega eller handledare när något känns extra
            tungt – även 5 minuter kan göra skillnad.
          </li>
          <li>
            Skapa små ritualer för att “stänga arbetsdagen” mentalt innan du går
            hem.
          </li>
        </ul>
      </SectionCard>
    </div>
  );
}
