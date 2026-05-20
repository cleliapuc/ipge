import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mapa Estratégico 2027 | IPGE",

  description:
    "Webinar executivo sobre RH, Governança, Estratégia e Execução.",

  openGraph: {
    title: "Mapa Estratégico 2027 | IPGE",

    description:
      "RH no centro da execução estratégica.",

    images: ["/og-image.jpg"],

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


