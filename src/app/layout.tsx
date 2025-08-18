import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  display: "swap"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-16x16.png",
      },
      {
        rel: "icon",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  title: "✨Laurent Maxhuni | Full Stack Developer ✨",
  description:
    "A 15 year old full stack developer from Kosovo, with a single goal: to help humanity achieve its full potential.",
  applicationName: "Laurent Maxhuni - Portfolio",
  keywords: [
    "full stack developer",
    "web developer",
    "software engineer",
    "kosovo",
    "laurent maxhuni",
    "portfolio",
    "developer",
    "programmer",
  ],
  verification: {
    google: "",
    other: {},
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${interSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute={"class"}
          enableSystem
          disableTransitionOnChange
          defaultTheme="system"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
