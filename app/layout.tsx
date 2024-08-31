import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Home | Ken Mwangi",
    template: "%s | Ken Mwangi",
  },
  description:
    "Ken Mwangi's portfolio showing fullstack development, technical writing and open-source contributions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-white flex flex-col min-h-screen ${inter.className}`}>
        <Header />
        <main className="flex-1 relative pt-16 sm:pt-24 lg:pt-40 xl:pt-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
