"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const [redirectTo, setRedirectTo] = useState("/");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    setRedirectTo(params.get("redirectTo") || "/");
  }, []);

  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

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
      setError("Tekniskt fel. Försök igen senare.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-sm rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl">
        <h1 className="text-lg font-semibold text-slate-50 mb-2">Inloggning</h1>
        <p className="text-xs text-slate-300 mb-4">
          Ange portalkoden för att gå vidare.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="password"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50"
            placeholder="TRYGG1"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          {error && <p className="text-xs text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={loading || !code.trim()}
            className="w-full rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 disabled:opacity-50"
          >
            {loading ? "Loggar in..." : "Logga in"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
          <p className="text-sm text-slate-400">Laddar inloggning...</p>
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
