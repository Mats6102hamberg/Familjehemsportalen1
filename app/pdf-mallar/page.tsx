import { PageHeader } from "@/components/PageHeader";
import { SectionCard } from "@/components/SectionCard";

export default function PdfMallarPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="PDF-mallar"
        subtitle="Här samlar du mallar för dokumentation, rutiner och kommunikation."
      />

      <SectionCard title="Populära mallar" badge="Snabbstart">
        <ul className="list-disc space-y-1 pl-5">
          <li>Akutplan – steg-för-steg vid oro för hedersrelaterat våld.</li>
          <li>Samtalsmall med ungdomar inför uppföljning.</li>
          <li>Checklista inför möte med familjehemmet.</li>
        </ul>
      </SectionCard>

      <SectionCard title="Tips" badge="Anpassning">
        <p>
          Anpassa varje mall efter ärendets behov och markera tydligt vad som är obligatoriskt
          respektive valfritt. Lägg gärna in egna exempel eller stödfrågor.
        </p>
      </SectionCard>
    </div>
  );
}
