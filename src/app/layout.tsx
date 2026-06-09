import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

import "./globals.css";

const themeScript = `
(() => {
  const savedTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  const theme = savedTheme === "light" || savedTheme === "dark"
    ? savedTheme
    : systemTheme;

  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
})();
`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...createPageMetadata(),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
