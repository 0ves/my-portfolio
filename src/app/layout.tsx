import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oves Nadaf | Full Stack Developer",
  description: "Portfolio site for Oves Nadaf - React & Next.js Developer",
  keywords: ["Next.js", "React", "Frontend", "Portfolio", "Oves Nadaf"],
  authors: [{ name: "Oves Nadaf" }],
  openGraph: {
    title: "Oves Nadaf | Portfolio",
    description: "Developer Portfolio using Next.js App Router",
    type: "website",
    url: "https://yourdomain.com",
    siteName: "Oves Nadaf Portfolio",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  `}
      >
        {children}
      </body>
    </html>
  );
}
