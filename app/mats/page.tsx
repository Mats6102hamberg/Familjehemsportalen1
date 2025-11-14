import { PageHeader } from "@/components/PageHeader";
import { SectionCard } from "@/components/SectionCard";
import { NotePad } from "@/components/NotePad";

export default function MatsPage() {
  return (
    <div>
      <PageHeader
        title="Kursledarhörnan – för Mats"
        subtitle="En egen plats för dina reflektioner, planering och idéer kring kursen och deltagarna."
      />

      <SectionCard title="Inför nästa tillfälle" badge="Planering">
        <p>
          Använd den här delen inför varje träff. Skriv ned vad du vill lägga
          extra fokus på, vilka situationer du vill följa upp och om det är
          någon deltagare som behöver lite extra utrymme.
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Vad vill jag att gruppen ska få med sig den här gången?</li>
          <li>Finns något som blev oklart förra gången som jag vill knyta ihop?</li>
          <li>Är det något känsligt tema där jag vill vara extra lyhörd?</li>
        </ul>

        <div className="mt-3">
          <NotePad
            id="infor_nasta"
            label="Mina tankar inför nästa tillfälle"
            placeholder="Skriv här vad du vill betona, följa upp eller pröva..."
          />
        </div>
      </SectionCard>

      <SectionCard title="Efter handledning eller kurstillfälle" badge="Reflektion">
        <p>
          Direkt efter ett tillfälle är huvudet ofta fullt. Här kan du tömma ur
          dig första reflektionen, innan allt rusar vidare.
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Vad fungerade särskilt bra idag?</li>
          <li>När kände jag mig nöjd som kursledare?</li>
          <li>Vad skavde lite – och varför?</li>
        </ul>
        <div className="mt-3">
          <NotePad
            id="efter_tillfalle"
            label="Direkt efter – mina första intryck"
            placeholder="Ex: gruppens energi, någon svår situation, något du vill ta upp nästa gång..."
          />
        </div>
      </SectionCard>

      <SectionCard title="Att hålla koll på över tid" badge="Överblick">
        <p>
          Här kan du samla det som växer fram över flera träffar: mönster,
          återkommande teman, styrkor i gruppen och sådant du vill bygga vidare på.
        </p>
        <div className="mt-3">
          <NotePad
            id="over_tid"
            label="Mönster, teman och saker att följa"
            placeholder="Ex: gruppens utveckling, återkommande frågor, sådant som du vill följa upp längre fram..."
          />
        </div>
      </SectionCard>

      <SectionCard title="Övningar jag vill testa" badge="Nästa steg">
        <p>
          Här kan du samla idéer på övningar, diskussionsfrågor eller case som du
          vill prova med gruppen längre fram. Skriv kort, det räcker med stickord.
        </p>
        <div className="mt-3">
          <NotePad
            id="ovningar_att_testa"
            label="Idéer på övningar"
            placeholder="Ex: rollspel kring skolaktivitet, gemensam riskbedömning av case 2, reflektion kring familjehemmets utsatthet..."
          />
        </div>
      </SectionCard>

      <SectionCard title="Påminnelse till mig själv – nästa gång" badge="Fokuspunkt">
        <p>
          En plats för en enda sak du vill bära med dig till nästa tillfälle.
          Försök hålla det kort – en mening räcker ofta.
        </p>
        <div className="mt-3">
          <NotePad
            id="paminnelse_nasta"
            label="Det här vill jag inte glömma till nästa gång"
            placeholder="Ex: 'Återkom till frågan om familjehemmets skydd', 'Följ upp reaktionen på case 1', 'Ge mer utrymme för deras egna exempel'..."
          />
        </div>
      </SectionCard>

      <SectionCard title="Idébank & vidareutveckling" badge="Utveckling">
        <p>
          Här hamnar alla dina “det där borde jag testa”-tankar. Övningar,
          case, nya sätt att använda webbsidan, vidare kurser – allt får plats.
        </p>
        <div className="mt-3">
          <NotePad
            id="idebank"
            label="Idéer jag vill spara"
            placeholder="Ex: nya övningar, case, uppföljande kurser, saker att bygga in i portalen..."
          />
        </div>
      </SectionCard>

      <SectionCard title="Egen känsla & energi" badge="Mats">
        <p>
          Din egen ork är också ett arbetsverktyg. Här kan du vara helt ärlig
          mot dig själv – ingen annan ser vad du skriver.
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Hur känns min nivå av energi just nu?</li>
          <li>Vad skulle jag behöva mer eller mindre av?</li>
          <li>Finns något jag behöver lägga ifrån mig?</li>
        </ul>
        <div className="mt-3">
          <NotePad
            id="egen_energi"
            label="Just nu känner jag så här..."
            placeholder="Skriv fritt – detta är bara för dig."
          />
        </div>
        <p className="mt-2 text-xs text-slate-400">
          Anteckningarna sparas bara i din webbläsare på den här datorn.
        </p>
      </SectionCard>
    </div>
  );
}
