import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { siteConfig } from "@/app/config/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased relative min-h-screen bg-bg-base`}
      >
        {/* The Blueprint Background Layer */}
        <div className='pointer-events-none fixed inset-0 z-0 blueprint-grid opacity-[0.45]' />

        {/* Soft Spotlight Glow for depth */}
        <div className='pointer-events-none fixed inset-0 z-0'>
          <div className='absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-accent-terracotta/5 blur-[120px]' />
          <div className='absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-accent-olive/5 blur-[120px]' />
        </div>

        {/* The Content Layer */}
        <div className='relative z-10'>{children}</div>
      </body>
    </html>
  );
}
