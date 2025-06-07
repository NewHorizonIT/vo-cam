import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Vô Cảm Learning - Tìm hiểu về tâm lý học vô cảm",
    template: "%s | Vô Cảm Learning",
  },
  description:
    "Khám phá thế giới tâm lý học về vô cảm thông qua các bài học, quiz và đánh giá kiến thức",
  keywords: ["tâm lý học", "vô cảm", "apathy", "học tập", "quiz", "giáo dục"],
  authors: [{ name: "Vô Cảm Team" }],
  creator: "Vô Cảm",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://vocam-learning.com",
    title: "Vô Cảm Learning - Tìm hiểu về tâm lý học vô cảm",
    description:
      "Khám phá thế giới tâm lý học về vô cảm thông qua các bài học, quiz và đánh giá kiến thức",
    siteName: "Vô Cảm ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vô Cảm - Tìm hiểu về tâm lý học vô cảm",
    description:
      "Khám phá thế giới tâm lý học về vô cảm thông qua các bài học, quiz và đánh giá kiến thức",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
