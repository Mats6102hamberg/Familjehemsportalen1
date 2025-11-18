import { PageHeader } from "@/components/PageHeader";
import { SectionCard } from "@/components/SectionCard";

export default function JournalanteckningarPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Journalanteckningar"
        subtitle="Snabb överblick över dina senaste observationer och planerade uppföljningar."
      />

      <SectionCard title="Strukturera dina anteckningar" badge="Tips">
        <ul className="list-disc space-y-1 pl-5">
          <li>Sammanfatta läget kort – vad har hänt sedan sist?</li>
          <li>Notera risk- och skyddsfaktorer samt lämpliga nästa steg.</li>
          <li>Lägg till frågor att lyfta i nästa möte eller handledning.</li>
        </ul>
      </SectionCard>

      <SectionCard title="Att tänka på" badge="Dokumentation">
        <p>
          Ha ett konsekvent upplägg så att anteckningarna är lätta att dela med kollegor
          eller använda som underlag för rapporter. Här kan du även klistra in färdiga
          mallar eller rubriker du använder återkommande.
        </p>
      </SectionCard>
    </div>
  );
}
