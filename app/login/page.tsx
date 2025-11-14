import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";

const ACCESS_CODE = "TRYGGHET2025";

async function login(formData: FormData) {
  "use server";
  const code = formData.get("code");

  if (code === ACCESS_CODE) {
    const cookieStore = await cookies();
    cookieStore.set("fh_portal_auth", "ok", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 dagar
    });
    redirect("/");
  }

  redirect("/login?error=1");
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  const hasError = !!params?.error;

  return (
    <div className="max-w-md">
      <PageHeader
        title="Logga in till familjehemsportalen"
        subtitle="Den här sidan är endast för deltagare i kursen."
      />

      <form action={login} className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
        <div className="space-y-1">
          <label
            htmlFor="code"
            className="text-sm font-medium text-slate-100"
          >
            Lösenord
          </label>
          <input
            id="code"
            name="code"
            type="password"
            required
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-emerald-400/50 focus:border-emerald-400 focus:ring-1"
            placeholder="Skriv in ditt kurslösenord"
          />
        </div>

        {hasError && (
          <p className="text-sm text-rose-400">
            Lösenordet stämde inte. Försök igen eller kontakta Mats.
          </p>
        )}

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-500 px-3 py-2 text-sm font-semibold text-slate-950 shadow-sm shadow-emerald-500/40 transition hover:bg-emerald-400"
        >
          Logga in
        </button>

        <p className="text-xs text-slate-400">
          Ingen personlig klientinformation sparas på den här sidan.
        </p>
      </form>
    </div>
  );
}
