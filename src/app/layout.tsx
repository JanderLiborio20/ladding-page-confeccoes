import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import { localBusinessJsonLd, siteUrl } from "@/lib/business";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Vitória Confecções & Serigrafia — A Moda na Sua Medida",
  description:
    "Confecção sob medida, serigrafia e uniformes em alta qualidade. Qualidade e tradição em cada peça. Solicite seu orçamento!",
  keywords: [
    "confecção sob medida",
    "serigrafia",
    "uniformes",
    "costura",
    "Vitória Confecções",
    "consertos e ajustes",
  ],
  openGraph: {
    title: "Vitória Confecções & Serigrafia — A Moda na Sua Medida",
    description:
      "Confecção sob medida, serigrafia e uniformes. Qualidade e tradição em cada peça.",
    images: [{ url: "/images/logo.png", width: 512, height: 512, alt: "Vitória Confecções & Serigrafia" }],
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} antialiased`}>
      <body>
        {children}
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
