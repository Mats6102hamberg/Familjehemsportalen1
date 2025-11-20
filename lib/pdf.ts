/**
 * PDF-generering för mötesanteckningar och case-sammanfattningar
 */

import { jsPDF } from "jspdf";
import { MeetingNote, CaseSummary } from "@/types/notes";

// Hjälpfunktion för att lägga till text med automatisk radbrytning
function addWrappedText(
  doc: jsPDF,
  text: string,
  x: number,
  y: number,
  maxWidth: number
): number {
  const lines = doc.splitTextToSize(text, maxWidth);
  doc.text(lines, x, y);
  return y + lines.length * 7; // Returnera ny Y-position
}

export function generateMeetingNotePdf(note: MeetingNote): void {
  const doc = new jsPDF();
  let yPos = 20;

  // Titel
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text("Motesanteckning", 20, yPos);
  yPos += 15;

  // Metadata
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100);
  doc.text(`Skapad: ${new Date().toLocaleString("sv-SE")}`, 20, yPos);
  yPos += 10;

  // Grunduppgifter
  doc.setFontSize(12);
  doc.setTextColor(0);

  doc.setFont("helvetica", "bold");
  doc.text("Datum:", 20, yPos);
  doc.setFont("helvetica", "normal");
  doc.text(note.datum || "-", 50, yPos);
  yPos += 8;

  doc.setFont("helvetica", "bold");
  doc.text("Plats:", 20, yPos);
  doc.setFont("helvetica", "normal");
  doc.text(note.plats || "-", 50, yPos);
  yPos += 8;

  doc.setFont("helvetica", "bold");
  doc.text("Barnkod:", 20, yPos);
  doc.setFont("helvetica", "normal");
  doc.text(note.barnkod || "-", 50, yPos);
  yPos += 8;

  doc.setFont("helvetica", "bold");
  doc.text("Narvarande:", 20, yPos);
  doc.setFont("helvetica", "normal");
  yPos = addWrappedText(doc, note.narvarande || "-", 50, yPos, 140);
  yPos += 5;

  // Innehåll
  yPos += 5;
  doc.setFont("helvetica", "bold");
  doc.text("Syfte:", 20, yPos);
  yPos += 7;
  doc.setFont("helvetica", "normal");
  yPos = addWrappedText(doc, note.syfte || "-", 20, yPos, 170);
  yPos += 5;

  doc.setFont("helvetica", "bold");
  doc.text("Diskussionspunkter:", 20, yPos);
  yPos += 7;
  doc.setFont("helvetica", "normal");
  yPos = addWrappedText(doc, note.punkter || "-", 20, yPos, 170);
  yPos += 5;

  doc.setFont("helvetica", "bold");
  doc.text("Atgarder:", 20, yPos);
  yPos += 7;
  doc.setFont("helvetica", "normal");
  yPos = addWrappedText(doc, note.atgarder || "-", 20, yPos, 170);
  yPos += 5;

  doc.setFont("helvetica", "bold");
  doc.text("Uppfoljningsdatum:", 20, yPos);
  doc.setFont("helvetica", "normal");
  doc.text(note.uppfoljningsdatum || "-", 70, yPos);

  // Spara PDF
  const filename = `motesanteckning_${note.datum || "datum"}_${note.barnkod || "barn"}.pdf`;
  doc.save(filename);
}

export function generateCaseSummaryPdf(summary: CaseSummary): void {
  const doc = new jsPDF();
  let yPos = 20;

  // Titel
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text("Case-sammanfattning", 20, yPos);
  yPos += 15;

  // Metadata
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100);
  doc.text(`Skapad: ${new Date().toLocaleString("sv-SE")}`, 20, yPos);
  yPos += 10;

  // Grunduppgifter
  doc.setFontSize(12);
  doc.setTextColor(0);

  doc.setFont("helvetica", "bold");
  doc.text("Arendekod:", 20, yPos);
  doc.setFont("helvetica", "normal");
  doc.text(summary.arendekod || "-", 55, yPos);
  yPos += 8;

  doc.setFont("helvetica", "bold");
  doc.text("Datum:", 20, yPos);
  doc.setFont("helvetica", "normal");
  doc.text(summary.datum || "-", 55, yPos);
  yPos += 8;

  doc.setFont("helvetica", "bold");
  doc.text("Barnkod:", 20, yPos);
  doc.setFont("helvetica", "normal");
  doc.text(summary.barnkod || "-", 55, yPos);
  yPos += 12;

  // Innehåll
  doc.setFont("helvetica", "bold");
  doc.text("Bakgrund:", 20, yPos);
  yPos += 7;
  doc.setFont("helvetica", "normal");
  yPos = addWrappedText(doc, summary.bakgrund || "-", 20, yPos, 170);
  yPos += 5;

  doc.setFont("helvetica", "bold");
  doc.text("Nuvarande lage:", 20, yPos);
  yPos += 7;
  doc.setFont("helvetica", "normal");
  yPos = addWrappedText(doc, summary.nuvarandeLage || "-", 20, yPos, 170);
  yPos += 5;

  doc.setFont("helvetica", "bold");
  doc.text("Styrkor:", 20, yPos);
  yPos += 7;
  doc.setFont("helvetica", "normal");
  yPos = addWrappedText(doc, summary.styrkor || "-", 20, yPos, 170);
  yPos += 5;

  doc.setFont("helvetica", "bold");
  doc.text("Oro/risker:", 20, yPos);
  yPos += 7;
  doc.setFont("helvetica", "normal");
  yPos = addWrappedText(doc, summary.oro || "-", 20, yPos, 170);
  yPos += 5;

  doc.setFont("helvetica", "bold");
  doc.text("Plan framat:", 20, yPos);
  yPos += 7;
  doc.setFont("helvetica", "normal");
  yPos = addWrappedText(doc, summary.planFramat || "-", 20, yPos, 170);

  // Spara PDF
  const filename = `case_${summary.arendekod || "arende"}_${summary.datum || "datum"}.pdf`;
  doc.save(filename);
}
