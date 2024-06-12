import "./globals.css";

import Analytics from "@/components/Analytics";
import Aside from "@/components/Aside";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "../components/ThemeProvider";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Z-Games",
  description: "Top Games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div>
            <Navbar />
            <div className="relative flex">
              <Aside />
              <div className="flex-1 lg:flex-[7]">
                <main className="lg:gap-4 px-2 md:px-8">{children}</main>
                <Footer />
              </div>
            </div>
          </div>
          <VercelAnalytics />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
