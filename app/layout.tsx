import type { Metadata } from "next";
import { Lakki_Reddy, Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";

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

export const metadata: Metadata = {
  title: "Desa Cipicung",
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
        className={`${notoSans.variable} ${lakkiReddy.variable} min-h-full flex flex-col bg-white antialiased`}
      >
        <div className="mx-auto w-full sm:max-w-2xl md:max-w-[1640px]">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
