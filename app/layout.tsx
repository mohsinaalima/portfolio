import type { Metadata } from "next";
import { siteConfig } from "@/app/config/site";
import "./globals.css";

export const metadata: Metadata = {
  ...(siteConfig.url ? { metadataBase: new URL(siteConfig.url) } : {}),
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    ...(siteConfig.url ? { url: siteConfig.url } : {}),
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
