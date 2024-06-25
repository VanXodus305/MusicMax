import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MusicMax",
  description: "A Music Streaming Web App.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <div className="overflow-x-hidden antialiased text-neutral-200 selection:bg-neutral-200 selection:text-purple-800 dark">
            {children}
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
