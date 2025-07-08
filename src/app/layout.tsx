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
  title: "Admin Portal | Texas Home Energy Rebates",
  description: "Admin tools for managing rebate program",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="flex items-center justify-between px-6 py-4 shadow bg-white">
          <div className="font-bold text-lg">Admin Portal</div>
          <div className="text-sm text-gray-600">Welcome Jacob</div>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
