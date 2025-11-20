import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="text-center space-y-4 p-6">
        <h2 className="text-2xl font-semibold text-slate-50">Sidan hittades inte</h2>
        <p className="text-slate-300 text-sm">Den sida du letar efter finns inte.</p>
        <Link
          href="/"
          className="inline-block px-4 py-2 bg-emerald-500 text-slate-950 font-semibold rounded-lg hover:bg-emerald-400 transition"
        >
          Tillbaka till startsidan
        </Link>
      </div>
    </div>
  );
}
