import { PageHeader } from "@/components/PageHeader";
import { SectionCard } from "@/components/SectionCard";
import CaseGenerator from "@/components/CaseGenerator";

export default function CaseGeneratorPage() {
  return (
    <div>
      <PageHeader
        title="Case-generator"
        subtitle="Skapa snabbt nya case för handledning, reflektion och övningar. Justera texten efter behov."
      />

      <SectionCard title="Generera case" badge="Interaktivt">
        <CaseGenerator />
      </SectionCard>
    </div>
  );
}
