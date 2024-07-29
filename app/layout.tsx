import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

import Header from "./components/widgets/Header";
import Footer from "./components/widgets/Footer";

const worksans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Annemarillis Invest',
  description: 'At Annemarillis Invest, we leverage over 25 years of experience in Management Consulting, Investment Strategy, M&A, Corporate Finance, and Social Entrepreneurship to provide family office services.',
  openGraph: {
    type: 'website',
    title: "Annemarillis Invest",
    siteName: "Annemarillis Invest",
    description: "At Annemarillis Invest, we leverage over 25 years of experience in Management Consulting, Investment Strategy, M&A, Corporate Finance, and Social Entrepreneurship to provide family office services.",
    url: "https://annemarillis.com",
    images: [{
      url: "https://annemarillis.com/og-image.png",
    }],
  },
  twitter: {
    card: "summary_large_image",
    "images": "https://annemarillis.com/og-image.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={worksans.className}>
        <Header />
        <div className="container mx-auto pl-5 pr-5 lg:pr-10 lg:pl-10 md:pr-10 md:pl-10">
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
