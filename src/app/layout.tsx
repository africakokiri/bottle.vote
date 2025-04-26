import { Header } from "@/components/Header";
import { TanstackQueryWrapper } from "@/libs/tanstack-query/TanstackQueryWrapper";
import "@/styles/globals.css";

import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

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
    <html
      lang="ko"
      suppressHydrationWarning
    >
      <body className={`${inter.className}`}>
        <TanstackQueryWrapper>
          <ThemeProvider
            attribute="class"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <div className="py-16">{children}</div>
          </ThemeProvider>
        </TanstackQueryWrapper>
      </body>
    </html>
  );
}
