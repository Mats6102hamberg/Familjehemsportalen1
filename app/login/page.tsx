"use client";

import { useState } from "react";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        window.location.href = "/";
      } else if (res.status === 401) {
        setError("Fel lösenord.");
      } else {
        setError("Tekniskt fel, försök igen.");
      }
    } catch (err) {
      console.error("Login fetch error:", err);
      setError("Kunde inte kontakta servern.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm space-y-4"
      >
        <h1 className="text-xl font-semibold text-center">
          Familjehemsportalen – inloggning
        </h1>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Lösenord (t.ex. TRYGG1)"
          className="w-full border rounded px-3 py-2 text-slate-900 placeholder:text-slate-500"
          autoComplete="one-time-code"
          name="devlogin"
        />

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded px-3 py-2 bg-blue-600 text-white font-medium disabled:opacity-60"
        >
          {loading ? "Loggar in..." : "Logga in"}
        </button>

        <p className="text-xs text-gray-500 text-center">
          Detta är en utvecklingsversion. Dela bara lösenordet med dina
          familjehemskonsulenter.
        </p>
        <p className="text-xs text-gray-500 text-center mt-1">
          Om något strular kan du försöka flera gånger – systemet släpper in dig
          senast efter fem försök.
        </p>
      </form>
    </main>
  );
}
