import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eduardo Vedes' Site",
  description: "Eduardo Vedes' Site",
  metadataBase: new URL("https://eduardovedes.com"),
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Eduardo Vedes' Site",
    description: "Eduardo Vedes' Site",
    url: "https://eduardovedes.com",
    siteName: "Eduardo Vedes' Site",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduardo Vedes' Site",
    description: "Eduardo Vedes' Site",
    creator: "@eduardovedes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
