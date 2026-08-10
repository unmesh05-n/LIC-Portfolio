import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Preloader } from "@/components/Animations"; // Add this import

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "YOUR NAME | LIC Advisor",
  description: "Professional LIC advisory and financial protection guidance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} font-sans relative`}>
        <div className="film-grain" /> {/* Constant cinematic texture */}
        <Preloader>
          {children}
        </Preloader>
      </body>
    </html>
  );
}