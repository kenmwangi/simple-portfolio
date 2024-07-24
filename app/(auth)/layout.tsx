import React, { ReactNode } from "react";
import { DATA } from "@/data/resume";
import { Metadata } from "next";
import { Manrope } from "next/font/google";
import Link from "next/link";
import { Home } from "lucide-react";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `Login | ${DATA.name}`,
    template: `%s | ${DATA.name}`,
  },
};
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} min-h-screen bg-stone-50`}>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
