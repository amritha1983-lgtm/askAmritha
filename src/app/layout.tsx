import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { BUSINESS_CONFIG } from "@/config/business";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: BUSINESS_CONFIG.title,
  description: BUSINESS_CONFIG.description,
  metadataBase: new URL(`https://${BUSINESS_CONFIG.domain}`),
  openGraph: {
    title: BUSINESS_CONFIG.title,
    description: BUSINESS_CONFIG.description,
    url: `https://${BUSINESS_CONFIG.domain}`,
    siteName: BUSINESS_CONFIG.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: BUSINESS_CONFIG.title,
    description: BUSINESS_CONFIG.description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal selection:bg-gold selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
