import { PageHeader } from "@/components/PageHeader";
import { SectionCard } from "@/components/SectionCard";

export default function ChecklistaPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Checklista för handledning"
        subtitle="Säkerställ att varje handledningstillfälle blir fokuserat och återkopplat."
      />

      <SectionCard title="Inför handledning" badge="Förberedelser">
        <ul className="list-disc space-y-1 pl-5">
          <li>Gå igenom aktuella case och välj vad som behöver prioriteras.</li>
          <li>Samla observationer, frågor och oro från familjehemmet.</li>
          <li>Bestäm vilket stöd du behöver från handledaren.</li>
        </ul>
      </SectionCard>

      <SectionCard title="Efter mötet" badge="Uppföljning">
        <p>
          Dokumentera beslut, fördela ansvar och planera uppföljningsdatum. Dela en kort
          sammanfattning med berörda personer så att alla står på samma sida.
        </p>
      </SectionCard>
    </div>
  );
}
