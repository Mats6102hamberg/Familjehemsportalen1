"use client";

import { useState } from "react";
import { AkutModal } from "./AkutModal";

export const AkutButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-4 left-4 z-40 rounded-xl border border-slate-600 bg-slate-700/80 px-4 py-2 text-xs font-semibold text-slate-200 shadow-lg backdrop-blur transition hover:bg-slate-600 hover:text-white"
      >
        Akut-läge
      </button>

      <AkutModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};
