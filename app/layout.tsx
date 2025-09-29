import { ThemeProvider } from "@/components/theme-provider";
import { queryClient } from "@/providers/queryProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import type React from "react";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "ইসলামিক জ্ঞান ভাগাভাগি | Islamic Knowledge Sharing",
  description:
    "বাংলা ইসলামিক ব্লগ - কুরআন, হাদিস, ইসলামিক ইতিহাস এবং জ্ঞান ভাগাভাগির জন্য",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={null}>
            <ThemeProvider>{children}</ThemeProvider>
          </Suspense>
        </QueryClientProvider>
      </body>
    </html>
  );
}
