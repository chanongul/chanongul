import type { Metadata } from "next";
import { Fira_Code, Platypi, Borel } from "next/font/google";
import LocalFont from "next/font/local";
import ThemeProvider from "@/app/theme-provider";
import "@/app/global.css";

export const metadata: Metadata = {
  title: "Chanon Gulgattimas",
  description: "2024 Portfolio of Chanon Gulgattimas",
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <main className="min-h-dvh w-full">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
