import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { Banner } from "@/components/Banner";
import { banners } from "./data/banners";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rival Roulette",
  description: "Randomly select your next Marvel Rivals character!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Banner banners={banners} />
        {children}
        <Analytics />
        <a 
          href="https://www.buymeacoffee.com/killerz3" 
          target="_blank"
          className="fixed bottom-10 left-5 z-50 "
        >
          <img 
            src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" 
            alt="Buy Me A Coffee" 
            className="h-10"
          />
        </a>
      </body>
    </html>
  );
}
