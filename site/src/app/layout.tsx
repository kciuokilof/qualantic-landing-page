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
    "Text data correctness can’t rely only on rule-based or aggregate checks. Qualantic scans your text columns record by record at scale and points you to the rows that shouldn’t exist in production.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://qualantic.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Qualantic — Find Broken Records Your Data Quality Tools Miss",
    description:
      "ML + AI scans millions of text records to find semantic errors invisible to schema checks and distribution monitoring. 99% precision. Results in 5 days.",
    type: "website",
    url: "https://qualantic.com",
    siteName: "Qualantic",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Qualantic",
      url: "https://qualantic.com",
      logo: "https://qualantic.com/new_logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        email: "contact@qualantic.com",
        contactType: "sales",
      },
    },
    {
      "@type": "Service",
      name: "Pilot Data Scan",
      provider: {
        "@type": "Organization",
        name: "Qualantic",
      },
      description:
        "ML + AI scans millions of text records to find semantic errors invisible to schema checks and distribution monitoring. One dataset, up to 3 text columns, up to 2M unique records. Full anomaly report with clustered findings and 30-min walkthrough call.",
      offers: {
        "@type": "Offer",
        price: "3000",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
