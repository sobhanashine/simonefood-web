import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "سیمون | اولین کوکی نیویورکی رشت",
  description: "اولین تولیدکننده کوکی‌های غول‌پیکر و مغزدار نیویورکی در کشور. پخت روزانه، داغ و تازه در شهر باران‌های نقره‌ای، رشت. شکلات بلژیکی مذاب و مواد اولیه درجه یک.",
  keywords: ["سیمون فود", "سیمون کوکی", "کوکی نیویورکی رشت", "کوکی داغ رشت", "شکلات مذاب", "کوکی دست ساز"],
  authors: [{ name: "سیمون" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#120c0a] text-[#fcf9f2] selection:bg-[#d4af37] selection:text-[#120c0a]">{children}</body>
    </html>
  );
}


