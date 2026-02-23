import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReset from "@/components/ScrollReset";
import HelpChatbot from "@/components/HelpChatbot";
import StickyBanner from "@/components/StickyBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "eIDAS 2.0 Readiness Check | Is Your Organization Prepared?",
    template: "%s | eIDAS 2.0 Readiness",
  },
  description:
    "Free assessment tool to evaluate your organization's preparedness for eIDAS 2.0 and the EU Digital Identity Wallet.",
  keywords: [
    "eIDAS 2.0",
    "digital identity",
    "European Digital Identity Wallet",
    "EUDIW",
    "compliance",
    "readiness assessment",
    "trust services",
    "electronic signatures",
    "EU regulation",
    "identity wallet",
  ],
  metadataBase: new URL("https://eidas-readiness.eu"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "eIDAS 2.0 Readiness",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "eIDAS 2.0 Readiness: Is your organisation ready?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <GoogleAnalytics />
      </head>
      <body className="font-sans antialiased">
        <ScrollReset />
        <Header />
        <main className="pt-16 md:pt-[100px]">{children}</main>
        <Footer />
        <StickyBanner />
        <HelpChatbot />
      </body>
    </html>
  );
}
