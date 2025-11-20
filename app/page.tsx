import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { LogoutButton } from "@/components/LogoutButton";
import { Dashboard } from "@/components/Dashboard";
import { PdfButton } from "@/components/PdfButton";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <PageHeader
          title="Välkommen – det här är din trygga plats"
          subtitle="Det här är din digitala trygghetspunkt i ett av de svåraste uppdragen som finns: att ge stöd till familjehem och skydda barn och ungdomar som kan vara utsatta för hedersrelaterat våld och förtryck."
        />
        <div className="flex justify-end">
          <LogoutButton />
        </div>
      </div>

      <p className="max-w-3xl text-sm leading-relaxed text-slate-200">
        Här hittar du stöd i akuta situationer, praktiska verktyg och
        checklistor, samt allt kursmaterial samlat på ett ställe. Tanken är
        enkel: du ska inte behöva bära allt i huvudet – och du ska aldrig behöva
        känna dig helt ensam med svåra beslut.
      </p>

      <Dashboard />

      <div className="flex justify-start">
        <PdfButton />
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <Link
          href="/akut"
          className="group flex flex-col justify-between rounded-2xl border border-rose-500/40 bg-gradient-to-b from-rose-500/10 via-slate-900 to-slate-950 p-5 shadow-sm shadow-rose-950/60 transition hover:-translate-y-0.5 hover:border-rose-300"
        >
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-rose-300">
              När det är skarpt läge
            </p>
            <h2 className="text-base font-semibold text-slate-50">
              Jag är i en svår situation nu
            </h2>
            <p className="text-sm text-slate-200">
              Snabb hjälp, tydliga steg, direkt stöd. Gå hit när magen knyter
              sig och du behöver hålla huvudet kallt.
            </p>
          </div>
          <span className="mt-4 text-xs font-medium text-rose-200">
            Gå till akut stöd →
          </span>
        </Link>

        <Link
          href="/verktyg"
          className="group flex flex-col justify-between rounded-2xl border border-emerald-500/40 bg-gradient-to-b from-emerald-500/10 via-slate-900 to-slate-950 p-5 shadow-sm shadow-emerald-950/60 transition hover:-translate-y-0.5 hover:border-emerald-300"
        >
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
              Praktiskt stöd
            </p>
            <h2 className="text-base font-semibold text-slate-50">
              Verktyg & checklistor
            </h2>
            <p className="text-sm text-slate-200">
              Handfasta stöd för samtal, bedömningar, dokumentation och
              riskvärdering. En verktygslåda för vardagen.
            </p>
          </div>
          <span className="mt-4 text-xs font-medium text-emerald-200">
            Utforska verktyg →
          </span>
        </Link>

        <Link
          href="/kunskap"
          className="group flex flex-col justify-between rounded-2xl border border-sky-500/40 bg-gradient-to-b from-sky-500/10 via-slate-900 to-slate-950 p-5 shadow-sm shadow-sky-950/60 transition hover:-translate-y-0.5 hover:border-sky-300"
        >
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-sky-300">
              Fördjupning
            </p>
            <h2 className="text-base font-semibold text-slate-50">
              Kursmaterial & kunskapsbank
            </h2>
            <p className="text-sm text-slate-200">
              Allt från vår kurs samlat på ett ställe – med korta
              sammanfattningar och möjlighet att läsa vidare.
            </p>
          </div>
          <span className="mt-4 text-xs font-medium text-sky-200">
            Gå till kunskapsbanken →
          </span>
        </Link>
      </div>

      <p className="mt-8 text-[10px] text-slate-700">
        <Link href="/mats" className="hover:text-emerald-400">M.</Link>
      </p>
    </div>
  );
}
