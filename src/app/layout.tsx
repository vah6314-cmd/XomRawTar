import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Rayline Web Development | Professional Websites for Small Businesses",
  description: "Affordable, modern website design services for small businesses. Get online in 1-2 weeks with our professional web development packages.",
  keywords: ["website design for small business", "affordable web design services", "small business website packages", "professional website development"],
  authors: [{ name: "Rayline Web Development" }],
  creator: "Rayline Web Development",
  metadataBase: new URL('https://raylinewebdev.com'),
  openGraph: {
    title: "Rayline Web Development | Professional Websites for Small Businesses",
    description: "Affordable, modern website design services for small businesses. Get online in 1-2 weeks with our professional web development packages.",
    type: "website",
    locale: "en_US",
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
