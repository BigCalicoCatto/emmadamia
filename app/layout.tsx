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
  title: "Emma Damia - Fashion, Skincare & Beauty",
  description: "Fashion, Skincare and Beauty Enthusiast. Discover my latest work and collaborations.",
  openGraph: {
    title: "Emma Damia - Fashion, Skincare & Beauty",
    description: "Fashion, Skincare and Beauty Enthusiast. Discover my latest work and collaborations.",
    url: "https://emmadamia.vercel.app",
    type: "website",
    images: [
      {
        url: "https://emmadamia.vercel.app/dp.jpg",
        width: 1200,
        height: 630,
        alt: "Emma Damia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emma Damia - Fashion, Skincare & Beauty",
    description: "Fashion, Skincare and Beauty Enthusiast. Discover my latest work and collaborations.",
    images: ["https://emmadamia.vercel.app/dp.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
