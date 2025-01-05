import type { Metadata } from "next";
import { Esteban } from "next/font/google";
import "./globals.css";

const esteban = Esteban({
  variable: "--font-esteban",
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Everyday Love",
  description: "A poem by Ben von Jagow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${esteban.variable} font-esteban`}
      >
        {children}
      </body>
    </html>
  );
}
