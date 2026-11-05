import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://avocall.vercel.app"),
  title: { default: "AvoCall | AI voice agents for Indian businesses", template: "%s | AvoCall" },
  description: "AvoCall helps Indian businesses answer customer calls, record every conversation, and automate approved customer requests in Telugu and English.",
  keywords: ["AI call automation", "Telugu AI voice agent", "business call assistant", "AvoCall", "Indian business automation"],
  openGraph: { type: "website", siteName: "AvoCall", title: "AvoCall | Every customer call, handled", description: "Telugu-first AI voice agents for growing Indian businesses." },
  twitter: { card: "summary_large_image", title: "AvoCall | Every customer call, handled", description: "Telugu-first AI voice agents for growing Indian businesses." },
  // ✅ The correct way to add Google Site Verification in Next.js:
  verification: {
    google: "Fj-U1UtssEQL8TjCnXPHrEChITt8hyGsETJF2H9ZjMs",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
