import { Header } from "@/components/header";
import "@/styles/globals.css";

import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bottle | 보틀",
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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="my-16">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
