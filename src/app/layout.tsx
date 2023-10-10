import "dotenv/config";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import "gestalt/dist/gestalt.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SessionProvider from "./context/SessionProvider";
import { AppBar } from "./components/AppBar";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "cc-food",
  description: "WeHungry Form",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
      <Analytics />
    </html>
  );
}
