"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Fel kod. Försök igen.");
      } else {
        router.push(redirectTo);
      }
    } catch {
      setError("Tekniskt fel. Försök igen om en stund.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-sm rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl">
        <h1 className="mb-2 text-lg font-semibold text-slate-50">
          Inloggning till portalen
        </h1>
        <p className="mb-4 text-xs text-slate-300">
          Sidan är avsedd för dig som arbetar med familjehem och hedersrelaterad
          problematik. Ange den gemensamma koden för att gå vidare.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-xs font-semibold text-slate-200">
              Kod
            </label>
            <input
              type="password"
              autoComplete="off"
              className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-emerald-400/50 focus:border-emerald-400 focus:ring-1"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Ex: TRYGG1"
            />
          </div>

          {error && <p className="text-xs text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={loading || !code.trim()}
            className="w-full rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm shadow-emerald-500/40 transition hover:bg-emerald-400 disabled:opacity-60"
          >
            {loading ? "Loggar in..." : "Logga in"}
          </button>

          <p className="text-[10px] text-slate-400">
            Tips: Du kan dela koden muntligt med gruppen (t.ex. TRYGG1). Varje
            person loggar in från sin egen enhet.
          </p>
        </form>
      </div>
    </div>
  );
}
