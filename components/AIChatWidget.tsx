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
  const placeholderText =
    mode === "hrv"
      ? "Beskriv kort situationen du vill ha stöd i...\nExempel: 'Jag har en ungdom som vill hem trots risk...' eller 'Hjälp mig formulera ett mejl till familjehemmet.'"
      : "Vad vill du ha hjälp med?\nExempel: 'Kan du hjälpa mig planera nästa träff?' eller 'Gör en kort punktlista åt mig.'";

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
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-4">
          <div className="bg-slate-900 rounded-xl w-[90%] sm:w-[60%] max-w-[700px] h-auto sm:h-[70vh] overflow-y-auto shadow-xl border border-slate-700 p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-100">
                AI-stöd & handledning
              </h2>
              <p className="text-sm text-slate-400">
                Beskriv en situation eller be om hjälp. AI:n ger förslag, inte beslut.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-200 text-xl"
            >
              ×
            </button>
          </div>

          {/* Växla läge */}
          <div className="mb-4 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMode("hrv")}
              className={
                "flex-1 rounded-full px-4 py-2 text-sm font-medium transition " +
                (mode === "hrv"
                  ? "bg-emerald-500 text-slate-950"
                  : "border border-slate-700 text-slate-200 hover:bg-slate-800")
              }
            >
              Svåra situationer
            </button>
            <button
              type="button"
              onClick={() => setMode("general")}
              className={
                "flex-1 rounded-full px-4 py-2 text-sm font-medium transition " +
                (mode === "general"
                  ? "bg-slate-200 text-slate-950"
                  : "border border-slate-700 text-slate-200 hover:bg-slate-800")
              }
            >
              Allmän hjälp
            </button>
          </div>

          <p className="mb-4 text-xs text-slate-400 rounded-lg bg-slate-800/50 border border-slate-700 p-3">
            <strong className="text-slate-300">⚠️ Viktigt:</strong> Skriv inte in namn, personnummer eller andra direkt identifierande
            uppgifter. Vid akut fara: följ rutiner och ring 112.
          </p>

          {/* Meddelanden */}
          <div className="mb-4 max-h-64 space-y-3 overflow-y-auto rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm">
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
          <div className="space-y-3">
            <textarea
              className="w-full min-h-[200px] sm:min-h-[280px] bg-slate-800 text-slate-100 p-4 rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-vertical"
              placeholder={placeholderText}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />

            {/* Diktationstips */}
            <div className="text-slate-400 text-xs rounded-lg bg-slate-800/50 border border-slate-700 p-3">
              <strong className="text-slate-300">💬 Tips:</strong> Du kan använda röstdikning på din enhet:{" "}
              <span className="font-medium text-slate-200">⌘ + fn + fn</span> (Mac) eller{" "}
              <span className="font-medium text-slate-200">Win + H</span> (Windows).
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleSend}
                disabled={isLoading}
                className="px-6 py-2 bg-emerald-500 text-slate-950 font-semibold rounded-lg hover:bg-emerald-400 transition shadow-sm shadow-emerald-500/40 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? "Arbetar..." : "Skicka"}
              </button>
            </div>
          </div>
          </div>
        </div>
      )}
    </>
  );
};
