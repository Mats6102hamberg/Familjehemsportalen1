import { NextResponse } from "next/server";
import { PDFDocument, StandardFonts } from "pdf-lib";

export async function POST(req: Request) {
  try {
    const { title, text } = await req.json();

    const pdf = await PDFDocument.create();
    const page = pdf.addPage();

    const font = await pdf.embedFont(StandardFonts.Helvetica);

    const { width, height } = page.getSize();

    // Sidhuvud
    page.drawText("Familjehemsportalen", {
      x: 50,
      y: height - 40,
      size: 16,
      font,
    });

    // Titel
    page.drawText(title, {
      x: 50,
      y: height - 80,
      size: 20,
      font,
    });

    // Brödtext
    page.drawText(text, {
      x: 50,
      y: height - 120,
      size: 12,
      maxWidth: width - 100,
      font,
    });

    // Sidfot
    page.drawText("© Familjehemsportalen – utvecklingsversion", {
      x: 50,
      y: 30,
      size: 10,
      font,
    });

    const pdfBytes = await pdf.save();
    const pdfBuffer = Buffer.from(pdfBytes);

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="rapport.pdf"',
      },
    });
  } catch (err) {
    console.error("PDF error", err);
    return new NextResponse("Server error", { status: 500 });
  }
}
