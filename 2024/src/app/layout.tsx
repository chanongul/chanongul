import type { Metadata } from "next";
import ThemeProvider from "@/app/theme-provider";
import "@/app/global.css";

export const metadata: Metadata = {
  title: "Chanon Gulgattimas",
  description: "2024 Portfolio of Chanon Gulgattimas",
  icons: {
    icon: "/icons/favicon.ico",
  },
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
