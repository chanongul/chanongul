import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "@/app/global.css";
import { ReactNode } from "react";

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
    <html lang="en">
      <body className={`${inter.className} ${dmSerifDisplay.variable}`}>
        {children}
      </body>
    </html>
  );
}
