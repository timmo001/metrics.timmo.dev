import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Timmo Stats",
  description: "Aggregated stats for Timmo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-b from-indigo-950 to-slate-900 flex min-h-screen flex-col items-center justify-start p-8`}
      >
        {children}
      </body>
    </html>
  );
}
