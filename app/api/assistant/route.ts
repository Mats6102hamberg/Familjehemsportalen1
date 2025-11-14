import { NextResponse } from "next/server";

const MODEL_NAME = "gpt-4.1-mini";

export async function POST(req: Request) {
  try {
    const { messages, mode } = await req.json();

    const isHrvMode = mode === "hrv";

    const systemContent = isHrvMode
      ? `
Du är en erfaren handledare som stöttar personer som arbetar med familjehem och barn/ungdomar i hederskontext.
Ditt uppdrag:
- Hjälp användaren att sortera situationen, se risker och tänka i steg.
- Föreslå reflekterande frågor och möjliga vägar framåt.
- Påminn om att följa lagar, lokala rutiner och att aldrig skriva in känsliga personuppgifter.
- Var lugn, tydlig och varm.
- Vid akut fara: nämn alltid att man ska ringa 112.
Skriv på svenska. 
      `
      : `
Du är en hjälpsam assistent som stöttar med skrivande, planering, övningar och reflektion.
Var tydlig, varm och professionell. 
Skriv på svenska.
      `;

    const apiMessages = [
      { role: "system", content: systemContent },
      ...messages,
    ];

    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL_NAME,
        messages: apiMessages,
      }),
    });

    const data = await openaiRes.json();
    const reply = data.choices?.[0]?.message?.content ?? "";

    return NextResponse.json({ reply });
  } catch (err) {
    return NextResponse.json(
      { error: "Något gick fel i AI-API:et." },
      { status: 500 }
    );
  }
}
