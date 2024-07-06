import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../assets/fonts/fonts.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Star Wars",
  description: "All Star Wars characters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full min-h-[100vh] bg-color_2">
          <div className="w-[1490px] mx-auto">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
