import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Shell } from "@/components/Shell";

export const metadata: Metadata = {
  title: "Tryggt stöd – Familjehemsportal",
  description:
    "En trygg digital plats för dig som arbetar med familjehem och hedersrelaterat våld/förtryck.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        <div className="flex min-h-screen flex-col">
          <Nav />
          <Shell>{children}</Shell>
        </div>
      </body>
    </html>
  );
}
