"use client";

import { useEffect, useState } from "react";

interface NotePadProps {
  id: string;          // unikt id för varje block, används i localStorage
  label: string;       // rubrik ovanför rutan
  placeholder?: string;
}

export const NotePad = ({ id, label, placeholder }: NotePadProps) => {
  const storageKey = `fh_mats_${id}`;
  const [value, setValue] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(storageKey);
    if (stored !== null) {
      setValue(stored);
    }
  }, [storageKey]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(storageKey, value);
  }, [storageKey, value]);

  return (
    <div className="space-y-1">
      <label className="text-xs font-medium text-slate-200">
        {label}
      </label>
      <textarea
        className="w-full min-h-[90px] rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 outline-none ring-emerald-400/50 focus:border-emerald-400 focus:ring-1"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};
