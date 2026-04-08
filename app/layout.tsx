import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { JsonLd } from "@/components/JsonLd";

const BASE_URL = "https://lp-keita.vercel.app";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "松井 慶太 — Webアプリ・AI開発",
    template: "%s — 松井 慶太",
  },
  description:
    "アイデアをすぐ動くプロダクトにします。TypeScript・Next.js・AIを軸にWebアプリ・業務システム・AIプロダクトを開発するフリーランスエンジニア松井慶太。",
  keywords: [
    "松井慶太",
    "Webアプリ開発",
    "Next.js",
    "TypeScript",
    "AIアプリ開発",
    "フリーランスエンジニア",
    "業務システム",
    "DX推進",
  ],
  authors: [{ name: "松井 慶太" }],
  creator: "松井 慶太",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: BASE_URL,
    siteName: "松井 慶太 — Webアプリ・AI開発",
    title: "松井 慶太 — Webアプリ・AI開発",
    description:
      "アイデアをすぐ動くプロダクトにします。TypeScript・Next.js・AIを軸に開発するフリーランスエンジニア。",
  },
  twitter: {
    card: "summary_large_image",
    title: "松井 慶太 — Webアプリ・AI開発",
    description: "アイデアをすぐ動くプロダクトにします。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={ibmPlexMono.variable}>
      <body>
        <GoogleAnalytics />
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
