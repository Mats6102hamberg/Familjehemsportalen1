"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="text-center space-y-4 p-6">
        <h2 className="text-2xl font-semibold text-slate-50">Något gick fel</h2>
        <p className="text-slate-300 text-sm">Ett oväntat fel uppstod.</p>
        <button
          onClick={reset}
          className="px-4 py-2 bg-emerald-500 text-slate-950 font-semibold rounded-lg hover:bg-emerald-400 transition"
        >
          Försök igen
        </button>
      </div>
    </div>
  );
}
