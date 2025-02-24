import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Generals/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col text-sm md:text-base lg:text-lg`}
      >
        <header className=" bg-background text-text-secondary text-lg shadow-lux-gold">
          <Navbar />
        </header>
        <main className="flex-grow ">
          {children}
        </main>
        <footer className="bg-gray-700 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 max-w-7xl w-full mx-auto py-6 text-white text-center">
          Footer Content
        </footer>
      </body>
    </html>
  );
}
