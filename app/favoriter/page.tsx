import { PageHeader } from "@/components/PageHeader";
import { SectionCard } from "@/components/SectionCard";

export default function FavoriterPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Favoriter"
        subtitle="Snabb åtkomst till det material du använder mest."
      />

      <SectionCard title="Så funkar det" badge="Organisering">
        <p>
          Lägg till dina mest använda verktyg, mallar eller case så hittar du dem direkt. Tips: samla
          länkarna per kategori eller situation så blir det lätt att navigera även under stress.
        </p>
      </SectionCard>

      <SectionCard title="Idéer" badge="Inspiration">
        <ul className="list-disc space-y-1 pl-5">
          <li>Snabba checklistor inför hembesök.</li>
          <li>Formuleringar för svåra samtal.</li>
          <li>Länkar till externa resurser du ofta rekommenderar.</li>
        </ul>
      </SectionCard>
    </div>
  );
}
