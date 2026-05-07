import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "A.P. - Impex | Import & Export Solutions",
    template: "%s | A.P. - Impex",
  },
  description:
    "Your trusted partner in global business. We connect markets, move goods, and create value across borders — global network, reliable services, customs clearance, supply chain management, and on-time delivery.",
  applicationName: "A.P. - Impex",
  keywords: [
    "import",
    "export",
    "global trade",
    "international logistics",
    "customs clearance",
    "supply chain management",
    "freight",
    "transport",
  ],
  authors: [{ name: "Vitalii Pronin" }],
  creator: "A.P. - Impex",
  publisher: "A.P. - Impex",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    title: "A.P. - Impex | Import & Export Solutions",
    description:
      "Your trusted partner in global business. We connect markets, move goods, and create value across borders.",
    images: [
      {
        url: "/image_2026-05-02_05-27-24.png",
        width: 1098,
        height: 717,
        alt: "A.P. - Impex | Import & Export Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A.P. - Impex | Import & Export Solutions",
    description:
      "Your trusted partner in global business. We connect markets, move goods, and create value across borders.",
    images: ["/image_2026-05-02_05-27-24.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
