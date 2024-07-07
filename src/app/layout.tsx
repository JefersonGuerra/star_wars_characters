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
        <div className="w-full min-h-[100vh] bg-gradient-to-b from-[#090a15] via-[#090a15] to-slate-800">
          <div className="w-full px-5 2xl:w-[1500px] 2xl:px-0 mx-auto">
            <div className='w-full float-left my-7'>
              <p className='w-full float-left text-[60px] text-center text-white font-[star-jediregular] [text-shadow:_0_10px_0_rgb(255_0_0_/_50%)]'>@</p>
            </div>
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
