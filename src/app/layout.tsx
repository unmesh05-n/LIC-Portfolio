import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";

import "./globals.css";
import { Preloader } from "@/components/Animations";
import { siteData } from "@/lib/data";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteData.global.name,
  description: siteData.global.description,
  applicationName: siteData.global.name,
  keywords: [
    "LIC Advisor",
    "LIC Consultant",
    "Insurance Consultant",
    "Financial Protection",
    "Professional Advisory",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} bg-midnight font-sans relative`}
      >
        <div
          className="film-grain"
          aria-hidden="true"
        />

        <Preloader>{children}</Preloader>
      </body>
    </html>
  );
}