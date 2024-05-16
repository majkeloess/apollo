import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Apollo",
    default: "Apollo",
  },
  description: "Become a legend. Discover a smarter stronger you.",
  metadataBase: new URL("https://apollo.majkeloess.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
