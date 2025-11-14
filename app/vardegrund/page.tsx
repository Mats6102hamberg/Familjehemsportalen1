import { PageHeader } from "@/components/PageHeader";
import { SectionCard } from "@/components/SectionCard";

export default function VardegrundPage() {
  return (
    <div>
      <PageHeader
        title="Varför sidan finns – arbetssätt & värdegrund"
        subtitle="Den här sidan är skapad för att ge stöd till dig som arbetar med familjehem och barn i hederskontext."
      />

      <SectionCard title="Syftet med portalen">
        <p>
          Portalen ska vara en trygg digital punkt där du kan hämta stöd i
          svåra lägen, hitta konkreta verktyg och fördjupa din kunskap. Den är
          inte en ersättning för handledning eller kollegialt stöd – utan ett
          komplement som alltid finns nära till hands.
        </p>
      </SectionCard>

      <SectionCard title="Grundsyn">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Barnets trygghet först:</strong> Barnets rätt till skydd och
            utveckling går före hedersnormer och lojalitetskrav.
          </li>
          <li>
            <strong>Respekt och tydlighet:</strong> Vi kan möta familjer med
            respekt och lyhördhet – samtidigt som vi är tydliga med att våld och
            förtryck aldrig är acceptabelt.
          </li>
          <li>
            <strong>Du ska inte stå ensam:</strong> Svåra beslut ska inte bäras
            av en enskild person. Samverkan, rutiner och stöd är avgörande.
          </li>
        </ul>
      </SectionCard>

      <SectionCard title="Sekretess & integritet på sidan">
        <p>
          Här ska inte klienters namn eller direkt identifierande uppgifter
          förekomma. Sidan är tänkt som metod- och stödportal, inte som
          ärendejournal. Din professionella integritet och barnens integritet
          är en del av grundidén.
        </p>
      </SectionCard>
    </div>
  );
}
