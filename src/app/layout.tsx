import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bottle | 보틀",
  description: "온라인 여론조사 및 투표 플랫폼",
  icons: {
    icon: "/icons/bottle.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
