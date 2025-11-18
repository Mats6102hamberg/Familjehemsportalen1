import { PageHeader } from "@/components/PageHeader";
import { SectionCard } from "@/components/SectionCard";

export default function MotesanteckningarPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Mötesanteckningar"
        subtitle="Samla beslut, känslor och uppföljningspunkter från dina möten."
      />

      <SectionCard title="Under mötet" badge="Struktur">
        <ul className="list-disc space-y-1 pl-5">
          <li>Anteckna vem som säger vad och vilka känslor som uttrycks.</li>
          <li>Markera beslut och vem som ansvarar för nästa steg.</li>
          <li>Lyft frågor som behöver återkomma till senare.</li>
        </ul>
      </SectionCard>

      <SectionCard title="Efter mötet" badge="Reflektion">
        <p>
          Sammanfatta vad som blev tydligt, vilka risker eller möjligheter som framkom och om fler insatser
          behöver initieras. Skicka anteckningarna till berörda så inget tappas bort.
        </p>
      </SectionCard>
    </div>
  );
}
