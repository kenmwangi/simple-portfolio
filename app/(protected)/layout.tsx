import React, { ReactNode } from "react";
import "../globals.css";
import { DATA } from "@/data/resume";
import { Metadata } from "next";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `Dashboard | ${DATA.name}`,
    template: `%s | ${DATA.name}`,
  },
};
export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className}`}>
        <div>{children}</div>
      </body>
    </html>
  );
}
