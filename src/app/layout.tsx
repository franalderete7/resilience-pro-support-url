import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ResiliencePro - Entrená de forma inteligente con ResilienceAI",
  description: "La app definitiva de entrenamiento de resiliencia para iOS. Entrená mejor, recuperate más rápido y desarrollá fortaleza mental.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen bg-background text-foreground dark`}>
        {children}
      </body>
    </html>
  );
}
