"use client";

import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
  }

  return (
    <button
      onClick={handleLogout}
      className="rounded-full border border-red-500/60 px-3 py-1 text-xs font-semibold text-red-100 transition hover:bg-red-500 hover:text-slate-950"
    >
      Logga ut
    </button>
  );
}
