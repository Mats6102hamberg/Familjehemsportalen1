import { PageHeader } from "@/components/PageHeader";
import { SectionCard } from "@/components/SectionCard";

export default function AkutPage() {
  return (
    <div>
      <PageHeader
        title="När det är svårt – steg-för-steg-stöd"
        subtitle="I akuta eller känslomässigt pressade situationer behövs tydliga steg, inte långa texter. Här hittar du stöd som hjälper dig att agera tryggt, professionellt och med barnets bästa i fokus."
      />

      <SectionCard title="Omedelbar fara" badge="Steg 1">
        <p>
          <strong>Vid misstanke om akut fara: ring 112.</strong>
        </p>
        <p>
          Du behöver inte ha hela bilden klar. Vid minsta osäkerhet – agera
          hellre en gång för mycket än en gång för lite.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Är barnet eller ungdomen fysiskt hotad just nu?</li>
          <li>Finns risk att barnet förs bort eller isoleras?</li>
          <li>Finns det aktuella hot, våld eller stark kontroll?</li>
        </ul>
        <p className="mt-2 font-medium text-slate-100">Gör detta direkt:</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Ring 112 vid konkret fara.</li>
          <li>
            Dokumentera kort: <em>tid</em>, <em>plats</em> och{" "}
            <em>vad som hänt eller sagts</em>.
          </li>
          <li>
            Kontakta socialjour eller ansvarig funktion enligt gällande rutiner.
          </li>
        </ol>
      </SectionCard>

      <SectionCard title="Ett svårt samtal med familjehemmet" badge="Steg 2">
        <p>
          Du behöver inte övertyga, vinna en diskussion eller förklara hela
          hederskontexten i ett enda samtal. Ditt fokus är barnets säkerhet och
          en lugn, respektfull dialog.
        </p>
        <p className="font-medium text-slate-100">Stödfraser att luta dig mot:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <em>“Jag ställer några frågor för att förstå situationen bättre.”</em>
          </li>
          <li>
            <em>“Det här handlar om barnets trygghet, inte skuld.”</em>
          </li>
          <li>
            <em>“Vi tar det steg för steg.”</em>
          </li>
        </ul>
        <p>
          Håll samtalet kort, konkret och lugnt. Du kan alltid återkomma med
          mer fördjupning senare.
        </p>
      </SectionCard>

      <SectionCard
        title="När du är rädd att göra fel eller känner dig osäker"
        badge="Steg 3"
      >
        <p>
          Det är normalt att känna sig osäker i hedersrelaterade situationer. Det
          är ofta ett tecken på att du tar uppdraget på allvar.
        </p>
        <p className="font-medium text-slate-100">
          Gå tillbaka till de tre grundfrågorna:
        </p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Finns det akut risk för barnet?</li>
          <li>Finns kontroll, hot eller begränsningar i barnets vardag?</li>
          <li>Kan barnet tala fritt utan rädsla för konsekvenser?</li>
        </ol>
        <p>
          Använd checklistan{" "}
          <strong>“Oro för HRV – första bedömning”</strong> när du behöver
          struktur. Dokumentera kort – det behöver inte bli perfekt.
        </p>
        <p className="mt-2 italic text-slate-300">
          Du behöver inte kunna allt. Du ska bara ta nästa steg.
        </p>
      </SectionCard>
    </div>
  );
}
