import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SmoothScrollProvider } from "@/components/providers/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zilson Fiber | Engineered Fiber Solutions",
    template: "%s | Zilson Fiber",
  },
  description:
    "Leading manufacturer of carbon fiber and glass fiber materials for aerospace, wind energy, construction, and high-end manufacturing industries.",
  keywords: [
    "carbon fiber",
    "glass fiber",
    "fiberglass",
    "composite materials",
    "carbon fiber manufacturer",
    "fiberglass supplier",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Zilson Fiber",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <SmoothScrollProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
