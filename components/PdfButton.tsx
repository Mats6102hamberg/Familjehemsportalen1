"use client";

export function PdfButton() {
  async function generatePDF() {
    const res = await fetch("/api/pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Mötesanteckningar",
        text: "Här kommer Mats anteckningar från handledningen...",
      }),
    });

    if (!res.ok) {
      alert("Det gick inte att skapa PDF just nu. Försök igen senare.");
      return;
    }

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "rapport.pdf";
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <button
      onClick={generatePDF}
      className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm shadow-emerald-500/40 transition hover:bg-emerald-400"
    >
      Skapa PDF
    </button>
  );
}
