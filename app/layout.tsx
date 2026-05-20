import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mapa Estratégico 2027 | IPGE",

  description:
  "Webinar executivo do IPGE sobre estratégia, governança, execução organizacional, RH estratégico e planejamento empresarial para 2027.",

  openGraph: {
  title: "Mapa Estratégico 2027 | IPGE",

  description:
  "Webinar executivo do IPGE sobre RH estratégico, governança, execução organizacional e planejamento empresarial para 2027.",

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


