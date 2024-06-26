import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/app/theme-provider";
import "@/app/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chanon Gulgattimas",
  description: "2024 Portfolio of Chanon Gulgattimas",
  icons: {
    icon: "/icons/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <main className="min-h-dvh w-full">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
