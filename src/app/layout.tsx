import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Ubuntu_Mono } from "next/font/google";

const ubuntu = Ubuntu_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swirl Lang",
  description: "A High Level, statically typed, Compiled programming language",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} bg-slate-300 m-3 text-slate-900`}>
        <Navbar />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
