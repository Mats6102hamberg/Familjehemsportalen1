"use client";

import { useState } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"hrv" | "general">("hrv");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const newMessage: ChatMessage = { role: "user", content: trimmed };
    const updatedMessages = [...messages, newMessage];

    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode,
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await res.json();

      if (data.error) {
        const errorMsg: ChatMessage = {
          role: "assistant",
          content:
            "Jag kunde inte få svar från AI-tjänsten just nu. Försök gärna igen om en liten stund.",
        };
        setMessages((prev) => [...prev, errorMsg]);
      } else {
        const reply: ChatMessage = {
          role: "assistant",
          content: data.reply,
        };
        setMessages((prev) => [...prev, reply]);
      }
    } catch (err) {
      console.error(err);
      const errorMsg: ChatMessage = {
        role: "assistant",
        content:
          "Något gick fel i kontakten med AI-tjänsten. Försök igen senare.",
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Flytande knapp nere i hörnet */}
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="fixed bottom-4 right-4 z-40 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-400 md:text-sm"
      >
        {isOpen ? "Stäng AI-stöd" : "AI-stöd"}
      </button>

      {/* Själva chatfönstret */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 z-40 w-[min(100vw-2rem,380px)] rounded-2xl border border-slate-800 bg-slate-950/95 p-3 shadow-xl backdrop-blur">
          <div className="mb-2 flex items-center justify-between gap-2">
            <div>
              <p className="text-xs font-semibold text-slate-50">
                AI-stöd & handledning
              </p>
              <p className="text-[11px] text-slate-400">
                Beskriv en situation eller be om hjälp. AI:n ger förslag, inte beslut.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-slate-700 px-2 py-0.5 text-[10px] text-slate-300 hover:border-emerald-400 hover:text-emerald-200"
            >
              ×
            </button>
          </div>

          {/* Växla läge */}
          <div className="mb-2 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMode("hrv")}
              className={
                "flex-1 rounded-full px-2 py-1 text-[11px] " +
                (mode === "hrv"
                  ? "bg-emerald-500 text-slate-950"
                  : "border border-slate-700 text-slate-200")
              }
            >
              Svåra situationer
            </button>
            <button
              type="button"
              onClick={() => setMode("general")}
              className={
                "flex-1 rounded-full px-2 py-1 text-[11px] " +
                (mode === "general"
                  ? "bg-slate-200 text-slate-950"
                  : "border border-slate-700 text-slate-200")
              }
            >
              Allmän hjälp
            </button>
          </div>

          <p className="mb-2 text-[10px] text-slate-400">
            Skriv inte in namn, personnummer eller andra direkt identifierande
            uppgifter. Vid akut fara: följ rutiner och ring 112.
          </p>

          {/* Meddelanden */}
          <div className="mb-2 max-h-52 space-y-2 overflow-y-auto rounded-xl border border-slate-800 bg-slate-950/60 p-2 text-[11px]">
            {messages.length === 0 && (
              <p className="text-slate-400">
                Exempel: “Jag har en ungdom som vill hem trots risk...” eller
                “Hjälp mig formulera ett mejl till familjehemmet.”
              </p>
            )}
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={
                  "flex " +
                  (m.role === "user" ? "justify-end" : "justify-start")
                }
              >
                <div
                  className={
                    "max-w-[80%] rounded-xl px-2 py-1 " +
                    (m.role === "user"
                      ? "bg-emerald-500 text-slate-950"
                      : "bg-slate-800 text-slate-100")
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input + knapp */}
          <div className="flex items-end gap-2">
            <textarea
              rows={2}
              className="flex-1 rounded-xl border border-slate-700 bg-slate-950 px-2 py-1 text-[11px] text-slate-50 outline-none ring-emerald-400/50 focus:border-emerald-400 focus:ring-1"
              placeholder={
                mode === "hrv"
                  ? "Beskriv kort situationen du vill ha stöd i..."
                  : "Vad vill du ha hjälp med?"
              }
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            <button
              type="button"
              onClick={handleSend}
              disabled={isLoading}
              className="rounded-xl bg-emerald-500 px-3 py-1 text-[11px] font-semibold text-slate-950 shadow-sm shadow-emerald-500/40 transition hover:bg-emerald-400 disabled:opacity-60"
            >
              {isLoading ? "..." : "Skicka"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
