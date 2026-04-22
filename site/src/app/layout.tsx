import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "@/lib/posthog-provider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qualantic — Find Broken Records Your Data Quality Tools Miss",
  description:
    "ML + AI scans millions of text records to find semantic errors invisible to schema checks and distribution monitoring. 99% precision. Results in 5 days. Starting at $3,500.",
  openGraph: {
    title: "Qualantic — Find Broken Records Your Data Quality Tools Miss",
    description:
      "ML + AI scans millions of text records to find semantic errors invisible to schema checks and distribution monitoring. 99% precision. Results in 5 days.",
    type: "website",
    url: "https://qualantic.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
