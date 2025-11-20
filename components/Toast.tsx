"use client";

import { useEffect } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  onClose: () => void;
}

export function Toast({ message, type = "success", onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = {
    success: "bg-emerald-500",
    error: "bg-rose-500",
    info: "bg-sky-500",
  }[type];

  return (
    <div
      className={`fixed bottom-4 right-4 ${bgColor} text-slate-950 px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-slide-up z-50`}
    >
      <span className="font-semibold text-sm">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 hover:opacity-70 transition"
        aria-label="Stäng"
      >
        ✕
      </button>
    </div>
  );
}
