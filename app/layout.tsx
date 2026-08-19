import type { Metadata } from "next";
import { Lakki_Reddy, Noto_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-noto-sans",
  display: "swap",
});

const lakkiReddy = Lakki_Reddy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lakki-reddy",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Website Desa Cipicung",
  description: "Website resmi Desa Cipicung",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full">
      <body
        className={`${notoSans.variable} ${lakkiReddy.variable} ${montserrat.variable} min-h-full flex flex-col bg-[#f6faf7] antialiased`}
      >
        <div className="mx-auto flex w-full max-w-[1840px] flex-1 flex-col bg-white shadow-[0_0_80px_rgba(15,23,42,0.06)]">
          <Navbar />
          {children}

          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
