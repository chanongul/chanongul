import { ReactNode } from "react";
import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import ThemeProvider from "@/app/theme-provider";
import "@/app/global.css";

const inter = Inter({ subsets: ["latin"] });
const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif-display",
});

export const metadata: Metadata = {
  title: "Chanon | Portfolio 2024",
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
      <body className={`${inter.className} ${dmSerifDisplay.variable}`}>
        <ThemeProvider>
          <main className="min-h-dvh w-full">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
