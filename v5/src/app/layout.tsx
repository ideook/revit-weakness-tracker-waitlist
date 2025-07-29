import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
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
  title: "BIMSpark - Revit Weakness Tracker Waitlist",
  description: "Join the waitlist for BIMSpark, the intelligent Revit weakness tracking tool that helps architects and engineers optimize their BIM workflows.",
  keywords: "BIM, Revit, Architecture, Engineering, Weakness Tracker, Building Information Modeling",
  authors: [{ name: "BIMSpark Team" }],
  openGraph: {
    title: "BIMSpark - Revit Weakness Tracker Waitlist",
    description: "Join the waitlist for BIMSpark, the intelligent Revit weakness tracking tool.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
