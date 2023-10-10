import "dotenv/config";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "./context/AuthProvider";
import { AppBar } from "./components/AppBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "cc-food",
  description: "WeHungry Form",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-800 text-slate-100 container mx-auto p-4`}
      >
        <AuthProvider>
          <AppBar />
          {children}
        </AuthProvider>
      </body>
      <Analytics />
    </html>
  );
}
