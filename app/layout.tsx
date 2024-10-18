import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Ken Mwangi | Fullstack Developer",
    template: "%s | Ken Mwangi",
  },
  description:
    "Fullstack developer with 4 years of experience in microservices, specializing in TypeScript, Golang, and Python.",
  keywords: [
    "Fullstack Developer",
    "Microservices",
    "TypeScript",
    "Golang",
    "Python",
    "Ken Mwangi",
    "Nairobi",
    "Kenya",
  ],
  authors: [{ name: "Ken Mwangi" }],
  creator: "Ken Mwangi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.kenmwangi.dev",
    siteName: "Ken Mwangi Portfolio",
    title: "Ken Mwangi | Fullstack Developer",
    description:
      "Fullstack developer with 4 years of experience in microservices, specializing in TypeScript, Golang, and Python.",
    images: [
      {
        url: "https://www.kenmwangi.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ken Mwangi - Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ken Mwangi | Fullstack Developer",
    description:
      "Fullstack developer with 4 years of experience in microservices, specializing in TypeScript, Golang, and Python.",
    images: ["https://www.kenmwangi.dev/twitter-image.jpg"],
    creator: "@ken_cipher",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
