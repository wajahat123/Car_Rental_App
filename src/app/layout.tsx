import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Generals/Navbar";
import Footer from "@/Components/Generals/Footer";

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
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-clip antialiased min-h-screen flex flex-col text-sm md:text-base `}
      >
        <header className=" z-50 text-lg fixed top-0 right-0 left-0 bg-transparent ">
        {/* <header className=" z-50 text-lg fixed top-0 right-0 left-0 bg-white/30 backdrop-blur-lg shadow-xl border-b border-b-primary/10 "> */}
          <Navbar />
        </header>
        <main className="flex-grow ">
          {children}
        </main>
        <footer className="  bg-surface pt-6">
          <Footer/>
        
        </footer>
      </body>
    </html>
  );
}
